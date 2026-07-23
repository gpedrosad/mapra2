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
    absolute: "Cerámica Artística Concepción | Marcela Pedrosa - Cerámica en Gres",
  },
  description:
    "Cerámica artística en Concepción. Marcela Pedrosa, ceramista especializada en gres de alta temperatura. Piezas únicas decorativas y escultóricas desde la Región del Biobío.",
  keywords: [
    "cerámica artística concepción",
    "cerámica concepción",
    "ceramista concepción",
    "gres concepción",
    "cerámica biobío",
    "cerámica artesanal concepción",
    "taller cerámica concepción",
    "marcela pedrosa cerámica",
    "cerámica decorativa concepción",
    "cerámica contemporánea chile",
  ],
  openGraph: {
    title: "Cerámica Artística en Concepción - Marcela Pedrosa",
    description:
      "Cerámica artística en gres de alta temperatura. Piezas únicas decorativas y escultóricas desde Concepción, Chile.",
    url: `${BASE_URL}/ceramica-artistica-concepcion`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("elefante", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Cerámica artística de Marcela Pedrosa, Concepción",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/ceramica-artistica-concepcion`,
  },
};

export default async function CeramicaArtisticaConcepcionPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.ceramica.hero")) ||
    getSiteImageUrl("elefante");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Cerámica Artística en Concepción
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Piezas Únicas en Gres de Alta Temperatura
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-12">
            <Image
              src={heroImageUrl}
              alt="Cerámica artística de Marcela Pedrosa en Concepción"
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
              Cerámica Artística: Arte y Funcionalidad
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              La <strong>cerámica artística</strong> es una de las expresiones creativas más antiguas 
              de la humanidad, combinando técnica, creatividad y un profundo conocimiento de materiales. 
              En <strong>Concepción</strong>, artistas como <strong>Marcela Pedrosa</strong> mantienen 
              viva esta tradición, creando piezas únicas que fusionan estética contemporánea con 
              técnicas milenarias.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              La <strong>cerámica en gres</strong>, especialidad de Marcela, se caracteriza por su 
              resistencia, durabilidad y las posibilidades expresivas que ofrece tanto en forma como 
              en acabados superficiales.
            </p>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              ¿Qué es la Cerámica en Gres?
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              El <strong>gres</strong> es un tipo de cerámica cocida a alta temperatura (entre 1200°C 
              y 1300°C) que resulta en un material extremadamente resistente, impermeable y duradero. 
              Se distingue de otras cerámicas por su vitrificación parcial durante la cocción.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-ink mb-4">Características del Gres:</h4>
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Alta resistencia:</strong> Soporta golpes y cambios de temperatura</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Impermeabilidad:</strong> No absorbe agua, ideal para uso funcional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Durabilidad:</strong> Piezas que pueden durar siglos en perfecto estado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Versatilidad estética:</strong> Admite diversos acabados, texturas y esmaltes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Sonoridad:</strong> Al golpearlo suena metálico, señal de buena cocción</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Proceso de Creación de Cerámica Artística
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              La creación de una pieza de <strong>cerámica artística en gres</strong> es un proceso 
              complejo que requiere conocimiento técnico, paciencia y sensibilidad artística:
            </p>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">1. Diseño y Concepto</h4>
                <p className="text-ink-body text-sm">
                  Planificación de la forma, tamaño, función (decorativa o utilitaria) y acabados. 
                  Bocetos y visualización de la pieza final.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">2. Preparación de la Pasta</h4>
                <p className="text-ink-body text-sm">
                  Amasado del gres para eliminar burbujas de aire que podrían causar grietas o 
                  explosiones durante la cocción. La pasta debe tener consistencia homogénea.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">3. Modelado</h4>
                <p className="text-ink-body text-sm">
                  Construcción de la pieza mediante técnicas como torno, modelado a mano, placas 
                  o churros. Cada técnica ofrece posibilidades expresivas diferentes.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">4. Secado</h4>
                <p className="text-ink-body text-sm">
                  Secado lento y controlado para evitar grietas. El tiempo varía según el grosor 
                  de la pieza, pudiendo tomar desde días hasta semanas.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">5. Primera Cocción (Bizcocho)</h4>
                <p className="text-ink-body text-sm">
                  Cocción a temperatura media (900-1000°C) que endurece la pieza y la prepara 
                  para recibir esmaltes. La pieza se vuelve porosa y resistente.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">6. Esmaltado</h4>
                <p className="text-ink-body text-sm">
                  Aplicación de esmaltes cerámicos que aportarán color, brillo y textura. 
                  Técnicas variadas: inmersión, pincelado, pulverizado, chorreado.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">7. Segunda Cocción (Gres)</h4>
                <p className="text-ink-body text-sm">
                  Cocción a alta temperatura (1200-1300°C) que vitrifica el gres y funde los 
                  esmaltes. Es aquí donde la pieza adquiere sus propiedades finales. El proceso 
                  dura entre 12-24 horas.
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <h4 className="font-semibold text-ink mb-2">8. Acabados Finales</h4>
                <p className="text-ink-body text-sm">
                  Limpieza de la base, pulido si es necesario, y verificación de calidad. 
                  Algunas piezas pueden recibir acabados adicionales como patinas o lustres.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Cerámica Artística en Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Concepción</strong> y la <strong>Región del Biobío</strong> cuentan con una 
              tradición cerámica que se remonta a las culturas precolombinas. Hoy, ceramistas 
              contemporáneos como Marcela Pedrosa continúan esta herencia, adaptándola a 
              sensibilidades y técnicas actuales.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              La <strong>cerámica artística en Concepción</strong> se caracteriza por la fusión 
              de influencias: la tradición alfarera mapuche, técnicas europeas introducidas durante 
              la colonia, y enfoques contemporáneos del arte cerámico internacional.
            </p>

            <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Cerámica Artística de Marcela Pedrosa
              </h3>
              <p className="mb-6 text-white/90">
                Piezas únicas en gres, creadas en Concepción
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, me interesa conocer tu trabajo en cerámica artística."
                  label="Consultar Disponibilidad"
                  size="lg"
                />
                <Link
                  href="/esculturas"
                  className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
                >
                  Ver Cerámica
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Tipos de Piezas Cerámicas
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              La <strong>cerámica artística</strong> abarca una amplia gama de objetos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🏺 Piezas Decorativas</h4>
                <p className="text-ink-body text-sm">
                  Esculturas, jarrones, objetos ornamentales. Creadas exclusivamente con propósito 
                  estético. Cada pieza es única y firmada por la artista.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">☕ Cerámica Utilitaria</h4>
                <p className="text-ink-body text-sm">
                  Tazas, platos, cuencos, teteras. Objetos funcionales que combinan utilidad 
                  con belleza. El gres es ideal por su resistencia y seguridad alimentaria.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🗿 Escultura Cerámica</h4>
                <p className="text-ink-body text-sm">
                  Obras tridimensionales de carácter artístico. Exploración de forma, volumen, 
                  textura y color. Desde pequeño hasta gran formato.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h4 className="font-semibold text-ink mb-3">🎨 Murales y Paneles</h4>
                <p className="text-ink-body text-sm">
                  Composiciones cerámicas para paredes. Integración de la cerámica en arquitectura. 
                  Resistentes a intemperie, ideales para exteriores.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Marcela Pedrosa: Ceramista de Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Además de su trabajo como pintora, <strong>Marcela Pedrosa</strong> desarrolla una 
              línea de <strong>cerámica artística en gres</strong> que complementa su obra pictórica. 
              Sus piezas cerámicas comparten la sensibilidad estética de sus pinturas: formas 
              orgánicas, texturas expresivas y una paleta cromática armoniosa.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-ink mb-4">Características de su cerámica:</h4>
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Piezas únicas:</strong> Cada objeto es modelado individualmente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Gres de alta temperatura:</strong> Garantía de durabilidad y calidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Acabados artesanales:</strong> Esmaltes aplicados a mano con técnicas variadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span><strong>Coherencia estética:</strong> Diálogo con su obra pictórica</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Ventajas de la Cerámica en Gres
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-brand">Durabilidad excepcional:</strong>
                  <p className="text-ink-body text-sm mt-1">Piezas que pueden durar generaciones</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-brand">Seguridad alimentaria:</strong>
                  <p className="text-ink-body text-sm mt-1">Apto para contacto con alimentos</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-brand">Fácil mantenimiento:</strong>
                  <p className="text-ink-body text-sm mt-1">Limpieza simple, resistente a manchas</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-line rounded-lg">
                <span className="text-brand mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-brand">Valor artístico:</strong>
                  <p className="text-ink-body text-sm mt-1">Piezas únicas firmadas por la artista</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Cuidado de la Cerámica Artística
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Aunque el <strong>gres</strong> es extremadamente resistente, algunas recomendaciones 
              ayudan a mantener las piezas en perfecto estado:
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-ink-body">
                <li className="flex items-start">
                  <span className="text-brand mr-2">→</span>
                  <span>Lavar con agua tibia y jabón suave (si es pieza utilitaria)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">→</span>
                  <span>Evitar golpes bruscos contra superficies duras</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">→</span>
                  <span>Las piezas decorativas pueden limpiarse con paño seco o ligeramente húmedo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">→</span>
                  <span>Apto para lavavajillas (piezas utilitarias), aunque lavado a mano prolonga vida útil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">→</span>
                  <span>Resistente a microondas y horno (verificar con la ceramista)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Cerámica como Inversión y Regalo
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              La <strong>cerámica artística</strong> es una excelente opción tanto para coleccionistas 
              como para quienes buscan regalos significativos:
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3">→</span>
                <div>
                  <strong className="text-brand">Piezas únicas:</strong>
                  <span className="text-ink-body"> Cada objeto es irrepetible, con valor de obra original</span>
                </div>
              </div>
              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3">→</span>
                <div>
                  <strong className="text-brand">Durabilidad:</strong>
                  <span className="text-ink-body"> Objetos que se transmiten de generación en generación</span>
                </div>
              </div>
              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3">→</span>
                <div>
                  <strong className="text-brand">Versatilidad:</strong>
                  <span className="text-ink-body"> Desde objetos decorativos hasta utilitarios de uso diario</span>
                </div>
              </div>
              <div className="flex items-start p-4 bg-surface rounded-lg">
                <span className="text-brand mr-3">→</span>
                <div>
                  <strong className="text-brand">Apoyo al arte local:</strong>
                  <span className="text-ink-body"> Contribución directa a artistas de la región</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Talleres de Cerámica en Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              Concepción cuenta con diversos talleres de cerámica, desde espacios educativos hasta 
              talleres de producción artística profesional. El <strong>taller de Marcela Pedrosa</strong> 
              se enfoca en la creación de piezas artísticas únicas, complementando su trabajo pictórico 
              con objetos tridimensionales.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              La <strong>cerámica artística en Concepción</strong> forma parte de la identidad 
              cultural de la región, conectando con tradiciones ancestrales mientras explora 
              lenguajes contemporáneos.
            </p>
          </article>

          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="text-xl font-semibold text-ink mb-4">
              Explora más
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/esculturas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Cerámica Disponible →</span>
                <p className="text-sm text-ink-muted mt-1">Piezas en gres artístico</p>
              </Link>
              <Link
                href="/pinturas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Pinturas →</span>
                <p className="text-sm text-ink-muted mt-1">Obras al óleo sobre tela</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
