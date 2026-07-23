"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

type I18nParams = Record<string, string | number>;

const FALLBACK_TITLE = "Sobre la artista";
const FALLBACK_BIO =
  "Cada una de mis pinturas nace del deseo de crear una conexión emocional genuina. No busco únicamente decorar un espacio, sino transformarlo a través de la atmósfera, la luz y las emociones que la obra despierta en quien la contempla.\n\nDesarrollo series figurativas con una mirada impresionista, la obra se carga de sensibilidad, memoria y significado. Cada pieza está concebida para aportar carácter, calidez y personalidad, invitando a una experiencia íntima que enriquece tanto hogares como espacios de trabajo.\n\nTrabajo principalmente en óleo sobre telas naturales, un material noble que me permite alcanzar profundidad cromática, riqueza de texturas y una gran permanencia en el tiempo. Cada obra es original y realizada íntegramente a mano, respetando los procesos y detalles que hacen de cada pintura una pieza única.\n\nMi propósito es crear arte que acompañe, inspire y permanezca; obras con identidad propia, capaces de dialogar con quienes las observan y de convertirse en parte de sus historias.";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutArtist({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  const tr = (key: string, params?: I18nParams, fallback?: string) => {
    const res = t?.(key, params);
    if (typeof res === "string" && res && res !== key) return res;
    return fallback ?? key;
  };

  const title = tr("ah_about_title", undefined, FALLBACK_TITLE);
  const paragraphs = tr("ah_bio", undefined, FALLBACK_BIO)
    .split(/\n\n+/)
    .filter(Boolean);

  const [lead, ...rest] = paragraphs;
  const body = rest.slice(0, -1);
  const closing = rest[rest.length - 1];

  return (
    <section
      id="sobre"
      aria-labelledby="about-artist-title"
      className={["mx-auto max-w-3xl px-6 lg:px-10", className].join(" ")}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
          }}
          className="text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-subtle mb-3">
            {tr("ah_about_eyebrow", undefined, "Presentación")}
          </p>
          <h2
            id="about-artist-title"
            className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-ink"
          >
            {title}
          </h2>
        </motion.div>

        <div className="mt-10 sm:mt-12 space-y-6 text-pretty">
          {lead && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
              className="text-xl sm:text-2xl text-ink leading-[1.55] tracking-[-0.01em]"
            >
              {lead}
            </motion.p>
          )}

          {body.map((paragraph) => (
            <motion.p
              key={paragraph.slice(0, 40)}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
              }}
              className="text-[1.05rem] sm:text-lg text-ink-muted leading-[1.8]"
            >
              {paragraph}
            </motion.p>
          ))}

          {closing && (
            <motion.blockquote
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
              className="mt-2 border-t border-line-strong pt-7"
            >
              <p className="font-display text-lg sm:text-xl text-ink-body italic leading-[1.65]">
                {closing}
              </p>
            </motion.blockquote>
          )}
        </div>
      </motion.div>
    </section>
  );
}
