---
sidebar_position: 6
---

# Toggle

*A two-state switch — IK/FK being the canonical use.*

## In Live Mode

A Toggle holds two states, **A** and **B**. Clicking flips between them, and the state that
just became active applies its own configuration: its label, its colors, its assigned rig
controls and actors get selected, and its own [Python script](./python-scripting) runs.
Everything about a Toggle is authored **per state** — an IK/FK toggle can select the IK
controls in one state and the FK controls in the other, wearing a different color for each.

## Toggle Groups

Group several Toggles (right-click menu, with two or more selected) and they behave like radio
buttons: each Toggle declares which of its states counts as "on" (its **On State**), and
switching one group member on switches every other member off. Grouped widgets wear a distinct
border on the canvas, groups can be named and renamed, and the
[Outliner's **By Group** view](./attribute-editor-and-outliner) lists each group's members under
its header. Copying a group offers a paste that recreates it as a brand-new group, members and
name included.

## Driving a rig's bool channel

Beyond selecting controls, a Toggle can be bound directly to a **bool animation channel** on a
Control Rig control — the actual IK/FK switch attribute on the rig, for instance:

- Name the channel's **parent control** and the **channel** itself, and pick which Toggle state
  means the channel is *true*.
- Clicking the Toggle then also writes the bool value.
- The binding is two-way: the page polls the channel's live value and reflects it back into the
  Toggle's visual state, so scrubbing past a keyed IK/FK switch flips the button on the page
  without re-running its click behavior.

## Authoring

Attribute Editor fields: per-state label / background color / font color / font size / control
names / target actors / Python script; the current state and the On State; the anim-channel-bool
binding (enable, parent control, channel name, true state); and the common
position/size/rotation/corner-radius block.

## Scripting

`URyanPickerToggleFunctionLibrary` (category `Ryan Picker Page|Toggle`). Most functions take an
`ERyanPickerToggleState` and read/write one state's configuration:

| Function | |
|---|---|
| `GetToggleState` / `SetToggleState` | current state |
| `GetOnState` / `SetOnState` | which state is "on" for group exclusivity |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | anim-channel binding master switch |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Blueprint subclasses can implement `BI_RyanPickerToggle`: `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, plus the
[shared lifecycle events](./blueprint-api#event-hooks).
