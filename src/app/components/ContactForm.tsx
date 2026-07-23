"use client";

import React, { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";

type ContactFormProps = {
  /** Número de WhatsApp destino (puede llevar espacios y +, se normaliza) */
  phone?: string;
  /** Plantilla del mensaje. Tokens: {name}, {email}, {message} */
  messageTemplate?: string;
  className?: string;
};

function buildWaLink(phone: string, text: string) {
  const digits = phone.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digits}`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const inputClass = [
  "mt-1 w-full rounded-xl border bg-surface-elevated",
  "border-line-strong",
  "px-3.5 py-2.5 text-sm text-ink",
  "placeholder:text-ink-faint",
  "focus:outline-none focus:ring-2 focus:ring-brand/25 focus:border-brand/40",
  "transition-colors",
].join(" ");

export default function ContactForm({
  phone = "+56 9 5618 9912",
  messageTemplate = "Hola, soy {name} ({email}). {message}",
  className = "",
}: ContactFormProps) {
  const { t } = useLanguage();

  const L = useMemo(
    () => ({
      title: t("cf_title") ?? "Contacto",
      subtitle:
        t("cf_subtitle") ??
        "Completá tu nombre y correo. Te redirigiremos a WhatsApp con tus datos prellenados.",
      name: t("cf_name") ?? "Nombre",
      email: t("cf_email") ?? "Correo",
      msg: t("cf_message") ?? "Mensaje (opcional)",
      submit: t("cf_submit") ?? "Enviar por WhatsApp",
      name_required: t("cf_err_name") ?? "Ingresá tu nombre.",
      email_required: t("cf_err_email") ?? "Ingresá un correo válido.",
    }),
    [t]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [touched, setTouched] = useState<{ name: boolean; email: boolean }>({
    name: false,
    email: false,
  });

  const nameError = touched.name && name.trim().length === 0 ? L.name_required : "";
  const emailError =
    touched.email && (email.trim().length === 0 || !isValidEmail(email))
      ? L.email_required
      : "";

  const canSubmit = name.trim().length > 0 && isValidEmail(email);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true });

    if (!canSubmit) return;

    const text = messageTemplate
      .replace("{name}", name.trim())
      .replace("{email}", email.trim())
      .replace("{message}", msg.trim() || "");

    const href = buildWaLink(phone, text);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className={[
        "rounded-2xl border border-line",
        "bg-surface/60",
        "p-6 sm:p-8",
        className,
      ].join(" ")}
    >
      <header className="mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
          {L.title}
        </h2>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">{L.subtitle}</p>
      </header>

      <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-ink-body">
            {L.name} <span className="text-brand">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((s) => ({ ...s, name: true }))}
            className={inputClass}
            placeholder="Tu nombre"
          />
          {nameError && (
            <p className="mt-1 text-xs text-brand" role="alert">
              {nameError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-ink-body">
            {L.email} <span className="text-brand">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((s) => ({ ...s, email: true }))}
            className={inputClass}
            placeholder="tu@correo.com"
          />
          {emailError && (
            <p className="mt-1 text-xs text-brand" role="alert">
              {emailError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-msg" className="block text-sm font-medium text-ink-body">
            {L.msg}
          </label>
          <textarea
            id="cf-msg"
            name="message"
            rows={4}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className={inputClass}
            placeholder="Escribe tu consulta (opcional)"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={!canSubmit}
            className={[
              "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium",
              "bg-brand text-white hover:bg-brand-hover",
              "disabled:opacity-60 disabled:cursor-not-allowed",
              "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2",
            ].join(" ")}
            aria-disabled={!canSubmit}
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden />
            {L.submit}
          </button>
        </div>
      </form>
    </section>
  );
}
