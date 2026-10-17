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
