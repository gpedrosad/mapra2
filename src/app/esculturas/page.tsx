import { ArtGallery } from "../components/ArtCard";
import type { Artwork } from "../components/ArtCard";
import Footer from "../components/Footer";
import { listGresArtworks } from "@/lib/managed-image-store";

const BASE_URL = "https://www.marcelapedrosa.com";

export const metadata = {
  title: "Cerámica Gres | Marcela Pedrosa",
  description:
    "Piezas en cerámica gres de alta temperatura. Marcela Pedrosa, artista en Concepción.",
  openGraph: {
    title: "Cerámica Gres | Marcela Pedrosa",
    description:
      "Selección de piezas en gres. Objetos decorativos y escultóricos desde Concepción, Chile.",
    url: `${BASE_URL}/esculturas`,
    type: "website" as const,
  },
  alternates: {
    canonical: `${BASE_URL}/esculturas`,
  },
};

export default async function EsculturasPage() {
  const items: Artwork[] = await listGresArtworks();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-[#0F3B2E] sm:text-4xl">
            Cerámica gres
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            Piezas en gres de alta temperatura. Toca o haz clic en una imagen para
            verla en grande; debajo encontrarás la descripción de cada pieza.
          </p>
        </header>

        {items.length > 0 ? (
          <ArtGallery items={items} />
        ) : (
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
            Aún no hay piezas publicadas en esta sección. Cuando agregues imágenes
            desde el panel de administración, aparecerán aquí.
          </p>
        )}
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
