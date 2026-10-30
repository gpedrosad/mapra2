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

## 2026-10-19

- GSC | Brief del lote (dato hasta 2026-10-17): 90d 8 clics, 234 imp, CTR 3,4 %, pos 9,9. Últimos 7 días: 3 clics, 19 imp, CTR 15,8 %, pos 21,6. Previos: 0 clics, 19 imp, pos 12,6 | `/pintoras-chilenas` 1c/6i pos 7,3
- SEO | Inspección URL: indexada `/pintoras-chilenas` (crawl 2026-09-18). Unknown: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche`, `/pinturas/laguna-cordillera-atardecer` | `pendiente:` reenviar sitemap y Request indexing (OAuth solo lectura)
- SEO | Prod: `/pinturas/c13` 301 → `/pinturas/casas-dia-y-noche` 200. Sitemap sin `c13`, con el slug descriptivo y con laguna. 74 URLs | No reabrir. El JSON del repo sigue en `c13_iqxkyv`; la laguna entra si el build lee el publicId vivo
- SEO | Lote 2026-10-19: snippets sin cambiar el canonical de `/pintoras-chilenas`. Enlaces con nombre hacia casas, elefante y laguna (esta solo si el catálogo la genera). Cada ficha enlaza los cuatro hubs unknown. Sin página nueva | Doc `docs/seo-lote-2026-10-19.md`

## 2026-10-20

- GSC | Brief del lote (dato hasta 2026-10-18): 90d 8 clics, 233 imp, CTR 3,4 %, pos 10,0. Últimos 7 días: 2 clics, 16 imp, CTR 12,5 %, pos 24,1. Previos: 1 clic, 17 imp, pos 14,5 | `/pintoras-chilenas` 4c/160i pos 7,6. `/mujeres-artistas-chilenas` cae a pos 29 en 7d
- SEO | Inspección URL: unknown por 4.º día `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche`. Sitemap GSC descargado 2026-10-16, 22 URLs; live 74 | `pendiente:` reenviar sitemap y Request indexing (OAuth solo lectura)
- SEO | Prod 2026-10-20: esas cinco URLs responden 200, canonical propio, `index, follow`, en sitemap con lastmod. Enlaces `<a href>` en el HTML de `/pintoras-chilenas`, `/mujeres-artistas-chilenas`, `/oleo-sobre-tela-chile` y `/pinturas/elefante`. Sin bloqueo técnico | `Disallow: /imagenes` se mantiene: panel interno con noindex, no las fotos de obra
- SEO | Lote 2026-10-20: H2 famosas/actuales en `/pintoras-chilenas` con datos de los perfiles. `/mujeres-artistas-chilenas` pasa a escultura, grabado y cerámica, con Lily Garafulic. Fichas reales en óleo e impresionismo. Titles y canonical intactos. Sin página nueva | Doc `docs/seo-lote-2026-10-20.md`

## 2026-10-21

- GSC | Brief del lote (dato hasta 2026-10-19): 90d 8 clics, 233 imp, CTR 3,4 %, pos 10,0. Últimos 7 días (10-13..10-19): 2 clics, 14 imp, pos 26,4. Previos (10-06..10-12): 1 clic, 13 imp, pos 7,1 | `/artista-visual-biobio` 1c/1i pos 2. `/pintoras-chilenas` 1c/4i pos 7,3. `/comprar-pintura-concepcion` 0/1 pos 9
- SEO | Unknown por 5.º día: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche`. Sitemap GSC sin descarga desde 2026-10-16 (22 URLs; live 74) | `pendiente:` reenviar sitemap y Request indexing (OAuth solo lectura)
- SEO | Lote 2026-10-21: consulta en tres pasos y fichas del catálogo en `/comprar-pintura-concepcion`, `/encargos-pintura`, `/artista-visual-biobio` y `/ceramica-artistica-concepcion`. Gres sin imagen publicada en `data/managed-images.json` (`gresExtras` vacío): no se inventan piezas. Sin página nueva | Doc `docs/seo-lote-2026-10-21.md`

## 2026-10-22

- GSC | Brief del lote (dato hasta 2026-10-20): 90d 9 clics, 244 imp, CTR 3,7 %, pos 9,8. Últimos 7 días (10-14..10-20): 3 clics, 24 imp, pos 17,6. Previos (10-07..10-13): 1 clic, 9 imp, pos 10 | `/taller-arte-concepcion` 1c/5i pos 5,6 en 90d. `/pintoras-chilenas` 1c/5i pos 13 en 7d y 4c/161i pos 7,7 en 90d
- SEO | Unknown por 6.º día: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche`. Sitemap GSC sin descarga desde 2026-10-16 (22 URLs; live 74) | `pendiente:` reenviar sitemap y Request indexing (OAuth solo lectura)
- SEO | Lote 2026-10-22: pasos de consulta y fichas en `/taller-arte-concepcion`, `/arte-concepcion` y `/galeria-arte-concepcion`. Meta nueva (title sin cambio desde 2026-10-16). Pasos en óleo e impresionismo sin tocar title ni meta. FAQ de pintora actual en `/mujeres-artistas-chilenas`. `/pintoras-chilenas` no se editó. Sin página nueva. El taller no publica horario de clases | Doc `docs/seo-lote-2026-10-22.md`

## 2026-10-23

- GSC | Brief del lote (dato hasta 2026-10-21): 90d 9 clics, 249 imp, CTR 3,6 %, pos 10,0. Últimos 7 días (10-15..10-21): 2 clics, 26 imp, pos 19,2. Previos (10-08..10-14): 2 clics, 12 imp, pos 8,3 | `/pintura-fachadas-concepcion` 0/1 pos 52 en 90d
- SEO | Inspección URL: indexadas home, pintoras, mujeres artistas, óleo, Biobío, compra en Concepción, encargos y cerámica. Descubiertas, sin indexar: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche` | El sitemap lo descargó Google el 2026-10-23 (74 URLs, 0 errores)
- SEO | Lote 2026-10-23: fichas enlazadas desde `/cuadros` y desde las guías. Cada `/pinturas/[slug]` apunta a 1–3 páginas por tema o uso. Living (medir) y living (telas) se cruzan sin 301. El snippet de fachadas aclara que son óleos, no un servicio de pintar muros. Sin página nueva | Doc `docs/seo-lote-2026-10-23.md`. `pendiente:` Request indexing (OAuth solo lectura)

## 2026-10-24

- SEO | Lote de fin de semana: fichas con texto de lo que se ve, enlace a otra tela del mismo grupo y a una guía. Schema VisualArtwork con `description` e `isRelatedTo`, sin precio. `/pinturas/casas-dia-y-noche` distingue el par de un servicio de pintar muros | Doc `docs/seo-lote-2026-10-24.md`
- SEO | Hueco de compra: el comedor se nombraba en living y fachadas y no tenía URL. Nuevas `/cuadros/para-comedor` y `/guias/elegir-cuadro-para-el-comedor`, con bodegón, ciudad y casas de día y de noche. Sin precio | No se creó «pintura abstracta»: las telas son figurativas. «Óleo chile» y «encargar cuadro» ya tenían URL
- SEO | Hubs `/guias`, `/artistas-chilenas`, `/cuadros` y `/comprar-arte-chile` enlazan el comedor y fichas reales. El correo queda visible en el CTA de consulta | Menú, nav, home, Footer, HamburgerMenu y ArtCard sin cambios. `pendiente:` Request indexing
- GSC | Brief del lote 2026-10-24b (dato hasta 2026-10-22): 90d 10 clics, 251 imp, CTR 4,0 %, pos 10,1. Últimos 7 días (10-16..10-22): 3 clics, 25 imp, pos 19,9. Previos: 2 clics, 14 imp, pos 11,3 | Consultas de nombre: Carmen Aldunate, Lily Garafulic, Camilo Mori, Totoy Zamudio, Ana Cortés
- SEO | Inspección del brief: indexadas hoy `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/cuadros/para-comedor`. Descubiertas, sin indexar: `/pinturas/casas-dia-y-noche`, `/guias/elegir-cuadro-para-el-comedor` | Esas dos siguen en la lista de indexación
- SEO | Lote 2026-10-24b: title y meta de los cuatro perfiles que reciben el nombre, más un enlace al índice y a una ficha real de Marcela. Sin biografía nueva. Ana Cortés no se crea. Compra por uso, guías del 10-17 y fachadas no se reabren | Doc `docs/seo-lote-2026-10-24b.md`. `pendiente:` Request indexing (OAuth solo lectura)

## 2026-10-25

- GSC | Brief del lote (dato hasta 2026-10-23): 90d 10 clics, 252 imp, CTR 4,0 %, pos 10,1. Últimos 7 días (10-17..10-23): 3 clics, 24 imp, pos 15,0. Previos (10-10..10-16): 2 clics, 14 imp, pos 20,3 | `/pintoras-chilenas` 4c/162i pos 7,7. «oleos sobre tela» pos 32. «mujeres artistas chilenas» pos 31
- SEO | Inspección URL: indexadas compra en Concepción, `/guias`, guía del comedor, cuidar y colgar, guía de impresionismo, comprar arte, `/cuadros`, living, comedor, fachadas, grandes y regalo. Descubiertas, nunca rastreadas: óleo con envío, guía del living, óleo vs acrílico, cómo encargar, cuánto cuesta, dormitorio, oficina y bosques del Biobío | Esas ocho siguen en la lista de indexación
- SEO | Lote 2026-10-25: titles del cluster pintoras / mujeres artistas / índice, y title plural de `/oleo-sobre-tela-chile`. Enlaces contextuales nuevos solo donde la URL sin rastrear no salía del texto de una página ya indexada. Sin página nueva. Ana Cortés sigue sin fuente | Doc `docs/seo-lote-2026-10-25.md`. `pendiente:` Request indexing (OAuth solo lectura)

## 2026-10-26

- GSC | Brief del lote (dato hasta 2026-10-24): 90d 11 clics, 259 imp, CTR 4,2 %, pos 10,2. Últimos 7 días (10-18..10-24): 3 clics, 26 imp, pos 12,3. Previos (10-11..10-17): 3 clics, 19 imp, pos 21,6 | `/pintoras-chilenas` 4c/162i pos 7,7. `/artista-visual-biobio` 4i pos 3 en 7d. Guía de impresionismo figurativo 0/2 pos 3,5
- SEO | Inspección URL: 37 de 60 no-ficha indexadas. Nuevas desde ayer: `/comprar-cuadros-al-oleo-chile`, `/cuadros/para-dormitorio`, `/cuadros/para-oficina`, `/cuadros/paisajes-bosques-biobio`. Desconocidas: retratos, bosques, ciudad, Henriette Petit, pintoras contemporáneas, guía del living, óleo vs acrílico | Esas siete van primero en la lista de indexación
- SEO | Lote 2026-10-26: las seis páginas de tema ya tenían ficha, FAQ visible y CTA de WhatsApp y correo; no se reescribieron y siguen en el sitemap vía `SEO_GUIDES`. Enlaces nuevos solo donde el motivo ya estaba en la frase. Perfiles: el nombre como ancla en pintoras y mujeres artistas. Title y meta de Biobío (47 / 143) y de la guía de impresionismo (46 / 141). Sin página nueva. Ana Cortés sigue sin fuente | Doc `docs/seo-lote-2026-10-26.md`. `pendiente:` Request indexing (OAuth solo lectura)

## 2026-10-27

- GSC | Brief del lote (dato hasta 2026-10-25): 90d 11 clics, 263 imp, CTR 4,2 %, pos 10,2. Últimos 7 días (10-19..10-25): 3 clics, 30 imp, pos 11,7. Previos (10-12..10-18): 2 clics, 16 imp, pos 24,1 | `/cuadros` pos 5, fachadas pos 7, grandes pos 8, las tres con 0 clics en 7d
- SEO | Inspección URL: 44 de 60 no-ficha indexadas (ayer 37). Nuevas: retratos, bosques, ciudad, figuras, animales, bodegón. Desconocida: guía del living. Descubiertas sin indexar: óleo vs acrílico, encargar, cuánto cuesta, y los doce perfiles de `/artistas-chilenas` salvo que Castro, Magdalena Mira, Mori y Garafulic siguen desconocidas | La guía de precio no publica montos
- SEO | Lote 2026-10-27: enlaces contextuales a las cuatro guías desde páginas ya indexadas, sin reescribirlas. Title de contemporáneas `Pintoras chilenas contemporáneas | taller vivo` (46 / 145), separado de famosas y actuales. Title de `/cuadros/grandes-al-oleo` nombra el bosque 158x122 (40 / 129). `/cuadros` y fachadas no cambian de title. Sin página nueva. Ana Cortés sigue sin fuente | Doc `docs/seo-lote-2026-10-27.md`. `pendiente:` Request indexing (OAuth solo lectura)

## 2026-10-28

- GSC | Brief del lote (dato hasta 2026-10-26): 90d 12 clics, 272 imp, CTR 4,4 %, pos 10,2. Últimos 7 días (10-20..10-26): 4 clics, 33 imp, pos 11,9. Previos (10-13..10-19): 2 clics, 20 imp, pos 22,1 | Comedor 2i pos 10. Fachadas 1i pos 7. Guía de precio descubierta, sin indexar
- SEO | Inspección URL: 48 de 60 no-ficha indexadas (ayer 44). Nuevas: guía del living, óleo vs acrílico, cómo encargar, pintoras contemporáneas. Desconocidos: Mori, Garafulic, Barrios, Zamudio. Descubiertos sin indexar: Castro, las Mira, Petit, Pérez, Bru, Aldunate y la guía de precio | Esas doce van primero en la lista de indexación
- SEO | Lote 2026-10-28: los once perfiles ya estaban en el sitemap, con canonical propio y enlace desde el índice, `/pintoras-chilenas` y `/mujeres-artistas-chilenas`. Titles con el nombre donde seguía `| Pedrosa`. Enlaces nuevos a los cuatro desconocidos desde ciudad, retratos, figuras, Biobío y óleo vs acrílico. Guía de precio sin reescritura y sin montos; enlace desde las tres guías recién indexadas y desde `/comprar-cuadros-al-oleo-chile`. Title del comedor (40) y de fachadas (39). Sin página nueva. Ana Cortés sigue sin fuente | Doc `docs/seo-lote-2026-10-28.md`. `pendiente:` Request indexing (OAuth solo lectura)

## 2026-10-29

- GSC | Brief del lote (dato hasta 2026-10-27): 90d 12 clics, 278 imp, CTR 4,3 %, pos 10,1. Últimos 7 días (10-21..10-27): 3 clics, 36 imp, pos 11,8. Previos (10-14..10-20): 3 clics, 24 imp, pos 17,6 | `/artistas-chilenas` 9i pos 19,2. «pintoras chilenas famosas» pos 10. «artistas chilenos pintores» pos 53. «artistas visuales chilenos» pos 76
- SEO | Inspección URL: 49 de 60 no-ficha indexadas (ayer 48). Nueva: `/guias/cuanto-cuesta-un-cuadro-original-en-chile`. Descubiertos sin indexar: diez perfiles. Desconocida: `/artistas-chilenas/roser-bru` | Bru va primera en la lista de indexación
- SEO | Lote 2026-10-29: famosas y actuales siguen en `/pintoras-chilenas` (title intacto; dos anclas nuevas a Roser Bru). Índice: title `Artistas visuales chilenos | índice de perfiles` (47 / 146), H1 alineado, sin canibalizar Biobío ni pintoras. Meta de `/mujeres-artistas-chilenas` (124) deja «pintoras famosas»; title intacto. Guía de precio sin cifras; enlaza grandes y compra en Concepción. Sin página nueva. Ana Cortés sigue sin fuente | Doc `docs/seo-lote-2026-10-29.md`. `pendiente:` Request indexing (OAuth solo lectura)

## 2026-10-30

- GSC | Brief del lote (dato hasta 2026-10-28): 90d 12 clics, 292 imp, CTR 4,1 %, pos 9,9. Últimos 7 días (10-22..10-28): 3 clics, 45 imp, pos 9,4. Previos (10-15..10-21): 2 clics, 26 imp, pos 19,2 | Clics 7d en home y `/prensa`. Guía de impresionismo 6i pos 2,2. Contemporáneas 8i pos 7,25. «impresionismo figurativo» 4i pos 2,75
- SEO | Inspección URL: 50 de 60 no-ficha indexadas (ayer 49). Nueva: `/artistas-chilenas/gracia-barrios`. Roser Bru pasó de desconocida a descubierta, sin indexar. Siguen descubiertos sin indexar: Castro, las Mira, Petit, Mori, Garafulic, Pérez, Bru, Aldunate y Zamudio | Esos diez van primero en la lista de indexación. Barrios no se reescribe
- SEO | Lote 2026-10-30: title y meta de `/guias/que-es-el-impresionismo-figurativo` (49 / 147) abren con «qué es», rasgos y dos obras reales. `/impresionismo-figurativo-chile` queda en «actual en Chile» y no se editó (lote 28). Meta de contemporáneas (144) con Premio Nacional 2011 y 2015; title del 27 intacto. Title, meta y CTA de `/cuadros/para-living` (43 / 134) y de `/pintura-de-bosques` (40 / 137). Enlace nuevo de la guía del living hacia pintura de bosques, y de fachadas hacia la guía del comedor y pintura de bosques. Sin página nueva. Ana Cortés sigue sin fuente | Doc `docs/seo-lote-2026-10-30.md`. `pendiente:` Request indexing (OAuth solo lectura)
