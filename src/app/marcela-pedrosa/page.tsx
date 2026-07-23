import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getAbsoluteSiteImageUrl, getOgImageUrl, getSiteImageUrl } from "@/lib/cloudinary";
import { getManagedImageUrl } from "@/lib/managed-image-store";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  title: {
    absolute: "Marcela Pedrosa | Pintora y Artista Visual en Concepción",
  },
  description:
    "Biografía y trayectoria de Marcela Pedrosa, pintora y artista visual de Concepción. Óleo sobre tela, impresionismo figurativo, cerámica y taller en el Biobío.",
  keywords: [
    "Marcela Pedrosa",
    "Marcela Pedrosa pintora",
    "Marcela Pedrosa artista",
    "Marcela Pedrosa Concepción",
    "biografía Marcela Pedrosa",
    "artista visual penquista",
    "pintora Biobío",
  ],
  openGraph: {
    title: "Marcela Pedrosa | Pintora en Concepción",
    description:
      "Artista visual chilena especializada en óleo e impresionismo figurativo. Trayectoria, obras y taller en Concepción.",
    url: `${BASE_URL}/marcela-pedrosa`,
    type: "profile",
    images: [
      {
        url: getOgImageUrl("MarcelaPedrosa", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Marcela Pedrosa, pintora y artista visual en Concepción",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/marcela-pedrosa`,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": ["Person", "VisualArtist"],
  name: "Marcela Pedrosa",
  url: `${BASE_URL}/marcela-pedrosa`,
  image: getAbsoluteSiteImageUrl("MarcelaPedrosa", BASE_URL),
  jobTitle: "Pintora y artista visual",
  nationality: "Chilena",
  homeLocation: {
    "@type": "Place",
    name: "Concepción, Chile",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Concepción",
    addressRegion: "Biobío",
    addressCountry: "CL",
  },
  email: "contacto@marcelapedrosa.com",
  telephone: "+56 9 5618 9912",
  description:
    "Pintora y artista visual de Concepción especializada en óleo sobre tela, impresionismo figurativo y cerámica artística.",
  knowsAbout: [
    "Pintura",
    "Óleo sobre tela",
    "Impresionismo figurativo",
    "Arte en Concepción",
    "Cerámica artística",
  ],
  mainEntityOfPage: `${BASE_URL}/marcela-pedrosa`,
};

export default async function MarcelaPedrosaPage() {
  const heroImageUrl =
    (await getManagedImageUrl("home.hero.avatar")) ||
    getSiteImageUrl("MarcelaPedrosa");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F3B2E] mb-6">
              Marcela Pedrosa
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-700 mb-8 leading-relaxed">
              Pintora y artista visual en Concepción, Chile
            </p>
          </div>

          <div className="relative w-full max-w-md mx-auto h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={heroImageUrl}
              alt="Retrato de Marcela Pedrosa, pintora en Concepción"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-[#0F3B2E] mb-6">
              Quién es Marcela Pedrosa
            </h2>

            <p className="text-zinc-700 leading-relaxed mb-6">
              <strong>Marcela Pedrosa</strong> es una{" "}
              <strong>pintora y artista visual de Concepción</strong>, Región del
              Biobío. Su trabajo se centra en el <strong>óleo sobre tela</strong> y
              un estilo de <strong>impresionismo figurativo</strong> que busca
              conexión emocional, atmósfera y luz —no solo decorar un espacio.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Con más de 20 años de experiencia en pintura al óleo, desarrolla
              series de fachadas urbanas, bosques y paisajes del sur de Chile.
              Complementa su obra pictórica con <strong>cerámica artística en
              gres</strong>. Sus piezas forman parte de colecciones privadas en
              Chile y el extranjero, y ha participado en exposiciones y espacios
              culturales de la región.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Identidad y territorio
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Como <strong>pintora penquista</strong>, su lenguaje visual está
              ligado a Concepción y el Biobío: arquitectura local, bosques nativos
              y la luz del sur. Desde su{" "}
              <Link
                href="/taller-arte-concepcion"
                className="text-[#0F3B2E] underline"
              >
                taller de arte
              </Link>{" "}
              produce obras originales y encargos personalizados.
            </p>

            <h3 className="text-2xl font-semibold text-[#0F3B2E] mt-10 mb-4">
              Especialidades
            </h3>

            <div className="bg-zinc-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>Óleo sobre tela e impresionismo figurativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>Fachadas, bosques y paisaje del Biobío</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>Cerámica artística en gres</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F3B2E] mr-2">•</span>
                  <span>Obras disponibles y encargos desde Concepción</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0F3B2E] text-white rounded-xl p-8 my-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Conoce la obra de Marcela Pedrosa
              </h3>
              <p className="mb-6 text-zinc-100">
                Galería, prensa o consulta directa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  phone="+56 9 5618 9912"
                  text="Hola Marcela, vi tu biografía y me gustaría conocer más sobre tu pintura."
                  label="Contactar"
                  size="lg"
                />
                <Link
                  href="/pinturas"
                  className="inline-block bg-white text-[#0F3B2E] px-6 py-3 rounded-xl font-medium hover:bg-zinc-100 transition-colors"
                >
                  Ver pinturas
                </Link>
              </div>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-zinc-200">
            <h3 className="text-xl font-semibold text-[#0F3B2E] mb-4">
              Explorar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pintora-concepcion"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Pintora en Concepción →
                </span>
              </Link>
              <Link
                href="/prensa"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">Prensa →</span>
              </Link>
              <Link
                href="/artista-visual-biobio"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Artista visual Biobío →
                </span>
              </Link>
              <Link
                href="/mujeres-artistas-chilenas"
                className="block p-4 rounded-lg border border-zinc-200 hover:border-[#0F3B2E] hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-[#0F3B2E]">
                  Mujeres artistas chilenas →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
