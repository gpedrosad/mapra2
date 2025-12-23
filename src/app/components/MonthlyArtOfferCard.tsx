"use client";

import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

/** ─── Config hardcodeada ─────────────────────────────────────────────── */
const BRAND_COLOR = "#960018";

const IMG_URL = "/elefante.jpeg";
const TITLE = "Elefante";
const INFO = "90×120 óleo sobre tela";

const CURRENCY = "CLP";
const PRICE_LIST = 1_200_000;
const PRICE_SALE: number | undefined = 920_000; // poné undefined si no hay oferta

const WHATSAPP_PHONE = "+56956189912";
const WHATSAPP_MESSAGE = `Hola, me interesa la obra ${TITLE}. ¿Está disponible?`;

function formatPrice(value: number, currency = "CLP") {
  const locale =
    currency === "ARS" ? "es-AR" : currency === "CLP" ? "es-CL" : undefined;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "CLP" || currency === "ARS" ? 0 : 2,
  }).format(value);
}

/** ─── Tipado para custom property ────────────────────────────────────── */
type BrandStyle = React.CSSProperties & { ["--brand-color"]: string };

/** ─── Componente simple ──────────────────────────────────────────────── */
export default function MonthlyArtOfferCard() {
  const hasSale = typeof PRICE_SALE === "number" && PRICE_SALE < PRICE_LIST;
  const pct = hasSale && PRICE_SALE
    ? Math.round((1 - PRICE_SALE / PRICE_LIST) * 100)
    : 0;

  const cardStyle: BrandStyle = { ["--brand-color"]: BRAND_COLOR };

  return (
    <section style={cardStyle} className="mx-auto max-w-6xl px-4 sm:px-6">
      <header className="mb-5 sm:mb-7">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
          Oferta del mes
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-700 max-w-2xl">
          Una obra seleccionada con precio especial por tiempo limitado.
        </p>
      </header>

      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={`Oferta del mes: ${TITLE}`}
        className={[
          "group overflow-hidden rounded-2xl",
          "bg-white/40 backdrop-blur-[2px]",
          "border border-zinc-200/80 dark:border-zinc-800",
          "shadow-sm hover:shadow-md transition-all",
        ].join(" ")}
      >
        <div className="lg:grid lg:grid-cols-12">
          {/* Imagen */}
          <div className="relative lg:col-span-7 bg-gradient-to-b from-white/30 to-transparent">
            <div className="relative flex items-center justify-center p-5 sm:p-7 lg:p-10 min-h-[18rem] sm:min-h-[22rem] lg:min-h-[26rem]">
              <img
                src={IMG_URL}
                alt={`Obra ${TITLE}`}
                className="max-h-full max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                loading="eager"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>

            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase text-white bg-[var(--brand-color)] shadow-sm">
                Oferta del mes
                {hasSale && pct > 0 && (
                  <span className="ml-1 bg-white/15 px-2 py-0.5 rounded-full">
                    -{pct}%
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="lg:col-span-5 p-5 sm:p-7 lg:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 mb-1">
              {TITLE}
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              {INFO}
            </p>

            <div className="mt-5">
              {hasSale && PRICE_SALE !== undefined ? (
                <div className="flex flex-wrap items-end gap-x-3 gap-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-semibold text-zinc-900">
                      {formatPrice(PRICE_SALE, CURRENCY)}
                    </span>
                    <span className="text-sm text-zinc-500 line-through">
                      {formatPrice(PRICE_LIST, CURRENCY)}
                    </span>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-zinc-200/80 bg-white/50 px-3 py-1 text-xs font-semibold text-[var(--brand-color)]">
                    Ahorra {pct}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-semibold text-zinc-900">
                  {formatPrice(PRICE_LIST, CURRENCY)}
                </span>
              )}

              <p className="mt-2 text-xs sm:text-sm text-zinc-600">
                Consulta disponibilidad y opciones de entrega por WhatsApp.
              </p>
            </div>

            <div className="mt-6">
              <WhatsAppButton
                phone={WHATSAPP_PHONE}
                text={WHATSAPP_MESSAGE}
                label="Consultar por WhatsApp"
                size="lg"
                fullWidth
                className="justify-center"
              />
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}