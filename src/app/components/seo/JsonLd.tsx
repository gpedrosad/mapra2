import React from "react";

export interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  nationality: string;
  homeLocation: {
    "@type": "Place";
    name: string;
  };
  url: string;
  image?: string;
  sameAs?: string[];
  email?: string;
  telephone?: string;
  description?: string;
  knowsAbout?: string[];
  areaServed?: string | string[];
  address?: {
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
}

/**
 * Schema.org Person + VisualArtist para posicionar pintura/arte local.
 */
export default function JsonLd({
  name,
  jobTitle,
  nationality,
  homeLocation,
  url,
  image,
  sameAs = [],
  email,
  telephone,
  description,
  knowsAbout = [],
  areaServed,
  address,
}: PersonSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Person", "VisualArtist"],
    name,
    jobTitle,
    nationality,
    homeLocation,
    url,
    knowsAbout:
      knowsAbout.length > 0
        ? knowsAbout
        : [
            "Pintura",
            "Arte",
            "Óleo sobre tela",
            "Impresionismo figurativo",
            "Cerámica artística",
            "Arte en Concepción",
          ],
  };

  if (image) schema.image = image;
  if (sameAs.length > 0) schema.sameAs = sameAs;
  if (email) schema.email = email;
  if (telephone) schema.telephone = telephone;
  if (description) schema.description = description;
  if (areaServed) schema.areaServed = areaServed;
  if (address) {
    schema.address = {
      "@type": "PostalAddress",
      ...address,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
