import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";

export const metadata: Metadata = {
  title: "Tiempos de Entrega — Marcela Pedrosa",
  description: "Plazos de entrega de obras originales y cerámica gres.",
};

export default function TiemposEntregaPage() {
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
            <li className="text-[#0F3B2E] font-medium">Tiempos de Entrega</li>
          </ol>
        </nav>

        {/* Título principal */}
        <h1 className="text-3xl font-semibold text-[#0F3B2E] mb-8">
          Tiempos de Entrega
        </h1>

        {/* Contenido principal */}
        <div className="space-y-6">
          <p className="text-gray-800 leading-relaxed">
            Tiempo de entrega para obras sin enmarcado o cerámica gres: 48 horas en la Región del BioBio y de 3 a 5 días hábiles a otras regiones.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Tiempo de entrega para obras con enmarcado: 5 a 7 días hábiles en la Región del BioBio y 10 días hábiles a otras regiones, 40 días América Latina, EEUU y Europa.
          </p>
        </div>

        {/* Nota importante */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-[#960018]">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Nota:</strong> Los plazos pueden variar por disponibilidad de enmarcado, distancia y operador logístico. Te notificaremos cualquier cambio.
          </p>
        </div>

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
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
