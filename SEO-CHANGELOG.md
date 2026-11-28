# SEO Changelog — mpedrosa.studio

## 2026-11-28 — Contenido nuevo: sin página nueva (skip) y refuerzo del perfil de Totoy Zamudio

### Página nueva: SKIP
- No se creó página para el cluster genérico "pintores/artistas chilenos". Suma ~20 impresiones en 90 d repartidas en 8 queries, y ninguna supera 6 impresiones.
- Se solaparía con `/artistas-chilenas/pintoras-chilenas-contemporaneas`, reforzada el 26/11 y todavía en ventana de 7 días.
- "Escultoras chilenas" suma ≈5 impresiones, insuficiente para justificar una página.

### `/artistas-chilenas/totoy-zamudio` (`src/app/artistas-chilenas/totoy-zamudio/page.tsx`)
- GSC 28 d: 49 impresiones, posición 8,6 (página nueva en el período).
- Queries 90 d: "totoy zamudio" (14 impr, pos 12,5), "totoy zamudio biografia" (6 impr, pos 7,5), "totoy zamudio esposa" (2 impr, pos 14,0), "jose manuel zamudio" (1 impr, pos 3,0).
- Nueva sección "Biografía de Totoy Zamudio en breve", antes de "Dónde se ha visto la obra". Es una lista de 8 hitos tomados solo del texto existente: 1972 en Santiago, Ingeniería en Acuicultura (CNN Chile 2024), Finis Terrae, Pompeu Fabra, exposiciones desde 1998, Arte en vivo 2000 (La Tercera), murales para Apumanque y Vik, docencia y taller en El Arrayán. Apunta a "totoy zamudio biografia".
- Nueva sección "Preguntas frecuentes" con 4 FAQs y JSON-LD FAQPage: quién es, nombre completo (José Manuel Zamudio, para "jose manuel zamudio"), dónde estudió y dónde se ha expuesto. Las respuestas usan solo hechos ya presentes en la página.
- No se agregó FAQ sobre esposa, familia o pareja, porque la página no tiene datos verificados sobre eso. La query "totoy zamudio esposa" queda sin atender a propósito.
- `modified` pasa de 2026-10-24 a 2026-11-28. TITLE, DESCRIPTION, h1 y kicker quedan sin cambios (rutina CTR aparte).
- No se agregaron datos biográficos nuevos.

Medir: 2026-12-12 (14 d) y 2026-12-26 (28 d)

## 2026-11-26 — Contenido nuevo: boost de pintoras chilenas contemporáneas (sin página nueva)

No se crea página nueva: la única brecha detectada, «pintores chilenos actuales», tiene 6 impresiones en 90 días y no justifica una URL propia.

### `src/app/artistas-chilenas/pintoras-chilenas-contemporaneas/page.tsx`

Contexto GSC (28 d): 137 impresiones, posición media 10,3, crecimiento de ~38x frente al ritmo previo. TITLE, DESCRIPTION y metadata sin cambios.

- **Nueva sección H2 «Pintoras chilenas famosas: por dónde empezar»**: lista breve con enlace a 8 perfiles del sitio (Celia Castro, Magdalena Mira, Aurora Mira, Henriette Petit, Matilde Pérez, Gracia Barrios, Roser Bru, Carmen Aldunate). Usa solo las notas de `PERFILES` y aclara que el listado amplio está en `/pintoras-chilenas`.
  - Query objetivo: «pintoras chilenas famosas» (13 impr, pos 6,9).
  - Apoyo: «artistas chilenas mujeres pintoras» (9 impr, pos 5,0) y «mujeres pintoras chilenas» (3 impr, pos 7,7).
- **Nueva sección H2 «Preguntas frecuentes»**: 5 preguntas renderizadas como h3 + p, más JSON-LD `FAQPage` generado desde la misma constante `FAQS`, con texto idéntico al HTML. Las respuestas usan solo hechos ya presentes en la página o en `PERFILES`.
  - «¿Quiénes son pintoras chilenas actuales?»: apunta a «pintoras chilenas actuales» (19 impr, pos 3,3) y «pintores chilenos actuales» (5 impr, pos 59; menciona el perfil de Totoy Zamudio).
  - «¿Qué pintoras chilenas son famosas?»: apunta a «pintoras chilenas famosas» (13 impr, pos 6,9).
  - «¿Qué pintoras chilenas recibieron el Premio Nacional?»: cubre Barrios 2011 y Bru 2015, y Garafulic 1995 como escultora.
  - «¿Hay pintoras contemporáneas trabajando hoy en regiones?»: apunta a «pintora chilena contemporanea» (5 impr, pos 1,8) y a «pintora» (11 impr, pos 9,4).
  - «¿Cómo consultar por una obra de Marcela Pedrosa?»: explica que las obras son por consulta (WhatsApp, correo o formulario), con envío a todo Chile y sin precios.
- **Párrafo de cierre** con enlaces internos a `/pinturas`, `/pintoras-chilenas` y `/mujeres-artistas-chilenas`.
- `modified` pasa de 2026-10-30 a 2026-11-26.

Medir: 2026-12-10 (14 d) y 2026-12-24 (28 d). Revisar en esas fechas la posición de «pintoras chilenas famosas» y de «pintoras chilenas actuales», el CTR de la página y si Search Console detecta el FAQPage.

## 2026-11-23 — Revisión 2026-11-23 (sin cambios de contenido): medición test Opus 5.5 y revisión de perfiles

Search Console (último día 2026-11-22). 90d: 26 clics / 1.193 impr / CTR 2.18 % / pos 10.7. 7d (2026-11-16..2026-11-22): 1 clics / 178 impr / CTR 0.56 % / pos 15.1 vs prev7 (2026-11-09..2026-11-15): 4 clics / 242 impr / CTR 1.65 % / pos 13.7. Opus 5.5 revisó las páginas candidatas y las dejó en «skipped» (sin cambios de contenido). Congeladas y no tocadas: lotes 2026-11-21 (hasta 11-28), tienda #40 (hasta 11-26) y lotes 11-10 (hasta 11-24). GA4: conector sigue pidiendo reautenticación. Medir el 2026-12-07.

No aplicado: `/artistas-chilenas/celia-castro` — El último cambio de snippet (CTR test) es del ~04/11, hace apenas ~19 días. Desde entonces hay unas 53 impresiones (0/43 y 0/10 en las dos últimas semanas), muy pocas para evaluar, y cambiarlo ahora invalidaría el test. Además, el snippet actual ya cumple el brief: nombre completo, 'pintora chilena', años, biografía y museos. Con pos 1,6 en «celia castro» y CTR casi 0, es probable que un panel de conocimiento o Wikipedia acapare los clics, algo que el snippet no resuelve. Conviene reevaluar a mediados de diciembre, con 4 semanas o más de datos posteriores al cambio, y verificar si perfilMetadata agrega sufijo de marca, porque el title podría superar los 60 caracteres.

No aplicado: `/artistas-chilenas/magdalena-mira` — El último cambio es del ~04/11. Desde entonces hay unas 31 impresiones (0/20 y 0/11), una muestra insuficiente para juzgar, y reescribirlo de nuevo contaminaría el test. La meta ya cubre la intención: 'Magdalena Mira Mena', 'pintora y escultora chilena', biografía y Museo Nacional de Bellas Artes, solo con datos existentes. Candidata para la próxima iteración si el CTR sigue en 0 tras 4 semanas: title 'Magdalena Mira Mena, pintora y escultora chilena', que suma 'Mena' («magdalena mira mena», pos 4) y 'chilena' sin cambiar datos. Antes hay que confirmar el largo con el sufijo de marca de perfilMetadata.


### Test CTR Opus 5.5 — medición 14 d (2026-11-23)

Antes 2026-10-24..2026-11-06 vs después 2026-11-09..2026-11-22 (GSC dataState all; el 22/11 puede no estar final: provisional). Total del sitio (8 URLs): 0/67 (CTR 0.00 %) → 1/62 (CTR 1.61 %). Sin control A/B: no es causal. Las páginas se descongelan. Re-medición 28 d en la primera corrida desde 2026-12-06.

| URL | Var. | Antes (clics/impr, CTR, pos) | Después | Veredicto |
|---|---|---|---|---|
| `/pinturas` | A | 0/11, 0.00 %, 4.5 | 0/3, 0.00 %, 3.7 | sin datos suficientes |
| `/artistas-chilenas/henriette-petit` | A | 0/14, 0.00 %, 4.1 | 0/17, 0.00 %, 7.6 | sin datos suficientes |
| `/guias/oleo-vs-acrilico` | A | 0/15, 0.00 %, 11.7 | 0/12, 0.00 %, 18.2 | sin datos suficientes |
| `/guias/cuanto-cuesta-un-cuadro-original-en-chile` | A | 0/9, 0.00 %, 4.3 | 0/8, 0.00 %, 8.1 | sin datos suficientes |
| `/cuadros` | A | 0/6, 0.00 %, 6.5 | 0/1, 0.00 %, 1.0 | sin datos suficientes |
| `/comprar-cuadros-al-oleo-chile` | A | 0/5, 0.00 %, 5.4 | 1/5, 20.00 %, 15.0 | sin datos suficientes |
| `/guias/elegir-cuadro-para-el-comedor` | A | 0/5, 0.00 %, 6.0 | 0/7, 0.00 %, 8.7 | sin datos suficientes |
| `/guias/como-encargar-una-pintura` | A | 0/2, 0.00 %, 9.5 | 0/9, 0.00 %, 6.0 | sin datos suficientes |

Volumen insuficiente (8 URLs, 67 → 62 impr): no se concluye ni se revierte nada.

### Medición vencida (cambios 2026-11-09, medir 11-23)

- `/artistas-chilenas/matilde-perez` (cambio 11-09): antes 2026-10-27..2026-11-08 0/19 CTR 0.0 % pos 4.4 → después 2026-11-10..2026-11-22 0/0 CTR 0 % pos 0. Sin impresiones en el período posterior (0/0): sin conclusión.


## 2026-11-10 — CTR fichas laguna / retrato y guía de colgar

Search Console (sc-domain:mpedrosa.studio), pull 2026-11-10. Ventanas hasta 2026-11-09 (se excluyó el 11-10 por parcial). 90d (2026-08-12..2026-11-09): 22 clics / 829 impr / CTR 2,65 % / pos 9,1. 28d: 16 / 613 / 2,61 % / pos 9,1. 7d: 5 / 361 vs prev7 5 / 199. Copy aplicado por Cursor. Sin menú/nav/home. Sin precios. Sin página nueva (gaps.json vacío). Medir 2026-11-24. GA4: sin propiedad para este sitio.

### `/pinturas/laguna-cordillera-atardecer`

Title `Laguna y cordillera al atardecer | Óleo de Marcela Pedrosa` → `Laguna y cordillera al atardecer | óleo sobre tela`. Description con laguna, cordillera, atardecer y juncos (hechos del repo), sin medida. H1 y lede alineados. Hubs de la ficha: deja `/cuadros` y `/comprar-cuadros-al-oleo-chile` (congeladas) y apunta a impresionismo figurativo, living y la guía de colgar. `lastmod` 2026-11-10.

### `/guias/cuidar-y-colgar-pintura-al-oleo`

Title `Cómo cuidar y colgar una pintura al óleo` → `Cómo colgar un cuadro al óleo y cuidarlo en casa`. H1 `Cómo colgar y cuidar una pintura al óleo`. Meta nueva (146). El índice conserva la description del 11-03. Enlaces nuevos a `/pinturas/retrato-con-mano` y `/pinturas/laguna-cordillera-atardecer` (sin medida publicada). `modified` y lastmod 2026-11-10.

### `/pinturas/retrato-con-mano`

Title `Retrato con mano al mentón | Óleo de Marcela Pedrosa` → `Retrato con mano al mentón | óleo sobre tela`. Description con la mano al mentón y el color en planos (ficha visual ya documentada), sin medida. H1 y lede alineados. `lastmod` 2026-11-10.

### Enlace de hub

`/retratos-al-oleo` (fuera del menú, no congelada) nombra la guía de colgar junto al retrato con mano. Title del hub intacto.

Detalle en `docs/seo/ctr-tracking.md`. Lista: `docs/seo-lote-2026-11-10.md`.

## 2026-11-09 — CTR perfil Matilde Pérez

Search Console (sc-domain:mpedrosa.studio), pull 2026-11-09. 90d (2026-08-11..2026-11-08): 21 clics / 779 impr / CTR 2,70 % / pos 8,9. 7d (11-02..11-08): 5 / 395 vs prev7 (10-26..11-01) 5 / 124. Copy: DeepSeek V4.1 Flash, aplicado y revisado por Grok Bot. Sin menú/nav/home. Sin precios. Medir 2026-11-23. GA4: sin propiedad para este sitio.

### `/artistas-chilenas/matilde-perez`

Title `Matilde Pérez, arte cinético (1916-2014)` → `Matilde Pérez (1916-2014), artista cinética chilena`. Description sin «Su obra no se vende en este sitio» y con hechos del perfil (Centro de Investigaciones Cinéticas 1975, Premio Altazor 2004). `modified` y `sitemap-lastmod` 2026-11-09. Detalle en `docs/seo/ctr-tracking.md`.

## 2026-11-07 — CTR + tech

Search Console (sc-domain:mpedrosa.studio), pull 2026-11-07. 90d: 21 clics / 717 impr / CTR 2,93 % / pos 8,3. 7d: 7 / 389 vs prev7 4 / 79. Congeladas: magdalena-mira, celia-castro, aurora-mira. Copy: DeepSeek V4.1 Flash (gen-1794054420-a3a4WqutsFAGMKkyWeoc), aplicado por Grok Bot. Sin menú/nav/home. Sin precios. Medir CTR 2026-11-21. GA4 omitido (reauth).

### `/pintoras-chilenas`

Title `Pintoras chilenas famosas y actuales | con fuente` → `Pintoras chilenas famosas y actuales: lista con fuentes`. Description y H1 iguales. Enlace interno nuevo a `/guias/que-es-el-impresionismo-figurativo` junto al hub de impresionismo.

### `/guias/que-es-el-impresionismo-figurativo`

Title/H1 (mismo campo GuideShell) `Qué es el impresionismo figurativo | figura y luz` → `Qué es el impresionismo figurativo: definición y ejemplos`. Description igual. `modified` 2026-11-07.

### Tech

301 `/figura-recostada` → `/pinturas/figura-recostada` en `next.config.ts` (slug correcto en sitemap; 404 live confirmado).
