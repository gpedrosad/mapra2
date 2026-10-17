import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export type Crumb = {
  name: string;
  path: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Inicio", path: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? absoluteUrl("/") : absoluteUrl(item.path),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
          {all.map((item, index) => {
            const last = index === all.length - 1;
            return (
              <li key={`${item.path}-${index}`} className="inline-flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden className="text-ink-faint">
                    /
                  </span>
                )}
                {last ? (
                  <span className="text-ink font-medium">{item.name}</span>
                ) : (
                  <Link href={item.path} className="hover:text-brand transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
