import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import ArtworkCards from "../components/seo/ArtworkCards";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import ConsultaSteps from "../components/seo/ConsultaSteps";
import InquiryCta from "../components/seo/InquiryCta";
import ItemListJsonLd from "../components/seo/ItemListJsonLd";
import SiteHub from "../components/seo/SiteHub";
import { listCatalogArtworks } from "@/lib/artworks";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const PATH = "/comprar-cuadros-al-oleo-chile";

export const metadata: Metadata = pageMetadata({
  title: "Comprar cuadros al óleo en Chile | Marcela Pedrosa",
  description:
    "Cuadros al óleo originales de Marcela Pedrosa, pintora en Concepción, con envío a regiones de Chile. Consulta por WhatsApp o correo.",
  path: PATH,
  imageAlt: "Cuadros al óleo de Marcela Pedrosa",
  keywords: [
    "comprar cuadros al óleo en Chile",
    "cuadros al óleo Chile",
    "pintura al óleo original",
    "Marcela Pedrosa",
  ],
});

export default async function ComprarCuadrosAlOleoChilePage() {
  const works = await listCatalogArtworks();
  const oilWorks = works.filter((work) => /[oó]leo/i.test(work.medium || work.info));

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Cuadros al óleo de Marcela Pedrosa"
        listUrl={`${SITE_URL}${PATH}`}
        items={oilWorks.map((work) => ({
          name: work.name,
          imageUrl: absoluteUrl(work.imageUrl),
          url: `${SITE_URL}/pinturas/${work.slug}`,
          description: work.info,
          artMedium: work.medium,
        }))}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <Breadcrumbs items={[{ name: "Cuadros al óleo en Chile", path: PATH }]} />
        <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink mb-6">
          Comprar cuadros al óleo en Chile
        </h1>
        <p className="text-xl text-ink-body leading-relaxed mb-8">
          Marcela Pedrosa pinta al óleo en Concepción y vende sus obras por
          consulta. Si estás en otra región, el envío se coordina aparte de la
          compra local.
        </p>

        <h2 className="text-2xl font-semibold text-ink mb-4">
          Obras originales, no reproducciones
        </h2>
        <p className="text-ink-body leading-relaxed mb-6">
          Los cuadros de esta página son las pinturas publicadas en la{" "}
          <Link href="/pinturas" className="text-brand underline underline-offset-4">
            galería
          </Link>
          . Cada ficha muestra la imagen y, cuando está en el catálogo, la técnica
          y las medidas. No hay precios en las fichas: la disponibilidad se
          confirma por WhatsApp o por{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p className="text-ink-body leading-relaxed mb-10">
          Si buscas retirar en la ciudad, usa{" "}
          <Link
            href="/comprar-pintura-concepcion"
            className="text-brand underline underline-offset-4"
          >
            comprar pintura en Concepción
          </Link>
          . Esta página es para quien quiere un cuadro al óleo con destino en
          Chile. Para elegir por motivo (
          <Link href="/retratos-al-oleo" className="text-brand underline underline-offset-4">
            retrato
          </Link>
          ,{" "}
          <Link href="/pintura-de-bosques" className="text-brand underline underline-offset-4">
            bosque
          </Link>
          ,{" "}
          <Link href="/pintura-de-ciudad" className="text-brand underline underline-offset-4">
            ciudad
          </Link>
          ) entra a{" "}
          <Link href="/comprar-arte-chile" className="text-brand underline underline-offset-4">
            comprar arte en Chile
          </Link>
          . Para elegir por el muro, entra a{" "}
          <Link href="/cuadros" className="text-brand underline underline-offset-4">
            cuadros
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold text-ink mb-4">Envío dentro de Chile</h2>
        <p className="text-ink-body leading-relaxed mb-6">
          Según los{" "}
          <Link href="/tiempos-de-entrega" className="text-brand underline underline-offset-4">
            tiempos de entrega
          </Link>
          , una obra sin enmarcado sale en 48 horas en la Región del Biobío y en
          3 a 5 días hábiles hacia otras regiones. Con enmarcado, el plazo es de
          5 a 7 días hábiles en el Biobío y de 10 días hábiles al resto del país.
        </p>

        <h2 className="text-2xl font-semibold text-ink mb-6">
          Cuadros al óleo publicados
        </h2>
        <ArtworkCards works={oilWorks} />

        <ConsultaSteps intro="Esta página es el óleo con envío dentro de Chile. Nombra la ficha. El plazo depende del marco y de la región." />

        <p className="text-ink-body leading-relaxed mb-6">
          Las cuatro telas con medida publicada están en{" "}
          <Link href="/cuadros/grandes-al-oleo" className="text-brand underline underline-offset-4">
            cuadros grandes al óleo
          </Link>
          . Cómo medir un living, en la{" "}
          <Link
            href="/guias/elegir-cuadro-para-el-living"
            className="text-brand underline underline-offset-4"
          >
            guía del living
          </Link>
          . El índice de esas lecturas está en{" "}
          <Link href="/guias" className="text-brand underline underline-offset-4">
            guías
          </Link>
          .
        </p>

        <InquiryCta
          heading="¿Quieres un cuadro al óleo?"
          text="Escribe por WhatsApp o por correo e indica la obra, o el tipo de formato que buscas."
          whatsappText="Hola Marcela, quiero consultar cuadros al óleo originales para envío dentro de Chile."
        />

        <p className="text-ink-body leading-relaxed">
          También puedes encargar otro formato en{" "}
          <Link href="/encargos-pintura" className="text-brand underline underline-offset-4">
            encargos de pintura
          </Link>{" "}
          o ver la técnica en{" "}
          <Link href="/oleo-sobre-tela-chile" className="text-brand underline underline-offset-4">
            óleo sobre tela
          </Link>
          .
        </p>
      </article>
      <SiteHub />
      <Footer email={CONTACT_EMAIL} />
    </main>
  );
}
