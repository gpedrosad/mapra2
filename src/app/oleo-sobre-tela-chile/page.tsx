import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  title: "Óleo sobre Tela Chile | Marcela Pedrosa - Pintura al Óleo Profesional",
  description:
    "Óleo sobre tela en Chile por Marcela Pedrosa. Técnica tradicional de pintura al óleo, obras originales de alta calidad. Artista especializada en impresionismo figurativo desde Concepción.",
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
  openGraph: {
    title: "Óleo sobre Tela en Chile - Marcela Pedrosa",
    description:
      "Pintura al óleo profesional sobre tela. Técnica tradicional, obras originales de alta calidad desde Concepción, Chile.",
    url: `${BASE_URL}/oleo-sobre-tela-chile`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/mujer.jpeg`,
        width: 1200,
        height: 630,
        alt: "Óleo sobre tela de Marcela Pedrosa, Chile",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/oleo-sobre-tela-chile`,
  },
};

export default function OleoSobreTelaChilePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F3B2E] mb-6">
              Óleo sobre Tela en Chile
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-700 mb-8 leading-relaxed">
              Técnica Tradicional, Calidad Profesional
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/mujer.jpeg"
              alt="Pintura al óleo sobre tela de Marcela Pedrosa, Chile"
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
              La Pintura al Óleo sobre Tela: Tradición y Calidad
            </h2>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El <strong>óleo sobre tela</strong> es una de las técnicas más nobles y duraderas 
              de la pintura artística. En Chile, artistas como <strong>Marcela Pedrosa</strong> 
              mantienen viva esta tradición centenaria, combinando métodos clásicos con sensibilidades 
              contemporáneas.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              La <strong>pintura al óleo</strong> se caracteriza por su riqueza cromática, su capacidad 
              de crear texturas complejas y su extraordinaria durabilidad. Obras creadas con esta técnica 
              pueden conservarse en perfecto estado durante siglos, como lo demuestran los maestros 
              del Renacimiento y posteriores.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              ¿Qué es el Óleo sobre Tela?
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El óleo es una técnica pictórica que utiliza <strong>pigmentos mezclados con aceites</strong> 
              (tradicionalmente aceite de linaza) como aglutinante. Se aplica sobre un soporte preparado, 
              generalmente tela de algodón o lino imprimada con gesso.
            </p>

            <div className="bg-zinc-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-[#0F3B2E] mb-4">Características del Óleo sobre Tela:</h4>
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Secado lento:</strong> Permite trabajar y corregir durante días o semanas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Colores intensos:</strong> Pigmentos de alta concentración y luminosidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Versatilidad:</strong> Desde transparencias hasta empastes gruesos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Durabilidad:</strong> Resistencia excepcional al paso del tiempo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span><strong>Flexibilidad:</strong> La tela permite enrollar y transportar obras grandes</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Proceso de Creación de una Obra al Óleo
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              La creación de una <strong>pintura al óleo sobre tela</strong> profesional sigue 
              un proceso meticuloso:
            </p>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-[#0F3B2E] pl-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-2">1. Preparación del Soporte</h4>
                <p className="text-zinc-700 text-sm">
                  La tela de algodón o lino se tensa sobre un bastidor de madera. Se aplican varias 
                  capas de imprimación (gesso) para crear una superficie adecuada que aisle la tela 
                  del aceite y proporcione adherencia.
                </p>
              </div>

              <div className="border-l-4 border-[#0F3B2E] pl-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-2">2. Boceto y Composición</h4>
                <p className="text-zinc-700 text-sm">
                  Se realiza un dibujo preliminar con carboncillo o pintura diluida para establecer 
                  la composición, proporciones y distribución de luces y sombras.
                </p>
              </div>

              <div className="border-l-4 border-[#0F3B2E] pl-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-2">3. Capa de Imprimatura</h4>
                <p className="text-zinc-700 text-sm">
                  Una primera capa de color diluido que establece el tono general de la obra y 
                  elimina el blanco puro de la imprimación.
                </p>
              </div>

              <div className="border-l-4 border-[#0F3B2E] pl-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-2">4. Capas Sucesivas</h4>
                <p className="text-zinc-700 text-sm">
                  Aplicación de múltiples capas de óleo, trabajando de magro a graso (menos aceite 
                  a más aceite) para evitar craquelados. Cada capa debe secar antes de aplicar la siguiente.
                </p>
              </div>

              <div className="border-l-4 border-[#0F3B2E] pl-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-2">5. Detalles y Acabados</h4>
                <p className="text-zinc-700 text-sm">
                  Refinamiento de detalles, ajustes de color y luz. En el caso del impresionismo, 
                  pinceladas sueltas y expresivas que capturan la esencia más que el detalle fotográfico.
                </p>
              </div>

              <div className="border-l-4 border-[#0F3B2E] pl-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-2">6. Secado y Barnizado</h4>
                <p className="text-zinc-700 text-sm">
                  Tras 6-12 meses de secado completo, se aplica un barniz de protección que unifica 
                  brillos, protege de UV y facilita la limpieza futura de la obra.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Óleo sobre Tela en Chile: Tradición Artística
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Chile cuenta con una rica tradición de <strong>pintura al óleo</strong>, desde los 
              maestros académicos del siglo XIX hasta los artistas contemporáneos. La técnica ha sido 
              el medio preferido para capturar los paisajes únicos del país, desde el desierto de 
              Atacama hasta los bosques del sur.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              En la <strong>Región del Biobío</strong>, artistas como Marcela Pedrosa continúan esta 
              tradición, interpretando el paisaje urbano y natural de Concepción y sus alrededores 
              con sensibilidad contemporánea.
            </p>

            <div className="bg-[#0F3B2E] text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Obras Originales al Óleo sobre Tela
              </h3>
              <p className="mb-6 text-zinc-100">
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
                  className="inline-block bg-white text-[#0F3B2E] px-6 py-3 rounded-xl font-medium hover:bg-zinc-100 transition-colors"
                >
                  Ver Galería
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Ventajas del Óleo sobre Tela
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">🎨 Calidad Artística</h4>
                <p className="text-zinc-700 text-sm">
                  Los pigmentos al óleo ofrecen la mayor riqueza cromática y profundidad de todas 
                  las técnicas pictóricas. Permiten mezclas sutiles y efectos imposibles con otros medios.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">⏳ Durabilidad</h4>
                <p className="text-zinc-700 text-sm">
                  Una obra al óleo bien ejecutada puede durar siglos sin perder calidad. Museos 
                  conservan óleos de hace 500 años en perfecto estado.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">🖌️ Versatilidad Técnica</h4>
                <p className="text-zinc-700 text-sm">
                  Desde veladuras transparentes hasta empastes texturados, el óleo permite una 
                  amplísima gama de efectos y estilos pictóricos.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3">💎 Valor de Inversión</h4>
                <p className="text-zinc-700 text-sm">
                  Las obras originales al óleo de artistas establecidos mantienen y aumentan su 
                  valor con el tiempo, siendo apreciadas por coleccionistas.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Cuidado y Conservación
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Las <strong>pinturas al óleo sobre tela</strong> requieren cuidados mínimos pero importantes:
            </p>

            <div className="bg-zinc-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">✓</span>
                  <span>Evitar luz solar directa prolongada (puede decolorar pigmentos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">✓</span>
                  <span>Mantener en ambiente con humedad controlada (40-60%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">✓</span>
                  <span>Limpiar suavemente con paño seco y suave (nunca agua ni productos químicos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">✓</span>
                  <span>El barniz protector facilita la limpieza y protege de polvo y contaminantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">✓</span>
                  <span>Para restauraciones, consultar siempre con profesionales especializados</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Marcela Pedrosa: Especialista en Óleo sobre Tela
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Con más de 20 años de experiencia en <strong>pintura al óleo</strong>, Marcela Pedrosa 
              domina las técnicas tradicionales y las aplica con sensibilidad contemporánea. Su trabajo 
              se caracteriza por:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="flex items-start p-4 bg-white border border-zinc-200 rounded-lg">
                <span className="text-[#0F3B2E] mr-3 text-xl">→</span>
                <div>
                  <strong className="text-[#0F3B2E]">Técnica depurada:</strong>
                  <p className="text-zinc-700 text-sm mt-1">Dominio de veladuras, empastes y pincelada suelta</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-zinc-200 rounded-lg">
                <span className="text-[#0F3B2E] mr-3 text-xl">→</span>
                <div>
                  <strong className="text-[#0F3B2E]">Materiales premium:</strong>
                  <p className="text-zinc-700 text-sm mt-1">Pigmentos profesionales y telas de primera calidad</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-zinc-200 rounded-lg">
                <span className="text-[#0F3B2E] mr-3 text-xl">→</span>
                <div>
                  <strong className="text-[#0F3B2E]">Estilo personal:</strong>
                  <p className="text-zinc-700 text-sm mt-1">Impresionismo figurativo con identidad regional</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-zinc-200 rounded-lg">
                <span className="text-[#0F3B2E] mr-3 text-xl">→</span>
                <div>
                  <strong className="text-[#0F3B2E]">Obras durables:</strong>
                  <p className="text-zinc-700 text-sm mt-1">Proceso completo con barnizado de protección</p>
                </div>
              </div>
            </div>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Sus obras en <strong>óleo sobre tela</strong> forman parte de colecciones privadas en 
              Chile y el extranjero, testimonio de la calidad técnica y el valor artístico de su trabajo.
            </p>
          </article>

          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-zinc-200">
            <h3 className="text-xl font-semibold text-[#0F3B2E] mb-4">
              Descubre más
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pinturas"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">Galería de Óleos →</span>
                <p className="text-sm text-zinc-600 mt-1">Obras disponibles en óleo sobre tela</p>
              </Link>
              <Link
                href="/contacto"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">Encargos →</span>
                <p className="text-sm text-zinc-600 mt-1">Consulta por obras personalizadas</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
