import React from "react";

export type ItemListJsonLdItem = {
  name: string;
  imageUrl: string;
  url?: string;
  description?: string;
  artMedium?: string;
};

export type ItemListJsonLdProps = {
  items: ItemListJsonLdItem[];
  listName: string;
  listUrl: string;
};

/**
 * Schema.org ItemList of VisualArtwork (server-side JSON-LD).
 */
export default function ItemListJsonLd({
  items,
  listName,
  listUrl,
}: ItemListJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    url: listUrl,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => {
      const artwork: Record<string, unknown> = {
        "@type": "VisualArtwork",
        name: item.name,
        image: item.imageUrl,
      };

      if (item.url) artwork.url = item.url;
      if (item.description) artwork.description = item.description;
      if (item.artMedium) artwork.artMedium = item.artMedium;

      return {
        "@type": "ListItem",
        position: index + 1,
        item: artwork,
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
