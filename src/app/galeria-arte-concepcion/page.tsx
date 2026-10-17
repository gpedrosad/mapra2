import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getOgImageUrl } from "@/lib/cloudinary";
import { SeoManagedHero } from "../components/seo/SeoManagedHero";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  title: {
    absolute:
      "Galería de Arte en Concepción | Pinturas Marcela Pedrosa",
  },
  description:
    "Galería de arte en Concepción: pinturas al óleo y obra contemporánea de Marcela Pedrosa. Visita online la selección de obras originales del Biobío.",
  keywords: [
    "galería arte concepción",
    "galería de arte concepción",
    "galería pintura concepción",
    "ver arte concepción",
    "obras de arte concepción",
    "galería óleo chile",
    "marcela pedrosa galería",
  ],
  openGraph: {
    title: "Galería de Arte en Concepción | Marcela Pedrosa",
    description:
      "Selección de pinturas originales en óleo. Arte contemporáneo desde Concepción.",
    url: `${BASE_URL}/galeria-arte-concepcion`,
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
  alternates: {
    canonical: `${BASE_URL}/galeria-arte-concepcion`,
  },
};

export default function GaleriaArteConcepcionPage() {

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Galería de Arte en Concepción
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Pinturas originales de Marcela Pedrosa
            </p>
          </div>

          <SeoManagedHero sectionId="pages.pintora.hero" fallbackKey="bosque" />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-ink mb-6">
              Ver pintura y arte contemporáneo en Concepción
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              Esta <strong>galería de arte en Concepción</strong> reúne la obra
              pictórica de <strong>Marcela Pedrosa</strong>:{" "}
              <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
                óleo sobre tela
              </Link>
              ,{" "}
              <Link
                href="/impresionismo-figurativo-chile"
                className="text-brand underline"
              >
                impresionismo figurativo
              </Link>{" "}
              y piezas con identidad del Biobío. Es el
              punto de partida para explorar formatos, temas y disponibilidad
              antes de comprar o encargar.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Qué encontrarás en la galería
            </h3>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Pinturas al óleo:</strong> obras originales con
                    medidas visibles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Cerámica gres:</strong> piezas artísticas en una
                    selección aparte
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Temas locales:</strong> fachadas, bosques y atmósfera
                    penquista
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-ink-body leading-relaxed mb-6">
              Entra a la{" "}
              <Link href="/pinturas" className="text-brand underline">
                galería de pinturas
              </Link>{" "}
              para ver cada obra en detalle, o a{" "}
              <Link href="/esculturas" className="text-brand underline">
                cerámica gres
              </Link>
              . Si una pieza te interesa, puedes{" "}
              <Link
                href="/comprar-pintura-concepcion"
                className="text-brand underline"
              >
                comprar pintura en Concepción
              </Link>{" "}
              o solicitar un{" "}
              <Link href="/encargos-pintura" className="text-brand underline">
                encargo
              </Link>
              .
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Arte local, acceso online
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Concepción tiene una escena cultural activa. Esta galería digital
              acerca el trabajo de una{" "}
              <Link
                href="/pintora-concepcion"
                className="text-brand underline"
              >
                pintora en Concepción
              </Link>{" "}
              a quienes buscan arte con origen claro en el territorio, sin
              perder la opción de visita o retiro acordado al taller.
            </p>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Explora la galería
              </h3>
              <p className="mb-6 text-white/90">
                Obras originales de pintura y arte desde Concepción
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver pinturas
                </Link>
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, vi tu galería de arte en Concepción y me gustaría consultar por una obra."
                  label="Consultar una obra"
                  size="lg"
                />
              </div>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Relacionado
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link
                href="/guias"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Guías de obra →</span>
                <p className="text-sm text-ink-muted mt-1">Retratos, bosques, ciudad y más</p>
              </Link>
              <Link
                href="/arte-concepcion"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Arte en Concepción →
                </span>
              </Link>
              <Link
                href="/pintura-fachadas-concepcion"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Pintura de fachadas →
                </span>
              </Link>
              <Link
                href="/marcela-pedrosa"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Marcela Pedrosa →
                </span>
              </Link>
              <Link
                href="/prensa"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Prensa →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
