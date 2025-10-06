import ContactForm from "../components/ContactForm";
import HamburgerMenu from "../components/HamburgerMenu";

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HamburgerMenu />
            <ContactForm />
        </main>
    );
  
}