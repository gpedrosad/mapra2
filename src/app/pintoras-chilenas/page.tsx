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
    absolute: "Pintoras chilenas famosas y actuales | Marcela Pedrosa",
  },
  description:
    "Pintoras chilenas famosas y actuales. Artistas chilenas, mujeres pintoras: de las pioneras a Marcela Pedrosa, en Concepción.",
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
  openGraph: {
    title: "Pintoras chilenas famosas y actuales | Marcela Pedrosa",
    description:
      "Pintoras chilenas famosas y actuales. Artistas chilenas, mujeres pintoras: de las pioneras a Marcela Pedrosa, en Concepción.",
    url: `${BASE_URL}/pintoras-chilenas`,
    type: "article",
    images: [
      {
        url: getOgImageUrl("gente", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Obra de Marcela Pedrosa, pintora chilena contemporánea",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/pintoras-chilenas`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quiénes son las pintoras chilenas más importantes de la historia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre las pintoras chilenas más importantes destacan Celia Castro y Aurora Mira (siglo XIX), Henriette Petit (primera mujer Premio Nacional de Arte en 1965), Matilde Pérez, Roser Bru y Gracia Barrios en el siglo XX, y contemporáneas como Marcela Pedrosa desde Concepción.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pintoras chilenas contemporáneas están activas hoy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hay pintoras chilenas actuales en todo el país. En Concepción, Región del Biobío, Marcela Pedrosa pinta óleo sobre tela e impresionismo figurativo, vende obras originales y realiza encargos personalizados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde comprar pinturas de pintoras chilenas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las pinturas originales de pintoras chilenas pueden comprarse directamente en sus talleres, galerías y sitios web. Marcela Pedrosa vende sus obras al óleo desde su taller en Concepción, con envío a todo Chile, vía WhatsApp o formulario de contacto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué técnicas utilizan las pintoras chilenas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las pintoras chilenas trabajan principalmente óleo sobre tela, acrílico, acuarela, grabado y técnicas mixtas. Marcela Pedrosa se especializa en óleo sobre tela con un estilo de impresionismo figurativo.",
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
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Pintoras Chilenas
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
            />
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-ink mb-6">
              Las Pintoras Chilenas: Una Tradición con Voz Propia
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              Las <strong>pintoras chilenas</strong> han construido una de las
              tradiciones pictóricas más ricas de América Latina, aunque su
              aporte fue durante décadas menos visible que el de sus pares
              hombres. Desde las primeras alumnas de la Academia de Pintura en
              el siglo XIX hasta las creadoras contemporáneas, la pintura
              chilena hecha por mujeres ha aportado una mirada única sobre el
              paisaje, el retrato y la identidad nacional.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Hoy, esta tradición continúa viva en todas las regiones del país.
              Artistas como <strong>Marcela Pedrosa</strong>, pintora de
              Concepción, Región del Biobío, son herederas directas de este
              legado y lo proyectan hacia el futuro con obras originales en{" "}
              <strong>óleo sobre tela</strong>.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Las <strong>pintoras chilenas famosas</strong> de este recorrido
              son Celia Castro, Aurora Mira y Magdalena Mira, y en el siglo XX
              Henriette Petit, Matilde Pérez, Gracia Barrios, Roser Bru y Carmen
              Aldunate. Las <strong>pintoras chilenas actuales</strong> siguen
              en regiones: en Concepción, Marcela Pedrosa pinta fachadas y
              bosques del Biobío. El marco más amplio, el de las{" "}
              <Link
                href="/mujeres-artistas-chilenas"
                className="text-brand underline"
              >
                artistas chilenas, mujeres pintoras
              </Link>
              , está en la página de mujeres artistas chilenas.
            </p>

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
                    <strong>Celia Castro (1860-1930):</strong> Primera pintora
                    profesional de Chile, becada para estudiar en Europa. Se
                    especializó en retratos y escenas costumbristas.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Aurora Mira (1868-1940):</strong> Retratista
                    destacada, una de las primeras mujeres en recibir premios en
                    salones oficiales chilenos.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Magdalena Mira (1859-1930):</strong> Hermana de
                    Aurora, reconocida por su obra de tema familiar y su
                    temprana presencia en exposiciones internacionales.
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
              Durante el siglo XX, las <strong>pintoras chilenas</strong>{" "}
              alcanzaron reconocimiento nacional e internacional. Henriette
              Petit se convirtió en 1965 en la primera mujer en recibir el
              Premio Nacional de Arte. Otras figuras imprescindibles:
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
                  Pintora de figuración simbólica con sello inconfundible: sus
                  mujeres de cuello alargado son un ícono del arte chileno.
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
              Pintoras Chilenas Contemporáneas: La Escena Actual
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              En el siglo XXI, las <strong>pintoras chilenas
              contemporáneas</strong> trabajan con libertad temática y técnica,
              exhiben en galerías y museos, y venden su obra a coleccionistas en
              Chile y el extranjero. El auge de las ventas online y las redes
              sociales ha permitido a las artistas de regiones llegar
              directamente a compradores de todo el mundo.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              La escena no se concentra solo en Santiago: ciudades como
              Valparaíso, Valdivia, Temuco y <strong>Concepción</strong> albergan
              activas comunidades de pintoras que desarrollan carreras sólidas
              desde regiones.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Marcela Pedrosa: Pintora Chilena de Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una <strong>pintora
              chilena</strong> contemporánea radicada en Concepción, Región del
              Biobío. Con más de 20 años de trayectoria, se especializa en{" "}
              <strong>óleo sobre tela</strong> e <strong>impresionismo
              figurativo</strong>, pintando fachadas, bosques y atmósferas del
              sur de Chile. Su trabajo la posiciona como una de las pintoras
              activas más destacadas del Biobío.
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
                  Celia Castro y Aurora Mira en el siglo XIX; Henriette Petit
                  (primera mujer Premio Nacional de Arte), Matilde Pérez, Roser
                  Bru y Gracia Barrios en el siglo XX, entre muchas otras.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-2">
                  ¿Qué pintoras chilenas contemporáneas están activas hoy?
                </h4>
                <p className="text-ink-body text-sm">
                  Hay pintoras chilenas actuales en todo el país. En la Región
                  del Biobío, Marcela Pedrosa pinta óleo sobre tela e
                  impresionismo figurativo.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-2">
                  ¿Dónde comprar pinturas de pintoras chilenas?
                </h4>
                <p className="text-ink-body text-sm">
                  Directamente en talleres, galerías y sitios web de las
                  artistas. Marcela Pedrosa vende sus obras desde Concepción
                  con envío a todo Chile.
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

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
