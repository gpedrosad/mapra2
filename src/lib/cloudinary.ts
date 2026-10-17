const STATIC_IMAGE_PUBLIC_IDS = {
  MarcelaPedrosa: "MarcelaPedrosa_ig7ogm",
  bosque: "bosque_wvvs3r",
  gente: "gente_ik69lq",
  prensa: "prensa_zr8m9e",
  mujer: "mujer_nb6pao",
  elefante: "elefante_l0mpmz",
  c5: "c5_t6xso9",
  c6: "c6_ab7jmc",
  c7: "c7_o7ggf4",
  c8: "c8_pw3lea",
  c9: "c9_kf7psh",
  c10: "c10_trroe3",
  c11: "c11_oy6mdw",
  c12: "c12_qtsjik",
  c13: "c13_iqxkyv",
  c14: "c14_v0dphn",
  c15: "c15_rntbzb",
} as const;

/** Fallback local (/public) cuando falta CLOUDINARY_CLOUD_NAME en .env */
const STATIC_IMAGE_LOCAL_PATHS = {
  MarcelaPedrosa: "/MarcelaPedrosa.png",
  bosque: "/bosque.jpeg",
  gente: "/gente.jpeg",
  prensa: "/prensa.jpeg",
  mujer: "/mujer.jpeg",
  elefante: "/elefante.jpeg",
  c5: "/c5.jpeg",
  c6: "/c6.jpeg",
  c7: "/c7.jpeg",
  c8: "/c8.jpeg",
  c9: "/c9.jpeg",
  c10: "/c10.jpeg",
  c11: "/c11.jpeg",
  c12: "/c12.jpeg",
  c13: "/c13.jpeg",
  c14: "/c14.jpeg",
  c15: "/c15.jpeg",
} as const;

export type SiteImageKey = keyof typeof STATIC_IMAGE_PUBLIC_IDS;

/** Ruta local por public id, para cuando no hay CLOUDINARY_CLOUD_NAME. */
const PUBLIC_ID_LOCAL_PATHS: Record<string, string> = {
  MarcelaPedrosa_ig7ogm: "/MarcelaPedrosa.png",
  bosque_wvvs3r: "/bosque.jpeg",
  gente_ik69lq: "/gente.jpeg",
  prensa_zr8m9e: "/prensa.jpeg",
  mujer_nb6pao: "/mujer.jpeg",
  elefante_l0mpmz: "/elefante.jpeg",
  c5_t6xso9: "/c5.jpeg",
  c6_ab7jmc: "/c6.jpeg",
  c7_o7ggf4: "/c7.jpeg",
  c8_pw3lea: "/c8.jpeg",
  c9_kf7psh: "/c9.jpeg",
  c10_trroe3: "/c10.jpeg",
  c11_oy6mdw: "/c11.jpeg",
  c12_qtsjik: "/c12.jpeg",
  c13_iqxkyv: "/c13.jpeg",
  c14_v0dphn: "/c14.jpeg",
  c15_rntbzb: "/c15.jpeg",
};

/** Píxeles reales de los archivos en /public. Sirven para reservar espacio (CLS). */
export const IMAGE_PIXELS_BY_PUBLIC_ID: Record<
  string,
  { width: number; height: number }
> = {
  MarcelaPedrosa_ig7ogm: { width: 1024, height: 1024 },
  bosque_wvvs3r: { width: 1388, height: 1064 },
  gente_ik69lq: { width: 3684, height: 3328 },
  prensa_zr8m9e: { width: 2552, height: 3040 },
  mujer_nb6pao: { width: 1280, height: 956 },
  elefante_l0mpmz: { width: 3084, height: 4160 },
  c5_t6xso9: { width: 1600, height: 1248 },
  c6_ab7jmc: { width: 1600, height: 1588 },
  c7_o7ggf4: { width: 504, height: 175 },
  c8_pw3lea: { width: 1200, height: 1600 },
  c9_kf7psh: { width: 650, height: 533 },
  c10_trroe3: { width: 1600, height: 1248 },
  c11_oy6mdw: { width: 1463, height: 1152 },
  c12_qtsjik: { width: 1554, height: 1600 },
  c13_iqxkyv: { width: 1280, height: 466 },
  c14_v0dphn: { width: 1600, height: 1590 },
  c15_rntbzb: { width: 1312, height: 1600 },
};

export function getImagePixels(publicId: string) {
  return IMAGE_PIXELS_BY_PUBLIC_ID[publicId.trim()] ?? null;
}

/** Cloudinary si hay cloud name; si no, el archivo local conocido. */
export function resolveManagedImageUrl(
  publicId: string,
  transformation = "f_auto,q_auto"
) {
  const cloudinaryUrl = buildCloudinaryImageUrl(publicId, transformation);
  if (cloudinaryUrl) return cloudinaryUrl;
  return PUBLIC_ID_LOCAL_PATHS[publicId.trim()] || "";
}

function getCloudName() {
  return (
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
    process.env.CLOUDINARY_CLOUD_NAME ||
    ""
  );
}

function normalizePublicId(publicId: string) {
  return publicId
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export function buildCloudinaryImageUrl(
  publicId: string,
  transformation = "f_auto,q_auto"
) {
  const cloudName = getCloudName();

  if (!cloudName || !publicId.trim()) {
    return "";
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${normalizePublicId(
    publicId.trim()
  )}`;
}

export function getSiteImageUrl(
  key: SiteImageKey,
  transformation = "f_auto,q_auto"
) {
  const cloudinaryUrl = buildCloudinaryImageUrl(
    STATIC_IMAGE_PUBLIC_IDS[key],
    transformation
  );

  if (cloudinaryUrl) {
    return cloudinaryUrl;
  }

  return STATIC_IMAGE_LOCAL_PATHS[key];
}

export function getAbsoluteSiteImageUrl(
  key: SiteImageKey,
  baseUrl: string,
  transformation = "f_auto,q_auto"
) {
  const imageUrl = getSiteImageUrl(key, transformation);

  if (imageUrl.startsWith("http")) {
    return imageUrl;
  }

  return `${baseUrl}${imageUrl}`;
}

export function getOgImageUrl(key: SiteImageKey, baseUrl: string) {
  return getAbsoluteSiteImageUrl(
    key,
    baseUrl,
    "c_fill,g_auto,h_630,w_1200/f_auto,q_auto"
  );
}
