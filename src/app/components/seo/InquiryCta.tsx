import WhatsAppButton from "../WhatsAppButton";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

type InquiryCtaProps = {
  heading: string;
  text: string;
  whatsappText: string;
  whatsappLabel?: string;
};

export default function InquiryCta({
  heading,
  text,
  whatsappText,
  whatsappLabel = "Consultar por WhatsApp",
}: InquiryCtaProps) {
  return (
    <div className="bg-brand text-white rounded-xl p-8 my-10 text-center">
      <h2 className="font-display text-2xl font-medium mb-4">{heading}</h2>
      <p className="mb-6 text-white/90 leading-relaxed">{text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <WhatsAppButton
          phone={CONTACT_PHONE}
          text={whatsappText}
          label={whatsappLabel}
          size="lg"
        />
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center justify-center bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-cream transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  );
}
