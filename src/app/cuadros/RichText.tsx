import Link from "next/link";
import type { ReactNode } from "react";

const LINK = /\{link:([^|}]+)\|([^}]+)\}/g;

export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));

    const href = match[1];
    const label = match[2];
    const external = href.startsWith("http");

    parts.push(
      <Link
        key={`${href}-${key++}`}
        href={href}
        className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {label}
      </Link>
    );
    last = index + match[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
