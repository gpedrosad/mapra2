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
}

/**
 * Componente JsonLd para Schema.org de tipo Person
 * Genera datos estructurados para posicionar la identidad de la artista
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
}: PersonSchemaProps) {
  const schema: {
    "@context": string;
    "@type": string;
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
  } = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    nationality,
    homeLocation,
    url,
  };

  if (image) {
    schema.image = image;
  }

  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  if (email) {
    schema.email = email;
  }

  if (telephone) {
    schema.telephone = telephone;
  }

  if (description) {
    schema.description = description;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
