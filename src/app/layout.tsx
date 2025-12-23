import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 importa *named* desde app/components (ajusta el path si lo movés)
import { LanguageProvider, LanguageToggle } from "./components/LanguageContext";
import HamburgerMenu from "./components/HamburgerMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcela Pedrosa",
  description: "Marcela Pedrosa es una artista visual que busca transmitir emociones para que quien la mira pueda captarlas. Trabajo series figurativas e impresionistas, especialmente fachadas y bosques. Pinto principalmente en óleo sobre telas naturales por la nobleza del material: maleable, intenso y durable en el tiempo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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