import type { SiteImageKey } from "@/lib/cloudinary";

export type Block =
  | { type: "p"; text: string; lead?: boolean }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  imageKey: SiteImageKey;
  imageAlt: string;
  ctaTitle: string;
  ctaBody: string;
  whatsappText: string;
  blocks: Block[];
};
