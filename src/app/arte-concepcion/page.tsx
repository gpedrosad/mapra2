import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getOgImageUrl, getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  title: {
    absolute: "Arte en Concepción | Marcela Pedrosa — Pintura y Arte Contemporáneo",
  },
  description:
    "Arte en Concepción con Marcela Pedrosa: pintura al óleo, arte contemporáneo e impresionismo figurativo. Obras originales y taller artístico en el Biobío, Chile.",
  keywords: [
    "arte concepción",
    "arte en concepción",
    "pintura concepción",
    "pintura y arte concepción",
    "arte contemporáneo concepción",
    "artista concepción chile",
    "galería arte concepción",
    "obras de arte concepción",
    "marcela pedrosa arte",
    "arte biobío",
  ],
  openGraph: {
    title: "Arte en Concepción | Marcela Pedrosa",
    description:
      "Pintura y arte contemporáneo en Concepción. Obras originales de Marcela Pedrosa, artista visual del Biobío.",
    url: `${BASE_URL}/arte-concepcion`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Arte y pintura de Marcela Pedrosa en Concepción",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/arte-concepcion`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Dónde encontrar arte y pintura de Marcela Pedrosa en Concepción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marcela Pedrosa trabaja desde su taller en Concepción, Región del Biobío. Ofrece obras originales de pintura al óleo y piezas de arte contemporáneo, con consulta por WhatsApp o formulario de contacto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipo de arte realiza Marcela Pedrosa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se especializa en pintura al óleo sobre tela e impresionismo figurativo, con temas de fachadas, bosques y paisaje del Biobío. También desarrolla cerámica artística en gres.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se pueden comprar pinturas originales en Concepción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Marcela Pedrosa ofrece obras originales disponibles y encargos personalizados de pintura y arte para hogares, colecciones y espacios en Concepción y el resto de Chile.",
      },
    },
  ],
};

export default async function ArteConcepcionPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.pintora.hero")) ||
    getSiteImageUrl("bosque");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Arte en Concepción
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Pintura y arte contemporáneo de Marcela Pedrosa
            </p>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Pintura y arte de Marcela Pedrosa en Concepción, Chile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-ink mb-6">
              Pintura y arte contemporáneo en Concepción
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> desarrolla <strong>arte en Concepción</strong>{" "}
              con una mirada propia: pintura al óleo, impresionismo figurativo y una
              conexión directa con el territorio del Biobío. Su obra busca conectar
              emocionalmente con quien la contempla, más allá de decorar un espacio.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Arte local con identidad penquista
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El <strong>arte en Concepción</strong> tiene una escena activa de
              galerías, centros culturales y público interesado en pintura
              contemporánea. Desde ese contexto, Marcela Pedrosa aporta un lenguaje
              visual anclado en fachadas urbanas, bosques y la luz del sur de Chile.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Pintura al óleo y obras originales
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Su especialidad es la <strong>pintura al óleo sobre tela</strong>, con
              capas, veladuras y pincelada suelta. Cada pieza es original y hecha a
              mano, pensada para acompañar hogares, oficinas y colecciones que buscan
              arte con carácter en Concepción y el resto del país.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Pintura:</strong> óleo sobre tela, formatos medios y grandes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Arte contemporáneo:</strong> impresionismo figurativo con
                    identidad local
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Taller en Concepción:</strong> producción, encargos y
                    consultas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Cerámica:</strong> piezas en gres que complementan la obra
                    pictórica
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Comprar arte y pintura en Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Si buscas <strong>pintura y arte en Concepción</strong>, puedes revisar la
              galería de obras, consultar disponibilidad o solicitar un encargo
              personalizado. Marcela atiende consultas sobre medidas, envíos dentro de
              Chile y visitas acordadas al taller.
            </p>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Buscas arte en Concepción?
              </h3>
              <p className="mb-6 text-white/90">
                Consulta obras disponibles, encargos de pintura o visitas al taller
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, vi tu página de arte en Concepción y me gustaría conocer más sobre tu pintura."
                  label="Contactar por WhatsApp"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver galería de pinturas
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Preguntas frecuentes
            </h3>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-ink mb-2">
                  ¿Dónde encontrar arte de Marcela Pedrosa en Concepción?
                </h4>
                <p className="text-ink-body leading-relaxed">
                  Desde su taller en Concepción ofrece obras originales y encargos.
                  Puedes contactarla por WhatsApp o desde la página de contacto.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-ink mb-2">
                  ¿Qué tipo de arte realiza?
                </h4>
                <p className="text-ink-body leading-relaxed">
                  Pintura al óleo e impresionismo figurativo, con temas del Biobío, y
                  también cerámica artística en gres.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-ink mb-2">
                  ¿Se pueden comprar pinturas originales?
                </h4>
                <p className="text-ink-body leading-relaxed">
                  Sí: hay obras disponibles y la posibilidad de encargos personalizados
                  para espacios en Concepción y el resto de Chile.
                </p>
              </div>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Más sobre pintura y arte
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/comprar-pintura-concepcion"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Comprar pintura en Concepción →
                </span>
                <p className="text-sm text-ink-muted mt-1">
                  Obras originales disponibles
                </p>
              </Link>
              <Link
                href="/galeria-arte-concepcion"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Galería de arte →
                </span>
                <p className="text-sm text-ink-muted mt-1">
                  Ver pinturas y cerámica
                </p>
              </Link>
              <Link
                href="/encargos-pintura"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Encargos de pintura →
                </span>
                <p className="text-sm text-ink-muted mt-1">
                  Óleo a medida desde el taller
                </p>
              </Link>
              <Link
                href="/marcela-pedrosa"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Marcela Pedrosa →
                </span>
                <p className="text-sm text-ink-muted mt-1">
                  Biografía y trayectoria
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
