import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { SITE_URL } from "@/lib/site";

export const CLUSTER_PATH = "/artistas-chilenas";

export function pageUrl(slug?: string) {
  return slug ? `${SITE_URL}${CLUSTER_PATH}/${slug}` : `${SITE_URL}${CLUSTER_PATH}`;
}

export function perfilMetadata(opts: {
  title: string;
  description: string;
  slug?: string;
}): Metadata {
  const url = pageUrl(opts.slug);
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: "article",
      locale: "es_CL",
    },
  };
}

export type PersonFacts = {
  name: string;
  jobTitle: string;
  description: string;
  nationality?: string;
  birthDate?: string;
  deathDate?: string;
  birthPlace?: string;
  homeLocation?: string;
  knowsAbout?: string[];
  sameAs?: string[];
};

export function ProfileJsonLd({
  headline,
  description,
  slug,
  crumbs,
  person,
  modified = "2026-10-17",
}: {
  headline: string;
  description: string;
  slug?: string;
  crumbs: { name: string; url: string }[];
  person: PersonFacts;
  modified?: string;
}) {
  const url = pageUrl(slug);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: "es-CL",
    mainEntityOfPage: url,
    datePublished: "2026-10-17",
    dateModified: modified,
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
    about: {
      "@type": "Person",
      name: person.name,
    },
  };

  const personSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    url,
  };
  if (person.nationality) personSchema.nationality = person.nationality;
  if (person.birthDate) personSchema.birthDate = person.birthDate;
  if (person.deathDate) personSchema.deathDate = person.deathDate;
  if (person.birthPlace) {
    personSchema.birthPlace = { "@type": "Place", name: person.birthPlace };
  }
  if (person.homeLocation) {
    personSchema.homeLocation = { "@type": "Place", name: person.homeLocation };
  }
  if (person.knowsAbout?.length) personSchema.knowsAbout = person.knowsAbout;
  if (person.sameAs?.length) personSchema.sameAs = person.sameAs;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return (
    <>
      {[article, personSchema, breadcrumb].map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export const PERFILES: { slug: string; name: string; note: string }[] = [
  {
    slug: "celia-castro",
    name: "Celia Castro",
    note: "Pintora de Quillota, 1860-1930",
  },
  {
    slug: "magdalena-mira",
    name: "Magdalena Mira",
    note: "Pintora y escultora, 1859-1930",
  },
  {
    slug: "aurora-mira",
    name: "Aurora Mira",
    note: "Pintora de Santiago, 1863-1939",
  },
  {
    slug: "henriette-petit",
    name: "Henriette Petit",
    note: "Pintora del Grupo Montparnasse, 1894-1983",
  },
  {
    slug: "camilo-mori",
    name: "Camilo Mori",
    note: "Pintor, Premio Nacional de Arte 1950",
  },
  {
    slug: "lily-garafulic",
    name: "Lily Garafulic",
    note: "Escultora, Premio Nacional 1995",
  },
  {
    slug: "matilde-perez",
    name: "Matilde Pérez",
    note: "Pintora y artista cinética, 1916-2014",
  },
  {
    slug: "gracia-barrios",
    name: "Gracia Barrios",
    note: "Pintora, Premio Nacional 2011",
  },
  {
    slug: "roser-bru",
    name: "Roser Bru",
    note: "Pintora y grabadora, Premio Nacional 2015",
  },
  {
    slug: "carmen-aldunate",
    name: "Carmen Aldunate",
    note: "Pintora y dibujante, 1940-2026",
  },
  {
    slug: "totoy-zamudio",
    name: "Totoy Zamudio",
    note: "Pintor de Santiago, nacido en 1972",
  },
  {
    slug: "pintoras-chilenas-contemporaneas",
    name: "Pintoras chilenas contemporáneas",
    note: "De la segunda mitad del siglo XX al taller de hoy",
  },
];

function baseCrumbs(current?: { name: string; url: string }) {
  const crumbs = [
    { name: "Inicio", url: SITE_URL },
    { name: "Artistas chilenas", url: pageUrl() },
  ];
  if (current) crumbs.push(current);
  return crumbs;
}

export function ProfilePage({
  slug,
  h1,
  kicker,
  description,
  person,
  children,
  modified,
}: {
  slug?: string;
  h1: string;
  kicker: string;
  description: string;
  person: PersonFacts;
  children: ReactNode;
  modified?: string;
}) {
  const url = pageUrl(slug);
  const crumbs = baseCrumbs(slug ? { name: h1, url } : undefined);
  const relacionadas = PERFILES.filter((item) => item.slug !== slug);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ProfileJsonLd
        headline={h1}
        description={description}
        slug={slug}
        crumbs={crumbs}
        person={person}
        modified={modified}
      />

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav aria-label="Miga de pan" className="mb-8 text-sm text-ink-muted">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              {crumbs.map((crumb, index) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {index < crumbs.length - 1 ? (
                    <Link href={crumb.url.replace(SITE_URL, "") || "/"} className="hover:text-brand">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-ink">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink mb-6">
            {h1}
          </h1>
          <p className="text-xl text-ink-body leading-relaxed">{kicker}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="max-w-none text-ink-body leading-relaxed space-y-6">
            {children}
          </article>

          <div className="mt-12 pt-8 border-t border-line">
            <h2 className="text-2xl font-semibold text-ink mb-4">También en este sitio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/pintoras-chilenas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Pintoras chilenas</span>
                <p className="text-sm text-ink-muted mt-1">
                  Famosas, actuales y el hilo de la pintura hecha por mujeres
                </p>
              </Link>
              <Link
                href="/mujeres-artistas-chilenas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Mujeres artistas chilenas</span>
                <p className="text-sm text-ink-muted mt-1">
                  Pintura, escultura y el arte hecho por mujeres en Chile
                </p>
              </Link>
              <Link
                href="/pinturas"
                className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
              >
                <span className="font-medium text-ink">Pinturas</span>
                <p className="text-sm text-ink-muted mt-1">
                  Óleo sobre tela de Marcela Pedrosa, desde Concepción
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-ink mb-4">Otros perfiles</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relacionadas.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`${CLUSTER_PATH}/${item.slug}`}
                    className="block p-4 rounded-lg border border-line hover:border-brand hover:bg-surface transition-colors"
                  >
                    <span className="font-medium text-ink">{item.name}</span>
                    <p className="text-sm text-ink-muted mt-1">{item.note}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Pintura hoy, desde Concepción</h2>
            <p className="mb-6 text-white/90">
              Marcela Pedrosa pinta óleo sobre tela e impresionismo figurativo en su taller del Biobío.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton
                phone="+56 9 5618 9912"
                text="Hola Marcela, vi los perfiles de artistas chilenas y me interesa conocer tus pinturas."
                label="Consultar obras"
                size="lg"
              />
              <Link
                href="/pinturas"
                className="inline-block bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
              >
                Ver pinturas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
