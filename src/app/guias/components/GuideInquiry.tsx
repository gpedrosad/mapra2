import Link from "next/link";
import WhatsAppButton from "../../components/WhatsAppButton";

const EMAIL = "contacto@marcelapedrosa.com";
const PHONE = "+56 9 5618 9912";

export default function GuideInquiry({
  title,
  body,
  whatsappText,
  trackingId,
}: {
  title: string;
  body: string;
  whatsappText: string;
  trackingId: string;
}) {
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Consulta desde las guías")}`;

  return (
    <section
      aria-labelledby="guia-consulta"
      className="mt-14 rounded-xl bg-brand text-white px-6 py-8 sm:px-8 sm:py-10"
    >
      <h2
        id="guia-consulta"
        className="font-display text-2xl sm:text-3xl font-medium tracking-tight"
      >
        {title}
      </h2>
      <p className="mt-3 text-white/90 leading-relaxed max-w-2xl">{body}</p>
      <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:items-center">
        <WhatsAppButton
          phone={PHONE}
          text={whatsappText}
          label="Escribir por WhatsApp"
          size="lg"
          trackingId={trackingId}
        />
        <a
          href={mailto}
          className="inline-flex items-center justify-center rounded-xl bg-white text-brand px-5 py-2.5 text-base font-medium hover:bg-cream transition-colors"
        >
          {EMAIL}
        </a>
      </div>
      <p className="mt-5 text-sm text-white/85 leading-relaxed">
        Si prefieres dejar el mensaje por escrito, usa el{" "}
        <Link
          href="/contacto"
          className="underline underline-offset-4 decoration-white/50 hover:decoration-white"
        >
          formulario de contacto
        </Link>
        . El número de WhatsApp del taller es {PHONE}.
      </p>
    </section>
  );
}
