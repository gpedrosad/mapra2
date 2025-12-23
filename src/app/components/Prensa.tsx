// components/prensa.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

type PressArticle = {
  imageUrl: string;
  title: string;   // puede ser key i18n o texto literal
  deck?: string;   // puede ser key i18n o texto literal
  source?: string; // idem
  section?: string;// idem
  date?: string;   // idem
  credit?: string; // opcional
  href?: string;   // opcional (link a la nota)
  ctaLabel?: string; // opcional (key i18n o texto literal)
};

type Props = {
  item?: PressArticle;
  className?: string;
};

// Claves por defecto (para permitir traducción real)
const defaultItem: PressArticle = {
  imageUrl: "/prensa.jpeg",
  title: "pr_title_default",
  deck: "pr_deck_default",
  source: "pr_source_cronica",
  section: "pr_section_entertainment",
  date: "pr_date_2019_05_13",
};

export default function Prensa({ item = defaultItem, className = "" }: Props) {
  const titleId = "press-title";
  const { t } = useLanguage();

  // Traducción segura: intenta t(key); si no existe, usa fallback o el propio string
  const tr = (keyOrText?: string, fallback?: string) => {
    if (!keyOrText) return fallback ?? "";
    const res = t(keyOrText);
    return res && res !== keyOrText ? res : (fallback ?? keyOrText);
  };

  // Fallbacks legibles (ES) para las claves por defecto
  const fallbackTitle =
    "Marcela Pedrosa: La artista que busca un espacio para su realismo espontáneo";
  const fallbackDeck =
    "La pintora, con más de 26 años de trayectoria, llegó a radicarse nuevamente a Chillán, para mostrar a la ciudad una propuesta difícil de encontrar en otros trabajos en óleo.";
  const fallbackSource = "Crónica Chillán";
  const fallbackSection = "Espectáculos";
  const fallbackDate = "Lunes 13 de mayo de 2019";
  const fallbackCta = "Leer nota";

  const title = tr(item.title, fallbackTitle);
  const deck = tr(item.deck, fallbackDeck);
  const source = tr(item.source, fallbackSource);
  const section = tr(item.section, fallbackSection);
  const date = tr(item.date, fallbackDate);
  const ctaLabel = tr(item.ctaLabel, fallbackCta);

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      aria-labelledby={titleId}
      whileHover={{ y: -2 }}
      className={[
        "group overflow-hidden rounded-2xl",
        "bg-white/40 backdrop-blur-[2px]",
        "border border-zinc-200/80 dark:border-zinc-800",
        "shadow-sm hover:shadow-md",
        "transition-all",
        className,
      ].join(" ")}
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-0">
        {/* Imagen (en desktop queda a la izquierda) */}
        <figure className="relative lg:col-span-7 bg-transparent">
          <img
            src={item.imageUrl}
            alt={t("pr_alt", { name: "Marcela Pedrosa" })}
            className={[
              "block w-full h-auto",
              "lg:h-full lg:object-contain lg:p-8",
              "transition-transform duration-300",
              "group-hover:scale-[1.01]",
            ].join(" ")}
            loading="lazy"
            decoding="async"
          />
        </figure>

        {/* Texto (en desktop a la derecha, estilo editorial) */}
        <div className="lg:col-span-5 p-5 sm:p-6 lg:p-8">
          {(section || source || date) && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              {section && (
                <span className="inline-flex items-center rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/50 px-3 py-1">
                  {section}
                </span>
              )}
              <span className="inline-flex items-center gap-2">
                {source && <span className="font-medium text-zinc-800 dark:text-zinc-200">{source}</span>}
                {date && <span className="text-zinc-500 dark:text-zinc-400">{date}</span>}
              </span>
            </div>
          )}

          <h3
            id={titleId}
            className={[
              "mt-4 text-xl sm:text-2xl lg:text-[26px]",
              "font-semibold tracking-tight text-zinc-900 dark:text-zinc-100",
              "leading-tight",
            ].join(" ")}
          >
            {title}
          </h3>

          {deck && (
            <p className="mt-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {deck}
            </p>
          )}

          {(item.href || item.credit) && (
            <div className="mt-6 flex flex-col gap-3">
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "inline-flex w-fit items-center justify-center",
                    "rounded-full px-4 py-2 text-sm font-medium",
                    "bg-zinc-900 text-white hover:bg-zinc-800",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#960018]/50",
                    "transition-colors",
                  ].join(" ")}
                >
                  {ctaLabel}
                </a>
              )}
              {item.credit && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.credit}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}