import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Devolución — Marcela Pedrosa",
  description: "Cambios y devoluciones según normativa aplicable.",
};

export default function DevolucionesPage() {
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
            <li className="text-ink font-medium">Política de Devolución</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink mb-8">
          Política de Devolución – Marcela Pedrosa
        </h1>

        <p className="text-ink-body leading-relaxed mb-8">
          Nuestra política de cambio y devolución se ajusta a lo establecido por el SERNAC. Esto
          significa que si el producto que compraste falla, tienes derecho a la garantía legal.
        </p>

        <section>
          <h2 className="font-display text-xl font-medium mt-8 mb-3 text-ink">
            ¿Puedo cambiar un producto que compré?
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-ink-body leading-relaxed mb-4">
            <li>10 días para la devolución del dinero (a contar del día de la compra).</li>
            <li>3 meses para el cambio del producto si presenta algún deterioro o falla.</li>
          </ul>
          <p className="text-ink-body leading-relaxed font-medium">
            Importante: El enmarcado, al ser personalizado y a medida, no tiene devolución. Además,
            el producto y su embalaje deben estar en perfecto estado para proceder con el cambio.
          </p>
        </section>

        <div className="border-t border-line my-8" />

        <section>
          <h2 className="font-display text-xl font-medium mt-8 mb-3 text-ink">
            ¿Cómo cambiar o devolver una obra?
          </h2>
          <p className="text-ink-body leading-relaxed mb-3">
            Envíanos un correo a contacto@marcelapedrosa.com indicando:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-ink-body leading-relaxed mb-4">
            <li>Nombre de la obra que quieres cambiar o devolver</li>
            <li>Fecha de compra</li>
          </ul>
          <p className="text-ink-body leading-relaxed">
            Por este medio realizaremos todas las gestiones necesarias.
          </p>
        </section>

        <div className="border-t border-line my-8" />

        <section>
          <h2 className="font-display text-xl font-medium mt-8 mb-3 text-ink">
            Contáctanos
          </h2>
          <p className="text-ink-body leading-relaxed">
            Opción directa para escribirnos:{" "}
            <a
              href="mailto:contacto@marcelapedrosa.com"
              className="text-brand hover:underline font-medium"
            >
              contacto@marcelapedrosa.com
            </a>
          </p>
        </section>

        <div className="border-t border-line my-8" />

        <section>
          <p className="text-ink-body leading-relaxed">
            Para más información sobre el tratamiento de sus datos, consulte nuestra{" "}
            <Link href="/privacidad" className="text-brand hover:underline font-medium">
              Política de Privacidad
            </Link>
            .
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
