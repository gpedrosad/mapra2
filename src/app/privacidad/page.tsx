import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad — Marcela Pedrosa",
  description: "Cómo recopilamos, utilizamos y protegemos su información en mpedrosa.studio.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-ink-muted">
            <li>
              <Link href="/" className="hover:text-brand transition-colors">
                Inicio
              </Link>
            </li>
            <li className="text-ink-faint">/</li>
            <li className="text-ink font-medium">Política de Privacidad</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink mb-8">
          Política de Privacidad – Marcela Pedrosa
        </h1>

        <p className="text-ink-body leading-relaxed mb-8">
          En Marcela Pedrosa nos comprometemos a proteger la privacidad y seguridad de la información personal de nuestros usuarios. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos sus datos cuando utiliza nuestro sitio web. Le recomendamos revisar esta página periódicamente, ya que la Política puede actualizarse en cualquier momento.
        </p>

        <section>
          <h2 className="font-display text-xl font-medium mt-8 mb-3 text-ink">
            1. Información que recopilamos
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-ink-body leading-relaxed">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Información de contacto y datos demográficos</li>
            <li>Información necesaria para procesar pedidos, entregas o facturación</li>
          </ul>
        </section>

        <div className="border-t border-line my-8" />

        <section>
          <h2 className="font-display text-xl font-medium mt-8 mb-3 text-ink">
            2. Uso de la información
          </h2>
          <p className="text-ink-body leading-relaxed mb-3">
            La información recopilada se utiliza para:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-ink-body leading-relaxed mb-4">
            <li>Mantener un registro de usuarios y pedidos</li>
            <li>Mejorar nuestros productos, servicios y experiencia de usuario</li>
            <li>
              Enviar comunicaciones con ofertas, novedades o información relevante. Usted puede
              cancelar la suscripción a estos correos en cualquier momento.
            </li>
          </ul>
          <p className="text-ink-body leading-relaxed">
            Nos comprometemos a proteger sus datos utilizando sistemas actualizados que evitan
            accesos no autorizados.
          </p>
        </section>

        <div className="border-t border-line my-8" />

        <section>
          <h2 className="font-display text-xl font-medium mt-8 mb-3 text-ink">
            3. Cookies
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-ink-body leading-relaxed mb-4">
            <li>Ayudan a analizar el tráfico web y reconocerle cuando regresa a nuestro sitio.</li>
            <li>No proporcionan acceso a información personal sin su consentimiento.</li>
            <li>Pueden ser aceptadas o rechazadas en la configuración de su navegador.</li>
          </ul>
          <p className="text-ink-body leading-relaxed">
            La desactivación de cookies podría afectar algunas funcionalidades del sitio.
          </p>
        </section>

        <div className="border-t border-line my-8" />

        <section>
          <h2 className="font-display text-xl font-medium mt-8 mb-3 text-ink">
            4. Enlaces a terceros
          </h2>
          <p className="text-ink-body leading-relaxed">
            Nuestro sitio puede contener enlaces a páginas externas. Una vez que accede a un sitio
            de terceros, no somos responsables de sus prácticas de privacidad o protección de datos.
            Recomendamos revisar sus políticas antes de compartir información.
          </p>
        </section>

        <div className="border-t border-line my-8" />

        <section>
          <h2 className="font-display text-xl font-medium mt-8 mb-3 text-ink">
            5. Control de su información personal
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-ink-body leading-relaxed mb-4">
            <li>Restringir el uso de su información personal.</li>
            <li>Cancelar la suscripción a correos publicitarios o boletines.</li>
          </ul>
          <p className="text-ink-body leading-relaxed">
            Marcela Pedrosa nunca venderá ni compartirá su información personal sin su
            consentimiento, salvo que exista una orden judicial.
          </p>
        </section>

        <div className="border-t border-line my-8" />

        <section>
          <h2 className="font-display text-xl font-medium mt-8 mb-3 text-ink">
            6. Cambios en la política
          </h2>
          <p className="text-ink-body leading-relaxed">
            Marcela Pedrosa puede modificar esta Política de Privacidad en cualquier momento. Los
            cambios serán publicados en esta página.
          </p>
        </section>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover transition-colors"
          >
            Volver al inicio
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-line">
          <p className="text-sm text-ink-subtle">Última actualización: 28-09-2025</p>
        </div>
      </div>
      <Footer email="contacto@marcelapedrosa.com" />
    </main>
  );
}
