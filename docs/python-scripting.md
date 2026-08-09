---
sidebar_position: 17
---

# Python Scripting

*Attach editor Python to a click — no Blueprint subclass, no compile.*

[Select Buttons](./widget-select-button) carry one optional Python script;
[Toggles](./widget-toggle) carry one **per state**. The script runs in the editor's Python
environment (the standard `unreal` module and everything else the Python Editor Script Plugin
offers) whenever the widget is clicked in Live Mode.

## Execution order

The script runs **after** the click's selection work is done — controls selected, actors
selected, a Toggle's state already flipped. Your script can therefore assume the widget's
targets are the current selection and act on them:

```python
import unreal

# Runs with the button's targets already selected.
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

On a Toggle, the state that was just switched *into* runs its script — an IK/FK toggle can run
matching/snapping logic on each transition, in each direction.

## Authoring and storage

Edit the script in the Attribute Editor's **Python Script** field with the widget selected in
Edit Mode, or from Blueprint via `GetPythonScript` / `SetPythonScript` (Select Button) and
`GetPythonScriptForState` / `SetPythonScriptForState` (Toggle).

In the saved page file the script is stored Base64-encoded — a transport detail, not security.
It's plaintext in the editor UI, in Blueprint, and in memory, and it runs with full editor
Python privileges. **Load pages from sources you trust**, the same standard you'd apply to any
editor script, and treat shared page files as code when reviewing them.
