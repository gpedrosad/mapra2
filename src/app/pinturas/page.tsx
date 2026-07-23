import type { Metadata } from "next";
import { ArtGallery } from "../components/ArtCard";
import type { Artwork } from "../components/ArtCard";
import Footer from "../components/Footer";
import { listGalleryArtworks } from "@/lib/managed-image-store";
import { getOgImageUrl } from "@/lib/cloudinary";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  title: {
    absolute: "Pinturas | Marcela Pedrosa — Arte y Óleo en Concepción",
  },
  description:
    "Galería de pinturas originales de Marcela Pedrosa. Óleo sobre tela e impresionismo figurativo desde Concepción, Chile. Obras de arte disponibles.",
  keywords: [
    "pinturas Marcela Pedrosa",
    "pintura Concepción",
    "óleo sobre tela",
    "obras de arte Concepción",
    "galería pintura Chile",
    "arte Concepción",
  ],
  openGraph: {
    title: "Pinturas | Marcela Pedrosa — Arte en Concepción",
    description:
      "Obras originales en óleo sobre tela. Pintura y arte contemporáneo desde Concepción.",
    url: `${BASE_URL}/pinturas`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Pinturas de Marcela Pedrosa en Concepción",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/pinturas`,
  },
};

export default async function PinturasPage() {
  const items: Artwork[] = await listGalleryArtworks();
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0F3B2E]">
            Pinturas
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

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
