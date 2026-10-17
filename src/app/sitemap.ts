import { MetadataRoute } from "next";
import { listCatalogArtworks } from "@/lib/artworks";
import { SITEMAP_ROUTES } from "@/lib/seo-routes";
import { absoluteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = await listCatalogArtworks();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = SITEMAP_ROUTES.map((route) => ({
    url: route.path === "/" ? absoluteUrl("/") : absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const artworkRoutes: MetadataRoute.Sitemap = works.map((work) => ({
    url: absoluteUrl(`/pinturas/${work.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...artworkRoutes];
}
