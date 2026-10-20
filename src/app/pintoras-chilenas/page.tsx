import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";
import { pageMetadata } from "@/lib/metadata";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import CatalogFichaLinks, {
  DescriptiveFichaLinks,
} from "../components/seo/CatalogFichaLinks";
import SiteHub from "../components/seo/SiteHub";


export const metadata: Metadata = pageMetadata({
  title: 'Pintoras chilenas famosas y actuales | Pedrosa',
  description:
    'Pintoras chilenas famosas y actuales, y mujeres pintoras: Castro, Mira, Petit, Barrios, Bru, Aldunate y Pedrosa en Concepción.',
  path: '/pintoras-chilenas',
  ogImageKey: 'gente',
  imageAlt: 'Obra de Marcela Pedrosa, pintora chilena',
  keywords: [
    "pintoras chilenas",
    "pintoras chilenas famosas",
    "pintoras de chile",
    "mujeres pintoras chilenas",
    "artistas chilenas mujeres pintoras",
    "pintoras chilenas contemporáneas",
    "pintoras chilenas del siglo xx",
    "pintoras chilenas actuales",
    "arte chileno mujeres",
    "pintura chilena femenina",
    "marcela pedrosa pintora",
    "pintora concepción",
    "óleo sobre tela chile",
  ],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quiénes son las pintoras chilenas más importantes de la historia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En los perfiles de este sitio: Celia Castro y las hermanas Mira en el siglo XIX; Henriette Petit, Matilde Pérez, Gracia Barrios (Premio Nacional de Artes Plásticas 2011), Roser Bru (Premio Nacional de Artes Plásticas 2015) y Carmen Aldunate en el siglo XX.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pintoras chilenas contemporáneas están activas hoy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De quien pinta hoy, este sitio documenta a Marcela Pedrosa en Concepción, con óleo sobre tela e impresionismo figurativo. Carmen Aldunate falleció en 2026: queda entre las famosas, no entre las actuales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde comprar pinturas de pintoras chilenas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Directamente en talleres, galerías y sitios web de las artistas. Marcela Pedrosa vende sus obras desde Concepción con envío a todo Chile. La compra por consulta está en comprar arte en Chile.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué técnicas utilizan las pintoras chilenas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Principalmente óleo sobre tela, acrílico, acuarela, grabado y técnicas mixtas. El óleo sobre tela sigue siendo la técnica reina de la pintura chilena.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quiénes son artistas chilenas mujeres pintoras?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En esta página, artistas chilenas mujeres pintoras son Celia Castro, Aurora Mira, Magdalena Mira, Henriette Petit, Matilde Pérez, Gracia Barrios, Roser Bru, Carmen Aldunate y Marcela Pedrosa, que pinta en Concepción. Cada nombre enlaza a su perfil.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde ver pintoras chilenas famosas y actuales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las famosas con perfil son Castro, las hermanas Mira, Petit, Pérez, Barrios, Bru y Aldunate. De las actuales, el sitio presenta a Marcela Pedrosa en Concepción. Los perfiles con fuente están en artistas chilenas.",
      },
    },
  ],
};

export default async function PintorasChilenasPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.pintoras.hero")) ||
    getSiteImageUrl("gente");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={[{ name: "Pintoras chilenas", path: "/pintoras-chilenas" }]} />
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Pintoras chilenas famosas y actuales
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Historia y presente de la pintura chilena hecha por mujeres
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Obra de Marcela Pedrosa, pintora chilena contemporánea de Concepción"
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
            <h2
              id="pintoras-chilenas-famosas"
              className="text-3xl font-semibold text-ink mb-6"
            >
              Pintoras chilenas famosas
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              Las <strong>pintoras chilenas famosas</strong> de este recorrido
              son las que ya tienen perfil con fuente. No es un ranking: es el
              grupo que el sitio puede nombrar sin inventar una biografía.
            </p>

            <ul className="space-y-3 text-ink-body mb-8 list-disc pl-5">
              <li>
                <Link href="/artistas-chilenas/celia-castro" className="text-brand underline">
                  Celia Castro
                </Link>{" "}
                (1860-1930), de Quillota. Una de las primeras profesionales del
                país y la primera mujer pensionada por el Estado para estudiar
                arte en Europa.
              </li>
              <li>
                <Link href="/artistas-chilenas/magdalena-mira" className="text-brand underline">
                  Magdalena Mira
                </Link>{" "}
                (1859-1930), pintora y escultora de Santiago. Medalla de oro en
                1884 por La hermana de la caridad.
              </li>
              <li>
                <Link href="/artistas-chilenas/aurora-mira" className="text-brand underline">
                  Aurora Mira
                </Link>{" "}
                (1863-1939), pintora de Santiago y hermana de Magdalena.
                Retratos, flores y bodegones, y medallas en los salones
                oficiales.
              </li>
              <li>
                <Link href="/artistas-chilenas/henriette-petit" className="text-brand underline">
                  Henriette Petit
                </Link>{" "}
                (1894-1983), de Santiago, cofundadora del Grupo Montparnasse.
              </li>
              <li>
                <Link href="/artistas-chilenas/matilde-perez" className="text-brand underline">
                  Matilde Pérez
                </Link>{" "}
                (1916-2014), pintora y artista cinética. Investigó el movimiento
                en Chile y en París.
              </li>
              <li>
                <Link href="/artistas-chilenas/gracia-barrios" className="text-brand underline">
                  Gracia Barrios
                </Link>{" "}
                (1927-2020), del Grupo Signo. Premio Nacional de Artes Plásticas
                2011.
              </li>
              <li>
                <Link href="/artistas-chilenas/roser-bru" className="text-brand underline">
                  Roser Bru
                </Link>{" "}
                (1923-2021), pintora y grabadora. Llegó a Chile en el Winnipeg y
                recibió el Premio Nacional de Artes Plásticas en 2015.
              </li>
              <li>
                <Link href="/artistas-chilenas/carmen-aldunate" className="text-brand underline">
                  Carmen Aldunate
                </Link>{" "}
                (1940-2026), pintora y dibujante de figuración simbólica. El
                Museo Nacional de Bellas Artes confirmó su fallecimiento el 25
                de septiembre de 2026.
              </li>
            </ul>

            <p className="text-ink-body leading-relaxed mb-6">
              Cada dato está en el perfil, dentro de{" "}
              <Link href="/artistas-chilenas" className="text-brand underline">
                artistas chilenas
              </Link>
              . Barrios, Bru, Pérez y Aldunate, leídas juntas, están en{" "}
              <Link
                href="/artistas-chilenas/pintoras-chilenas-contemporaneas"
                className="text-brand underline"
              >
                esos cuatro perfiles
              </Link>
              . Quien busque escultura, grabado o cerámica —y no solo pintura—
              sigue en{" "}
              <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
                mujeres artistas chilenas
              </Link>
              .
            </p>

            <h2
              id="artistas-chilenas-mujeres-pintoras"
              className="text-3xl font-semibold text-ink mt-10 mb-6"
            >
              Artistas chilenas, mujeres pintoras
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Artistas chilenas mujeres pintoras</strong>, en esta
              página, son Castro, las hermanas Mira, Petit, Pérez, Barrios, Bru,
              Aldunate y Marcela Pedrosa. El enlace de cada nombre está en la
              lista de arriba. Camilo Mori y Totoy Zamudio también tienen
              perfil en el sitio, y son pintores: no entran en este grupo.
            </p>

            <h2
              id="pintoras-chilenas-actuales"
              className="text-3xl font-semibold text-ink mt-10 mb-6"
            >
              Pintoras chilenas actuales
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              De las <strong>pintoras chilenas actuales</strong>, este sitio
              documenta a <strong>Marcela Pedrosa</strong>, que pinta hoy en
              Concepción, Región del Biobío: fachadas y bosques en óleo sobre
              tela e impresionismo figurativo. Aldunate, Barrios, Bru y Pérez
              pertenecen al recorrido de las famosas. Aldunate falleció el 25 de
              septiembre de 2026, así que no queda entre quienes trabajan hoy.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Para ver esas telas, entra a{" "}
              <Link href="/cuadros" className="text-brand underline">
                cuadros al óleo
              </Link>{" "}
              o a{" "}
              <Link href="/comprar-arte-chile" className="text-brand underline">
                comprar arte en Chile
              </Link>
              . Para medir el muro o encargar, el índice está en{" "}
              <Link href="/guias" className="text-brand underline">
                guías
              </Link>
              .
            </p>
            <CatalogFichaLinks />
            <DescriptiveFichaLinks lead="Esas telas de Marcela, con el nombre de la ficha, son" />

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Pioneras: Las Primeras Pintoras de Chile
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              A fines del siglo XIX, las <strong>pintoras chilenas</strong>{" "}
              comenzaron a formarse profesionalmente y a exponer en los salones
              oficiales, abriendo camino en un medio dominado por hombres.
              Algunas de las pioneras más relevantes:
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-4 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Celia Castro (1860-1930):</strong> Pintora de
                    Quillota, una de las primeras profesionales del país y la
                    primera mujer pensionada por el Estado para estudiar arte
                    en Europa.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Aurora Mira (1863-1939):</strong> Pintora de
                    Santiago, hermana de Magdalena. Retratos, flores y
                    bodegones, y medallas en los salones oficiales.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Magdalena Mira (1859-1930):</strong> Pintora y
                    escultora de Santiago, hermana de Aurora. Medalla de oro en
                    1884 por La hermana de la caridad.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-ink-body leading-relaxed mb-6">
              Estas artistas enfrentaron restricciones de acceso a la formación
              académica y a géneros como el desnudo, pero su perseverancia
              consolidó la presencia femenina en la pintura chilena.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              El Siglo XX: Las Pintoras Chilenas que Marcaron Época
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              En el siglo XX el sitio documenta a Henriette Petit, cofundadora
              del Grupo Montparnasse, y a quienes recibieron el Premio Nacional
              de Artes Plásticas con ficha propia: Gracia Barrios en 2011 y
              Roser Bru en 2015.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">
                  Matilde Pérez (1916-2014)
                </h4>
                <p className="text-ink-body text-sm">
                  Pionera del arte cinético en Chile y América Latina. Llevó la
                  pintura chilena al terreno del movimiento, la luz y la
                  geometría.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">
                  Gracia Barrios (1927-2020)
                </h4>
                <p className="text-ink-body text-sm">
                  Premio Nacional de Artes Plásticas 2011. Su pintura
                  expresionista abstracta exploró el color, el gesto y la
                  memoria.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">
                  Roser Bru (1923-2021)
                </h4>
                <p className="text-ink-body text-sm">
                  Pintora catalano-chilena, Premio Nacional de Artes Plásticas
                  2015. Su obra aborda la memoria, el exilio y los derechos
                  humanos.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">
                  Carmen Aldunate (1940)
                </h4>
                <p className="text-ink-body text-sm">
                  Pintora y dibujante de figuración simbólica. Nació en Viña del
                  Mar en 1940. El Museo Nacional de Bellas Artes confirmó su
                  fallecimiento el 25 de septiembre de 2026.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Técnicas y Temas de las Pintoras Chilenas
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              La pintura chilena femenina se ha expresado en múltiples
              técnicas. El <strong>óleo sobre tela</strong> es la más arraigada,
              junto con el acrílico, la acuarela y el grabado. En cuanto a los
              temas, las <strong>pintoras chilenas</strong> han destacado por:
            </p>

            <div className="space-y-4 my-8">
              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3 font-bold">→</span>
                <div>
                  <strong className="text-brand">Paisaje e identidad:</strong>
                  <p className="text-ink-body text-sm mt-1">
                    Desde el valle central hasta la costa del Biobío, la
                    interpretación del paisaje chileno ha sido un sello
                    constante de la pintura femenina nacional.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3 font-bold">→</span>
                <div>
                  <strong className="text-brand">Retrato y figura:</strong>
                  <p className="text-ink-body text-sm mt-1">
                    La representación de la mujer y la vida cotidiana desde la
                    propia mirada femenina, un aporte único a la historia del
                    arte chileno.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3 font-bold">→</span>
                <div>
                  <strong className="text-brand">Abstracción y vanguardia:</strong>
                  <p className="text-ink-body text-sm mt-1">
                    Pintoras como Matilde Pérez y Gracia Barrios llevaron la
                    pintura chilena a la vanguardia internacional.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Del siglo XX al taller de hoy
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Barrios, Bru, Pérez y Aldunate tienen obra en la segunda mitad del
              siglo XX y, en el caso de Aldunate, hasta 2026. Ese recorte no es
              la lista de{" "}
              <a href="#pintoras-chilenas-actuales" className="text-brand underline">
                pintoras chilenas actuales
              </a>
              . Quien pinta hoy, en este sitio, es Marcela Pedrosa desde
              Concepción.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Marcela Pedrosa: Pintora Chilena de Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una <strong>pintora
              chilena</strong> que trabaja en Concepción, Región del Biobío. Con
              más de 20 años de trayectoria, pinta{" "}
              <strong>óleo sobre tela</strong> e <strong>impresionismo
              figurativo</strong>: fachadas, bosques y atmósferas del sur de
              Chile.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-ink mb-4">
                Características de su pintura:
              </h4>
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Óleo sobre tela:</strong> técnica tradicional
                    dominada con maestría tras décadas de práctica
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Impresionismo figurativo:</strong> pincelada suelta
                    sobre formas reconocibles del paisaje chileno
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Identidad regional:</strong> fachadas y bosques del
                    Biobío como tema central
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Obras originales:</strong> piezas únicas disponibles
                    para coleccionistas y hogares, además de encargos
                    personalizados
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Conoce la Pintura de Marcela Pedrosa
              </h3>
              <p className="mb-6 text-white/90">
                Pintora chilena contemporánea, óleo sobre tela e impresionismo
                figurativo desde Concepción
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, me interesa conocer tus pinturas al óleo."
                  label="Consultar Obras Disponibles"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver Galería de Pinturas
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Cómo Comprar Pintura de Pintoras Chilenas
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Comprar obra de <strong>pintoras chilenas</strong> es más fácil
              que nunca. Muchas artistas, como Marcela Pedrosa, venden
              directamente desde sus talleres y sitios web, lo que permite
              acceder a obras originales sin intermediarios y a precios justos
              para ambas partes.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Obras originales certificadas por la artista</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Encargos personalizados según medidas y colores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Envío seguro a todo Chile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Trato directo con la pintora, sin comisiones</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Preguntas Frecuentes sobre Pintoras Chilenas
            </h3>

            <div className="space-y-4 my-8">
              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-2">
                  ¿Quiénes son las pintoras chilenas más importantes de la historia?
                </h4>
                <p className="text-ink-body text-sm">
                  En los perfiles de este sitio: Celia Castro y las hermanas Mira
                  en el siglo XIX; Henriette Petit, Matilde Pérez, Gracia
                  Barrios (Premio Nacional de Artes Plásticas 2011), Roser Bru
                  (Premio Nacional de Artes Plásticas 2015) y Carmen Aldunate en
                  el siglo XX.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-2">
                  ¿Qué pintoras chilenas contemporáneas están activas hoy?
                </h4>
                <p className="text-ink-body text-sm">
                  De quien pinta hoy, este sitio documenta a Marcela Pedrosa en
                  Concepción, con óleo sobre tela e impresionismo figurativo.
                  Carmen Aldunate falleció en 2026: queda entre las famosas, no
                  entre las actuales.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-2">
                  ¿Dónde comprar pinturas de pintoras chilenas?
                </h4>
                <p className="text-ink-body text-sm">
                  Directamente en talleres, galerías y sitios web de las
                  artistas. Marcela Pedrosa vende sus obras desde Concepción
                  con envío a todo Chile. La compra por consulta está en{" "}
                  <Link href="/comprar-arte-chile" className="text-brand underline">
                    comprar arte en Chile
                  </Link>
                  .
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-2">
                  ¿Qué técnicas utilizan las pintoras chilenas?
                </h4>
                <p className="text-ink-body text-sm">
                  Principalmente óleo sobre tela, acrílico, acuarela, grabado y
                  técnicas mixtas. El óleo sobre tela sigue siendo la técnica
                  reina de la pintura chilena.
                </p>
              </div>
              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-2">
                  ¿Quiénes son artistas chilenas mujeres pintoras?
                </h4>
                <p className="text-ink-body text-sm">
                  En esta página, artistas chilenas mujeres pintoras son Celia
                  Castro, Aurora Mira, Magdalena Mira, Henriette Petit, Matilde
                  Pérez, Gracia Barrios, Roser Bru, Carmen Aldunate y Marcela
                  Pedrosa, que pinta en Concepción. Cada nombre enlaza a su
                  perfil.
                </p>
              </div>
              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-2">
                  ¿Dónde ver pintoras chilenas famosas y actuales?
                </h4>
                <p className="text-ink-body text-sm">
                  Las famosas con perfil son Castro, las hermanas Mira, Petit,
                  Pérez, Barrios, Bru y Aldunate. De las actuales, el sitio
                  presenta a Marcela Pedrosa en Concepción. Los perfiles con
                  fuente están en{" "}
                  <Link href="/artistas-chilenas" className="text-brand underline">
                    artistas chilenas
                  </Link>
                  .
                </p>
              </div>
            </div>
          </article>

          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">Conoce más</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pinturas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Obras de Marcela Pedrosa →
                </span>
                <p className="text-sm text-ink-muted mt-1">
                  Galería completa de pinturas al óleo
                </p>
              </Link>
              <Link
                href="/mujeres-artistas-chilenas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Mujeres Artistas Chilenas →
                </span>
                <p className="text-sm text-ink-muted mt-1">
                  Historia del arte femenino en Chile
                </p>
              </Link>
              <Link
                href="/marcela-pedrosa"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  La Artista →
                </span>
                <p className="text-sm text-ink-muted mt-1">
                  Trayectoria de Marcela Pedrosa
                </p>
              </Link>
              <Link
                href="/oleo-sobre-tela-chile"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Óleo sobre Tela en Chile →
                </span>
                <p className="text-sm text-ink-muted mt-1">
                  La técnica de la pintura chilena
                </p>
              </Link>
              <Link
                href="/impresionismo-figurativo-chile"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">
                  Impresionismo figurativo →
                </span>
                <p className="text-sm text-ink-muted mt-1">
                  El estilo de Marcela Pedrosa
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
