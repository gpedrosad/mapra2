// app/page.tsx  (Next.js App Router)
import type { Metadata } from "next";
import ArtistHero from "./components/ArtistHero";
import AboutArtist from "./components/AboutArtist";
import MonthlyArtOfferCard from "./components/MonthlyArtOfferCard";
import Footer from "./components/Footer";
import { getManagedImageUrls } from "@/lib/managed-image-store";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

/** Solo canonical: el título/descripción SEO vienen del layout (sin cambiar la UI). */
export const metadata: Metadata = {
  alternates: {
    canonical: BASE_URL,
  },
};

export default async function Home() {
  const imageUrls = await getManagedImageUrls([
    "home.hero.avatar",
    "home.hero.banner",
    "home.offer.image",
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      {/* Hero Section - Full bleed, sin padding superior para impacto visual */}
      <section id="inicio" className="scroll-mt-0">
        <ArtistHero
          avatarUrl={imageUrls["home.hero.avatar"]}
          bannerUrl={imageUrls["home.hero.banner"]}
        />
      </section>

      {/* Main Content Area */}
      <main className="flex-1">
        <section className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
          <AboutArtist />
        </section>

        {/* Oferta del Mes - Sección destacada con espaciado generoso */}
        <section id="ofertames" className="scroll-mt-24 pb-16 sm:pb-20 lg:pb-24">
          <MonthlyArtOfferCard imageUrl={imageUrls["home.offer.image"]} />
        </section>
      </main>

      {/* Footer con separación visual clara */}
      <Footer email="contacto@marcelapedrosa.com" />
    </div>
  );
}
