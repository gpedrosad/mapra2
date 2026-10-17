import type { Metadata } from "next";
import Link from "next/link";
import { ArtGallery } from "../components/ArtCard";
import type { Artwork } from "../components/ArtCard";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import InquiryCta from "../components/seo/InquiryCta";
import ItemListJsonLd from "../components/seo/ItemListJsonLd";
import SiteHub from "../components/seo/SiteHub";
import { listCatalogArtworks } from "@/lib/artworks";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const PATH = "/pinturas";

export const metadata: Metadata = pageMetadata({
  title: "Pinturas originales al óleo | Marcela Pedrosa",
  description:
    "Pinturas originales a la venta de Marcela Pedrosa en Concepción. Óleo sobre tela, medidas de cada obra y consulta por WhatsApp o correo.",
  path: PATH,
  imageAlt: "Pinturas originales al óleo de Marcela Pedrosa",
  keywords: [
    "pinturas originales a la venta",
    "pinturas Marcela Pedrosa",
    "óleo sobre tela",
    "obras de arte Concepción",
  ],
});

export default async function PinturasPage() {
  const works = await listCatalogArtworks();
  const items: Artwork[] = works.map((work) => ({
    id: work.id,
    imageUrl: work.imageUrl,
    info: work.info,
    title: work.alt,
    href: `/pinturas/${work.slug}`,
    width: work.pixelWidth,
    height: work.pixelHeight,
  }));

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ItemListJsonLd
        listName="Pinturas originales de Marcela Pedrosa"
        listUrl={`${SITE_URL}${PATH}`}
        items={works.map((work) => ({
          name: work.name,
          imageUrl: absoluteUrl(work.imageUrl),
          url: `${SITE_URL}/pinturas/${work.slug}`,
          description: work.info,
          artMedium: work.medium,
        }))}
      />

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
        <Breadcrumbs items={[{ name: "Pinturas", path: PATH }]} />
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0F3B2E]">
            Pinturas originales a la venta
          </h1>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-zinc-700 leading-relaxed">
            Selección de obras originales en óleo de Marcela Pedrosa, desde
            Concepción. Cada imagen abre la ficha con la técnica y, si está
            publicada, las medidas. La disponibilidad se consulta por WhatsApp o
            por correo.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            <Link href="/comprar-cuadros-al-oleo-chile" className="underline-offset-4 hover:underline text-[#0F3B2E]">
              Cuadros al óleo en Chile
            </Link>
            {" · "}
            <Link href="/comprar-pintura-concepcion" className="underline-offset-4 hover:underline text-[#0F3B2E]">
              Comprar en Concepción
            </Link>
            {" · "}
            <Link href="/cuadros-para-living" className="underline-offset-4 hover:underline text-[#0F3B2E]">
              Cuadros para living
            </Link>
            {" · "}
            <Link href="/encargos-pintura" className="underline-offset-4 hover:underline text-[#0F3B2E]">
              Encargar una pintura
            </Link>
            {" · "}
            <Link href="/oleo-sobre-tela-chile" className="underline-offset-4 hover:underline text-[#0F3B2E]">
              Óleo sobre tela
            </Link>
          </p>
        </header>

        <ArtGallery items={items} lastOnWideId="c3" />

        <InquiryCta
          heading="Consultar una pintura original"
          text="Escribe por WhatsApp o por correo e indica la obra que viste en la galería."
          whatsappText="Hola Marcela, vi las pinturas originales y quiero consultar disponibilidad."
        />
      </section>

      <SiteHub />
      <Footer email={CONTACT_EMAIL} />
    </main>
  );
}
