import { MetadataRoute } from "next";
import { listCatalogArtworks } from "@/lib/artworks";
import { SEO_GUIDES } from "@/lib/seo-guides";
import { SITEMAP_ROUTES } from "@/lib/seo-routes";
import { absoluteUrl } from "@/lib/site";
import { GUIDES } from "./guias/lib/guides";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = await listCatalogArtworks();
  const now = new Date();
  const known = new Set(SITEMAP_ROUTES.map((route) => route.path));

  const extraRoutes = [
    { path: "/guias", changeFrequency: "monthly" as const, priority: 0.8 },
    ...GUIDES.map((guide) => ({
      path: `/guias/${guide.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...SEO_GUIDES.filter((guide) => guide.path !== "/guias").map((guide) => ({
      path: guide.path,
      changeFrequency: "monthly" as const,
      priority: guide.priority,
    })),
  ].filter((route) => !known.has(route.path));

  const staticRoutes: MetadataRoute.Sitemap = [...SITEMAP_ROUTES, ...extraRoutes].map(
    (route) => ({
      url: route.path === "/" ? absoluteUrl("/") : absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  );

  const artworkRoutes: MetadataRoute.Sitemap = works.map((work) => ({
    url: absoluteUrl(`/pinturas/${work.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...artworkRoutes];
}
