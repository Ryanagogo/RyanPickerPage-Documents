---
sidebar_position: 11
---

# Bookmarks

*Named camera positions for the canvas.*

On a full-body picker you're constantly jumping between regions — face, hands, feet. Bookmarks
make each jump one click: a bookmark stores a canvas pan/zoom view, and clicking its button in
the header row snaps the canvas there.

## The bookmark row

- **Default** always exists and is always visible, outside the scrolling row — treat it as
  "home".
- **User slots** — 4 by default, up to 8 (see [Editor Settings](./editor-settings)) — sit in a
  horizontally scrolling row beside it, numbered by position and nameable.

## Working with bookmarks

| Action | How |
|---|---|
| Jump to a view | click the button |
| Store the current view | **Ctrl+Shift+click** the button, or right-click → Set/Overwrite — the button flashes green to confirm |
| Rename a slot | right-click → Rename |
| Add a slot | right-click → Add Bookmark Before / After |
| Reorder | right-click → Move Left / Right — both swapped buttons flash orange |
| Remove / reset | right-click → Delete, or Reset to Identity |

Bookmark edits have their **own 30-step undo stack**, fully independent of layout undo —
Ctrl+Z on the canvas will never eat a bookmark change, and bookmark undo never disturbs the
layout.

Bookmarks are saved in the page file with everything else. Button width, font, padding, and the
two confirmation-flash colors are tunable per page in the Class Defaults panel.
