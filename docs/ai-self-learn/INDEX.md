# INDEX — hechos densos (leer primero)

Actualizado: **2026-10-17**

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
- **Lote 2 (2026-10-17):** `/guias` en el sitemap y siete guías fuera del menú (compra en Chile, retrato, figuras, animales, bosques, ciudad, bodegón), solo con las 15 pinturas de `data/managed-images.json`. Alt, width, height y sizes en imágenes de obra de páginas que no son menú. Oportunidades: [`docs/seo-oportunidades-ronda2.md`](../seo-oportunidades-ronda2.md). Menú, header y home sin cambios. `pendiente:` ficha de Google Business y backlinks.
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
