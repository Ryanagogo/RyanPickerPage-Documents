---
sidebar_position: 15
---

# Editor Settings

**File → Settings…** opens the plugin's global settings dialog. These are **per-machine**
preferences applying to every page you open, as opposed to per-page Class Defaults (saved in
the page Blueprint) and per-file data (saved in the page file).

## New-widget behavior

| Setting | Default | |
|---|---|---|
| Seed New Widget Targets From Selection | on | new buttons/sliders pre-fill targets from the current selection — see [How targets get assigned](./control-rig-and-targets#how-targets-get-assigned) |
| Default Interactive Selection Mode | off | new Select Buttons start in [Interactive Selection Mode](./widget-select-button#interactive-selection-mode) |
| Default New Widget Size | 200 × 100 | with an **Override** checkbox — off means the page's own Class Defaults value wins; on means this dialog's value replaces it |
| Default Corner Radius | 10 | same Override-checkbox arrangement; the global fallback in the [rounding cascade](./attribute-editor-and-outliner#corner-radius) |

## Sticky Defaults categories

Seven checkboxes — **Color, Font, Corner Radius, Size, Rotation, Text, Image**, all on by
default — controlling which property groups
[Copy to Sticky Defaults](./editing-tools#widget-defaults) actually carries onto new widgets.
Turn off Size and Rotation, say, to make sticky defaults purely cosmetic.

## Page & housekeeping

| Setting | Default | |
|---|---|---|
| Default Bookmark Count | 4 | user [bookmark](./bookmarks) slots on a new page (max 8) |
| Undo Stack Depth | 30 | main page undo/redo steps |
| Session State Max Age | 90 days | [session-state](./save-load-and-files#session-state) entries older than this are pruned; 0 disables pruning |

## The override pattern

For values that also exist as page Class Defaults (widget size, corner radius), this dialog
deliberately defers: the page Blueprint's Class Defaults are authoritative until you tick the
matching **Override** checkbox here. That keeps a shared page Blueprint's tuning intact by
default while still letting an individual machine insist on its own values.
