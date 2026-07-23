"use client";

// src/app/components/ArtistHero.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { useLanguage } from "./LanguageContext";
import { FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { getSiteImageUrl } from "@/lib/cloudinary";

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

// ✅ Foto de perfil de Marcela Pedrosa
const fallbackAvatar = getSiteImageUrl("MarcelaPedrosa");

// ✅ Fondo por defecto usando Cloudinary (bosque)
const fallbackBanner = getSiteImageUrl("bosque");

const TECH_KEYS = ["ah_technique_1", "ah_technique_2", "ah_technique_3"];
const THEME_KEYS = ["ah_theme_1", "ah_theme_2", "ah_theme_3"];

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

type I18nParams = Record<string, string | number>;

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: easeOut },
  }),
};

const CATEGORIES = [
  { href: "/pinturas", label: "Pintura" },
  { href: "/esculturas", label: "Cerámica" },
  { href: "/esculturas", label: "Artesanía" },
] as const;

export default function ArtistHero({
  name = "Marcela Pedrosa",
  title,
  location,
  bio,
  avatarUrl = fallbackAvatar,
  bannerUrl = fallbackBanner,
  phone = "+56 9 5618 9912",
  instagramUrl,
  websiteUrl,
  techniques,
  themes,
  className = "",
}: ArtistHeroProps) {
  const { t } = useLanguage();

  const tr = (key: string, params?: I18nParams, fallback?: string) => {
    const res = t?.(key, params);
    if (typeof res === "string" && res && res !== key) return res;
    return fallback ?? key;
  };

  const translateList = (
    list: string[] | undefined,
    map: Record<string, string>,
    defaultKeys: string[]
  ) => {
    const src = list && list.length ? list : defaultKeys;
    return src.map((item) => {
      if (/^ah_(technique|theme)_\d+$/i.test(item)) {
        const translated = t?.(item);
        if (translated && translated !== item) return translated;
        return map[item] ?? item;
      }
      const maybe = t?.(item);
      return maybe && maybe !== item ? maybe : item;
    });
  };

  const i18nTitle =
    title ?? tr("ah_title", undefined, "Artista visual — Impresionismo figurativo");
  const i18nLocation = location ?? tr("ah_location", undefined, "Concepción, Chile");
  const i18nBioLead =
    bio ??
    tr(
      "ah_bio_lead",
      undefined,
      "Cada una de mis pinturas nace del deseo de crear una conexión emocional genuina."
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
      <div className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: easeOut }}
        >
          <Image
            src={bannerUrl}
            alt={tr("ah_alt_banner", { name }, `Obra de ${name}`)}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-[var(--background)]" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 pb-10 lg:pb-14 -mt-12 md:-mt-16 lg:-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-9">
            <motion.div
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex justify-center lg:justify-start"
            >
              <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-2xl overflow-hidden ring-1 ring-zinc-900/10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-10 bg-[var(--background)]">
                <Image
                  src={avatarUrl}
                  alt={tr("ah_alt_avatar", { name }, `Retrato de ${name}`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 192px, 224px"
                />
              </div>
            </motion.div>

            <div className="mt-6 lg:mt-8">
              <motion.h1
                custom={0.28}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="font-display text-balance text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-zinc-900 text-center lg:text-left leading-[1.1]"
              >
                {name}
              </motion.h1>

              <motion.p
                custom={0.38}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-2 text-zinc-500 text-sm sm:text-[0.95rem] tracking-wide text-center lg:text-left"
              >
                {i18nTitle}
                <span className="mx-2 text-zinc-300" aria-hidden>
                  ·
                </span>
                {i18nLocation}
              </motion.p>

              <motion.p
                custom={0.48}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-6 text-pretty text-lg sm:text-xl text-zinc-800 leading-[1.65] max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                {i18nBioLead}
              </motion.p>

              <motion.a
                custom={0.56}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                href="#sobre"
                className="mt-3 inline-flex justify-center lg:justify-start w-full lg:w-auto text-sm font-medium text-zinc-700 hover:text-zinc-950 underline-offset-[5px] hover:underline transition-colors"
              >
                {tr("ah_about_title", undefined, "Sobre la artista")} →
              </motion.a>

              <motion.dl
                custom={0.64}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-5 text-sm border-t border-zinc-900/8 pt-7"
              >
                <div>
                  <dt className="uppercase tracking-[0.16em] text-[10px] text-zinc-400">
                    {tr("ah_label_technique", undefined, "Técnica")}
                  </dt>
                  <dd className="mt-1.5 text-zinc-800 leading-snug">
                    {i18nTechniques.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.16em] text-[10px] text-zinc-400">
                    {tr("ah_label_themes", undefined, "Temas")}
                  </dt>
                  <dd className="mt-1.5 text-zinc-800 leading-snug">
                    {i18nThemes.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.16em] text-[10px] text-zinc-400">
                    {tr("ah_label_location", undefined, "Ubicación")}
                  </dt>
                  <dd className="mt-1.5 text-zinc-800 leading-snug">{i18nLocation}</dd>
                </div>
              </motion.dl>

              <motion.div
                custom={0.72}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
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
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-zinc-300 text-zinc-900 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
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
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-zinc-300 text-zinc-900 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
                    aria-label={tr("ah_cta_site_aria", { name }, `Abrir sitio web de ${name}`)}
                    title={tr("ah_cta_site_title", undefined, "Abrir sitio web")}
                  >
                    <FiGlobe className="opacity-90" />
                    {tr("ah_cta_site", undefined, "Sitio web")}
                  </a>
                )}
              </motion.div>

              <motion.nav
                custom={0.82}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                aria-label="Categorías"
                className="mt-8 lg:mt-10"
              >
                <div className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide">
                  {CATEGORIES.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group relative block rounded-xl border border-zinc-900/10 bg-white/40 px-5 py-3 sm:px-7 sm:py-3.5 transition-colors duration-200 hover:border-zinc-900/25 hover:bg-white/70"
                    >
                      <span className="font-display text-base sm:text-lg tracking-tight text-zinc-800 group-hover:text-zinc-950 whitespace-nowrap">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
