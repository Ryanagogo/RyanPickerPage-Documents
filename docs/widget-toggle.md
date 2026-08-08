---
sidebar_position: 6
---

# Toggle

A two-state button (**State A** / **State B**, e.g. IK/FK) that swaps its label, color, assigned
controls/actors, and optional Python script depending on which state is active. Clicking it in
Live Mode flips state and applies whichever state just became active.

## Per-state fields

Every visual/behavioral field is authored **separately for each state**, via the function
library's `*ForState` functions:

- Label
- Control names
- Target actor GUIDs (+ Sequencer binding GUIDs)
- Background color, font color, font size
- Python script

## Toggle Groups

Toggles can be grouped into a **Toggle Group** (radio-button style): only one member of the group
can be "on" (in its configured On State) at a time — turning one on turns the others off. Groups
are managed from the right-click popup menu and shown as their own view in the Outliner (**By
Group** display mode). A grouped Toggle shows a distinct border in the canvas.

## Driving a Control Rig bool anim channel

A Toggle can optionally be wired straight to a **bool animation channel** on a Control Rig
control, instead of (or alongside) swapping control-name lists:

- `bUseAnimChannelBool` — master enable
- `AnimChannelParentControlName` — which control owns the channel
- `AnimChannelName` — the bool channel's name
- `AnimChannelTrueState` — which state (A or B) corresponds to the channel being `true`

When enabled, clicking the Toggle also writes to that bool channel, and the Toggle can read the
channel back interactively to stay in sync with its live value.

## Blueprint API

`URyanPickerToggleFunctionLibrary` (category `Ryan Picker Page|Toggle`):

| Function | Notes |
|---|---|
| `GetToggleState`/`SetToggleState` | current `ERyanPickerToggleState` (StateA/StateB) |
| `GetOnState`/`SetOnState` | which state counts as "on" for group exclusivity |
| `GetLabelForState`/`SetLabelForState` | |
| `GetControlNamesForState`/`SetControlNamesForState` | |
| `GetTargetActorGuidsForState`/`SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState`/`SetTargetActorBindingGuidsForState` | |
| `GetColorForState`/`SetColorForState` | |
| `GetFontColorForState`/`SetFontColorForState` | |
| `GetFontSizeForState`/`SetFontSizeForState` | |
| `GetPythonScriptForState`/`SetPythonScriptForState` | |
| `GetUseAnimChannelBool`/`SetUseAnimChannelBool` | |
| `GetAnimChannelParentControlName`/`SetAnimChannelParentControlName` | |
| `GetAnimChannelName`/`SetAnimChannelName` | |
| `GetAnimChannelTrueState`/`SetAnimChannelTrueState` | |

### Event hooks

Implement `BI_RyanPickerToggle`:

- `OnToggleConstructed`
- `OnToggleClicked`
- `OnToggleStateChanged(ERyanPickerToggleState NewState)`
- `OnControlRigControlsSelected`
- `OnTargetActorsSelected`
- (inherited) `OnWidgetSelected`, `OnWidgetHighlighted`, `OnWidgetEditModeChanged`
