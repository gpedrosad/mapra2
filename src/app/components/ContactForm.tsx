// src/app/components/ContactForm.tsx
"use client";

import React, { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";

type ContactFormProps = {
  /** Número de WhatsApp destino (puede llevar espacios y +, se normaliza) */
  phone?: string; // por defecto: +56 9 5618 9912
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
  // Regex simple y suficiente para UI
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm({
  phone = "+56 9 5618 9912",
  messageTemplate = "Hola, soy {name} ({email}). {message}",
  className = "",
}: ContactFormProps) {
  const { t } = useLanguage();

  // Labels con fallback (si no existen en diccionario)
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
    // Abrimos en pestaña nueva para no perder el sitio
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className={[
        "rounded-2xl border border-zinc-200/80 dark:border-zinc-800",
        "bg-transparent shadow-sm",
        "p-6 sm:p-8",
        className,
      ].join(" ")}
    >
      <header className="mb-5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {L.title}
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{L.subtitle}</p>
      </header>

      <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-4">
        {/* Nombre */}
        <div>
          <label
            htmlFor="cf-name"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            {L.name} <span className="text-red-500">*</span>
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
            className={[
              "mt-1 w-full rounded-lg border bg-white dark:bg-zinc-900",
              "border-zinc-300 dark:border-zinc-700",
              "px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100",
              "placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/20",
            ].join(" ")}
            placeholder="Tu nombre"
          />
          {nameError && (
            <p className="mt-1 text-xs text-red-500" role="alert">
              {nameError}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="cf-email"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            {L.email} <span className="text-red-500">*</span>
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
            className={[
              "mt-1 w-full rounded-lg border bg-white dark:bg-zinc-900",
              "border-zinc-300 dark:border-zinc-700",
              "px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100",
              "placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/20",
            ].join(" ")}
            placeholder="tu@correo.com"
          />
          {emailError && (
            <p className="mt-1 text-xs text-red-500" role="alert">
              {emailError}
            </p>
          )}
        </div>

        {/* Mensaje opcional */}
        <div>
          <label
            htmlFor="cf-msg"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            {L.msg}
          </label>
          <textarea
            id="cf-msg"
            name="message"
            rows={4}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className={[
              "mt-1 w-full rounded-lg border bg-white dark:bg-zinc-900",
              "border-zinc-300 dark:border-zinc-700",
              "px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100",
              "placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/20",
            ].join(" ")}
            placeholder="Escribe tu consulta (opcional)"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={!canSubmit}
            className={[
              "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium",
              "bg-zinc-900 text-white hover:bg-zinc-800",
              "disabled:opacity-60 disabled:cursor-not-allowed",
              "transition-colors",
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

/* -----------------------------------------
   DEMO opcional dentro del mismo archivo
----------------------------------------- */
// export function DemoContact() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 p-6 sm:p-10">
//       <section className="mx-auto max-w-2xl">
//         <ContactForm />
//       </section>
//     </main>
//   );
// }