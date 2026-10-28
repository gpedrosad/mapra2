# INDEX — hechos densos (leer primero)

Actualizado: **2026-10-28**

## Identidad

- Artista: **Marcela Pedrosa** — pintura / arte, Concepción (Biobío, CL)
- Web canónica: `https://mpedrosa.studio` (sin www)
- Instagram: [mpedrosaartista](https://www.instagram.com/mpedrosaartista/) · `src/lib/site.ts` (`INSTAGRAM_URL`) · schema `sameAs` + hero/footer
- Contacto schema: `contacto@marcelapedrosa.com` · `+56 9 5618 9912`
- Brand tokens: `docs/BRAND.md` · cream `#fcfbe9` · brand `#960018`
- **No cambiar copy** aprobado por la clienta salvo pedido explícito

## Google Search Console (GSC)

- Propiedad: `sc-domain:mpedrosa.studio` (domain property)
- Auth: OAuth local, **mismo** cliente/token que katia/gonzalopedrosa vía symlink `.secrets`
- Setup completo: [`docs/gsc-oauth-setup.md`](../gsc-oauth-setup.md)
- Scripts: `npm run gsc:auth` · `gsc:report` · `gsc:report:md`
- Reportes: `scripts/gsc-report.mjs`, `scripts/gsc-report-md.mjs` (sin `lib/gsc.ts` — evita tumbar tsserver con tipos de `googleapis`)
- Env: `.env.local` (`GSC_AUTH_MODE=oauth`, paths a `.secrets/`, `GSC_SITE_URL=sc-domain:mpedrosa.studio`)
- Brand terms heurística: `marcela pedrosa,mpedrosa,marcelapedrosa`
- **Corte 2026-08-23 (28d):** 0 clics · **7** impresiones · CTR 0% · páginas con imp: `/` (5), `/privacidad` (2), `/contacto` (1)
- **Corte 2026-10-17 (90d, dato de trabajo):** 6 clics · 221 impresiones · posición 9.0 · `/pintoras-chilenas` 156 imp, pos 7.6, CTR 1.9% · `/mujeres-artistas-chilenas` pos 13.9 · `/pinturas` pos 3.9, 0 clics · `/oleo-sobre-tela-chile` pos 11 · `/impresionismo-figurativo-chile` pos 17.8
- **Corte 2026-10-18 (brief, dato hasta 2026-10-16):** 90d 7 clics · 229 impresiones · CTR 3,1 % · pos 9,6. Últimos 7 días: 2 clics · 14 imp · pos 20,3. Clics de la semana: `/artista-visual-biobio`, `/ceramica-artistica-concepcion`. Unknown: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/guias/elegir-cuadro-para-el-living`, `/pinturas/elefante`.
- **Corte 2026-10-19 (brief, dato hasta 2026-10-17):** 90d 8 clics · 234 imp · CTR 3,4 % · pos 9,9. Últimos 7 días: 3 clics · 19 imp · CTR 15,8 % · pos 21,6 (previos: 0c/19i pos 12,6). `/pintoras-chilenas` 1c/6i pos 7,3. Unknown: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche`, `/pinturas/laguna-cordillera-atardecer`. `/pintoras-chilenas` indexada (crawl 2026-09-18).
- **Corte 2026-10-20 (brief, dato hasta 2026-10-18):** 90d 8 clics · 233 imp · CTR 3,4 % · pos 10,0. Últimos 7 días (10-12..10-18): 2 clics · 16 imp · CTR 12,5 % · pos 24,1 (previos 10-05..10-11: 1c/17i pos 14,5). `/pintoras-chilenas` 4c/160i pos 7,6. `/mujeres-artistas-chilenas` 1c/13i pos 13,9 en 90d y 0/1 pos 29 en 7d. Unknown por 4.º día: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche`. Sitemap GSC descargado 2026-10-16 con 22 URLs; live 74.
- **Corte 2026-10-21 (brief, dato hasta 2026-10-19):** 90d 8 clics · 233 imp · CTR 3,4 % · pos 10,0. Últimos 7 días (10-13..10-19): 2 clics · 14 imp · pos 26,4 (previos 10-06..10-12: 1c/13i pos 7,1). `/artista-visual-biobio` 1c/1i pos 2. `/pintoras-chilenas` 1c/4i pos 7,3. `/comprar-pintura-concepcion` 0/1 pos 9. Unknown por 5.º día: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche`. Sitemap GSC sin descarga desde 2026-10-16 (22 URLs; live 74).
- **Corte 2026-10-22 (brief, dato hasta 2026-10-20):** 90d 9 clics · 244 imp · CTR 3,7 % · pos 9,8. Últimos 7 días (10-14..10-20): 3 clics · 24 imp · pos 17,6 (previos 10-07..10-13: 1c/9i pos 10). `/taller-arte-concepcion` 1c/5i pos 5,6 en 90d. Unknown por 6.º día: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche`. Sitemap GSC sin descarga desde 2026-10-16 (22 URLs; live 74).
- **Corte 2026-10-23 (brief, dato hasta 2026-10-21):** 90d 9 clics · 249 imp · CTR 3,6 % · pos 10,0. Últimos 7 días (10-15..10-21): 2 clics · 26 imp · pos 19,2 (previos 10-08..10-14: 2c/12i pos 8,3). `/pintura-fachadas-concepcion` 0/1 pos 52 en 90d: la intención de la consulta no es un servicio de pintar muros. Descubiertas, sin indexar: `/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`, `/pinturas/casas-dia-y-noche`. Sitemap GSC descargado 2026-10-23 (74 URLs, 0 errores).
- Sitemap en GSC: **solo** `https://mpedrosa.studio/sitemap.xml` (`sitemap.ts` eliminado 2026-08-23)
- Indexación pública: home + legales/pinturas/prensa/contacto sí; landings SEO tipo `/pintora-concepcion` **no** aparecen en `site:` (2026-08-23)
- Write token: `.secrets/gsc-oauth-write-token.json` (scope `webmasters`) — usar para submit/delete sitemap; readonly no alcanza
- `invalid_grant` → `npm run gsc:auth` (readonly) o re-auth write (ver setup doc)

## Google Ads

- **No hay** campañas Ads apuntando a `mpedrosa.studio` (verificado MCP 2026-08-23)
- Cuentas visibles en el MCP: Psicólogo (`gonzalopedrosa.cl`), Katialafono, MCC Gonzalo — ninguna de arte
- Tráfico “desde Google” esperado hoy = **orgánico**, no paid

## Analytics / Clarity

- MCP Clarity en Cursor apunta a **agendapp.com.ar**, no a Marcela (0 sesiones `mpedrosa`)
- El sitio no trae Clarity/GA evidente en el HTML de producción al corte 2026-08-23
- `pendiente:` conectar analytics del dominio correcto si se quiere medir UX

## SEO técnico (repo)

- `robots.ts`: Allow `/`, Disallow `/api/` + `/imagenes`, Sitemap → `/sitemap.xml`
- `/imagenes` → `noindex` (pack técnico 2026-08)
- JSON-LD: Person/VisualArtist (layout) · Product/Offer oferta mes · ItemList/VisualArtwork en `/pinturas`
- Interlinking hubs: menú (La artista, Pintora Concepción) + footer hubs SEO
- Skills: `.agents/skills/seo-geo`, `seo`, `programmatic-seo`
- **Prod 2026-08-23:** pack interlinking/schemas **no desplegado** — home live no enlaza hubs SEO (solo pinturas/esculturas/prensa/contacto/legales)
- Person schema `sameAs` → Instagram `mpedrosaartista` (constante en `src/lib/site.ts`; override con `NEXT_PUBLIC_INSTAGRAM_URL`)
- Gap #1 SEO: indexar hubs (deploy + enlaces internos + Request indexing)
- **Lote 1 (2026-10-17):** titles/metas de `/pintoras-chilenas` y `/pinturas`; enlace doble con `/mujeres-artistas-chilenas`; refuerzo e interlinking de `/oleo-sobre-tela-chile` y `/impresionismo-figurativo-chile`. Home, `/ads` y `/sitelink` sin cambios.
- **Lote 2 (2026-10-17):** fundación SEO en páginas que no están en el menú. Titles ≤60 y metas ≤155, canonical, Open Graph y Twitter en esas páginas; sitemap con fichas; robots también bloquea `/api/` y `/imagenes` a bots de IA. Schema nuevo: VisualArtwork por obra real (nombre, imagen, medio y medidas solo si están en el catálogo; sin precio ni reseñas). Person/VisualArtist del layout no se tocó. Fichas en `/pinturas/[slug]`. Intención de compra: `/comprar-cuadros-al-oleo-chile` y `/cuadros-para-living`. Redirects `/pinturas-originales` y `/pinturas-originales-a-la-venta` → `/pinturas` (la página del menú no cambia). «Encargar una pintura» queda en `/encargos-pintura` (redirect `/encargar-una-pintura`). `/ads` y `/sitelink` no se tocaron.
- **Menú (2026-10-17):** las páginas del `NAV_ITEMS` quedan idénticas a `main`, incluidos metadatos y schema. El lote 2 solo toca páginas interiores que no están en el menú y páginas nuevas. Hub «Explorar el sitio» solo ahí. Footer y menú sin cambios.
- **Lote guías (2026-10-17):** 6 guías nuevas solo en `src/app/guias/` (living, óleo vs acrílico, cuidar/colgar óleo, impresionismo figurativo, encargar, factores de precio sin cifras). Cada una enlaza `/pinturas`, `/oleo-sobre-tela-chile`, `/impresionismo-figurativo-chile`, `/pintoras-chilenas`. Contacto existente: `contacto@marcelapedrosa.com` y `+56 9 5618 9912`. Decisión de la dueña: no editar ninguna página del menú (`/`, `/pinturas`, `/esculturas`, `/marcela-pedrosa`, `/pintora-concepcion`, `/prensa`, `/tiempos-de-entrega`, `/privacidad`, `/devoluciones`, `/contacto`) ni el header o la nav. Enlazar desde las guías hacia esas páginas sí está permitido. Las guías pueden enlazarse entre sí y con las páginas SEO interiores.
- **Merge guías (2026-10-17):** `origin/main` entra en `cursor/guias-informativas-f114`. Se conservan las entradas de `SITEMAP_ROUTES` (superset de las rutas previas) y los enlaces cruzados de las páginas SEO, más los de las guías. En `/encargos-pintura` se mantiene el enlace a `/oleo-sobre-tela-chile`. Páginas del menú, header, nav y componentes de home quedan idénticos a main. `/guias` sigue fuera del menú.
- **Ronda 2 (2026-10-17):** siete páginas fuera del menú (compra en Chile, retrato, figuras, animales, bosques, ciudad, bodegón), solo con las 15 pinturas de `data/managed-images.json`. Alt, width, height y sizes en imágenes de obra de páginas que no son menú. Oportunidades: [`docs/seo-oportunidades-ronda2.md`](../seo-oportunidades-ronda2.md). `pendiente:` ficha de Google Business y backlinks.
- **Merge ronda 2 (2026-10-17):** `origin/main` entra en `cursor/seo-ronda2-guias-e05e`. Se conservan las 6 guías de `src/app/guias/` y las páginas de temas y compra. El sitemap une `SITEMAP_ROUTES`, las fichas `/pinturas/[slug]`, `/guias`, cada `/guias/[slug]` y las rutas de `SEO_GUIDES`. Menú, nav y home quedan idénticos a main.
- **Lote diario 2026-10-17:** sitemap con `/artistas-chilenas` (13) y `/cuadros` (8), `lastmod` fijo por URL (no la hora del build). 301 `/cuadros-para-living` → `/cuadros/para-living` y `/pinturas/c1`…`c15` → slugs de motivo (`/pinturas/elefante` incluido). `/pintoras-chilenas` sigue siendo la URL del head term. Lista para pedir indexación: [`docs/seo-lote-2026-10-17.md`](../seo-lote-2026-10-17.md). `www` → apex es 307 de Vercel, no de código. `pendiente:` reenviar sitemap y Request indexing.
- **Lote diario 2026-10-18:** `/pinturas/c13` sigue en 301 a `/pinturas/casas-dia-y-noche`. Esa ficha se genera con el díptico `c13_iqxkyv` aunque Cloudinary tenga otro archivo en la ranura (`mapra/managed/gallery-c13-1787246109422`, laguna y cordillera). El sitemap no lista `c13`. La foto nueva, si el build la ve, va a `/pinturas/laguna-cordillera-atardecer`. Sin página nueva de compra. Lista: [`docs/seo-lote-2026-10-18.md`](../seo-lote-2026-10-18.md). `pendiente:` reenviar sitemap y Request indexing de hubs + ficha casas.
- **Lote diario 2026-10-19:** c13 sigue coherente (301, sitemap sin `c13`, díptico y laguna separados). Snippets en páginas que imprimen; `/pintoras-chilenas` conserva title y canonical. Enlaces con nombre de ficha desde esas páginas, y desde cada ficha hacia `/guias`, `/artistas-chilenas`, `/cuadros` y `/comprar-arte-chile`. Sin página nueva. Lista: [`docs/seo-lote-2026-10-19.md`](../seo-lote-2026-10-19.md). `pendiente:` reenviar sitemap y Request indexing.
- **Lote diario 2026-10-20:** sin bloqueo técnico en los hubs unknown (200, canonical, index, `<a href>` en HTML, sitemap con lastmod). `Disallow: /imagenes` sigue: es el panel interno, no las fotos de obra (Cloudinary). Contenido visible en `/pintoras-chilenas` (famosas vs actuales) y `/mujeres-artistas-chilenas` (escultura, grabado, cerámica; Lily Garafulic). Obras con ficha en `/oleo-sobre-tela-chile` e `/impresionismo-figurativo-chile`. Titles y canonical de esas páginas sin cambio. Sin página nueva. Lista: [`docs/seo-lote-2026-10-20.md`](../seo-lote-2026-10-20.md). `pendiente:` reenviar sitemap y Request indexing.
- **Lote diario 2026-10-21:** pasos de consulta (obra, WhatsApp/correo, plazos vía `/tiempos-de-entrega` y `/devoluciones`) y fichas reales en `/comprar-pintura-concepcion`, `/encargos-pintura`, `/artista-visual-biobio` y `/ceramica-artistica-concepcion`. Gres sin ficha propia (`gresExtras` vacío). Title de Biobío y cerámica sin cambio (meta del 2026-10-18). Meta de compra en Concepción sí (130 caracteres). Sin página nueva: grandes, regalo y oficina ya están. Lista: [`docs/seo-lote-2026-10-21.md`](../seo-lote-2026-10-21.md). `pendiente:` reenviar sitemap y Request indexing.
- **Lote diario 2026-10-22:** consulta en tres pasos y fichas del catálogo en `/taller-arte-concepcion`, `/arte-concepcion` y `/galeria-arte-concepcion` (meta nueva; title intacto, último cambio 2026-10-16). Pasos también en `/oleo-sobre-tela-chile` e `/impresionismo-figurativo-chile`, sin tocar title ni meta (cambiados el 18 y el 19). FAQ extra en `/mujeres-artistas-chilenas`. `/pintoras-chilenas` sin edición: ya enlaza `/artistas-chilenas` y `/guias` y ya tiene FAQ de actuales y de compra. Sin página nueva. El taller no publica horario de clases. Lista: [`docs/seo-lote-2026-10-22.md`](../seo-lote-2026-10-22.md). `pendiente:` reenviar sitemap y Request indexing.
- **Lote diario 2026-10-23:** hubs descubiertos sin indexar (`/guias`, `/artistas-chilenas`, `/cuadros`, `/comprar-arte-chile`) y las páginas de muro, regalo, formato, guías y óleo con envío. Cada obra de `/cuadros` enlaza su ficha. Cada ficha `/pinturas/[slug]` enlaza 1–3 páginas por tema o uso. `/pintura-fachadas-concepcion`: el snippet dice que son óleos, no un servicio de pintar muros. Sin página nueva y sin 301. Lista: [`docs/seo-lote-2026-10-23.md`](../seo-lote-2026-10-23.md). `pendiente:` Request indexing (el sitemap ya se descargó el 2026-10-23).
- **Lote 2026-10-24 (fin de semana):** cada ficha nombra lo que se ve, enlaza 1–2 telas del mismo grupo y una guía. `/pinturas/casas-dia-y-noche` aclara que es un par publicado en una ficha, sin medida, y no un servicio de pintar muros. Páginas nuevas, fuera del menú: `/cuadros/para-comedor` y `/guias/elegir-cuadro-para-el-comedor` (bodegón, ciudad y el par de día y noche). No se abrió «pintura abstracta»: el catálogo es figurativo. Lista: [`docs/seo-lote-2026-10-24.md`](../seo-lote-2026-10-24.md). `pendiente:` Request indexing de los hubs y de las dos URLs nuevas.
- **Lote 2026-10-24b:** title y meta de Carmen Aldunate, Lily Garafulic, Camilo Mori y Totoy Zamudio abren con el nombre de la consulta. Cada perfil enlaza el índice y una ficha real de Marcela, y dice que esa obra histórica no se vende aquí. Sin datos biográficos nuevos. Ana Cortés sigue sin perfil: no hay fuente en el repo. Living, dormitorio, oficina, regalo, grandes, óleo con envío, las guías del 10-17 y `/pintura-fachadas-concepcion` no se reabren: ya se editaron el 22, el 23 o el 24. Lista: [`docs/seo-lote-2026-10-24b.md`](../seo-lote-2026-10-24b.md). `pendiente:` Request indexing de los cuatro perfiles y de las dos URLs que siguen descubiertas.
- **Corte 2026-10-25 (brief, dato hasta 2026-10-23):** 90d 10 clics · 252 imp · CTR 4,0 % · pos 10,1. Últimos 7 días (10-17..10-23): 3 clics · 24 imp · pos 15,0 (previos 10-10..10-16: 2c/14i pos 20,3). `/pintoras-chilenas` 4c/162i pos 7,7. Descubiertas, nunca rastreadas: `/comprar-cuadros-al-oleo-chile`, `/guias/elegir-cuadro-para-el-living`, `/guias/oleo-vs-acrilico`, `/guias/como-encargar-una-pintura`, `/guias/cuanto-cuesta-un-cuadro-original-en-chile`, `/cuadros/para-dormitorio`, `/cuadros/para-oficina`, `/cuadros/paisajes-bosques-biobio`.
- **Lote 2026-10-25:** title y meta separan pintoras (famosas y actuales), mujeres artistas (escultura, grabado, cerámica) y el índice `/artistas-chilenas`. `/oleo-sobre-tela-chile` abre en plural y nombra la consulta. Enlaces nuevos desde páginas ya indexadas hacia las 8 sin rastrear; las que ya estaban enlazadas no se duplicaron. Sin página nueva. Lista: [`docs/seo-lote-2026-10-25.md`](../seo-lote-2026-10-25.md). `pendiente:` Request indexing (OAuth solo lectura).
- **Corte 2026-10-26 (brief, dato hasta 2026-10-24):** 90d 11 clics · 259 imp · CTR 4,2 % · pos 10,2. Últimos 7 días (10-18..10-24): 3 clics · 26 imp · pos 12,3 (previos 10-11..10-17: 3c/19i pos 21,6). `/pintoras-chilenas` 4c/162i pos 7,7. `/artista-visual-biobio` 4i pos 3 en 7d. Indexadas nuevas: `/comprar-cuadros-al-oleo-chile`, `/cuadros/para-dormitorio`, `/cuadros/para-oficina`, `/cuadros/paisajes-bosques-biobio`. Desconocidas: retratos, bosques, ciudad, Henriette Petit, pintoras contemporáneas, guía del living, óleo vs acrílico.
- **Lote 2026-10-26:** las seis páginas de tema ya tenían ficha, FAQ y CTA; no se reescribieron. Enlaces nuevos desde páginas indexadas (óleo con envío, índice de cuadros, living, regalo, dormitorio, oficina). Nombres de perfil como ancla en `/pintoras-chilenas` y `/mujeres-artistas-chilenas`. Title y meta de Biobío y de la guía de impresionismo figurativo. Sin página nueva. Lista: [`docs/seo-lote-2026-10-26.md`](../seo-lote-2026-10-26.md). `pendiente:` Request indexing (OAuth solo lectura).
- **Corte 2026-10-27 (brief, dato hasta 2026-10-25):** 90d 11 clics · 263 imp · CTR 4,2 % · pos 10,2. Últimos 7 días (10-19..10-25): 3 clics · 30 imp · pos 11,7 (previos 10-12..10-18: 2c/16i pos 24,1). Indexadas nuevas: retratos, bosques, ciudad, figuras, animales y bodegón. Desconocida: `/guias/elegir-cuadro-para-el-living`. 44 de 60 URLs no-ficha indexadas.
- **Lote 2026-10-27:** las cuatro guías de compra ya tenían ficha, CTA y, en la de precio, cero montos; no se reescribieron. Enlaces nuevos solo donde la frase ya hablaba del tema. Title de contemporáneas (46) separado de «famosas y actuales». Title de grandes al óleo nombra el bosque 158x122. `/cuadros` y fachadas no reabren el title: se editaron el 24 o el 26. Sin página nueva. Lista: [`docs/seo-lote-2026-10-27.md`](../seo-lote-2026-10-27.md). `pendiente:` Request indexing (OAuth solo lectura).
- **Corte 2026-10-28 (brief, dato hasta 2026-10-26):** 90d 12 clics · 272 imp · CTR 4,4 % · pos 10,2. Últimos 7 días (10-20..10-26): 4 clics · 33 imp · pos 11,9 (previos 10-13..10-19: 2c/20i pos 22,1). Indexadas nuevas: guía del living, óleo vs acrílico, cómo encargar, pintoras contemporáneas. 48 de 60 URLs no-ficha indexadas. Descubierta sin indexar: guía de precio. Desconocidos: Mori, Garafulic, Barrios, Zamudio.
- **Lote 2026-10-28:** los once perfiles ya estaban en el sitemap, con canonical y `<a href>` desde el índice, pintoras y mujeres artistas. Titles con el nombre en los que seguían en `| Pedrosa`. Enlaces nuevos a los cuatro desconocidos desde ciudad, retratos, figuras, Biobío y óleo vs acrílico. La guía de precio no se reescribió y sigue sin montos; se enlaza desde las tres guías recién indexadas y desde óleo con envío. Title del comedor (bodegón) y de fachadas (día y noche y ciudad). Sin página nueva. Lista: [`docs/seo-lote-2026-10-28.md`](../seo-lote-2026-10-28.md). `pendiente:` Request indexing (OAuth solo lectura).
- Gap #2: analytics (GA4/Clarity del dominio correcto)
- Gap #3 (aprobación): diferenciar landings thin, FAQ/GEO, backlinks prensa/IG

## Stack

- Next.js 15 App Router · Cloudinary · Vercel
- Secretos Google: **nunca** commit · `.secrets` + `.env*` en `.gitignore`
- `.secrets` → symlink a `/Users/gonzalo/katia/.secrets` → `/Users/gonzalo/gonzalopedrosa/.secrets`

## No hacer (aprendido)

- No usar MCP para GSC (usar scripts OAuth locales como katia)
- No crear otro proyecto GCP / otro OAuth client si el de escritorio ya funciona
- No pegar JSON de tokens en chat ni en el repo
- No asumir Ads de Marcela: no existen todavía
- No confiar en Clarity MCP para este sitio (proyecto equivocado)
- No reenviar `sitemap.ts` a GSC — solo `/sitemap.xml`
- No cambiar copy de la clienta en tareas “solo técnicas”
