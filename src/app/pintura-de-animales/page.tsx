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
    q: "¿Qué animales hay pintados en la galería?",
    a: "Tres óleos sobre tela: un elefante de frente, dos caballos y un gato recostado. La medida, si está publicada, aparece en la ficha de cada imagen. El elefante es pintura, no cerámica.",
  },
  {
    q: "¿El elefante es cerámica?",
    a: "No. La ficha de 90×120 dice óleo sobre tela. Es una pintura del elefante, no una pieza de gres.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Pintura de animales al óleo | Marcela Pedrosa" },
  description:
    "Pintura de animales al óleo de Marcela Pedrosa: elefante de 90×120, caballos y gato. Obras publicadas en la galería. Consulta por WhatsApp o correo.",
  keywords: [
    "pintura de animales",
    "óleo de animales chile",
    "cuadro de elefante",
    "pintura de caballos",
    "cuadro de gato óleo",
  ],
  alternates: { canonical: `${BASE_URL}/pintura-de-animales` },
  openGraph: {
    title: "Pintura de animales al óleo | Marcela Pedrosa",
    description: "Elefante, caballos y gato, en óleo sobre tela.",
    url: `${BASE_URL}/pintura-de-animales`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("elefante", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Óleo de un elefante de frente, en naranjos, azules y rojos, de Marcela Pedrosa",
      },
    ],
  },
};

export default async function PinturaDeAnimalesPage() {
  const works = await listPaintingsByTheme("animal");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Pintura de animales de Marcela Pedrosa"
        listUrl={`${BASE_URL}/pintura-de-animales`}
        items={works.map((work) => ({
          name: work.alt,
          imageUrl: work.src,
          url: paintingItemUrl(work.publicId, `${BASE_URL}/pintura-de-animales`),
          description: `${work.info}. ${work.detail}`,
        }))}
      />
      <FaqJsonLd faqs={FAQS} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <GuideBreadcrumb current="Pintura de animales" />
          <h1 className="mb-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Pintura de animales
          </h1>
          <p className="text-xl leading-relaxed text-ink-body">
            Tres óleos sobre tela de la galería tienen un animal como motivo: un elefante, dos
            caballos y un gato. La medida publicada, cuando existe, está en la ficha bajo cada
            imagen.
          </p>

          <ArtworkGrid works={works} />

          <h2 className="mb-4 text-2xl font-semibold text-ink">Elefante, caballos y gato</h2>
          <p className="leading-relaxed text-ink-body">
            El{" "}
            <Link href="/pinturas/elefante" className="text-brand underline">
              elefante
            </Link>{" "}
            está de frente, con colmillos claros y el cuerpo en naranja, azul y rojo. Es el único
            de los tres con medida publicada: 90x120, óleo sobre tela. Los{" "}
            <Link href="/pinturas/dos-caballos" className="text-brand underline">
              dos caballos
            </Link>{" "}
            muestran una cabeza grande y otro animal en movimiento, sobre azul, sin números. El{" "}
            <Link href="/pinturas/gato-recostado" className="text-brand underline">
              gato recostado
            </Link>{" "}
            mezcla el color del pelaje con manchas y dibujos, y el fondo es azul. Tampoco trae
            medida.
          </p>
          <p className="mt-4 leading-relaxed text-ink-body">
            Esta página es el motivo animal, no el muro. El elefante de 90x120 es un regalo de
            muro, no de mesa: está en{" "}
            <Link href="/cuadros/grandes-al-oleo" className="text-brand underline">
              cuadros grandes
            </Link>{" "}
            y en{" "}
            <Link href="/cuadros/para-living" className="text-brand underline">
              el living
            </Link>
            . El gato, por la cercanía, está en{" "}
            <Link href="/cuadros/para-dormitorio" className="text-brand underline">
              el dormitorio
            </Link>
            . La pintura del elefante no es una pieza de{" "}
            <Link href="/ceramica-artistica-concepcion" className="text-brand underline">
              cerámica
            </Link>
            . El{" "}
            <Link href="/bodegon-oleo" className="text-brand underline">
              bodegón
            </Link>{" "}
            es otra consulta: objetos sobre una mesa, no un animal.
          </p>

          <ConsultaCta
            title="Consulta una pintura de animales"
            text="Dime si te interesa el elefante, los caballos o el gato."
            whatsappText="Hola Marcela, quiero consultar una pintura de animales al óleo."
          />

          <RelatedGuides
            paths={["/guias", "/bodegon-oleo", "/comprar-arte-chile", "/pintura-de-bosques"]}
          />
        </div>
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
