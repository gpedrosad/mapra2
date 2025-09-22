"use client";

import React from "react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";

type FooterProps = {
  /** Marca o nombre a mostrar en el copyright */
  brand?: string;
  /** Email de contacto (se usará en mailto:) */
  email: string;
  /** Teléfono para WhatsApp (se normaliza a dígitos) */
  phone?: string;
  /** URL completa al perfil de Instagram */
  instagramUrl?: string;
  /** Texto que se prellena en WhatsApp */
  whatsappText?: string;
  /** Clases extra (opcional) */
  className?: string;
};

function buildWaLink(phone?: string, text?: string) {
  if (!phone) return undefined;
  const digits = phone.replace(/[^\d]/g, ""); // wa.me requiere solo dígitos
  if (!digits) return undefined;
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

// Formatea bonito para mostrar (ej: +56 9 5618 9912) y deja fallback genérico
function prettyPhone(phone?: string) {
  if (!phone) return "";
  const d = phone.replace(/[^\d]/g, "");
  if (d.startsWith("56") && d.length === 11) {
    // +56 9 XXXX XXXX (Chile)
    return `+56 ${d.slice(2, 3)} ${d.slice(3, 7)} ${d.slice(7)}`;
  }
  // fallback: devuelve lo recibido
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

  return (
    <footer
      className={["border-t border-white/10", "bg-black text-white", className].join(" ")}
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
      </div>
    </footer>
  );
}