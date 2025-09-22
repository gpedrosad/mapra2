"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export type Artwork = {
  id: string;
  imageUrl: string;
  info: string; // ej: "110x110 óleo sobre tela"
  title?: string;
};

type GalleryProps = {
  items: Artwork[];
  className?: string;
  /** ID de la obra que debe ir al final en pantallas muy grandes */
  lastOnWideId?: string; // por defecto "c3" (elefante)
};

// Mapeo de medios -> clave i18n
const MEDIUM_RULES: Array<{ patterns: string[]; key: string }> = [
  { patterns: ["óleo sobre tela", "oleo sobre tela"], key: "medium_oil_on_canvas" },
  { patterns: ["óleo sobre telas naturales", "oleo sobre telas naturales"], key: "medium_oil_on_natural_canvas" },
  { patterns: ["óleo sobre lienzo", "oleo sobre lienzo"], key: "medium_oil_on_canvas" },
];

// Normaliza cadenas para matcheo robusto
const norm = (s: string) =>
  s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

// Traduce "info": conserva dimensiones y traduce el medio si lo reconoce.
function translateInfo(info: string, t: (k: string) => string): string {
  const m = info.match(/^(\d+)\s*[x×]\s*(\d+)\s*(.*)$/i);
  if (!m) {
    // Si no matchea el patrón, intentamos como key y sino devolvemos tal cual
    const tr = t(info);
    return tr && tr !== info ? tr : info;
  }
  const [, w, h, tailRaw] = m;
  const tail = tailRaw.trim();
  const tailN = norm(tail);

  // Busca una regla de medio conocida
  for (const rule of MEDIUM_RULES) {
    if (rule.patterns.some((p) => tailN === norm(p))) {
      const medium = t(rule.key);
      return `${w}×${h} ${medium}`;
    }
  }

  // Si no encontró medio conocido, intenta traducir todo el tail como key
  const maybe = t(tail);
  return `${w}×${h} ${maybe && maybe !== tail ? maybe : tail}`;
}

export function ArtGallery({
  items,
  className = "",
  lastOnWideId = "c3",
}: GalleryProps) {
  const [isWide, setIsWide] = useState(false); // >= 2xl (1536px)
  const { t } = useLanguage();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1536px)");
    const update = () => setIsWide(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  const displayItems = useMemo(() => {
    if (!isWide || !lastOnWideId) return items;
    const arr = [...items];
    const idx = arr.findIndex((i) => i.id === lastOnWideId);
    if (idx > -1) {
      const [picked] = arr.splice(idx, 1);
      arr.push(picked); // manda al final solo en 2xl+
    }
    return arr;
  }, [items, isWide, lastOnWideId]);

  return (
    // Mosaico: 1 col (mobile), 2 col (sm+), 3 col (2xl+)
    <div className={`columns-1 sm:columns-2 2xl:columns-3 gap-x-6 [column-fill:_balance] ${className}`}>
      {displayItems.map((item, idx) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.04 }}
          className="overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm inline-block w-full mb-6"
          style={{ breakInside: "avoid" }}
        >
          <div className="relative flex items-center justify-center bg-white dark:bg-zinc-900">
            <img
              src={item.imageUrl}
              alt={t("gal_alt")}
              className="block w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="p-4">
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              {translateInfo(item.info, (k) => t(k))}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

// --- Demo traducible ---
export default function DemoArtGallery() {
  const { t } = useLanguage();

  const items: Artwork[] = [
    { id: "c1", imageUrl: "/bosque.jpeg",   info: "158x122 óleo sobre tela" },
    { id: "c2", imageUrl: "/gente.jpeg",    info: "110x110 óleo sobre tela" },
    { id: "c3", imageUrl: "/elefante.jpeg", info: "90x120 óleo sobre tela" }, // elefante
    { id: "c4", imageUrl: "/mujer.jpeg",    info: "100x130 óleo sobre tela" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 p-6 sm:p-10">
      <section className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {t("gal_title")}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            {t("gal_subtitle")}
          </p>
        </header>

        <ArtGallery items={items} lastOnWideId="c3" />
      </section>
    </main>
  );
}