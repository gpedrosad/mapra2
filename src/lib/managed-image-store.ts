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
};

export type ManagedImageSection = ManagedImageSectionDefinition & {
  publicId: string;
  alt: string;
  info?: string;
  previewUrl: string;
  isExtra?: boolean;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "managed-images.json");

function defaultOverrides(): ManagedImageOverrides {
  return Object.fromEntries(
    MANAGED_IMAGE_SECTIONS.map((section) => [
      section.id,
      {
        publicId: section.defaultPublicId,
        alt: section.defaultAlt,
        info: section.defaultInfo,
      },
    ])
  );
}

function defaultData(): ManagedImageData {
  return {
    sections: defaultOverrides(),
    galleryExtras: [],
  };
}

function normalizeData(raw: unknown): ManagedImageData {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return defaultData();
  }

  if ("sections" in raw || "galleryExtras" in raw) {
    const parsed = raw as Partial<ManagedImageData>;

    return {
      sections:
        parsed.sections && typeof parsed.sections === "object" && !Array.isArray(parsed.sections)
          ? parsed.sections
          : defaultOverrides(),
      galleryExtras: Array.isArray(parsed.galleryExtras)
        ? parsed.galleryExtras.filter(
            (item): item is ManagedGalleryExtraRecord =>
              Boolean(
                item &&
                  typeof item === "object" &&
                  "id" in item &&
                  "publicId" in item
              )
          )
        : [],
    };
  }

  return {
    sections: raw as ManagedImageOverrides,
    galleryExtras: [],
  };
}

async function ensureDataFile() {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    await readFile(DATA_FILE, "utf8");
  } catch {
    await writeFile(DATA_FILE, JSON.stringify(defaultData(), null, 2) + "\n", "utf8");
  }
}

async function readData(): Promise<ManagedImageData> {
  await ensureDataFile();

  try {
    const raw = await readFile(DATA_FILE, "utf8");
    return normalizeData(JSON.parse(raw));
  } catch {
    return defaultData();
  }
}

async function writeData(data: ManagedImageData) {
  await ensureDataFile();
  await writeFile(DATA_FILE, JSON.stringify(data, null, 2) + "\n", "utf8");
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

function getFixedGalleryDefinitions() {
  return MANAGED_IMAGE_SECTIONS.filter((section) => section.id.startsWith("gallery."));
}

function revalidateManagedPaths(paths: string[]) {
  for (const pagePath of paths) {
    revalidatePath(pagePath);
  }
}

export async function listManagedImageSections(options?: { includeHidden?: boolean }) {
  const data = await readData();
  const sections = MANAGED_IMAGE_SECTIONS.map((definition) =>
    hydrateSection(definition, data.sections[definition.id])
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

  return [...fixedSections, ...galleryExtras];
}

export async function getManagedImageSection(id: string) {
  noStore();
  const data = await readData();
  const definition = getManagedImageSectionDefinition(id);

  if (definition) {
    return hydrateSection(definition, data.sections[id]);
  }

  const extra = data.galleryExtras.find((item) => item.id === id);
  return extra ? hydrateGalleryExtra(extra) : null;
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
  const fixedGallery = getFixedGalleryDefinitions().map((definition) =>
    hydrateSection(definition, data.sections[definition.id])
  );
  const extraGallery = data.galleryExtras.map(hydrateGalleryExtra);

  return [...fixedGallery, ...extraGallery].map((section) => ({
    id: section.id.replace("gallery.", ""),
    imageUrl: buildCloudinaryImageUrl(section.publicId),
    info: section.info || "óleo sobre tela",
    title: section.alt,
  }));
}

export async function updateManagedImageSection(
  id: string,
  values: ManagedImageOverride
) {
  const data = await readData();
  const definition = getManagedImageSectionDefinition(id);

  if (definition) {
    data.sections[id] = {
      publicId: values.publicId?.trim() || definition.defaultPublicId,
      alt: values.alt?.trim() || definition.defaultAlt,
      info: values.info?.trim() || definition.defaultInfo,
    };

    await writeData(data);
    revalidateManagedPaths(definition.paths);
    return hydrateSection(definition, data.sections[id]);
  }

  const extraIndex = data.galleryExtras.findIndex((item) => item.id === id);

  if (extraIndex === -1) {
    throw new Error("Sección de imagen no encontrada.");
  }

  const current = data.galleryExtras[extraIndex];
  data.galleryExtras[extraIndex] = {
    ...current,
    publicId: values.publicId?.trim() || current.publicId,
    alt: values.alt?.trim() || current.alt,
    info: values.info?.trim() || current.info,
  };

  await writeData(data);
  revalidateManagedPaths(["/pinturas"]);
  return hydrateGalleryExtra(data.galleryExtras[extraIndex]);
}

export async function createManagedGalleryExtra(values: {
  publicId: string;
  alt?: string;
  info?: string;
}) {
  const publicId = values.publicId.trim();

  if (!publicId) {
    throw new Error("Debes indicar un public ID para agregar la foto.");
  }

  const data = await readData();
  const nextIndex = data.galleryExtras.length + 1;
  const extra: ManagedGalleryExtraRecord = {
    id: `gallery.extra.${Date.now()}`,
    label: `Pintura extra ${nextIndex}`,
    publicId,
    alt: values.alt?.trim() || `Pintura extra ${nextIndex} de Marcela Pedrosa`,
    info: values.info?.trim() || "óleo sobre tela",
  };

  data.galleryExtras.push(extra);
  await writeData(data);
  revalidateManagedPaths(["/pinturas"]);

  return hydrateGalleryExtra(extra);
}

export async function deleteManagedGalleryExtra(id: string) {
  const data = await readData();
  const extraIndex = data.galleryExtras.findIndex((item) => item.id === id);

  if (extraIndex === -1) {
    throw new Error("Solo se pueden eliminar fotos extra de la galería.");
  }

  const [removed] = data.galleryExtras.splice(extraIndex, 1);
  await writeData(data);
  revalidateManagedPaths(["/pinturas"]);

  return {
    id: removed.id,
    label: removed.label,
  };
}
