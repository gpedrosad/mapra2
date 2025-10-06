    import HamburgerMenu from "../components/HamburgerMenu";
import { ArtGallery } from "../components/ArtCard";
import type { Artwork } from "../components/ArtCard";   
import Footer from "../components/Footer";

export default function PinturasPage() {
    const items: Artwork[] = [
        { id: "c1", imageUrl: "/bosque.jpeg", info: "158x122 óleo sobre tela" },
        { id: "c2", imageUrl: "/gente.jpeg", info: "110x110 óleo sobre tela" },
        { id: "c3", imageUrl: "/elefante.jpeg", info: "90x120 óleo sobre tela" },
        { id: "c4", imageUrl: "/mujer.jpeg", info: "100x130 óleo sobre tela" },
    ];
    return (
        <main className="min-h-screen bg-white">
            <HamburgerMenu />
            <ArtGallery items={items} />
            <Footer email="contacto@marcelapedrosa.com" />
        </main>
    );
}