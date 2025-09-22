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

  const title = tr(item.title, fallbackTitle);
  const deck = tr(item.deck, fallbackDeck);
  const source = tr(item.source, fallbackSource);
  const section = tr(item.section, fallbackSection);
  const date = tr(item.date, fallbackDate);

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      aria-labelledby={titleId}
      className={`overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm transition-all ${className}`}
    >
      {/* Imagen sin zoom ni recorte (respeta proporción original) */}
      <figure className="relative flex items-center justify-center bg-white dark:bg-zinc-900">
        <img
          src={item.imageUrl}
          alt={t("pr_alt", { name: "Marcela Pedrosa" })}
          className="block max-w-full h-auto"
          loading="lazy"
        />
      </figure>

      {/* Texto debajo */}
      <div className="p-4 space-y-2">
        {(section || source || date) && (
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {section ? `${section} · ` : ""}
            {source}
            {date ? ` · ${date}` : ""}
          </p>
        )}

        <h3
          id={titleId}
          className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          {title}
        </h3>

        {deck && (
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
            {deck}
          </p>
        )}
      </div>
    </motion.article>
  );
}