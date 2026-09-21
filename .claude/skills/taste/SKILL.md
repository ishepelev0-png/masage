---
name: taste
description: Design taste — recognize and avoid generic "AI-generated look" UI clichés (default purple/blue gradients, identical rounded feature cards, glassmorphism-everywhere, generic emoji icons, symmetric hero-with-blob layouts) and make deliberate, considered visual decisions instead. Use whenever designing or building a UI, landing page, component library, or any visual layout from scratch — before writing markup/CSS, and when reviewing a UI for genericness.
---

# Taste — Avoiding the Generic "AI Design" Look

Most AI-generated UIs converge on the same handful of safe, forgettable
patterns because they're the statistical average of every template ever
seen — not because they're the right choice for this product. Good taste
means noticing that convergence and deliberately choosing something more
specific to the content and context instead.

## Recognize the clichés (audit against this list before shipping a UI)

- **The indigo-to-purple (or blue-to-cyan) gradient** on hero sections,
  buttons, and backgrounds — the single most recognizable "AI-made this"
  tell. Same with gradient text on headlines.
- **Blobby abstract background shapes** (soft organic splotches, mesh
  gradients) floating behind a centered hero, with no relation to the
  product.
- **Glassmorphism by default** — frosted-glass translucent cards used
  everywhere regardless of whether depth/blur serves the content.
- **The 3-column feature grid**: icon-in-a-circle, bold title, one-line
  gray description, repeated exactly 3 or 6 times, all identically sized.
- **Generic emoji or outline icons** (🚀 ✨ 💡) standing in for real,
  considered iconography or no icon at all.
- **Centered-everything hero**: headline, subheadline, two pill buttons,
  all center-aligned, all the same layout as every other landing page.
- **Rounded-corner-on-everything at one radius**, drop shadow on every
  card, regardless of hierarchy or material logic.
- **Inter/system-font, safe, characterless typography** with no
  deliberate pairing, scale, or point of view — because it's the default,
  not because it was chosen.
- **Testimonial cards with circular avatar + 5 stars + italic quote**,
  identical in every SaaS template.
- **Lorem-ipsum-shaped filler copy**: vague, enthusiastic, content-free
  headlines ("Supercharge your workflow", "Unlock your potential") instead
  of copy specific to what the product actually does.
- **Uniform, undifferentiated spacing** — every gap the same size because
  no one decided on a deliberate rhythm (see the `impeccable` skill for
  the vocabulary to name this precisely).

None of these are wrong in isolation — the problem is using them as the
*default, unexamined* choice rather than a decision made for this specific
product.

## What to do instead

1. **Start from the content, not a template.** Look at what this specific
   product/page/component actually needs to communicate, and let the
   layout follow from that — not from "what do landing pages usually look
   like."
2. **Make one deliberate, specific choice per surface** — a color that
   ties to the product's actual domain, a typeface pairing with a point of
   view, an illustration/photography style instead of generic icons, an
   asymmetric layout when the content isn't naturally 3-way-equal.
3. **Constrain the palette on purpose.** Pick colors for a reason (brand,
   content domain, mood) rather than reaching for a gradient because it's
   the safe/pretty default. A confident two-color palette beats an
   unmotivated gradient.
4. **Vary rhythm deliberately.** Not everything needs the same border
   radius, shadow, or spacing — hierarchy should be visible in the
   structure itself, not just in text size.
5. **Write real copy.** Headlines and descriptions should say something
   only true of this product, not something that could be pasted onto any
   SaaS site unchanged.
6. **Ask "would this specific choice survive if I couldn't use the
   default?"** If a gradient, icon set, or layout was picked because it's
   the first thing that came to mind rather than because it's right for
   this content, reconsider it.

## When reviewing a UI

Walk the checklist above explicitly. For each match, ask whether it's a
deliberate choice justified by this product's content/brand, or just the
unexamined default — and if it's the latter, replace it with something
more specific. Pair with `impeccable` for precise vocabulary to describe
what's wrong, and with `emil-kowalski` for motion decisions.
