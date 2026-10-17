import type { MetadataRoute } from "next";

export type SitemapRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** Rutas indexables que no dependen del catálogo de obras. */
export const SITEMAP_ROUTES: SitemapRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/pinturas", changeFrequency: "weekly", priority: 0.9 },
  { path: "/esculturas", changeFrequency: "weekly", priority: 0.7 },
  { path: "/prensa", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.6 },
  { path: "/marcela-pedrosa", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pintora-concepcion", changeFrequency: "monthly", priority: 0.85 },
  { path: "/arte-concepcion", changeFrequency: "monthly", priority: 0.85 },
  { path: "/artista-visual-biobio", changeFrequency: "monthly", priority: 0.8 },
  { path: "/taller-arte-concepcion", changeFrequency: "monthly", priority: 0.8 },
  { path: "/galeria-arte-concepcion", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pintura-fachadas-concepcion", changeFrequency: "monthly", priority: 0.75 },
  { path: "/comprar-pintura-concepcion", changeFrequency: "monthly", priority: 0.9 },
  { path: "/comprar-cuadros-al-oleo-chile", changeFrequency: "monthly", priority: 0.9 },
  { path: "/encargos-pintura", changeFrequency: "monthly", priority: 0.9 },
  { path: "/oleo-sobre-tela-chile", changeFrequency: "monthly", priority: 0.8 },
  { path: "/impresionismo-figurativo-chile", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mujeres-artistas-chilenas", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pintoras-chilenas", changeFrequency: "monthly", priority: 0.85 },
  { path: "/ceramica-artistica-concepcion", changeFrequency: "monthly", priority: 0.75 },
  { path: "/devoluciones", changeFrequency: "yearly", priority: 0.3 },
  { path: "/tiempos-de-entrega", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacidad", changeFrequency: "yearly", priority: 0.2 },
];
