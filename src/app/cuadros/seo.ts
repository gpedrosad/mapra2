import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/cloudinary";
import { SITE_URL } from "@/lib/site";
import type { CuadroPage } from "./catalog";

export function cuadroMetadata(page: CuadroPage): Metadata {
  const url = `${SITE_URL}${page.path}`;
  const image = getOgImageUrl(page.ogKey, SITE_URL);

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
      locale: "es_CL",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: page.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}
