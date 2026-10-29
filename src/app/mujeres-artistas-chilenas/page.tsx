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
import { FaqJsonLd } from "../components/seo/GuideParts";
import SiteHub from "../components/seo/SiteHub";


const MUJERES_FAQS = [
  {
    q: "¿Esta página es el listado de pintoras chilenas?",
    a: "No. El listado de pintoras famosas y actuales está en pintoras chilenas. Aquí el tema es más ancho: escultura, grabado, cerámica y arte visual.",
  },
  {
    q: "¿Quién fue Lily Garafulic?",
    a: "Lily Garafulic Yancovic fue escultora. Nació en Antofagasta el 14 de mayo de 1914 y murió en Santiago el 15 de marzo de 2012. Recibió el Premio Nacional de Artes Plásticas en 1995 y dirigió el Museo Nacional de Bellas Artes entre 1973 y 1977.",
  },
  {
    q: "¿Qué mujer pintora chilena actual se consulta en este sitio?",
    a: "De quien pinta hoy, este sitio documenta a Marcela Pedrosa en Concepción. El recorrido de famosas y actuales está en pintoras chilenas. Sus óleos se consultan por WhatsApp al +56 9 5618 9912 o por correo a contacto@marcelapedrosa.com. La ficha no publica el precio.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: 'Mujeres artistas chilenas | escultura y gres',
  description:
    'Mujeres artistas chilenas: escultura, grabado y cerámica. Lily Garafulic, Premio Nacional 1995, y Roser Bru en el Taller 99.',
  path: '/mujeres-artistas-chilenas',
  ogImageKey: 'gente',
  imageAlt: 'Obra de Marcela Pedrosa, mujer artista chilena',
  keywords: [
    "mujeres artistas chilenas",
    "artistas mujeres chile",
    "arte femenino chile",
    "artistas visuales mujeres chile",
    "lily garafulic",
    "marcela pedrosa",
    "escultura chile",
    "arte femenino concepción",
    "mujeres arte biobío",
  ],
});

export default async function MujeresArtistasChilenasPage() {
  const heroImageUrl =
    (await getManagedImageUrl("pages.mujeres.hero")) ||
    getSiteImageUrl("gente");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <FaqJsonLd faqs={MUJERES_FAQS} />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={[{ name: "Mujeres artistas chilenas", path: "/mujeres-artistas-chilenas" }]} />
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6">
              Mujeres artistas chilenas
            </h1>
            <p className="text-xl sm:text-2xl text-ink-body mb-8 leading-relaxed">
              Escultura, grabado y cerámica, con fuente
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
              Mujeres artistas, no solo pintoras
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              Las <strong>mujeres artistas chilenas</strong> de esta página se
              leen por el oficio: escultura, grabado y cerámica, solo con datos
              que el sitio ya publica en un perfil.{" "}
              <Link href="/artistas-chilenas/lily-garafulic" className="text-brand underline">
                Lily Garafulic
              </Link>{" "}
              es la escultora. El grabado está en Roser Bru. La cerámica en
              gres es la de Marcela, en{" "}
              <Link href="/ceramica-artistica-concepcion" className="text-brand underline">
                cerámica artística en Concepción
              </Link>
              . Pintoras famosas y actuales siguen en{" "}
              <Link href="/pintoras-chilenas" className="text-brand underline">
                pintoras chilenas
              </Link>
              .
            </p>

            <h2
              id="escultura"
              className="text-3xl font-semibold text-ink mt-10 mb-6"
            >
              Escultura
            </h2>

            <p id="lily-garafulic" className="text-ink-body leading-relaxed mb-6">
              <Link href="/artistas-chilenas/lily-garafulic" className="text-brand underline">
                Lily Garafulic
              </Link>{" "}
              Yancovic es escultora, no pintora de caballete. Nació en
              Antofagasta el 14 de mayo de 1914 y murió en Santiago el 15 de
              marzo de 2012. El Museo Nacional de Bellas Artes la sitúa, junto a
              Rebeca Matte y Marta Colvin, entre las tres escultoras más
              importantes del país. Recibió el Premio Nacional de Artes
              Plásticas en 1995 y dirigió ese museo entre 1973 y 1977. La
              Facultad de Artes la señala como la primera mujer en el cargo.
              Estudió escultura con Lorenzo Domínguez, conoció la obra de
              Constantin Brancusi, trabajó el mosaico en Rávena y el grabado en
              el Atelier 17 de William Hayter.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              En el mismo mapa, con perfil propio,{" "}
              <Link href="/artistas-chilenas/magdalena-mira" className="text-brand underline">
                Magdalena Mira
              </Link>{" "}
              es pintora y escultora (1859-1930), y{" "}
              <Link href="/artistas-chilenas/matilde-perez" className="text-brand underline">
                Matilde Pérez
              </Link>{" "}
              es pintora, escultora y artista cinética (1916-2014). Sus biografías
              de pintura no se repiten aquí: están en{" "}
              <Link href="/pintoras-chilenas" className="text-brand underline">
                pintoras chilenas
              </Link>
              .
            </p>

            <h2
              id="grabado"
              className="text-3xl font-semibold text-ink mt-10 mb-6"
            >
              Grabado
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              <Link href="/artistas-chilenas/roser-bru" className="text-brand underline">
                Roser Bru
              </Link>{" "}
              (1923-2021) es pintora y grabadora. Nació en Barcelona, llegó a
              Chile en el Winnipeg y se especializó en grabado en el Taller 99.
              Recibió el Premio Nacional de Artes Plásticas en 2015.{" "}
              <Link href="/artistas-chilenas/lily-garafulic" className="text-brand underline">
                Lily Garafulic
              </Link>
              , además de la escultura, estudió grabado en Nueva York.
              El listado de quien pinta, sin el oficio del grabado, sigue en{" "}
              <Link href="/pintoras-chilenas" className="text-brand underline">
                pintoras chilenas
              </Link>
              .
            </p>

            <h2
              id="ceramica"
              className="text-3xl font-semibold text-ink mt-10 mb-6"
            >
              Cerámica
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              En Concepción, Marcela Pedrosa trabaja cerámica artística en gres
              además del óleo. Las piezas del taller se consultan en{" "}
              <Link href="/ceramica-artistica-concepcion" className="text-brand underline">
                cerámica artística en Concepción
              </Link>{" "}
              y en{" "}
              <Link href="/esculturas" className="text-brand underline">
                cerámica gres
              </Link>
              . El sitio no tiene fichas de otras ceramistas, así que aquí no
              se agregan nombres.
            </p>

            <h2 className="text-3xl font-semibold text-ink mt-10 mb-6">
              Dónde sigue la pintura
            </h2>

            <p className="text-ink-body leading-relaxed mb-6">
              <Link href="/artistas-chilenas/celia-castro" className="text-brand underline">
                Celia Castro
              </Link>
              ,{" "}
              <Link href="/artistas-chilenas/magdalena-mira" className="text-brand underline">
                Magdalena Mira
              </Link>
              ,{" "}
              <Link href="/artistas-chilenas/aurora-mira" className="text-brand underline">
                Aurora Mira
              </Link>
              ,{" "}
              <Link href="/artistas-chilenas/henriette-petit" className="text-brand underline">
                Henriette Petit
              </Link>
              ,{" "}
              <Link href="/artistas-chilenas/gracia-barrios" className="text-brand underline">
                Gracia Barrios
              </Link>
              ,{" "}
              <Link href="/artistas-chilenas/roser-bru" className="text-brand underline">
                Roser Bru
              </Link>
              ,{" "}
              <Link href="/artistas-chilenas/carmen-aldunate" className="text-brand underline">
                Carmen Aldunate
              </Link>{" "}
              y Pedrosa, leídas como pintoras, están en{" "}
              <Link href="/pintoras-chilenas#pintoras-chilenas-famosas" className="text-brand underline">
                pintoras chilenas famosas
              </Link>{" "}
              y en{" "}
              <Link href="/pintoras-chilenas#pintoras-chilenas-actuales" className="text-brand underline">
                pintoras chilenas actuales
              </Link>
              . Los perfiles, uno por persona, viven en{" "}
              <Link href="/artistas-chilenas" className="text-brand underline">
                artistas chilenas
              </Link>
              . Barrios, Bru,{" "}
              <Link href="/artistas-chilenas/matilde-perez" className="text-brand underline">
                Matilde Pérez
              </Link>{" "}
              y Aldunate, leídas juntas, están en{" "}
              <Link
                href="/artistas-chilenas/pintoras-chilenas-contemporaneas"
                className="text-brand underline"
              >
                pintoras chilenas contemporáneas
              </Link>
              .{" "}
              <Link href="/artistas-chilenas/camilo-mori" className="text-brand underline">
                Camilo Mori
              </Link>{" "}
              y{" "}
              <Link href="/artistas-chilenas/totoy-zamudio" className="text-brand underline">
                Totoy Zamudio
              </Link>{" "}
              tienen perfil y son pintores: no entran en este mapa.
            </p>

            <p className="text-ink-body leading-relaxed mb-6">
              Para una tela de Marcela, mira{" "}
              <Link href="/cuadros" className="text-brand underline">cuadros</Link>,{" "}
              <Link href="/comprar-arte-chile" className="text-brand underline">
                comprar arte en Chile
              </Link>{" "}
              y las{" "}
              <Link href="/guias" className="text-brand underline">guías</Link>.
            </p>
            <CatalogFichaLinks />
            <DescriptiveFichaLinks lead="Las telas de Marcela, aparte del listado de pintoras, están en" />

            <h3 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Marcela Pedrosa: Artista Visual de Concepción
            </h3>

            <p className="text-ink-body leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una pintora y ceramista de Concepción, Región del 
              Biobío, especializada en{" "}
              <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
                óleo sobre tela
              </Link>{" "}
              e{" "}
              <Link
                href="/impresionismo-figurativo-chile"
                className="text-brand underline"
              >
                impresionismo figurativo
              </Link>
              . Su trabajo se inscribe en la tradición de mujeres artistas 
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

            <h2 className="text-2xl font-semibold text-ink mt-10 mb-4">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4 my-8">
              {MUJERES_FAQS.map((faq) => (
                <div key={faq.q} className="bg-white border border-line rounded-xl p-6">
                  <h3 className="font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-ink-body text-sm">
                    {faq.q.startsWith("¿Esta") ? (
                      <>
                        No. El listado de pintoras famosas y actuales está en{" "}
                        <Link href="/pintoras-chilenas" className="text-brand underline">
                          pintoras chilenas
                        </Link>
                        . Aquí el tema es más ancho: escultura, grabado, cerámica
                        y arte visual.
                      </>
                    ) : faq.q.startsWith("¿Qué mujer") ? (
                      <>
                        De quien pinta hoy, este sitio documenta a Marcela
                        Pedrosa en Concepción. El recorrido de famosas y
                        actuales está en{" "}
                        <Link
                          href="/pintoras-chilenas#pintoras-chilenas-actuales"
                          className="text-brand underline"
                        >
                          pintoras chilenas
                        </Link>
                        . Sus óleos se consultan por WhatsApp al +56 9 5618 9912
                        o por correo a contacto@marcelapedrosa.com. La ficha no
                        publica el precio.
                      </>
                    ) : (
                      faq.a
                    )}
                  </p>
                </div>
              ))}
            </div>

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
                href="/pintoras-chilenas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Pintoras chilenas →</span>
                <p className="text-sm text-ink-muted mt-1">Famosas, actuales y la pintura hecha por mujeres</p>
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

      <SiteHub />
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
