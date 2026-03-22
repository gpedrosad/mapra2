import { NextRequest, NextResponse } from "next/server";
import {
  createManagedGalleryExtra,
  deleteManagedGalleryExtra,
  listAdminManagedImageSections,
  updateManagedImageSection,
} from "@/lib/managed-image-store";

function isAuthorized(request: NextRequest) {
  const requestKey =
    request.headers.get("x-admin-key") ||
    request.nextUrl.searchParams.get("clave") ||
    "";

  return Boolean(process.env.CLAVE) && requestKey === process.env.CLAVE;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const sections = await listAdminManagedImageSections();
  return NextResponse.json({ sections });
}

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const body = (await request.json()) as {
    sectionId?: string;
    publicId?: string;
    alt?: string;
    info?: string;
  };

  if (!body.sectionId || !body.publicId?.trim()) {
    return NextResponse.json(
      { error: "Faltan datos para actualizar la imagen." },
      { status: 400 }
    );
  }

  try {
    const section = await updateManagedImageSection(body.sectionId, {
      publicId: body.publicId,
      alt: body.alt,
      info: body.info,
    });

    return NextResponse.json({ section });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No se pudo actualizar la imagen.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const body = (await request.json()) as {
    kind?: string;
    publicId?: string;
    alt?: string;
    info?: string;
  };

  if (body.kind !== "gallery-extra" || !body.publicId?.trim()) {
    return NextResponse.json(
      { error: "Faltan datos para agregar una foto nueva." },
      { status: 400 }
    );
  }

  try {
    const section = await createManagedGalleryExtra({
      publicId: body.publicId,
      alt: body.alt,
      info: body.info,
    });

    return NextResponse.json({ section });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No se pudo agregar la foto.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const body = (await request.json()) as {
    sectionId?: string;
  };

  if (!body.sectionId) {
    return NextResponse.json(
      { error: "Debes indicar la foto que quieres eliminar." },
      { status: 400 }
    );
  }

  try {
    const removed = await deleteManagedGalleryExtra(body.sectionId);
    return NextResponse.json({ removed });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No se pudo eliminar la foto.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
