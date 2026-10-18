# Log self-learn (append-only)

Formato: `YYYY-MM-DD | tema | hecho | acción/implicación`

---

## 2026-08-23

- GSC | Conexión OAuth local igual que katia: symlink `.secrets`, `.env.local`, scripts `gsc:*`, `lib/gsc.ts` | Doc `docs/gsc-oauth-setup.md`
- GSC | Propiedad `sc-domain:mpedrosa.studio` ya visible con el Gmail de GSC compartido | `npm run gsc:report` OK
- GSC | 28d: 0 clics / 7 imp / CTR 0% | Casi sin tráfico orgánico
- GSC | Eliminado sitemap inválido `https://mpedrosa.studio/sitemap.ts`; reenviado solo `/sitemap.xml` | Token write renovado (scope `webmasters`)
- Ads | Ninguna cuenta Ads del MCP apunta a mpedrosa.studio | “Nadie entra por Google” ≠ fallo de Ads (no hay Ads)
- Index | `site:mpedrosa.studio` ~7 URLs; `/pintora-concepcion` sin resultados | Landings SEO no indexadas / no visibles
- Clarity | MCP conectado a agendapp, 0 sesiones mpedrosa | No usar Clarity actual para este sitio
- SEO técnico | Pack sin tocar copy: Product JSON-LD, ItemList pinturas, interlinking, noindex `/imagenes`, H1 contacto, canonicals legales, bots IA en robots | Deploy previo / working tree
- Self-learn | Carpeta `docs/ai-self-learn` + regla `.cursor/rules/ai-self-learn.mdc` | Leer INDEX antes de GSC/SEO/Google
- SEO | Gap audit: prod sin hubs enlazados; pack local sin deploy; 0 clics GSC; landings no en site: | Prioridad deploy → indexing → sameAs → analytics → copy/off-page con clienta
- TS | tsserver OOM (~2.8GB) por `lib/gsc.ts` → `googleapis` (194MB tipos) | Eliminado `lib/gsc.ts`; tsconfig solo `src/`; exclude scripts/lib/.agents; `.vscode` maxTsServerMemory 3072
- SEO | Instagram `https://www.instagram.com/mpedrosaartista/` en `site.ts` + sameAs + hero/footer | También `.env.local` / `.env.example`

## 2026-10-17

- GSC | 90 días: 6 clics, 221 impresiones, posición 9.0 | Cifras dadas para el lote 1; no se reconsultó la API
- GSC | `/pintoras-chilenas`: 156 imp, pos 7.6, CTR 1.9%. Queries: pintoras chilenas, pintoras chilenas actuales, pintoras chilenas famosas, artistas chilenas mujeres pintoras | Title y meta reescritos dentro de 60/155
- GSC | `/mujeres-artistas-chilenas` pos 13.9 | Enlace de ida y vuelta con `/pintoras-chilenas`
- GSC | `/pinturas` pos 3.9, 0 clics | Title y meta más concretos (obra, medidas, disponibilidad)
- GSC | `/oleo-sobre-tela-chile` pos 11 y `/impresionismo-figurativo-chile` pos 17.8 | Refuerzo breve con hechos ya del sitio y enlaces desde páginas interiores
- SEO | Home, `/ads` y `/sitelink` no se tocaron en el lote 1 | Sin contenido nuevo en la portada
- SEO | Lote 2: fichas `/pinturas/c1`…`c15` y `/pinturas/elefante` (c3 es Elefante, mismo public id que la oferta del mes). Sin precio en la ficha | Elefante ya tiene precio solo en la oferta del inicio
- SEO | Intención nueva: `/comprar-cuadros-al-oleo-chile` (envío nacional, plazos de `/tiempos-de-entrega`) y `/cuadros-para-living` (solo obras con medidas en el catálogo) | No se inventan clientes ni unidad de medida
- SEO | Merge: pinturas originales → `/pinturas`; encargar → `/encargos-pintura`. Redirects permanentes desde `/pinturas-originales`, `/pinturas-originales-a-la-venta` y `/encargar-una-pintura` | Evita canibalizar `/comprar-pintura-concepcion`
- SEO | No hay Organization/LocalBusiness: el repo tiene persona, comuna, teléfono y correo, sin razón social ni calle | Se mantiene Person + VisualArtist
- SEO | Home del lote 2: solo title/description/canonical/OG/Twitter. Sin contenido visible nuevo | `/ads` y `/sitelink` no existen en el repo y no se crearon
- SEO | Regla estricta de la dueña (2026-10-17): no modificar ninguna página del menú (`NAV_ITEMS`), ni contenido, ni enlaces, ni layout, ni metadatos. Esos archivos quedan como en `main`: `/`, `/pinturas`, `/esculturas`, `/marcela-pedrosa`, `/pintora-concepcion`, `/prensa`, `/tiempos-de-entrega`, `/privacidad`, `/devoluciones`, `/contacto`. También `layout.tsx`, `ArtCard` y `Prensa`, porque cambian esas páginas | El hub y las fichas viven solo en páginas que no están en el menú
- SEO | Lote guías: `/guias` + 6 artículos (living, óleo vs acrílico, cuidado del óleo, impresionismo figurativo, encargos, factores de precio sin cifras) | Archivos nuevos bajo `src/app/guias/`. Sitemap y footer sin cambios a propósito. `pendiente:` enlazar el índice cuando no choque con el lote técnico
- SEO | Decisión de la dueña (2026-10-17): `/guias` no va al menú, al header ni a la nav, y las páginas del menú no enlazan a las guías | Anula el pendiente de enlazar el índice desde footer o menú. Los enlaces guía ↔ páginas SEO interiores se mantienen.
- SEO | Regla más estricta de la dueña: no modificar los archivos de las páginas del menú (`/`, `/pinturas`, `/esculturas`, `/marcela-pedrosa`, `/pintora-concepcion`, `/prensa`, `/tiempos-de-entrega`, `/privacidad`, `/devoluciones`, `/contacto`) | Enlazar desde las guías hacia ellas sí. Este lote no las tocó.
- SEO | Merge `origin/main` → `cursor/guias-informativas-f114` (2026-10-17) | Sitemap de main (superset de las rutas previas) y enlaces de las guías se conservan. En `/encargos-pintura` vuelve el enlace a `/oleo-sobre-tela-chile` junto al correo de main. Menú, nav y home quedan idénticos a main. `/guias` no entra al menú.
- SEO | Ronda 2: `/comprar-arte-chile`, `/retratos-al-oleo`, `/figuras-al-oleo`, `/pintura-de-animales`, `/pintura-de-bosques`, `/pintura-de-ciudad`, `/bodegon-oleo` | Solo pinturas publicadas; consulta WhatsApp/correo; sin precios; fuera del menú
- SEO | Imágenes de obra en páginas no menú: alt descriptivo del archivo real, width, height y sizes | Menú, header y home sin cambios
- SEO | Oportunidades off-page en `docs/seo-oportunidades-ronda2.md` | Competidores con precio (Kunst, Galería Chilena, Ambulante, Bascuñán, Bucarest); GBP pendiente; Artelista `mpedrosar.artelista.com` a confirmar con la clienta
- SEO | Merge `origin/main` → `cursor/seo-ronda2-guias-e05e` (2026-10-17) | Se conservan las 6 guías de #6 y las páginas de temas y compra. Sitemap: `SITEMAP_ROUTES` + fichas `/pinturas/[slug]` + `/guias` + cada `/guias/[slug]` + rutas de `SEO_GUIDES`. Menú, nav y home idénticos a main. `/guias` no entra al menú.
- GSC | Corte del brief 2026-10-17 (dato hasta 2026-10-15, 90d): 7 clics, 224 impresiones, CTR 3,1 %, pos 8,9. `/pintoras-chilenas` 3 clics / 157 imp / pos 7,5 | Páginas nuevas (`/guias`, `/artistas-chilenas`, `/cuadros`, fichas) desconocidas para Google
- SEO | Lote diario: sitemap suma `/artistas-chilenas` y `/cuadros`; `lastmod` fijo en `src/lib/sitemap-lastmod.ts` | No usar `new Date()` en cada build
- SEO | 301 `/cuadros-para-living` → `/cuadros/para-living`. Guía de living se mantiene (cómo medir) | Head de pintoras sigue en `/pintoras-chilenas`
- SEO | Fichas: slug de motivo + 301 desde `c1`…`c15`. VisualArtwork sin precio | Lista de indexación en `docs/seo-lote-2026-10-17.md`
- SEO | `www.mpedrosa.studio` 307 al apex | Configuración de dominio en Vercel, no de código

## 2026-10-18

- GSC | Brief del lote (dato hasta 2026-10-16): 90d 7 clics, 229 imp, CTR 3,1 %, pos 9,6. Últimos 7 días: 2 clics, 14 imp, pos 20,3 | Clics de la semana en `/artista-visual-biobio` y `/ceramica-artistica-concepcion`
- SEO | Prod: `/pinturas/c13` 301 → `/pinturas/casas-dia-y-noche` 404. Sitemap listaba `/pinturas/c13` | El publicId vivo de la ranura es `mapra/managed/gallery-c13-1787246109422`, no `c13_iqxkyv`
- SEO | La foto viva no es el díptico (1280×466). Es laguna, cordillera, atardecer y juncos, 1600×1236 | El slug `casas-dia-y-noche` queda con el díptico documentado; la foto nueva tiene slug propio
- SEO | Lote 2026-10-18: snippets en páginas que ya imprimen, enlaces desde indexadas hacia hubs unknown y fichas. Sin página nueva de compra | Doc `docs/seo-lote-2026-10-18.md`. `pendiente:` reenviar sitemap y Request indexing
