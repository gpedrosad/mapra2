import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";
import { pageMetadata } from "@/lib/metadata";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import CatalogFichaLinks from "../components/seo/CatalogFichaLinks";
import SiteHub from "../components/seo/SiteHub";


export const metadata: Metadata = pageMetadata({
  title: 'Fachadas y bosques | Marcela Pedrosa',
  description:
    'Pintura de fachadas urbanas y bosques del Biobío por Marcela Pedrosa. Óleo e impresionismo figurativo desde Concepción.',
  path: '/pintura-fachadas-concepcion',
  ogImageKey: 'bosque',
  imageAlt: 'Pintura de fachadas y bosques de Marcela Pedrosa',
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
});

export default async function PinturaFachadasConcepcionPage() {
  const heroImageUrl =
    (await getManagedImageUrl("home.hero.banner")) ||
    getSiteImageUrl("bosque");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={[{ name: "Fachadas y bosques", path: "/pintura-fachadas-concepcion" }]} />
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Pintura de Fachadas y Bosques
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Series al óleo con identidad de Concepción y el Biobío
            </p>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Pintura de bosques y paisaje del Biobío por Marcela Pedrosa"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-ink mb-6">
              Fachadas urbanas y bosques en óleo
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              En la obra de <strong>Marcela Pedrosa</strong>, las{" "}
              <strong>fachadas de Concepción</strong> y los{" "}
              <strong>bosques del Biobío</strong> son temas recurrentes. Con
              pincelada suelta, capas y veladuras, traduce arquitectura y
              paisaje a pintura al óleo de atmósfera impresionista y figurativa.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Fachadas penquistas
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              La arquitectura característica de la ciudad —muros, ventanas, color
              y luz urbana— aparece en series que capturan la memoria visual
              local. No es un registro fotográfico: es{" "}
              <Link
                href="/impresionismo-figurativo-chile"
                className="text-brand underline"
              >
                impresionismo figurativo
              </Link>{" "}
              con emoción y presencia.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Bosques y paisaje del Biobío
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Los bosques nativos y el paisaje del sur alimentan otra línea de
              trabajo: vegetación, profundidad y la luz particular de la región.
              Ideal para quienes buscan <strong>pintura de paisaje</strong> con
              origen claro en el territorio, no un motivo genérico.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Técnica:</strong> óleo sobre tela, más de 20 años de
                    oficio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Origen:</strong> taller en Concepción, Región del
                    Biobío
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Disponibilidad:</strong> obras en galería y encargos
                    del mismo tema
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-ink-body leading-relaxed mb-6">
              Puedes ver piezas en la{" "}
              <Link
                href="/galeria-arte-concepcion"
                className="text-brand underline"
              >
                galería de arte
              </Link>
              ,{" "}
              <Link
                href="/comprar-pintura-concepcion"
                className="text-brand underline"
              >
                comprar una pintura
              </Link>{" "}
              o pedir un{" "}
              <Link href="/encargos-pintura" className="text-brand underline">
                encargo
              </Link>{" "}
              de fachada o bosque a medida.
            </p>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Te interesan fachadas o bosques?
              </h3>
              <p className="mb-6 text-white/90">
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
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver galería
                </Link>
              </div>
            </div>
            <p className="text-ink-body leading-relaxed mb-6">
              Esta página cuenta la serie. Para elegir una tela y consultar, usa{" "}
              <Link href="/cuadros/fachadas-arquitectura" className="text-brand underline">
                cuadros de fachadas y arquitectura
              </Link>{" "}
              o{" "}
              <Link href="/cuadros/paisajes-bosques-biobio" className="text-brand underline">
                cuadros de bosques del Biobío
              </Link>
              . Las dos obras de bosque, solas, están en{" "}
              <Link href="/pintura-de-bosques" className="text-brand underline">pintura de bosques</Link>.
              Las de ciudad, en{" "}
              <Link href="/pintura-de-ciudad" className="text-brand underline">pintura de ciudad</Link>.
              El grupo por muro está en{" "}
              <Link href="/cuadros" className="text-brand underline">cuadros</Link>.
              Para medir o encargar, el índice es{" "}
              <Link href="/guias" className="text-brand underline">guías</Link>.
              La compra por motivo está en{" "}
              <Link href="/comprar-arte-chile" className="text-brand underline">
                comprar arte en Chile
              </Link>
              . Otros nombres, con fuente, están en{" "}
              <Link href="/artistas-chilenas" className="text-brand underline">
                artistas chilenas
              </Link>
              .
            </p>
            <CatalogFichaLinks />
          </article>

          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Relacionado
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/oleo-sobre-tela-chile"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Óleo sobre tela →
                </span>
              </Link>
              <Link
                href="/artista-visual-biobio"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Artista visual Biobío →
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
                  Marcela Pedrosa →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteHub />
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
