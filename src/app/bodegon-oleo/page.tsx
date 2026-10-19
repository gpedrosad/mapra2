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
    q: "¿Hay un bodegón en la galería?",
    a: "Sí, uno. Es un óleo sobre tela con calabazas y zapallos sobre una mesa. La ficha no publica medidas.",
  },
  {
    q: "¿Hay otros bodegones?",
    a: "En la galería publicada no. El resto de las pinturas son retratos, figuras, animales, bosques o ciudad. Otro bodegón se consulta como encargo.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Bodegón al óleo | Marcela Pedrosa, Chile" },
  description:
    "Bodegón al óleo de Marcela Pedrosa: calabazas y zapallos sobre una mesa. Es la naturaleza muerta publicada en la galería. Consulta disponibilidad.",
  keywords: [
    "bodegón óleo",
    "naturaleza muerta chile",
    "bodegón de calabazas",
    "cuadro de bodegón",
    "marcela pedrosa bodegón",
  ],
  alternates: { canonical: `${BASE_URL}/bodegon-oleo` },
  openGraph: {
    title: "Bodegón al óleo | Marcela Pedrosa",
    description: "Calabazas y zapallos al óleo, la naturaleza muerta publicada.",
    url: `${BASE_URL}/bodegon-oleo`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("c5", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Bodegón al óleo con calabazas y zapallos sobre una mesa, de Marcela Pedrosa",
      },
    ],
  },
};

export default async function BodegonOleoPage() {
  const works = await listPaintingsByTheme("bodegon");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Bodegón al óleo de Marcela Pedrosa"
        listUrl={`${BASE_URL}/bodegon-oleo`}
        items={works.map((work) => ({
          name: work.alt,
          imageUrl: work.src,
          url: paintingItemUrl(work.publicId, `${BASE_URL}/bodegon-oleo`),
          description: `${work.info}. ${work.detail}`,
        }))}
      />
      <FaqJsonLd faqs={FAQS} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <GuideBreadcrumb current="Bodegón al óleo" />
          <h1 className="mb-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Bodegón al óleo
          </h1>
          <p className="text-xl leading-relaxed text-ink-body">
            La galería publica un bodegón: calabazas y zapallos sobre una mesa, en óleo sobre
            tela. No hay más naturalezas muertas en las fichas actuales, y esta no trae medida.
          </p>

          <ArtworkGrid works={works} />

          <h2 className="mb-4 text-2xl font-semibold text-ink">Qué hay sobre la mesa</h2>
          <p className="leading-relaxed text-ink-body">
            Se ven calabazas y zapallos de distinto tamaño. Hay una grande al centro, una rayada
            a la izquierda, una chica naranja, una verde oscura y una alargada y clara a la
            derecha. El fondo es ocre y la mesa, de madera. A diferencia de los retratos y de
            los animales, aquí el color se acerca al de los objetos.
          </p>
          <p className="mt-4 leading-relaxed text-ink-body">
            Si buscas otro motivo de la misma galería, están la{" "}
            <Link href="/pintura-de-animales" className="text-brand underline">
              pintura de animales
            </Link>{" "}
            y los{" "}
            <Link href="/retratos-al-oleo" className="text-brand underline">
              retratos
            </Link>
            . Otro bodegón, distinto de este, se habla como{" "}
            <Link href="/encargos-pintura" className="text-brand underline">
              encargo
            </Link>
            .
          </p>

          <ConsultaCta
            title="Consulta el bodegón"
            text="Pregunta si sigue disponible y qué medida tiene. El precio se confirma en la consulta."
            whatsappText="Hola Marcela, quiero consultar el bodegón de calabazas al óleo."
          />

          <RelatedGuides
            paths={["/guias", "/pintura-de-animales", "/retratos-al-oleo", "/comprar-arte-chile"]}
          />
        </div>
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
