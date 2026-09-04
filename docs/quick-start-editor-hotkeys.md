# Hotkeys

Every keyboard shortcut and mouse gesture the picker editor responds to.

### Focus and mode rules

- **Keyboard shortcuts only work while the canvas has focus.** The canvas takes focus as soon as you click on it. If a sidebar field or the Outliner list has focus, your keystrokes go there instead.
- Only the **F** shortcut works in Live Mode. Every other keyboard shortcut is Edit Mode only.
- Right-drag panning and mouse-wheel zoom work in both Edit and Live Mode.

### Keyboard

| Key | Action | Mode |
|---|---|---|
| **Delete** | Delete the selected widgets | Edit only |
| **F** | Center the canvas view on the current selection (zoom is left unchanged) | Edit + Live |
| **Arrow keys** | Nudge the selection (default 2 px) | Edit only |
| **Shift + Arrow keys** | Nudge the selection by a larger step (default 10 px) | Edit only |
| **Ctrl + X** | Cut the selected widgets | Edit only |
| **Ctrl + C** | Copy the selected widgets | Edit only |
| **Ctrl + V** | Paste at the mouse cursor | Edit only |
| **Ctrl + Z** | Undo | Edit only |
| **Ctrl + Shift + Z** or **Ctrl + Y** | Redo | Edit only |

The two keyboard nudge distances are set on the page's Class Defaults panel. They are separate from the toolbar **Nudge** tool, which has its own distance field.

Copy / cut / paste works across open page tabs.

**Not bound:** there is no Ctrl+A (select all), Ctrl+S (save), Ctrl+D (duplicate), or Escape (deselect). Duplicate, Align, Distribute, and Mirror are on the right-click menu or the toolbar only.

### Mouse - selecting widgets

Only Ctrl and Shift change how selection works.

| Gesture | Action |
|---|---|
| Click a widget | Select just that widget |
| Ctrl + click a widget | Add or remove that widget from the selection |
| Shift + click a widget | Add that widget to the selection |
| Click empty canvas | Clear the selection |
| Drag on empty canvas | Draw a selection box |
| Ctrl or Shift + drag a selection box | Add the boxed widgets to the current selection instead of replacing it |
| Click a row in the Outliner | Selects that widget - and works even on locked widgets |
| Double-click a row in the Outliner | Rename it |

### Mouse - moving, resizing, rotating (Edit Mode)

The eight resize handles and the move handle only appear in Edit Mode.

| Gesture | Action |
|---|---|
| Drag the move handle | Move the selected widgets |
| **Alt** + drag the move handle | Rotate instead of move |
| **Alt + Shift** + drag the move handle | Rotate, snapping to 15 degree steps |
| Drag an edge or corner handle | Resize (works correctly on rotated widgets) |

Hold Alt before you press the move handle to start rotating. Keep Shift held during the drag to snap.

### Mouse - navigating the canvas

| Gesture | Action | Mode |
|---|---|---|
| Mouse wheel | Zoom toward the cursor | Edit + Live |
| Right-drag | Pan the canvas | Edit + Live |
| Right-click (without dragging) | Open the context menu | Edit only |
| Drag a sidebar divider | Resize the Outliner or Attribute Editor panel | Edit only |

### Bookmarks

| Gesture | Action |
|---|---|
| Click a bookmark | Apply the saved pose |
| **Ctrl + Shift + click** a bookmark | Save the current pose over that bookmark |
| Right-click a bookmark | Rename or clear it |
