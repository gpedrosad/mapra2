import {
  ARTWORK_SLUGS,
  LEGACY_ARTWORK_PATHS,
  resolveGallerySlot,
  type ArtworkMotif,
} from "@/lib/artwork-slugs";
import { getImagePixels, resolveManagedImageUrl } from "@/lib/cloudinary";
import { listGalleryCatalogSources } from "@/lib/managed-image-store";
import { TITLE as OFFER_TITLE } from "@/lib/monthly-offer";

export type CatalogArtwork = {
  id: string;
  slug: string;
  name: string;
  alt: string;
  imageUrl: string;
  publicId: string;
  /** Texto de ficha tal como está en el catálogo, p. ej. "158x122 óleo sobre tela". */
  info: string;
  /** Medio, solo si viene en `info`. */
  medium?: string;
  /** Medidas tal como están escritas (sin inventar unidad). */
  measure?: string;
  pixelWidth?: number;
  pixelHeight?: number;
};

export function parseArtworkInfo(info: string): {
  medium?: string;
  measure?: string;
} {
  const trimmed = info.trim();
  const match = trimmed.match(/^(\d+)\s*[x×]\s*(\d+)\s*(.*)$/i);
  if (!match) {
    return { medium: trimmed || undefined };
  }
  const medium = match[3].trim();
  return {
    measure: `${match[1]}×${match[2]}`,
    medium: medium || undefined,
  };
}

function slugFromId(id: string) {
  return id
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Nunca el slug corto cN: esa URL es un 301 al slug descriptivo. */
function fallbackSlug(id: string) {
  const raw = slugFromId(id);
  if (LEGACY_ARTWORK_PATHS.has(`/pinturas/${raw}`)) return `obra-${raw}`;
  return raw;
}

function artworkFromMotif(
  motif: ArtworkMotif,
  info: string,
  imageUrl: string,
): CatalogArtwork {
  const parsed = parseArtworkInfo(info);
  const pixels = getImagePixels(motif.publicId);
  const name =
    motif.publicId === "elefante_l0mpmz" ? OFFER_TITLE : motif.name;
  const alt = parsed.medium
    ? `${name}, ${parsed.medium} de Marcela Pedrosa`
    : `${name} de Marcela Pedrosa`;

  return {
    id: motif.id,
    slug: motif.slug,
    name,
    alt,
    imageUrl,
    publicId: motif.publicId,
    info: info.trim() || "óleo sobre tela",
    medium: parsed.medium,
    measure: parsed.measure,
    pixelWidth: pixels?.width,
    pixelHeight: pixels?.height,
  };
}

export async function listCatalogArtworks(): Promise<CatalogArtwork[]> {
  const items = await listGalleryCatalogSources();
  const works: CatalogArtwork[] = [];
  const seen = new Set<string>();

  const push = (work: CatalogArtwork) => {
    if (seen.has(work.slug)) return;
    if (LEGACY_ARTWORK_PATHS.has(`/pinturas/${work.slug}`)) return;
    seen.add(work.slug);
    works.push(work);
  };

  for (const item of items) {
    const { documented, published } = resolveGallerySlot(item.id, item.publicId);

    if (documented) {
      const imageUrl = resolveManagedImageUrl(documented.publicId);
      if (imageUrl) push(artworkFromMotif(documented, "óleo sobre tela", imageUrl));
    }

    if (published) {
      push(artworkFromMotif(published, item.info, item.imageUrl));
      continue;
    }

    if (documented) {
      const slug = fallbackSlug(item.id);
      const parsed = parseArtworkInfo(item.info);
      const pixels = getImagePixels(item.publicId);
      const name = `Pintura ${item.id}`;
      push({
        id: `obra-${item.id}`,
        slug,
        name,
        alt: item.alt?.trim() || `${name} de Marcela Pedrosa`,
        imageUrl: item.imageUrl,
        publicId: item.publicId,
        info: item.info,
        medium: parsed.medium,
        measure: parsed.measure,
        pixelWidth: pixels?.width,
        pixelHeight: pixels?.height,
      });
      continue;
    }

    const parsed = parseArtworkInfo(item.info);
    const pixels = getImagePixels(item.publicId);
    const name = `Pintura ${item.id}`;
    push({
      id: item.id,
      slug: fallbackSlug(item.id),
      name,
      alt: item.alt?.trim() || `${name} de Marcela Pedrosa`,
      imageUrl: item.imageUrl,
      publicId: item.publicId,
      info: item.info,
      medium: parsed.medium,
      measure: parsed.measure,
      pixelWidth: pixels?.width,
      pixelHeight: pixels?.height,
    });
  }

  for (const motif of ARTWORK_SLUGS) {
    if (seen.has(motif.slug)) continue;
    const imageUrl = resolveManagedImageUrl(motif.publicId);
    if (!imageUrl) continue;
    push(artworkFromMotif(motif, "óleo sobre tela", imageUrl));
  }

  return works;
}

export async function getCatalogArtwork(slug: string) {
  const works = await listCatalogArtworks();
  return works.find((work) => work.slug === slug) ?? null;
}
