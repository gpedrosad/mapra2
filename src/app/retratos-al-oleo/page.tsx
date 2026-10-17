import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import ItemListJsonLd from "../components/seo/ItemListJsonLd";
import {
  ArtworkGrid,
  ConsultaCta,
  FaqJsonLd,
  GuideBreadcrumb,
  RelatedGuides,
} from "../components/seo/GuideParts";
import { getOgImageUrl } from "@/lib/cloudinary";
import { listPaintingsByTheme } from "@/lib/seo-artworks";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

const FAQS = [
  {
    q: "¿Qué retratos al óleo hay publicados?",
    a: "Tres óleos sobre tela: un retrato de mujer con el rostro en azul, naranja y violeta; un rostro con una mano junto al mentón; y una persona con lentes redondos. La medida, si está publicada, aparece en la ficha de cada imagen.",
  },
  {
    q: "¿Se puede encargar un retrato?",
    a: "La galería muestra retratos ya pintados. Un retrato a medida se consulta como encargo, por WhatsApp o correo, sin precio publicado en el sitio.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Retratos al óleo en Chile | Marcela Pedrosa" },
  description:
    "Retratos al óleo de Marcela Pedrosa: tres obras publicadas, una de 100×130. Rostros de cerca y color en planos. Consulta disponibilidad por WhatsApp.",
  keywords: [
    "retratos al óleo",
    "retrato óleo chile",
    "cuadros de retrato",
    "pintura de rostros",
    "marcela pedrosa retrato",
  ],
  alternates: { canonical: `${BASE_URL}/retratos-al-oleo` },
  openGraph: {
    title: "Retratos al óleo | Marcela Pedrosa",
    description: "Tres retratos al óleo publicados. La disponibilidad se consulta.",
    url: `${BASE_URL}/retratos-al-oleo`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("mujer", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Retrato al óleo de una mujer, con el rostro en azul, naranja y violeta, de Marcela Pedrosa",
      },
    ],
  },
};

export default async function RetratosAlOleoPage() {
  const works = await listPaintingsByTheme("retrato");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Retratos al óleo de Marcela Pedrosa"
        listUrl={`${BASE_URL}/retratos-al-oleo`}
        items={works.map((work) => ({
          name: work.alt,
          imageUrl: work.src,
          url: `${BASE_URL}/retratos-al-oleo`,
          description: `${work.info}. ${work.detail}`,
        }))}
      />
      <FaqJsonLd faqs={FAQS} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <GuideBreadcrumb current="Retratos al óleo" />
          <h1 className="mb-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Retratos al óleo
          </h1>
          <p className="text-xl leading-relaxed text-ink-body">
            En la galería hay {works.length} retratos al óleo sobre tela. Son rostros de cerca.
            El color no sigue el tono de la piel: va en planos. La medida publicada, cuando
            existe, está en la ficha bajo cada imagen.
          </p>

          <ArtworkGrid works={works} />

          <h2 className="mb-4 text-2xl font-semibold text-ink">Qué se ve en cada uno</h2>
          <p className="leading-relaxed text-ink-body">
            Uno es un rostro de mujer, con cabello oscuro y planos azules, naranjas y violetas.
            Otro acerca la cara y pone una mano junto al mentón, con verdes, rojos y amarillos.
            El tercero es una persona con lentes redondos; el cabello y el fondo van en azul y
            rojo.
          </p>
          <p className="mt-4 leading-relaxed text-ink-body">
            No son la misma serie que las{" "}
            <Link href="/figuras-al-oleo" className="text-brand underline">
              figuras al óleo
            </Link>
            , donde el cuerpo o las manos importan más que un rostro individual. La técnica, en
            los tres, es{" "}
            <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
              óleo sobre tela
            </Link>
            .
          </p>

          <ConsultaCta
            title="Consulta un retrato"
            text="Dime cuál de los tres te interesa, o si buscas un retrato a medida."
            whatsappText="Hola Marcela, quiero consultar un retrato al óleo."
          />

          <RelatedGuides
            paths={["/guias", "/figuras-al-oleo", "/comprar-arte-chile", "/bodegon-oleo"]}
            also={[
              {
                href: "/encargos-pintura",
                label: "Encargos",
                note: "Para un retrato que todavía no está pintado",
              },
            ]}
          />
        </div>
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
