import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 importa *named* desde app/components (ajusta el path si lo movés)
import { LanguageProvider } from "./components/LanguageContext";
import JsonLd from "./components/seo/JsonLd";
import HamburgerMenu from "./components/HamburgerMenu";
import { getAbsoluteSiteImageUrl, getOgImageUrl } from "@/lib/cloudinary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuración de SEO centrada en la identidad de Marcela Pedrosa
const ARTIST_NAME = "Marcela Pedrosa";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: ARTIST_NAME,
    template: `%s | ${ARTIST_NAME} - Artista `,
  },
  description:
    "Portafolio oficial de Marcela Pedrosa, artista visual de Concepción especializada en óleo y cerámica. Trayectoria, exposiciones y taller. Pintora reconocida por su impresionismo figurativo.",
  keywords: [
    "Marcela Pedrosa",
    "Pintora de Concepción",
    "Artista visual Biobío",
    "Biografía Marcela Pedrosa",
    "Taller de arte Pedrosa",
    "Mujeres artistas chilenas",
    "Pintora penquista",
    "Óleo sobre tela Concepción",
    "Cerámica artística Chile",
    "Impresionismo figurativo Chile",
    "Artista visual Concepción",
    "Pinturas originales Biobío",
  ],
  authors: [{ name: ARTIST_NAME }],
  creator: ARTIST_NAME,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: BASE_URL,
    siteName: ARTIST_NAME,
    title: `${ARTIST_NAME} - Pintora Penquista`,
    description:
      "Portafolio oficial de Marcela Pedrosa, artista visual de Concepción especializada en óleo y cerámica. Trayectoria, exposiciones y taller.",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: `Obra de ${ARTIST_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ARTIST_NAME} - Pintora Penquista`,
    description:
      "Portafolio oficial de Marcela Pedrosa, artista visual de Concepción especializada en óleo y cerámica.",
    images: [getOgImageUrl("bosque", BASE_URL)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Configuración del Schema.org Person
  // Nota: Actualiza instagramUrl cuando tengas la URL real de Instagram
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL; // Ejemplo: "https://instagram.com/marcelapedrosa"
  const sameAs = instagramUrl ? [instagramUrl] : [];

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Schema.org Person para SEO de marca personal */}
        <JsonLd
          name={ARTIST_NAME}
          jobTitle="Pintora y Ceramista"
          nationality="Chilena"
          homeLocation={{
            "@type": "Place",
            name: "Concepción, Chile",
          }}
          url={BASE_URL}
          image={getAbsoluteSiteImageUrl("bosque", BASE_URL)}
          sameAs={sameAs}
          email="contacto@marcelapedrosa.com"
          telephone="+56 9 5618 9912"
          description="Portafolio oficial de Marcela Pedrosa, artista visual de Concepción especializada en óleo y cerámica. Trayectoria, exposiciones y taller."
        />
        {/* Provider CLIENTE envolviendo todo el contenido */}
        <LanguageProvider>
          <HamburgerMenu />
          
          {/*<div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4">
            <div className="flex justify-end">
            <LanguageToggle />
            </div>
            </div>
            
            {/* 👇 Asegurate de que children esté DENTRO del Provider */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
