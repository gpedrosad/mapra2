"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";

type ManagedImageSection = {
  id: string;
  group: string;
  label: string;
  publicId: string;
  alt: string;
  info?: string;
  previewUrl: string;
  isExtra?: boolean;
};

type DraftState = Record<
  string,
  {
    publicId: string;
    alt: string;
    info: string;
  }
>;

type GalleryDraft = {
  publicId: string;
  alt: string;
  info: string;
};

const SESSION_KEY = "mapra-admin-clave";

function groupSections(sections: ManagedImageSection[]) {
  return sections.reduce<Record<string, ManagedImageSection[]>>((acc, section) => {
    if (!acc[section.group]) {
      acc[section.group] = [];
    }

    acc[section.group].push(section);
    return acc;
  }, {});
}

const EMPTY_GALLERY_DRAFT: GalleryDraft = {
  publicId: "",
  alt: "",
  info: "óleo sobre tela",
};

export default function ImageAdminClient() {
  const [clave, setClave] = useState("");
  const [activeKey, setActiveKey] = useState("");
  const [sections, setSections] = useState<ManagedImageSection[]>([]);
  const [drafts, setDrafts] = useState<DraftState>({});
  const [newGallery, setNewGallery] = useState<GalleryDraft>(EMPTY_GALLERY_DRAFT);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [savingId, setSavingId] = useState("");
  const [isAddingGallery, setIsAddingGallery] = useState(false);

  function syncDrafts(nextSections: ManagedImageSection[]) {
    setDrafts(
      Object.fromEntries(
        nextSections.map((section) => [
          section.id,
          {
            publicId: section.publicId,
            alt: section.alt,
            info: section.info || "",
          },
        ])
      )
    );
  }

  function appendSection(nextSection: ManagedImageSection) {
    setSections((current) => [...current, nextSection]);
    setDrafts((current) => ({
      ...current,
      [nextSection.id]: {
        publicId: nextSection.publicId,
        alt: nextSection.alt,
        info: nextSection.info || "",
      },
    }));
  }

  function replaceSection(nextSection: ManagedImageSection) {
    setSections((current) =>
      current.map((section) =>
        section.id === nextSection.id ? nextSection : section
      )
    );
    setDrafts((current) => ({
      ...current,
      [nextSection.id]: {
        publicId: nextSection.publicId,
        alt: nextSection.alt,
        info: nextSection.info || "",
      },
    }));
  }

  function removeSection(sectionId: string) {
    setSections((current) => current.filter((section) => section.id !== sectionId));
    setDrafts((current) => {
      const nextDrafts = { ...current };
      delete nextDrafts[sectionId];
      return nextDrafts;
    });
  }

  async function loadSections(key: string) {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/site-images", {
        headers: {
          "x-admin-key": key,
        },
      });

      const payload = (await response.json()) as {
        error?: string;
        sections?: ManagedImageSection[];
      };

      if (!response.ok || !payload.sections) {
        throw new Error(payload.error || "No se pudieron cargar las secciones.");
      }

      setSections(payload.sections);
      syncDrafts(payload.sections);
      setActiveKey(key);
      setMessage("Panel cargado correctamente.");
      window.sessionStorage.setItem(SESSION_KEY, key);
    } catch (loadError) {
      const nextError =
        loadError instanceof Error ? loadError.message : "No se pudo validar la clave.";
      setError(nextError);
      setSections([]);
      setActiveKey("");
      window.sessionStorage.removeItem(SESSION_KEY);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const savedKey = window.sessionStorage.getItem(SESSION_KEY);

    if (savedKey) {
      setClave(savedKey);
      void loadSections(savedKey);
    }
    // Solo restauramos la sesión guardada una vez al montar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    await loadSections(clave);
  }

  function updateDraft(
    sectionId: string,
    field: "publicId" | "alt" | "info",
    value: string
  ) {
    setDrafts((current) => ({
      ...current,
      [sectionId]: {
        publicId: current[sectionId]?.publicId || "",
        alt: current[sectionId]?.alt || "",
        info: current[sectionId]?.info || "",
        [field]: value,
      },
    }));
  }

  async function saveSection(sectionId: string) {
    const draft = drafts[sectionId];

    if (!draft?.publicId.trim()) {
      setError("Debes indicar un public ID antes de guardar.");
      return;
    }

    setSavingId(sectionId);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/admin/site-images", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": activeKey,
        },
        body: JSON.stringify({
          sectionId,
          publicId: draft.publicId,
          alt: draft.alt,
          info: draft.info,
        }),
      });

      const payload = (await response.json()) as {
        error?: string;
        section?: ManagedImageSection;
      };

      if (!response.ok || !payload.section) {
        throw new Error(payload.error || "No se pudo guardar la imagen.");
      }

      replaceSection(payload.section);
      setMessage(`Imagen actualizada en ${payload.section.label}.`);
    } catch (saveError) {
      const nextError =
        saveError instanceof Error ? saveError.message : "No se pudo guardar la imagen.";
      setError(nextError);
    } finally {
      setSavingId("");
    }
  }

  async function uploadSectionFile(
    file: File,
    options: {
      sectionId?: string;
      alt?: string;
      info?: string;
      mode?: "gallery-extra";
    }
  ) {
    setSavingId(options.sectionId || "__new_gallery__");
    setError("");
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("alt", options.alt || "");
      formData.append("info", options.info || "");

      if (options.sectionId) {
        formData.append("sectionId", options.sectionId);
      }

      if (options.mode) {
        formData.append("mode", options.mode);
      }

      const response = await fetch("/api/admin/site-images/upload", {
        method: "POST",
        headers: {
          "x-admin-key": activeKey,
        },
        body: formData,
      });

      const payload = (await response.json()) as {
        error?: string;
        section?: ManagedImageSection;
      };

      if (!response.ok || !payload.section) {
        throw new Error(payload.error || "No se pudo subir la imagen.");
      }

      if (options.mode === "gallery-extra") {
        appendSection(payload.section);
        setNewGallery(EMPTY_GALLERY_DRAFT);
        setMessage(`Foto agregada en ${payload.section.label}.`);
      } else {
        replaceSection(payload.section);
        setMessage(`Imagen subida y guardada en ${payload.section.label}.`);
      }
    } catch (uploadError) {
      const nextError =
        uploadError instanceof Error ? uploadError.message : "No se pudo subir la imagen.";
      setError(nextError);
    } finally {
      setSavingId("");
    }
  }

  async function handleFileChange(
    event: ChangeEvent<HTMLInputElement>,
    sectionId: string
  ) {
    const nextFile = event.target.files?.[0];

    if (!nextFile) {
      return;
    }

    const draft = drafts[sectionId];
    await uploadSectionFile(nextFile, {
      sectionId,
      alt: draft?.alt,
      info: draft?.info,
    });
    event.target.value = "";
  }

  async function handleNewGalleryFile(event: ChangeEvent<HTMLInputElement>) {
    const nextFile = event.target.files?.[0];

    if (!nextFile) {
      return;
    }

    await uploadSectionFile(nextFile, {
      mode: "gallery-extra",
      alt: newGallery.alt,
      info: newGallery.info,
    });
    event.target.value = "";
  }

  async function addGalleryByPublicId() {
    if (!newGallery.publicId.trim()) {
      setError("Debes escribir un public ID para agregar una nueva foto.");
      return;
    }

    setIsAddingGallery(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/admin/site-images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": activeKey,
        },
        body: JSON.stringify({
          kind: "gallery-extra",
          publicId: newGallery.publicId,
          alt: newGallery.alt,
          info: newGallery.info,
        }),
      });

      const payload = (await response.json()) as {
        error?: string;
        section?: ManagedImageSection;
      };

      if (!response.ok || !payload.section) {
        throw new Error(payload.error || "No se pudo agregar la foto.");
      }

      appendSection(payload.section);
      setNewGallery(EMPTY_GALLERY_DRAFT);
      setMessage(`Foto agregada en ${payload.section.label}.`);
    } catch (addError) {
      const nextError =
        addError instanceof Error ? addError.message : "No se pudo agregar la foto.";
      setError(nextError);
    } finally {
      setIsAddingGallery(false);
    }
  }

  async function deleteGalleryExtra(sectionId: string) {
    const confirmed = window.confirm(
      "Esta foto extra se quitará de la galería. ¿Quieres continuar?"
    );

    if (!confirmed) {
      return;
    }

    setSavingId(sectionId);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/admin/site-images", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": activeKey,
        },
        body: JSON.stringify({
          sectionId,
        }),
      });

      const payload = (await response.json()) as {
        error?: string;
        removed?: {
          id: string;
          label: string;
        };
      };

      if (!response.ok || !payload.removed) {
        throw new Error(payload.error || "No se pudo eliminar la foto.");
      }

      removeSection(payload.removed.id);
      setMessage(`Foto eliminada de ${payload.removed.label}.`);
    } catch (deleteError) {
      const nextError =
        deleteError instanceof Error ? deleteError.message : "No se pudo eliminar la foto.";
      setError(nextError);
    } finally {
      setSavingId("");
    }
  }

  function handleLogout() {
    window.sessionStorage.removeItem(SESSION_KEY);
    setActiveKey("");
    setSections([]);
    setDrafts({});
    setClave("");
    setMessage("");
    setError("");
    setNewGallery(EMPTY_GALLERY_DRAFT);
  }

  const groupedSections = groupSections(sections);

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Administración
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
                Gestor de imágenes
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-zinc-600">
                Aquí puedes reemplazar imágenes existentes y agregar nuevas fotos a
                la galería sin tocar el código del sitio.
              </p>
            </div>

            {activeKey && (
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
              >
                Cerrar panel
              </button>
            )}
          </div>
        </header>

        {!activeKey && (
          <section className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <form className="flex flex-col gap-4 sm:max-w-md" onSubmit={handleLogin}>
              <label className="text-sm font-medium text-zinc-700" htmlFor="clave-admin">
                Clave del panel
              </label>
              <input
                id="clave-admin"
                type="password"
                value={clave}
                onChange={(event) => setClave(event.target.value)}
                placeholder="Ingresa la clave"
                className="rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
              />
              <button
                type="submit"
                disabled={!clave.trim() || isLoading}
                className="rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Validando..." : "Entrar"}
              </button>
            </form>
          </section>
        )}

        {error && (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {message && (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {message}
          </p>
        )}

        {activeKey &&
          Object.entries(groupedSections).map(([group, groupItems]) => (
            <section
              key={group}
              className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    {group}
                  </h2>
                  {group === "Galería" && (
                    <p className="mt-1 text-sm text-zinc-500">
                      Puedes reemplazar las fotos actuales o agregar nuevas al final
                      de la galería.
                    </p>
                  )}
                </div>
              </div>

              {group === "Galería" && (
                <article className="mt-6 rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-5">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Agregar foto nueva
                  </h3>
                  <div className="mt-4 grid gap-4 lg:grid-cols-3">
                    <label className="text-sm text-zinc-700">
                      Public ID de Cloudinary
                      <input
                        type="text"
                        value={newGallery.publicId}
                        onChange={(event) =>
                          setNewGallery((current) => ({
                            ...current,
                            publicId: event.target.value,
                          }))
                        }
                        className="mt-1 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
                      />
                    </label>

                    <label className="text-sm text-zinc-700">
                      Texto alternativo
                      <input
                        type="text"
                        value={newGallery.alt}
                        onChange={(event) =>
                          setNewGallery((current) => ({
                            ...current,
                            alt: event.target.value,
                          }))
                        }
                        className="mt-1 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
                      />
                    </label>

                    <label className="text-sm text-zinc-700">
                      Texto bajo la obra
                      <input
                        type="text"
                        value={newGallery.info}
                        onChange={(event) =>
                          setNewGallery((current) => ({
                            ...current,
                            info: event.target.value,
                          }))
                        }
                        className="mt-1 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
                      />
                    </label>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => void addGalleryByPublicId()}
                      disabled={isAddingGallery || savingId === "__new_gallery__"}
                      className="rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isAddingGallery ? "Agregando..." : "Agregar con public ID"}
                    </button>

                    <label className="cursor-pointer rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
                      {savingId === "__new_gallery__" ? "Subiendo..." : "Subir y agregar"}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => void handleNewGalleryFile(event)}
                        disabled={savingId === "__new_gallery__"}
                      />
                    </label>
                  </div>
                </article>
              )}

              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                {groupItems.map((section) => {
                  const draft = drafts[section.id] || {
                    publicId: section.publicId,
                    alt: section.alt,
                    info: section.info || "",
                  };
                  const isSaving = savingId === section.id;
                  const showInfoField = section.group === "Galería";

                  return (
                    <article
                      key={section.id}
                      className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-4"
                    >
                      <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={section.previewUrl}
                              alt={draft.alt || section.alt}
                              fill
                              className="object-cover"
                              sizes="220px"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <div>
                            <p className="text-sm font-semibold text-zinc-900">
                              {section.label}
                            </p>
                            <p className="mt-1 text-xs text-zinc-500">{section.id}</p>
                          </div>

                          <label className="text-sm text-zinc-700">
                            Public ID de Cloudinary
                            <input
                              type="text"
                              value={draft.publicId}
                              onChange={(event) =>
                                updateDraft(section.id, "publicId", event.target.value)
                              }
                              className="mt-1 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
                            />
                          </label>

                          <label className="text-sm text-zinc-700">
                            Texto alternativo
                            <input
                              type="text"
                              value={draft.alt}
                              onChange={(event) =>
                                updateDraft(section.id, "alt", event.target.value)
                              }
                              className="mt-1 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
                            />
                          </label>

                          {showInfoField && (
                            <label className="text-sm text-zinc-700">
                              Texto bajo la obra
                              <input
                                type="text"
                                value={draft.info}
                                onChange={(event) =>
                                  updateDraft(section.id, "info", event.target.value)
                                }
                                className="mt-1 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
                              />
                            </label>
                          )}

                          <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                              type="button"
                              onClick={() => void saveSection(section.id)}
                              disabled={isSaving}
                              className="rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              {isSaving ? "Guardando..." : "Guardar cambios"}
                            </button>

                            <label className="cursor-pointer rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
                              {isSaving ? "Subiendo..." : "Subir y reemplazar"}
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(event) => void handleFileChange(event, section.id)}
                                disabled={isSaving}
                              />
                            </label>

                            {section.isExtra && (
                              <button
                                type="button"
                                onClick={() => void deleteGalleryExtra(section.id)}
                                disabled={isSaving}
                                className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                {isSaving ? "Procesando..." : "Eliminar"}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
      </div>
    </main>
  );
}
