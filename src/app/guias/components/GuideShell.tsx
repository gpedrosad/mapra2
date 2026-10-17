import Link from "next/link";
import Footer from "../../components/Footer";
import { getOgImageUrl } from "@/lib/cloudinary";
import { SITE_URL } from "@/lib/site";
import { GUIDE_DATE, GUIDES } from "../lib/guides";
import type { Guide } from "../lib/types";
import GuideBlocks from "./GuideBlocks";
import GuideInquiry from "./GuideInquiry";

function articleSchema(guide: Guide) {
  const url = `${SITE_URL}/guias/${guide.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: getOgImageUrl(guide.imageKey, SITE_URL),
    datePublished: GUIDE_DATE,
    dateModified: GUIDE_DATE,
    inLanguage: "es-CL",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: "Marcela Pedrosa",
      url: `${SITE_URL}/marcela-pedrosa`,
    },
    publisher: {
      "@type": "Organization",
      name: "Marcela Pedrosa",
      url: SITE_URL,
    },
  };
}

function breadcrumbSchema(guide: Guide) {
  const url = `${SITE_URL}/guias/${guide.slug}`;

  return {
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
        item: `${SITE_URL}/guias`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: url,
      },
    ],
  };
}

export default function GuideShell({ guide }: { guide: Guide }) {
  const others = GUIDES.filter((item) => item.slug !== guide.slug);

  return (
    <main className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(guide)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(guide)),
        }}
      />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
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
            <li>
              <Link href="/guias" className="hover:text-brand transition-colors">
                Guías
              </Link>
            </li>
            <li className="text-ink-faint" aria-hidden>
              /
            </li>
            <li className="text-ink font-medium">{guide.title}</li>
          </ol>
        </nav>

        <p className="text-[11px] uppercase tracking-[0.22em] text-ink-subtle mb-3">
          Guías
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-ink">
          {guide.title}
        </h1>
        <p className="mt-4 text-sm text-ink-muted">
          <time dateTime={GUIDE_DATE}>17 de octubre de 2026</time>
          <span aria-hidden> · </span>
          Marcela Pedrosa, Concepción
        </p>

        <div className="mt-8">
          <GuideBlocks blocks={guide.blocks} />
        </div>

        <section aria-labelledby="otras-guias" className="mt-14">
          <h2
            id="otras-guias"
            className="font-display text-2xl font-medium tracking-tight text-ink mb-4"
          >
            Otras guías
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/guias/${item.slug}`}
                  className="block h-full rounded-xl border border-line px-4 py-3 text-ink hover:border-brand hover:bg-surface transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <GuideInquiry
          title={guide.ctaTitle}
          body={guide.ctaBody}
          whatsappText={guide.whatsappText}
          trackingId={`guia-${guide.slug}`}
        />
      </article>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
