import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import ConsultaSteps from "../components/seo/ConsultaSteps";
import ItemListJsonLd from "../components/seo/ItemListJsonLd";
import {
  ArtworkGrid,
  ConsultaCta,
  FaqJsonLd,
  GuideBreadcrumb,
  RelatedGuides,
} from "../components/seo/GuideParts";
import { getOgImageUrl } from "@/lib/cloudinary";
import { listCatalogPaintings, paintingItemUrl, type SeoTheme } from "@/lib/seo-artworks";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

const GROUPS: Array<{ theme: SeoTheme; title: string; href: string }> = [
  { theme: "retrato", title: "Retratos", href: "/retratos-al-oleo" },
  { theme: "figura", title: "Figuras", href: "/figuras-al-oleo" },
  { theme: "animal", title: "Animales", href: "/pintura-de-animales" },
  { theme: "bosque", title: "Bosques", href: "/pintura-de-bosques" },
  { theme: "ciudad", title: "Ciudad", href: "/pintura-de-ciudad" },
  { theme: "bodegon", title: "Bodegón", href: "/bodegon-oleo" },
];

const FAQS = [
  {
    q: "¿Cómo se compra una obra de Marcela Pedrosa en Chile?",
    a: "Se consulta por WhatsApp al +56 9 5618 9912 o por correo a contacto@marcelapedrosa.com. El sitio no publica precios: la disponibilidad y el valor se confirman en esa consulta.",
  },
  {
    q: "¿Hay envío a otras regiones de Chile?",
    a: "Sí. Sin enmarcado, el plazo publicado es de 48 horas en la Región del Biobío y de 3 a 5 días hábiles a otras regiones. Con enmarcado, 5 a 7 días hábiles en el Biobío y 10 días hábiles a otras regiones.",
  },
  {
    q: "¿Las pinturas son originales?",
    a: "Las fichas de la galería son óleos sobre tela. No son reproducciones. Las medidas publicadas están en cada ficha; si una obra no trae medidas, se confirman al consultar.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Comprar arte original en Chile | Marcela Pedrosa",
  },
  description:
    "Comprar arte original en Chile, por motivo: retrato, figura, bosque, ciudad. Sin precio en la ficha. Consulta por WhatsApp.",
  keywords: [
    "comprar arte chile",
    "comprar pintura original chile",
    "óleo original a la venta",
    "cuadros originales chile",
    "arte chileno comprar",
    "marcela pedrosa obras",
  ],
  alternates: { canonical: `${BASE_URL}/comprar-arte-chile` },
  openGraph: {
    title: "Comprar arte original en Chile | Marcela Pedrosa",
    description:
      "Obras originales al óleo. La disponibilidad y el precio se consultan por WhatsApp o correo.",
    url: `${BASE_URL}/comprar-arte-chile`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Óleo de un bosque con troncos verticales y luz entre los árboles, de Marcela Pedrosa",
      },
    ],
  },
};

export default async function ComprarArteChilePage() {
  const works = await listCatalogPaintings();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Obras para consultar de Marcela Pedrosa"
        listUrl={`${BASE_URL}/comprar-arte-chile`}
        items={works.map((work) => ({
          name: work.alt,
          imageUrl: work.src,
          url: paintingItemUrl(work.publicId, `${BASE_URL}/comprar-arte-chile`),
          description: `${work.info}. ${work.detail}`,
        }))}
      />
      <FaqJsonLd faqs={FAQS} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <GuideBreadcrumb current="Comprar arte en Chile" />
          <h1 className="mb-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Comprar arte original en Chile
          </h1>
          <p className="text-xl leading-relaxed text-ink-body">
            Marcela Pedrosa vende obra original por consulta, desde su taller en Concepción
            hacia el resto de Chile. En esta página están las pinturas publicadas hoy, agrupadas
            por lo que muestran. El precio no figura: se pide por WhatsApp o por correo. Los
            factores, sin cifras, están en{" "}
            <Link href="/guias/cuanto-cuesta-un-cuadro-original-en-chile" className="text-brand underline">
              cuánto cuesta un cuadro original en Chile
            </Link>
            .
          </p>
          <p className="mt-4 leading-relaxed text-ink-body">
            Hay tres consultas distintas. Si estás en la ciudad, usa{" "}
            <Link href="/comprar-pintura-concepcion" className="text-brand underline">
              comprar pintura en Concepción
            </Link>
            . Si ya quieres un óleo y el envío dentro de Chile, la lista está en{" "}
            <Link href="/comprar-cuadros-al-oleo-chile" className="text-brand underline">
              comprar cuadros al óleo
            </Link>
            . Esta página ordena por motivo. Si partes por el muro, mira{" "}
            <Link href="/cuadros" className="text-brand underline">
              cuadros según el espacio
            </Link>
            . El{" "}
            <Link href="/guias/elegir-cuadro-para-el-living" className="text-brand underline">
              muro del sofá
            </Link>{" "}
            no es el de la mesa: el bodegón, la ciudad de colores y
            las casas de día y de noche están en{" "}
            <Link href="/cuadros/para-comedor" className="text-brand underline">
              cuadros para el comedor
            </Link>
            . Cómo medir ese paño, sin repetir el catálogo, está en{" "}
            <Link href="/guias/elegir-cuadro-para-el-comedor" className="text-brand underline">
              la guía del comedor
            </Link>
            .
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-ink">Qué hay publicado</h2>
          <p className="leading-relaxed text-ink-body">
            Hay {works.length} óleos sobre tela en la galería.
            {works.some((work) => /^\d/.test(work.info)) ? (
              <>
                {" "}
                Las fichas con medida son:{" "}
                {works
                  .filter((work) => /^\d/.test(work.info))
                  .map((work) => work.info)
                  .join("; ")}
                .
              </>
            ) : null}{" "}
            Donde la ficha dice solo «óleo sobre tela», la medida se confirma al consultar.
          </p>

          {GROUPS.map((group) => {
            const groupWorks = works.filter((work) => work.themes.includes(group.theme));
            if (groupWorks.length === 0) return null;
            return (
              <section key={group.theme} className="mt-10">
                <h3 className="text-xl font-semibold text-ink">
                  <Link href={group.href} className="underline decoration-brand/40 underline-offset-4">
                    {group.title}
                  </Link>
                  <span className="ml-2 text-base font-normal text-ink-muted">
                    ({groupWorks.length})
                  </span>
                </h3>
                <ArtworkGrid works={groupWorks} />
              </section>
            );
          })}

          <ConsultaSteps intro="Esta página ordena por motivo. Nombra la ficha, o el tema si todavía no hay una." />

          <p className="mt-6 leading-relaxed text-ink-body">
            Sin enmarcado, el plazo publicado es de 48 horas en la Región del Biobío y de 3 a 5
            días hábiles a otras regiones. Con enmarcado, 5 a 7 días hábiles en el Biobío y 10
            días hábiles a otras regiones. El detalle está en{" "}
            <Link href="/tiempos-de-entrega" className="text-brand underline">
              tiempos de entrega
            </Link>
            . El enmarcado, al ser a medida, no tiene devolución: está en la{" "}
            <Link href="/devoluciones" className="text-brand underline">
              política de devolución
            </Link>
            .
          </p>

          <p className="mt-6 leading-relaxed text-ink-body">
            Si buscas una pieza que no está en esta lista, se puede hablar de un{" "}
            <Link href="/encargos-pintura" className="text-brand underline">
              encargo
            </Link>
            . Los pasos, sin publicar un monto, están en{" "}
            <Link href="/guias/como-encargar-una-pintura" className="text-brand underline">
              cómo encargar una pintura
            </Link>
            . Para compra con foco en la ciudad, mira{" "}
            <Link href="/comprar-pintura-concepcion" className="text-brand underline">
              comprar pintura en Concepción
            </Link>
            .
          </p>

          <ConsultaCta
            title="Consulta una obra"
            text="Indica el tema o la pintura que viste. Te responden disponibilidad y precio."
            whatsappText="Hola Marcela, quiero consultar una pintura original para comprar en Chile."
          />

          <RelatedGuides
            paths={[
              "/guias",
              "/retratos-al-oleo",
              "/figuras-al-oleo",
              "/pintura-de-animales",
              "/pintura-de-bosques",
              "/pintura-de-ciudad",
              "/bodegon-oleo",
            ]}
            also={[
              {
                href: "/cuadros/para-living",
                label: "Cuadros para el living",
                note: "Las telas que se leen desde el sofá, no la guía de cómo medir",
              },
              {
                href: "/cuadros/para-comedor",
                label: "Cuadros para el comedor",
                note: "Bodegón, ciudad y el par de día y noche, vistos desde la mesa",
              },
              {
                href: "/guias/elegir-cuadro-para-el-comedor",
                label: "Cómo elegir un cuadro para el comedor",
                note: "Mide el paño. No repite el listado de telas",
              },
              {
                href: "/cuadros/grandes-al-oleo",
                label: "Cuadros grandes al óleo",
                note: "Solo las cuatro fichas que publican medida",
              },
              {
                href: "/cuadros/regalar-pintura-original",
                label: "Regalar una pintura",
                note: "Obras fáciles de nombrar, sin precio en la página",
              },
              {
                href: "/comprar-cuadros-al-oleo-chile",
                label: "Comprar cuadros al óleo",
                note: "La misma técnica, leída por el envío dentro de Chile",
              },
              {
                href: "/pinturas",
                label: "Galería de pinturas",
                note: "Todas las fichas, con la imagen y la medida publicada",
              },
              {
                href: "/contacto",
                label: "Contacto",
                note: "Formulario, además de WhatsApp y correo",
              },
            ]}
          />
        </div>
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
