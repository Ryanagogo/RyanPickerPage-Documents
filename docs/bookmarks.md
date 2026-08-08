---
sidebar_position: 11
---

# Bookmarks

Bookmarks are saved canvas **pan/zoom view slots** — click one to jump the canvas straight to a
saved position and scale, useful for large pages (e.g. a full-body picker) where you want one-click
access to "hands", "face", "feet" without manually scrolling/zooming each time.

## Default + user slots

- **Default** — always present, always visible, shown in its own container outside the scrollable
  row.
- **User slots** — a configurable number (default 4, up to a maximum of 8) of additional named
  slots in a horizontally-scrolling row next to Default.

## Using a bookmark

- **Click** a bookmark button to jump the canvas to its saved view.
- **Ctrl+Shift+click** (or the right-click menu's Set/Overwrite entry) captures the *current*
  canvas pan/zoom into that slot, flashing it a distinct color to confirm the set.
- Right-click a user slot for **Rename**, **Add Bookmark Before/After**, **Move Left/Right**
  (flashes both swapped buttons), **Delete**, and **Reset to Identity**.

## Styling

Button width, font size/typeface, padding, and the two flash colors (move vs. set) are all
Class-Defaults-tunable per page (`BookmarkButtonWidth`, `BookmarkFontSize`,
`BookmarkFontTypefaceName`, `BookmarkNormalPadding`, `BookmarkPressedPadding`,
`BookmarkMoveFlashColor`/`BookmarkMoveFlashDuration`, `BookmarkSetFlashColor`/`BookmarkSetFlashDuration`).

## Undo/Redo

Bookmarks have their **own** undo/redo stack (30 steps), completely separate from the main page
undo/redo — undoing a widget-layout change never touches bookmark state, and vice versa.

## Saving

Bookmark state (Default + all user slots) is written into the page's save file alongside the
widget layout — see [Saving, Loading & Files](./save-load-and-files).
