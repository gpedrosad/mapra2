"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "es" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "app.lang";

const dictionary: Record<Language, Record<string, string>> = {
  es: {
    // ArtistHero
    ah_title: "Artista visual — Impresionismo figurativo",
    ah_location: "Concepción, Chile",
    ah_bio_lead:
      "Cada una de mis pinturas nace del deseo de crear una conexión emocional genuina.",
    ah_bio:
      "Cada una de mis pinturas nace del deseo de crear una conexión emocional genuina. No busco únicamente decorar un espacio, sino transformarlo a través de la atmósfera, la luz y las emociones que la obra despierta en quien la contempla.\n\nDesarrollo series figurativas con una mirada impresionista, la obra se carga de sensibilidad, memoria y significado. Cada pieza está concebida para aportar carácter, calidez y personalidad, invitando a una experiencia íntima que enriquece tanto hogares como espacios de trabajo.\n\nTrabajo principalmente en óleo sobre telas naturales, un material noble que me permite alcanzar profundidad cromática, riqueza de texturas y una gran permanencia en el tiempo. Cada obra es original y realizada íntegramente a mano, respetando los procesos y detalles que hacen de cada pintura una pieza única.\n\nMi propósito es crear arte que acompañe, inspire y permanezca; obras con identidad propia, capaces de dialogar con quienes las observan y de convertirse en parte de sus historias.",
    ah_about_title: "Sobre la artista",
    ah_about_eyebrow: "Presentación",
    ah_label_technique: "Técnica",
    ah_label_themes: "Temas",
    ah_label_location: "Ubicación",
    ah_cta_whatsapp: "Consultar por WhatsApp",
    ah_cta_whatsapp_text: "Hola, me gustaría consultar por obras disponibles de {{name}}.",
    ah_cta_site: "Sitio web",
    // claves extra necesarias
    ah_cta_site_title: "Abrir sitio web",
    ah_cta_site_aria: "Abrir sitio web de {{name}}",
    ah_cta_instagram: "Instagram",
    ah_cta_instagram_title: "Abrir Instagram",
    ah_cta_instagram_aria: "Abrir Instagram de {{name}}",
    ah_alt_banner: "Obra de {{name}}",
    ah_alt_avatar: "Retrato de {{name}}",

    // Ítems traducibles de temas (defaults)
    ah_theme_1: "Fachadas",
    ah_theme_2: "Bosques",
    ah_theme_3: "Figurativo",

    // WhatsAppButton
    wa_label: "Contactar por WhatsApp",
    wa_text_default: "Hola, me gustaría hacer una consulta.",

    // Footer
    ft_title_mail: "Enviar email",
    ft_title_wa: "Contactar por WhatsApp",
    ft_title_ig: "Abrir Instagram",

    // Prensa
    pr_alt: "Nota de prensa sobre {{name}}",
    // 🔹 Nuevas claves de Prensa
    pr_title_default: "Marcela Pedrosa: La artista que busca un espacio para su realismo espontáneo",
    pr_deck_default:
      "La pintora, con más de 26 años de trayectoria, llegó a radicarse nuevamente a Chillán, para mostrar a la ciudad una propuesta difícil de encontrar en otros trabajos en óleo.",
    pr_source_cronica: "Crónica Chillán",
    pr_section_entertainment: "Espectáculos",
    pr_date_2019_05_13: "Lunes 13 de mayo de 2019",

    // Gallery
    gal_alt: "Obra",
    gal_title: "Galería de Arte",
    gal_subtitle: "Seleccioná una obra para ver sus detalles.",
    // 🔹 Medios (para traducir 'info')
    medium_oil_on_canvas: "óleo sobre tela",
    medium_oil_on_natural_canvas: "óleo sobre telas naturales",

    // ContactForm
    cf_title: "Contacto",
    cf_subtitle:
      "Completa tu nombre y correo. Te redirigiremos a WhatsApp.",
    cf_name: "Nombre",
    cf_email: "Correo",
    cf_message: "Mensaje (opcional)",
    cf_submit: "Enviar por WhatsApp",
    cf_err_name: "Ingresá tu nombre.",
    cf_err_email: "Ingresá un correo válido.",

    // UI
    ui_lang_es: "ES",
    ui_lang_en: "EN",
  },
  en: {
    // ArtistHero
    ah_title: "Visual artist — Figurative impressionism",
    ah_location: "Concepción, Chile",
    ah_bio_lead:
      "Each of my paintings is born from the desire to create a genuine emotional connection.",
    ah_bio:
      "Each of my paintings is born from the desire to create a genuine emotional connection. I don't seek merely to decorate a space, but to transform it through the atmosphere, light, and emotions that the work awakens in those who contemplate it.\n\nI develop figurative series with an impressionist sensibility; the work is charged with feeling, memory, and meaning. Each piece is conceived to bring character, warmth, and personality, inviting an intimate experience that enriches both homes and workplaces.\n\nI work mainly in oil on natural canvases, a noble material that allows me to achieve chromatic depth, rich textures, and lasting permanence over time. Each work is original and made entirely by hand, respecting the processes and details that make every painting a unique piece.\n\nMy purpose is to create art that accompanies, inspires, and endures—works with their own identity, able to converse with those who observe them and become part of their stories.",
    ah_about_title: "About the artist",
    ah_about_eyebrow: "Introduction",
    ah_label_technique: "Technique",
    ah_label_themes: "Themes",
    ah_label_location: "Location",
    ah_cta_whatsapp: "Inquire on WhatsApp",
    ah_cta_whatsapp_text: "Hello, I would like to ask about available works by {{name}}.",
    ah_cta_site: "Website",
    // extra keys
    ah_cta_site_title: "Open website",
    ah_cta_site_aria: "Open {{name}}’s website",
    ah_cta_instagram: "Instagram",
    ah_cta_instagram_title: "Open Instagram",
    ah_cta_instagram_aria: "Open {{name}}’s Instagram",
    ah_alt_banner: "{{name}}’s artwork",
    ah_alt_avatar: "{{name}}’s portrait",

    // Theme defaults
    ah_theme_1: "Facades",
    ah_theme_2: "Forests",
    ah_theme_3: "Figurative",

    // WhatsAppButton
    wa_label: "Contact via WhatsApp",
    wa_text_default: "Hello, I would like to make an inquiry.",

    // Footer
    ft_title_mail: "Send email",
    ft_title_wa: "Contact via WhatsApp",
    ft_title_ig: "Open Instagram",

    // Press
    pr_alt: "Press article about {{name}}",
    // 🔹 New Press keys
    pr_title_default: "Marcela Pedrosa: The artist seeking a space for her spontaneous realism",
    pr_deck_default:
      "The painter, with more than 26 years of career, has settled again in Chillán to present the city with a proposal hard to find in other oil works.",
    pr_source_cronica: "Crónica Chillán",
    pr_section_entertainment: "Entertainment",
    pr_date_2019_05_13: "Monday, May 13, 2019",

    // Gallery
    gal_alt: "Artwork",
    gal_title: "Art Gallery",
    gal_subtitle: "Select a piece to see details.",
    // 🔹 Mediums (to translate 'info')
    medium_oil_on_canvas: "oil on canvas",
    medium_oil_on_natural_canvas: "oil on natural canvas",

    // ContactForm
    cf_title: "Contact",
    cf_subtitle:
      "Enter your name and email. We will redirect you to WhatsApp with your data prefilled.",
    cf_name: "Name",
    cf_email: "Email",
    cf_message: "Message (optional)",
    cf_submit: "Send via WhatsApp",
    cf_err_name: "Please enter your name.",
    cf_err_email: "Please enter a valid email.",

    // UI
    ui_lang_es: "ES",
    ui_lang_en: "EN",
  },
};

function interpolate(template: string, vars: Record<string, string | number> = {}) {
  return template.replace(/\{\{(.*?)\}\}/g, (_, key) => String(vars[key.trim()] ?? ""));
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    try {
      const saved =
        typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as Language | null) : null;
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    try {
      if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = useMemo(() => {
    return (key: string, vars?: Record<string, string | number>) => {
      const str = dictionary[lang][key] ?? key;
      return vars ? interpolate(str, vars) : str;
    };
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      className={[
        "inline-flex items-center gap-1 rounded-lg border border-zinc-300 px-1 py-0.5 text-xs",
        className,
      ].join(" ")}
    >
      <button
        type="button"
        onClick={() => setLang("es")}
        className={[
          "px-2 py-1 rounded-md",
          lang === "es" ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-100",
        ].join(" ")}
        aria-pressed={lang === "es"}
        title={t("ui_lang_es")}
      >
        {t("ui_lang_es")}
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={[
          "px-2 py-1 rounded-md",
          lang === "en" ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-100",
        ].join(" ")}
        aria-pressed={lang === "en"}
        title={t("ui_lang_en")}
      >
        {t("ui_lang_en")}
      </button>
    </div>
  );
}