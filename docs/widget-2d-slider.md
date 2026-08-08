---
sidebar_position: 5
---

# 2D Slider

Like the [1D Slider](./widget-1d-slider), but drives **two** independent transform channels at
once — an X axis and a Y axis, each its own `EPickerSliderChannel` — from a single draggable
handle on a 2D pad. Common use: a Translate X / Translate Y "plant foot" pad, or Rotate X /
Rotate Y for a look-at control.

The Attribute Editor warns (with a colored banner) if both axes are set to the same channel,
since that's almost always a mistake.

## Key properties

- **Min / Max value** — `FVector2D` range, one component per axis
- **Current value** / **Initial value** — `FVector2D`
- **Active Channel X / Active Channel Y**
- **Handle color, indented handle style**
- **Locked**, **Step size**

## Blueprint API

`URyanPicker2DSliderFunctionLibrary` (category `Ryan Picker Page|2DSlider`):

| Function | Notes |
|---|---|
| `GetMinValue`/`SetMinValue`, `GetMaxValue`/`SetMaxValue` | `FVector2D` |
| `GetCurrentValue`/`SetCurrentValue` | `FVector2D` |
| `GetInitialValue`/`SetInitialValue` | `FVector2D` |
| `GetHandleColor`/`SetHandleColor` | |
| `GetHandleIndented`/`SetHandleIndented` | |
| `GetLocked`/`SetLocked` | |
| `GetStepSize`/`SetStepSize` | |
| `GetActiveChannelX`/`SetActiveChannelX`, `GetActiveChannelY`/`SetActiveChannelY` | `EPickerSliderChannel` |
| `GetControlNames` | |
| `GetTargetActorGUIDs`/`GetTargetActorBindingGUIDs` | |

### Event hooks

Implement `BI_RyanPicker2DSlider`:

- `OnSliderConstructed`
- `OnSliderValueChanged(FVector2D NewValue)`
- `OnSliderDragBegin`
- `OnSliderDragEnd(bool bValueChanged)`
- (inherited) `OnWidgetSelected`, `OnWidgetHighlighted`, `OnWidgetEditModeChanged`
