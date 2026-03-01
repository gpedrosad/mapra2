import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  title: "Impresionismo Figurativo Chile | Marcela Pedrosa - Arte Impresionista Contemporáneo",
  description:
    "Impresionismo figurativo en Chile. Marcela Pedrosa, artista especializada en pintura impresionista figurativa. Obras al óleo que fusionan impresionismo y figuración desde Concepción.",
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
  openGraph: {
    title: "Impresionismo Figurativo en Chile - Marcela Pedrosa",
    description:
      "Arte impresionista figurativo contemporáneo. Obras al óleo que capturan luz, emoción y forma desde Concepción, Chile.",
    url: `${BASE_URL}/impresionismo-figurativo-chile`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/bosque.jpeg`,
        width: 1200,
        height: 630,
        alt: "Impresionismo figurativo de Marcela Pedrosa, Chile",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/impresionismo-figurativo-chile`,
  },
};

export default function ImpresionismoFigurativoChilePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F3B2E] mb-6">
              Impresionismo Figurativo en Chile
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-700 mb-8 leading-relaxed">
              Luz, Emoción y Forma en la Pintura Contemporánea
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/bosque.jpeg"
              alt="Ejemplo de impresionismo figurativo de Marcela Pedrosa, Chile"
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
              ¿Qué es el Impresionismo Figurativo?
            </h2>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El <strong>impresionismo figurativo</strong> es un estilo pictórico que fusiona dos 
              tradiciones artísticas: la captura de la luz y la atmósfera propia del impresionismo 
              clásico, con la representación reconocible de figuras, personas y objetos del arte figurativo.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              A diferencia del impresionismo puro que puede tender a la abstracción, el 
              <strong> impresionismo figurativo</strong> mantiene formas identificables mientras 
              conserva la pincelada suelta, los juegos de luz y la expresividad cromática característica 
              del movimiento impresionista.
            </p>

            <div className="bg-zinc-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-[#0F3B2E] mb-4">Características del Impresionismo Figurativo:</h4>
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Pincelada suelta y visible:</strong> Las marcas del pincel son parte de la expresión artística</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Captura de la luz:</strong> Énfasis en cómo la luz modifica colores y formas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Formas reconocibles:</strong> Figuras, paisajes y objetos identificables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Emoción sobre detalle:</strong> Transmite sensaciones más que representaciones fotográficas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Paleta expresiva:</strong> Uso del color para crear atmósfera y emoción</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Historia del Impresionismo en Chile
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El <strong>impresionismo llegó a Chile</strong> a principios del siglo XX, influenciando 
              a generaciones de artistas chilenos. Pintores como Juan Francisco González, Alfredo 
              Helsby y Pedro Lira incorporaron elementos impresionistas en su trabajo, adaptándolos 
              a la luz y paisajes únicos de Chile.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              A lo largo del siglo XX y XXI, el <strong>impresionismo en Chile</strong> ha evolucionado, 
              fusionándose con otras corrientes y adaptándose a sensibilidades contemporáneas. Artistas 
              actuales como Marcela Pedrosa continúan esta tradición, desarrollando un 
              <strong> impresionismo figurativo</strong> con identidad propia.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Impresionismo Figurativo Contemporáneo
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El <strong>impresionismo figurativo contemporáneo</strong> en Chile se caracteriza por:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">🎨 Técnica Mixta</h4>
                <p className="text-zinc-700 text-sm">
                  Combinación de técnicas tradicionales del impresionismo (veladuras, pincelada 
                  suelta) con enfoques contemporáneos de composición y color.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">🌄 Temas Locales</h4>
                <p className="text-zinc-700 text-sm">
                  Interpretación de paisajes, arquitectura y escenas cotidianas chilenas con 
                  sensibilidad impresionista, capturando la luz particular de cada región.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">💫 Expresión Emocional</h4>
                <p className="text-zinc-700 text-sm">
                  Énfasis en transmitir emociones y atmósferas más que en la representación 
                  detallada, conectando con el espectador a nivel sensorial.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">🖌️ Identidad Personal</h4>
                <p className="text-zinc-700 text-sm">
                  Cada artista desarrolla su propia interpretación del impresionismo figurativo, 
                  creando un lenguaje visual único y reconocible.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Marcela Pedrosa: Impresionismo Figurativo desde Concepción
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una destacada exponente del 
              <strong> impresionismo figurativo en Chile</strong>. Desde su taller en Concepción, 
              desarrolla un trabajo que captura la esencia de la Región del Biobío con sensibilidad 
              impresionista.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              &ldquo;Mi pintura busca transmitir emociones para que quien la mira pueda captarlas. Trabajo 
              series figurativas e impresionistas, especialmente fachadas y bosques. El impresionismo 
              me permite capturar no solo lo que veo, sino lo que siento frente al paisaje.&rdquo;
            </p>

            <div className="bg-[#0F3B2E] text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Descubre el Impresionismo Figurativo de Marcela Pedrosa
              </h3>
              <p className="mb-6 text-zinc-100">
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
                  className="inline-block bg-white text-[#0F3B2E] px-6 py-3 rounded-xl font-medium hover:bg-zinc-100 transition-colors"
                >
                  Ver Galería Completa
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Temas Recurrentes en el Impresionismo Figurativo
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El trabajo de Marcela Pedrosa explora diversos temas con enfoque impresionista figurativo:
            </p>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-[#0F3B2E] pl-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-2">Fachadas Urbanas</h4>
                <p className="text-zinc-700 text-sm">
                  La arquitectura de Concepción y el Biobío capturada con pincelada suelta. 
                  Juegos de luz sobre muros, ventanas y texturas urbanas. La ciudad como 
                  protagonista emocional más que documental.
                </p>
              </div>

              <div className="border-l-4 border-[#0F3B2E] pl-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-2">Bosques y Naturaleza</h4>
                <p className="text-zinc-700 text-sm">
                  Paisajes naturales de la región del Biobío interpretados con sensibilidad 
                  impresionista. Árboles, luz filtrada entre hojas, atmósferas de bosque nativo. 
                  La naturaleza como experiencia sensorial.
                </p>
              </div>

              <div className="border-l-4 border-[#0F3B2E] pl-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-2">Figuras y Escenas Cotidianas</h4>
                <p className="text-zinc-700 text-sm">
                  Personas en momentos cotidianos, capturadas con la espontaneidad del impresionismo. 
                  Énfasis en la luz sobre las figuras, gestos y atmósferas más que en detalles faciales.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Técnica del Impresionismo Figurativo
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              La creación de una obra de <strong>impresionismo figurativo</strong> requiere 
              dominio técnico y sensibilidad artística:
            </p>

            <div className="bg-zinc-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-[#0F3B2E] mb-4">Proceso Creativo:</h4>
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">1.</span>
                  <span><strong>Observación:</strong> Estudio de la luz, colores y atmósfera del motivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">2.</span>
                  <span><strong>Boceto rápido:</strong> Captura de la composición y distribución de masas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">3.</span>
                  <span><strong>Capas de color:</strong> Construcción de la obra con capas de óleo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">4.</span>
                  <span><strong>Pincelada expresiva:</strong> Aplicación suelta y gestual del pigmento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">5.</span>
                  <span><strong>Ajustes finales:</strong> Refinamiento de luces, sombras y acentos</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Diferencias con Otros Estilos
            </h3>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0F3B2E] text-white">
                    <th className="border border-zinc-300 p-3 text-left">Estilo</th>
                    <th className="border border-zinc-300 p-3 text-left">Características</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-zinc-300 p-3 font-semibold">Impresionismo Figurativo</td>
                    <td className="border border-zinc-300 p-3">Pincelada suelta + formas reconocibles + énfasis en luz</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="border border-zinc-300 p-3 font-semibold">Realismo</td>
                    <td className="border border-zinc-300 p-3">Representación detallada y precisa de la realidad</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 p-3 font-semibold">Impresionismo Abstracto</td>
                    <td className="border border-zinc-300 p-3">Pincelada expresiva sin formas reconocibles</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="border border-zinc-300 p-3 font-semibold">Expresionismo</td>
                    <td className="border border-zinc-300 p-3">Distorsión de formas para expresar emociones intensas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Coleccionar Impresionismo Figurativo
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Las obras de <strong>impresionismo figurativo</strong> son apreciadas por coleccionistas 
              por su equilibrio entre accesibilidad visual y sofisticación técnica. Ofrecen:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="flex items-start p-4 bg-white border border-zinc-200 rounded-lg">
                <span className="text-[#0F3B2E] mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-[#0F3B2E]">Versatilidad decorativa:</strong>
                  <p className="text-zinc-700 text-sm mt-1">Se integran bien en diversos espacios y estilos</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-zinc-200 rounded-lg">
                <span className="text-[#0F3B2E] mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-[#0F3B2E]">Conexión emocional:</strong>
                  <p className="text-zinc-700 text-sm mt-1">Transmiten sensaciones y atmósferas</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-zinc-200 rounded-lg">
                <span className="text-[#0F3B2E] mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-[#0F3B2E]">Valor artístico:</strong>
                  <p className="text-zinc-700 text-sm mt-1">Técnica depurada y estilo reconocible</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-zinc-200 rounded-lg">
                <span className="text-[#0F3B2E] mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-[#0F3B2E]">Identidad regional:</strong>
                  <p className="text-zinc-700 text-sm mt-1">Capturan la esencia de lugares específicos</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              El Futuro del Impresionismo en Chile
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El <strong>impresionismo figurativo</strong> continúa siendo relevante en el arte 
              contemporáneo chileno. Artistas como Marcela Pedrosa demuestran que esta tradición 
              puede evolucionar y adaptarse sin perder su esencia, ofreciendo una alternativa a 
              las tendencias más conceptuales del arte actual.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              La combinación de técnica tradicional, sensibilidad contemporánea e identidad regional 
              asegura que el impresionismo figurativo seguirá siendo una corriente vital en el 
              panorama artístico chileno.
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
                <span className="font-medium text-[#0F3B2E]">Galería Impresionista →</span>
                <p className="text-sm text-zinc-600 mt-1">Obras de impresionismo figurativo</p>
              </Link>
              <Link
                href="/prensa"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">Sobre la Artista →</span>
                <p className="text-sm text-zinc-600 mt-1">Trayectoria y exposiciones</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
