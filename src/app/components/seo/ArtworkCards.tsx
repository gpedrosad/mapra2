import Image from "next/image";
import Link from "next/link";
import type { CatalogArtwork } from "@/lib/artworks";

export default function ArtworkCards({
  works,
}: {
  works: CatalogArtwork[];
}) {
  if (works.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0 m-0">
      {works.map((work) => (
        <li key={work.slug} className="border border-line bg-surface">
          <Link href={`/pinturas/${work.slug}`} className="block group">
            {work.pixelWidth && work.pixelHeight ? (
              <Image
                src={work.imageUrl}
                alt={work.alt}
                width={work.pixelWidth}
                height={work.pixelHeight}
                sizes="(max-width: 640px) 100vw, 480px"
                className="block w-full h-auto"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={work.imageUrl}
                alt={work.alt}
                className="block w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="p-4">
              <h3 className="font-display text-lg font-medium text-ink group-hover:text-brand">
                {work.name}
              </h3>
              <p className="mt-1 text-sm text-ink-body">{work.info}</p>
              <p className="mt-2 text-sm text-brand">Ver ficha</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
