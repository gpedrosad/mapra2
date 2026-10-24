import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "../WhatsAppButton";
import { motifForPublicId } from "@/lib/artwork-slugs";
import type { CatalogPainting } from "@/lib/seo-artworks";
import { SEO_GUIDES } from "@/lib/seo-guides";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

export function FaqJsonLd({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function GuideBreadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Miga de pan" className="mb-6 text-sm text-ink-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/guias" className="hover:text-brand">
            Guías
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-ink">{current}</li>
      </ol>
    </nav>
  );
}

export function ArtworkGrid({ works }: { works: CatalogPainting[] }) {
  if (works.length === 0) {
    return (
      <p className="text-ink-body leading-relaxed my-8">
        Ahora no hay obras de este grupo en la galería publicada. La selección cambia:{" "}
        <Link href="/pinturas" className="text-brand underline">
          revisa las pinturas
        </Link>{" "}
        o consulta disponibilidad.
      </p>
    );
  }

  return (
    <ul
      className={`my-10 grid list-none grid-cols-1 gap-8 p-0 ${works.length > 1 ? "sm:grid-cols-2" : ""}`}
    >
      {works.map((work, index) => {
        const motif = motifForPublicId(work.publicId);
        return (
        <li key={work.id} className="border border-line bg-white">
          <Image
            src={work.src}
            alt={work.alt}
            width={work.width}
            height={work.height}
            sizes="(min-width: 640px) 28rem, 100vw"
            className="h-auto max-h-[40rem] w-full object-contain"
            priority={index === 0}
          />
          <div className="p-4">
            <p className="text-sm font-medium text-ink">{work.info}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-body">{work.detail}</p>
            {motif ? (
              <p className="mt-3 text-sm">
                <Link
                  href={`/pinturas/${motif.slug}`}
                  className="text-brand underline underline-offset-4"
                >
                  Ficha de {motif.name}
                </Link>
              </p>
            ) : null}
          </div>
        </li>
        );
      })}
    </ul>
  );
}

export function ConsultaCta({
  title,
  text,
  whatsappText,
}: {
  title: string;
  text: string;
  whatsappText: string;
}) {
  return (
    <div className="my-10 rounded-xl bg-brand p-8 text-center text-white">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <p className="mb-6 text-white/90">{text}</p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <WhatsAppButton
          phone={CONTACT_PHONE}
          text={whatsappText}
          label="Consultar por WhatsApp"
          size="lg"
        />
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-block rounded-xl bg-white px-6 py-3 font-medium text-brand transition-colors hover:bg-cream"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  );
}

export function RelatedGuides({
  paths,
  also,
}: {
  paths: string[];
  also?: Array<{ href: string; label: string; note: string }>;
}) {
  const guides = SEO_GUIDES.filter((guide) => paths.includes(guide.path));
  const links = [
    ...guides.map((guide) => ({
      href: guide.path,
      label: guide.title,
      note: guide.summary,
    })),
    ...(also ?? []),
  ];

  return (
    <nav aria-label="Guías relacionadas" className="mt-12 border-t border-line pt-8">
      <h2 className="mb-4 text-xl font-semibold text-ink">Guías relacionadas</h2>
      <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
        {links.map((link) => (
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
    </nav>
  );
}
