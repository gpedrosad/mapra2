import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { listCatalogArtworks } from "@/lib/artworks";
import { getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import ArtworkCards from "../components/seo/ArtworkCards";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import CatalogFichaLinks, {
  DescriptiveFichaLinks,
} from "../components/seo/CatalogFichaLinks";
import ConsultaSteps from "../components/seo/ConsultaSteps";
import { FaqJsonLd } from "../components/seo/GuideParts";
import ItemListJsonLd from "../components/seo/ItemListJsonLd";
import SiteHub from "../components/seo/SiteHub";


export const metadata: Metadata = pageMetadata({
  title: 'Arte en Concepción: óleos y taller | Marcela Pedrosa',
  description:
    'Arte en Concepción: óleos e impresionismo figurativo de Marcela Pedrosa, desde su taller. Consulta por WhatsApp o correo. Sin precio en la página.',
  path: '/arte-concepcion',
  ogImageKey: 'bosque',
  imageAlt: 'Arte y pintura de Marcela Pedrosa en Concepción',
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
});

const ARTE_FAQS = [
  {
    q: "¿Dónde encontrar arte de Marcela Pedrosa en Concepción?",
    a: "En su taller en Concepción, Región del Biobío. Las pinturas publicadas tienen ficha en este sitio. La consulta es por WhatsApp al +56 9 5618 9912 o por correo a contacto@marcelapedrosa.com.",
  },
  {
    q: "¿Qué tipo de arte realiza Marcela Pedrosa?",
    a: "Óleo sobre tela e impresionismo figurativo, con fachadas, bosques y paisaje del Biobío, y cerámica artística en gres.",
  },
  {
    q: "¿Cómo se compra una pintura original?",
    a: "Se elige la ficha, se consulta por WhatsApp al +56 9 5618 9912 o por correo a contacto@marcelapedrosa.com, y el envío o el retiro se coordina en esa conversación. Los plazos están en tiempos de entrega y los cambios, en devoluciones. La ficha no trae precio.",
  },
];

export default async function ArteConcepcionPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.pintora.hero")) ||
    getSiteImageUrl("bosque");
  const works = await listCatalogArtworks();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <FaqJsonLd faqs={ARTE_FAQS} />
      {works.length > 0 ? (
        <ItemListJsonLd
          listName="Arte publicado de Marcela Pedrosa en Concepción"
          listUrl={absoluteUrl("/arte-concepcion")}
          items={works.map((work) => ({
            name: work.name,
            imageUrl: work.imageUrl.startsWith("http")
              ? work.imageUrl
              : absoluteUrl(work.imageUrl),
            url: absoluteUrl(`/pinturas/${work.slug}`),
            description: work.info,
            artMedium: work.medium,
          }))}
        />
      ) : null}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={[{ name: "Arte en Concepción", path: "/arte-concepcion" }]} />
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
              sizes="(max-width: 896px) 100vw, 896px"
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
              Su especialidad es la{" "}
              <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
                pintura al óleo sobre tela
              </Link>
              , con capas, veladuras y pincelada suelta. Cada pieza es original y hecha a
              mano, pensada para acompañar hogares, oficinas y colecciones que buscan
              arte con carácter en Concepción y el resto del país. Detrás de cada tela
              está el{" "}
              <Link href="/taller-arte-concepcion" className="text-brand underline">
                taller de arte en Concepción
              </Link>
              , donde también nace la{" "}
              <Link href="/ceramica-artistica-concepcion" className="text-brand underline">
                cerámica artística en Concepción
              </Link>
              .
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
                    <strong>Arte contemporáneo:</strong>{" "}
                    <Link
                      href="/impresionismo-figurativo-chile"
                      className="text-brand underline"
                    >
                      impresionismo figurativo
                    </Link>{" "}
                    con identidad local
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

            <ConsultaSteps
              heading="Cómo consultar una obra en Concepción"
              intro="La compra de este arte es por consulta, desde el taller en Concepción. No hay carrito. El precio no está en la ficha."
            />

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

            <h2 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Preguntas sobre el arte en Concepción
            </h2>
            <div className="space-y-4 my-8">
              {ARTE_FAQS.map((faq) => (
                <div key={faq.q} className="bg-white border border-line rounded-xl p-6">
                  <h3 className="font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-ink-body text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-semibold text-ink mt-10 mb-6">
              Obras publicadas
            </h2>
            <p className="text-ink-body leading-relaxed mb-6">
              Estas son las pinturas del catálogo, cada una con su ficha. El
              precio no está en la página.
            </p>
            <ArtworkCards works={works} />
            <p className="text-ink-body leading-relaxed mb-6">
              Para elegir una tela de la ciudad, mira{" "}
              <Link href="/pintura-de-ciudad" className="text-brand underline">pintura de ciudad</Link>{" "}
              y{" "}
              <Link href="/cuadros/fachadas-arquitectura" className="text-brand underline">
                cuadros de fachadas
              </Link>
              . El índice por muro está en{" "}
              <Link href="/cuadros" className="text-brand underline">cuadros</Link>.
              Un muro de trabajo tiene su grupo en{" "}
              <Link href="/cuadros/para-oficina" className="text-brand underline">cuadros para oficina</Link>.
              La compra por motivo, fuera de esta página local, está en{" "}
              <Link href="/comprar-arte-chile" className="text-brand underline">comprar arte en Chile</Link>.
              El índice para medir y encargar está en{" "}
              <Link href="/guias" className="text-brand underline">guías</Link>.
              Los perfiles con fuente están en{" "}
              <Link href="/artistas-chilenas" className="text-brand underline">
                artistas chilenas
              </Link>
              .
            </p>
            <CatalogFichaLinks />
            <DescriptiveFichaLinks lead="De lo publicado con nombre propio, abre" />
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

      <SiteHub />
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
