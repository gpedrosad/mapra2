"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";

type ManagedImageSection = {
  id: string;
  group: string;
  label: string;
  info?: string;
  previewUrl: string;
  isExtra?: boolean;
  publishedToGallery?: boolean;
};

type DraftState = Record<
  string,
  {
    info: string;
  }
>;

type GalleryDraft = {
  info: string;
};

const SESSION_KEY = "mapra-admin-clave";

function isCatalogGroup(group: string) {
  return group === "Galería" || group === "Cerámica gres";
}

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
  info: "óleo sobre tela",
};

const EMPTY_GRES_DRAFT: GalleryDraft = {
  info: "cerámica gres",
};

export default function ImageAdminClient() {
  const [clave, setClave] = useState("");
  const [activeKey, setActiveKey] = useState("");
  const [sections, setSections] = useState<ManagedImageSection[]>([]);
  const [drafts, setDrafts] = useState<DraftState>({});
  const [newGallery, setNewGallery] = useState<GalleryDraft>(EMPTY_GALLERY_DRAFT);
  const [newGres, setNewGres] = useState<GalleryDraft>(EMPTY_GRES_DRAFT);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [savingId, setSavingId] = useState("");

  function syncDrafts(nextSections: ManagedImageSection[]) {
    setDrafts(
      Object.fromEntries(
        nextSections.map((section) => [
          section.id,
          {
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

  function updateInfoDraft(sectionId: string, value: string) {
    setDrafts((current) => ({
      ...current,
      [sectionId]: {
        info: value,
      },
    }));
  }

  async function saveSection(sectionId: string) {
    const sectionMeta = sections.find((s) => s.id === sectionId);
    const draft =
      drafts[sectionId] ?? {
        info: sectionMeta?.info || "",
      };
    const isFixedCatalogSlot =
      isCatalogGroup(sectionMeta?.group || "") && !sectionMeta?.isExtra;

    if (isFixedCatalogSlot && !sectionMeta?.publishedToGallery) {
      setError("Sube una imagen en esta ranura antes de guardar los textos.");
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
      setMessage(`Texto actualizado: ${payload.section.label}.`);
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
      info?: string;
      mode?: "gallery-extra" | "gres-extra";
    }
  ) {
    setSavingId(
      options.sectionId ??
        (options.mode === "gres-extra" ? "__new_gres__" : "__new_gallery__")
    );
    setError("");
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("file", file);
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
      } else if (options.mode === "gres-extra") {
        appendSection(payload.section);
        setNewGres(EMPTY_GRES_DRAFT);
        setMessage(`Pieza agregada en ${payload.section.label}.`);
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
      info: newGallery.info,
    });
    event.target.value = "";
  }

  async function handleNewGresFile(event: ChangeEvent<HTMLInputElement>) {
    const nextFile = event.target.files?.[0];

    if (!nextFile) {
      return;
    }

    await uploadSectionFile(nextFile, {
      mode: "gres-extra",
      info: newGres.info,
    });
    event.target.value = "";
  }

  async function deleteGalleryEntry(sectionId: string, label: string) {
    const confirmed = window.confirm(
      `¿Eliminar «${label}»? Se borrará de la base de datos y dejará de mostrarse en la web.`
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
        section?: ManagedImageSection;
      };

      if (!response.ok || !payload.removed) {
        throw new Error(payload.error || "No se pudo eliminar la foto.");
      }

      if (payload.section) {
        replaceSection(payload.section);
      } else {
        removeSection(payload.removed.id);
      }

      setMessage(`Eliminado: ${payload.removed.label}.`);
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
    setNewGres(EMPTY_GRES_DRAFT);
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
                Sube o reemplaza archivos y edita textos; las imágenes se guardan en la
                nube automáticamente.
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
          Object.entries(groupedSections).map(([group, groupItems]) => {
            const gridItems =
              group === "Cerámica gres"
                ? groupItems.filter(
                    (s) => s.isExtra || Boolean(s.publishedToGallery)
                  )
                : groupItems;

            return (
            <section
              key={group}
              className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    {group}
                  </h2>
                  {isCatalogGroup(group) && (
                    <p className="mt-1 text-sm text-zinc-500">
                      Solo aparecen en la web las piezas guardadas en la base de datos.
                      Las nuevas entran solo subiendo un archivo.
                    </p>
                  )}
                </div>
              </div>

              {isCatalogGroup(group) && (
                <article className="mt-6 rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-5">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {group === "Galería"
                      ? "Agregar pintura nueva"
                      : "Agregar cerámica gres nueva"}
                  </h3>
                  <label className="mt-4 block text-sm text-zinc-700">
                    Texto bajo la imagen
                    <input
                      type="text"
                      value={group === "Galería" ? newGallery.info : newGres.info}
                      onChange={(event) =>
                        group === "Galería"
                          ? setNewGallery((current) => ({
                              ...current,
                              info: event.target.value,
                            }))
                          : setNewGres((current) => ({
                              ...current,
                              info: event.target.value,
                            }))
                      }
                      className="mt-1 w-full max-w-md rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
                    />
                  </label>

                  <div className="mt-4">
                    <label className="inline-flex cursor-pointer rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
                      {savingId ===
                      (group === "Galería" ? "__new_gallery__" : "__new_gres__")
                        ? "Subiendo..."
                        : "Elegir archivo y agregar"}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) =>
                          void (group === "Galería"
                            ? handleNewGalleryFile(event)
                            : handleNewGresFile(event))
                        }
                        disabled={
                          savingId ===
                          (group === "Galería" ? "__new_gallery__" : "__new_gres__")
                        }
                      />
                    </label>
                  </div>
                </article>
              )}

              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                {gridItems.map((section) => {
                  const draft = drafts[section.id] || {
                    info: section.info || "",
                  };
                  const isSaving = savingId === section.id;
                  const showInfoField = isCatalogGroup(section.group);
                  const isFixedCatalogSlot = showInfoField && !section.isExtra;
                  const showDeleteCatalog =
                    section.isExtra || (isFixedCatalogSlot && section.publishedToGallery);

                  return (
                    <article
                      key={section.id}
                      className={
                        isFixedCatalogSlot && !section.publishedToGallery
                          ? "rounded-3xl border border-dashed border-zinc-400 bg-zinc-50/90 p-4"
                          : "rounded-3xl border border-zinc-200 bg-zinc-50/70 p-4"
                      }
                    >
                      <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                          <div className="relative aspect-[4/3]">
                            {section.previewUrl ? (
                              <Image
                                src={section.previewUrl}
                                alt={section.label}
                                fill
                                className="object-cover"
                                sizes="220px"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-zinc-100 px-3 text-center text-xs leading-snug text-zinc-500">
                                Sin imagen en la web. Sube un archivo con «Subir y
                                reemplazar» para publicarla.
                              </div>
                            )}
                            {showDeleteCatalog && (
                              <button
                                type="button"
                                onClick={() =>
                                  void deleteGalleryEntry(section.id, section.label)
                                }
                                disabled={isSaving}
                                className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-red-200 bg-white/95 text-red-600 shadow-sm transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                                aria-label={`Eliminar ${section.label}`}
                                title="Eliminar de la base de datos"
                              >
                                <FiTrash2 className="h-5 w-5" aria-hidden />
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-semibold text-zinc-900">
                                {section.label}
                              </p>
                              {isFixedCatalogSlot && !section.publishedToGallery && (
                                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900">
                                  No está en la web
                                </span>
                              )}
                            </div>
                          </div>

                          {showInfoField && (
                            <label className="text-sm text-zinc-700">
                              Texto bajo la obra
                              <input
                                type="text"
                                value={draft.info}
                                disabled={isSaving}
                                onChange={(event) =>
                                  updateInfoDraft(section.id, event.target.value)
                                }
                                onBlur={() => {
                                  const prev = section.info || "";
                                  if (draft.info === prev) {
                                    return;
                                  }
                                  if (isFixedCatalogSlot && !section.publishedToGallery) {
                                    return;
                                  }
                                  void saveSection(section.id);
                                }}
                                className="mt-1 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-500 disabled:opacity-60"
                              />
                              <span className="mt-1 block text-xs text-zinc-500">
                                Se guarda solo al salir de este campo.
                              </span>
                            </label>
                          )}

                          <label className="cursor-pointer rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 sm:inline-flex sm:justify-center sm:self-start">
                            {isSaving ? "Subiendo..." : "Subir y reemplazar"}
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(event) => void handleFileChange(event, section.id)}
                              disabled={isSaving}
                            />
                          </label>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
            );
          })}
      </div>
    </main>
  );
}
