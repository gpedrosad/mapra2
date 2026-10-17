import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { pageMetadata } from "@/lib/metadata";
import Breadcrumbs from "../components/seo/Breadcrumbs";

export const metadata: Metadata = pageMetadata({
  title: 'Contacto | Marcela Pedrosa en Concepción',
  description:
    'Contacta a Marcela Pedrosa para consultar pinturas, encargos de arte o el taller en Concepción, Chile.',
  path: '/contacto',
  ogImageKey: 'bosque',
  imageAlt: 'Contacto de Marcela Pedrosa, pintora en Concepción',
});

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="mx-auto max-w-xl px-4 sm:px-6 py-14 sm:py-20">
        <Breadcrumbs items={[{ name: "Contacto", path: "/contacto" }]} />
          
        <p className="text-[11px] uppercase tracking-[0.2em] text-ink-subtle mb-3 text-center sm:text-left">
          Escribime
        </p>
        <ContactForm />
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
