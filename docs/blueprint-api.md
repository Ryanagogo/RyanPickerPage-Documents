---
sidebar_position: 16
---

# Blueprint API

The plugin exposes its data through a small set of `UBlueprintFunctionLibrary` statics — one
shared library for properties every widget type has, plus one library per widget type for its own
specific data. All functions use `DefaultToSelf="Target"`, so they read naturally when called
from within a widget's own Blueprint subclass.

## Shared: `URyanPickerWidgetFunctionLibrary`

Category `Ryan Picker Page|Widget`. Works on any `URyanPickerWidgetBase`-derived widget
(all six types):

| Function | Notes |
|---|---|
| `GetPosition`/`SetPosition` | canvas position |
| `GetSize`/`SetSize` | |
| `GetRotation`/`SetRotation` | degrees, wrapped to `[0, 360)` |
| `GetCornerRadius`/`SetCornerRadius` | |
| `GetOverrideCornerRadius`/`SetOverrideCornerRadius` | per-instance override gate |
| `GetWidgetName`/`SetWidgetName` | |
| `GetActorFromGUID` | resolves an actor GUID via the widget's owning page |
| `GetCurrentControlRig` | the page's Current Control Rig |

## Per-type libraries

Each widget type gets its own function library for the data unique to it — see that widget's own
page for the full table:

- [`URyanPickerSelectButtonFunctionLibrary`](./widget-select-button#blueprint-api) — `Ryan Picker Page|SelectControl`
- [`URyanPicker1DSliderFunctionLibrary`](./widget-1d-slider#blueprint-api) — `Ryan Picker Page|1DSlider`
- [`URyanPicker2DSliderFunctionLibrary`](./widget-2d-slider#blueprint-api) — `Ryan Picker Page|2DSlider`
- [`URyanPickerToggleFunctionLibrary`](./widget-toggle#blueprint-api) — `Ryan Picker Page|Toggle`
- [`URyanPickerLabelFunctionLibrary`](./widget-label#blueprint-api) — `Ryan Picker Page|Label`
- [`URyanPickerImageFunctionLibrary`](./widget-image#blueprint-api) — `Ryan Picker Page|Image`

This is the pattern the plugin uses going forward for exposing widget-type-specific data to
Blueprints — a dedicated function library per type, rather than growing a single shared interface.

## Event hooks

Each interactive widget type (everything except Label and Image, which have no click/drag
behavior worth exposing) has its own `BlueprintNativeEvent`-based hook interface you can implement
on a Blueprint subclass to react to construction, clicks, drags, and selection changes without
touching C++:

- `BI_RyanPickerSelectButton`
- `BI_RyanPicker1DSlider`
- `BI_RyanPicker2DSlider`
- `BI_RyanPickerToggle`

All four (plus the interactive shape above) inherit **`BI_RyanPickerWidgetEvents`**, which
declares three lifecycle events every leaf widget type carries identically:

| Event | Fires when |
|---|---|
| `OnWidgetSelected(bool bSelected)` | the widget's Edit Mode selection state changes |
| `OnWidgetHighlighted(bool bHighlighted)` | the widget is hovered/highlighted |
| `OnWidgetEditModeChanged(bool bEditMode)` | the page enters/exits Edit Mode |

See each widget type's own page for its additional type-specific events (e.g.
`OnSelectButtonClicked`, `OnSliderValueChanged`, `OnToggleStateChanged`).
