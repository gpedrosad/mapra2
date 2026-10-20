import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";
import { listCatalogArtworks } from "@/lib/artworks";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";
import ArtworkCards from "../components/seo/ArtworkCards";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import CatalogFichaLinks, {
  DescriptiveFichaLinks,
} from "../components/seo/CatalogFichaLinks";
import { FaqJsonLd } from "../components/seo/GuideParts";
import SiteHub from "../components/seo/SiteHub";


export const metadata: Metadata = pageMetadata({
  title: 'Óleos sobre tela en Chile | Pedrosa',
  description:
    'Óleos sobre tela en Chile, pintados en Concepción. Medidas publicadas: 158x122, 110x110, 90x120 y 100x130. Consulta el resto.',
  path: '/oleo-sobre-tela-chile',
  ogImageKey: 'mujer',
  imageAlt: 'Pintura al óleo sobre tela de Marcela Pedrosa',
  keywords: [
    "óleo sobre tela chile",
    "pintura al óleo chile",
    "óleo chile",
    "pintura óleo concepción",
    "técnica óleo sobre tela",
    "artista óleo chile",
    "cuadros óleo chile",
    "pintura al óleo profesional",
    "óleo sobre lienzo chile",
    "marcela pedrosa óleo",
  ],
});

const OLEO_FAQS = [
  {
    q: "¿Qué medidas de óleo sobre tela están publicadas?",
    a: "Cuatro fichas traen números: 158x122, 110x110, 90x120 y 100x130, todas óleo sobre tela. El resto de la galería dice óleo sobre tela y la medida se pide al consultar.",
  },
  {
    q: "¿Cómo se consulta un óleo sobre tela?",
    a: "Por WhatsApp al +56 9 5618 9912 o por correo a contacto@marcelapedrosa.com. El precio no está en la ficha.",
  },
  {
    q: "¿Dónde ver las obras al óleo?",
    a: "Cada pintura publicada tiene ficha en el sitio. También están agrupadas para comprar cuadros al óleo en Chile y por motivo: retrato, bosque, animales y bodegón.",
  },
];

export default async function OleoSobreTelaChilePage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.oleo.hero")) ||
    getSiteImageUrl("mujer");
  const measured = (await listCatalogArtworks()).filter((work) => work.measure);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <FaqJsonLd faqs={OLEO_FAQS} />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={[{ name: "Óleo sobre tela", path: "/oleo-sobre-tela-chile" }]} />
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Óleos sobre tela en Chile
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Técnica Tradicional, Calidad Profesional
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Pintura al óleo sobre tela de Marcela Pedrosa, Chile"
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
              Óleos sobre tela en Chile, con las medidas publicadas
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              Los <strong>óleos sobre tela</strong> de Marcela Pedrosa se pintan en Concepción.
              El óleo sobre tela es una técnica de pigmento y aceite sobre un soporte de tela.
              En el taller se mantiene con pincelada visible y temas reconocibles.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              La <strong>pintura al óleo</strong> se caracteriza por su riqueza cromática, su capacidad 
              de crear texturas complejas y su extraordinaria durabilidad. Obras creadas con esta técnica 
              pueden conservarse en perfecto estado durante siglos, como lo demuestran los maestros 
              del Renacimiento y posteriores.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              ¿Qué es el Óleo sobre Tela?
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El óleo es una técnica pictórica que utiliza <strong>pigmentos mezclados con aceites</strong> 
              (tradicionalmente aceite de linaza) como aglutinante. Se aplica sobre un soporte preparado, 
              generalmente tela de algodón o lino imprimada con gesso.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-ink mb-4">Características del Óleo sobre Tela:</h4>
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Secado lento:</strong> Permite trabajar y corregir durante días o semanas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Colores intensos:</strong> Pigmentos de alta concentración y luminosidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Versatilidad:</strong> Desde transparencias hasta empastes gruesos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Durabilidad:</strong> Resistencia excepcional al paso del tiempo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Flexibilidad:</strong> La tela permite enrollar y transportar obras grandes</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Proceso de Creación de una Obra al Óleo
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              La creación de una <strong>pintura al óleo sobre tela</strong> profesional sigue 
              un proceso meticuloso:
            </p>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">1. Preparación del Soporte</h4>
                <p className="text-ink-body text-sm">
                  La tela de algodón o lino se tensa sobre un bastidor de madera. Se aplican varias 
                  capas de imprimación (gesso) para crear una superficie adecuada que aisle la tela 
                  del aceite y proporcione adherencia.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">2. Boceto y Composición</h4>
                <p className="text-ink-body text-sm">
                  Se realiza un dibujo preliminar con carboncillo o pintura diluida para establecer 
                  la composición, proporciones y distribución de luces y sombras.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">3. Capa de Imprimatura</h4>
                <p className="text-ink-body text-sm">
                  Una primera capa de color diluido que establece el tono general de la obra y 
                  elimina el blanco puro de la imprimación.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">4. Capas Sucesivas</h4>
                <p className="text-ink-body text-sm">
                  Aplicación de múltiples capas de óleo, trabajando de magro a graso (menos aceite 
                  a más aceite) para evitar craquelados. Cada capa debe secar antes de aplicar la siguiente.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">5. Detalles y Acabados</h4>
                <p className="text-ink-body text-sm">
                  Refinamiento de detalles, ajustes de color y luz. En el caso del impresionismo, 
                  pinceladas sueltas y expresivas que capturan la esencia más que el detalle fotográfico.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">6. Secado y Barnizado</h4>
                <p className="text-ink-body text-sm">
                  Tras 6-12 meses de secado completo, se aplica un barniz de protección que unifica 
                  brillos, protege de UV y facilita la limpieza futura de la obra.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Óleo sobre Tela en Chile: Tradición Artística
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Chile cuenta con una rica tradición de <strong>pintura al óleo</strong>, desde los 
              maestros académicos del siglo XIX hasta los artistas contemporáneos. La técnica ha sido 
              el medio preferido para capturar los paisajes únicos del país, desde el desierto de 
              Atacama hasta los bosques del sur.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              En la <strong>Región del Biobío</strong>, Marcela Pedrosa continúa esta
              tradición con más de 20 años de <strong>óleo sobre tela</strong>: fachadas y bosques
              del Biobío, pintados en{" "}
              <Link
                href="/impresionismo-figurativo-chile"
                className="text-brand underline"
              >
                impresionismo figurativo
              </Link>
              .
            </p>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Obras Originales al Óleo sobre Tela
              </h3>
              <p className="mb-6 text-white/90">
                Pinturas originales de Marcela Pedrosa disponibles para coleccionistas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, me interesa conocer tus obras al óleo sobre tela."
                  label="Consultar Disponibilidad"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver Galería
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Ventajas del Óleo sobre Tela
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🎨 Calidad Artística</h4>
                <p className="text-ink-body text-sm">
                  Los pigmentos al óleo ofrecen la mayor riqueza cromática y profundidad de todas 
                  las técnicas pictóricas. Permiten mezclas sutiles y efectos imposibles con otros medios.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">⏳ Durabilidad</h4>
                <p className="text-ink-body text-sm">
                  Una obra al óleo bien ejecutada puede durar siglos sin perder calidad. Museos 
                  conservan óleos de hace 500 años en perfecto estado.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🖌️ Versatilidad Técnica</h4>
                <p className="text-ink-body text-sm">
                  Desde veladuras transparentes hasta empastes texturados, el óleo permite una 
                  amplísima gama de efectos y estilos pictóricos.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">💎 Valor de Inversión</h4>
                <p className="text-ink-body text-sm">
                  Las obras originales al óleo de artistas establecidos mantienen y aumentan su 
                  valor con el tiempo, siendo apreciadas por coleccionistas.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Cuidado y Conservación
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Las <strong>pinturas al óleo sobre tela</strong> requieren cuidados mínimos pero importantes:
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Evitar luz solar directa prolongada (puede decolorar pigmentos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Mantener en ambiente con humedad controlada (40-60%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Limpiar suavemente con paño seco y suave (nunca agua ni productos químicos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>El barniz protector facilita la limpieza y protege de polvo y contaminantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Para restauraciones, consultar siempre con profesionales especializados</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Marcela Pedrosa: Especialista en Óleo sobre Tela
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Con más de 20 años de experiencia en <strong>pintura al óleo</strong>, Marcela Pedrosa 
              domina las técnicas tradicionales y las aplica con sensibilidad contemporánea. Su trabajo 
              se caracteriza por:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">→</span>
                <div>
                  <strong className="text-brand">Técnica depurada:</strong>
                  <p className="text-ink-body text-sm mt-1">Dominio de veladuras, empastes y pincelada suelta</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">→</span>
                <div>
                  <strong className="text-brand">Materiales premium:</strong>
                  <p className="text-ink-body text-sm mt-1">Pigmentos profesionales y telas de primera calidad</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">→</span>
                <div>
                  <strong className="text-brand">Estilo personal:</strong>
                  <p className="text-ink-body text-sm mt-1">Impresionismo figurativo con identidad regional</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">→</span>
                <div>
                  <strong className="text-brand">Obras durables:</strong>
                  <p className="text-ink-body text-sm mt-1">Proceso completo con barnizado de protección</p>
                </div>
              </div>
            </div>

            <p className="text-ink-body leading-relaxed mb-6">
              Sus obras en <strong>óleo sobre tela</strong> forman parte de colecciones privadas en 
              Chile y el extranjero, testimonio de la calidad técnica y el valor artístico de su trabajo.
            </p>

            <h2
              id="oleos-sobre-tela-publicados"
              className="text-3xl font-semibold text-ink mt-10 mb-6"
            >
              Óleos sobre tela publicados
            </h2>
            <p className="text-ink-body leading-relaxed mb-6">
              Estas fichas traen la medida en el catálogo. El precio no está en
              la página: se consulta por WhatsApp al {CONTACT_PHONE} o por
              correo a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline">
                {CONTACT_EMAIL}
              </a>
              . El mismo óleo, leído como estilo, está en{" "}
              <Link href="/impresionismo-figurativo-chile" className="text-brand underline">
                impresionismo figurativo
              </Link>
              .
            </p>
            <ArtworkCards works={measured} />

            <h2 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Preguntas sobre el óleo sobre tela
            </h2>
            <div className="space-y-4 my-8">
              {OLEO_FAQS.map((faq) => (
                <div key={faq.q} className="bg-white border border-line rounded-xl p-6">
                  <h3 className="font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-ink-body text-sm">{faq.a}</p>
                </div>
              ))}
            </div>

            <p className="text-ink-body leading-relaxed mb-6">
              Para comprar, la página de{" "}
              <Link href="/comprar-cuadros-al-oleo-chile" className="text-brand underline">
                cuadros al óleo en Chile
              </Link>{" "}
              lista estas obras con envío. Si partes por el muro, mira{" "}
              <Link href="/cuadros" className="text-brand underline">cuadros</Link>,{" "}
              <Link href="/cuadros/grandes-al-oleo" className="text-brand underline">
                los formatos con medida
              </Link>{" "}
              y{" "}
              <Link href="/cuadros/para-living" className="text-brand underline">
                cuadros para el living
              </Link>
              . Las guías{" "}
              <Link href="/guias" className="text-brand underline">para elegir obra</Link>,{" "}
              <Link href="/guias/oleo-vs-acrilico" className="text-brand underline">óleo o acrílico</Link>,{" "}
              <Link href="/guias/cuidar-y-colgar-pintura-al-oleo" className="text-brand underline">
                cuidar y colgar un óleo
              </Link>,{" "}
              <Link href="/guias/elegir-cuadro-para-el-living" className="text-brand underline">
                elegir un cuadro para el living
              </Link>{" "}
              y{" "}
              <Link href="/guias/cuanto-cuesta-un-cuadro-original-en-chile" className="text-brand underline">
                qué define el valor
              </Link>{" "}
              explican el oficio sin publicar un precio. Por motivo:{" "}
              <Link href="/retratos-al-oleo" className="text-brand underline">retratos</Link>,{" "}
              <Link href="/figuras-al-oleo" className="text-brand underline">figuras</Link>,{" "}
              <Link href="/pintura-de-animales" className="text-brand underline">animales</Link>,{" "}
              <Link href="/pintura-de-bosques" className="text-brand underline">bosques</Link>,{" "}
              <Link href="/bodegon-oleo" className="text-brand underline">bodegón</Link>{" "}
              y{" "}
              <Link href="/cuadros/paisajes-bosques-biobio" className="text-brand underline">
                paisajes del Biobío
              </Link>
              . La guía del estilo está en{" "}
              <Link href="/guias/que-es-el-impresionismo-figurativo" className="text-brand underline">
                qué es el impresionismo figurativo
              </Link>
              . La compra por motivo está en{" "}
              <Link href="/comprar-arte-chile" className="text-brand underline">
                comprar arte en Chile
              </Link>
              . Otros nombres, con la fuente de cada dato, están en{" "}
              <Link href="/artistas-chilenas" className="text-brand underline">
                artistas chilenas
              </Link>
              .
            </p>
            <CatalogFichaLinks />
            <DescriptiveFichaLinks lead="Entre los óleos sobre tela con ficha propia están" />
          </article>

          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Descubre más
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pinturas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Galería de Óleos →</span>
                <p className="text-sm text-ink-muted mt-1">Obras disponibles en óleo sobre tela</p>
              </Link>
              <Link
                href="/impresionismo-figurativo-chile"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Impresionismo figurativo →</span>
                <p className="text-sm text-ink-muted mt-1">El estilo de las obras al óleo</p>
              </Link>
              <Link
                href="/contacto"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Encargos →</span>
                <p className="text-sm text-ink-muted mt-1">Consulta por obras personalizadas</p>
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
