---
name: emil-kowalski
description: Apply Emil Kowalski's UI animation and motion-design principles (creator of Vaul, Sonner, and the "Animations on the Web" course) when writing or reviewing CSS transitions, Framer Motion / motion.dev code, gesture-driven interactions (drag-to-dismiss, swipe), toasts, drawers, modals, or any interactive micro-animation. Use whenever the task involves adding motion, transitions, or interactive feedback to a UI.
---

# Emil Kowalski — Animation & Motion Principles

Apply these principles whenever implementing or reviewing UI motion: CSS
transitions/keyframes, Framer Motion / `motion` components, spring physics,
gesture-driven interactions (drag-to-dismiss sheets, swipeable toasts),
page/element transitions, or loading/feedback states.

## Core rules

1. **Every animation needs a purpose.** Motion should give feedback, guide
   attention, or communicate a spatial/state relationship (e.g. where an
   element came from or is going). If an animation doesn't do one of these,
   cut it — decoration for its own sake is a red flag.

2. **Animate only `transform` and `opacity`.** These are compositor-only
   properties and stay smooth on low-end devices. Avoid animating `width`,
   `height`, `top`, `left`, `margin`, or other layout-triggering properties;
   use `transform: translate/scale` instead. Reach for `grid-template-rows`
   or FLIP-style transform tricks over animating `height` directly.

3. **Keep durations short and match them to distance/size.** Most UI
   feedback (hover, press, small toggles) should land around 100–200ms.
   Larger elements entering/leaving the screen (drawers, modals, sheets)
   can run 200–400ms. Anything much longer than ~500ms starts to feel
   sluggish — err short and let easing carry the feel, don't stretch
   duration for polish.

4. **Choose easing based on the direction of motion, not one default
   curve.**
   - Elements **entering** the screen: ease-out (fast start, gentle
     settle) — e.g. `cubic-bezier(0.32, 0.72, 0, 1)`.
   - Elements **exiting**/being dismissed: ease-in, or let the exit
     accelerate away, especially for flings/swipes.
   - Avoid `linear` and the default `ease` for anything meant to feel
     designed — pick a deliberate cubic-bezier.
   - For anything driven by user gestures (drag, resize), prefer spring
     physics over fixed-duration easing so motion continues naturally when
     released mid-gesture.

5. **Interruptible and responsive over "correct."** An in-progress
   animation must be able to be grabbed, reversed, or redirected by new
   user input (e.g. dragging a sheet back up mid-close). Never block input
   for the duration of an animation unless it's a deliberate, very short
   lock. Gesture-driven UI (drawers, toasts, carousels) should track the
   pointer 1:1 during the drag and only hand off to a spring/easing curve
   on release.

6. **Animate from the point of origin.** Modals, dropdowns, and context
   menus should visually originate from the element that triggered them
   (or the interaction point) rather than fading in from nowhere — this
   preserves spatial continuity for the user.

7. **Respect `prefers-reduced-motion`.** Provide a reduced/instant variant
   (or drop transforms to fades/no-op) for users who request it; don't skip
   this as an afterthought.

8. **Tune by feel, not just spec.** Test animations at real speed (not
   slow-motion devtools) on the actual interaction — a curve that looks
   right in isolation can feel laggy or twitchy in context. Iterate on
   timing/easing until the interaction feels immediate, not until it
   matches a number on paper.

9. **Don't animate everything.** Reserve motion for state changes, entry/
   exit, and direct feedback to user action. Avoid animating on every
   re-render, list reflow, or route change unless it clarifies what
   changed.

## When reviewing existing animation code

Check for: layout-property animation (`width`/`height`/`top`/`left`
transitions) that should be `transform`-based instead, unbounded durations
(>500ms without justification), missing exit animations for
dismissible UI, un-interruptible drag interactions, and missing
`prefers-reduced-motion` handling.
