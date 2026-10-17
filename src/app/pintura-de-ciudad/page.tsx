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
    q: "¿Qué pinturas de ciudad hay publicadas?",
    a: "Dos óleos sobre tela, sin medida en la ficha. Uno muestra casas de colores, cordillera, un tren y árboles en flor. El otro junta dos vistas de casas: una de día y otra de noche.",
  },
  {
    q: "¿Son las fachadas de Concepción?",
    a: "El sitio habla de una serie de fachadas urbanas del Biobío. Estas dos pinturas son vistas de ciudad y de casas de colores. La página de fachadas cuenta esa serie; aquí se ven estas dos obras.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Pintura de ciudad al óleo | Marcela Pedrosa" },
  description:
    "Pintura de ciudad al óleo de Marcela Pedrosa: casas de colores, cordillera y tren, y un par de vistas de día y de noche. Consulta disponibilidad.",
  keywords: [
    "pintura de ciudad",
    "casas de colores óleo",
    "paisaje urbano chile",
    "cuadro de ciudad",
    "marcela pedrosa ciudad",
  ],
  alternates: { canonical: `${BASE_URL}/pintura-de-ciudad` },
  openGraph: {
    title: "Pintura de ciudad al óleo | Marcela Pedrosa",
    description: "Dos óleos de casas y ciudad publicados en la galería.",
    url: `${BASE_URL}/pintura-de-ciudad`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("c12", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Óleo de una ciudad de casas de colores, con cordillera, tren y árboles en flor, de Marcela Pedrosa",
      },
    ],
  },
};

export default async function PinturaDeCiudadPage() {
  const works = await listPaintingsByTheme("ciudad");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Pinturas de ciudad de Marcela Pedrosa"
        listUrl={`${BASE_URL}/pintura-de-ciudad`}
        items={works.map((work) => ({
          name: work.alt,
          imageUrl: work.src,
          url: `${BASE_URL}/pintura-de-ciudad`,
          description: `${work.info}. ${work.detail}`,
        }))}
      />
      <FaqJsonLd faqs={FAQS} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <GuideBreadcrumb current="Pintura de ciudad" />
          <h1 className="mb-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Pintura de ciudad
          </h1>
          <p className="text-xl leading-relaxed text-ink-body">
            Dos óleos sobre tela muestran ciudad y casas. Ninguno publica medida. Uno es una
            vista ancha, con cordillera y un tren. El otro pone lado a lado el día y la noche.
          </p>

          <ArtworkGrid works={works} />

          <h2 className="mb-4 text-2xl font-semibold text-ink">Qué hay en cada óleo</h2>
          <p className="leading-relaxed text-ink-body">
            En el primero se ven casas de colores, una cordillera nevada, un tren amarillo y
            azul, árboles en flor y un arco. En el segundo hay dos vistas de casas: de día, con
            escaleras, y de noche, con luna y ventanas encendidas.
          </p>
          <p className="mt-4 leading-relaxed text-ink-body">
            La serie de fachadas que el sitio describe está en{" "}
            <Link href="/pintura-fachadas-concepcion" className="text-brand underline">
              pintura de fachadas y bosques
            </Link>
            . Los bosques solos están en{" "}
            <Link href="/pintura-de-bosques" className="text-brand underline">
              pintura de bosques
            </Link>
            .
          </p>

          <ConsultaCta
            title="Consulta una pintura de ciudad"
            text="Dime si te interesa la vista con el tren o el par de día y noche."
            whatsappText="Hola Marcela, quiero consultar una pintura de ciudad al óleo."
          />

          <RelatedGuides
            paths={["/guias", "/pintura-de-bosques", "/figuras-al-oleo", "/comprar-arte-chile"]}
            also={[
              {
                href: "/pintura-fachadas-concepcion",
                label: "Fachadas y bosques",
                note: "La serie urbana que el sitio ya presenta",
              },
              {
                href: "/cuadros/fachadas-arquitectura",
                label: "Cuadros de fachadas",
                note: "Esas telas, para consultar medida y disponibilidad",
              },
            ]}
          />
        </div>
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
