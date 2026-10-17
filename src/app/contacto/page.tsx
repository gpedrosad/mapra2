import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  title: {
    absolute: "Contacto | Marcela Pedrosa — Pintura y Arte en Concepción",
  },
  description:
    "Contacta a Marcela Pedrosa para consultar pinturas, encargos de arte o visitas al taller en Concepción, Chile.",
  alternates: {
    canonical: `${BASE_URL}/contacto`,
  },
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="mx-auto max-w-xl px-4 sm:px-6 py-14 sm:py-20">
        <p className="text-[11px] uppercase tracking-[0.2em] text-ink-subtle mb-3 text-center sm:text-left">
          Escribime
        </p>
        <ContactForm />
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
