import type { Metadata } from "next";
import Link from "next/link";
import { ArtGallery } from "../components/ArtCard";
import type { Artwork } from "../components/ArtCard";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import ItemListJsonLd from "../components/seo/ItemListJsonLd";
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
            Selección de obras originales en óleo. Pintura y arte de Marcela Pedrosa
            desde Concepción. Haz clic (o toca) una imagen para verla con calma y
            revisa las medidas debajo de cada pieza.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            <Link
              href="/galeria-arte-concepcion"
              className="underline-offset-4 hover:underline text-[#0F3B2E]"
            >
              Galería de arte
            </Link>
            {" · "}
            <Link
              href="/comprar-pintura-concepcion"
              className="underline-offset-4 hover:underline text-[#0F3B2E]"
            >
              Comprar pintura
            </Link>
            {" · "}
            <Link
              href="/encargos-pintura"
              className="underline-offset-4 hover:underline text-[#0F3B2E]"
            >
              Encargos
            </Link>
            {" · "}
            <Link
              href="/marcela-pedrosa"
              className="underline-offset-4 hover:underline text-[#0F3B2E]"
            >
              Marcela Pedrosa
            </Link>
          </p>
        </header>

        <ArtGallery items={items} lastOnWideId="c3" />
      </section>

      <Footer email={CONTACT_EMAIL} />
    </main>
  );
}
