/**
 * Slug y nombre visible de cada óleo, tomados del motivo que el repo ya describe
 * (alt y detalle en seo-artworks, o el título publicado de la oferta del mes).
 * No son títulos de catálogo distintos de eso: el JSON solo guarda "Pintura cN".
 */
export const ARTWORK_SLUGS: {
  id: string;
  publicId: string;
  slug: string;
  name: string;
}[] = [
  {
    id: "c1",
    publicId: "bosque_wvvs3r",
    slug: "bosque-troncos-luz",
    name: "Bosque con luz entre troncos",
  },
  {
    id: "c2",
    publicId: "gente_ik69lq",
    slug: "grupo-de-figuras",
    name: "Grupo de figuras",
  },
  {
    id: "c3",
    publicId: "elefante_l0mpmz",
    slug: "elefante",
    name: "Elefante",
  },
  {
    id: "c4",
    publicId: "mujer_nb6pao",
    slug: "retrato-de-mujer",
    name: "Retrato de mujer",
  },
  {
    id: "c5",
    publicId: "c5_t6xso9",
    slug: "bodegon-calabazas",
    name: "Bodegón de calabazas",
  },
  {
    id: "c6",
    publicId: "c6_ab7jmc",
    slug: "retrato-con-mano",
    name: "Retrato con mano al mentón",
  },
  {
    id: "c7",
    publicId: "c7_o7ggf4",
    slug: "figura-recostada",
    name: "Figura recostada",
  },
  {
    id: "c8",
    publicId: "c8_pw3lea",
    slug: "rostros-superpuestos",
    name: "Rostros superpuestos",
  },
  {
    id: "c9",
    publicId: "c9_kf7psh",
    slug: "dos-caballos",
    name: "Dos caballos",
  },
  {
    id: "c10",
    publicId: "c10_trroe3",
    slug: "retrato-con-lentes",
    name: "Retrato con lentes",
  },
  {
    id: "c11",
    publicId: "c11_oy6mdw",
    slug: "manos-superpuestas",
    name: "Manos superpuestas",
  },
  {
    id: "c12",
    publicId: "c12_qtsjik",
    slug: "ciudad-casas-de-colores",
    name: "Ciudad de casas de colores",
  },
  {
    id: "c13",
    publicId: "c13_iqxkyv",
    slug: "casas-dia-y-noche",
    name: "Casas de día y de noche",
  },
  {
    id: "c14",
    publicId: "c14_v0dphn",
    slug: "bosque-troncos-de-colores",
    name: "Bosque de troncos de colores",
  },
  {
    id: "c15",
    publicId: "c15_rntbzb",
    slug: "gato-recostado",
    name: "Gato recostado",
  },
];

const BY_PUBLIC_ID = new Map(ARTWORK_SLUGS.map((item) => [item.publicId, item]));

export function motifForPublicId(publicId: string) {
  return BY_PUBLIC_ID.get(publicId);
}

/** 301 desde el slug corto c1…c15 cuando no coincide con el slug descriptivo. */
export const LEGACY_ARTWORK_REDIRECTS = ARTWORK_SLUGS.filter(
  (item) => item.id !== item.slug,
).map((item) => ({
  source: `/pinturas/${item.id}`,
  destination: `/pinturas/${item.slug}`,
  statusCode: 301 as const,
}));
