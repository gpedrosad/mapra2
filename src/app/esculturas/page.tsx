import Link from "next/link";
import { ArtGallery } from "../components/ArtCard";
import type { Artwork } from "../components/ArtCard";
import Footer from "../components/Footer";
import { getImagePixels } from "@/lib/cloudinary";
import { listGresArtworks } from "@/lib/managed-image-store";
import { pageMetadata } from "@/lib/metadata";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import SiteHub from "../components/seo/SiteHub";
import type { Metadata } from "next";


export const metadata: Metadata = pageMetadata({
  title: 'Cerámica gres | Marcela Pedrosa en Concepción',
  description:
    'Piezas en cerámica gres de alta temperatura de Marcela Pedrosa, artista en Concepción.',
  path: '/esculturas',
  ogImageKey: 'elefante',
  imageAlt: 'Cerámica gres de Marcela Pedrosa',
});

export default async function EsculturasPage() {
  const records = await listGresArtworks();
  const items: Artwork[] = records.map((item) => {
    const pixels = getImagePixels(item.publicId);
    return {
      id: item.id,
      imageUrl: item.imageUrl,
      info: item.info,
      title: item.alt || item.title,
      width: pixels?.width,
      height: pixels?.height,
    };
  });

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <Breadcrumbs items={[{ name: "Cerámica gres", path: "/esculturas" }]} />
          
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-[#0F3B2E] sm:text-4xl">
            Cerámica gres
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            Piezas en gres de alta temperatura. Toca o haz clic en una imagen para
            verla en grande; debajo encontrarás la descripción de cada pieza.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            <Link href="/ceramica-artistica-concepcion" className="underline-offset-4 hover:underline text-[#0F3B2E]">
              Cerámica artística en Concepción
            </Link>
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

      <SiteHub />
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
