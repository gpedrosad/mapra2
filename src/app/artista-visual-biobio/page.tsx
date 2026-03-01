import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  title: "Artista Visual Biobío | Marcela Pedrosa - Arte Contemporáneo Región del Biobío",
  description:
    "Marcela Pedrosa, artista visual de la Región del Biobío. Especializada en pintura al óleo e impresionismo figurativo. Obras originales desde Concepción para toda la región del Biobío y Chile.",
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
  openGraph: {
    title: "Marcela Pedrosa - Artista Visual de la Región del Biobío",
    description:
      "Artista visual especializada en óleo sobre tela e impresionismo figurativo. Desde Concepción para toda la región del Biobío.",
    url: `${BASE_URL}/artista-visual-biobio`,
    type: "profile",
    images: [
      {
        url: `${BASE_URL}/gente.jpeg`,
        width: 1200,
        height: 630,
        alt: "Obra de Marcela Pedrosa, artista visual del Biobío",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/artista-visual-biobio`,
  },
};

export default function ArtistaVisualBiobioPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F3B2E] mb-6">
              Artista Visual del Biobío
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-700 mb-8 leading-relaxed">
              Marcela Pedrosa - Arte Contemporáneo desde la Región del Biobío
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/gente.jpeg"
              alt="Obra de Marcela Pedrosa, artista visual de la Región del Biobío"
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
            <h2 className="text-3xl font-semibold text-[#0F3B2E] mb-6">
              Arte Visual en la Región del Biobío
            </h2>

            <p className="text-zinc-700 leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una destacada artista visual de la Región del Biobío, 
              con base en Concepción. Su trabajo representa una visión contemporánea del arte visual 
              chileno, profundamente arraigada en el territorio y la identidad cultural del sur del país.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Como <strong>artista visual del Biobío</strong>, Marcela ha desarrollado un lenguaje 
              plástico único que dialoga con el paisaje, la arquitectura y la memoria visual de la región. 
              Su obra abarca principalmente la pintura al óleo, aunque también incursiona en cerámica 
              artística y otras disciplinas.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Identidad Regional en el Arte Visual
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              La Región del Biobío posee características geográficas y culturales únicas que se reflejan 
              en el trabajo de sus artistas visuales. Marcela Pedrosa captura en sus obras:
            </p>

            <div className="bg-zinc-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Paisajes del Biobío:</strong> Bosques nativos, ríos y geografía característica de la región</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Arquitectura regional:</strong> Fachadas y construcciones típicas de Concepción y alrededores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Luz del sur:</strong> La particular luminosidad de la zona centro-sur de Chile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Identidad cultural:</strong> Elementos que conectan con la historia y tradiciones locales</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Técnica y Proceso Creativo
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El trabajo de Marcela como artista visual se caracteriza por un profundo conocimiento 
              técnico del <strong>óleo sobre tela</strong>, medio que le permite explorar texturas, 
              capas y matices cromáticos complejos. Su estilo, que ella define como 
              <strong> impresionismo figurativo</strong>, busca transmitir emociones antes que 
              representaciones literales.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              &ldquo;Mi pintura busca transmitir emociones para que quien la mira pueda captarlas. Trabajo 
              series figurativas e impresionistas, especialmente fachadas y bosques. Pinto principalmente 
              en óleo sobre telas naturales por la nobleza del material: maleable, intenso y durable 
              en el tiempo.&rdquo;
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Arte Contemporáneo en el Biobío
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              La Región del Biobío cuenta con una escena artística vibrante, donde artistas visuales 
              como Marcela Pedrosa contribuyen al desarrollo cultural de la zona. Concepción, como 
              capital regional, ofrece espacios de exhibición, galerías y un público cada vez más 
              interesado en el <strong>arte visual contemporáneo</strong>.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El trabajo de Marcela ha sido exhibido en diversos espacios culturales de la región, 
              participando activamente en la difusión del arte visual del Biobío tanto a nivel 
              nacional como internacional.
            </p>

            <div className="bg-[#0F3B2E] text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Conoce el Trabajo de una Artista Visual del Biobío
              </h3>
              <p className="mb-6 text-zinc-100">
                Obras originales, encargos personalizados y proyectos especiales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, vi tu página de artista visual del Biobío y me interesa conocer tu trabajo."
                  label="Contactar por WhatsApp"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-[#0F3B2E] px-6 py-3 rounded-xl font-medium hover:bg-zinc-100 transition-colors"
                >
                  Ver Galería Completa
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Colecciones y Obras Disponibles
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Las obras de Marcela Pedrosa están disponibles para coleccionistas, decoradores y 
              personas que buscan <strong>arte visual original del Biobío</strong>. Su catálogo 
              incluye:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">Serie Fachadas</h4>
                <p className="text-zinc-600 text-sm">
                  Arquitectura urbana de Concepción y el Biobío capturada con sensibilidad 
                  impresionista. Formatos desde 60x80 hasta 130x100 cm.
                </p>
              </div>
              <div className="border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">Serie Bosques</h4>
                <p className="text-zinc-600 text-sm">
                  Paisajes naturales de la región del Biobío. Óleo sobre tela con técnica 
                  de veladuras. Diversos formatos disponibles.
                </p>
              </div>
              <div className="border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">Obras Figurativas</h4>
                <p className="text-zinc-600 text-sm">
                  Representaciones de personas y escenas cotidianas con enfoque impresionista. 
                  Piezas únicas de diversos tamaños.
                </p>
              </div>
              <div className="border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">Cerámica Artística</h4>
                <p className="text-zinc-600 text-sm">
                  Piezas en gres que complementan su obra pictórica. Objetos decorativos 
                  y escultóricos únicos.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Artistas Visuales del Sur de Chile
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El sur de Chile, y particularmente la Región del Biobío, ha sido cuna de importantes 
              artistas visuales que han contribuido al desarrollo del arte chileno contemporáneo. 
              Marcela Pedrosa se inscribe en esta tradición, aportando una mirada personal y 
              contemporánea al arte visual de la región.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Su trabajo dialoga con la tradición pictórica chilena mientras incorpora elementos 
              de vanguardia, creando un puente entre la herencia artística regional y las tendencias 
              contemporáneas del arte visual.
            </p>
          </article>

          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-zinc-200">
            <h3 className="text-xl font-semibold text-[#0F3B2E] mb-4">
              Explora más
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pinturas"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">Galería de Pinturas →</span>
                <p className="text-sm text-zinc-600 mt-1">Obras en óleo sobre tela</p>
              </Link>
              <Link
                href="/esculturas"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">Cerámica Artística →</span>
                <p className="text-sm text-zinc-600 mt-1">Piezas en gres</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
