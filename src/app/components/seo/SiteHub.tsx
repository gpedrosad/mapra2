import Link from "next/link";
import { listCatalogArtworks } from "@/lib/artworks";

const CLUSTERS = [
  {
    title: "La artista",
    links: [
      { href: "/marcela-pedrosa", label: "Marcela Pedrosa" },
      { href: "/pintora-concepcion", label: "Pintora en Concepción" },
      { href: "/artista-visual-biobio", label: "Artista visual del Biobío" },
      { href: "/pintoras-chilenas", label: "Pintoras chilenas" },
      { href: "/mujeres-artistas-chilenas", label: "Mujeres artistas chilenas" },
    ],
  },
  {
    title: "Concepción",
    links: [
      { href: "/arte-concepcion", label: "Arte en Concepción" },
      { href: "/galeria-arte-concepcion", label: "Galería de arte" },
      { href: "/taller-arte-concepcion", label: "Taller de arte" },
      { href: "/pintura-fachadas-concepcion", label: "Fachadas y bosques" },
      { href: "/ceramica-artistica-concepcion", label: "Cerámica artística" },
    ],
  },
  {
    title: "Comprar",
    links: [
      { href: "/comprar-cuadros-al-oleo-chile", label: "Cuadros al óleo en Chile" },
      { href: "/comprar-pintura-concepcion", label: "Comprar en Concepción" },
      { href: "/pinturas", label: "Pinturas originales a la venta" },
      { href: "/cuadros-para-living", label: "Cuadros para el living" },
      { href: "/encargos-pintura", label: "Encargar una pintura" },
      { href: "/tiempos-de-entrega", label: "Tiempos de entrega" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    title: "Técnica",
    links: [
      { href: "/oleo-sobre-tela-chile", label: "Óleo sobre tela" },
      { href: "/impresionismo-figurativo-chile", label: "Impresionismo figurativo" },
      { href: "/esculturas", label: "Cerámica gres" },
      { href: "/prensa", label: "Prensa" },
    ],
  },
] as const;

export default async function SiteHub() {
  const works = await listCatalogArtworks();

  return (
    <section aria-label="Explorar el sitio" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="font-display text-2xl font-medium text-ink mb-6">
          Explorar el sitio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLUSTERS.map((cluster) => (
            <div key={cluster.title}>
              <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-ink-subtle mb-3">
                {cluster.title}
              </h3>
              <ul className="space-y-2">
                {cluster.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-body hover:text-brand underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {works.length > 0 && (
          <div className="mt-8 pt-6 border-t border-line">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-ink-subtle mb-3">
              Obras
            </h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {works.map((work) => (
                <li key={work.slug}>
                  <Link
                    href={`/pinturas/${work.slug}`}
                    className="text-sm text-ink-body hover:text-brand underline-offset-4 hover:underline"
                  >
                    {work.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
