import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import ArtworkCards from "../components/seo/ArtworkCards";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import InquiryCta from "../components/seo/InquiryCta";
import ItemListJsonLd from "../components/seo/ItemListJsonLd";
import SiteHub from "../components/seo/SiteHub";
import { listCatalogArtworks } from "@/lib/artworks";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const PATH = "/cuadros-para-living";

export const metadata: Metadata = pageMetadata({
  title: "Cuadros para living | Marcela Pedrosa",
  description:
    "Cuadros al óleo de Marcela Pedrosa para decorar un living. Medidas reales de cada obra y consulta por WhatsApp o correo.",
  path: PATH,
  imageAlt: "Cuadros al óleo de Marcela Pedrosa para un living",
  keywords: [
    "cuadros para living",
    "cuadros decoración",
    "óleo para living",
    "Marcela Pedrosa",
  ],
});

export default async function CuadrosParaLivingPage() {
  const works = await listCatalogArtworks();
  const measured = works.filter((work) => Boolean(work.measure));
  const unmeasured = works.filter((work) => !work.measure);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Cuadros con medidas publicadas de Marcela Pedrosa"
        listUrl={`${SITE_URL}${PATH}`}
        items={measured.map((work) => ({
          name: work.name,
          imageUrl: absoluteUrl(work.imageUrl),
          url: `${SITE_URL}/pinturas/${work.slug}`,
          description: work.info,
          artMedium: work.medium,
        }))}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <Breadcrumbs items={[{ name: "Cuadros para living", path: PATH }]} />
        <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink mb-6">
          Cuadros para living y decoración
        </h1>
        <p className="text-xl text-ink-body leading-relaxed mb-8">
          Estas son pinturas originales al óleo de Marcela Pedrosa. Las que tienen
          medidas en el catálogo se pueden comparar con el muro antes de consultar.
        </p>

        <h2 className="text-2xl font-semibold text-ink mb-4">
          Cómo usar las medidas
        </h2>
        <p className="text-ink-body leading-relaxed mb-6">
          La ficha repite el dato tal como está en la galería, por ejemplo 158×122
          o 90×120. El sitio no indica la unidad ni promete que una obra fue hecha
          para un living en particular. Si el muro es más chico o buscas otro
          formato, se puede{" "}
          <Link href="/encargos-pintura" className="text-brand underline underline-offset-4">
            encargar una pintura
          </Link>
          .
        </p>
        <p className="text-ink-body leading-relaxed mb-10">
          Para ver el conjunto, entra a{" "}
          <Link href="/pinturas" className="text-brand underline underline-offset-4">
            pinturas originales a la venta
          </Link>
          . La compra en la ciudad está en{" "}
          <Link
            href="/comprar-pintura-concepcion"
            className="text-brand underline underline-offset-4"
          >
            comprar pintura en Concepción
          </Link>{" "}
          y el envío al resto del país en{" "}
          <Link
            href="/comprar-cuadros-al-oleo-chile"
            className="text-brand underline underline-offset-4"
          >
            cuadros al óleo en Chile
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold text-ink mb-6">
          Obras con medidas publicadas
        </h2>
        <ArtworkCards works={measured} />

        {unmeasured.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold text-ink mt-12 mb-4">
              Obras sin medidas en la ficha
            </h2>
            <p className="text-ink-body leading-relaxed mb-6">
              Estas pinturas están en la galería y solo registran la técnica. Las
              medidas se preguntan al consultar.
            </p>
            <ArtworkCards works={unmeasured} />
          </>
        )}

        <InquiryCta
          heading="¿Buscas un cuadro para un muro?"
          text="Indica la obra y el espacio aproximado. La respuesta sale por WhatsApp o por correo."
          whatsappText="Hola Marcela, busco un cuadro al óleo para un living. ¿Me ayudas a ver medidas y disponibilidad?"
        />
      </article>
      <SiteHub />
      <Footer email={CONTACT_EMAIL} />
    </main>
  );
}
