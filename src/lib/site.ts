/** Constantes públicas del sitio (SEO / contacto). */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://mpedrosa.studio";

export const ARTIST_NAME = "Marcela Pedrosa";

/** Contacto ya usado en el sitio. No inventar otros canales. */
export const CONTACT_EMAIL = "contacto@marcelapedrosa.com";
export const CONTACT_PHONE = "+56 9 5618 9912";

/** Instagram oficial — schema sameAs + CTAs. */
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ||
  "https://www.instagram.com/mpedrosaartista/";

export function absoluteUrl(pathOrUrl: string) {
  if (!pathOrUrl) return SITE_URL;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}
