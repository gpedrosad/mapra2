/** Guías nuevas de la ronda 2. No van al menú. */
export const SEO_GUIDES = [
  {
    path: "/guias",
    group: "Índice",
    title: "Guías para elegir obra",
    summary:
      "Índice de estilos, temas y compra de obra original, armado con las pinturas publicadas.",
    priority: 0.8,
  },
  {
    path: "/comprar-arte-chile",
    group: "Compra",
    title: "Comprar arte en Chile",
    summary:
      "Cómo consultar una pintura original en Chile, con las obras publicadas y sin precio en la ficha.",
    priority: 0.85,
  },
  {
    path: "/retratos-al-oleo",
    group: "Estilos",
    title: "Retratos al óleo",
    summary: "Tres retratos al óleo publicados: rostros de cerca, con color en planos.",
    priority: 0.8,
  },
  {
    path: "/figuras-al-oleo",
    group: "Estilos",
    title: "Figuras al óleo",
    summary:
      "Figuras publicadas: un grupo, una figura recostada, rostros superpuestos y manos.",
    priority: 0.8,
  },
  {
    path: "/pintura-de-animales",
    group: "Temas",
    title: "Pintura de animales",
    summary: "Elefante, caballos y gato, en óleo sobre tela.",
    priority: 0.8,
  },
  {
    path: "/pintura-de-bosques",
    group: "Temas",
    title: "Pintura de bosques",
    summary: "Dos óleos de bosque: uno con luz entre troncos y otro de troncos de colores.",
    priority: 0.8,
  },
  {
    path: "/pintura-de-ciudad",
    group: "Temas",
    title: "Pintura de ciudad",
    summary: "Casas de colores, una vista con cordillera y tren, y un par día y noche.",
    priority: 0.8,
  },
  {
    path: "/bodegon-oleo",
    group: "Temas",
    title: "Bodegón al óleo",
    summary: "El bodegón publicado: calabazas y zapallos sobre una mesa.",
    priority: 0.75,
  },
] as const;

export type SeoGuide = (typeof SEO_GUIDES)[number];

export function guidesExcept(path: string) {
  return SEO_GUIDES.filter((guide) => guide.path !== path && guide.path !== "/guias");
}
