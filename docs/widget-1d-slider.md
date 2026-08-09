---
sidebar_position: 4
---

# 1D Slider

*A slider wired to exactly one transform channel.*

## In Live Mode

Dragging the slider writes its value into **one channel** — Translate, Rotate, or Scale, X, Y,
or Z — of every assigned Control Rig control and target actor. Nothing else is touched: the
slider reads each target's current transform, swaps in the one channel it owns, and writes the
transform back. Value changes go through the same apply path as the rest of the plugin,
including Sequencer auto-key, so slider moves key like hand-moved controls do.

Because a 1D Slider never claims channels it doesn't own, several sliders can drive different
channels of the *same* control side by side — a Translate Y "lift" and a Rotate Z "roll" on one
foot control won't fight.

Right-clicking the slider offers **Reset to Initial Value**, snapping it back to the authored
default.

## Value model

Three numbers matter, and only two of them ever move:

- **Min / Max** — the range the drag maps onto.
- **Current Value** — the live value; dragging writes it, and it's what gets applied to targets.
- **Initial Value** — an author-set default that dragging *never* touches. It's only changed
  deliberately in the Attribute Editor, which makes it a always-safe value for
  "Reset to Initial Value" to return to.

An optional **step size** snaps dragging to increments, and **Locked** disables dragging
entirely (for a reference slider you don't want bumped mid-shot).

## Authoring

Attribute Editor fields: label/name, Min/Max/Current/Initial values, **Active Channel** (the
one channel this slider drives), **Orientation** (horizontal/vertical), bar color, handle
color, bar thickness, indented-handle style, locked, step size — plus the target assignment
fields shared with [Select Button](./widget-select-button) and the common
position/size/rotation/corner-radius block.

## Scripting

`URyanPicker1DSliderFunctionLibrary` (category `Ryan Picker Page|1DSlider`):

| Function | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | range |
| `GetCurrentValue` / `SetCurrentValue` | live value |
| `GetInitialValue` / `SetInitialValue` | authored reset point |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`: Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | targets |

Blueprint subclasses can implement `BI_RyanPicker1DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(float)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`, plus
the [shared lifecycle events](./blueprint-api#event-hooks).
