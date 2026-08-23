# AI Self-Learn — mpedrosa.studio

Memoria operativa del proyecto para agentes. **Objetivo:** no redescubrir lo mismo y gastar menos tokens.

## Cómo usarlo (agente)

1. **Antes** de tocar SEO, GSC, Ads, Google OAuth o analytics: lee solo [`INDEX.md`](./INDEX.md).
2. Si el tema está en el índice, abre el doc citado — **no** re-rastrear repo ni rehacer OAuth desde cero.
3. **Después** de un hallazgo estable o un cambio relevante: añade 1–5 líneas en [`log.md`](./log.md) y actualiza el bullet en `INDEX.md`.
4. No copies informes GSC/Ads completos aquí; enlaza a `docs/gsc-informe-*.md` u otros informes.

## Cómo usarlo (humano)

- Anota decisiones (“no cambiar copy de la clienta”) y resultados medidos.
- Corrige hechos obsoletos en el INDEX (fecha al lado).
- Si el log crece mucho, archiva en `archive/` y deja el resumen en INDEX.

## Reglas de escritura (ahorro de tokens)

| Hacer | Evitar |
| --- | --- |
| Hechos: URL, métrica, decisión, fecha | Narrativa larga |
| Un bullet = una verdad usable | Duplicar el mismo dato en 3 docs |
| Enlazar informe/código | Pegar JSON de tokens o tablas enteras |
| Marcar `pendiente:` / `hecho:` | TODOs vagos |

## Estructura

```
docs/ai-self-learn/
  README.md    ← este archivo
  INDEX.md     ← leer primero (siempre corto)
  log.md       ← append-only cronológico
  archive/     ← logs viejos (opcional)
```

## Relacionado

- Regla Cursor: `.cursor/rules/ai-self-learn.mdc`
- GSC OAuth / scripts: [`docs/gsc-oauth-setup.md`](../gsc-oauth-setup.md)
- Brand: [`docs/BRAND.md`](../BRAND.md)
- Skills SEO: `.agents/skills/seo`, `seo-geo`, `programmatic-seo`
