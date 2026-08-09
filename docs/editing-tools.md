---
sidebar_position: 9
---

# Editing & Canvas Tools

Everything on this page happens in **Edit Mode**. The canvas itself pans and zooms in both
modes — build at whatever magnification is comfortable.

## Selection

- Click a widget to select it; Shift/Ctrl-click extends the selection.
- Drag on empty canvas for a rubber-band selection box.
- Selected widgets show eight resize handles plus a rotate handle, each with its own cursor.

The Attribute Editor follows single selection; the toolbar tools below are how you edit many
widgets at once.

## Direct manipulation

Drag a widget to move it. Drag a handle to resize — resizing behaves correctly on rotated
widgets too. Drag the rotate handle to spin a widget around its center; rotation is stored in
degrees, and rotated widgets stay fully functional in Live Mode (a rotated slider drags along
its rotated axis).

Arrow keys nudge the selection (Shift for a larger step; both distances are page Class
Defaults). The toolbar's **Nudge** tool adds on-screen arrows with their own spinbox-set
distance for repeated, exact steps.

## Toolbar tools

One tool row is active at a time, toggled from the header:

| Tool | Acts on selection |
|---|---|
| **Image** | assigns a texture to every selected widget |
| **Color** | pushes a background/font color onto every selected widget |
| **Label** | sets label text and font size across the selection |
| **Size** | sets exact width/height across the selection |
| **Nudge** | fixed-step arrows, as above |
| **Align** | left/right/top/bottom, horizontal/vertical centers, and even distribution |
| **Mirror** | see below |

Color edits from the toolbar (and the Attribute Editor) coalesce while you drag inside the
color picker — one undo step per color session, not per mouse tick.

## Mirror

Builds one side of a page from the other: **Mirror Horizontal** / **Mirror Vertical** reflect
every selected widget's position across an axis and negate its rotation. The axis is set by the
**Mirror Mode** dropdown:

| Mode | Reflects across |
|---|---|
| Self | each widget's own center — widgets flip in place |
| Last Selected (included) | the last-selected widget's center; it moves too |
| Last Selected (not included) | the last-selected widget's center; it stays put |
| Visible Canvas | the center of what you can currently see |

Mirroring is geometric only — it doesn't rename controls or swap slider channels. The usual
workflow is mirror-then-retarget: mirror the left arm's widgets, then point the copies at the
right-side controls. For repeatable left/right mirroring that remembers the pairing, see
[Mirror Pose](./mirror-pose).

## Layer ordering (Z-order)

Every widget lives in one of three stacked bands — **Images** at the bottom, **Labels** in the
middle, interactive **Controls** on top. A backdrop Image can never cover a button, no matter
when it was added. Within a band, reorder from the Outliner's
[By Layer view](./attribute-editor-and-outliner) or the right-click menu.

## Copy, cut, paste

Ctrl+C / Ctrl+X / Ctrl+V on any selection. Pastes land at the cursor; pasting into another open
page tab works, and an in-place paste preserves exact positions for page-to-page transfers.
Pasted widgets keep their names where possible, deduplicated with a numeric suffix. Toggle
Groups can be copied and pasted [as whole groups](./widget-toggle#toggle-groups).

## Widget defaults

What a freshly added widget looks like is layered, most specific last:

1. **Class Defaults** — per-type starting values (colors, sizes, fonts...) editable on the
   page's Class Defaults panel, one category per widget type.
2. **Sticky Defaults** — right-click any widget → **Copy to Sticky Defaults**, and later
   widgets of that type spawn matching it. Which property categories stick (color, font, corner
   radius, size, rotation, text, image) is chosen in [Editor Settings](./editor-settings).

These apply only to widgets from the Add Widget menu — pasted and loaded widgets keep their own
data.
