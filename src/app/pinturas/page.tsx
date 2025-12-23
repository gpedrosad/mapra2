import { ArtGallery } from "../components/ArtCard";
import type { Artwork } from "../components/ArtCard";   
import Footer from "../components/Footer";

export default function PinturasPage() {
    const items: Artwork[] = [
        { id: "c1", imageUrl: "/bosque.jpeg", info: "158x122 óleo sobre tela" },
        { id: "c2", imageUrl: "/gente.jpeg", info: "110x110 óleo sobre tela" },
        { id: "c3", imageUrl: "/elefante.jpeg", info: "90x120 óleo sobre tela" },
        { id: "c4", imageUrl: "/mujer.jpeg", info: "100x130 óleo sobre tela" },
        { id: "c5", imageUrl: "/c5.jpeg", info: "óleo sobre tela" },
        { id: "c6", imageUrl: "/c6.jpeg", info: "óleo sobre tela" },
        { id: "c7", imageUrl: "/c7.jpeg", info: "óleo sobre tela" },
        { id: "c8", imageUrl: "/c8.jpeg", info: "óleo sobre tela" },
        { id: "c9", imageUrl: "/c9.jpeg", info: "óleo sobre tela" },
        { id: "c10", imageUrl: "/c10.jpeg", info: "óleo sobre tela" },
        { id: "c11", imageUrl: "/c11.jpeg", info: "óleo sobre tela" },
        { id: "c12", imageUrl: "/c12.jpeg", info: "óleo sobre tela" },
        { id: "c13", imageUrl: "/c13.jpeg", info: "óleo sobre tela" },
        { id: "c14", imageUrl: "/c14.jpeg", info: "óleo sobre tela" },
        { id: "c15", imageUrl: "/c15.jpeg", info: "óleo sobre tela" },
    ];
    return (
        <main className="min-h-screen bg-transparent">
            <ArtGallery items={items} />
            <Footer email="contacto@marcelapedrosa.com" />
        </main>
    );
}