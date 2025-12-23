import HamburgerMenu from "../components/HamburgerMenu";
import Prensa from "../components/Prensa";
import Footer from "../components/Footer";

export default function PrensaPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <HamburgerMenu />
            <Prensa />
            <Footer email="contacto@marcelapedrosa.com" />
        </main> 
    );
}