---
sidebar_position: 5
---

# 2D Slider

*One draggable handle, two transform channels.*

## In Live Mode

A 2D Slider is a pad: dragging its handle writes the X axis into one transform channel and the
Y axis into another, simultaneously, on every assigned control/actor. Typical uses are a
Translate X / Translate Y foot-plant pad or a Rotate X / Rotate Y eye-aim pad.

It follows the same channel discipline as the [1D Slider](./widget-1d-slider): each axis
replaces only its own channel on the target, so a 2D pad coexists with other sliders driving
the same control's remaining channels. Auto-key applies. **Reset to Initial Value** is on the
right-click menu here too.

## Value model

Identical to the 1D Slider but two-dimensional: **Min/Max** are per-axis pairs, **Current
Value** is the live 2D value, **Initial Value** is the drag-proof authored default. **Step
size** and **Locked** behave the same.

The two channels are chosen independently (**Active Channel X**, **Active Channel Y**). Setting
both axes to the *same* channel is almost always an authoring mistake, so the Attribute Editor
flags it with a warning banner rather than letting the two axes silently fight over one value.

## Authoring

Attribute Editor fields: label/name, per-axis Min/Max, Current/Initial values, Active Channel X
and Y (with the same-channel warning), handle color, indented-handle style, locked, step size,
target assignment, and the common position/size/rotation/corner-radius block.

## Scripting

`URyanPicker2DSliderFunctionLibrary` (category `Ryan Picker Page|2DSlider`):

| Function | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, per-axis |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | targets |

Blueprint subclasses can implement `BI_RyanPicker2DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
plus the [shared lifecycle events](./blueprint-api#event-hooks).
