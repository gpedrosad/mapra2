import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { listCatalogArtworks } from "@/lib/artworks";
import { getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";
import ArtworkCards from "../components/seo/ArtworkCards";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import CatalogFichaLinks, {
  DescriptiveFichaLinks,
} from "../components/seo/CatalogFichaLinks";
import { FaqJsonLd } from "../components/seo/GuideParts";
import ItemListJsonLd from "../components/seo/ItemListJsonLd";
import SiteHub from "../components/seo/SiteHub";

const BIOBIO_FAQS = [
  {
    q: "¿Cómo se consulta una obra de Marcela Pedrosa?",
    a: "Se elige una pintura de la galería y se escribe por WhatsApp al +56 9 5618 9912 o por correo a contacto@marcelapedrosa.com. El envío se coordina en esa conversación. Los plazos están en tiempos de entrega y los cambios, en la política de devolución. La ficha no trae precio.",
  },
  {
    q: "¿Qué obras del catálogo se pueden ver desde el Biobío?",
    a: "Las fichas publicadas son óleos sobre tela. Cuatro traen medida: 158x122, 110x110, 90x120 y 100x130. El resto dice óleo sobre tela y la medida se pide al consultar.",
  },
  {
    q: "¿El sitio muestra el precio?",
    a: "No. La disponibilidad y el valor se confirman por WhatsApp o por correo.",
  },
];


export const metadata: Metadata = pageMetadata({
  title: 'Artista visual del Biobío | Marcela Pedrosa',
  description:
    'Artista visual del Biobío: Marcela Pedrosa pinta al óleo en Concepción. Consulta por WhatsApp o correo.',
  path: '/artista-visual-biobio',
  ogImageKey: 'gente',
  imageAlt: 'Obra de Marcela Pedrosa, artista visual del Biobío',
  keywords: [
    "artista visual biobío",
    "artista biobío",
    "arte región del biobío",
    "artista visual concepción",
    "pintura biobío",
    "arte contemporáneo biobío",
    "marcela pedrosa",
    "artista sur chile",
    "arte concepción",
    "pintora biobío",
  ],
});

export default async function ArtistaVisualBiobioPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.artista-visual.hero")) ||
    getSiteImageUrl("gente");
  const works = await listCatalogArtworks();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Óleos de Marcela Pedrosa, artista visual del Biobío"
        listUrl={absoluteUrl("/artista-visual-biobio")}
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
      <FaqJsonLd faqs={BIOBIO_FAQS} />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={[{ name: "Artista visual del Biobío", path: "/artista-visual-biobio" }]} />
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Artista visual del Biobío
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Marcela Pedrosa - Arte Contemporáneo desde la Región del Biobío
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Obra de Marcela Pedrosa, artista visual de la Región del Biobío"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-ink mb-6">
              Arte Visual en la Región del Biobío
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una destacada artista visual de la Región del Biobío, 
              con base en Concepción. Su trabajo representa una visión contemporánea del arte visual 
              chileno, profundamente arraigada en el territorio y la identidad cultural del sur del país.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Como <strong>artista visual del Biobío</strong>, Marcela ha desarrollado un lenguaje 
              plástico único que dialoga con el paisaje, la arquitectura y la memoria visual de la región. 
              Su obra abarca principalmente la pintura al óleo, aunque también incursiona en cerámica 
              artística y otras disciplinas.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Identidad Regional en el Arte Visual
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              La Región del Biobío posee características geográficas y culturales únicas que se reflejan 
              en el trabajo de sus artistas visuales. Marcela Pedrosa captura en sus obras:
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Paisajes del Biobío:</strong> Bosques nativos, ríos y geografía característica de la región</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Arquitectura regional:</strong> Fachadas y construcciones típicas de Concepción y alrededores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Luz del sur:</strong> La particular luminosidad de la zona centro-sur de Chile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Identidad cultural:</strong> Elementos que conectan con la historia y tradiciones locales</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Técnica y Proceso Creativo
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El trabajo de Marcela como artista visual se caracteriza por un profundo conocimiento 
              técnico del{" "}
              <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
                óleo sobre tela
              </Link>
              , medio que le permite explorar texturas, 
              capas y matices cromáticos complejos. Su estilo, que ella define como{" "}
              <Link
                href="/impresionismo-figurativo-chile"
                className="text-brand underline"
              >
                impresionismo figurativo
              </Link>
              , busca transmitir emociones antes que 
              representaciones literales.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              &ldquo;Mi pintura busca transmitir emociones para que quien la mira pueda captarlas. Trabajo 
              series figurativas e impresionistas, especialmente fachadas y bosques. Pinto principalmente 
              en óleo sobre telas naturales por la nobleza del material: maleable, intenso y durable 
              en el tiempo.&rdquo;
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Arte Contemporáneo en el Biobío
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              La Región del Biobío cuenta con una escena artística vibrante, donde artistas visuales 
              como Marcela Pedrosa contribuyen al desarrollo cultural de la zona. Concepción, como 
              capital regional, ofrece espacios de exhibición, galerías y un público cada vez más 
              interesado en el <strong>arte visual contemporáneo</strong>.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              El trabajo de Marcela ha sido exhibido en diversos espacios culturales de la región, 
              participando activamente en la difusión del arte visual del Biobío tanto a nivel 
              nacional como internacional.
            </p>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Conoce el Trabajo de una Artista Visual del Biobío
              </h3>
              <p className="mb-6 text-white/90">
                Obras originales, encargos personalizados y proyectos especiales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone={CONTACT_PHONE}
                  text="Hola Marcela, vi tu página de artista visual del Biobío y me interesa conocer tu trabajo."
                  label="Contactar por WhatsApp"
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

            <h2 className="text-3xl font-semibold text-ink mt-10 mb-6">
              Cómo consultar y comprar una obra
            </h2>
            <p className="text-ink-body leading-relaxed mb-6">
              La obra se vende por consulta, desde Concepción. La ficha no trae
              precio.
            </p>
            <div className="bg-surface rounded-xl p-6 mb-8">
              <ol className="space-y-3 text-ink-body list-decimal list-inside">
                <li>
                  Elige una pintura del catálogo de más abajo. Cada tarjeta abre
                  su ficha.
                </li>
                <li>
                  Escribe por WhatsApp al {CONTACT_PHONE} o por correo a{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-brand underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  . Nombra la obra. La disponibilidad y el valor se confirman
                  ahí.
                </li>
                <li>
                  Coordina el envío o el retiro en la misma conversación. Los
                  plazos publicados están en{" "}
                  <Link
                    href="/tiempos-de-entrega"
                    className="text-brand underline"
                  >
                    tiempos de entrega
                  </Link>
                  . Los cambios y la devolución, en{" "}
                  <Link href="/devoluciones" className="text-brand underline">
                    devoluciones
                  </Link>
                  .
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-semibold text-ink mt-10 mb-6">
              Obras del catálogo
            </h2>
            <p className="text-ink-body leading-relaxed mb-6">
              Estas fichas son las pinturas publicadas. Donde el catálogo trae
              medida, se cita tal cual: 158x122, 110x110, 90x120 y 100x130. El
              resto dice óleo sobre tela, sin números. El gres del taller no
              tiene ficha propia en este listado: las piezas publicadas están
              en{" "}
              <Link href="/esculturas" className="text-brand underline">
                cerámica gres
              </Link>
              .
            </p>
            <ArtworkCards works={works} />
            <h2 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Preguntas sobre la obra
            </h2>
            <div className="space-y-4 my-8">
              {BIOBIO_FAQS.map((faq) => (
                <div key={faq.q} className="bg-white border border-line rounded-xl p-6">
                  <h3 className="font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-ink-body text-sm">{faq.a}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Artistas Visuales del Sur de Chile
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El sur de Chile, y particularmente la Región del Biobío, ha sido cuna de importantes 
              artistas visuales que han contribuido al desarrollo del arte chileno contemporáneo. 
              Marcela Pedrosa se inscribe en esta tradición, aportando una mirada personal y 
              contemporánea al arte visual de la región.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Su trabajo dialoga con la tradición pictórica chilena mientras incorpora elementos 
              de vanguardia, creando un puente entre la herencia artística regional y las tendencias 
              contemporáneas del arte visual.
            </p>
            <p className="text-ink-body leading-relaxed mb-6">
              Los perfiles de quienes se buscan junto a ese contexto están en{" "}
              <Link href="/artistas-chilenas" className="text-brand underline">artistas chilenas</Link>,
              entre ellos{" "}
              <Link href="/artistas-chilenas/camilo-mori" className="text-brand underline">Camilo Mori</Link>{" "}
              y{" "}
              <Link href="/artistas-chilenas/totoy-zamudio" className="text-brand underline">Totoy Zamudio</Link>.
              La obra de Marcela por lugar:{" "}
              <Link href="/cuadros/paisajes-bosques-biobio" className="text-brand underline">bosques del Biobío</Link>,{" "}
              <Link href="/cuadros/fachadas-arquitectura" className="text-brand underline">fachadas</Link>,{" "}
              <Link href="/pintura-de-bosques" className="text-brand underline">pintura de bosques</Link>{" "}
              y{" "}
              <Link href="/figuras-al-oleo" className="text-brand underline">figuras al óleo</Link>.
              La guía del estilo es{" "}
              <Link href="/guias/que-es-el-impresionismo-figurativo" className="text-brand underline">
                qué es el impresionismo figurativo
              </Link>
              . El índice de esas lecturas está en{" "}
              <Link href="/guias" className="text-brand underline">guías</Link>.
              La compra por motivo está en{" "}
              <Link href="/comprar-arte-chile" className="text-brand underline">
                comprar arte en Chile
              </Link>{" "}
              y el recorrido por muro, en{" "}
              <Link href="/cuadros" className="text-brand underline">cuadros</Link>.
            </p>
            <CatalogFichaLinks />
            <DescriptiveFichaLinks lead="De la Región del Biobío, estas fichas muestran la tela" />
          </article>

          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Explora más
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pinturas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Galería de Pinturas →</span>
                <p className="text-sm text-ink-muted mt-1">Obras en óleo sobre tela</p>
              </Link>
              <Link
                href="/esculturas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Cerámica Artística →</span>
                <p className="text-sm text-ink-muted mt-1">Piezas en gres</p>
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
