import { absoluteUrl, ARTIST_NAME, SITE_URL } from "@/lib/site";
import type { CatalogArtwork } from "@/lib/artworks";

/**
 * VisualArtwork solo con datos que ya están en la ficha.
 * Sin precio, sin reseñas y sin unidad de medida inventada.
 */
export default function VisualArtworkJsonLd({
  artwork,
}: {
  artwork: CatalogArtwork;
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

  if (artwork.medium) schema.artMedium = artwork.medium;
  if (artwork.info) schema.description = artwork.info;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
