---
sidebar_position: 17
---

# Python-Skripting \{#python-scripting}

*Editor-Python an einen Klick hängen – ohne Blueprint-Unterklasse, ohne Kompilieren.*

[Auswahl-Buttons](./widget-select-button) tragen ein optionales Python-Skript;
[Umschalter](./widget-toggle) tragen eines **pro Zustand**. Das Skript läuft in der Python-Umgebung des Editors
(das Standardmodul `unreal` und alles andere, was das Python Editor Script Plugin
bietet), sobald das Widget im Live-Modus angeklickt wird.

## Ausführungsreihenfolge \{#execution-order}

Das Skript läuft, **nachdem** die Auswahlarbeit des Klicks erledigt ist – Controls ausgewählt, Actors
ausgewählt, der Zustand eines Umschalters bereits gewechselt. Ihr Skript kann daher davon ausgehen, dass die Ziele des Widgets
die aktuelle Auswahl sind, und mit ihnen arbeiten:

```python
import unreal

# Läuft, wenn die Ziele des Buttons bereits ausgewählt sind.
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

Bei einem Umschalter führt der Zustand, *in den* gerade gewechselt wurde, sein Skript aus – ein IK/FK-Umschalter kann
bei jedem Übergang, in jede Richtung, Matching-/Snapping-Logik ausführen.

## Erstellung und Speicherung \{#authoring-and-storage}

Bearbeiten Sie das Skript im Feld **Python-Skript** des Attribut-Editors, während das Widget im
Bearbeitungsmodus ausgewählt ist, oder aus Blueprint über `GetPythonScript` / `SetPythonScript` (Auswahl-Button) und
`GetPythonScriptForState` / `SetPythonScriptForState` (Umschalter).

In der gespeicherten Seitendatei wird das Skript Base64-codiert abgelegt – ein Transportdetail, keine Sicherheitsmaßnahme.
Im Editor-UI, in Blueprint und im Speicher liegt es als Klartext vor, und es läuft mit vollen Python-Rechten
des Editors. **Laden Sie Seiten nur aus vertrauenswürdigen Quellen** – derselbe Maßstab, den Sie an jedes
Editor-Skript anlegen würden – und behandeln Sie geteilte Seitendateien bei der Prüfung wie Code.
