"use client";

// src/app/components/ArtistHero.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { useLanguage } from "./LanguageContext";
import { FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export type ArtistHeroProps = {
  name?: string;
  title?: string;
  location?: string;
  bio?: string;
  avatarUrl?: string;
  bannerUrl?: string;
  phone?: string;
  instagramUrl?: string;
  websiteUrl?: string;
  /** Puede ser texto literal o keys i18n (p.ej. "ah_technique_1") */
  techniques?: string[];
  /** Puede ser texto literal o keys i18n (p.ej. "ah_theme_1") */
  themes?: string[];
  className?: string;
};

// ✅ Placeholder de avatar (foto de perfil genérica)
const fallbackAvatar =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=720&auto=format&fit=crop";

// ✅ Fondo por defecto usando tu imagen local bosque.jpeg
const fallbackBanner = "/bosque.jpeg";

// KEYS por defecto (no textos) para permitir traducción real
const TECH_KEYS = ["ah_technique_1", "ah_technique_2", "ah_technique_3"];
const THEME_KEYS = ["ah_theme_1", "ah_theme_2", "ah_theme_3"];

// Fallbacks ES por si no hay diccionario cargado
const FALLBACK_TECHNIQUE: Record<string, string> = {
  ah_technique_1: "Óleo sobre telas naturales",
  ah_technique_2: "Pincelada suelta",
  ah_technique_3: "Capas y veladuras",
};
const FALLBACK_THEME: Record<string, string> = {
  ah_theme_1: "Fachadas",
  ah_theme_2: "Bosques",
  ah_theme_3: "Figurativo",
};

// ✅ Tipado para params de i18n (sin `any`)
type I18nParams = Record<string, string | number>;

export default function ArtistHero({
  name = "Marcela Pedrosa",
  title,
  location,
  bio,
  avatarUrl = fallbackAvatar,   // ← usa placeholder si no pasás uno
  bannerUrl = fallbackBanner,   // ← usa /bosque.jpeg de fondo por defecto
  phone = "+56 9 5618 9912",
  instagramUrl,
  websiteUrl,
  techniques,
  themes,
  className = "",
}: ArtistHeroProps) {
  const { t } = useLanguage();

  // Traducción segura con fallback legible
  const tr = (key: string, params?: I18nParams, fallback?: string) => {
    const res = t?.(key, params);
    if (typeof res === "string" && res && res !== key) return res;
    return fallback ?? key; // si no hay traducción, volvemos al fallback o a la key
  };

  // Lista de técnicas/temas: acepta keys o texto literal
  const translateList = (
    list: string[] | undefined,
    map: Record<string, string>,
    defaultKeys: string[]
  ) => {
    const src = list && list.length ? list : defaultKeys; // si no pasan nada, usamos keys por defecto
    return src.map((item) => {
      // Si parece key i18n, intentamos traducirla
      if (/^ah_(technique|theme)_\d+$/i.test(item)) {
        const translated = t?.(item);
        if (translated && translated !== item) return translated;
        // sino, caemos a fallback ES
        return map[item] ?? item;
      }
      // Si no es key, puede ser texto literal ya traducido
      const maybe = t?.(item);
      return maybe && maybe !== item ? maybe : item;
    });
  };

  // Textos principales con fallback legible
  const i18nTitle =
    title ?? tr("ah_title", undefined, "Artista visual — Impresionismo figurativo");
  const i18nLocation = location ?? tr("ah_location", undefined, "Concepción, Chile");
  const i18nBio =
    bio ??
    tr(
      "ah_bio",
      undefined,
      "Mi pintura busca transmitir emociones para que quien la mira pueda captarlas. Trabajo series figurativas e impresionistas, especialmente fachadas y bosques. Pinto principalmente en óleo sobre telas naturales por la nobleza del material: maleable, intenso y durable en el tiempo."
    );

  const i18nTechniques = translateList(techniques, FALLBACK_TECHNIQUE, TECH_KEYS);
  const i18nThemes = translateList(themes, FALLBACK_THEME, THEME_KEYS);

  return (
    <section
      className={[
        "relative overflow-hidden rounded-2xl",
        "border border-zinc-200/80 dark:border-zinc-800",
        "bg-transparent",
        className,
      ].join(" ")}
    >
      {/* Banner */}
      <div className="relative w-full h-56 md:h-72 lg:h-80">
        <Image
          src={bannerUrl}
          alt={tr("ah_alt_banner", { name }, `Obra de ${name}`)}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 pb-10 lg:pb-14 -mt-12 md:-mt-16 lg:-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-9">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-2xl overflow-hidden ring-1 ring-zinc-200/80 dark:ring-zinc-800 shadow-sm z-10">
                <Image
                  src={avatarUrl}
                  alt={tr("ah_alt_avatar", { name }, `Retrato de ${name}`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 192px, 224px"
                />
              </div>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.45 }}
              className="mt-6 lg:mt-7"
            >
              <h1 className="text-balance text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 text-center lg:text-left">
                {name}
              </h1>

              <p className="mt-1 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base text-center lg:text-left">
                {i18nTitle} · {i18nLocation}
              </p>

              <p className="mt-5 text-pretty text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
                {i18nBio}
              </p>

              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-6 text-sm">
                <div>
                  <dt className="uppercase tracking-wider text-[11px] text-zinc-500">
                    {tr("ah_label_technique", undefined, "Técnica")}
                  </dt>
                  <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                    {i18nTechniques.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wider text-[11px] text-zinc-500">
                    {tr("ah_label_themes", undefined, "Temas")}
                  </dt>
                  <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                    {i18nThemes.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wider text-[11px] text-zinc-500">
                    {tr("ah_label_location", undefined, "Ubicación")}
                  </dt>
                  <dd className="mt-1 text-zinc-700 dark:text-zinc-300">{i18nLocation}</dd>
                </div>
              </dl>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <WhatsAppButton
                  phone={phone}
                  text={tr(
                    "ah_cta_whatsapp_text",
                    { name },
                    `Hola, me gustaría hablar con ${name}.`
                  )}
                  label={tr("ah_cta_whatsapp", undefined, "Escribir por WhatsApp")}
                  size="lg"
                />

                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    aria-label={tr(
                      "ah_cta_instagram_aria",
                      { name },
                      `Abrir Instagram de ${name}`
                    )}
                    title={tr("ah_cta_instagram_title", undefined, "Abrir Instagram")}
                  >
                    <FaInstagram className="opacity-90" />
                    {tr("ah_cta_instagram", undefined, "Instagram")}
                  </a>
                )}

                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    aria-label={tr("ah_cta_site_aria", { name }, `Abrir sitio web de ${name}`)}
                    title={tr("ah_cta_site_title", undefined, "Abrir sitio web")}
                  >
                    <FiGlobe className="opacity-90" />
                    {tr("ah_cta_site", undefined, "Sitio web")}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}