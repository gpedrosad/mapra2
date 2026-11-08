import type { SiteImageKey } from "@/lib/cloudinary";

export type Block =
  | { type: "p"; text: string; lead?: boolean }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type Guide = {
  slug: string;
  title: string;
  /** H1 visible si debe quedar distinto del title del documento. */
  h1?: string;
  description: string;
  /** Meta description si debe quedar distinta del texto del índice. */
  metaDescription?: string;
  imageKey: SiteImageKey;
  imageAlt: string;
  ctaTitle: string;
  ctaBody: string;
  whatsappText: string;
  consultaIntro: string;
  /** ISO si esta guía no comparte la fecha del lote de octubre. */
  published?: string;
  modified?: string;
  blocks: Block[];
};
