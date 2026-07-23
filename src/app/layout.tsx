import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const ARTIST_NAME = "Marcela Pedrosa";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${ARTIST_NAME} | Pintura y Arte en Concepción`,
    template: `%s | ${ARTIST_NAME}`,
  },
  description:
    "Marcela Pedrosa, pintora y artista visual en Concepción, Chile. Pintura al óleo, arte contemporáneo e impresionismo figurativo. Obras originales y taller en el Biobío.",
  keywords: [
    "Marcela Pedrosa",
    "pintura Concepción",
    "arte Concepción",
    "pintora Concepción",
    "artista visual Concepción",
    "pintura Chile",
    "arte Biobío",
    "pintora penquista",
    "óleo sobre tela Concepción",
    "taller de arte Concepción",
    "impresionismo figurativo Chile",
    "mujeres artistas chilenas",
    "pinturas originales Concepción",
    "cerámica artística Concepción",
  ],
  authors: [{ name: ARTIST_NAME }],
  creator: ARTIST_NAME,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: BASE_URL,
    siteName: `${ARTIST_NAME} — Pintura y Arte`,
    title: `${ARTIST_NAME} | Pintura y Arte en Concepción`,
    description:
      "Pintora y artista visual en Concepción. Óleo sobre tela, impresionismo figurativo y obras originales desde el Biobío.",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: `Pintura de ${ARTIST_NAME}, artista en Concepción`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ARTIST_NAME} | Pintura y Arte en Concepción`,
    description:
      "Pintora y artista visual en Concepción. Óleo sobre tela e impresionismo figurativo.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const sameAs = instagramUrl ? [instagramUrl] : [];

  return (
    <html lang="es-CL">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <JsonLd
          name={ARTIST_NAME}
          jobTitle="Pintora y artista visual"
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
          description="Marcela Pedrosa, pintora y artista visual en Concepción especializada en pintura al óleo, arte contemporáneo e impresionismo figurativo."
          knowsAbout={[
            "Pintura",
            "Arte",
            "Pintura en Concepción",
            "Arte en Concepción",
            "Óleo sobre tela",
            "Impresionismo figurativo",
            "Cerámica artística",
          ]}
          areaServed={["Concepción", "Región del Biobío", "Chile"]}
          address={{
            addressLocality: "Concepción",
            addressRegion: "Biobío",
            addressCountry: "CL",
          }}
        />
        <LanguageProvider>
          <HamburgerMenu />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
