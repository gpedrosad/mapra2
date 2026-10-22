import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";
import { listCatalogArtworks, type CatalogArtwork } from "@/lib/artworks";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";
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
  title: 'Impresionismo figurativo actual en Chile | Pedrosa',
  description:
    'Impresionismo figurativo actual en Chile: fachadas, bosques y figura al óleo de Marcela Pedrosa, en Concepción.',
  path: '/impresionismo-figurativo-chile',
  ogImageKey: 'bosque',
  imageAlt: 'Impresionismo figurativo de Marcela Pedrosa',
  keywords: [
    "impresionismo figurativo chile",
    "impresionismo chile",
    "pintura impresionista chile",
    "arte impresionista chile",
    "impresionismo contemporáneo",
    "pintura figurativa chile",
    "artista impresionista chile",
    "marcela pedrosa impresionismo",
    "impresionismo concepción",
    "arte figurativo chile",
  ],
});

const ESTILO_FAQS = [
  {
    q: "¿Qué llama este sitio impresionismo figurativo?",
    a: "El estilo con el que Marcela Pedrosa pinta en Concepción: formas reconocibles, luz y color, en óleo sobre tela. En la galería se ve en fachadas, bosques y figura.",
  },
  {
    q: "¿Dónde ver obras de impresionismo figurativo?",
    a: "En las fichas de la galería y en las páginas de figuras al óleo, retratos al óleo y pintura de bosques. La guía corta está en qué es el impresionismo figurativo.",
  },
  {
    q: "¿Cómo se consulta una de esas obras?",
    a: "Por WhatsApp al +56 9 5618 9912 o por correo a contacto@marcelapedrosa.com. El precio no está en la ficha.",
  },
];

export default async function ImpresionismoFigurativoChilePage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.impresionismo.hero")) ||
    getSiteImageUrl("bosque");
  const works = await listCatalogArtworks();
  const styleSlugs = [
    "casas-dia-y-noche",
    "ciudad-casas-de-colores",
    "laguna-cordillera-atardecer",
    "bosque-troncos-luz",
    "bosque-troncos-de-colores",
    "grupo-de-figuras",
    "figura-recostada",
    "retrato-de-mujer",
  ];
  const styleWorks = styleSlugs
    .map((slug) => works.find((work) => work.slug === slug))
    .filter((work): work is CatalogArtwork => Boolean(work));

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <FaqJsonLd faqs={ESTILO_FAQS} />
      {styleWorks.length > 0 ? (
        <ItemListJsonLd
          listName="Obras de impresionismo figurativo de Marcela Pedrosa"
          listUrl={absoluteUrl("/impresionismo-figurativo-chile")}
          items={styleWorks.map((work) => ({
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
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={[{ name: "Impresionismo figurativo", path: "/impresionismo-figurativo-chile" }]} />
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Impresionismo figurativo actual en Chile
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Luz, Emoción y Forma en la Pintura Contemporánea
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Ejemplo de impresionismo figurativo de Marcela Pedrosa, Chile"
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
              ¿Qué es el Impresionismo Figurativo?
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              El <strong>impresionismo figurativo</strong> actual, en este sitio, es el modo en que
              Marcela Pedrosa pinta hoy en Concepción: formas reconocibles, luz y color, en óleo sobre tela.
              Junta la pincelada suelta con figuras, fachadas y bosques que se pueden nombrar.
            </p>

            <h2
              id="pintores-impresionistas-actuales"
              className="text-3xl font-semibold text-ink mt-10 mb-6"
            >
              Pintores impresionistas actuales
            </h2>
            <p className="text-ink-body leading-relaxed mb-6">
              Quien busca <strong>pintores impresionistas actuales</strong>{" "}
              encuentra aquí una práctica vigente: Marcela Pedrosa pinta hoy en
              Concepción. Este sitio no lista a otros pintores en actividad. El
              antecedente chileno de pincelada suelta está en la guía{" "}
              <Link
                href="/guias/que-es-el-impresionismo-figurativo"
                className="text-brand underline"
              >
                qué es el impresionismo figurativo
              </Link>
              , y la técnica, en{" "}
              <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
                óleos sobre tela
              </Link>
              .
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              A diferencia del impresionismo puro que puede tender a la abstracción, el 
              <strong> impresionismo figurativo</strong> mantiene formas identificables mientras 
              conserva la pincelada suelta, los juegos de luz y la expresividad cromática característica 
              del movimiento impresionista.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-ink mb-4">Características del Impresionismo Figurativo:</h4>
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Pincelada suelta y visible:</strong> Las marcas del pincel son parte de la expresión artística</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Captura de la luz:</strong> Énfasis en cómo la luz modifica colores y formas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Formas reconocibles:</strong> Figuras, paisajes y objetos identificables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Emoción sobre detalle:</strong> Transmite sensaciones más que representaciones fotográficas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Paleta expresiva:</strong> Uso del color para crear atmósfera y emoción</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Historia del Impresionismo en Chile
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El <strong>impresionismo llegó a Chile</strong> a principios del siglo XX, influenciando 
              a generaciones de artistas chilenos. Pintores como Juan Francisco González, Alfredo 
              Helsby y Pedro Lira incorporaron elementos impresionistas en su trabajo, adaptándolos 
              a la luz y paisajes únicos de Chile.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              A lo largo del siglo XX y XXI, el <strong>impresionismo en Chile</strong> ha evolucionado, 
              fusionándose con otras corrientes y adaptándose a sensibilidades contemporáneas. Artistas 
              actuales como Marcela Pedrosa continúan esta tradición en{" "}
              <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
                óleo sobre tela
              </Link>
              , con un <strong>impresionismo figurativo</strong> de fachadas y bosques del Biobío.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Impresionismo Figurativo Contemporáneo
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El <strong>impresionismo figurativo contemporáneo</strong> en Chile se caracteriza por:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🎨 Técnica Mixta</h4>
                <p className="text-ink-body text-sm">
                  Combinación de técnicas tradicionales del impresionismo (veladuras, pincelada 
                  suelta) con enfoques contemporáneos de composición y color.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🌄 Temas Locales</h4>
                <p className="text-ink-body text-sm">
                  Interpretación de paisajes, arquitectura y escenas cotidianas chilenas con 
                  sensibilidad impresionista, capturando la luz particular de cada región.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">💫 Expresión Emocional</h4>
                <p className="text-ink-body text-sm">
                  Énfasis en transmitir emociones y atmósferas más que en la representación 
                  detallada, conectando con el espectador a nivel sensorial.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🖌️ Identidad Personal</h4>
                <p className="text-ink-body text-sm">
                  Cada artista desarrolla su propia interpretación del impresionismo figurativo, 
                  creando un lenguaje visual único y reconocible.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Marcela Pedrosa: Impresionismo Figurativo desde Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una destacada exponente del 
              <strong> impresionismo figurativo en Chile</strong>. Desde su taller en Concepción, 
              desarrolla un trabajo que captura la esencia de la Región del Biobío con sensibilidad 
              impresionista.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              &ldquo;Mi pintura busca transmitir emociones para que quien la mira pueda captarlas. Trabajo 
              series figurativas e impresionistas, especialmente fachadas y bosques. El impresionismo 
              me permite capturar no solo lo que veo, sino lo que siento frente al paisaje.&rdquo;
            </p>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Descubre el Impresionismo Figurativo de Marcela Pedrosa
              </h3>
              <p className="mb-6 text-white/90">
                Obras originales al óleo que capturan luz, emoción y paisaje
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, me interesa conocer tu trabajo de impresionismo figurativo."
                  label="Contactar a la Artista"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver Galería Completa
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Temas Recurrentes en el Impresionismo Figurativo
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El trabajo de Marcela Pedrosa explora diversos temas con enfoque impresionista figurativo:
            </p>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">Fachadas Urbanas</h4>
                <p className="text-ink-body text-sm">
                  La arquitectura de Concepción y el Biobío capturada con pincelada suelta. 
                  Juegos de luz sobre muros, ventanas y texturas urbanas. La ciudad como 
                  protagonista emocional más que documental.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">Bosques y Naturaleza</h4>
                <p className="text-ink-body text-sm">
                  Paisajes naturales de la región del Biobío interpretados con sensibilidad 
                  impresionista. Árboles, luz filtrada entre hojas, atmósferas de bosque nativo. 
                  La naturaleza como experiencia sensorial.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">Figuras y Escenas Cotidianas</h4>
                <p className="text-ink-body text-sm">
                  Personas en momentos cotidianos, capturadas con la espontaneidad del impresionismo. 
                  Énfasis en la luz sobre las figuras, gestos y atmósferas más que en detalles faciales.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Técnica del Impresionismo Figurativo
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              La creación de una obra de <strong>impresionismo figurativo</strong> requiere 
              dominio técnico y sensibilidad artística:
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-ink mb-4">Proceso Creativo:</h4>
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">1.</span>
                  <span><strong>Observación:</strong> Estudio de la luz, colores y atmósfera del motivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">2.</span>
                  <span><strong>Boceto rápido:</strong> Captura de la composición y distribución de masas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">3.</span>
                  <span><strong>Capas de color:</strong> Construcción de la obra con capas de óleo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">4.</span>
                  <span><strong>Pincelada expresiva:</strong> Aplicación suelta y gestual del pigmento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">5.</span>
                  <span><strong>Ajustes finales:</strong> Refinamiento de luces, sombras y acentos</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Diferencias con Otros Estilos
            </h3>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand text-white">
                    <th className="border border-line-strong p-3 text-left">Estilo</th>
                    <th className="border border-line-strong p-3 text-left">Características</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-line-strong p-3 font-semibold">Impresionismo Figurativo</td>
                    <td className="border border-line-strong p-3">Pincelada suelta + formas reconocibles + énfasis en luz</td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="border border-line-strong p-3 font-semibold">Realismo</td>
                    <td className="border border-line-strong p-3">Representación detallada y precisa de la realidad</td>
                  </tr>
                  <tr>
                    <td className="border border-line-strong p-3 font-semibold">Impresionismo Abstracto</td>
                    <td className="border border-line-strong p-3">Pincelada expresiva sin formas reconocibles</td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="border border-line-strong p-3 font-semibold">Expresionismo</td>
                    <td className="border border-line-strong p-3">Distorsión de formas para expresar emociones intensas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Coleccionar Impresionismo Figurativo
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Las obras de <strong>impresionismo figurativo</strong> son apreciadas por coleccionistas 
              por su equilibrio entre accesibilidad visual y sofisticación técnica. Ofrecen:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-brand">Versatilidad decorativa:</strong>
                  <p className="text-ink-body text-sm mt-1">Se integran bien en diversos espacios y estilos</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-brand">Conexión emocional:</strong>
                  <p className="text-ink-body text-sm mt-1">Transmiten sensaciones y atmósferas</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-brand">Valor artístico:</strong>
                  <p className="text-ink-body text-sm mt-1">Técnica depurada y estilo reconocible</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-brand">Identidad regional:</strong>
                  <p className="text-ink-body text-sm mt-1">Capturan la esencia de lugares específicos</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              El Futuro del Impresionismo en Chile
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El <strong>impresionismo figurativo</strong> continúa siendo relevante en el arte 
              contemporáneo chileno. Artistas como Marcela Pedrosa demuestran que esta tradición 
              puede evolucionar y adaptarse sin perder su esencia, ofreciendo una alternativa a 
              las tendencias más conceptuales del arte actual.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              La combinación de técnica tradicional, sensibilidad contemporánea e identidad regional 
              asegura que el impresionismo figurativo seguirá siendo una corriente vital en el 
              panorama artístico chileno.
            </p>

            <ConsultaSteps
              heading="Cómo consultar una obra de este estilo"
              intro="Una obra de este impresionismo figurativo se consulta desde Concepción. No hay carrito. El precio no está en la ficha."
            />

            <h2
              id="obras-de-impresionismo-figurativo"
              className="text-3xl font-semibold text-ink mt-10 mb-6"
            >
              Obras de impresionismo figurativo
            </h2>
            <p className="text-ink-body leading-relaxed mb-6">
              Fachadas, bosques y figura del catálogo. La consulta va por
              WhatsApp al {CONTACT_PHONE} o por correo a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline">
                {CONTACT_EMAIL}
              </a>
              . Las medidas publicadas están en{" "}
              <Link href="/oleo-sobre-tela-chile#oleos-sobre-tela-publicados" className="text-brand underline">
                óleos sobre tela
              </Link>
              . Por motivo:{" "}
              <Link href="/figuras-al-oleo" className="text-brand underline">figuras</Link>,{" "}
              <Link href="/retratos-al-oleo" className="text-brand underline">retratos</Link>,{" "}
              <Link href="/pintura-de-bosques" className="text-brand underline">bosques</Link>{" "}
              y{" "}
              <Link href="/pintura-de-ciudad" className="text-brand underline">ciudad</Link>.
            </p>
            <ArtworkCards works={styleWorks} />

            <h2 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Impresionismo figurativo: fachadas, bosques y figura
            </h2>
            <div className="space-y-4 my-8">
              {ESTILO_FAQS.map((faq) => (
                <div key={faq.q} className="bg-white border border-line rounded-xl p-6">
                  <h3 className="font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-ink-body text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
            <p className="text-ink-body leading-relaxed mb-6">
              La guía breve está en{" "}
              <Link href="/guias/que-es-el-impresionismo-figurativo" className="text-brand underline">
                qué es el impresionismo figurativo
              </Link>
              . Las obras por motivo:{" "}
              <Link href="/figuras-al-oleo" className="text-brand underline">figuras al óleo</Link>,{" "}
              <Link href="/retratos-al-oleo" className="text-brand underline">retratos al óleo</Link>{" "}
              y{" "}
              <Link href="/pintura-de-bosques" className="text-brand underline">pintura de bosques</Link>.
              El índice de{" "}
              <Link href="/guias" className="text-brand underline">guías</Link>{" "}
              y los perfiles de{" "}
              <Link href="/artistas-chilenas" className="text-brand underline">artistas chilenas</Link>{" "}
              siguen desde aquí. Para consultar una tela, mira{" "}
              <Link href="/cuadros" className="text-brand underline">cuadros</Link>{" "}
              o{" "}
              <Link href="/comprar-arte-chile" className="text-brand underline">
                comprar arte en Chile
              </Link>
              .
            </p>
            <CatalogFichaLinks />
            <DescriptiveFichaLinks lead="Ese impresionismo figurativo actual se ve en" />
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
                <span className="font-medium text-ink">Galería Impresionista →</span>
                <p className="text-sm text-ink-muted mt-1">Obras de impresionismo figurativo</p>
              </Link>
              <Link
                href="/oleo-sobre-tela-chile"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Óleo sobre tela →</span>
                <p className="text-sm text-ink-muted mt-1">La técnica de estas pinturas</p>
              </Link>
              <Link
                href="/prensa"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Sobre la Artista →</span>
                <p className="text-sm text-ink-muted mt-1">Trayectoria y exposiciones</p>
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
