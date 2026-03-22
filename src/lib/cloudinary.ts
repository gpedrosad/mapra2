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

export type SiteImageKey = keyof typeof STATIC_IMAGE_PUBLIC_IDS;

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
  return buildCloudinaryImageUrl(STATIC_IMAGE_PUBLIC_IDS[key], transformation);
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
