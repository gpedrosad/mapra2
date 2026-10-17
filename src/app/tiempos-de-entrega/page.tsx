import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import { pageMetadata } from "@/lib/metadata";
import Breadcrumbs from "../components/seo/Breadcrumbs";

export const metadata: Metadata = pageMetadata({
  title: 'Tiempos de entrega | Marcela Pedrosa',
  description:
    'Plazos de entrega de obras originales y cerámica gres en el Biobío, otras regiones y al extranjero.',
  path: '/tiempos-de-entrega',
  ogImageKey: 'bosque',
  imageAlt: 'Tiempos de entrega de obras de Marcela Pedrosa',
});

export default function TiemposEntregaPage() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs items={[{ name: "Tiempos de entrega", path: "/tiempos-de-entrega" }]} />
          
        <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink mb-8">
          Tiempos de Entrega
        </h1>

        <div className="space-y-6">
          <p className="text-ink-body leading-relaxed">
            Tiempo de entrega para obras sin enmarcado o cerámica gres: 48 horas en la Región del
            BioBio y de 3 a 5 días hábiles a otras regiones.
          </p>

          <p className="text-ink-body leading-relaxed">
            Tiempo de entrega para obras con enmarcado: 5 a 7 días hábiles en la Región del BioBio y
            10 días hábiles a otras regiones, 40 días América Latina, EEUU y Europa.
          </p>
        </div>

        <div className="mt-8 p-4 bg-surface rounded-lg border-l-4 border-brand">
          <p className="text-sm text-ink-body leading-relaxed">
            <strong className="text-ink">Nota:</strong> Los plazos pueden variar por disponibilidad
            de enmarcado, distancia y operador logístico. Te notificaremos cualquier cambio.
          </p>
        </div>

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
