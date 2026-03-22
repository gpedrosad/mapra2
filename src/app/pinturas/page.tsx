import { ArtGallery } from "../components/ArtCard";
import type { Artwork } from "../components/ArtCard";   
import Footer from "../components/Footer";
import { listGalleryArtworks } from "@/lib/managed-image-store";

export default async function PinturasPage() {
    const items: Artwork[] = await listGalleryArtworks();
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
                {/* Encabezado */}
                <header className="mb-8 sm:mb-10">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0F3B2E]">
                        Pinturas
                    </h1>
                    <p className="mt-2 max-w-2xl text-sm sm:text-base text-zinc-700 leading-relaxed">
                        Selección de obras originales. Haz clic (o toca) una imagen para verla con calma y revisa las medidas debajo de cada pieza.
                    </p>
                </header>

                {/* Galería */}
                <ArtGallery items={items} lastOnWideId="c3" />
            </section>

            <Footer email="contacto@marcelapedrosa.com" />
        </main>
    );
}
