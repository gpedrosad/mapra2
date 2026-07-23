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
      "Pintura de Fachadas y Bosques | Marcela Pedrosa Concepción",
  },
  description:
    "Pintura de fachadas urbanas y bosques del Biobío por Marcela Pedrosa. Óleo e impresionismo figurativo desde Concepción, Chile.",
  keywords: [
    "pintura fachadas concepción",
    "fachadas concepción arte",
    "pintura bosques chile",
    "paisaje biobío pintura",
    "óleo fachadas urbanas",
    "arte urbano concepción",
    "marcela pedrosa fachadas",
    "pintura paisaje sur chile",
  ],
  openGraph: {
    title: "Pintura de Fachadas y Bosques | Marcela Pedrosa",
    description:
      "Series de fachadas urbanas y bosques en óleo. Arte con identidad de Concepción y el Biobío.",
    url: `${BASE_URL}/pintura-fachadas-concepcion`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Pintura de fachadas y bosques de Marcela Pedrosa",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/pintura-fachadas-concepcion`,
  },
};

export default async function PinturaFachadasConcepcionPage() {
  const heroImageUrl =
    (await getManagedImageUrl("home.hero.banner")) ||
    getSiteImageUrl("bosque");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F3B2E] mb-6">
              Pintura de Fachadas y Bosques
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-700 mb-8 leading-relaxed">
              Series al óleo con identidad de Concepción y el Biobío
            </p>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={heroImageUrl}
              alt="Pintura de bosques y paisaje del Biobío por Marcela Pedrosa"
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
            <h2 className="text-3xl font-semibold text-[#0F3B2E] mb-6">
              Fachadas urbanas y bosques en óleo
            </h2>

            <p className="text-zinc-700 leading-relaxed mb-6">
              En la obra de <strong>Marcela Pedrosa</strong>, las{" "}
              <strong>fachadas de Concepción</strong> y los{" "}
              <strong>bosques del Biobío</strong> son temas recurrentes. Con
              pincelada suelta, capas y veladuras, traduce arquitectura y
              paisaje a pintura al óleo de atmósfera impresionista y figurativa.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Fachadas penquistas
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              La arquitectura característica de la ciudad —muros, ventanas, color
              y luz urbana— aparece en series que capturan la memoria visual
              local. No es un registro fotográfico: es{" "}
              <Link
                href="/impresionismo-figurativo-chile"
                className="text-[#0F3B2E] underline"
              >
                impresionismo figurativo
              </Link>{" "}
              con emoción y presencia.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Bosques y paisaje del Biobío
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Los bosques nativos y el paisaje del sur alimentan otra línea de
              trabajo: vegetación, profundidad y la luz particular de la región.
              Ideal para quienes buscan <strong>pintura de paisaje</strong> con
              origen claro en el territorio, no un motivo genérico.
            </p>

            <div className="bg-zinc-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>
                    <strong>Técnica:</strong> óleo sobre tela, más de 20 años de
                    oficio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>
                    <strong>Origen:</strong> taller en Concepción, Región del
                    Biobío
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>
                    <strong>Disponibilidad:</strong> obras en galería y encargos
                    del mismo tema
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Puedes ver piezas en la{" "}
              <Link
                href="/galeria-arte-concepcion"
                className="text-[#0F3B2E] underline"
              >
                galería de arte
              </Link>
              ,{" "}
              <Link
                href="/comprar-pintura-concepcion"
                className="text-[#0F3B2E] underline"
              >
                comprar una pintura
              </Link>{" "}
              o pedir un{" "}
              <Link href="/encargos-pintura" className="text-[#0F3B2E] underline">
                encargo
              </Link>{" "}
              de fachada o bosque a medida.
            </p>

            <div className="bg-[#0F3B2E] text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Te interesan fachadas o bosques?
              </h3>
              <p className="mb-6 text-zinc-100">
                Consulta obras disponibles o un encargo sobre estos temas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, me interesan tus pinturas de fachadas o bosques. ¿Qué tienes disponible?"
                  label="Consultar por WhatsApp"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-[#0F3B2E] px-6 py-3 rounded-xl font-medium hover:bg-zinc-100 transition-colors"
                >
                  Ver galería
                </Link>
              </div>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-zinc-200">
            <h3 className="text-xl font-semibold text-[#0F3B2E] mb-4">
              Relacionado
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/oleo-sobre-tela-chile"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Óleo sobre tela →
                </span>
              </Link>
              <Link
                href="/artista-visual-biobio"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Artista visual Biobío →
                </span>
              </Link>
              <Link
                href="/arte-concepcion"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Arte en Concepción →
                </span>
              </Link>
              <Link
                href="/marcela-pedrosa"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Marcela Pedrosa →
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
