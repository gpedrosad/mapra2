"use client";

import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { getSiteImageUrl } from "@/lib/cloudinary";

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

type MonthlyArtOfferCardProps = {
  imageUrl?: string;
};

export default function MonthlyArtOfferCard({
  imageUrl,
}: MonthlyArtOfferCardProps) {
  const resolvedImageUrl = imageUrl?.trim() || getSiteImageUrl("elefante");
  const hasSale = typeof PRICE_SALE === "number" && PRICE_SALE < PRICE_LIST;
  const pct = hasSale && PRICE_SALE
    ? Math.round((1 - PRICE_SALE / PRICE_LIST) * 100)
    : 0;

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <header className="mb-8 sm:mb-10 lg:mb-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand mb-3">
          Destacado
        </p>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-ink">
          Oferta del mes
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-muted max-w-xl leading-relaxed">
          Una obra seleccionada con precio especial por tiempo limitado.
        </p>
      </header>

      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        aria-label={`Oferta del mes: ${TITLE}`}
        className="group"
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="relative lg:col-span-7 flex items-center justify-center">
            <img
              src={resolvedImageUrl}
              alt={`Obra ${TITLE}`}
              className="w-full h-auto max-h-[520px] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              loading="eager"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>

          <div className="lg:col-span-5 mt-8 lg:mt-0 flex flex-col justify-center">
            <div>
              {hasSale && pct > 0 && (
                <p className="text-[11px] uppercase tracking-[0.18em] text-brand mb-2">
                  −{pct}% este mes
                </p>
              )}
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                {TITLE}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-ink-muted leading-relaxed">
                {INFO}
              </p>
            </div>

            <div className="mt-7 pt-6 border-t border-line">
              {hasSale && PRICE_SALE !== undefined ? (
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-3xl sm:text-4xl font-medium text-ink">
                    {formatPrice(PRICE_SALE, CURRENCY)}
                  </span>
                  <span className="text-base text-ink-faint line-through">
                    {formatPrice(PRICE_LIST, CURRENCY)}
                  </span>
                </div>
              ) : (
                <span className="font-display text-3xl sm:text-4xl font-medium text-ink">
                  {formatPrice(PRICE_LIST, CURRENCY)}
                </span>
              )}

              <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                Consulta disponibilidad y opciones de entrega por WhatsApp.
              </p>
            </div>

            <div className="mt-7">
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
