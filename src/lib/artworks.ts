import { getImagePixels } from "@/lib/cloudinary";
import { listGalleryArtworks } from "@/lib/managed-image-store";
import { TITLE as OFFER_TITLE } from "@/lib/monthly-offer";

/**
 * Nombre propio solo cuando el repo ya lo publica.
 * Elefante es la obra de la oferta del mes y la ranura gallery.c3 (mismo public id).
 */
const NAMED_BY_PUBLIC_ID: Record<string, { slug: string; name: string }> = {
  elefante_l0mpmz: { slug: "elefante", name: OFFER_TITLE },
};

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

export async function listCatalogArtworks(): Promise<CatalogArtwork[]> {
  const items = await listGalleryArtworks();

  return items.map((item) => {
    const named = NAMED_BY_PUBLIC_ID[item.publicId];
    const parsed = parseArtworkInfo(item.info);
    const pixels = getImagePixels(item.publicId);
    const name = named?.name || `Pintura ${item.id}`;
    const alt = named
      ? parsed.medium
        ? `${named.name}, ${parsed.medium} de Marcela Pedrosa`
        : `${named.name} de Marcela Pedrosa`
      : item.alt?.trim() || `${name} de Marcela Pedrosa`;

    return {
      id: item.id,
      slug: named?.slug || slugFromId(item.id),
      name,
      alt,
      imageUrl: item.imageUrl,
      publicId: item.publicId,
      info: item.info,
      medium: parsed.medium,
      measure: parsed.measure,
      pixelWidth: pixels?.width,
      pixelHeight: pixels?.height,
    };
  });
}

export async function getCatalogArtwork(slug: string) {
  const works = await listCatalogArtworks();
  return works.find((work) => work.slug === slug) ?? null;
}
