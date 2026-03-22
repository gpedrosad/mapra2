import { NextRequest, NextResponse } from "next/server";
import {
  deleteManagedGalleryEntry,
  listAdminManagedImageSections,
  toManagedImageSectionAdminJson,
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
  return NextResponse.json({
    sections: sections.map(toManagedImageSectionAdminJson),
  });
}

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const body = (await request.json()) as {
    sectionId?: string;
    publicId?: string;
    info?: string;
  };

  if (!body.sectionId) {
    return NextResponse.json(
      { error: "Falta identificar la sección a actualizar." },
      { status: 400 }
    );
  }

  try {
    const section = await updateManagedImageSection(body.sectionId, {
      publicId: body.publicId,
      info: body.info,
    });

    return NextResponse.json({ section: toManagedImageSectionAdminJson(section) });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No se pudo actualizar la imagen.";

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
    const result = await deleteManagedGalleryEntry(body.sectionId);

    if (result.kind === "fixed") {
      return NextResponse.json({
        removed: result.removed,
        section: toManagedImageSectionAdminJson(result.section),
      });
    }

    return NextResponse.json({ removed: result.removed });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No se pudo eliminar la foto.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
