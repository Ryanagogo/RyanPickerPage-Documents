---
sidebar_position: 4
---

# 1D Slider

A single-axis slider that drives **one transform channel** — one of Translate X/Y/Z, Rotate X/Y/Z,
or Scale X/Y/Z — on every assigned Control Rig control / target actor, directly from its current
value. Every other channel on the target is left untouched: the slider reads each target's current
transform, replaces only the active channel, and writes the full transform back.

This is different from a whole-transform "pose" driver — it never overwrites axes it doesn't own,
so several 1D Sliders can independently drive different channels of the same control without
fighting each other.

## Key properties

- **Min / Max value** — the slider's range
- **Current value** — the live, draggable value; this is what's written to the target channel
- **Initial value** — a fixed, author-set default (set only via the Attribute Editor or the popup
  menu's "Reset to Initial Value"), never touched by dragging — a safe value to snap back to
- **Active Channel** — which of the 9 transform channels this slider drives
- **Orientation** — horizontal or vertical
- **Bar / handle color, bar thickness, indented handle style**
- **Locked** — disables dragging
- **Step size** — value snapping increment

## Attribute Editor fields

Label/name, value range + current/initial value, orientation, active channel, bar/handle
styling, control names, target actors — set the same way as a Select Button's targets (see
[Control Rig & Target Actors](./control-rig-and-targets)).

## Blueprint API

`URyanPicker1DSliderFunctionLibrary` (category `Ryan Picker Page|1DSlider`):

| Function | Notes |
|---|---|
| `GetMinValue`/`SetMinValue`, `GetMaxValue`/`SetMaxValue` | range |
| `GetCurrentValue`/`SetCurrentValue` | live value |
| `GetInitialValue`/`SetInitialValue` | fixed reset target |
| `GetOrientation`/`SetOrientation` | `EOrientation` |
| `GetBarColor`/`SetBarColor`, `GetHandleColor`/`SetHandleColor` | |
| `GetBarThickness`/`SetBarThickness` | |
| `GetHandleIndented`/`SetHandleIndented` | |
| `GetLocked`/`SetLocked` | |
| `GetStepSize`/`SetStepSize` | |
| `GetActiveChannel`/`SetActiveChannel` | `EPickerSliderChannel` — one of TranslateX/Y/Z, RotateX/Y/Z, ScaleX/Y/Z |
| `GetControlNames` | |
| `GetTargetActorGUIDs`/`GetTargetActorBindingGUIDs` | |

### Event hooks

Implement `BI_RyanPicker1DSlider`:

- `OnSliderConstructed`
- `OnSliderValueChanged(float NewValue)`
- `OnSliderDragBegin`
- `OnSliderDragEnd(bool bValueChanged)`
- (inherited) `OnWidgetSelected`, `OnWidgetHighlighted`, `OnWidgetEditModeChanged`
