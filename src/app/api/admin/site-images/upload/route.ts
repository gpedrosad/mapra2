import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import {
  createManagedGalleryExtra,
  updateManagedImageSection,
} from "@/lib/managed-image-store";

function isAuthorized(request: NextRequest) {
  const requestKey =
    request.headers.get("x-admin-key") ||
    request.nextUrl.searchParams.get("clave") ||
    "";

  return Boolean(process.env.CLAVE) && requestKey === process.env.CLAVE;
}

function signCloudinaryParams(
  params: Record<string, string>,
  apiSecret: string
) {
  const toSign = Object.entries(params)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return createHash("sha1")
    .update(`${toSign}${apiSecret}`)
    .digest("hex");
}

function sanitizeSectionId(sectionId: string) {
  return sectionId.toLowerCase().replace(/[^a-z0-9_-]+/g, "-");
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const formData = await request.formData();
  const mode = formData.get("mode");
  const sectionId = formData.get("sectionId");
  const alt = formData.get("alt");
  const info = formData.get("info");
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "Debes seleccionar una imagen." },
      { status: 400 }
    );
  }

  const cloudName =
    process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      { error: "Faltan credenciales de Cloudinary en el servidor." },
      { status: 500 }
    );
  }

  const timestamp = `${Math.floor(Date.now() / 1000)}`;
  const uploadTargetId = typeof sectionId === "string" ? sectionId : "gallery-extra";
  const publicId = `mapra/managed/${sanitizeSectionId(uploadTargetId)}-${Date.now()}`;
  const signature = signCloudinaryParams(
    {
      public_id: publicId,
      timestamp,
    },
    apiSecret
  );

  const uploadForm = new FormData();
  uploadForm.append("file", file);
  uploadForm.append("api_key", apiKey);
  uploadForm.append("timestamp", timestamp);
  uploadForm.append("public_id", publicId);
  uploadForm.append("signature", signature);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: uploadForm,
    }
  );

  if (!response.ok) {
    const payload = await response.text();
    return NextResponse.json(
      { error: `Cloudinary rechazó la subida: ${payload}` },
      { status: 400 }
    );
  }

  const payload = (await response.json()) as { public_id?: string };

  if (!payload.public_id) {
    return NextResponse.json(
      { error: "Cloudinary no devolvió un public_id válido." },
      { status: 400 }
    );
  }

  try {
    const section =
      mode === "gallery-extra"
        ? await createManagedGalleryExtra({
            publicId: payload.public_id,
            alt: typeof alt === "string" ? alt : undefined,
            info: typeof info === "string" ? info : undefined,
          })
        : typeof sectionId === "string"
          ? await updateManagedImageSection(sectionId, {
              publicId: payload.public_id,
              alt: typeof alt === "string" ? alt : undefined,
              info: typeof info === "string" ? info : undefined,
            })
          : null;

    if (!section) {
      return NextResponse.json(
        { error: "Debes indicar la sección que quieres reemplazar." },
        { status: 400 }
      );
    }

    return NextResponse.json({ section });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No se pudo guardar la imagen.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
