"use client";

import React from "react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";

type FooterProps = {
  brand?: string;
  email: string;
  phone?: string;
  instagramUrl?: string;
  whatsappText?: string;
  className?: string;
};

// === Paleta (mismo verde del menú) ===
const BRAND_GREEN = "#960018";
// Si quieres reutilizar en Tailwind, usamos una CSS var:
type CSSVars = React.CSSProperties & { ["--brand-green"]?: string };

function buildWaLink(phone?: string, text?: string) {
  if (!phone) return undefined;
  const digits = phone.replace(/[^\d]/g, "");
  if (!digits) return undefined;
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

function prettyPhone(phone?: string) {
  if (!phone) return "";
  const d = phone.replace(/[^\d]/g, "");
  if (d.startsWith("56") && d.length === 11) {
    return `+56 ${d.slice(2, 3)} ${d.slice(3, 7)} ${d.slice(7)}`;
  }
  return phone.startsWith("+") ? phone : `+${phone}`;
}

export default function Footer({
  brand = "Marcela Pedrosa",
  email,
  phone = "+56 9 5618 9912",
  instagramUrl,
  whatsappText,
  className = "",
}: FooterProps) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const waHref = buildWaLink(phone, whatsappText ?? t("wa_text_default"));
  const phoneLabel = prettyPhone(phone);

  const authorName = "Gonzalo Pedrosa";
  const authorPhone = "+56968257817";
  const authorWaHref = buildWaLink(
    authorPhone,
    "Hola Gonzalo, vi el sitio y quisiera hablar."
  );

  // Variable CSS para usar en clases Tailwind con var()
  const cssVars = { ["--brand-green"]: BRAND_GREEN } as unknown as CSSVars;

  return (
    <footer
      style={cssVars}
      className={[
        "border-t border-white/10",
        "bg-[var(--brand-green)] text-white",
        className,
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Header: en mobile centrado y en columna; desde sm en fila como antes */}
        <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          {/* Izquierda: marca + copy */}
          <div className="text-sm text-white/80">
            <span className="text-white">{brand}</span>
            <span className="mx-2 hidden sm:inline">•</span>
            <span className="block sm:inline">© {year}</span>
          </div>

          {/* Derecha: contactos (apilado en mobile, inline en desktop) */}
          <nav aria-label="Contacto" className="w-full sm:w-auto">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-7">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white hover:underline underline-offset-4 decoration-white/40 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
                title={`${t("ft_title_mail")} a ${email}`}
              >
                <FiMail aria-hidden className="h-5 w-5 shrink-0" />
                {/* Permitimos quiebre elegante en mobile para emails largos */}
                <span className="break-words">{email}</span>
              </a>

              {waHref && (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white hover:underline underline-offset-4 decoration-white/40 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
                  title={t("ft_title_wa")}
                  aria-label={`WhatsApp ${phoneLabel}`}
                >
                  <FaWhatsapp aria-hidden className="h-5 w-5 shrink-0" />
                  <span>{phoneLabel}</span>
                </a>
              )}

              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white hover:underline underline-offset-4 decoration-white/40 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
                  title={t("ft_title_ig")}
                >
                  <FaInstagram aria-hidden className="h-5 w-5 shrink-0" />
                  <span>Instagram</span>
                </a>
              )}
            </div>
          </nav>
        </div>

        {/* Línea de crédito (centrada) */}
        {authorWaHref && (
          <div className="mt-6 text-xs text-white/80 flex items-center justify-center gap-1">
            <span>Creado por</span>
            <a
              href={authorWaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-4 decoration-white/50 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
              title={`Contactar a ${authorName} por WhatsApp`}
            >
              <span className="font-medium">{authorName}</span>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}