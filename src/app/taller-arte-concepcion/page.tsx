import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getOgImageUrl, getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  title: "Taller de Arte en Concepción | Marcela Pedrosa - Pintura al Óleo y Cerámica",
  description:
    "Taller de arte en Concepción dirigido por Marcela Pedrosa. Especializado en pintura al óleo, técnicas de impresionismo y cerámica artística. Ubicado en la Región del Biobío, Chile.",
  keywords: [
    "taller de arte concepción",
    "taller de pintura concepción",
    "clases de pintura concepción",
    "taller óleo concepción",
    "taller de arte biobío",
    "aprender pintura concepción",
    "taller cerámica concepción",
    "marcela pedrosa taller",
    "arte concepción",
    "pintura al óleo concepción",
  ],
  openGraph: {
    title: "Taller de Arte en Concepción - Marcela Pedrosa",
    description:
      "Taller especializado en pintura al óleo e impresionismo. Ubicado en Concepción, Región del Biobío.",
    url: `${BASE_URL}/taller-arte-concepcion`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Taller de arte de Marcela Pedrosa en Concepción",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/taller-arte-concepcion`,
  },
};

export default async function TallerArteConcepcionPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.taller.hero")) ||
    getSiteImageUrl("elefante");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F3B2E] mb-6">
              Taller de Arte en Concepción
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-700 mb-8 leading-relaxed">
              Pintura al Óleo, Impresionismo y Cerámica Artística
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={heroImageUrl}
              alt="Obra creada en el taller de arte de Marcela Pedrosa en Concepción"
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
              Taller Profesional de Pintura y Cerámica
            </h2>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El <strong>taller de arte de Marcela Pedrosa</strong> en Concepción es un espacio 
              dedicado a la creación artística profesional, especializado en <strong>pintura al óleo</strong> 
              y cerámica artística. Ubicado en la Región del Biobío, el taller es el lugar donde 
              nacen las obras que caracterizan el estilo único de esta reconocida artista visual.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Con más de 20 años de experiencia en artes visuales, Marcela ha desarrollado un espacio 
              de trabajo que combina técnicas tradicionales con enfoques contemporáneos, manteniendo 
              siempre la calidad y autenticidad en cada pieza creada.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Especialidades del Taller
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-zinc-50 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3 text-lg">
                  🎨 Pintura al Óleo
                </h4>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Técnica principal del taller. Trabajo sobre telas naturales con pigmentos de 
                  alta calidad. Especialización en impresionismo figurativo, paisajes y fachadas 
                  urbanas. Formatos desde pequeño hasta gran formato.
                </p>
              </div>

              <div className="bg-zinc-50 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3 text-lg">
                  🏺 Cerámica Artística
                </h4>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Trabajo en gres de alta temperatura. Piezas únicas decorativas y escultóricas. 
                  Técnicas de modelado, esmaltado y cocción. Complemento perfecto a la obra 
                  pictórica.
                </p>
              </div>

              <div className="bg-zinc-50 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3 text-lg">
                  🖼️ Encargos Personalizados
                </h4>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Obras por encargo para coleccionistas, empresas y proyectos especiales. 
                  Asesoría en selección de temas, formatos y paletas cromáticas. Seguimiento 
                  del proceso creativo.
                </p>
              </div>

              <div className="bg-zinc-50 rounded-xl p-6">
                <h4 className="font-semibold text-[#0F3B2E] mb-3 text-lg">
                  📚 Asesoría Artística
                </h4>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Consultas sobre técnicas de óleo, composición y teoría del color. 
                  Orientación para artistas emergentes. Visitas al taller previa coordinación.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Técnicas y Procesos
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              En el taller se emplean <strong>técnicas tradicionales de pintura al óleo</strong> 
              que garantizan la durabilidad y calidad de cada obra:
            </p>

            <div className="bg-white border border-zinc-200 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2 font-bold">1.</span>
                  <span><strong>Preparación de soportes:</strong> Telas naturales de algodón o lino, imprimadas con gesso de calidad profesional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2 font-bold">2.</span>
                  <span><strong>Boceto y composición:</strong> Estudio previo de la composición, luz y distribución de elementos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2 font-bold">3.</span>
                  <span><strong>Capas y veladuras:</strong> Aplicación de múltiples capas de óleo, permitiendo secado entre cada una</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2 font-bold">4.</span>
                  <span><strong>Pincelada suelta:</strong> Técnica característica que aporta movimiento y expresividad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2 font-bold">5.</span>
                  <span><strong>Acabado final:</strong> Barnizado de protección UV una vez completado el secado</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Ubicación y Contexto
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El taller está ubicado en <strong>Concepción, Región del Biobío</strong>, una ciudad 
              con rica tradición cultural y artística. La ubicación permite acceso tanto a la 
              inspiración urbana de la ciudad como a los paisajes naturales de la región.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Concepción, conocida como la capital cultural del sur de Chile, ofrece un ecosistema 
              propicio para el desarrollo artístico, con galerías, museos, centros culturales y 
              una comunidad activa de artistas y apreciadores del arte.
            </p>

            <div className="bg-[#0F3B2E] text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Te interesa conocer el taller?
              </h3>
              <p className="mb-6 text-zinc-100">
                Consulta sobre obras disponibles, encargos personalizados o visitas al taller
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, me gustaría conocer más sobre tu taller de arte en Concepción."
                  label="Contactar por WhatsApp"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-[#0F3B2E] px-6 py-3 rounded-xl font-medium hover:bg-zinc-100 transition-colors"
                >
                  Ver Obras del Taller
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Materiales y Calidad
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El taller trabaja exclusivamente con <strong>materiales de calidad profesional</strong>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              <div className="text-center p-4 border border-zinc-200 rounded-lg">
                <div className="text-3xl mb-2">🎨</div>
                <h4 className="font-semibold text-[#0F3B2E] mb-2">Pigmentos</h4>
                <p className="text-sm text-zinc-600">Óleos profesionales de alta permanencia y luminosidad</p>
              </div>
              <div className="text-center p-4 border border-zinc-200 rounded-lg">
                <div className="text-3xl mb-2">🖼️</div>
                <h4 className="font-semibold text-[#0F3B2E] mb-2">Soportes</h4>
                <p className="text-sm text-zinc-600">Telas naturales de algodón y lino de primera calidad</p>
              </div>
              <div className="text-center p-4 border border-zinc-200 rounded-lg">
                <div className="text-3xl mb-2">✨</div>
                <h4 className="font-semibold text-[#0F3B2E] mb-2">Acabados</h4>
                <p className="text-sm text-zinc-600">Barnices de protección UV para durabilidad</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Talleres de Arte en Concepción
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Concepción cuenta con una diversa oferta de talleres de arte, cada uno con su 
              especialidad y enfoque. El taller de Marcela Pedrosa se distingue por su 
              <strong> enfoque profesional en óleo sobre tela</strong> y su estilo impresionista 
              figurativo, consolidado a través de décadas de práctica y exhibiciones.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Las obras creadas en el taller forman parte de colecciones privadas en Chile y el 
              extranjero, testimonio de la calidad y el valor artístico del trabajo desarrollado 
              en este espacio.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Encargos y Proyectos Especiales
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              El taller acepta encargos personalizados para:
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start p-4 bg-zinc-50 rounded-lg">
                <span className="text-[#0F3B2E] mr-3">→</span>
                <div>
                  <strong className="text-[#0F3B2E]">Coleccionistas privados:</strong>
                  <span className="text-zinc-700"> Obras únicas según preferencias de tema, tamaño y paleta cromática</span>
                </div>
              </div>
              <div className="flex items-start p-4 bg-zinc-50 rounded-lg">
                <span className="text-[#0F3B2E] mr-3">→</span>
                <div>
                  <strong className="text-[#0F3B2E]">Proyectos corporativos:</strong>
                  <span className="text-zinc-700"> Obras de gran formato para oficinas, hoteles y espacios comerciales</span>
                </div>
              </div>
              <div className="flex items-start p-4 bg-zinc-50 rounded-lg">
                <span className="text-[#0F3B2E] mr-3">→</span>
                <div>
                  <strong className="text-[#0F3B2E]">Decoradores de interiores:</strong>
                  <span className="text-zinc-700"> Asesoría y creación de obras específicas para proyectos residenciales</span>
                </div>
              </div>
              <div className="flex items-start p-4 bg-zinc-50 rounded-lg">
                <span className="text-[#0F3B2E] mr-3">→</span>
                <div>
                  <strong className="text-[#0F3B2E]">Regalos especiales:</strong>
                  <span className="text-zinc-700"> Obras personalizadas para ocasiones significativas</span>
                </div>
              </div>
            </div>
          </article>

          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-zinc-200">
            <h3 className="text-xl font-semibold text-[#0F3B2E] mb-4">
              Explora el trabajo del taller
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pinturas"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">Galería de Pinturas →</span>
                <p className="text-sm text-zinc-600 mt-1">Obras en óleo creadas en el taller</p>
              </Link>
              <Link
                href="/contacto"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">Contacto →</span>
                <p className="text-sm text-zinc-600 mt-1">Consultas y encargos</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
