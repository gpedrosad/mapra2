import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { buildCloudinaryImageUrl } from "./cloudinary";
import {
  getManagedImageSectionDefinition,
  MANAGED_IMAGE_SECTIONS,
  type ManagedImageSectionDefinition,
} from "./managed-image-registry";

type ManagedImageOverride = {
  publicId?: string;
  alt?: string;
  info?: string;
};

type ManagedImageOverrides = Record<string, ManagedImageOverride>;

type ManagedGalleryExtraRecord = {
  id: string;
  label: string;
  publicId: string;
  alt: string;
  info: string;
};

type ManagedImageData = {
  sections: ManagedImageOverrides;
  galleryExtras: ManagedGalleryExtraRecord[];
  gresExtras: ManagedGalleryExtraRecord[];
};

export type ManagedImageSection = ManagedImageSectionDefinition & {
  publicId: string;
  alt: string;
  info?: string;
  previewUrl: string;
  isExtra?: boolean;
  /** Ranuras catálogo fijas (`gallery.*`, `gres.*`): hay fila en JSON y se muestra en su página. */
  publishedToGallery?: boolean;
};

/** Respuesta al panel admin: sin identificadores de Cloudinary ni texto alternativo editable. */
export type ManagedImageSectionAdminJson = Omit<
  ManagedImageSection,
  "publicId" | "defaultPublicId" | "alt"
>;

export function toManagedImageSectionAdminJson(
  section: ManagedImageSection
): ManagedImageSectionAdminJson {
  const { publicId: _p, defaultPublicId: _d, alt: _a, ...rest } = section;
  void _p;
  void _d;
  void _a;
  return rest;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "managed-images.json");

/** JSON de estado junto a las imágenes en Cloudinary (`raw`). */
const MANAGED_JSON_PUBLIC_ID = "mapra/managed/site-images-data";

function shouldPersistManagedImagesInCloudinary(): boolean {
  if (
    !process.env.CLOUDINARY_API_KEY?.trim() ||
    !process.env.CLOUDINARY_API_SECRET?.trim()
  ) {
    return false;
  }
  if (
    !process.env.CLOUDINARY_CLOUD_NAME?.trim() &&
    !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim()
  ) {
    return false;
  }
  return (
    process.env.VERCEL === "1" ||
    process.env.MANAGED_IMAGES_CLOUDINARY === "1"
  );
}

async function readDataFromCloudinary(): Promise<ManagedImageData | null> {
  const cloud_name =
    process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const api_key = process.env.CLOUDINARY_API_KEY;
  const api_secret = process.env.CLOUDINARY_API_SECRET;
  if (!cloud_name || !api_key || !api_secret) {
    return null;
  }

  const { v2: cloudinary } = await import("cloudinary");
  cloudinary.config({ cloud_name, api_key, api_secret });

  try {
    const resource = await cloudinary.api.resource(MANAGED_JSON_PUBLIC_ID, {
      resource_type: "raw",
    });
    const url = resource.secure_url;
    if (typeof url !== "string" || !url) {
      return null;
    }
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return null;
    }
    return normalizeData(JSON.parse(await res.text()));
  } catch {
    return null;
  }
}

async function writeDataToCloudinary(data: ManagedImageData): Promise<void> {
  const cloud_name =
    process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const api_key = process.env.CLOUDINARY_API_KEY;
  const api_secret = process.env.CLOUDINARY_API_SECRET;
  if (!cloud_name || !api_key || !api_secret) {
    throw new Error(
      "Cloudinary no está configurado (CLOUDINARY_CLOUD_NAME, API_KEY, API_SECRET)."
    );
  }

  const { v2: cloudinary } = await import("cloudinary");
  cloudinary.config({ cloud_name, api_key, api_secret });

  const json = JSON.stringify(data, null, 2);
  const dataUri = `data:application/json;base64,${Buffer.from(json, "utf8").toString("base64")}`;

  await cloudinary.uploader.upload(dataUri, {
    resource_type: "raw",
    public_id: MANAGED_JSON_PUBLIC_ID,
    overwrite: true,
    invalidate: true,
  });
}

async function readDataFromFile(): Promise<ManagedImageData> {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    return normalizeData(JSON.parse(raw));
  } catch {
    return defaultData();
  }
}

async function writeDataToFile(data: ManagedImageData): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function defaultOverrides(): ManagedImageOverrides {
  return Object.fromEntries(
    MANAGED_IMAGE_SECTIONS.filter(
      (section) =>
        !section.id.startsWith("gallery.") && !section.id.startsWith("gres.")
    ).map((section) => [
      section.id,
      {
        publicId: section.defaultPublicId,
        alt: section.defaultAlt,
        info: section.defaultInfo,
      },
    ])
  );
}

/** Quita flags viejos y trata “oculta” como borrado de ranura en galería. */
function migrateSections(raw: ManagedImageOverrides): ManagedImageOverrides {
  const next: ManagedImageOverrides = { ...raw };

  for (const id of Object.keys(next)) {
    const entry = next[id];
    if (!entry || typeof entry !== "object") {
      continue;
    }

    const legacy = entry as ManagedImageOverride & { hiddenInGallery?: boolean };
    if (
      legacy.hiddenInGallery &&
      (id.startsWith("gallery.") || id.startsWith("gres."))
    ) {
      delete next[id];
      continue;
    }

    if ("hiddenInGallery" in legacy) {
      const rest = { ...legacy };
      delete (rest as { hiddenInGallery?: boolean }).hiddenInGallery;
      next[id] = rest;
    }
  }

  return next;
}

function defaultData(): ManagedImageData {
  return {
    sections: defaultOverrides(),
    galleryExtras: [],
    gresExtras: [],
  };
}

function normalizeExtras(
  raw: unknown
): ManagedGalleryExtraRecord[] {
  return Array.isArray(raw)
    ? raw.filter(
        (item): item is ManagedGalleryExtraRecord =>
          Boolean(
            item &&
              typeof item === "object" &&
              "id" in item &&
              "publicId" in item
          )
      )
    : [];
}

function normalizeData(raw: unknown): ManagedImageData {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return defaultData();
  }

  if (
    "sections" in raw ||
    "galleryExtras" in raw ||
    "gresExtras" in raw
  ) {
    const parsed = raw as Partial<ManagedImageData>;

    return {
      sections:
        parsed.sections && typeof parsed.sections === "object" && !Array.isArray(parsed.sections)
          ? migrateSections(parsed.sections as ManagedImageOverrides)
          : defaultOverrides(),
      galleryExtras: normalizeExtras(parsed.galleryExtras),
      gresExtras: normalizeExtras(parsed.gresExtras),
    };
  }

  return {
    sections: migrateSections(raw as ManagedImageOverrides),
    galleryExtras: [],
    gresExtras: [],
  };
}

async function readData(): Promise<ManagedImageData> {
  if (shouldPersistManagedImagesInCloudinary()) {
    const fromCloud = await readDataFromCloudinary();
    if (fromCloud) {
      return fromCloud;
    }
    return readDataFromFile();
  }

  return readDataFromFile();
}

async function writeData(data: ManagedImageData) {
  if (shouldPersistManagedImagesInCloudinary()) {
    await writeDataToCloudinary(data);
    return;
  }

  await writeDataToFile(data);
}

function hydrateSection(
  definition: ManagedImageSectionDefinition,
  override?: ManagedImageOverride
): ManagedImageSection {
  const publicId = override?.publicId?.trim() || definition.defaultPublicId;
  const alt = override?.alt?.trim() || definition.defaultAlt;
  const info = override?.info?.trim() || definition.defaultInfo;

  return {
    ...definition,
    publicId,
    alt,
    info,
    previewUrl: buildCloudinaryImageUrl(publicId),
  };
}

function hydrateSectionForAdmin(
  definition: ManagedImageSectionDefinition,
  data: ManagedImageData
): ManagedImageSection {
  const override = data.sections[definition.id];

  if (definition.id.startsWith("gallery.") || definition.id.startsWith("gres.")) {
    if (override === undefined) {
      return {
        ...definition,
        publicId: "",
        alt: "",
        info: definition.defaultInfo || "",
        previewUrl: "",
        publishedToGallery: false,
      };
    }

    return {
      ...hydrateSection(definition, override),
      publishedToGallery: true,
    };
  }

  return hydrateSection(definition, override);
}

function hydrateGalleryExtra(
  record: ManagedGalleryExtraRecord
): ManagedImageSection {
  return {
    id: record.id,
    group: "Galería",
    label: record.label,
    defaultPublicId: record.publicId,
    defaultAlt: record.alt,
    defaultInfo: record.info,
    paths: ["/pinturas"],
    publicId: record.publicId,
    alt: record.alt,
    info: record.info,
    previewUrl: buildCloudinaryImageUrl(record.publicId),
    isExtra: true,
  };
}

function hydrateGresExtra(
  record: ManagedGalleryExtraRecord
): ManagedImageSection {
  return {
    id: record.id,
    group: "Cerámica gres",
    label: record.label,
    defaultPublicId: record.publicId,
    defaultAlt: record.alt,
    defaultInfo: record.info,
    paths: ["/esculturas"],
    publicId: record.publicId,
    alt: record.alt,
    info: record.info,
    previewUrl: buildCloudinaryImageUrl(record.publicId),
    isExtra: true,
  };
}

function getFixedGalleryDefinitions() {
  return MANAGED_IMAGE_SECTIONS.filter((section) => section.id.startsWith("gallery."));
}

function getFixedGresDefinitions() {
  return MANAGED_IMAGE_SECTIONS.filter((section) => section.id.startsWith("gres."));
}

function revalidateManagedPaths(paths: string[]) {
  for (const pagePath of paths) {
    revalidatePath(pagePath);
  }
}

export async function listManagedImageSections(options?: { includeHidden?: boolean }) {
  const data = await readData();
  const sections = MANAGED_IMAGE_SECTIONS.map((definition) =>
    hydrateSectionForAdmin(definition, data)
  );

  if (options?.includeHidden) {
    return sections;
  }

  return sections.filter((section) => !section.hiddenInAdmin);
}

export async function listAdminManagedImageSections() {
  const data = await readData();
  const fixedSections = await listManagedImageSections();
  const galleryExtras = data.galleryExtras.map(hydrateGalleryExtra);
  const gresExtras = data.gresExtras.map(hydrateGresExtra);

  return [...fixedSections, ...galleryExtras, ...gresExtras];
}

export async function getManagedImageSection(id: string) {
  noStore();
  const data = await readData();
  const definition = getManagedImageSectionDefinition(id);

  if (definition) {
    if (
      (definition.id.startsWith("gallery.") || definition.id.startsWith("gres.")) &&
      data.sections[id] === undefined
    ) {
      return null;
    }

    return hydrateSection(definition, data.sections[id]);
  }

  const galleryExtra = data.galleryExtras.find((item) => item.id === id);
  if (galleryExtra) {
    return hydrateGalleryExtra(galleryExtra);
  }

  const gresExtra = data.gresExtras.find((item) => item.id === id);
  return gresExtra ? hydrateGresExtra(gresExtra) : null;
}

export async function getManagedImageUrl(
  id: string,
  transformation = "f_auto,q_auto"
) {
  const section = await getManagedImageSection(id);

  if (!section) {
    return "";
  }

  return buildCloudinaryImageUrl(section.publicId, transformation);
}

export async function getManagedImageUrls(
  ids: string[],
  transformation = "f_auto,q_auto"
) {
  noStore();
  const sections = await listAdminManagedImageSections();
  const sectionMap = new Map(sections.map((section) => [section.id, section]));

  return Object.fromEntries(
    ids.map((id) => [
      id,
      buildCloudinaryImageUrl(sectionMap.get(id)?.publicId || "", transformation),
    ])
  );
}

export async function listGalleryArtworks() {
  noStore();
  const data = await readData();
  const fixedGallery = getFixedGalleryDefinitions()
    .filter((definition) => Boolean(data.sections[definition.id]?.publicId?.trim()))
    .map((definition) => hydrateSection(definition, data.sections[definition.id]));
  const extraGallery = data.galleryExtras
    .filter((item) => Boolean(item.publicId.trim()))
    .map(hydrateGalleryExtra);

  return [...fixedGallery, ...extraGallery]
    .map((section) => ({
      id: section.id.replace("gallery.", ""),
      imageUrl: buildCloudinaryImageUrl(section.publicId),
      info: section.info || "óleo sobre tela",
      title: section.alt,
    }))
    .filter((item) => item.imageUrl.trim() !== "");
}

export async function listGresArtworks() {
  noStore();
  const data = await readData();
  const fixedGres = getFixedGresDefinitions()
    .filter((definition) => Boolean(data.sections[definition.id]?.publicId?.trim()))
    .map((definition) => hydrateSection(definition, data.sections[definition.id]));
  const extraGres = data.gresExtras
    .filter((item) => Boolean(item.publicId.trim()))
    .map(hydrateGresExtra);

  return [...fixedGres, ...extraGres]
    .map((section) => ({
      id: section.id.replace("gres.", ""),
      imageUrl: buildCloudinaryImageUrl(section.publicId),
      info: section.info || "cerámica gres",
      title: section.alt,
    }))
    .filter((item) => item.imageUrl.trim() !== "");
}

export async function updateManagedImageSection(
  id: string,
  values: ManagedImageOverride
) {
  const data = await readData();
  const definition = getManagedImageSectionDefinition(id);

  if (definition) {
    const existing = data.sections[id];
    const isCatalogFixed =
      definition.id.startsWith("gallery.") || definition.id.startsWith("gres.");
    const mergedPublicId =
      values.publicId?.trim() || existing?.publicId?.trim() || "";

    if (isCatalogFixed && !mergedPublicId) {
      throw new Error("Sube una imagen en esta ranura antes de guardar los textos.");
    }

    const publicId = mergedPublicId || definition.defaultPublicId;

    data.sections[id] = {
      publicId,
      alt:
        values.alt !== undefined && values.alt !== null
          ? values.alt.trim() || definition.defaultAlt
          : (existing?.alt?.trim() || definition.defaultAlt),
      info:
        values.info !== undefined
          ? values.info.trim() || definition.defaultInfo || ""
          : (existing?.info?.trim() ?? definition.defaultInfo ?? ""),
    };

    await writeData(data);
    revalidateManagedPaths(definition.paths);
    return hydrateSectionForAdmin(definition, data);
  }

  const galleryExtraIndex = data.galleryExtras.findIndex((item) => item.id === id);

  if (galleryExtraIndex !== -1) {
    const current = data.galleryExtras[galleryExtraIndex];
    data.galleryExtras[galleryExtraIndex] = {
      ...current,
      publicId: values.publicId?.trim() || current.publicId,
      alt:
        values.alt !== undefined && values.alt !== null
          ? values.alt.trim() || current.alt
          : current.alt,
      info: values.info?.trim() || current.info,
    };

    await writeData(data);
    revalidateManagedPaths(["/pinturas"]);
    return hydrateGalleryExtra(data.galleryExtras[galleryExtraIndex]);
  }

  const gresExtraIndex = data.gresExtras.findIndex((item) => item.id === id);

  if (gresExtraIndex === -1) {
    throw new Error("Sección de imagen no encontrada.");
  }

  const gresCurrent = data.gresExtras[gresExtraIndex];
  data.gresExtras[gresExtraIndex] = {
    ...gresCurrent,
    publicId: values.publicId?.trim() || gresCurrent.publicId,
    alt:
      values.alt !== undefined && values.alt !== null
        ? values.alt.trim() || gresCurrent.alt
        : gresCurrent.alt,
    info: values.info?.trim() || gresCurrent.info,
  };

  await writeData(data);
  revalidateManagedPaths(["/esculturas"]);
  return hydrateGresExtra(data.gresExtras[gresExtraIndex]);
}

export async function createManagedGalleryExtra(values: {
  publicId: string;
  info?: string;
}) {
  const publicId = values.publicId.trim();

  if (!publicId) {
    throw new Error("Falta el archivo subido para registrar la foto.");
  }

  const data = await readData();
  const nextIndex = data.galleryExtras.length + 1;
  const extra: ManagedGalleryExtraRecord = {
    id: `gallery.extra.${Date.now()}`,
    label: `Pintura extra ${nextIndex}`,
    publicId,
    alt: `Pintura extra ${nextIndex} de Marcela Pedrosa`,
    info: values.info?.trim() || "óleo sobre tela",
  };

  data.galleryExtras.push(extra);
  await writeData(data);
  revalidateManagedPaths(["/pinturas"]);

  return hydrateGalleryExtra(extra);
}

export async function createManagedGresExtra(values: {
  publicId: string;
  info?: string;
}) {
  const publicId = values.publicId.trim();

  if (!publicId) {
    throw new Error("Falta el archivo subido para registrar la foto.");
  }

  const data = await readData();
  const nextIndex = data.gresExtras.length + 1;
  const extra: ManagedGalleryExtraRecord = {
    id: `gres.extra.${Date.now()}`,
    label: `Cerámica gres extra ${nextIndex}`,
    publicId,
    alt: `Pieza en gres ${nextIndex} de Marcela Pedrosa`,
    info: values.info?.trim() || "cerámica gres",
  };

  data.gresExtras.push(extra);
  await writeData(data);
  revalidateManagedPaths(["/esculturas"]);

  return hydrateGresExtra(extra);
}

export async function deleteManagedGalleryEntry(id: string) {
  const data = await readData();
  const galleryExtraIndex = data.galleryExtras.findIndex((item) => item.id === id);

  if (galleryExtraIndex !== -1) {
    const [removed] = data.galleryExtras.splice(galleryExtraIndex, 1);
    await writeData(data);
    revalidateManagedPaths(["/pinturas"]);

    return {
      kind: "extra" as const,
      removed: { id: removed.id, label: removed.label },
    };
  }

  const gresExtraIndex = data.gresExtras.findIndex((item) => item.id === id);

  if (gresExtraIndex !== -1) {
    const [removed] = data.gresExtras.splice(gresExtraIndex, 1);
    await writeData(data);
    revalidateManagedPaths(["/esculturas"]);

    return {
      kind: "extra" as const,
      removed: { id: removed.id, label: removed.label },
    };
  }

  const definition = getManagedImageSectionDefinition(id);

  if (
    !definition?.id.startsWith("gallery.") &&
    !definition?.id.startsWith("gres.")
  ) {
    throw new Error(
      "Solo se pueden eliminar obras de pinturas o cerámica gres (ranuras fijas o extras)."
    );
  }

  if (data.sections[id] === undefined) {
    throw new Error("Esta ranura ya no está guardada en la base de datos.");
  }

  delete data.sections[id];
  await writeData(data);
  revalidateManagedPaths(definition.paths);

  return {
    kind: "fixed" as const,
    removed: { id: definition.id, label: definition.label },
    section: hydrateSectionForAdmin(definition, data),
  };
}
