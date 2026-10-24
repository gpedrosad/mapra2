import { absoluteUrl, ARTIST_NAME, SITE_URL } from "@/lib/site";
import type { CatalogArtwork } from "@/lib/artworks";

type RelatedWork = {
  href: string;
  label: string;
};

/**
 * VisualArtwork solo con datos que ya están en la ficha.
 * Sin precio, sin reseñas y sin unidad de medida inventada.
 * `isRelatedTo` apunta a otras fichas reales, no a una oferta.
 */
export default function VisualArtworkJsonLd({
  artwork,
  description,
  related = [],
}: {
  artwork: CatalogArtwork;
  description?: string;
  related?: RelatedWork[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.name,
    image: absoluteUrl(artwork.imageUrl),
    url: `${SITE_URL}/pinturas/${artwork.slug}`,
    artform: "Pintura",
    artist: {
      "@type": "Person",
      name: ARTIST_NAME,
      url: `${SITE_URL}/marcela-pedrosa`,
    },
  };

  if (artwork.medium) {
    schema.artMedium = artwork.medium;
    if (/tela/i.test(artwork.medium)) schema.artworkSurface = "tela";
  }
  schema.creator = {
    "@type": "Person",
    name: ARTIST_NAME,
    url: `${SITE_URL}/marcela-pedrosa`,
  };
  if (description) {
    schema.description = description;
  } else if (artwork.name || artwork.info) {
    schema.description = [artwork.name, artwork.info].filter(Boolean).join(". ");
  }
  schema.mainEntityOfPage = `${SITE_URL}/pinturas/${artwork.slug}`;
  if (related.length > 0) {
    schema.isRelatedTo = related.map((item) => ({
      "@type": "VisualArtwork",
      name: item.label,
      url: absoluteUrl(item.href),
    }));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
