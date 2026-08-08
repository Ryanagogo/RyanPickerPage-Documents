---
sidebar_position: 9
---

# Editing & Canvas Tools

These tools live on the header/toolbar and only do anything while the page is in **Edit Mode**
(see [Getting Started](./getting-started#edit-mode-vs-live-mode)).

## Selecting

- Click a widget to select it; Shift/Ctrl-click to add to the selection.
- Drag on empty canvas to draw a selection box; every widget it touches is selected.
- Selected widgets show resize/move handles (8 handles + a rotate handle) you can drag directly.

## Move / Resize / Rotate

Drag a selected widget to move it, drag a handle to resize, or drag the rotate handle to spin it
around its own center. Rotation is stored in degrees, wrapped to `[0, 360)`.

## Nudge

The **Nudge** tool moves the current selection by a fixed step using the on-screen arrow buttons,
or the keyboard (arrow keys nudge by `KeyboardNudgeAmount`; holding Shift nudges by
`KeyboardNudgeAmountShift`, both configurable Class Defaults).

## Align & Distribute

With 2+ widgets selected:

- **Align**: Left, Right, Top, Bottom, Horizontal Center, Vertical Center
- **Distribute**: Horizontal, Vertical — spaces the selection evenly between its extremes

## Size / Color / Label / Image toggles

Bulk-apply toolbar toggles let you push a Width/Height, background/font Color, Label text (+ font
size), or Image onto every widget in the current selection at once, instead of editing each one
individually in the Attribute Editor.

## Mirror tool

Reflects each selected widget's position across a horizontal or vertical axis and negates its
rotation. Does **not** remap slider channels or control/target-actor names — it's a layout tool,
not a rig-mirroring tool (for mirroring an actual pose across a rig, see
[Mirror Pose](./mirror-pose)).

The mirror axis's anchor point depends on **Mirror Mode**, picked from the toolbar combo box:

| Mode | Anchor |
|---|---|
| `Self` | Each widget mirrors around its own center independently |
| `LastSelectedIncluded` | All widgets mirror around the last-selected widget's center (the last-selected widget itself also moves) |
| `LastSelectedNotIncluded` | Same anchor, but the last-selected widget stays put |
| `VisibleCanvas` | Mirrors around the center of the currently-visible canvas viewport |

Trigger with the **Mirror Horizontal** / **Mirror Vertical** buttons.

## Layer ordering (Z-order)

Widgets live in one of three Z-order **layer bands** (Image, Label, Control) so, for example, a
background Image can never accidentally render on top of a Select Button regardless of creation
order. Within a band, the Outliner's **By Layer** display mode and its move-up/move-down actions
let you reorder widgets front-to-back.

## Copy / Cut / Paste

Standard Ctrl+C / Ctrl+X / Ctrl+V work on the current selection. Paste offsets to the cursor by
default; a variant pastes in-place at the exact original position (used for cross-tab paste).
Copying a Toggle Group member offers a matching "paste as new group" option.

## Undo / Redo

See [Getting Started → Undo/Redo](./getting-started#undo--redo).
