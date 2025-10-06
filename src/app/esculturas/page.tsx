import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";

export default function EsculturasPage() {
    return (
        <main className="min-h-screen bg-white">
            <HamburgerMenu />
            <p className="text-center text-2xl font-bold text-[#0F3B2E]">aqui van las esculturas</p>
            <Footer email="contacto@marcelapedrosa.com" />
        </main>
    );
}