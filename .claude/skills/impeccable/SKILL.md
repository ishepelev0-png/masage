---
name: impeccable
description: Designer's vocabulary — a dictionary of precise, professional design terminology for describing, critiquing, and specifying visual/UI design (layout, spacing, typography, color, hierarchy, depth, tone). Use whenever writing design feedback, a design spec, a component description, or comparing design options, instead of vague words like "nice", "clean", "modern", or "pretty".
---

# Impeccable — Designer's Vocabulary

A vague word ("clean", "nice", "modern", "pretty", "off") gives no
actionable signal. Replace it with the precise term below. Use this
vocabulary when writing design feedback, describing a UI, specifying a
component, or comparing options — say exactly what is being judged and
why.

## Layout & spacing

- **Rhythm** — the repeating pattern of spacing/sizing across a layout;
  "broken rhythm" = inconsistent gaps between otherwise similar elements.
- **Density** — how much content/whitespace per unit area; describe as
  *dense*, *airy*, *cramped*, *generous*.
- **Alignment / edge** — elements sharing an invisible line; "misaligned"
  is a defect, not a style choice, unless justified.
- **Grid / gutter** — the underlying column structure and the fixed gaps
  between columns.
- **Proximity** — grouping via distance; related items sit closer than
  unrelated ones (a Gestalt principle, not decoration).
- **Balance** — visual weight distributed evenly (symmetric) or
  deliberately uneven (asymmetric) across a composition.
- **Composition** — how all elements relate as a whole, not element by
  element.

## Typography

- **Hierarchy** — the ordered sizes/weights that tell the eye what to
  read first, second, third.
- **Tracking / kerning / leading** — letter-spacing, pair-spacing, and
  line-height, respectively; don't say "the text looks off," name which
  one.
- **Measure** — line length in characters; too wide/narrow hurts
  readability (~50–75 characters is the usual target for body text).
- **Optical size** — how a typeface's proportions should shift at
  different sizes (fine at display size ≠ fine at caption size).
- **Contrast (type)** — the size/weight delta between hierarchy levels;
  "weak contrast" = levels read as the same importance.
- **Voice vs. tone** — voice is the constant personality of the copy;
  tone is how that voice adapts to context (an error vs. a celebration).

## Color

- **Hue / saturation / value** — the three axes of a color; say which one
  is wrong instead of "the color feels off."
- **Contrast ratio** — the measurable luminance difference between
  foreground/background (WCAG AA ≈ 4.5:1 for body text).
- **Temperature** — warm vs. cool bias of a palette.
- **Accent** — the deliberately minority color used to draw the eye;
  overusing it collapses the hierarchy it's meant to create.
- **Tint / shade / tone** — a color mixed with white / black / gray,
  respectively.

## Hierarchy, depth & emphasis

- **Focal point** — the single element the eye should land on first; a
  layout with two competing focal points reads as unresolved.
- **Elevation** — perceived z-axis stacking (shadow, blur, scale) used to
  signal what's interactive or above the surface.
- **Affordance** — a visual cue that signals how an element can be used
  (a shadow implies "liftable/clickable").
- **Signal-to-noise** — the ratio of meaningful visual information to
  decorative clutter; "noisy" means too many elements compete at once.
- **Legibility vs. readability** — legibility is can-you-distinguish-the-
  letterforms; readability is can-you-comfortably-read-the-passage. A
  typeface can be legible but still low-readability at a given measure.

## Texture, surface & form

- **Surface** — a distinct plane in the UI (card, sheet, sidebar);
  describe relationships between surfaces, not just each one alone.
- **Corner radius consistency** — radii should scale with element size,
  not use one flat value everywhere.
- **Materiality** — the metaphor a surface evokes (glass, paper, matte
  plastic) via blur/shadow/texture choices.

## Critique phrasing

State the observation, the principle it violates, and the fix — in that
order:

> "The CTA and the secondary link have the same type weight, so
> hierarchy is flat — bump the CTA to a heavier weight or give it a
> filled surface to establish a single focal point."

Never stop at "this feels off" — name the axis (spacing, contrast,
alignment, hierarchy) the problem lives on.
