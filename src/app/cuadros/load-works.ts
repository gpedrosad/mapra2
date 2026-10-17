import { getSiteImageUrl } from "@/lib/cloudinary";
import { listGalleryArtworks } from "@/lib/managed-image-store";
import { CATALOG, type CatalogWork } from "./catalog";

export type CuadroWork = CatalogWork & {
  imageUrl: string;
};

/**
 * Cruza la galería viva con el catálogo del repo.
 * Si Cloudinary no está en el entorno, usa la imagen local de /public.
 */
export async function loadWorks(ids: string[]): Promise<CuadroWork[]> {
  let live: Awaited<ReturnType<typeof listGalleryArtworks>> = [];
  try {
    live = await listGalleryArtworks();
  } catch {
    live = [];
  }

  const byId = new Map(live.map((item) => [item.id, item]));
  const works: CuadroWork[] = [];

  for (const id of ids) {
    const spec = CATALOG[id];
    if (!spec) continue;

    const item = byId.get(id);
    const imageUrl = item?.imageUrl?.trim() || getSiteImageUrl(spec.imageKey);
    if (!imageUrl) continue;

    works.push({
      ...spec,
      imageUrl,
      info: item?.info?.trim() || spec.info,
    });
  }

  return works;
}
