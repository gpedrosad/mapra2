"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

type NavItem = { label: string; href: string; target?: "_self" | "_blank" };

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Pinturas", href: "/pinturas" },
  { label: "Cerámica Gres", href: "/esculturas" },
  { label: "Prensa", href: "/prensa" },
  { label: "Tiempos de entrega", href: "/tiempos-de-entrega" },
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Política de Devolución", href: "/devoluciones" },
  { label: "Contacto", href: "/contacto" },
];

export default function HamburgerMenu({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);


  const toggleMenu = () => setIsOpen((v) => !v);

  // Cerrar con ESC + enfocar primer link + bloquear scroll al abrir
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstLinkRef.current?.focus(), 20);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [isOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-[#960018] text-white shadow-md",
        className || "",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Marca */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-semibold tracking-wide hover:text-white transition-colors"
          >
            Marcela Pedrosa
          </Link>
        </div>

        {/* Botón hamburguesa: visible hasta LG */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {!isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>

        {/* Nav horizontal: sólo en LG y superior */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay móvil/tablet: visible en < LG */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-[#960018] text-white flex flex-col items-center justify-center space-y-8 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        aria-hidden={!isOpen}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 focus:outline-none"
          aria-label="Cerrar menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {NAV_ITEMS.map((item, idx) => (
          <Link
            key={item.href}
            href={item.href}
            ref={idx === 0 ? firstLinkRef : undefined}
            className="text-2xl sm:text-3xl font-semibold hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}