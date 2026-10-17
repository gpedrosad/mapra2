import Image from "next/image";
import type { SiteImageKey } from "@/lib/cloudinary";
import { getManagedImageSection } from "@/lib/managed-image-store";
import { resolveArtworkImage } from "@/lib/seo-artworks";

type SeoManagedHeroProps = {
  sectionId: string;
  fallbackKey: SiteImageKey;
};

/** Imagen de obra en páginas que no están en el menú: alt descriptivo y medidas reales. */
export async function SeoManagedHero({ sectionId, fallbackKey }: SeoManagedHeroProps) {
  const section = await getManagedImageSection(sectionId);
  const image = resolveArtworkImage(section?.publicId, fallbackKey, section?.alt);

  if (!image.src) return null;

  return (
    <figure className="mb-12 flex justify-center">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 896px) 896px, 100vw"
        className="h-auto max-h-[36rem] w-auto max-w-full"
        priority
      />
    </figure>
  );
}
