import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

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
    <main className="min-h-screen bg-transparent">
      <ContactForm />
    </main>
  );
}
