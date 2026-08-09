---
sidebar_position: 2
---

# Getting Started

## Opening a page

**Tools → Ryan Picker Page** opens a page in a new editor tab. The **New Tab** button in the
page header opens more — each tab is fully independent, with its own file, its own Control Rig
selection, and its own canvas view. Renaming a page (its title is editable in Edit Mode) renames
its tab, so a wall of open pickers stays navigable.

## Two modes

The Edit Mode button in the header switches the whole page between:

**Live Mode** — the animating mode. Clicking widgets selects rig controls and actors; dragging
sliders drives transforms; hovering a widget shows a tooltip of what it's wired to. The layout
itself is untouchable.

**Live Mode is where a finished page spends its life.** Everything under
[Editing & Canvas Tools](./editing-tools) exists to get you here.

**Edit Mode** — the building mode. Widgets grow move/resize/rotate handles, right-clicking
empty canvas opens the **Add Widget** menu, and two collapsible sidebars appear: the
[Outliner](./attribute-editor-and-outliner) on the left, the
[Attribute Editor](./attribute-editor-and-outliner) on the right.

## Build your first page

A minimal one-leg picker, end to end:

1. Open a Level Sequence containing your character and its Control Rig, then open a picker page.
   The header's rig dropdown fills itself from the focused sequence — pick your rig (it
   auto-selects if there's only one).
2. Enter **Edit Mode**.
3. In the viewport or Anim Outliner, select the thigh control. Right-click the canvas →
   **Add Widget → Selection Button**. By default a new button seeds its target list from the
   current selection, so this button already drives the thigh.
4. Repeat for calf and foot. Use the label field in the
   [Attribute Editor](./attribute-editor-and-outliner) to name each button, and drag them into a
   leg-shaped column.
5. Select all three and try the [Align tools](./editing-tools) to straighten the column.
6. Exit Edit Mode. Click the buttons — each selects its control. That's the loop; everything else
   is refinement.
7. **File → Save** writes the page to a JSON file anywhere you like — see
   [Saving, Loading & Files](./save-load-and-files).

## Undo, redo, and safety nets

Every Edit Mode change — moves, resizes, adds, deletes, pastes, color edits — lands on the
page's undo stack (30 steps by default; see [Editor Settings](./editor-settings)). Ctrl+Z /
Ctrl+Y, or the header buttons. Dragging inside a color picker coalesces into a single undo step
rather than one per tick, so undoing a color change undoes the whole drag.

[Bookmarks](./bookmarks) keep a separate undo stack of their own — layout undo never disturbs
your saved views, and vice versa.

## Picking up where you left off

Per saved file, the plugin remembers your canvas pan/zoom, which Control Rig was active, and
whether you were in Edit or Live Mode — all restored automatically the next time that file is
loaded, on this machine. This lives outside the page file itself, so sharing a page with a
teammate shares the layout, not your viewport habits. See
[Saving, Loading & Files](./save-load-and-files#session-state).
