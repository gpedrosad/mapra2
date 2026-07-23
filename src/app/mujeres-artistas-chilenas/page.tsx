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
    absolute: "Mujeres Artistas Chilenas | Marcela Pedrosa - Arte Femenino en Chile",
  },
  description:
    "Mujeres artistas chilenas contemporáneas. Marcela Pedrosa, pintora y ceramista de Concepción. Historia y presente del arte femenino en Chile, desde pioneras hasta artistas actuales.",
  keywords: [
    "mujeres artistas chilenas",
    "artistas mujeres chile",
    "pintoras chilenas",
    "arte femenino chile",
    "mujeres pintoras chile",
    "artistas visuales mujeres chile",
    "marcela pedrosa",
    "pintoras contemporáneas chile",
    "arte femenino concepción",
    "mujeres arte biobío",
  ],
  openGraph: {
    title: "Mujeres Artistas Chilenas - Marcela Pedrosa",
    description:
      "El arte femenino en Chile. Marcela Pedrosa, pintora contemporánea de Concepción, parte de la tradición de mujeres artistas chilenas.",
    url: `${BASE_URL}/mujeres-artistas-chilenas`,
    type: "article",
    images: [
      {
        url: getOgImageUrl("gente", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Obra de Marcela Pedrosa, mujer artista chilena",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/mujeres-artistas-chilenas`,
  },
};

export default async function MujeresArtistasChilenasPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.mujeres.hero")) ||
    getSiteImageUrl("gente");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Mujeres Artistas Chilenas
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Historia, Presente y Futuro del Arte Femenino en Chile
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Obra de Marcela Pedrosa, representante de las mujeres artistas chilenas contemporáneas"
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
              El Arte Femenino en Chile: Una Historia de Talento y Perseverancia
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              Las <strong>mujeres artistas chilenas</strong> han desempeñado un papel fundamental 
              en el desarrollo del arte nacional, aunque durante mucho tiempo su contribución fue 
              invisibilizada o minimizada. Desde las pioneras del siglo XIX hasta las creadoras 
              contemporáneas, las artistas mujeres han enriquecido el panorama cultural chileno con 
              perspectivas únicas y obras de gran valor.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Hoy, <strong>artistas como Marcela Pedrosa</strong> continúan esta tradición, 
              desarrollando carreras sólidas y contribuyendo significativamente al arte visual 
              chileno desde diversas regiones del país.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Pioneras: Las Primeras Mujeres Artistas en Chile
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              A finales del siglo XIX y principios del XX, las <strong>mujeres artistas chilenas</strong> 
              comenzaron a abrirse paso en un mundo artístico dominado por hombres. Algunas pioneras 
              destacadas incluyen:
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-4 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Celia Castro (1860-1930):</strong> Considerada una de las primeras pintoras profesionales de Chile, conocida por sus retratos y escenas costumbristas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Aurora Mira (1868-1940):</strong> Destacada retratista que logró reconocimiento en una época donde las mujeres tenían acceso limitado a la educación artística formal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Henriette Petit (1894-1983):</strong> Pintora y grabadora, primera mujer en recibir el Premio Nacional de Arte en 1965</span>
                </li>
              </ul>
            </div>

            <p className="text-ink-body leading-relaxed mb-6">
              Estas pioneras enfrentaron barreras significativas: acceso limitado a academias de arte, 
              exclusión de ciertos géneros pictóricos (como el desnudo), y dificultades para exponer 
              y vender su trabajo. Sin embargo, su perseverancia abrió camino para las generaciones 
              siguientes.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Siglo XX: Consolidación y Reconocimiento
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Durante el siglo XX, las <strong>mujeres artistas chilenas</strong> ganaron mayor 
              visibilidad y reconocimiento. Algunas figuras destacadas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">Matilde Pérez (1916-2014)</h4>
                <p className="text-ink-body text-sm">
                  Pionera del arte cinético en América Latina. Su trabajo con luz, movimiento y 
                  geometría la posicionó como una de las artistas más innovadoras de Chile.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">Marta Colvin (1907-1995)</h4>
                <p className="text-ink-body text-sm">
                  Escultora de renombre internacional. Sus obras monumentales combinan influencias 
                  precolombinas con abstracción moderna.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">Roser Bru (1923-2021)</h4>
                <p className="text-ink-body text-sm">
                  Pintora y grabadora catalano-chilena. Su obra aborda temas de memoria, exilio 
                  y derechos humanos con profunda sensibilidad.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">Gracia Barrios (1927-2020)</h4>
                <p className="text-ink-body text-sm">
                  Pintora expresionista abstracta. Premio Nacional de Artes Plásticas 2011. 
                  Su trabajo explora color, gesto y emoción.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Mujeres Artistas Chilenas Contemporáneas
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              En el siglo XXI, las <strong>mujeres artistas chilenas</strong> han alcanzado una 
              presencia significativa en el panorama artístico nacional e internacional. Trabajan 
              en diversas disciplinas: pintura, escultura, instalación, video arte, performance y 
              más.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Artistas contemporáneas como <strong>Marcela Pedrosa</strong> representan esta nueva 
              generación: profesionales consolidadas que desarrollan carreras sólidas, exhiben en 
              galerías, venden su trabajo y contribuyen al desarrollo cultural de sus regiones.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Marcela Pedrosa: Artista Visual de Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una pintora y ceramista de Concepción, Región del 
              Biobío, especializada en <strong>óleo sobre tela</strong> e <strong>impresionismo 
              figurativo</strong>. Su trabajo se inscribe en la tradición de mujeres artistas 
              chilenas que han desarrollado lenguajes visuales personales y han contribuido al 
              arte regional.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-ink mb-4">Características de su obra:</h4>
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Técnica depurada:</strong> Más de 20 años de experiencia en pintura al óleo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Identidad regional:</strong> Captura paisajes, arquitectura y atmósferas del Biobío</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Impresionismo figurativo:</strong> Fusión de pincelada suelta con formas reconocibles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Versatilidad:</strong> Trabaja tanto en pintura como en cerámica artística</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Conoce el Trabajo de Marcela Pedrosa
              </h3>
              <p className="mb-6 text-white/90">
                Pintora contemporánea de Concepción, parte de la tradición de mujeres artistas chilenas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, me interesa conocer tu trabajo como artista visual."
                  label="Contactar a la Artista"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver Galería de Obras
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Desafíos y Avances
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Aunque las <strong>mujeres artistas chilenas</strong> han logrado avances significativos, 
              aún enfrentan desafíos:
            </p>

            <div className="space-y-4 my-8">
              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3 font-bold">→</span>
                <div>
                  <strong className="text-brand">Brecha de género en el mercado del arte:</strong>
                  <p className="text-ink-body text-sm mt-1">
                    Las obras de artistas mujeres históricamente se han vendido a precios más bajos 
                    que las de sus pares masculinos, aunque esta brecha se está reduciendo.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3 font-bold">→</span>
                <div>
                  <strong className="text-brand">Representación en museos y galerías:</strong>
                  <p className="text-ink-body text-sm mt-1">
                    Aunque mejorando, las mujeres artistas siguen estando subrepresentadas en 
                    colecciones permanentes y exposiciones individuales.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3 font-bold">→</span>
                <div>
                  <strong className="text-brand">Conciliación vida-arte:</strong>
                  <p className="text-ink-body text-sm mt-1">
                    Las responsabilidades de cuidado aún recaen desproporcionadamente en mujeres, 
                    afectando el tiempo disponible para la práctica artística.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3 font-bold">→</span>
                <div>
                  <strong className="text-brand">Visibilidad histórica:</strong>
                  <p className="text-ink-body text-sm mt-1">
                    Muchas artistas mujeres del pasado han sido olvidadas o minimizadas en la 
                    historia del arte chileno.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Arte Femenino en Regiones
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Las <strong>mujeres artistas chilenas</strong> no se concentran solo en Santiago. 
              En regiones como el Biobío, Valparaíso, Los Lagos y otras, artistas mujeres desarrollan 
              carreras significativas, contribuyendo al desarrollo cultural local y nacional.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              En <strong>Concepción y la Región del Biobío</strong>, artistas como Marcela Pedrosa 
              mantienen viva la tradición artística regional, interpretando el paisaje y la identidad 
              local desde perspectivas femeninas contemporáneas.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Perspectivas Únicas del Arte Femenino
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Las <strong>mujeres artistas chilenas</strong> aportan perspectivas únicas al arte:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🎨 Temas y Enfoques</h4>
                <p className="text-ink-body text-sm">
                  Exploración de temas relacionados con identidad, memoria, cuerpo, maternidad, 
                  y experiencias femeninas, ampliando el repertorio temático del arte chileno.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🖌️ Técnicas y Materiales</h4>
                <p className="text-ink-body text-sm">
                  Innovación en el uso de materiales y técnicas, desde lo tradicional (óleo, 
                  cerámica) hasta medios contemporáneos (instalación, video, textil).
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">💭 Sensibilidades</h4>
                <p className="text-ink-body text-sm">
                  Aproximaciones que priorizan la emoción, la intuición y la conexión con el 
                  espectador, enriqueciendo el lenguaje visual chileno.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🌍 Compromiso Social</h4>
                <p className="text-ink-body text-sm">
                  Muchas artistas mujeres abordan temas de justicia social, derechos humanos, 
                  ecología y equidad de género en su trabajo.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              El Futuro del Arte Femenino en Chile
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El futuro de las <strong>mujeres artistas chilenas</strong> es prometedor. Cada vez 
              más mujeres acceden a educación artística de calidad, exhiben en espacios prestigiosos, 
              y son reconocidas por su contribución al arte nacional.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Iniciativas como becas específicas para artistas mujeres, cuotas de género en 
              exposiciones, y mayor conciencia sobre la brecha histórica están contribuyendo a 
              un panorama más equitativo.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Artistas como Marcela Pedrosa, que desarrollan carreras sólidas y sostenibles, 
              sirven de inspiración y modelo para nuevas generaciones de creadoras, demostrando 
              que es posible vivir del arte y contribuir significativamente a la cultura chilena.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Apoyar a Mujeres Artistas Chilenas
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Coleccionar obras de <strong>mujeres artistas chilenas</strong> es una forma concreta 
              de apoyar el desarrollo del arte femenino:
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Contribuye a la equidad en el mercado del arte</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Apoya directamente la carrera de artistas profesionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Enriquece colecciones con perspectivas diversas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Invierte en obras con potencial de revalorización</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">✓</span>
                  <span>Participa en la construcción de una historia del arte más inclusiva</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Conoce más
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pinturas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Obras de Marcela Pedrosa →</span>
                <p className="text-sm text-ink-muted mt-1">Galería completa de pinturas</p>
              </Link>
              <Link
                href="/prensa"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Trayectoria →</span>
                <p className="text-sm text-ink-muted mt-1">Exposiciones y reconocimientos</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
