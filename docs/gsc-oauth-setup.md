# Google Search Console — OAuth local (mpedrosa.studio)

Procedimiento canónico para conectar y operar GSC en este repo. **Misma auth que katia / gonzalopedrosa.** No usar MCP para GSC.

Última verificación: **2026-08-23** (`npm run gsc:report` OK).

---

## Resumen rápido

| Qué | Valor |
| --- | --- |
| Propiedad | `sc-domain:mpedrosa.studio` |
| Auth | OAuth aplicación de escritorio |
| Secretos | `.secrets/` (symlink; no commit) |
| Env | `.env.local` (no commit) |
| Reportes | `npm run gsc:report` · `gsc:report:md` |
| Login | `npm run gsc:auth` |
| Scope lectura | `https://www.googleapis.com/auth/webmasters.readonly` |
| Scope escritura | `https://www.googleapis.com/auth/webmasters` (submit/delete sitemap) |
| Redirect OAuth | `http://127.0.0.1:53682/oauth2callback` |

---

## 1. Secretos (reutilizar, no crear otro OAuth)

En la raíz del repo:

```bash
# Opción A — mismo árbol que katia (recomendado)
ln -sfn /Users/gonzalo/katia/.secrets .secrets

# Opción B — solo GSC
# mkdir -p .secrets
# cp /Users/gonzalo/katia/.secrets/gcp-oauth-client.json .secrets/
# cp /Users/gonzalo/katia/.secrets/gsc-oauth-token.json .secrets/
```

Archivos necesarios:

| Path | Qué es |
| --- | --- |
| `.secrets/gcp-oauth-client.json` | Cliente OAuth tipo **Aplicación de escritorio** (`installed.client_id` + `installed.client_secret`) |
| `.secrets/gsc-oauth-token.json` | Token con `refresh_token` (scope readonly) |
| `.secrets/gsc-oauth-write-token.json` | Token write (scope `webmasters`) — mutaciones sitemap |

Cadena actual de symlinks:

`landingmapra/.secrets` → `katia/.secrets` → `gonzalopedrosa/.secrets`

`.secrets/` y `.env*` están en `.gitignore`. **Cero commits de secretos. Cero pegar JSON en el chat.**

---

## 2. `.env.local`

```bash
GSC_AUTH_MODE=oauth
GOOGLE_OAUTH_CLIENT_PATH=.secrets/gcp-oauth-client.json
GSC_OAUTH_TOKEN_PATH=.secrets/gsc-oauth-token.json
GSC_SITE_URL=sc-domain:mpedrosa.studio
GSC_DASHBOARD_DAYS=28
GSC_REPORT_DAYS=28
GSC_BRAND_TERMS=marcela pedrosa,mpedrosa,marcelapedrosa
# GSC_OAUTH_PORT=53682
```

`GSC_SITE_URL` debe coincidir **exactamente** con la propiedad en Search Console:

- Dominio: `sc-domain:ejemplo.cl`
- Prefijo URL: `https://www.ejemplo.cl/`

Si falla el acceso, `gsc:report` lista las propiedades visibles; copiá una URL de esa lista.

---

## 3. Código en este repo

| Archivo | Rol |
| --- | --- |
| `scripts/gsc-report.mjs` | Auth + resumen CLI (queries/páginas/sitemaps) |
| `scripts/gsc-report-md.mjs` | Informe markdown → `docs/gsc-informe-YYYY-MM-DD.md` |

> Nota: no hay `lib/gsc.ts` en el proyecto Next. `googleapis` solo lo usan los scripts `.mjs` (si se importa en `.ts` del app, tsserver se cae por el tamaño de tipos).

`package.json`:

```json
"gsc:auth": "node --env-file=.env.local scripts/gsc-report.mjs --auth",
"gsc:report": "node --env-file=.env.local scripts/gsc-report.mjs",
"gsc:report:md": "node --env-file=.env.local scripts/gsc-report-md.mjs"
```

Dependencia: `googleapis`.

Fallback de `GSC_SITE_URL` en scripts: `sc-domain:mpedrosa.studio` (no katialafono).

Referencia de origen: `/Users/gonzalo/katia` (copiar/adaptar; no inventar otro flujo).

---

## 4. Login / renovar token

El token lo emite el **Gmail que administra Search Console** (el mismo de katia / gonzalopedrosa). Ese usuario debe tener la propiedad `mpedrosa.studio` añadida.

```bash
npm install
npm run gsc:auth   # abre browser, prompt=consent, access_type=offline
npm run gsc:report
```

Si `invalid_grant`: volver a `gsc:auth` y login.

Si `gsc:report` lista propiedades y **no** está el dominio: el token está bien; falta **Añadir propiedad** en [Search Console](https://search.google.com/search-console) con el mismo Gmail.

### Escritura (sitemaps)

Readonly **no** puede `sitemaps.delete` / `submit` (403 insufficient scopes).

Usar token write (`.secrets/gsc-oauth-write-token.json`, scope `webmasters`). Si está vencido, re-auth con ese scope (mismo client_id, redirect `53682`) y guardar en el path write. Luego:

```js
// delete feedpath inválido + submit solo sitemap.xml
await sc.sitemaps.delete({ siteUrl, feedpath: "https://mpedrosa.studio/sitemap.ts" });
await sc.sitemaps.submit({ siteUrl, feedpath: "https://mpedrosa.studio/sitemap.xml" });
```

---

## 5. Verificar éxito

```bash
npm run gsc:report
```

Éxito = imprime resumen + queries/páginas de **este** dominio, sin error OAuth.

Ejemplo corte 2026-08-23: 0 clics, 7 impresiones; sitemaps = solo `/sitemap.xml`.

---

## 6. No hacer

- No pegar JSON de tokens en el chat ni en el repo
- No usar service account salvo pedido explícito (`GSC_AUTH_MODE=service_account` + `GOOGLE_APPLICATION_CREDENTIALS`)
- No crear otro proyecto GCP si el cliente de escritorio ya funciona
- No enviar `sitemap.ts` (ni ninguna ruta fuente) a GSC — solo `https://mpedrosa.studio/sitemap.xml`
- No usar MCP de Google Ads / Clarity como sustituto de GSC

---

## 7. Checklist al clonar / otro Mac

1. `ln -sfn /Users/gonzalo/katia/.secrets .secrets` (o copiar solo JSON GSC)
2. Crear `.env.local` (sección 2)
3. `npm install`
4. `npm run gsc:report` → si falla, `gsc:auth`
5. Confirmar propiedad en Search Console para el Gmail del token
