"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

type NavItem = { label: string; href: string; target?: "_self" | "_blank" };

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Pinturas", href: "/pinturas" },
  { label: "Esculturas", href: "/esculturas" }, // ajusta si usas anchor
  { label: "Prensa", href: "/prensa" },
  { label: "Tiempos de entrega", href: "/tiempos-de-entrega" },
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Política de Devolución", href: "/devoluciones" },
  { label: "Contacto", href: "/contacto" },
];

export default function HamburgerMenu({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // estado auxiliar (si te sirve más adelante)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // ejemplo similar al tuyo; déjalo o bórralo si no usas auth
    const user = localStorage.getItem("user");
    if (user) setIsAuthenticated(true);
  }, []);

  const toggleMenu = () => setIsOpen((v) => !v);

  // Cerrar con ESC + enfocar primer link
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    // enfoque inicial y bloqueo de scroll
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
        "sticky top-0 z-50 flex items-center justify-between p-4",
        "bg-[#0F3B2E] text-[#F0C06C] shadow-md",
        className || "",
      ].join(" ")}
    >
      {/* Marca simple */}
      <div className="flex items-center">
        <Link
          href="/"
          className="font-semibold tracking-wide hover:text-white transition-colors"
        >
          Marcela Pedrosa
        </Link>
      </div>

      {/* Botón hamburguesa (mobile) */}
      <button
        onClick={toggleMenu}
        className="sm:hidden focus:outline-none"
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
            // ícono hamburguesa
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          ) : (
            // ícono cerrar
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
      </button>

      {/* Menú de navegación para pantallas grandes */}
      <nav className="hidden sm:flex space-x-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* FULLSCREEN: menú desplegable para pantallas pequeñas */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-[#0F3B2E] text-[#F0C06C] flex flex-col items-center justify-center space-y-8 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 focus:outline-none"
          aria-label="Cerrar menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {/* X */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
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