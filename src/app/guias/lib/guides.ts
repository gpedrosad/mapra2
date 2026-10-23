import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/cloudinary";
import { SITE_URL } from "@/lib/site";
import { cuidarColgarOleo } from "./content/cuidar-colgar-oleo";
import { elegirCuadroLiving } from "./content/elegir-cuadro-living";
import { encargarPintura } from "./content/encargar-pintura";
import { impresionismoFigurativo } from "./content/impresionismo-figurativo";
import { oleoVsAcrilico } from "./content/oleo-vs-acrilico";
import { precioCuadroChile } from "./content/precio-cuadro-chile";
import type { Guide } from "./types";

export const GUIDE_DATE = "2026-10-17";
export const GUIDE_MODIFIED = "2026-10-23";

export const GUIDES: Guide[] = [
  {
    slug: "elegir-cuadro-para-el-living",
    title: "Cómo elegir un cuadro para el living",
    description:
      "Tamaño, color y luz para elegir un cuadro de living. Cómo medir el muro, la altura y el sol del norte en una casa en Chile.",
    imageKey: "bosque",
    imageAlt: "Pintura de paisaje al óleo de Marcela Pedrosa",
    ctaTitle: "¿Quieres ver si una obra calza con tu living?",
    ctaBody:
      "Escríbenos las medidas del muro y la orientación de la luz. Te respondemos por la obra disponible o por un formato a conversar.",
    whatsappText:
      "Hola Marcela, quiero elegir un cuadro para el living. Te mando las medidas del muro y cómo le da la luz.",
    consultaIntro:
      "Si ya mediste el muro y viste una tela de este taller, nombra la ficha. El valor no está en la guía.",
    blocks: elegirCuadroLiving,
  },
  {
    slug: "oleo-vs-acrilico",
    title: "Óleo vs acrílico para comprar arte",
    description:
      "Diferencias entre óleo y acrílico al comprar arte original: secado, superficie, duración y qué mirar en la tela.",
    imageKey: "mujer",
    imageAlt: "Pintura al óleo de Marcela Pedrosa",
    ctaTitle: "¿Buscas un óleo para tu casa?",
    ctaBody:
      "Cuéntanos el lugar y el tamaño aproximado. Desde el taller en Concepción vemos si hay una obra en óleo que conversa con ese muro.",
    whatsappText:
      "Hola Marcela, estoy comparando óleo y acrílico. Me interesa ver obras al óleo y te cuento el espacio.",
    consultaIntro:
      "Las pinturas publicadas de Marcela son óleo sobre tela. El acrílico no está en la galería.",
    blocks: oleoVsAcrilico,
  },
  {
    slug: "cuidar-y-colgar-pintura-al-oleo",
    title: "Cómo cuidar y colgar una pintura al óleo",
    description:
      "Cómo colgar y cuidar un óleo en casa: humedad, sol, herrajes y limpieza en seco. Para departamentos y casas en Chile.",
    imageKey: "bosque",
    imageAlt: "Pintura al óleo de paisaje de Marcela Pedrosa",
    ctaTitle: "¿Vas a colgar un óleo y quieres confirmar el lugar?",
    ctaBody:
      "Si la obra es de este taller, escribe antes de perforar el muro. Te orientamos con las medidas y el tipo de muro que tienes.",
    whatsappText:
      "Hola Marcela, quiero colgar una pintura al óleo. Te cuento el muro y las medidas para hacerlo con cuidado.",
    consultaIntro:
      "Si la obra es de este taller y quieres confirmar cómo colgarla, nómbrala en el mensaje.",
    blocks: cuidarColgarOleo,
  },
  {
    slug: "que-es-el-impresionismo-figurativo",
    title: "Qué es el impresionismo figurativo",
    description:
      "Qué es el impresionismo figurativo: la muestra de 1874, la pincelada y la luz, y cómo se lee hoy en la pintura chilena.",
    imageKey: "bosque",
    imageAlt: "Paisaje al óleo en clave de impresionismo figurativo",
    ctaTitle: "¿Quieres ver este lenguaje en una tela?",
    ctaBody:
      "En el taller hay pintura al óleo de fachadas y bosques, hecha en Concepción. Escríbenos y te mostramos lo que está disponible.",
    whatsappText:
      "Hola Marcela, leí sobre el impresionismo figurativo y me gustaría conocer las obras disponibles.",
    consultaIntro:
      "Para ver el lenguaje en una tela de Marcela, nombra la ficha. El valor se acuerda en la consulta.",
    blocks: impresionismoFigurativo,
  },
  {
    slug: "como-encargar-una-pintura",
    title: "Cómo encargar una pintura a un artista",
    description:
      "Cómo encargar una pintura: pasos, plazos generales del óleo y preguntas útiles antes de acordar motivo, tamaño y entrega.",
    imageKey: "gente",
    imageAlt: "Pintura figurativa de Marcela Pedrosa",
    ctaTitle: "¿Quieres encargar una pintura?",
    ctaBody:
      "Manda el motivo, las medidas del muro y la fecha que tienes en mente. Desde Concepción vemos si el encargo es viable y en qué plazo general.",
    whatsappText:
      "Hola Marcela, me gustaría encargar una pintura. Te cuento el motivo, las medidas del muro y la fecha que manejo.",
    consultaIntro:
      "Un encargo parte por el motivo y la medida. Si ya hay una tela que calza, consulta esa ficha.",
    blocks: encargarPintura,
  },
  {
    slug: "cuanto-cuesta-un-cuadro-original-en-chile",
    title: "Cuánto cuesta un cuadro original en Chile",
    description:
      "Factores que mueven el precio de un cuadro original en Chile: tamaño, técnica, circuito y encargo. El monto se consulta al taller.",
    imageKey: "mujer",
    imageAlt: "Obra original al óleo de Marcela Pedrosa",
    ctaTitle: "¿Quieres el valor de una obra concreta?",
    ctaBody:
      "El monto se responde obra por obra. Escríbenos qué pieza te interesa, o las medidas si se trata de un encargo, y te indicamos el valor.",
    whatsappText:
      "Hola Marcela, quiero consultar el valor de un cuadro original. Te cuento si busco una obra disponible o un encargo, y las medidas.",
    consultaIntro:
      "Esta guía no publica montos. El valor de una obra de Marcela se pide por WhatsApp o por correo.",
    blocks: precioCuadroChile,
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}

export function guideMetadata(guide: Guide): Metadata {
  const url = `${SITE_URL}/guias/${guide.slug}`;
  const image = getOgImageUrl(guide.imageKey, SITE_URL);

  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: url },
    authors: [{ name: "Marcela Pedrosa", url: `${SITE_URL}/marcela-pedrosa` }],
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      type: "article",
      locale: "es_CL",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: guide.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [image],
    },
  };
}
