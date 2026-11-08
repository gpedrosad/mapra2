# Seguimiento de CTR (clics bajos) — mpedrosa.studio

Cada entrada: URL, consulta objetivo, métricas antes (GSC, sc-domain:mpedrosa.studio), cambio, fecha y fecha de medición (+14 días).

## 2026-11-08 — CTR test Opus 5.5 (medir 2026-11-22)

Solo snippets (title + meta). H1, home y menú intactos. Baseline GSC del draft (página).

| URL | Consulta | Antes (clics/impr/CTR/pos) | Title antes → después | Description antes → después |
|---|---|---|---|---|
| /pinturas | pinturas | página 0/20/0 %/7,3 | "Pinturas originales al óleo \| Marcela Pedrosa" → "Pinturas originales al óleo en Concepción \| Marcela Pedrosa" | "Pinturas originales al óleo de Marcela Pedrosa en Concepción. Mira cada obra, sus medidas y consulta disponibilidad." → "Óleos sobre tela de Marcela Pedrosa, pintados en su taller de Concepción. Mira cada obra y sus medidas, y consulta disponibilidad." |
| /artistas-chilenas/henriette-petit | henriette petit | página 0/14/0 %/4,1 | "Henriette Petit, Montparnasse (1894-1983)" → "Henriette Petit (1894-1983): vida y obra de la pintora" | "Henriette Petit (1894-1983), cofundadora del Grupo Montparnasse. Su obra no se vende en este sitio." → "Ana Enriqueta Petit Marfán, cofundadora del Grupo Montparnasse: formación, París, retratos y desnudos. Perfil editorial; su obra no se vende aquí." |
| /guias/oleo-vs-acrilico | oleo vs acrilico | página 0/15/0 %/11,7 | "Óleo vs acrílico para comprar arte" → "Óleo vs acrílico: diferencias al comprar una pintura" | "Diferencias entre óleo y acrílico al comprar arte original: secado, superficie, duración y qué mirar en la tela." → "Secado, brillo, olor, duración y cuidado: cómo comparar un óleo y un acrílico al comprar arte original y qué preguntar antes de colgarlo." |

H1 sin cambios: Pinturas; Henriette Petit; Óleo vs acrílico para comprar arte (GuideShell: `h1` distinto del title).

## 2026-11-07 (medir 2026-11-21)

Métricas sitio 90d: 21c / 717i / CTR 2,93 % / pos 8,3; 7d 7/389 vs prev7 4/79.

| URL | Consulta | Antes | Title antes → después | Notas |
|---|---|---|---|---|
| /pintoras-chilenas | pintoras chilenas | propuesta 11-04 (1/47 CTR 2,1 % pos 8,6 en 90d al 11-02) | "Pintoras chilenas famosas y actuales \| con fuente" → "Pintoras chilenas famosas y actuales: lista con fuentes" | description y H1 sin cambio |
| /guias/que-es-el-impresionismo-figurativo | impresionismo figurativo | propuesta 11-04 (página 0/15 pos 3,2) | "Qué es el impresionismo figurativo \| figura y luz" → "Qué es el impresionismo figurativo: definición y ejemplos" | GuideShell usa title=H1; modified 2026-11-07 |

### Tech
- 301 `/figura-recostada` → `/pinturas/figura-recostada` (slug correcto en sitemap; live 404 confirmado 2026-11-07).

Congeladas sin tocar: magdalena-mira, celia-castro, aurora-mira. Menú/nav/home intactos.

## 2026-11-04 (medir 2026-11-18)
Métricas antes: 7 días 2026-10-27..2026-11-02 (las páginas se indexaron en esa semana; 90 días = mismos números).

| URL | Consulta | Antes (clics/impr/CTR/pos) | Title antes → después | Description antes → después |
|---|---|---|---|---|
| /artistas-chilenas/magdalena-mira | magdalena mira (0/6, pos 1,0); magdalena mira mena (0/3) | página 0/51/0 %/5,1 | "Magdalena Mira, pintora chilena (1859-1930)" → "Magdalena Mira, pintora y escultora (1859-1930)" | "Magdalena Mira (1859-1930), pintora y escultora. Medalla de oro en 1884. Su obra no se vende en este sitio." → "Magdalena Mira Mena (1859-1930), pintora y escultora chilena. Biografía, medalla de oro de 1884 y dónde ver su obra en el Museo Nacional de Bellas Artes." |
| /artistas-chilenas/celia-castro | celia castro (0/10, pos 1,0); celia castro pinturas (0/2); celia castro pintora chilena (0/1) | página 1/22/4,5 %/3,5 | "Celia Castro, pintora de Quillota (1860-1930)" → "Celia Castro, pintora chilena (1860-1930)" | "Celia Castro (1860-1930), de Quillota. Primera mujer pensionada para estudiar en París. Su obra no se vende aquí." → "Celia Castro (1860-1930), de Quillota, una de las primeras pintoras profesionales de Chile. Biografía, premios y dónde ver su obra en museos y pinacotecas." |
| /artistas-chilenas/aurora-mira | aurora mira (0/3, pos 1,7) | página 0/14/0 %/10,9 | "Aurora Mira, pintora chilena (1863-1939)" → "Aurora Mira, pintora de flores y bodegones (1863-1939)" | "Aurora Mira (1863-1939), retratos, flores y bodegones. Su obra no se vende aquí. El bodegón de Marcela es otra tela." → "Aurora Mira Mena (1863-1939), pintora chilena de flores y bodegones. Biografía, premios y dónde ver su obra en el Museo Nacional de Bellas Artes." |

H1 sin cambios en las tres (nombre de la artista).

### Propuestas fechadas 2026-11-04 (aplicar desde 2026-11-06, la página se editó hace <7 días)
- /pintoras-chilenas (editada 10-29). Consulta "pintoras chilenas" 1/47, CTR 2,1 %, pos 8,6 (90 días 08-05..11-02); "artistas chilenas mujeres pintoras" 0/8 pos 7,4. Title actual "Pintoras chilenas famosas y actuales | con fuente" → propuesto "Pintoras chilenas famosas y actuales: lista con fuentes". Description y H1 sin cambios.
- /guias/que-es-el-impresionismo-figurativo (editada 10-30). Consulta "impresionismo figurativo" 0/9, pos 3,1 (90 días); página 0/15 pos 3,2. H1 actual "Qué es el impresionismo figurativo | figura y luz" (lleva una barra de title) → propuesto "Qué es el impresionismo figurativo". Title "Qué es el impresionismo figurativo | figura y luz" → "Qué es el impresionismo figurativo: definición y ejemplos".
