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
    absolute:
      "Comprar Pintura en Concepción | Obras Originales Marcela Pedrosa",
  },
  description:
    "Compra pintura original en Concepción. Óleo sobre tela de Marcela Pedrosa: obras disponibles, encargos y envíos en Chile. Arte contemporáneo desde el Biobío.",
  keywords: [
    "comprar pintura concepción",
    "pinturas originales concepción",
    "cuadros concepción",
    "comprar arte concepción",
    "óleo sobre tela a la venta",
    "obras de arte concepción",
    "marcela pedrosa comprar",
    "pintura original chile",
  ],
  openGraph: {
    title: "Comprar Pintura en Concepción | Marcela Pedrosa",
    description:
      "Obras originales en óleo sobre tela. Compra pintura y arte contemporáneo desde Concepción.",
    url: `${BASE_URL}/comprar-pintura-concepcion`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Pinturas originales de Marcela Pedrosa en Concepción",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/comprar-pintura-concepcion`,
  },
};

export default async function ComprarPinturaConcepcionPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.pintora.hero")) ||
    getSiteImageUrl("bosque");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Comprar Pintura en Concepción
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Obras originales en óleo de Marcela Pedrosa
            </p>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Pintura original al óleo de Marcela Pedrosa disponible en Concepción"
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
              Pinturas originales a la venta en Concepción
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              Si buscas <strong>comprar pintura en Concepción</strong>, Marcela
              Pedrosa ofrece <strong>obras originales en óleo sobre tela</strong>:
              piezas únicas de impresionismo figurativo, pensadas para hogares,
              oficinas y colecciones. Cada pintura se realiza a mano en su taller
              del Biobío.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Cómo comprar una obra
            </h3>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ol className="space-y-3 text-ink-body list-decimal list-inside">
                <li>
                  Revisa la{" "}
                  <Link href="/pinturas" className="text-brand underline">
                    galería de pinturas
                  </Link>{" "}
                  o consulta disponibilidad por WhatsApp.
                </li>
                <li>
                  Confirma medidas, tema y formato (medio o gran formato).
                </li>
                <li>
                  Coordina retiro en Concepción o envío dentro de Chile.
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Qué incluye cada pintura
            </h3>

            <ul className="space-y-3 text-ink-body mb-8">
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>
                  <strong>Óleo sobre tela natural:</strong> profundidad cromática
                  y permanencia en el tiempo
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>
                  <strong>Obra única:</strong> no son reproducciones ni impresiones
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>
                  <strong>Temas:</strong> fachadas, bosques y paisaje del Biobío
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>
                  <strong>Origen local:</strong> creadas en el taller de arte en
                  Concepción
                </span>
              </li>
            </ul>

            <p className="text-ink-body leading-relaxed mb-6">
              También puedes solicitar un{" "}
              <Link href="/encargos-pintura" className="text-brand underline">
                encargo de pintura
              </Link>{" "}
              si buscas una pieza a medida. Consulta{" "}
              <Link
                href="/tiempos-de-entrega"
                className="text-brand underline"
              >
                tiempos de entrega
              </Link>{" "}
              y la{" "}
              <Link href="/devoluciones" className="text-brand underline">
                política de devolución
              </Link>
              .
            </p>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Quieres comprar una pintura en Concepción?
              </h3>
              <p className="mb-6 text-white/90">
                Consulta obras disponibles, precios y envíos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, quiero comprar una pintura original en Concepción. ¿Qué obras tienes disponibles?"
                  label="Consultar por WhatsApp"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver galería
                </Link>
              </div>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Relacionado
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/galeria-arte-concepcion"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Galería de arte en Concepción →
                </span>
              </Link>
              <Link
                href="/encargos-pintura"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Encargos de pintura →
                </span>
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
                href="/marcela-pedrosa"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Sobre Marcela Pedrosa →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
