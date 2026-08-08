---
sidebar_position: 17
---

# Python Scripting

**Select Button** and **Toggle** widgets can each carry a Python script that runs on click, for
behavior that goes beyond selecting controls/actors — driving external tools, running custom
rigging logic, printing diagnostics, etc.

## When it runs

The script executes via `IPythonScriptPlugin::ExecPythonCommandEx` in Live Mode, **after** the
click's Control Rig control selection and target actor selection have already happened — so the
script can assume the intended controls/actors are already selected when it starts.

- **Select Button**: one script, run on every click.
- **Toggle**: a separate script **per state** (State A / State B) — whichever state the click just
  switched *into* runs its own script.

## Editing a script

Set it through the Attribute Editor's **Python Script** field (a multi-line text field) when the
widget is selected in Edit Mode. Programmatically, use:

- `URyanPickerSelectButtonFunctionLibrary::GetPythonScript` / `SetPythonScript`
- `URyanPickerToggleFunctionLibrary::GetPythonScriptForState` / `SetPythonScriptForState`

## Storage

The script is stored **Base64-encoded** inside the page's save file, but is plaintext everywhere
else — the Attribute Editor field, the Blueprint getters/setters, and in memory generally. The
encoding is purely a save-file transport detail; you never need to encode/decode it yourself.
