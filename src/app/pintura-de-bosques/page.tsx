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
    q: "¿Qué pinturas de bosque hay en la galería?",
    a: "Dos óleos sobre tela. Uno muestra troncos verticales con luz entre los árboles. El otro muestra troncos de colores y un árbol blanco sobre un cielo rosado. La medida, si está publicada, aparece en la ficha de cada imagen.",
  },
  {
    q: "¿Dónde se habla de la serie de fachadas y bosques?",
    a: "En la página de pintura de fachadas y bosques. Esta guía enseña solo los dos óleos de bosque que están en la galería.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Pintura de bosques al óleo | Marcela Pedrosa" },
  description:
    "Pintura de bosques al óleo de Marcela Pedrosa: un óleo de 158×122 con luz entre troncos y otro de troncos de colores. Consulta disponibilidad.",
  keywords: [
    "pintura de bosques",
    "óleo de bosque chile",
    "paisaje de árboles óleo",
    "cuadro de bosque",
    "marcela pedrosa bosque",
  ],
  alternates: { canonical: `${BASE_URL}/pintura-de-bosques` },
  openGraph: {
    title: "Pintura de bosques al óleo | Marcela Pedrosa",
    description: "Dos óleos de bosque publicados en la galería.",
    url: `${BASE_URL}/pintura-de-bosques`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Óleo de un bosque con troncos verticales y luz entre los árboles, de Marcela Pedrosa",
      },
    ],
  },
};

export default async function PinturaDeBosquesPage() {
  const works = await listPaintingsByTheme("bosque");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Pinturas de bosque de Marcela Pedrosa"
        listUrl={`${BASE_URL}/pintura-de-bosques`}
        items={works.map((work) => ({
          name: work.alt,
          imageUrl: work.src,
          url: paintingItemUrl(work.publicId, `${BASE_URL}/pintura-de-bosques`),
          description: `${work.info}. ${work.detail}`,
        }))}
      />
      <FaqJsonLd faqs={FAQS} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <GuideBreadcrumb current="Pintura de bosques" />
          <h1 className="mb-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Pintura de bosques
          </h1>
          <p className="text-xl leading-relaxed text-ink-body">
            Dos óleos sobre tela de la galería son bosques. Uno deja ver la luz entre troncos
            oscuros. El otro arma el bosque con troncos de color y un árbol blanco. La medida
            publicada, cuando existe, está bajo la imagen.
          </p>

          <ArtworkGrid works={works} />

          <h2 className="mb-4 text-2xl font-semibold text-ink">Dos bosques, no la misma pincelada</h2>
          <p className="leading-relaxed text-ink-body">
            En el primero los troncos son verticales, la luz entra en franjas y el suelo tiene
            verdes y amarillos. La pincelada se ve. En el segundo los troncos son planos de verde,
            azul, rosa y ocre, hay un árbol blanco al centro y el cielo es rosado.
          </p>
          <p className="mt-4 leading-relaxed text-ink-body">
            El sitio junta esta serie con las fachadas en{" "}
            <Link href="/pintura-fachadas-concepcion" className="text-brand underline">
              pintura de fachadas y bosques
            </Link>
            . Las casas de colores están aparte, en{" "}
            <Link href="/pintura-de-ciudad" className="text-brand underline">
              pintura de ciudad
            </Link>
            .
          </p>

          <ConsultaCta
            title="Consulta un bosque"
            text="Dime si te interesa el bosque con luz entre los troncos o el de troncos de colores."
            whatsappText="Hola Marcela, quiero consultar una pintura de bosque al óleo."
          />

          <RelatedGuides
            paths={["/guias", "/pintura-de-ciudad", "/comprar-arte-chile", "/figuras-al-oleo"]}
            also={[
              {
                href: "/pintura-fachadas-concepcion",
                label: "Fachadas y bosques",
                note: "La serie como la presenta el sitio, fachadas incluidas",
              },
              {
                href: "/cuadros/paisajes-bosques-biobio",
                label: "Cuadros de bosques del Biobío",
                note: "Las mismas dos telas, para consultar y colgar",
              },
              {
                href: "/impresionismo-figurativo-chile",
                label: "Impresionismo figurativo",
                note: "El estilo nombrado para estos paisajes",
              },
            ]}
          />
        </div>
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
