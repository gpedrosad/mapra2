/** 1 a 3 enlaces SEO por ficha, según tema o uso. Sin precio. */
export type ArtworkSeoLink = {
  href: string;
  label: string;
};

const RELATED: Record<string, ArtworkSeoLink[]> = {
  "bosque-troncos-luz": [
    { href: "/cuadros/paisajes-bosques-biobio", label: "cuadros de bosques" },
    { href: "/cuadros/grandes-al-oleo", label: "cuadros grandes al óleo" },
    { href: "/cuadros/para-living", label: "cuadros para el living" },
  ],
  "grupo-de-figuras": [
    { href: "/figuras-al-oleo", label: "figuras al óleo" },
    { href: "/cuadros/para-oficina", label: "cuadros para la oficina" },
    { href: "/cuadros/grandes-al-oleo", label: "cuadros grandes al óleo" },
  ],
  elefante: [
    { href: "/pintura-de-animales", label: "pintura de animales" },
    { href: "/cuadros/grandes-al-oleo", label: "cuadros grandes al óleo" },
    { href: "/cuadros/para-living", label: "cuadros para el living" },
  ],
  "retrato-de-mujer": [
    { href: "/retratos-al-oleo", label: "retratos al óleo" },
    { href: "/cuadros/grandes-al-oleo", label: "cuadros grandes al óleo" },
    { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
  ],
  "bodegon-calabazas": [
    { href: "/bodegon-oleo", label: "bodegón al óleo" },
    { href: "/cuadros/regalar-pintura-original", label: "regalar una pintura original" },
  ],
  "retrato-con-mano": [
    { href: "/retratos-al-oleo", label: "retratos al óleo" },
    { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
  ],
  "figura-recostada": [
    { href: "/figuras-al-oleo", label: "figuras al óleo" },
    { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
  ],
  "rostros-superpuestos": [
    { href: "/figuras-al-oleo", label: "figuras al óleo" },
    { href: "/cuadros/para-oficina", label: "cuadros para la oficina" },
  ],
  "dos-caballos": [
    { href: "/pintura-de-animales", label: "pintura de animales" },
    { href: "/cuadros/para-living", label: "cuadros para el living" },
    { href: "/cuadros/regalar-pintura-original", label: "regalar una pintura original" },
  ],
  "retrato-con-lentes": [
    { href: "/retratos-al-oleo", label: "retratos al óleo" },
    { href: "/cuadros/para-oficina", label: "cuadros para la oficina" },
  ],
  "manos-superpuestas": [
    { href: "/figuras-al-oleo", label: "figuras al óleo" },
    { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
  ],
  "ciudad-casas-de-colores": [
    { href: "/pintura-de-ciudad", label: "pintura de ciudad" },
    { href: "/cuadros/fachadas-arquitectura", label: "cuadros de fachadas" },
    { href: "/cuadros/para-living", label: "cuadros para el living" },
  ],
  "casas-dia-y-noche": [
    { href: "/cuadros/fachadas-arquitectura", label: "cuadros de fachadas" },
    { href: "/pintura-de-ciudad", label: "pintura de ciudad" },
    { href: "/pintura-fachadas-concepcion", label: "óleos de fachadas y bosques" },
  ],
  "bosque-troncos-de-colores": [
    { href: "/pintura-de-bosques", label: "pintura de bosques" },
    { href: "/cuadros/paisajes-bosques-biobio", label: "cuadros de bosques" },
    { href: "/cuadros/para-living", label: "cuadros para el living" },
  ],
  "gato-recostado": [
    { href: "/pintura-de-animales", label: "pintura de animales" },
    { href: "/cuadros/para-dormitorio", label: "cuadros para el dormitorio" },
    { href: "/cuadros/regalar-pintura-original", label: "regalar una pintura original" },
  ],
  "laguna-cordillera-atardecer": [
    { href: "/comprar-cuadros-al-oleo-chile", label: "comprar cuadros al óleo" },
    { href: "/cuadros", label: "cuadros según el muro" },
  ],
};

const FALLBACK: ArtworkSeoLink[] = [
  { href: "/comprar-cuadros-al-oleo-chile", label: "comprar cuadros al óleo" },
  { href: "/cuadros", label: "cuadros según el muro" },
];

export function relatedSeoLinks(slug: string): ArtworkSeoLink[] {
  return RELATED[slug] ?? FALLBACK;
}
