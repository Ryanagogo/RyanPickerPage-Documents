---
sidebar_position: 3
---

# Select Button

The most common widget: a clickable rectangle that selects one or more Control Rig controls
and/or target actors when clicked in Live Mode.

## Behavior

- Click in Live Mode → selects its assigned Control Rig controls (in the rig's control tree /
  viewport) and target actors (in the level, and in Sequencer if bound), then runs its Python
  script (if any) — see [Python Scripting](./python-scripting).
- Supports multiple controls/actors per button (a "group select" button) or exactly one, via
  **Interactive Selection Mode**.

## Interactive Selection Mode

When enabled on a button, clicking it in Live Mode reads back whatever is *currently selected* in
the viewport/rig instead of driving a fixed, pre-authored list — useful for a button meant to
represent "whatever's selected" rather than one specific control. It's intended for exactly one
item per button; enabling it on a button with more than one assigned control/actor shows a
warning toast but doesn't truncate anything. See
[Control Rig & Target Actors](./control-rig-and-targets) for how this interacts with target
resolution generally.

## Attribute Editor fields

- Label / Widget Name
- Background color, font color, font size
- Position, size, rotation, corner radius (+ override toggle)
- Control names (Control Rig controls)
- Target actors (GUID-based; falls back to Sequencer binding GUID for spawnable actors — see
  [Control Rig & Target Actors](./control-rig-and-targets#sequencer-spawnables))
- Interactive Selection Mode toggle
- Python Script (Base64-encoded on disk, plaintext everywhere in the UI)

## Blueprint API

`URyanPickerSelectButtonFunctionLibrary` (category `Ryan Picker Page|SelectControl`) exposes:

| Function | Notes |
|---|---|
| `GetControlNames` | Control Rig control names assigned to this button |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | assigned target actors |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | the script run on click |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | |

Position/size/rotation/corner-radius/widget-name getters and setters that apply to *every* widget
type live on `URyanPickerWidgetFunctionLibrary` instead — see [Blueprint API](./blueprint-api).

### Event hooks

Implement `BI_RyanPickerSelectButton` on a Blueprint subclass to react to:

- `OnSelectButtonConstructed`
- `OnSelectButtonClicked`
- `OnControlRigControlsSelected`
- `OnTargetActorsSelected`
- (inherited) `OnWidgetSelected`, `OnWidgetHighlighted`, `OnWidgetEditModeChanged`
