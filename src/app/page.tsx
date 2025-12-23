// app/page.tsx  (Next.js App Router)
import ArtistHero from "./components/ArtistHero";
import MonthlyArtOfferCard from "./components/MonthlyArtOfferCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="space-y-10">
        {/* Sección oferta del mes (si la usas como ancla desde el menú) */}
        <section id="oferta" className="scroll-mt-24">
          <ArtistHero />
        </section>

        <MonthlyArtOfferCard />
      </div>
    </main>
  );
}