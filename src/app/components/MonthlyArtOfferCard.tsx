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
    <section style={cardStyle} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Header de sección con jerarquía clara */}
      <header className="mb-8 sm:mb-10 lg:mb-12">
        <p className="text-[11px] sm:text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-color)] mb-2 sm:mb-3">
          Destacado
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900">
          Oferta del mes
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
          Una obra seleccionada con precio especial por tiempo limitado.
        </p>
      </header>

      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        aria-label={`Oferta del mes: ${TITLE}`}
        className={[
          "group overflow-hidden rounded-3xl",
          "bg-white/60 backdrop-blur-[2px]",
          "border border-zinc-200/70 dark:border-zinc-800",
          "shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300",
        ].join(" ")}
      >
        <div className="lg:grid lg:grid-cols-12">
          {/* Imagen - con fondo sutil y marco elegante */}
          <div className="relative lg:col-span-7 bg-gradient-to-br from-zinc-50/90 via-white/50 to-zinc-100/70">
            <div className="relative flex items-center justify-center p-5 sm:p-7 lg:p-10">
              <div className="relative w-full max-w-[520px] rounded-2xl bg-white/70 p-4 sm:p-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] ring-1 ring-zinc-200/70">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white">
                  <img
                    src={IMG_URL}
                    alt={`Obra ${TITLE}`}
                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                    decoding="async"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>
              </div>
            </div>

            {/* Badge de oferta - más refinado */}
            <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-white bg-[var(--brand-color)] shadow-md shadow-[var(--brand-color)]/20">
                Oferta del mes
                {hasSale && pct > 0 && (
                  <span className="ml-0.5 bg-white/20 px-2 py-0.5 rounded-full tracking-normal">
                    -{pct}%
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Contenido - con mejor jerarquía y espaciado */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            {/* Título y descripción */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-semibold tracking-tight text-zinc-900">
                {TITLE}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-zinc-500 leading-relaxed">
                {INFO}
              </p>
            </div>

            {/* Bloque de precio - separación visual clara */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-200/60">
              {hasSale && PRICE_SALE !== undefined ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-3xl sm:text-4xl font-semibold text-zinc-900">
                      {formatPrice(PRICE_SALE, CURRENCY)}
                    </span>
                    <span className="text-base text-zinc-400 line-through">
                      {formatPrice(PRICE_LIST, CURRENCY)}
                    </span>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[var(--brand-color)]/25 bg-[var(--brand-color)]/5 px-3 py-1.5 text-xs font-semibold text-[var(--brand-color)]">
                    Ahorra {pct}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl sm:text-4xl font-semibold text-zinc-900">
                  {formatPrice(PRICE_LIST, CURRENCY)}
                </span>
              )}

              <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                Consulta disponibilidad y opciones de entrega por WhatsApp.
              </p>
            </div>

            {/* CTA con más espacio */}
            <div className="mt-6 sm:mt-8">
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