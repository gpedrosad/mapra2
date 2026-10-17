import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { getOgImageUrl } from "@/lib/cloudinary";
import { listPaintingsByTheme } from "@/lib/seo-artworks";
import { SEO_GUIDES } from "@/lib/seo-guides";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mpedrosa.studio";

const GROUPS = ["Compra", "Estilos", "Temas"] as const;

export const metadata: Metadata = {
  title: {
    absolute: "Guías para elegir obra | Marcela Pedrosa",
  },
  description:
    "Guías para elegir pintura original de Marcela Pedrosa: retratos, figuras, animales, bosques, ciudad, bodegón y cómo comprar arte en Chile.",
  alternates: { canonical: `${BASE_URL}/guias` },
  openGraph: {
    title: "Guías para elegir obra | Marcela Pedrosa",
    description:
      "Estilos, temas y compra de obra original, con las pinturas publicadas en la galería.",
    url: `${BASE_URL}/guias`,
    type: "website",
    images: [
      {
        url: getOgImageUrl("bosque", BASE_URL),
        width: 1200,
        height: 630,
        alt: "Óleo de un bosque con troncos verticales y luz entre los árboles, de Marcela Pedrosa",
      },
    ],
  },
};

const THEME_BY_PATH = {
  "/retratos-al-oleo": "retrato",
  "/figuras-al-oleo": "figura",
  "/pintura-de-animales": "animal",
  "/pintura-de-bosques": "bosque",
  "/pintura-de-ciudad": "ciudad",
  "/bodegon-oleo": "bodegon",
} as const;

export default async function GuiasPage() {
  const spokes = SEO_GUIDES.filter((guide) => guide.path !== "/guias");
  const previews = await Promise.all(
    spokes.map(async (guide) => {
      const theme = THEME_BY_PATH[guide.path as keyof typeof THEME_BY_PATH];
      if (!theme) return { path: guide.path, works: [] };
      const works = await listPaintingsByTheme(theme);
      return { path: guide.path, works: works.slice(0, 1) };
    })
  );
  const previewByPath = new Map(previews.map((preview) => [preview.path, preview.works]));

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="mb-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Guías para elegir obra
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-ink-body">
            Estas páginas muestran solo pinturas que ya están en la galería de Marcela Pedrosa.
            El precio no está publicado: se consulta por WhatsApp o por correo.
          </p>

          {GROUPS.map((group) => (
            <section key={group} className="mt-12">
              <h2 className="mb-4 text-2xl font-semibold text-ink">{group}</h2>
              <ul className="grid list-none grid-cols-1 gap-6 p-0">
                {spokes
                  .filter((guide) => guide.group === group)
                  .map((guide) => {
                    const preview = previewByPath.get(guide.path) ?? [];
                      const sample = preview[0];
                      return (
                        <li key={guide.path} className="border border-line bg-white">
                          <Link href={guide.path} className="block hover:bg-surface">
                            {sample ? (
                              <Image
                                src={sample.src}
                                alt={sample.alt}
                                width={sample.width}
                                height={sample.height}
                                sizes="(min-width: 896px) 896px, 100vw"
                                className="h-auto max-h-80 w-full object-cover"
                              />
                            ) : null}
                            <span className="block p-4 sm:p-6">
                              <span className="text-lg font-medium text-ink">{guide.title} →</span>
                              <p className="mt-2 text-ink-body">{guide.summary}</p>
                            </span>
                          </Link>
                        </li>
                      );
                  })}
              </ul>
            </section>
          ))}

          <section className="mt-12 border-t border-line pt-8">
            <h2 className="mb-4 text-2xl font-semibold text-ink">Otras páginas de obra</h2>
            <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
              {[
                {
                  href: "/oleo-sobre-tela-chile",
                  label: "Óleo sobre tela",
                  note: "La técnica de las pinturas publicadas",
                },
                {
                  href: "/impresionismo-figurativo-chile",
                  label: "Impresionismo figurativo",
                  note: "El estilo que la artista describe en el sitio",
                },
                {
                  href: "/pintura-fachadas-concepcion",
                  label: "Fachadas y bosques",
                  note: "La serie que el sitio ya presenta junta",
                },
                {
                  href: "/comprar-pintura-concepcion",
                  label: "Comprar en Concepción",
                  note: "La misma consulta, con foco en la ciudad",
                },
                {
                  href: "/encargos-pintura",
                  label: "Encargos",
                  note: "Si la obra que buscas no está en la galería",
                },
                {
                  href: "/pinturas",
                  label: "Todas las pinturas",
                  note: "Galería completa, con las medidas de cada ficha",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg border border-line p-4 transition-colors hover:border-brand hover:bg-surface"
                  >
                    <span className="font-medium text-ink">{link.label} →</span>
                    <p className="mt-1 text-sm text-ink-muted">{link.note}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
