---
sidebar_position: 2
---

# Getting Started

## Opening a page

Open the plugin from **Tools → Ryan Picker Page**. Each click of "New Tab" opens another
independent page tab — you can have several picker pages open at once, each tracking its own
Control Rig, canvas view, and Edit/Live mode.

A page starts empty. Everything you see — buttons, sliders, the header, the sidebars — is built
procedurally in C++ when the tab opens; there's no Blueprint widget tree to break.

## Edit Mode vs. Live Mode

The page has two modes, toggled with the Edit Mode button in the header:

- **Live Mode** — the mode you animate in. Clicking a widget selects its Control Rig
  controls/target actors in the viewport (and Sequencer, if bound); dragging a slider drives the
  transform live. Nothing about the layout can be changed.
- **Edit Mode** — the mode you build the page in. Widgets show resize/move handles, a
  right-click gives you an **Add Widget** menu, and two sidebars appear:
  - **Outliner** (left) — every widget on the page, grouped by type, Z-order band, or Toggle
    Group
  - **Attribute Editor** (right) — the properties of whatever's currently selected

Both sidebars can be toggled independently so you can work with just the canvas visible.

## Basic workflow

1. Enter Edit Mode.
2. Right-click empty canvas space → **Add Widget** → pick a widget type (see the Widget Types
   pages). It spawns at your cursor.
3. Select it and use the Attribute Editor to set its label/color/size, and its Control Rig
   controls or target actors (see [Control Rig & Target Actors](./control-rig-and-targets)).
4. Use the toolbar's Align/Distribute/Nudge/Mirror tools and the canvas selection box to lay
   multiple widgets out (see [Editing & Canvas Tools](./editing-tools)).
5. Exit Edit Mode and click around to confirm the page selects/drives what you expect.
6. **File → Save** (or **Save As**) to write the page out as a `.json` file (see
   [Saving, Loading & Files](./save-load-and-files)).

## Undo / Redo

Every edit-mode change (move, resize, add, delete, paste, color change, etc.) is captured onto an
in-memory undo stack (30 steps by default, configurable — see [Editor Settings](./editor-settings)).
Undo/Redo buttons sit in the header; standard Ctrl+Z / Ctrl+Y also work while the page has focus.
Bookmarks have their own, completely separate undo stack (see [Bookmarks](./bookmarks)).

## Multiple tabs, multiple Control Rigs

A page tab tracks its own **Current Control Rig** (picked from the header combo box, populated
from whatever Control Rigs are bound in the currently-focused Level Sequence) and its own
canvas pan/zoom. Switching Level Sequences with a tab left open refreshes that combo box
automatically. Where you left off per *file* (pan/zoom, active rig, Edit/Live mode) is restored
automatically the next time you load that same file — see
[Saving, Loading & Files](./save-load-and-files#session-state).
