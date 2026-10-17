import type { Metadata } from "next";
import { getOgImageUrl, type SiteImageKey } from "@/lib/cloudinary";
import { absoluteUrl, ARTIST_NAME, SITE_URL } from "@/lib/site";

type PageMetadataInput = {
  /** Título absoluto. Tope: 60 caracteres. */
  title: string;
  /** Meta description. Tope: 155 caracteres. */
  description: string;
  /** Ruta con barra inicial. "/" para la portada. */
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  ogImageKey?: SiteImageKey;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  imageAlt,
  ogImageKey = "bosque",
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? SITE_URL : absoluteUrl(path);
  const imageUrl = image
    ? absoluteUrl(image)
    : getOgImageUrl(ogImageKey, SITE_URL);

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "es_CL",
      url: canonical,
      siteName: `${ARTIST_NAME} — Pintura y Arte`,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    ...(noIndex
      ? { robots: { index: false as const, follow: false as const } }
      : {}),
  };
}
