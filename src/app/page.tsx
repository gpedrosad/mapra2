// app/page.tsx  (Next.js App Router)
import ArtistHero from "./components/ArtistHero";
import { ArtGallery } from "./components/ArtCard"; // named export
import type { Artwork } from "./components/ArtCard"; // <- importamos el tipo
import Footer from "./components/Footer";
import Prensa from "./components/Prensa";
import ContactForm from "./components/ContactForm";

export default function Home() {
  // Data ajustada: sin títulos ni precios, con info (medidas + técnica)
  const items: Artwork[] = [
    {
      id: "c1",
      imageUrl: "/bosque.jpeg",
      info: "158x122 óleo sobre tela", // bosque
    },
    {
      id: "c2",
      imageUrl: "/gente.jpeg",
      info: "110x110 óleo sobre tela", // gente
    },
    {
      id: "c3",
      imageUrl: "/elefante.jpeg",
      info: "90x120 óleo sobre tela", // elefante
    },
    {
      id: "c4",
      imageUrl: "/mujer.jpeg",
      info: "100x130 óleo sobre tela", // mujer
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 space-y-10">
        <ArtistHero />
        <ArtGallery items={items} />
        <Prensa />
        <ContactForm />
      </div>
      <div>
        <Footer email="contacto@marcelapedrosa.com" />
      </div>
    </main>
  );
}