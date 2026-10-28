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
import { listPaintingsByTheme, paintingItemUrl } from "@/lib/seo-artworks";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

const FAQS = [
  {
    q: "¿Qué figuras al óleo están en la galería?",
    a: "Cuatro óleos sobre tela: un grupo de figuras sin rasgos en el rostro, una figura recostada en formato apaisado, unos rostros superpuestos con un abanico, y unas manos superpuestas. La medida, si está publicada, aparece en la ficha de cada imagen.",
  },
  {
    q: "¿Es lo mismo que el impresionismo figurativo?",
    a: "El sitio describe el trabajo de Marcela Pedrosa como impresionismo figurativo, sobre todo en fachadas y bosques. Esta guía muestra las pinturas donde la figura humana es el motivo: el grupo, la figura recostada, los rostros y las manos.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Figuras al óleo | Marcela Pedrosa, Chile" },
  description:
    "Figuras al óleo de Marcela Pedrosa: un grupo de 110×110, una figura recostada, rostros superpuestos y manos. Obras publicadas. Consulta por WhatsApp.",
  keywords: [
    "figuras al óleo",
    "pintura figurativa chile",
    "óleo figura humana",
    "cuadros de personas",
    "marcela pedrosa figuras",
  ],
  alternates: { canonical: `${BASE_URL}/figuras-al-oleo` },
  openGraph: {
    title: "Figuras al óleo | Marcela Pedrosa",
    description: "Cuatro óleos donde la figura humana es el motivo.",
    url: `${BASE_URL}/figuras-al-oleo`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("gente", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Óleo de un grupo de figuras de colores, sin rasgos en el rostro, de Marcela Pedrosa",
      },
    ],
  },
};

export default async function FigurasAlOleoPage() {
  const works = await listPaintingsByTheme("figura");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Figuras al óleo de Marcela Pedrosa"
        listUrl={`${BASE_URL}/figuras-al-oleo`}
        items={works.map((work) => ({
          name: work.alt,
          imageUrl: work.src,
          url: paintingItemUrl(work.publicId, `${BASE_URL}/figuras-al-oleo`),
          description: `${work.info}. ${work.detail}`,
        }))}
      />
      <FaqJsonLd faqs={FAQS} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <GuideBreadcrumb current="Figuras al óleo" />
          <h1 className="mb-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Figuras al óleo
          </h1>
          <p className="text-xl leading-relaxed text-ink-body">
            Cuatro pinturas publicadas toman la figura humana como motivo. No son retratos de
            una sola cara: hay un grupo, una figura recostada, rostros que se superponen y unas
            manos. Todas son óleo sobre tela.
          </p>

          <ArtworkGrid works={works} />

          <h2 className="mb-4 text-2xl font-semibold text-ink">Cuatro maneras de pintar la figura</h2>
          <p className="leading-relaxed text-ink-body">
            El{" "}
            <Link href="/pinturas/grupo-de-figuras" className="text-brand underline">
              grupo de figuras
            </Link>{" "}
            es el único con medida: 110x110, óleo sobre tela. Las personas están de pie, el
            rostro no tiene rasgos y el color está en la ropa. La{" "}
            <Link href="/pinturas/figura-recostada" className="text-brand underline">
              figura recostada
            </Link>{" "}
            es un óleo apaisado, de espaldas, sobre telas claras, sin números en la ficha.{" "}
            <Link href="/pinturas/rostros-superpuestos" className="text-brand underline">
              Rostros superpuestos
            </Link>{" "}
            junta varios rostros, un abanico azul y planos de color.{" "}
            <Link href="/pinturas/manos-superpuestas" className="text-brand underline">
              Manos superpuestas
            </Link>{" "}
            se queda en las manos, en grises y celestes.
          </p>
          <p className="mt-4 leading-relaxed text-ink-body">
            El grupo de 110x110 también se consulta para un espacio compartido, en{" "}
            <Link href="/cuadros/para-oficina" className="text-brand underline">
              cuadros para la oficina
            </Link>
            . La figura recostada, por el formato ancho, está en{" "}
            <Link href="/cuadros/para-dormitorio" className="text-brand underline">
              cuadros para el dormitorio
            </Link>
            . El grupo es de Marcela Pedrosa.{" "}
            <Link href="/artistas-chilenas/totoy-zamudio" className="text-brand underline">
              Totoy Zamudio
            </Link>{" "}
            también pinta figuras humanas; su obra no se vende aquí. Un rostro solo no entra aquí: está en{" "}
            <Link href="/retratos-al-oleo" className="text-brand underline">
              retratos al óleo
            </Link>
            . El estilo que el sitio nombra para fachadas y bosques es el{" "}
            <Link href="/impresionismo-figurativo-chile" className="text-brand underline">
              impresionismo figurativo
            </Link>
            .
          </p>

          <ConsultaCta
            title="Consulta una figura"
            text="Cuéntame cuál de estas cuatro quieres ver con calma, o qué formato buscas."
            whatsappText="Hola Marcela, quiero consultar una pintura de figuras al óleo."
          />

          <RelatedGuides
            paths={["/guias", "/retratos-al-oleo", "/comprar-arte-chile", "/pintura-de-ciudad"]}
          />
        </div>
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
