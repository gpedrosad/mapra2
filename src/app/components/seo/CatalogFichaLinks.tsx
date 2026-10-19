import Link from "next/link";
import { listCatalogArtworks, type CatalogArtwork } from "@/lib/artworks";

/**
 * Fichas que Search Console aún marca como desconocidas, o que el lote
 * quiere nombrar desde páginas que ya imprimen. El texto del enlace es
 * el nombre que ya está en el catálogo. Si la ficha no se genera en este
 * build (la de laguna solo entra cuando la ranura trae ese archivo), no se enlaza.
 */
const DEFAULT_FICHA_SLUGS = [
  "casas-dia-y-noche",
  "elefante",
  "laguna-cordillera-atardecer",
] as const;

/** Enlaces de texto a cada ficha. Va en páginas SEO ya indexadas, no en el menú. */
export default async function CatalogFichaLinks() {
  const works = await listCatalogArtworks();
  if (works.length === 0) return null;

  return (
    <p className="text-ink-body leading-relaxed mb-6">
      Cada óleo publicado tiene su ficha:{" "}
      {works.map((work, index) => (
        <span key={work.slug}>
          {index > 0 ? (index === works.length - 1 ? " y " : ", ") : null}
          <Link
            href={`/pinturas/${work.slug}`}
            className="text-brand underline underline-offset-4"
          >
            {work.name}
          </Link>
        </span>
      ))}
      .
    </p>
  );
}

function joinFichas(works: CatalogArtwork[]) {
  return works.map((work, index) => (
    <span key={work.slug}>
      {index > 0 ? (index === works.length - 1 ? " y " : ", ") : null}
      <Link
        href={`/pinturas/${work.slug}`}
        className="text-brand underline underline-offset-4"
      >
        {work.name}
      </Link>
    </span>
  ));
}

/** Párrafo corto, con ancla descriptiva, hacia fichas concretas. */
export async function DescriptiveFichaLinks({
  lead,
  slugs = DEFAULT_FICHA_SLUGS,
}: {
  lead: string;
  slugs?: readonly string[];
}) {
  const works = await listCatalogArtworks();
  const picked = slugs
    .map((slug) => works.find((work) => work.slug === slug))
    .filter((work): work is CatalogArtwork => Boolean(work));

  if (picked.length === 0) return null;

  return (
    <p className="text-ink-body leading-relaxed mb-6">
      {lead} {joinFichas(picked)}.
    </p>
  );
}
