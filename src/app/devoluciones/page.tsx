import type { Metadata } from "next";
import Link from "next/link";
import HamburgerMenu from "../components/HamburgerMenu";

export const metadata: Metadata = {
  title: "Política de Devolución — Marcela Pedrosa",
  description: "Cambios y devoluciones según normativa aplicable.",
};

export default function DevolucionesPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <HamburgerMenu />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#0F3B2E] transition-colors">
                Inicio
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-[#0F3B2E] font-medium">Política de Devolución</li>
          </ol>
        </nav>

        {/* Título principal */}
        <h1 className="text-3xl font-semibold text-[#0F3B2E] mb-8">
          Política de Devolución – Marcela Pedrosa
        </h1>

        {/* Introducción */}
        <p className="text-gray-800 leading-relaxed mb-8">
          Nuestra política de cambio y devolución se ajusta a lo establecido por el SERNAC. Esto significa que si el producto que compraste falla, tienes derecho a la garantía legal.
        </p>

        {/* Sección: ¿Puedo cambiar un producto que compré? */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3 text-[#0F3B2E]">
            ¿Puedo cambiar un producto que compré?
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-800 leading-relaxed mb-4">
            <li>10 días para la devolución del dinero (a contar del día de la compra).</li>
            <li>3 meses para el cambio del producto si presenta algún deterioro o falla.</li>
          </ul>
          <p className="text-gray-800 leading-relaxed font-semibold">
            Importante: El enmarcado, al ser personalizado y a medida, no tiene devolución. Además, el producto y su embalaje deben estar en perfecto estado para proceder con el cambio.
          </p>
        </section>

        {/* Separador */}
        <div className="border-t border-black/10 my-8"></div>

        {/* Sección: ¿Cómo cambiar o devolver una obra? */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3 text-[#0F3B2E]">
            ¿Cómo cambiar o devolver una obra?
          </h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            Envíanos un correo a contacto@marcelapedrosa.com indicando:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-800 leading-relaxed mb-4">
            <li>Nombre de la obra que quieres cambiar o devolver</li>
            <li>Fecha de compra</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Por este medio realizaremos todas las gestiones necesarias.
          </p>
        </section>

        {/* Separador */}
        <div className="border-t border-black/10 my-8"></div>

        {/* Sección: Contáctanos */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3 text-[#0F3B2E]">
            Contáctanos
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Opción directa para escribirnos:{" "}
            <a 
              href="mailto:contacto@marcelapedrosa.com" 
              className="text-[#960018] hover:underline font-medium"
            >
              contacto@marcelapedrosa.com
            </a>
          </p>
        </section>

        {/* Separador */}
        <div className="border-t border-black/10 my-8"></div>

        {/* Enlace a Política de Privacidad */}
        <section>
          <p className="text-gray-800 leading-relaxed">
            Para más información sobre el tratamiento de sus datos, consulte nuestra{" "}
            <Link 
              href="/privacidad" 
              className="text-[#0F3B2E] hover:underline font-medium"
            >
              Política de Privacidad
            </Link>.
          </p>
        </section>

        {/* Botón Volver al inicio */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-[#960018] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 transition-opacity"
          >
            Volver al inicio
          </Link>
        </div>

        {/* Última actualización */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Última actualización: 28-09-2025
          </p>
        </div>
      </div>
    </main>
  );
}
