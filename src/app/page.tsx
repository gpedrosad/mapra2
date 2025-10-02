// app/page.tsx  (Next.js App Router)
import ArtistHero from "./components/ArtistHero";
import { ArtGallery } from "./components/ArtCard"; // named export
import type { Artwork } from "./components/ArtCard";
import Footer from "./components/Footer";
import Prensa from "./components/Prensa";
import ContactForm from "./components/ContactForm";
import HamburgerMenu from "./components/HamburgerMenu";

export default function Home() {
  // Data ajustada: sin títulos ni precios, con info (medidas + técnica)
  const items: Artwork[] = [
    { id: "c1", imageUrl: "/bosque.jpeg", info: "158x122 óleo sobre tela" },
    { id: "c2", imageUrl: "/gente.jpeg", info: "110x110 óleo sobre tela" },
    { id: "c3", imageUrl: "/elefante.jpeg", info: "90x120 óleo sobre tela" },
    { id: "c4", imageUrl: "/mujer.jpeg", info: "100x130 óleo sobre tela" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <HamburgerMenu />
      {/* Menú fijo */}

      {/* Espaciado para que el contenido no quede oculto tras el header fijo */}
      <div id="top" className="h-16" aria-hidden />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 space-y-10">
        {/* Sección oferta del mes (si la usas como ancla desde el menú) */}
        <section id="oferta" className="scroll-mt-24">
          <ArtistHero />
        </section>

        {/* Galería de Pinturas */}
        <section id="pinturas" className="scroll-mt-24">
          <ArtGallery items={items} />
        </section>

        {/* Prensa */}
        <section id="prensa" className="scroll-mt-24">
          <Prensa />
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24">
          <ContactForm />
        </section>
      </div>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}