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
  const cssVars = { ["--brand-green"]: BRAND_GREEN } as CSSVars;

  return (
    <footer
      style={cssVars}
      className={[
        "border-t border-white/10",
        "bg-[var(--brand-green)] text-white", // <-- usa la misma variable verde
        className,
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Izquierda: marca + copy */}
          <div className="text-sm text-white/80">
            <span className="text-white">{brand}</span>
            <span className="mx-2">•</span>
            <span>© {year}</span>
          </div>

          {/* Derecha: contactos */}
          <nav aria-label="Contacto" className="flex items-center gap-7">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white hover:underline underline-offset-4 decoration-white/40 font-medium"
              title={`${t("ft_title_mail")} a ${email}`}
            >
              <FiMail aria-hidden className="h-5 w-5" />
              <span>{email}</span>
            </a>

            {waHref && (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white hover:underline underline-offset-4 decoration-white/40 font-medium"
                title={t("ft_title_wa")}
                aria-label={`WhatsApp ${phoneLabel}`}
              >
                <FaWhatsapp aria-hidden className="h-5 w-5" />
                <span>{phoneLabel}</span>
              </a>
            )}

            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white hover:underline underline-offset-4 decoration-white/40 font-medium"
                title={t("ft_title_ig")}
              >
                <FaInstagram aria-hidden className="h-5 w-5" />
                <span>Instagram</span>
              </a>
            )}
          </nav>
        </div>

        {/* Línea de crédito con mini ícono de WhatsApp */}
        {authorWaHref && (
          <div className="mt-6 text-xs text-white/80 flex items-center justify-center gap-1">
            <span>Creado por</span>
            <a
              href={authorWaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-4 decoration-white/50 hover:decoration-white"
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