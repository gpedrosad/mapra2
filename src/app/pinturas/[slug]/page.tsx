import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import InquiryCta from "../../components/seo/InquiryCta";
import SiteHub from "../../components/seo/SiteHub";
import VisualArtworkJsonLd from "../../components/seo/VisualArtworkJsonLd";
import {
  getCatalogArtwork,
  listCatalogArtworks,
  type CatalogArtwork,
} from "@/lib/artworks";
import { artworkPageContext, type ArtworkSeoLink } from "@/lib/artwork-related";
import { detailForPublicId } from "@/lib/seo-artworks";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const works = await listCatalogArtworks();
  return works.map((work) => ({ slug: work.slug }));
}

function titleFor(work: CatalogArtwork) {
  const oil = /[oó]leo/i.test(work.medium || "");
  const candidate = oil
    ? `${work.name} | Óleo de Marcela Pedrosa`
    : `${work.name} | Marcela Pedrosa`;
  return candidate.length <= 60 ? candidate : `${work.name} | Marcela Pedrosa`;
}

function descriptionFor(work: CatalogArtwork) {
  if (work.slug === "casas-dia-y-noche") {
    return "Casas de día y de noche, óleo sobre tela. Dos vistas en una ficha, sin medida publicada. Consulta el par por WhatsApp o correo.";
  }
  const facts = [work.name, work.medium, work.measure ? `medidas ${work.measure}` : ""]
    .filter(Boolean)
    .join(", ");
  const text = `${facts}. Obra de Marcela Pedrosa en Concepción. Consulta disponibilidad por WhatsApp o correo.`;
  return text.length <= 155 ? text : text.slice(0, 155);
}

function LinkList({ items }: { items: ArtworkSeoLink[] }) {
  return items.map((item, itemIndex) => (
    <span key={item.href}>
      {itemIndex > 0 ? (itemIndex === items.length - 1 ? " y " : ", ") : null}
      <Link href={item.href} className="text-brand underline underline-offset-4">
        {item.label}
      </Link>
    </span>
  ));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = await getCatalogArtwork(slug);
  if (!work) {
    return pageMetadata({
      title: "Obra | Marcela Pedrosa",
      description: "Ficha de una pintura de Marcela Pedrosa en Concepción.",
      path: `/pinturas/${slug}`,
      noIndex: true,
    });
  }

  return pageMetadata({
    title: titleFor(work),
    description: descriptionFor(work),
    path: `/pinturas/${work.slug}`,
    image: work.imageUrl,
    imageAlt: work.alt,
  });
}

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;
  const works = await listCatalogArtworks();
  const work = works.find((item) => item.slug === slug);

  if (!work) {
    const byId = works.find((item) => item.id === slug);
    if (byId) redirect(`/pinturas/${byId.slug}`);
    notFound();
  }

  const index = works.findIndex((item) => item.slug === work.slug);
  const previous = index > 0 ? works[index - 1] : null;
  const next = index >= 0 && index < works.length - 1 ? works[index + 1] : null;
  const seen = detailForPublicId(work.publicId);
  const context = artworkPageContext(work.slug);
  const schemaDescription = [work.name, seen, work.info].filter(Boolean).join(". ");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <VisualArtworkJsonLd
        artwork={work}
        description={schemaDescription}
        related={context.works}
      />
      <article className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs
          items={[
            { name: "Pinturas", path: "/pinturas" },
            { name: work.name, path: `/pinturas/${work.slug}` },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
            {work.name}
          </h1>
          <p className="mt-3 text-lg text-ink-body leading-relaxed">
            Pintura original de Marcela Pedrosa, desde su taller en Concepción.
          </p>
        </header>

        <figure className="bg-surface border border-line">
          {work.pixelWidth && work.pixelHeight ? (
            <Image
              src={work.imageUrl}
              alt={work.alt}
              width={work.pixelWidth}
              height={work.pixelHeight}
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="block w-full h-auto"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={work.imageUrl}
              alt={work.alt}
              className="block w-full h-auto"
              decoding="async"
            />
          )}
        </figure>

        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-ink-body">
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-ink-subtle">Artista</dt>
            <dd className="mt-1">
              <Link href="/marcela-pedrosa" className="text-brand underline underline-offset-4">
                Marcela Pedrosa
              </Link>
            </dd>
          </div>
          {work.medium && (
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-ink-subtle">Técnica</dt>
              <dd className="mt-1">{work.medium}</dd>
            </div>
          )}
          {work.measure && (
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-ink-subtle">Medidas</dt>
              <dd className="mt-1">{work.measure}</dd>
            </div>
          )}
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-ink-subtle">Ficha</dt>
            <dd className="mt-1">{work.info}</dd>
          </div>
        </dl>

        <p className="mt-8 text-ink-body leading-relaxed">
          {seen ? (
            <>
              {seen} La ficha publicada dice {work.info}.
            </>
          ) : (
            <>
              Esta ficha usa el nombre, la imagen y los datos publicados en la galería:{" "}
              {work.info}.
            </>
          )}
        </p>

        {work.slug === "casas-dia-y-noche" ? (
          <p className="mt-4 text-ink-body leading-relaxed">
            Las dos vistas salen juntas en una sola entrada de la galería. La ficha no
            publica medida. Al escribir, pregunta si te interesa una tela o el par, y la
            medida de cada una. No es un servicio para pintar el muro de una casa. El
            formato ancho se piensa para un muro largo: el{" "}
            <Link href="/cuadros/para-comedor" className="text-brand underline underline-offset-4">
              comedor
            </Link>
            , un living o una recepción.
          </p>
        ) : null}

        {context.works.length > 0 ? (
          <p className="mt-4 text-ink-body leading-relaxed">
            {context.worksLead} <LinkList items={context.works} />.
          </p>
        ) : null}

        <p className="mt-4 text-ink-body leading-relaxed">
          {context.guideLead}{" "}
          <Link href={context.guide.href} className="text-brand underline underline-offset-4">
            {context.guide.label}
          </Link>
          .
          {context.hubs.length > 0 ? (
            <>
              {" "}
              También puedes seguir por <LinkList items={context.hubs} />.
            </>
          ) : null}
        </p>

        {work.slug === "elefante" && (
          <p className="mt-6 text-ink-body leading-relaxed">
            Esta misma obra está publicada como oferta del mes en el{" "}
            <Link href="/#ofertames" className="text-brand underline underline-offset-4">
              inicio
            </Link>
            .
          </p>
        )}

        <InquiryCta
          heading={`Consultar por ${work.name}`}
          text="La disponibilidad se confirma por WhatsApp o por correo."
          whatsappText={`Hola Marcela, quisiera consultar la disponibilidad de la obra ${work.name} (${work.info}).`}
        />

        <p className="text-sm text-ink-muted">
          También puedes escribir a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <nav aria-label="Otras obras" className="mt-10 flex flex-col sm:flex-row gap-3 sm:justify-between">
          {previous ? (
            <Link href={`/pinturas/${previous.slug}`} className="text-brand underline-offset-4 hover:underline">
              ← {previous.name}
            </Link>
          ) : (
            <span />
          )}
          <Link href="/pinturas" className="text-ink-body underline-offset-4 hover:underline">
            Volver a pinturas
          </Link>
          {next ? (
            <Link href={`/pinturas/${next.slug}`} className="text-brand underline-offset-4 hover:underline sm:text-right">
              {next.name} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
      <SiteHub />
      <Footer email={CONTACT_EMAIL} />
    </main>
  );
}
