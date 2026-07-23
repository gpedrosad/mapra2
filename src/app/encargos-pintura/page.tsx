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
      "Encargos de Pintura | Óleo a Medida — Marcela Pedrosa Concepción",
  },
  description:
    "Encarga una pintura al óleo a medida con Marcela Pedrosa en Concepción. Retratos, fachadas, bosques y formatos personalizados. Arte original desde el Biobío.",
  keywords: [
    "encargos pintura",
    "encargar pintura concepción",
    "retrato al óleo concepción",
    "pintura a medida chile",
    "cuadro personalizado concepción",
    "óleo por encargo",
    "marcela pedrosa encargos",
    "pintura personalizada biobío",
  ],
  openGraph: {
    title: "Encargos de Pintura | Marcela Pedrosa",
    description:
      "Pintura al óleo a medida desde Concepción: encargos personalizados, formatos y temas a consultar.",
    url: `${BASE_URL}/encargos-pintura`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("gente", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Encargo de pintura al óleo de Marcela Pedrosa",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/encargos-pintura`,
  },
};

export default async function EncargosPinturaPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.artista-visual.hero")) ||
    getSiteImageUrl("gente");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F3B2E] mb-6">
              Encargos de Pintura
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-700 mb-8 leading-relaxed">
              Óleo a medida desde el taller en Concepción
            </p>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={heroImageUrl}
              alt="Pintura al óleo por encargo de Marcela Pedrosa en Concepción"
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
              Pintura personalizada en Concepción
            </h2>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Además de obras disponibles, <strong>Marcela Pedrosa</strong> realiza{" "}
              <strong>encargos de pintura</strong> en óleo sobre tela. El proceso
              se adapta a tu espacio, formato y tema —desde fachadas y bosques del
              Biobío hasta piezas figurativas con la mirada del impresionismo
              contemporáneo.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Qué puedes encargar
            </h3>

            <div className="bg-zinc-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>
                    <strong>Formatos a medida:</strong> medios y grandes formatos
                    para muro o espacio corporativo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>
                    <strong>Temas:</strong> fachadas urbanas, bosques, paisaje y
                    figuración
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>
                    <strong>Estilo:</strong> impresionismo figurativo con
                    pincelada suelta y veladuras
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>
                    <strong>Proyectos especiales:</strong> series o piezas para
                    interiores residenciales
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Cómo funciona el encargo
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Escribes por WhatsApp o{" "}
              <Link href="/contacto" className="text-[#0F3B2E] underline">
                contacto
              </Link>{" "}
              con la idea, medidas aproximadas y referencias. Marcela confirma
              viabilidad, plazos y valor. La obra se desarrolla en el{" "}
              <Link
                href="/taller-arte-concepcion"
                className="text-[#0F3B2E] underline"
              >
                taller de arte en Concepción
              </Link>
              , con la misma técnica de óleo que caracteriza su trabajo.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Si prefieres una pieza lista para llevar, revisa cómo{" "}
              <Link
                href="/comprar-pintura-concepcion"
                className="text-[#0F3B2E] underline"
              >
                comprar pintura en Concepción
              </Link>{" "}
              o la{" "}
              <Link href="/pinturas" className="text-[#0F3B2E] underline">
                galería de obras
              </Link>
              .
            </p>

            <div className="bg-[#0F3B2E] text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Quieres encargar una pintura?
              </h3>
              <p className="mb-6 text-zinc-100">
                Cuéntanos formato, tema y plazo tentativo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, me gustaría encargar una pintura al óleo. Te cuento medidas e idea."
                  label="Solicitar encargo"
                  size="lg"
                />
                <Link
                  href="/oleo-sobre-tela-chile"
                  className="inline-block bg-white text-[#0F3B2E] px-6 py-3 rounded-xl font-medium hover:bg-zinc-100 transition-colors"
                >
                  Sobre la técnica
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
                href="/pintura-fachadas-concepcion"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Pintura de fachadas →
                </span>
              </Link>
              <Link
                href="/impresionismo-figurativo-chile"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Impresionismo figurativo →
                </span>
              </Link>
              <Link
                href="/pintora-concepcion"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Pintora en Concepción →
                </span>
              </Link>
              <Link
                href="/tiempos-de-entrega"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Tiempos de entrega →
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
