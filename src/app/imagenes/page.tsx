import type { Metadata } from "next";
import ImageAdminClient from "./ImageAdminClient";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function ImagenesPage() {
  return <ImageAdminClient />;
}
