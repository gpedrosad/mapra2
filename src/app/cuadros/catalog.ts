import type { SiteImageKey } from "@/lib/cloudinary";

/** Obra real de la galería (`gallery.c*`) y lo que se ve en el archivo del repo. */
export type CatalogWork = {
  id: string;
  imageKey: SiteImageKey;
  /** Texto de ficha en `data/managed-images.json`. No se agregan unidades. */
  info: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const PHONE = "+56 9 5618 9912";
export const EMAIL = "contacto@marcelapedrosa.com";

export const CATALOG: Record<string, CatalogWork> = {
  c1: {
    id: "c1",
    imageKey: "bosque",
    info: "158x122 óleo sobre tela",
    caption: "Bosque de troncos",
    alt: "Pintura al óleo de un bosque con troncos verticales y luz entre el follaje, de Marcela Pedrosa",
    width: 1388,
    height: 1064,
  },
  c2: {
    id: "c2",
    imageKey: "gente",
    info: "110x110 óleo sobre tela",
    caption: "Grupo de figuras",
    alt: "Pintura al óleo de un grupo de figuras de pie, con rostros simplificados y ropa de color, de Marcela Pedrosa",
    width: 3684,
    height: 3328,
  },
  c3: {
    id: "c3",
    imageKey: "elefante",
    info: "90x120 óleo sobre tela",
    caption: "Elefante",
    alt: "Pintura al óleo de un elefante de frente, en naranjos, azules y rojos, de Marcela Pedrosa",
    width: 3084,
    height: 4160,
  },
  c4: {
    id: "c4",
    imageKey: "mujer",
    info: "100x130 óleo sobre tela",
    caption: "Retrato",
    alt: "Retrato al óleo de una mujer, con el rostro en azules, naranjos y violetas, de Marcela Pedrosa",
    width: 1280,
    height: 956,
  },
  c5: {
    id: "c5",
    imageKey: "c5",
    info: "óleo sobre tela",
    caption: "Bodegón de zapallos",
    alt: "Bodegón al óleo de zapallos y calabazas sobre una mesa, de Marcela Pedrosa",
    width: 1600,
    height: 1248,
  },
  c6: {
    id: "c6",
    imageKey: "c6",
    info: "óleo sobre tela",
    caption: "Rostro cercano",
    alt: "Retrato al óleo en primer plano, con una mano junto a la boca y color en planos, de Marcela Pedrosa",
    width: 1600,
    height: 1588,
  },
  c7: {
    id: "c7",
    imageKey: "c7",
    info: "óleo sobre tela",
    caption: "Figura recostada",
    alt: "Pintura al óleo de una figura recostada de espaldas sobre sábanas claras, de Marcela Pedrosa",
    width: 504,
    height: 175,
  },
  c8: {
    id: "c8",
    imageKey: "c8",
    info: "óleo sobre tela",
    caption: "Rostros y máscara",
    alt: "Pintura al óleo de rostros y una máscara en planos de rojo, ocre y violeta, de Marcela Pedrosa",
    width: 1200,
    height: 1600,
  },
  c9: {
    id: "c9",
    imageKey: "c9",
    info: "óleo sobre tela",
    caption: "Dos caballos",
    alt: "Pintura al óleo de dos caballos, uno en primer plano y otro en movimiento, de Marcela Pedrosa",
    width: 650,
    height: 533,
  },
  c10: {
    id: "c10",
    imageKey: "c10",
    info: "óleo sobre tela",
    caption: "Retrato con lentes",
    alt: "Retrato al óleo de una persona con lentes redondos y el pelo al hombro, de Marcela Pedrosa",
    width: 1600,
    height: 1248,
  },
  c11: {
    id: "c11",
    imageKey: "c11",
    info: "óleo sobre tela",
    caption: "Manos",
    alt: "Pintura al óleo de manos superpuestas sobre un fondo de ocres y rojos, de Marcela Pedrosa",
    width: 1463,
    height: 1152,
  },
  c12: {
    id: "c12",
    imageKey: "c12",
    info: "óleo sobre tela",
    caption: "Ciudad y cerros",
    alt: "Pintura al óleo de una ciudad de casas de colores, con tren, árboles en flor y cerros nevados, de Marcela Pedrosa",
    width: 1554,
    height: 1600,
  },
  c13: {
    id: "c13",
    imageKey: "c13",
    info: "óleo sobre tela",
    caption: "Fachadas, día y noche",
    alt: "Pintura al óleo de fachadas de casas, un conjunto de día y otro de noche, de Marcela Pedrosa",
    width: 1280,
    height: 466,
  },
  c14: {
    id: "c14",
    imageKey: "c14",
    info: "óleo sobre tela",
    caption: "Bosque en color",
    alt: "Pintura al óleo de árboles en planos de verde, turquesa, rosa y ocre, de Marcela Pedrosa",
    width: 1600,
    height: 1590,
  },
  c15: {
    id: "c15",
    imageKey: "c15",
    info: "óleo sobre tela",
    caption: "Gato",
    alt: "Pintura al óleo de un gato acostado sobre un textil de motivos geométricos, de Marcela Pedrosa",
    width: 1312,
    height: 1600,
  },
};

export type CopyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type CuadroPage = {
  slug: string;
  path: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  ogKey: SiteImageKey;
  ogAlt: string;
  whatsappText: string;
  ctaTitle: string;
  ctaBody: string;
  /** Texto propio de los tres pasos de consulta. */
  consultaIntro: string;
  gridHeading: string;
  workIds: string[];
  /** En el índice, cada obra apunta a la subpágina donde se explica. */
  workLinks?: Record<string, string>;
  blocks: CopyBlock[];
};
