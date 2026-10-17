import Link from "next/link";
import { listCatalogArtworks } from "@/lib/artworks";

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
