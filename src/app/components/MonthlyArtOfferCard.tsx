"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

/** ─── Config hardcodeada ─────────────────────────────────────────────── */
const BRAND_COLOR = "#960018";

const IMG_URL = "/elefante.jpeg";
const TITLE = "Elefante";
const INFO = "90×120 óleo sobre tela";

const CURRENCY = "CLP";
const PRICE_LIST = 1_200_000;
const PRICE_SALE = 920_000; // deja undefined si no hay oferta

const WHATSAPP_PHONE = "+56956189912";
const WHATSAPP_MESSAGE = `Hola, me interesa la obra ${TITLE}. ¿Está disponible?`;

/** ─── Utils mínimos ──────────────────────────────────────────────────── */
function buildWaLink(phone: string, text?: string) {
  const digits = phone.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

function formatPrice(value: number, currency = "CLP") {
  const locale =
    currency === "ARS" ? "es-AR" : currency === "CLP" ? "es-CL" : undefined;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "CLP" || currency === "ARS" ? 0 : 2,
  }).format(value);
}

/** ─── Componente simple ──────────────────────────────────────────────── */
export default function MonthlyArtOfferCardSimple() {
  const hasSale =
    typeof PRICE_SALE === "number" && (PRICE_SALE as number) < PRICE_LIST;
  const pct = hasSale
    ? Math.round((1 - (PRICE_SALE as number) / PRICE_LIST) * 100)
    : 0;

  const waHref = buildWaLink(WHATSAPP_PHONE, WHATSAPP_MESSAGE);

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      style={{ ["--brand-color" as any]: BRAND_COLOR }}
      className="overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm inline-block w-full"
    >
      {/* Imagen + badge (altura controlada por breakpoint) */}
      <div className="relative bg-white dark:bg-zinc-900">
        <div className="w-full h- sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-[28rem] flex items-center justify-center">
          <img
            src={IMG_URL}
            alt={`Obra de arte ${TITLE}`}
            className="max-h-full w-auto object-contain"
            loading="eager"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 600px"
          />
        </div>

        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-white bg-[var(--brand-color)]">
            Oferta del mes
            {hasSale && pct > 0 && (
              <span className="ml-1 bg-white/15 px-1.5 py-0.5 rounded-sm">
                -{pct}%
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
          {TITLE}
        </h3>

        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
          {INFO}
        </p>

        <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
          {hasSale ? (
            <>
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {formatPrice(PRICE_SALE as number, CURRENCY)}
              </span>
              <span className="text-sm line-through text-zinc-500 dark:text-zinc-400">
                {formatPrice(PRICE_LIST, CURRENCY)}
              </span>
              <span className="text-xs font-semibold text-[var(--brand-color)]">
                Ahorra {pct}%
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatPrice(PRICE_LIST, CURRENCY)}
            </span>
          )}
        </div>

        <div className="mt-5">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[var(--brand-color)] hover:brightness-110 active:brightness-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-color)]/60"
            aria-label="Consultar por WhatsApp"
            title="Consultar por WhatsApp"
          >
            <FaWhatsapp className="h-5 w-5" aria-hidden />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

    
      </div>
    </motion.article>
  );
}