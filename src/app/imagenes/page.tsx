import type { Metadata } from "next";
import ImageAdminClient from "./ImageAdminClient";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: 'Imágenes del sitio | Marcela Pedrosa',
  description:
    'Panel interno para administrar las imágenes del sitio de Marcela Pedrosa.',
  path: '/imagenes',
  ogImageKey: 'bosque',
  imageAlt: 'Administración de imágenes',
  noIndex: true,
});

export default function ImagenesPage() {
  return <ImageAdminClient />;
}
