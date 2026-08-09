---
sidebar_position: 16
---

# Blueprint API

The plugin's scripting surface follows one pattern throughout: **function libraries** of static
nodes, one shared library for what every widget has, plus one library per widget type for what
only it has. Every function takes the widget as `Target` with `DefaultToSelf` — inside a widget
Blueprint's own graph, the nodes wire themselves to `self`.

## Shared functions — every widget type

`URyanPickerWidgetFunctionLibrary`, category `Ryan Picker Page|Widget`:

| Function | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | canvas geometry |
| `GetRotation` / `SetRotation` | degrees, wrapped to [0, 360) |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | the per-widget level of the [rounding cascade](./attribute-editor-and-outliner#corner-radius) |
| `GetWidgetName` / `SetWidgetName` | page-unique name |
| `GetCurrentControlRig` | the owning page's current rig |
| `GetActorFromGUID` | resolve an actor identity through the page |

## Per-type functions

Each widget type's own library is documented on its page:

| Library | Category | Reference |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [Select Button](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [1D Slider](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [2D Slider](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [Toggle](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [Label](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [Image](./widget-image#scripting) |

## Event hooks

The four interactive widget types each expose a Blueprint interface of `BlueprintNativeEvent`
hooks — implement them in a Blueprint subclass to add behavior without C++:

| Interface | Type-specific events |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | same four, 2D value |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

All four inherit three **lifecycle events** shared by every interactive type:

- `OnWidgetSelected(bool)` — Edit Mode selection changed
- `OnWidgetHighlighted(bool)` — hover state changed
- `OnWidgetEditModeChanged(bool)` — the page entered/left Edit Mode

Labels and Images have no hook interface — nothing about them is clickable — but the shared
function library covers them.

## Custom widget Blueprints

The deepest extension point: **subclass a widget type in Blueprint, and the page treats it as a
first-class widget type of its own.**

1. Create a Blueprint class whose parent is one of the native leaf widget classes
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider`, …).
2. Implement its hook interface events to add your behavior — extra visuals on
   `OnToggleStateChanged`, custom logic on `OnSelectButtonClicked`, whatever the shot demands.
3. Your class appears automatically in the canvas right-click menu under **Custom Widgets**,
   grouped by its base type.

Custom widgets inherit everything — save/load, undo, the Attribute Editor, align/mirror tools,
targeting — because the page recognizes any subclass of a leaf type as that type. Pages that
use a custom widget record the Blueprint's class path in the save file, so they reload
correctly in any project containing the Blueprint.

For click-time behavior that doesn't warrant a Blueprint subclass, a plain
[Python script on the widget](./python-scripting) is often enough.
