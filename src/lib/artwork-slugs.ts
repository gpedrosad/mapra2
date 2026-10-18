export type ArtworkMotif = {
  id: string;
  publicId: string;
  slug: string;
  name: string;
};

/**
 * Slug y nombre visible de cada óleo, tomados del motivo que el repo ya describe
 * (alt y detalle en seo-artworks, o el título publicado de la oferta del mes).
 * No son títulos de catálogo distintos de eso: el JSON solo guarda "Pintura cN".
 */
export const ARTWORK_SLUGS: ArtworkMotif[] = [
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

/**
 * Archivo que en producción reemplazó a `c13_iqxkyv` en la ranura gallery.c13
 * (`mapra/managed/gallery-c13-1787246109422`, foto 1600×1236).
 * No es el díptico de casas: se ve laguna, cordillera, atardecer y juncos.
 * El nombre solo describe eso. No hereda el slug `casas-dia-y-noche`.
 */
export const SLOT_REPLACEMENTS: ArtworkMotif[] = [
  {
    id: "gallery-c13-live",
    publicId: "mapra/managed/gallery-c13-1787246109422",
    slug: "laguna-cordillera-atardecer",
    name: "Laguna y cordillera al atardecer",
  },
];

const BY_PUBLIC_ID = new Map(
  [...ARTWORK_SLUGS, ...SLOT_REPLACEMENTS].map((item) => [item.publicId, item]),
);
const BY_ID = new Map(ARTWORK_SLUGS.map((item) => [item.id, item]));

export function motifForPublicId(publicId: string) {
  return BY_PUBLIC_ID.get(publicId.trim());
}

export function motifForId(id: string) {
  return BY_ID.get(id);
}

export type SlotResolution = {
  /** Motivo documentado del id, cuando el archivo de la ranura es otro. */
  documented: ArtworkMotif | null;
  /** Motivo del archivo que está realmente en la ranura. */
  published: ArtworkMotif | null;
};

/**
 * El 301 de `/pinturas/c13` apunta al slug documentado.
 * Si el publicId de la ranura no es el del motivo, el archivo nuevo no puede
 * quedarse en el slug `c13`: esa URL ya redirige y la ficha destino no existiría.
 */
export function resolveGallerySlot(id: string, publicId: string): SlotResolution {
  const trimmed = publicId.trim();
  const byPublic = motifForPublicId(trimmed);
  const byId = motifForId(id);

  if (byPublic && (!byId || byPublic.publicId === byId.publicId)) {
    return { documented: null, published: byPublic };
  }

  if (byPublic && byId && byPublic.publicId !== byId.publicId) {
    return { documented: byId, published: byPublic };
  }

  if (byId && byId.publicId !== trimmed) {
    return { documented: byId, published: null };
  }

  return { documented: null, published: byId ?? null };
}

/** 301 desde el slug corto c1…c15 cuando no coincide con el slug descriptivo. */
export const LEGACY_ARTWORK_REDIRECTS = ARTWORK_SLUGS.filter(
  (item) => item.id !== item.slug,
).map((item) => ({
  source: `/pinturas/${item.id}`,
  destination: `/pinturas/${item.slug}`,
  statusCode: 301 as const,
}));

export const LEGACY_ARTWORK_PATHS = new Set(
  LEGACY_ARTWORK_REDIRECTS.map((item) => item.source),
);
