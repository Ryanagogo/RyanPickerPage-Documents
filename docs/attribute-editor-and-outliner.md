---
sidebar_position: 13
---

# Attribute Editor & Outliner

The two Edit Mode sidebars. Each has its own header toggle, so you can keep either, both, or
neither on screen.

## Outliner (left)

A list of everything on the page — click a row to select the widget, double-click to rename it,
right-click for move/delete. Three views, switched by the buttons above the list:

- **By Type** — grouped under the six widget-type headers. The everyday view.
- **By Layer** — grouped by [Z-order band](./editing-tools#layer-ordering-z-order), in draw
  order, with move up/down actions — this is where stacking gets rearranged.
- **By Group** — [Toggle Groups](./widget-toggle#toggle-groups) with their members nested
  under each named header; group renames happen here too.

Widget names are unique per page (case-insensitively) — a rename that collides is rejected and
reverted rather than silently mangled. The view you last used is remembered globally across
sessions.

## Attribute Editor (right)

The properties of the currently selected widget, in a details panel. It edits **one widget at a
time** — for sweeping the same change across many widgets, use the
[toolbar tools](./editing-tools#toolbar-tools) instead.

Which fields appear depends on the widget's type; each widget page documents its own set. The
common block — position, size, rotation, corner radius, widget name — is always present.

Two behaviors worth knowing:

- **In-progress edits commit before selection changes.** If you're mid-edit in a field and
  click a different widget, the pending value is committed to the widget you were actually
  editing — it can't leak onto the newly selected one.
- **The 2D Slider same-channel warning** renders as a colored banner right in the panel — see
  [2D Slider](./widget-2d-slider).

## Corner radius

Widget rounding resolves through a three-level cascade, most specific wins:

1. **Per-widget override** — an "override corner radius" flag plus a custom value on the
   individual widget.
2. **Per-type Class Default** — each widget type can set its own default in the page's Class
   Defaults panel.
3. **Global default** — 10 for the button/slider/toggle types; Labels and Images default to
   square (0). The global fallback is adjustable in [Editor Settings](./editor-settings).

Uncustomized widgets follow the cascade live — raise the type default and every non-overridden
widget of that type updates with it.

## Live Mode tooltip

In Live Mode, hovering any widget shows a tooltip summarizing its wiring — what it's named and
which controls/actors it drives. It's the quickest way to audit an unfamiliar page without
entering Edit Mode.
