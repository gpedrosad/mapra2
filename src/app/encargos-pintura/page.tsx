import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";
import { pageMetadata } from "@/lib/metadata";
import ArtworkCards from "../components/seo/ArtworkCards";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import SiteHub from "../components/seo/SiteHub";
import { listCatalogArtworks } from "@/lib/artworks";
import { CONTACT_EMAIL } from "@/lib/site";


export const metadata: Metadata = pageMetadata({
  title: 'Encargar una pintura | Marcela Pedrosa',
  description:
    'Encarga una pintura al óleo a medida con Marcela Pedrosa, desde su taller en Concepción. Consulta por WhatsApp o correo.',
  path: '/encargos-pintura',
  ogImageKey: 'gente',
  imageAlt: 'Encargo de pintura al óleo de Marcela Pedrosa',
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
});

export default async function EncargosPinturaPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.artista-visual.hero")) ||
    getSiteImageUrl("gente");
  const works = await listCatalogArtworks();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={[{ name: "Encargar una pintura", path: "/encargos-pintura" }]} />
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Encargos de Pintura
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Óleo a medida desde el taller en Concepción
            </p>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Pintura al óleo por encargo de Marcela Pedrosa en Concepción"
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
              Pintura personalizada en Concepción
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              Además de obras disponibles, <strong>Marcela Pedrosa</strong> realiza{" "}
              <strong>encargos de pintura</strong> en óleo sobre tela. El proceso
              se adapta a tu espacio, formato y tema —desde fachadas y bosques del
              Biobío hasta piezas figurativas con la mirada del impresionismo
              contemporáneo.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Qué puedes encargar
            </h3>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Formatos a medida:</strong> medios y grandes formatos
                    para muro o espacio corporativo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Temas:</strong> fachadas urbanas, bosques, paisaje y
                    figuración
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Estilo:</strong> impresionismo figurativo con
                    pincelada suelta y veladuras
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Proyectos especiales:</strong> series o piezas para
                    interiores residenciales
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Cómo funciona el encargo
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Escribes por WhatsApp o{" "}
              <Link href="/contacto" className="text-brand underline">
                contacto
              </Link>{" "}
              con la idea, medidas aproximadas y referencias. Marcela confirma
              viabilidad, plazos y valor. La obra se desarrolla en el{" "}
              <Link
                href="/taller-arte-concepcion"
                className="text-brand underline"
              >
                taller de arte en Concepción
              </Link>
              , con la misma técnica de óleo que caracteriza su trabajo.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Si prefieres una pieza lista para llevar, revisa cómo{" "}
              <Link
                href="/comprar-pintura-concepcion"
                className="text-brand underline"
              >
                comprar pintura en Concepción
              </Link>{" "}
              o la{" "}
              <Link href="/pinturas" className="text-brand underline">
                galería de obras
              </Link>
              .
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Obras del taller, para ver formato
            </h3>
            <p className="text-ink-body leading-relaxed mb-6">
              Estas pinturas ya están en la galería. Sirven para ver técnica y,
              cuando la ficha la trae, la medida. No son encargos de clientes:
              son obras publicadas en el sitio.
            </p>
            <ArtworkCards works={works.filter((work) => work.measure)} />

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Quieres encargar una pintura?
              </h3>
              <p className="mb-6 text-white/90">
                Cuéntanos formato, tema y plazo tentativo por WhatsApp o por correo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, me gustaría encargar una pintura al óleo. Te cuento medidas e idea."
                  label="Solicitar encargo"
                  size="lg"
                />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <p className="text-ink-body leading-relaxed mb-6">
              El paso a paso de la consulta está en{" "}
              <Link href="/guias/como-encargar-una-pintura" className="text-brand underline">
                cómo encargar una pintura
              </Link>
              . Qué se conversa del valor, sin cifras en el sitio, está en{" "}
              <Link href="/guias/cuanto-cuesta-un-cuadro-original-en-chile" className="text-brand underline">
                qué define el valor de un cuadro
              </Link>{" "}
              y en{" "}
              <Link href="/guias/oleo-vs-acrilico" className="text-brand underline">óleo o acrílico</Link>.
              Si la obra ya existe, mira{" "}
              <Link href="/cuadros/regalar-pintura-original" className="text-brand underline">
                regalar una pintura original
              </Link>{" "}
              o{" "}
              <Link href="/cuadros/para-oficina" className="text-brand underline">
                cuadros para oficina
              </Link>
              .
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Relacionado
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pintura-fachadas-concepcion"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Pintura de fachadas →
                </span>
              </Link>
              <Link
                href="/impresionismo-figurativo-chile"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Impresionismo figurativo →
                </span>
              </Link>
              <Link
                href="/pintora-concepcion"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Pintora en Concepción →
                </span>
              </Link>
              <Link
                href="/tiempos-de-entrega"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Tiempos de entrega →
                </span>
              </Link>
              <Link
                href="/oleo-sobre-tela-chile"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Óleo sobre tela →
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
