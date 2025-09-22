"use client";

// src/components/WhatsAppButton.tsx
// Botón elegante estilo "Vercel" (negro) para abrir WhatsApp.
// Sin dependencias externas (sin clsx). Incluye helper `cn` para combinar clases.

import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";

export type WhatsAppButtonProps = {
  /** Si pasás href, tiene prioridad sobre phone/text */
  href?: string;
  /** Número en cualquier formato; se normaliza a dígitos */
  phone?: string;
  /** Mensaje inicial */
  text?: string;
  /** Texto del botón */
  label?: string;
  /** Tamaño visual */
  size?: "sm" | "md" | "lg" | "xl";
  /** Ocupa todo el ancho */
  fullWidth?: boolean;
  /** Clases extra */
  className?: string;
  /** Mostrar ícono de WhatsApp */
  icon?: boolean;
  /** Atributo para analytics (data-tracking-id) */
  trackingId?: string;
};

export function buildWhatsAppLink(phone: string, message: string) {
  const digits = (phone || "").replace(/[^\d]/g, "");
  const msg = message || "Hola, me gustaría hacer una consulta.";
  return `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
}

// Helper para unir clases condicionales sin libs externas

// Helper para unir clases condicionales sin libs externas
function cn(...classes: Array<string | false | null | undefined>) { return classes.filter(Boolean).join(" "); }

export default function WhatsAppButton({
  href,
  phone = "+54 9 11 2345 6789",
  text,
  label,
  size = "md",
  fullWidth = false,
  className = "",
  icon = true,
  trackingId,
}: WhatsAppButtonProps) {
  const { t } = useLanguage();
  const finalText = text ?? t("wa_text_default");
  const finalLabel = label ?? t("wa_label");
  const link = href || buildWhatsAppLink(phone, finalText);

  const sizeClasses =
    size === "sm"
      ? "text-sm px-3 py-1.5"
      : size === "md"
      ? "text-sm px-4 py-2"
      : size === "lg"
      ? "text-base px-5 py-2.5"
      : "text-base px-6 py-3"; // xl

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl",
    "bg-black text-white",
    "hover:bg-neutral-900 active:bg-neutral-950",
    "shadow-sm hover:shadow-md transition-all",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black",
    fullWidth && "w-full",
    sizeClasses,
    className
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-tracking-id={trackingId}
      className={classes}
    >
      {icon && <FaWhatsapp className="text-lg" />}
      <span>{finalLabel}</span>
    </a>
  );
}

/* Ejemplo de uso
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Demo() {
  return (
    <div className="p-6 space-y-4">
      <WhatsAppButton phone="+54 9 11 2345 6789" text="Hola, quiero coordinar la compra del cuadro." />
      <WhatsAppButton size="lg" fullWidth label="Comprar por WhatsApp" />
      <WhatsAppButton href="https://wa.me/5491123456789?text=Hola!" icon={false} label="Abrir WhatsApp" />
    </div>
  );
}
*/