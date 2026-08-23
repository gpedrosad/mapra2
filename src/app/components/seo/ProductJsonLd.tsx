import React from "react";

export type ProductJsonLdProps = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  priceCurrency?: string;
  url: string;
  availability?: string;
};

/**
 * Schema.org Product + Offer (server-side JSON-LD).
 */
export default function ProductJsonLd({
  name,
  description,
  imageUrl,
  price,
  priceCurrency = "CLP",
  url,
  availability,
}: ProductJsonLdProps) {
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    price,
    priceCurrency,
    url,
  };

  if (availability) offer.availability = availability;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: imageUrl,
    url,
    offers: offer,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
