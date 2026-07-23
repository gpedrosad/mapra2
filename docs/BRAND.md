# Marca visual — Marcela Pedrosa

Tokens de color y tipografía del sitio. La fuente de verdad en código es `src/app/globals.css`.

## Paleta

| Token | Valor | Uso |
|---|---|---|
| `--cream` / `--background` | `#fcfbe9` | Fondo de página |
| `--brand` | `#960018` | Acento de marca (menú, footer, CTAs) |
| `--brand-hover` | `#7a0014` | Hover de acento |
| `--ink` | `#1a1714` | Títulos y texto principal |
| `--ink-body` | `#3f3a34` | Cuerpo de lectura |
| `--ink-muted` | `#6b645c` | Meta, subtítulos |
| `--ink-subtle` | `#8f877c` | Labels / eyebrows |
| `--ink-faint` | `#b7aea2` | Separadores tipográficos |
| `--line` | tinta 12% | Bordes suaves |
| `--line-strong` | tinta 22% | Separadores más marcados |
| `--surface` | `#fffdf3` | Superficies elevadas claras |

## Tipografía

| Token | Familia | Uso |
|---|---|---|
| `--font-display` (clase `font-display`) | Fraunces | Nombre, títulos, cierre de bio |
| `--font-sans` (clase `font-sans`) | Geist | Cuerpo, UI, botones |

## Uso en Tailwind (v4)

Los tokens están mapeados en `@theme`, así que podés usar utilidades:

```html
<div class="bg-cream text-ink border-line">
  <h1 class="font-display text-ink">Marcela Pedrosa</h1>
  <p class="text-ink-muted">Concepción, Chile</p>
  <a class="bg-brand hover:bg-brand-hover text-white">WhatsApp</a>
</div>
```

También podés usar CSS vars directas: `bg-[var(--brand)]`, `text-[var(--ink-muted)]`.

## Alias legacy

Para no romper código existente:

- `--brand-color` → `--brand`
- `--brand-green` → `--brand` (nombre histórico; el color es borgoña)
- `--foreground` → `--ink`

## Reglas rápidas

1. Preferí `ink` / `ink-muted` / `line` antes que `zinc-*` en superficies nuevas.
2. El acento de marca es `--brand` (`#960018`), no verde.
3. El fondo de página es cream; no uses grises fríos grandes como plano de fondo.
4. Si cambiás un token, actualizá este doc y `globals.css` juntos.
