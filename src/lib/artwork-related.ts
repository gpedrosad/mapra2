/** Enlaces de cada ficha: otras telas, una guía y 1 a 3 páginas de tema o uso. Sin precio. */
export type ArtworkSeoLink = {
  href: string;
  label: string;
};

export type ArtworkPageContext = {
  /** Frase que presenta las otras telas. Vacía si no hay. */
  worksLead: string;
  works: ArtworkSeoLink[];
  guideLead: string;
  guide: ArtworkSeoLink;
  hubs: ArtworkSeoLink[];
};

const LIVING_GUIDE: ArtworkSeoLink = {
  href: "/guias/elegir-cuadro-para-el-living",
  label: "cómo elegir un cuadro para el living",
};

const COMEDOR_GUIDE: ArtworkSeoLink = {
  href: "/guias/elegir-cuadro-para-el-comedor",
  label: "cómo elegir un cuadro para el comedor",
};

const COLGAR_GUIDE: ArtworkSeoLink = {
  href: "/guias/cuidar-y-colgar-pintura-al-oleo",
  label: "cómo cuidar y colgar una pintura al óleo",
};

const ENCARGO_GUIDE: ArtworkSeoLink = {
  href: "/guias/como-encargar-una-pintura",
  label: "cómo encargar una pintura",
};

const ESTILO_GUIDE: ArtworkSeoLink = {
  href: "/guias/que-es-el-impresionismo-figurativo",
  label: "qué es el impresionismo figurativo",
};

const PRECIO_GUIDE: ArtworkSeoLink = {
  href: "/guias/cuanto-cuesta-un-cuadro-original-en-chile",
  label: "qué mueve el valor de un cuadro original",
};

const CONTEXT: Record<string, ArtworkPageContext> = {
  "bosque-troncos-luz": {
    worksLead: "El otro bosque de la galería es",
    works: [
      {
        href: "/pinturas/bosque-troncos-de-colores",
        label: "Bosque de troncos de colores",
      },
    ],
    guideLead: "Para cruzar el 158x122 con el muro del sofá, la guía es",
    guide: LIVING_GUIDE,
    hubs: [
      { href: "/cuadros/paisajes-bosques-biobio", label: "cuadros de bosques" },
      { href: "/cuadros/grandes-al-oleo", label: "cuadros grandes al óleo" },
      { href: "/cuadros/para-living", label: "cuadros para el living" },
    ],
  },
  "grupo-de-figuras": {
    worksLead: "Otras figuras publicadas son",
    works: [
      { href: "/pinturas/rostros-superpuestos", label: "Rostros superpuestos" },
      { href: "/pinturas/figura-recostada", label: "Figura recostada" },
    ],
    guideLead: "El nombre del estilo está en",
    guide: ESTILO_GUIDE,
    hubs: [
      { href: "/figuras-al-oleo", label: "figuras al óleo" },
      { href: "/cuadros/para-oficina", label: "cuadros para la oficina" },
      { href: "/cuadros/grandes-al-oleo", label: "cuadros grandes al óleo" },
    ],
  },
  elefante: {
    worksLead: "Los otros animales de la galería son",
    works: [
      { href: "/pinturas/dos-caballos", label: "Dos caballos" },
      { href: "/pinturas/gato-recostado", label: "Gato recostado" },
    ],
    guideLead: "El valor no está en la ficha. Los factores, sin montos, están en",
    guide: PRECIO_GUIDE,
    hubs: [
      { href: "/pintura-de-animales", label: "pintura de animales" },
      { href: "/cuadros/grandes-al-oleo", label: "cuadros grandes al óleo" },
      { href: "/cuadros/para-living", label: "cuadros para el living" },
    ],
  },
  "retrato-de-mujer": {
    worksLead: "Los otros retratos publicados son",
    works: [
      { href: "/pinturas/retrato-con-mano", label: "Retrato con mano al mentón" },
      { href: "/pinturas/retrato-con-lentes", label: "Retrato con lentes" },
    ],
    guideLead: "Un retrato que todavía no está pintado se conversa en",
    guide: ENCARGO_GUIDE,
    hubs: [
      { href: "/retratos-al-oleo", label: "retratos al óleo" },
      { href: "/cuadros/grandes-al-oleo", label: "cuadros grandes al óleo" },
      { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
    ],
  },
  "bodegon-calabazas": {
    worksLead: "Para el mismo muro del comedor, también se consultan",
    works: [
      { href: "/pinturas/ciudad-casas-de-colores", label: "Ciudad de casas de colores" },
      { href: "/pinturas/casas-dia-y-noche", label: "Casas de día y de noche" },
    ],
    guideLead: "Cómo medir ese paño, sin repetir el catálogo, está en",
    guide: COMEDOR_GUIDE,
    hubs: [
      { href: "/bodegon-oleo", label: "bodegón al óleo" },
      { href: "/cuadros/para-comedor", label: "cuadros para el comedor" },
      { href: "/cuadros/regalar-pintura-original", label: "regalar una pintura original" },
    ],
  },
  "retrato-con-mano": {
    worksLead: "Los otros retratos publicados son",
    works: [
      { href: "/pinturas/retrato-de-mujer", label: "Retrato de mujer" },
      { href: "/pinturas/retrato-con-lentes", label: "Retrato con lentes" },
    ],
    guideLead: "Para colgar un óleo que se mira de cerca, la guía es",
    guide: COLGAR_GUIDE,
    hubs: [
      { href: "/retratos-al-oleo", label: "retratos al óleo" },
      { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
    ],
  },
  "figura-recostada": {
    worksLead: "Otras figuras de la galería son",
    works: [
      { href: "/pinturas/manos-superpuestas", label: "Manos superpuestas" },
      { href: "/pinturas/grupo-de-figuras", label: "Grupo de figuras" },
    ],
    guideLead: "Para colgar un óleo apaisado sin dañar la tela, mira",
    guide: COLGAR_GUIDE,
    hubs: [
      { href: "/figuras-al-oleo", label: "figuras al óleo" },
      { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
    ],
  },
  "rostros-superpuestos": {
    worksLead: "Otras figuras publicadas son",
    works: [
      { href: "/pinturas/grupo-de-figuras", label: "Grupo de figuras" },
      { href: "/pinturas/manos-superpuestas", label: "Manos superpuestas" },
    ],
    guideLead: "El lenguaje de color en planos, con el motivo reconocible, está en",
    guide: ESTILO_GUIDE,
    hubs: [
      { href: "/figuras-al-oleo", label: "figuras al óleo" },
      { href: "/cuadros/para-oficina", label: "cuadros para la oficina" },
    ],
  },
  "dos-caballos": {
    worksLead: "Los otros animales de la galería son",
    works: [
      { href: "/pinturas/elefante", label: "Elefante" },
      { href: "/pinturas/gato-recostado", label: "Gato recostado" },
    ],
    guideLead: "Si va en el muro del sofá, mide primero con",
    guide: LIVING_GUIDE,
    hubs: [
      { href: "/pintura-de-animales", label: "pintura de animales" },
      { href: "/cuadros/para-living", label: "cuadros para el living" },
      { href: "/cuadros/regalar-pintura-original", label: "regalar una pintura original" },
    ],
  },
  "retrato-con-lentes": {
    worksLead: "Los otros retratos publicados son",
    works: [
      { href: "/pinturas/retrato-de-mujer", label: "Retrato de mujer" },
      { href: "/pinturas/retrato-con-mano", label: "Retrato con mano al mentón" },
    ],
    guideLead: "Si buscas un retrato que no está entre estas tres fichas, el paso a paso está en",
    guide: ENCARGO_GUIDE,
    hubs: [
      { href: "/retratos-al-oleo", label: "retratos al óleo" },
      { href: "/cuadros/para-oficina", label: "cuadros para la oficina" },
    ],
  },
  "manos-superpuestas": {
    worksLead: "Otras figuras para ver de cerca son",
    works: [
      { href: "/pinturas/figura-recostada", label: "Figura recostada" },
      { href: "/pinturas/rostros-superpuestos", label: "Rostros superpuestos" },
    ],
    guideLead: "Cómo colgar un óleo sin dañar la tela está en",
    guide: COLGAR_GUIDE,
    hubs: [
      { href: "/figuras-al-oleo", label: "figuras al óleo" },
      { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
    ],
  },
  "ciudad-casas-de-colores": {
    worksLead: "La otra vista de ciudad es",
    works: [{ href: "/pinturas/casas-dia-y-noche", label: "Casas de día y de noche" }],
    guideLead: "Si el muro es el del comedor y no el del sofá, mide con",
    guide: COMEDOR_GUIDE,
    hubs: [
      { href: "/pintura-de-ciudad", label: "pintura de ciudad" },
      { href: "/cuadros/fachadas-arquitectura", label: "cuadros de fachadas" },
      { href: "/cuadros/para-comedor", label: "cuadros para el comedor" },
    ],
  },
  "casas-dia-y-noche": {
    worksLead: "La otra vista de ciudad es",
    works: [
      { href: "/pinturas/ciudad-casas-de-colores", label: "Ciudad de casas de colores" },
    ],
    guideLead: "Para un muro largo de comedor, la medida está en",
    guide: COMEDOR_GUIDE,
    hubs: [
      { href: "/cuadros/fachadas-arquitectura", label: "cuadros de fachadas" },
      { href: "/pintura-de-ciudad", label: "pintura de ciudad" },
      { href: "/pintura-fachadas-concepcion", label: "óleos de fachadas y bosques" },
    ],
  },
  "bosque-troncos-de-colores": {
    worksLead: "El bosque con medida publicada es",
    works: [{ href: "/pinturas/bosque-troncos-luz", label: "Bosque con luz entre troncos" }],
    guideLead: "Si el muro es el del living, mide primero con",
    guide: LIVING_GUIDE,
    hubs: [
      { href: "/pintura-de-bosques", label: "pintura de bosques" },
      { href: "/cuadros/paisajes-bosques-biobio", label: "cuadros de bosques" },
      { href: "/cuadros/para-living", label: "cuadros para el living" },
    ],
  },
  "gato-recostado": {
    worksLead: "Los otros animales de la galería son",
    works: [
      { href: "/pinturas/elefante", label: "Elefante" },
      { href: "/pinturas/dos-caballos", label: "Dos caballos" },
    ],
    guideLead: "Para colgarlo donde se ve de cerca, la guía es",
    guide: COLGAR_GUIDE,
    hubs: [
      { href: "/pintura-de-animales", label: "pintura de animales" },
      { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
      { href: "/cuadros/regalar-pintura-original", label: "regalar una pintura original" },
    ],
  },
  "laguna-cordillera-atardecer": {
    worksLead: "Otros paisajes publicados son",
    works: [
      { href: "/pinturas/bosque-troncos-luz", label: "Bosque con luz entre troncos" },
      { href: "/pinturas/ciudad-casas-de-colores", label: "Ciudad de casas de colores" },
    ],
    guideLead: "Para medir un muro ancho, lee",
    guide: LIVING_GUIDE,
    hubs: [
      { href: "/comprar-cuadros-al-oleo-chile", label: "comprar cuadros al óleo" },
      { href: "/cuadros", label: "cuadros según el muro" },
    ],
  },
};

const FALLBACK: ArtworkPageContext = {
  worksLead: "",
  works: [],
  guideLead: "El índice para medir y cuidar una tela es",
  guide: { href: "/guias", label: "las guías" },
  hubs: [
    { href: "/comprar-cuadros-al-oleo-chile", label: "comprar cuadros al óleo" },
    { href: "/cuadros", label: "cuadros según el muro" },
  ],
};

export function artworkPageContext(slug: string): ArtworkPageContext {
  return CONTEXT[slug] ?? FALLBACK;
}

/** Compatibilidad: las páginas de tema o uso que ya enlazaba la ficha. */
export function relatedSeoLinks(slug: string): ArtworkSeoLink[] {
  return artworkPageContext(slug).hubs;
}
