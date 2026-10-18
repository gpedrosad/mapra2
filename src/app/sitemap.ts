import { MetadataRoute } from "next";
import { LEGACY_ARTWORK_PATHS } from "@/lib/artwork-slugs";
import { listCatalogArtworks } from "@/lib/artworks";
import { SEO_GUIDES } from "@/lib/seo-guides";
import { SITEMAP_ROUTES } from "@/lib/seo-routes";
import { lastModifiedFor } from "@/lib/sitemap-lastmod";
import { absoluteUrl } from "@/lib/site";
import { PERFILES } from "./artistas-chilenas/ui";
import { CUADRO_PAGES } from "./cuadros/pages";
import { GUIDES } from "./guias/lib/guides";

/** URLs que responden 301/308 o no deben indexarse. No entran al sitemap. */
const EXCLUDED = new Set([
  "/cuadros-para-living",
  "/encargar-una-pintura",
  "/pinturas-originales",
  "/pinturas-originales-a-la-venta",
  "/admin/imagenes",
  "/imagenes",
  ...LEGACY_ARTWORK_PATHS,
]);

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = await listCatalogArtworks();
  const known = new Set<string>();

  const extraRoutes: Route[] = [
    { path: "/guias", changeFrequency: "monthly", priority: 0.8 },
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
    { path: "/artistas-chilenas", changeFrequency: "monthly" as const, priority: 0.8 },
    ...PERFILES.map((perfil) => ({
      path: `/artistas-chilenas/${perfil.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...CUADRO_PAGES.map((page) => ({
      path: page.path,
      changeFrequency: "monthly" as const,
      priority: page.path === "/cuadros" ? 0.85 : 0.75,
    })),
  ];

  const staticRoutes: MetadataRoute.Sitemap = [];

  for (const route of [...SITEMAP_ROUTES, ...extraRoutes]) {
    if (known.has(route.path) || EXCLUDED.has(route.path)) continue;
    known.add(route.path);
    staticRoutes.push({
      url: route.path === "/" ? absoluteUrl("/") : absoluteUrl(route.path),
      lastModified: lastModifiedFor(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  const artworkRoutes: MetadataRoute.Sitemap = works
    .filter((work) => !known.has(`/pinturas/${work.slug}`))
    .filter((work) => !EXCLUDED.has(`/pinturas/${work.slug}`))
    .map((work) => ({
      url: absoluteUrl(`/pinturas/${work.slug}`),
      lastModified: lastModifiedFor(`/pinturas/${work.slug}`),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...artworkRoutes];
}
