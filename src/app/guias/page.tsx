import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import { SEO_GUIDES } from "@/lib/seo-guides";
import { SITE_URL } from "@/lib/site";
import { GUIDES } from "./lib/guides";

const THEME_GUIDES = SEO_GUIDES.filter((guide) => guide.path !== "/guias");

const TITLE = "Guías para elegir y cuidar pintura";
const DESCRIPTION =
  "Guías para elegir un cuadro, comparar óleo y acrílico, cuidar una obra y encargar pintura original en Chile.";
const CANONICAL = `${SITE_URL}/guias`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "website",
    locale: "es_CL",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guías",
      item: CANONICAL,
    },
  ],
};

const collection = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  inLanguage: "es-CL",
  isPartOf: {
    "@type": "WebSite",
    name: "Marcela Pedrosa",
    url: SITE_URL,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      ...GUIDES.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: `${SITE_URL}/guias/${guide.slug}`,
        description: guide.description,
      })),
      ...THEME_GUIDES.map((guide, index) => ({
        "@type": "ListItem",
        position: GUIDES.length + index + 1,
        name: guide.title,
        url: `${SITE_URL}${guide.path}`,
        description: guide.summary,
      })),
    ],
  },
};

export default function GuiasIndexPage() {
  return (
    <main className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
            <li>
              <Link href="/" className="hover:text-brand transition-colors">
                Inicio
              </Link>
            </li>
            <li className="text-ink-faint" aria-hidden>
              /
            </li>
            <li className="text-ink font-medium">Guías</li>
          </ol>
        </nav>

        <p className="text-[11px] uppercase tracking-[0.22em] text-ink-subtle mb-3">
          Taller
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-ink">
          {TITLE}
        </h1>
        <p className="mt-6 text-xl text-ink leading-relaxed text-pretty">
          Seis textos para decidir con calma: el cuadro del living, la diferencia
          entre óleo y acrílico, el cuidado de una tela, el impresionismo
          figurativo, el encargo y los factores que mueven el valor de un original
          en Chile.
        </p>
        <p className="mt-4 text-[1.05rem] text-ink-body leading-relaxed">
          Si quieres mirar obra antes de leer, parte por las{" "}
          <Link href="/pinturas" className="text-brand underline underline-offset-4">
            pinturas
          </Link>
          , el{" "}
          <Link
            href="/oleo-sobre-tela-chile"
            className="text-brand underline underline-offset-4"
          >
            óleo sobre tela
          </Link>
          , el{" "}
          <Link
            href="/impresionismo-figurativo-chile"
            className="text-brand underline underline-offset-4"
          >
            impresionismo figurativo
          </Link>{" "}
          y las{" "}
          <Link
            href="/pintoras-chilenas"
            className="text-brand underline underline-offset-4"
          >
            pintoras chilenas
          </Link>
          .
        </p>
        <p className="mt-4 text-[1.05rem] text-ink-body leading-relaxed">
          Son guías de oficio. El monto de una obra de Marcela Pedrosa, pintora en
          Concepción, se consulta por WhatsApp, por{" "}
          <a
            href="mailto:contacto@marcelapedrosa.com"
            className="text-brand underline underline-offset-4"
          >
            contacto@marcelapedrosa.com
          </a>{" "}
          o en el{" "}
          <Link href="/contacto" className="text-brand underline underline-offset-4">
            formulario de contacto
          </Link>
          .
        </p>

        <ul className="mt-10 space-y-4">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guias/${guide.slug}`}
                className="block rounded-xl border border-line bg-surface px-5 py-4 hover:border-brand transition-colors"
              >
                <span className="block font-display text-xl text-ink">
                  {guide.title}
                </span>
                <span className="mt-2 block text-ink-body leading-relaxed">
                  {guide.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
          Obra publicada: temas y compra
        </h2>
        <p className="mt-4 text-[1.05rem] text-ink-body leading-relaxed">
          Páginas armadas solo con las pinturas que ya están en el sitio: cómo
          consultar una obra en Chile y los temas que hay ahora (retrato, figura,
          animales, bosque, ciudad y bodegón).
        </p>
        <ul className="mt-6 space-y-4">
          {THEME_GUIDES.map((guide) => (
            <li key={guide.path}>
              <Link
                href={guide.path}
                className="block rounded-xl border border-line bg-surface px-5 py-4 hover:border-brand transition-colors"
              >
                <span className="block font-display text-xl text-ink">
                  {guide.title}
                </span>
                <span className="mt-2 block text-ink-body leading-relaxed">
                  {guide.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
