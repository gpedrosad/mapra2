import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideShell from "../components/GuideShell";
import { GUIDES, getGuide, guideMetadata } from "../lib/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return guideMetadata(guide);
}

export default async function GuiaPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideShell guide={guide} />;
}
