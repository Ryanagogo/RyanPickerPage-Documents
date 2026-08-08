---
sidebar_position: 13
---

# Attribute Editor & Outliner

Both live in Edit Mode's sidebars and can be toggled independently.

## Outliner (left sidebar)

Lists every widget on the page and lets you click to select, or right-click to rename/move/delete.
It's deliberately "dumb" — it just renders whatever grouping the page hands it and reports clicks
back — all categorization logic lives on the page itself. Three display modes, switched from
buttons above the list:

- **By Type** — grouped under each of the six widget-type headers (Buttons, Sliders, Toggles, …)
- **By Layer** — grouped by Z-order band (Image / Label / Control), letting you reorder widgets
  front-to-back within a band directly from the list
- **By Group** — Toggle-only view, nesting each Toggle Group's members under its named header
  (the only widget type that can be grouped today — see [Toggle](./widget-toggle#toggle-groups))

Your last-used display mode is a global, cross-session preference shared by every page you open on
this machine.

## Attribute Editor (right sidebar)

Shows the editable properties of whatever's currently selected, driven by a details-panel proxy
object rather than exposing the live widget directly. Which fields appear depends entirely on the
selected widget's type — see each widget's own page for its specific field list:
[Select Button](./widget-select-button#attribute-editor-fields), [1D Slider](./widget-1d-slider),
[2D Slider](./widget-2d-slider), [Toggle](./widget-toggle), [Label](./widget-label),
[Image](./widget-image).

Selecting nothing (or multiple widgets of mixed type) shows the shared bulk-apply toolbar tools
instead — see [Editing & Canvas Tools](./editing-tools#size--color--label--image-toggles).

### Live Mode hover tooltip

While in Live Mode, hovering a widget shows a small tooltip summarizing what it will do when
clicked (its label/name and its resolved controls/actors) — a quick way to check a page's wiring
without switching to Edit Mode.

## Class Defaults & Sticky Widget Defaults

Two separate ways to control what a *newly spawned* widget starts out looking like:

- **Class Defaults** (Blueprint Class Defaults panel, one category per widget type, e.g.
  `RyanPickerPage|Widgets|SelectionButton`) — static starting values applied only when a widget
  is created via the **Add Widget** menu (not Paste/Load, which use their own copied/saved data).
- **Sticky Widget Defaults** ("Copy to Sticky Defaults" on a widget's popup menu) — captures a
  widget's full field set and applies it to every *subsequently*-spawned widget of that type,
  layered on top of Class Defaults. Which of 7 field categories (color, font, corner radius, size,
  rotation, text, image) actually get applied is configurable in
  [Editor Settings](./editor-settings).
