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
    absolute: "Pintora en Concepción | Marcela Pedrosa - Artista Visual Penquista",
  },
  description:
    "Marcela Pedrosa, pintora profesional en Concepción, Chile. Especializada en óleo sobre tela, impresionismo figurativo. Taller de arte en Concepción, Región del Biobío. Obras originales disponibles.",
  keywords: [
    "pintora concepción",
    "pintora penquista",
    "artista concepción",
    "pintura concepción",
    "taller de pintura concepción",
    "óleo concepción",
    "artista visual concepción",
    "pintora biobío",
    "arte concepción chile",
    "marcela pedrosa",
  ],
  openGraph: {
    title: "Marcela Pedrosa - Pintora en Concepción, Chile",
    description:
      "Pintora profesional en Concepción especializada en óleo sobre tela e impresionismo figurativo. Taller de arte en la Región del Biobío.",
    url: `${BASE_URL}/pintora-concepcion`,
    type: "profile",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Obra de Marcela Pedrosa, pintora en Concepción",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/pintora-concepcion`,
  },
};

export default async function PintoraConcepcionPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.pintora.hero")) ||
    getSiteImageUrl("bosque");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Pintora en Concepción
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Marcela Pedrosa - Artista Visual Especializada en Óleo sobre Tela
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Obra de Marcela Pedrosa, pintora profesional en Concepción"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-ink mb-6">
              Arte y Pintura en Concepción, Región del Biobío
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una reconocida pintora en Concepción, Chile, 
              con una trayectoria consolidada en el ámbito de las artes visuales. Su trabajo se 
              caracteriza por el uso magistral del <strong>óleo sobre tela</strong> y un estilo 
              que fusiona el impresionismo con elementos figurativos contemporáneos.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Taller de Arte en Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Desde su taller en Concepción, Marcela desarrolla obras originales que capturan la 
              esencia del paisaje urbano y natural del Biobío. Su especialización en <strong>pintura 
              al óleo</strong> le permite crear piezas de gran profundidad cromática y durabilidad, 
              utilizando técnicas tradicionales de veladuras y capas superpuestas.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Especialización y Técnica
            </h3>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Óleo sobre tela:</strong> Técnica principal con más de 20 años de experiencia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Impresionismo figurativo:</strong> Estilo característico que combina luz y forma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Temas recurrentes:</strong> Fachadas urbanas, bosques y paisajes del Biobío</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Cerámica artística:</strong> Complementa su obra pictórica con piezas en gres</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Pintora Penquista: Identidad y Territorio
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Como <strong>pintora penquista</strong>, Marcela Pedrosa ha desarrollado un lenguaje 
              visual profundamente conectado con Concepción y la Región del Biobío. Sus obras reflejan 
              la arquitectura característica de la ciudad, los bosques nativos de la zona y la luz 
              particular del sur de Chile.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Su trabajo ha sido expuesto en diversas galerías y espacios culturales de la región, 
              consolidándose como una referente del arte contemporáneo en Concepción. Las obras de 
              Marcela forman parte de colecciones privadas tanto en Chile como en el extranjero.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Obras Disponibles y Encargos
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Marcela Pedrosa ofrece <strong>obras originales en óleo sobre tela</strong> de diversos 
              formatos, desde piezas de tamaño medio hasta grandes formatos para espacios corporativos 
              o residenciales. También realiza encargos personalizados y proyectos especiales.
            </p>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Buscas una pintora en Concepción?
              </h3>
              <p className="mb-6 text-white/90">
                Consulta disponibilidad de obras, encargos personalizados o visitas al taller
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, vi tu página de pintora en Concepción y me gustaría conocer más sobre tu trabajo."
                  label="Contactar por WhatsApp"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver Galería de Obras
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Arte en Concepción: Contexto Cultural
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Concepción cuenta con una rica tradición artística y cultural. Como pintora activa en 
              esta escena, Marcela Pedrosa contribuye al desarrollo del arte visual en la región, 
              participando en exposiciones colectivas, eventos culturales y proyectos de difusión 
              artística en el Biobío.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              La ciudad de Concepción, conocida como la capital cultural del sur de Chile, ofrece 
              un ecosistema propicio para artistas visuales, con galerías, centros culturales y 
              un público apreciador del arte contemporáneo.
            </p>
          </article>

          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Más información
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/marcela-pedrosa"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Marcela Pedrosa →</span>
                <p className="text-sm text-ink-muted mt-1">Biografía y trayectoria</p>
              </Link>
              <Link
                href="/comprar-pintura-concepcion"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Comprar pintura →</span>
                <p className="text-sm text-ink-muted mt-1">Obras originales en Concepción</p>
              </Link>
              <Link
                href="/encargos-pintura"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Encargos de pintura →</span>
                <p className="text-sm text-ink-muted mt-1">Óleo a medida desde el taller</p>
              </Link>
              <Link
                href="/pintura-fachadas-concepcion"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Fachadas y bosques →</span>
                <p className="text-sm text-ink-muted mt-1">Temas recurrentes de la obra</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
