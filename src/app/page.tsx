// app/page.tsx  (Next.js App Router)
import type { Metadata } from "next";
import ArtistHero from "./components/ArtistHero";
import AboutArtist from "./components/AboutArtist";
import MonthlyArtOfferCard from "./components/MonthlyArtOfferCard";
import Footer from "./components/Footer";
import ProductJsonLd from "./components/seo/ProductJsonLd";
import { getManagedImageUrls } from "@/lib/managed-image-store";
import { getSiteImageUrl } from "@/lib/cloudinary";
import {
  TITLE,
  INFO,
  CURRENCY,
  PRICE_LIST,
  PRICE_SALE,
} from "@/lib/monthly-offer";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, INSTAGRAM_URL, SITE_URL } from "@/lib/site";

/** Solo metadatos: la portada no cambia de contenido visible. */
export const metadata: Metadata = pageMetadata({
  title: "Marcela Pedrosa | Pintura y Arte en Concepción",
  description:
    "Marcela Pedrosa, pintora en Concepción, Chile. Óleo sobre tela, arte contemporáneo e impresionismo figurativo. Obras originales desde el Biobío.",
  path: "/",
  imageAlt: "Pintura de Marcela Pedrosa, artista en Concepción",
});

export default async function Home() {
  const imageUrls = await getManagedImageUrls([
    "home.hero.avatar",
    "home.hero.banner",
    "home.offer.image",
  ]);

  const offerImage =
    imageUrls["home.offer.image"]?.trim() || getSiteImageUrl("elefante");
  const offerPrice =
    typeof PRICE_SALE === "number" && PRICE_SALE < PRICE_LIST
      ? PRICE_SALE
      : PRICE_LIST;

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <ProductJsonLd
        name={TITLE}
        description={INFO}
        imageUrl={absoluteUrl(offerImage)}
        price={offerPrice}
        priceCurrency={CURRENCY}
        url={`${SITE_URL}/#ofertames`}
        availability="https://schema.org/InStock"
      />

      {/* Hero Section - Full bleed, sin padding superior para impacto visual */}
      <section id="inicio" className="scroll-mt-0">
        <ArtistHero
          avatarUrl={imageUrls["home.hero.avatar"]}
          bannerUrl={imageUrls["home.hero.banner"]}
          instagramUrl={INSTAGRAM_URL}
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
      <Footer
        email="contacto@marcelapedrosa.com"
        instagramUrl={INSTAGRAM_URL}
      />
    </div>
  );
}
