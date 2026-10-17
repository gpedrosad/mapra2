import type { ReactNode } from "react";
import Link from "next/link";

const TOKEN = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;

const linkClass =
  "text-brand underline underline-offset-4 decoration-brand/40 hover:decoration-brand";

/** Texto con **negrita** y enlaces internos [etiqueta](/ruta). */
export default function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const re = new RegExp(TOKEN.source, "g");
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }

    if (match[2]) {
      nodes.push(
        <strong key={key} className="font-semibold text-ink">
          {match[2]}
        </strong>
      );
    } else {
      const label = match[3];
      const href = match[4];
      nodes.push(
        <Link key={key} href={href} className={linkClass}>
          {label}
        </Link>
      );
    }

    key += 1;
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return <>{nodes}</>;
}
