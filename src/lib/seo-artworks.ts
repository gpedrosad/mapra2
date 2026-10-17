import type { SiteImageKey } from "@/lib/cloudinary";
import { buildCloudinaryImageUrl, getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageSection } from "@/lib/managed-image-store";

/** Temas visibles en las pinturas publicadas de la galería. */
export type SeoTheme =
  | "retrato"
  | "figura"
  | "animal"
  | "bosque"
  | "ciudad"
  | "bodegon";

type KnownArtwork = {
  publicId: string;
  key: SiteImageKey;
  width: number;
  height: number;
  alt: string;
  detail: string;
  themes: SeoTheme[];
};

/**
 * Ficha visual de cada archivo publicado hoy en la galería.
 * El texto describe lo que se ve en la imagen. Las medidas de la tela
 * salen de `info` en data/managed-images.json, no de aquí.
 */
const KNOWN_ARTWORKS: KnownArtwork[] = [
  {
    publicId: "bosque_wvvs3r",
    key: "bosque",
    width: 1388,
    height: 1064,
    alt: "Óleo de un bosque con troncos verticales y luz entre los árboles, de Marcela Pedrosa",
    detail:
      "Troncos verticales, luz entre los árboles y suelo con manchas verdes y amarillas. La pincelada queda visible.",
    themes: ["bosque"],
  },
  {
    publicId: "gente_ik69lq",
    key: "gente",
    width: 3684,
    height: 3328,
    alt: "Óleo de un grupo de figuras de colores, sin rasgos en el rostro, de Marcela Pedrosa",
    detail:
      "Figuras de pie, juntas, con el rostro sin rasgos y la ropa en azul, rojo, violeta, amarillo y verde.",
    themes: ["figura"],
  },
  {
    publicId: "elefante_l0mpmz",
    key: "elefante",
    width: 3084,
    height: 4160,
    alt: "Óleo de un elefante de frente, en naranjos, azules y rojos, de Marcela Pedrosa",
    detail:
      "Elefante de frente, con colmillos claros y el cuerpo en naranja, azul y rojo sobre un fondo gris.",
    themes: ["animal"],
  },
  {
    publicId: "mujer_nb6pao",
    key: "mujer",
    width: 1280,
    height: 956,
    alt: "Retrato al óleo de una mujer, con el rostro en azul, naranja y violeta, de Marcela Pedrosa",
    detail:
      "Rostro de mujer de cerca, cabello oscuro y color puesto en planos azules, naranjas y violetas.",
    themes: ["retrato"],
  },
  {
    publicId: "c5_t6xso9",
    key: "c5",
    width: 1600,
    height: 1248,
    alt: "Bodegón al óleo con calabazas y zapallos sobre una mesa, de Marcela Pedrosa",
    detail:
      "Calabazas y zapallos de distinto tamaño y color, apoyados sobre una mesa de madera.",
    themes: ["bodegon"],
  },
  {
    publicId: "c6_ab7jmc",
    key: "c6",
    width: 1600,
    height: 1588,
    alt: "Retrato al óleo de un rostro en planos de color, con una mano junto al mentón, de Marcela Pedrosa",
    detail:
      "Rostro de cerca y una mano junto al mentón. El color va en planos verdes, rojos, amarillos y violetas.",
    themes: ["retrato"],
  },
  {
    publicId: "c7_o7ggf4",
    key: "c7",
    width: 504,
    height: 175,
    alt: "Óleo de una figura recostada de espaldas, sobre telas claras, de Marcela Pedrosa",
    detail:
      "Figura recostada de espaldas, en formato apaisado, sobre telas claras y un fondo ocre.",
    themes: ["figura"],
  },
  {
    publicId: "c8_pw3lea",
    key: "c8",
    width: 1200,
    height: 1600,
    alt: "Óleo de rostros superpuestos, con planos de color y un abanico azul, de Marcela Pedrosa",
    detail:
      "Varios rostros superpuestos, ojos azules, un abanico azul y formas curvas en rojo, amarillo y violeta.",
    themes: ["figura"],
  },
  {
    publicId: "c9_kf7psh",
    key: "c9",
    width: 650,
    height: 533,
    alt: "Óleo de dos caballos, uno en primer plano y otro en movimiento, de Marcela Pedrosa",
    detail:
      "Cabeza de un caballo en primer plano y un segundo caballo en movimiento, sobre un fondo azul.",
    themes: ["animal"],
  },
  {
    publicId: "c10_trroe3",
    key: "c10",
    width: 1600,
    height: 1248,
    alt: "Retrato al óleo de una persona con lentes redondos y cabello en azul y rojo, de Marcela Pedrosa",
    detail:
      "Retrato de una persona con lentes redondos. El cabello y el fondo van en azul, rojo y naranja.",
    themes: ["retrato"],
  },
  {
    publicId: "c11_oy6mdw",
    key: "c11",
    width: 1463,
    height: 1152,
    alt: "Óleo de manos superpuestas sobre un fondo de ocres y grises, de Marcela Pedrosa",
    detail:
      "Manos y antebrazos superpuestos, pintados en grises y celestes, sobre un fondo ocre y rojo.",
    themes: ["figura"],
  },
  {
    publicId: "c12_qtsjik",
    key: "c12",
    width: 1554,
    height: 1600,
    alt: "Óleo de una ciudad de casas de colores, con cordillera, tren y árboles en flor, de Marcela Pedrosa",
    detail:
      "Casas de colores, cordillera nevada, un tren amarillo y azul, árboles en flor y un arco.",
    themes: ["ciudad"],
  },
  {
    publicId: "c13_iqxkyv",
    key: "c13",
    width: 1280,
    height: 466,
    alt: "Óleo de dos vistas de casas de colores, una de día y otra de noche, de Marcela Pedrosa",
    detail:
      "Dos vistas de casas de colores: una de día, con escaleras, y otra de noche, con luna y ventanas encendidas.",
    themes: ["ciudad"],
  },
  {
    publicId: "c14_v0dphn",
    key: "c14",
    width: 1600,
    height: 1590,
    alt: "Óleo de un bosque estilizado, con troncos de colores y un árbol blanco, de Marcela Pedrosa",
    detail:
      "Troncos en verde, azul, rosa y ocre, un árbol blanco al centro y un cielo rosado.",
    themes: ["bosque"],
  },
  {
    publicId: "c15_rntbzb",
    key: "c15",
    width: 1312,
    height: 1600,
    alt: "Óleo de un gato recostado, con manchas de color y fondo azul, de Marcela Pedrosa",
    detail:
      "Gato recostado sobre un fondo azul. El pelaje mezcla el color del gato con manchas y dibujos.",
    themes: ["animal"],
  },
];

const BY_PUBLIC_ID = new Map(KNOWN_ARTWORKS.map((artwork) => [artwork.publicId, artwork]));

const GALLERY_IDS = Array.from({ length: 15 }, (_, index) => `gallery.c${index + 1}`);

export type CatalogPainting = {
  id: string;
  publicId: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  info: string;
  detail: string;
  themes: SeoTheme[];
};

export type ResolvedArtworkImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function imageSrcForPublicId(publicId: string, fallbackKey?: SiteImageKey) {
  const cloudinaryUrl = buildCloudinaryImageUrl(publicId);
  if (cloudinaryUrl) return cloudinaryUrl;

  const known = BY_PUBLIC_ID.get(publicId);
  if (known) return getSiteImageUrl(known.key);
  if (fallbackKey) return getSiteImageUrl(fallbackKey);
  return "";
}

export function resolveArtworkImage(
  publicId: string | undefined,
  fallbackKey: SiteImageKey,
  storedAlt?: string
): ResolvedArtworkImage {
  const known = publicId ? BY_PUBLIC_ID.get(publicId) : undefined;
  const fallback = BY_PUBLIC_ID.get(
    KNOWN_ARTWORKS.find((artwork) => artwork.key === fallbackKey)?.publicId || ""
  );

  const meta = known || fallback;
  const src = publicId
    ? imageSrcForPublicId(publicId, fallbackKey)
    : getSiteImageUrl(fallbackKey);

  return {
    src,
    alt: known?.alt || storedAlt?.trim() || fallback?.alt || "Obra de Marcela Pedrosa",
    width: meta?.width || 1200,
    height: meta?.height || 900,
  };
}

export async function listCatalogPaintings(): Promise<CatalogPainting[]> {
  const paintings: CatalogPainting[] = [];

  for (const id of GALLERY_IDS) {
    const section = await getManagedImageSection(id);
    const publicId = section?.publicId?.trim();
    if (!publicId) continue;

    const known = BY_PUBLIC_ID.get(publicId);
    if (!known) continue;

    const src = imageSrcForPublicId(publicId);
    if (!src) continue;

    paintings.push({
      id,
      publicId,
      src,
      alt: known.alt,
      width: known.width,
      height: known.height,
      info: section?.info?.trim() || "óleo sobre tela",
      detail: known.detail,
      themes: known.themes,
    });
  }

  return paintings;
}

export async function listPaintingsByTheme(theme: SeoTheme) {
  const paintings = await listCatalogPaintings();
  return paintings.filter((painting) => painting.themes.includes(theme));
}
