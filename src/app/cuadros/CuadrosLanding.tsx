import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import ConsultaSteps from "../components/seo/ConsultaSteps";
import ItemListJsonLd from "../components/seo/ItemListJsonLd";
import WhatsAppButton from "../components/WhatsAppButton";
import { motifForId } from "@/lib/artwork-slugs";
import { SITE_URL } from "@/lib/site";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import { EMAIL, PHONE, type CuadroPage } from "./catalog";
import type { CuadroWork } from "./load-works";
import { CUADRO_PAGES } from "./pages";
import { RichText } from "./RichText";

function fichaOf(id: string) {
  const motif = motifForId(id);
  if (!motif) return null;
  return { href: `/pinturas/${motif.slug}`, name: motif.name };
}

function absoluteUrl(url: string) {
  if (url.startsWith("http")) return url;
  return `${SITE_URL}${url}`;
}

export default function CuadrosLanding({
  page,
  works,
}: {
  page: CuadroPage;
  works: CuadroWork[];
}) {
  const [lead, ...rest] = page.blocks;
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Cuadros", path: "/cuadros" },
    ...(page.path === "/cuadros"
      ? []
      : [{ name: page.navLabel, path: page.path }]),
  ];
  const siblings = CUADRO_PAGES.filter((item) => item.path !== page.path);

  return (
    <main className="min-h-screen bg-cream">
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ItemListJsonLd
        listName={page.h1}
        listUrl={`${SITE_URL}${page.path}`}
        items={works.map((work) => {
          const ficha = fichaOf(work.id);
          return {
            name: ficha?.name ?? work.caption,
            imageUrl: absoluteUrl(work.imageUrl),
            url: ficha ? `${SITE_URL}${ficha.href}` : `${SITE_URL}${page.path}`,
            description: `${work.alt}. ${work.info}`,
            artMedium: /[oó]leo sobre tela/i.test(work.info) ? "óleo sobre tela" : undefined,
          };
        })}
      />

      <article className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <nav aria-label="Miga de pan" className="mb-6">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-ink-muted">
            {crumbs.map((crumb, index) => {
              const last = index === crumbs.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-2">
                  {index > 0 ? <span className="text-ink-faint">/</span> : null}
                  {last ? (
                    <span className="font-medium text-ink">{crumb.name}</span>
                  ) : (
                    <Link
                      href={crumb.path}
                      className="hover:text-brand transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-ink-subtle">
            Marcela Pedrosa · Concepción
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
            {page.h1}
          </h1>
        </header>

        {lead && lead.type === "p" ? (
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-body">
            <RichText text={lead.text} />
          </p>
        ) : null}

        <section className="mt-10" aria-labelledby="obras-heading">
          <h2
            id="obras-heading"
            className="font-display text-2xl font-medium text-ink"
          >
            {page.gridHeading}
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => {
              const detailHref = page.workLinks?.[work.id];
              const ficha = fichaOf(work.id);
              const image = (
                <Image
                  src={work.imageUrl}
                  alt={work.alt}
                  width={work.width}
                  height={work.height}
                  className="block h-auto w-full"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              );
              return (
                <li
                  key={work.id}
                  className="overflow-hidden border border-line bg-surface"
                >
                  <figure>
                    {ficha ? (
                      <Link href={ficha.href} className="block">
                        {image}
                      </Link>
                    ) : (
                      image
                    )}
                    <figcaption className="space-y-1 px-4 py-3">
                      <p className="font-medium text-ink">
                        {ficha ? (
                          <Link
                            href={ficha.href}
                            className="underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                          >
                            {ficha.name}
                          </Link>
                        ) : (
                          work.caption
                        )}
                      </p>
                      <p className="text-sm text-ink-muted">{work.info}</p>
                      {detailHref ? (
                        <p className="pt-1 text-sm">
                          <Link
                            href={detailHref}
                            className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                          >
                            Ver esta selección
                          </Link>
                        </p>
                      ) : null}
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-ink-body">
          {(lead && lead.type !== "p" ? page.blocks : rest).map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="pt-4 font-display text-2xl font-medium text-ink"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand" aria-hidden>
                        •
                      </span>
                      <span>
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index}>
                <RichText text={block.text} />
              </p>
            );
          })}
        </div>

        <div className="max-w-3xl">
          <ConsultaSteps intro={page.consultaIntro} />
        </div>

        <section className="mt-12 max-w-3xl rounded-xl bg-brand px-6 py-8 text-white sm:px-8">
          <h2 className="font-display text-2xl font-medium">{page.ctaTitle}</h2>
          <p className="mt-3 text-white/90 leading-relaxed">{page.ctaBody}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppButton
              phone={PHONE}
              text={page.whatsappText}
              label="Escribir por WhatsApp"
              size="lg"
            />
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(page.h1)}`}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-base font-medium text-brand hover:bg-cream transition-colors"
            >
              Escribir por correo
            </a>
            <Link
              href="/pinturas"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-2.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Ver la galería de pinturas
            </Link>
          </div>
        </section>

        <section className="mt-12 border-t border-line pt-8" aria-labelledby="relacionados">
          <h2 id="relacionados" className="text-xl font-semibold text-ink">
            También en este grupo
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {siblings.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="block rounded-lg border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-surface"
                >
                  <span className="font-medium text-ink">{item.navLabel}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/pinturas"
                className="block rounded-lg border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-surface"
              >
                <span className="font-medium text-ink">Galería de pinturas</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>

      <Footer email={EMAIL} phone={PHONE} whatsappText={page.whatsappText} />
    </main>
  );
}
