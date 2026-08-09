---
sidebar_position: 3
---

# Select Button

*The workhorse: a button that selects things.*

## In Live Mode

Clicking a Select Button selects its assigned Control Rig controls and target actors — in the
viewport, the rig, and Sequencer where bound — and then runs its
[Python script](./python-scripting), if it has one. A button can carry one control or a whole
set ("select all fingers"), and can mix rig controls and plain actors freely.

**Ctrl-click** toggles instead of replacing: if the button's targets aren't all selected yet,
they're added to the current selection; if they already are, they're removed from it — the rest
of your selection is left alone either way.

## Two selection behaviors

A Select Button operates in one of two modes, switched by the **Interactive Selection Mode**
checkbox in the Attribute Editor:

### Selection Set mode (default)

The button is a stored selection set. Click → its targets become the selection. The button
doesn't track what you select elsewhere.

### Interactive Selection Mode

The button becomes a live mirror of the editor selection, the way traditional animation pickers
behave:

- The page polls the current viewport/rig selection several times a second and **lights the
  button up** whenever its targets are all part of the current selection — select the control in
  the viewport, and its button highlights on the page by itself.
- Clicking selects **additively** — the button's targets join whatever is already selected
  instead of replacing it, so clicking across several interactive buttons builds up a selection.
- Ctrl-click removes the button's targets from the selection, as above.

This mode is designed for **one control (or one actor) per button**. Enabling it on a button
with several targets works, but shows a warning toast — a multi-target button can't
unambiguously mirror a partial selection. Polling only runs while the page's tab is in the
foreground and Edit Mode is off, so background tabs cost nothing.

New buttons can default to either mode via [Editor Settings](./editor-settings).

## Authoring

With the button selected in Edit Mode, the Attribute Editor exposes:

- **Label** (and whether to show it), widget name, font size
- **Background color** and **font color**
- **Control names** — resolved against the page's current rig; see
  [Control Rig & Target Actors](./control-rig-and-targets)
- **Target actors** — a resolved, readable summary of every assigned actor
- **Interactive Selection Mode** checkbox
- **Python Script** — multi-line; runs after selection on every click
- Position, size, rotation, corner radius — common to all widgets

New buttons seed their target list from whatever is selected at spawn time (a
[setting](./editor-settings), on by default) — the fastest authoring loop is *select in
viewport, add button, done*.

## Scripting

Blueprint functions live on `URyanPickerSelectButtonFunctionLibrary`
(category `Ryan Picker Page|SelectControl`); common transform/appearance functions are on the
[shared widget library](./blueprint-api).

| Function | |
|---|---|
| `GetControlNames` | assigned rig control names |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | assigned actors, both identity spaces — see [Sequencer spawnables](./control-rig-and-targets#sequencer-spawnables) |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | setter warns (doesn't block) on multi-target buttons |

Blueprint subclasses can implement the `BI_RyanPickerSelectButton` interface events:
`OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`,
`OnTargetActorsSelected`, plus the [three lifecycle events](./blueprint-api#event-hooks) every
widget type shares. See [Custom widget Blueprints](./blueprint-api#custom-widget-blueprints) for
how a subclass shows up in the Add Widget menu.
