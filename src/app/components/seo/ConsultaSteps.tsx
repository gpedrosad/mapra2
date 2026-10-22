import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

/**
 * Cómo consultar una obra, con los canales que ya usa el sitio.
 * Solo en páginas SEO: no entra al menú ni al home.
 */
export default function ConsultaSteps({
  heading = "Cómo consultar una obra",
  intro,
}: {
  heading?: string;
  intro: string;
}) {
  return (
    <>
      <h2 className="text-3xl font-semibold text-ink mt-10 mb-6">{heading}</h2>
      <p className="text-ink-body leading-relaxed mb-6">{intro}</p>
      <div className="bg-surface rounded-xl p-6 mb-8">
        <ol className="space-y-3 text-ink-body list-decimal list-inside">
          <li>
            Elige la obra en la{" "}
            <Link href="/pinturas" className="text-brand underline">
              galería de pinturas
            </Link>{" "}
            o en las fichas de esta página. Si el catálogo trae la medida, la
            ficha la muestra.
          </li>
          <li>
            Consulta por WhatsApp al {CONTACT_PHONE} o por correo a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline">
              {CONTACT_EMAIL}
            </a>
            . Nombra la obra. El valor se acuerda en esa conversación y no está
            en la ficha.
          </li>
          <li>
            Coordina el retiro en Concepción o el envío en la misma
            conversación. Los plazos publicados están en{" "}
            <Link href="/tiempos-de-entrega" className="text-brand underline">
              tiempos de entrega
            </Link>
            . Los cambios y la devolución, en{" "}
            <Link href="/devoluciones" className="text-brand underline">
              devoluciones
            </Link>
            .
          </li>
        </ol>
      </div>
    </>
  );
}
