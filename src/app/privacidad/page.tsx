import type { Metadata } from "next";
import Link from "next/link";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad — Marcela Pedrosa",
  description: "Cómo recopilamos, utilizamos y protegemos su información en marcelapedrosa.com.",
};

export default function PrivacidadPage() {
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
            <li className="text-[#0F3B2E] font-medium">Política de Privacidad</li>
          </ol>
        </nav>

        {/* Título principal */}
        <h1 className="text-3xl font-semibold text-[#0F3B2E] mb-8">
          Política de Privacidad – Marcela Pedrosa
        </h1>

        {/* Introducción */}
        <p className="text-gray-800 leading-relaxed mb-8">
          En Marcela Pedrosa nos comprometemos a proteger la privacidad y seguridad de la información personal de nuestros usuarios. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos sus datos cuando utiliza nuestro sitio web. Le recomendamos revisar esta página periódicamente, ya que la Política puede actualizarse en cualquier momento.
        </p>

        {/* Sección 1: Información que recopilamos */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3 text-[#0F3B2E]">
            1. Información que recopilamos
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-800 leading-relaxed">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Información de contacto y datos demográficos</li>
            <li>Información necesaria para procesar pedidos, entregas o facturación</li>
          </ul>
        </section>

        {/* Separador */}
        <div className="border-t border-black/10 my-8"></div>

        {/* Sección 2: Uso de la información */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3 text-[#0F3B2E]">
            2. Uso de la información
          </h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            La información recopilada se utiliza para:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-800 leading-relaxed mb-4">
            <li>Mantener un registro de usuarios y pedidos</li>
            <li>Mejorar nuestros productos, servicios y experiencia de usuario</li>
            <li>Enviar comunicaciones con ofertas, novedades o información relevante. Usted puede cancelar la suscripción a estos correos en cualquier momento.</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Nos comprometemos a proteger sus datos utilizando sistemas actualizados que evitan accesos no autorizados.
          </p>
        </section>

        {/* Separador */}
        <div className="border-t border-black/10 my-8"></div>

        {/* Sección 3: Cookies */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3 text-[#0F3B2E]">
            3. Cookies
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-800 leading-relaxed mb-4">
            <li>Ayudan a analizar el tráfico web y reconocerle cuando regresa a nuestro sitio.</li>
            <li>No proporcionan acceso a información personal sin su consentimiento.</li>
            <li>Pueden ser aceptadas o rechazadas en la configuración de su navegador.</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            La desactivación de cookies podría afectar algunas funcionalidades del sitio.
          </p>
        </section>

        {/* Separador */}
        <div className="border-t border-black/10 my-8"></div>

        {/* Sección 4: Enlaces a terceros */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3 text-[#0F3B2E]">
            4. Enlaces a terceros
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Nuestro sitio puede contener enlaces a páginas externas. Una vez que accede a un sitio de terceros, no somos responsables de sus prácticas de privacidad o protección de datos. Recomendamos revisar sus políticas antes de compartir información.
          </p>
        </section>

        {/* Separador */}
        <div className="border-t border-black/10 my-8"></div>

        {/* Sección 5: Control de su información personal */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3 text-[#0F3B2E]">
            5. Control de su información personal
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-800 leading-relaxed mb-4">
            <li>Restringir el uso de su información personal.</li>
            <li>Cancelar la suscripción a correos publicitarios o boletines.</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Marcela Pedrosa nunca venderá ni compartirá su información personal sin su consentimiento, salvo que exista una orden judicial.
          </p>
        </section>

        {/* Separador */}
        <div className="border-t border-black/10 my-8"></div>

        {/* Sección 6: Cambios en la política */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3 text-[#0F3B2E]">
            6. Cambios en la política
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Marcela Pedrosa puede modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página.
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
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
