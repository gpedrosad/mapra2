// app/page.tsx  (Next.js App Router)
import ArtistHero from "./components/ArtistHero";
import MonthlyArtOfferCard from "./components/MonthlyArtOfferCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      {/* Hero Section - Full bleed, sin padding superior para impacto visual */}
      <section id="inicio" className="scroll-mt-0">
        <ArtistHero />
      </section>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Oferta del Mes - Sección destacada con espaciado generoso */}
        <section
          id="ofertames"
          className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
        >
          <MonthlyArtOfferCard />
        </section>
      </main>

      {/* Footer con separación visual clara */}
      <Footer email="contacto@marcelapedrosa.com" />
    </div>
  );
}