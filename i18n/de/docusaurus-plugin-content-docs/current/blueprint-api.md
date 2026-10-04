---
sidebar_position: 16
---

# Blueprint-API \{#blueprint-api}

Die Skripting-Oberfläche des Plugins folgt durchgängig einem Muster: **Funktionsbibliotheken** aus statischen
Nodes – eine gemeinsame Bibliothek für das, was jedes Widget hat, plus eine Bibliothek pro Widget-Typ für das, was
nur dieser hat. Jede Funktion nimmt das Widget als `Target` mit `DefaultToSelf` entgegen – innerhalb des eigenen Graphen eines Widget-
Blueprints verbinden sich die Nodes von selbst mit `self`.

## Gemeinsame Funktionen – alle Widget-Typen \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`, Kategorie `Ryan Picker Page|Widget`:

| Funktion | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | Geometrie auf der Arbeitsfläche |
| `GetRotation` / `SetRotation` | Grad, auf [0, 360) normalisiert |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | die Widget-Ebene der [Rundungskaskade](./attribute-editor-and-outliner#corner-radius) |
| `GetWidgetName` / `SetWidgetName` | seitenweit eindeutiger Name |
| `GetCurrentControlRig` | das aktuelle Rig der zugehörigen Seite |
| `GetActorFromGUID` | löst eine Actor-Identität über die Seite auf |

## Typspezifische Funktionen \{#per-type-functions}

Die eigene Bibliothek jedes Widget-Typs ist auf dessen Seite dokumentiert:

| Bibliothek | Kategorie | Referenz |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [Auswahl-Button](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [1D-Slider](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [2D-Slider](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [Umschalter](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [Beschriftung](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [Bild](./widget-image#scripting) |

## Event-Hooks \{#event-hooks}

Die vier interaktiven Widget-Typen stellen jeweils eine Blueprint-Schnittstelle aus `BlueprintNativeEvent`-
Hooks bereit – implementieren Sie diese in einer Blueprint-Unterklasse, um ohne C++ Verhalten hinzuzufügen:

| Schnittstelle | Typspezifische Events |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | dieselben vier, mit 2D-Wert |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

Alle vier erben drei **Lebenszyklus-Events**, die jeder interaktive Typ gemeinsam hat:

- `OnWidgetSelected(bool)` – die Auswahl im Bearbeitungsmodus hat sich geändert
- `OnWidgetHighlighted(bool)` – der Hover-Zustand hat sich geändert
- `OnWidgetEditModeChanged(bool)` – die Seite hat den Bearbeitungsmodus betreten/verlassen

Beschriftungen und Bilder haben keine Hook-Schnittstelle – an ihnen ist nichts anklickbar –, aber die gemeinsame
Funktionsbibliothek deckt sie ab.

## Eigene Widget-Blueprints \{#custom-widget-blueprints}

Der tiefste Erweiterungspunkt: **Leiten Sie in Blueprint von einem Widget-Typ ab, und die Seite behandelt ihn als
vollwertigen eigenen Widget-Typ.**

1. Erstellen Sie eine Blueprint-Klasse, deren Elternklasse eine der nativen Blatt-Widget-Klassen ist
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider`, …).
2. Implementieren Sie die Events ihrer Hook-Schnittstelle, um Ihr Verhalten hinzuzufügen – zusätzliche Visuals bei
   `OnToggleStateChanged`, eigene Logik bei `OnSelectButtonClicked`, was auch immer der Shot verlangt.
3. Ihre Klasse erscheint automatisch im Rechtsklickmenü der Arbeitsfläche unter **Benutzerdefinierte Widgets**,
   gruppiert nach ihrem Basistyp.

Benutzerdefinierte Widgets erben alles – Speichern/Laden, Rückgängig, den Attribut-Editor, Ausrichten-/Spiegeln-Werkzeuge,
Targeting –, weil die Seite jede Unterklasse eines Blatt-Typs als diesen Typ erkennt. Seiten, die
ein benutzerdefiniertes Widget verwenden, speichern den Klassenpfad des Blueprints in der Speicherdatei und werden daher
in jedem Projekt, das den Blueprint enthält, korrekt neu geladen.

Für Verhalten beim Klicken, das keine Blueprint-Unterklasse rechtfertigt, reicht oft ein einfaches
[Python-Skript am Widget](./python-scripting).
