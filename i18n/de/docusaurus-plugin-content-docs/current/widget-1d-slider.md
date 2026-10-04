---
sidebar_position: 4
---

# 1D-Slider \{#1d-slider}

*Ein Slider, der mit genau einem Transformationskanal verbunden ist.*

## Im Live-Modus \{#in-live-mode}

Das Ziehen des Sliders schreibt seinen Wert in **einen Kanal** – Verschieben, Rotieren oder Skalierung, X, Y
oder Z – jedes zugewiesenen Control-Rig-Controls und Ziel-Actors. Sonst wird nichts angefasst: Der
Slider liest die aktuelle Transformation jedes Ziels, tauscht den einen Kanal aus, der ihm gehört, und schreibt die
Transformation zurück. Wertänderungen durchlaufen denselben Anwendungspfad wie der Rest des Plugins,
einschließlich Sequencer-Auto-Key, sodass Slider-Bewegungen Keys setzen wie von Hand bewegte Controls.

Da ein 1D-Slider niemals Kanäle beansprucht, die ihm nicht gehören, können mehrere Slider verschiedene
Kanäle *desselben* Controls nebeneinander steuern – ein „Anheben“ über Verschieben Y und ein „Abrollen“ über Rotieren Z an einem
Fuß-Control kommen sich nicht in die Quere.

Ein Rechtsklick auf den Slider bietet **Auf Initialwert zurücksetzen**, wodurch er auf den festgelegten
Standardwert zurückspringt.

## Wertemodell \{#value-model}

Drei Zahlen sind wichtig, und nur zwei davon bewegen sich jemals:

- **Minimalwert / Maximalwert** – der Bereich, auf den das Ziehen abgebildet wird.
- **Current Value** – der aktuelle Wert; das Ziehen schreibt ihn, und er wird auf die Ziele angewendet.
- **Anfangswert** – ein vom Autor festgelegter Standardwert, den das Ziehen *nie* berührt. Er wird nur
  bewusst im Attribut-Editor geändert und ist dadurch ein stets sicherer Wert, zu dem
  „Auf Initialwert zurücksetzen“ zurückkehren kann.

Eine optionale **Schrittweite** rastet das Ziehen in Inkrementen ein, und **Gesperrt** deaktiviert das Ziehen
vollständig (für einen Referenz-Slider, der mitten im Shot nicht versehentlich verstellt werden soll).

## Erstellung \{#authoring}

Felder im Attribut-Editor: Beschriftung/Name, Minimal-/Maximal-/aktueller/Anfangswert, **Aktiv Channel** (der
eine Kanal, den dieser Slider steuert), **Ausrichtung** (horizontal/vertikal), Balkenfarbe, Griff-Farbe,
Balkendicke, eingelassener Griffstil, gesperrt, Schrittweite – dazu die Felder zur Zielzuweisung,
die mit dem [Auswahl-Button](./widget-select-button) geteilt werden, sowie der gemeinsame
Block für Position/Größe/Rotation/Eckenradius.

## Skripting \{#scripting}

`URyanPicker1DSliderFunctionLibrary` (Kategorie `Ryan Picker Page|1DSlider`):

| Funktion | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | Bereich |
| `GetCurrentValue` / `SetCurrentValue` | aktueller Wert |
| `GetInitialValue` / `SetInitialValue` | festgelegter Rücksetzpunkt |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`: Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | Ziele |

Blueprint-Unterklassen können `BI_RyanPicker1DSlider` implementieren: `OnSliderConstructed`,
`OnSliderValueChanged(float)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`, dazu
die [gemeinsamen Lebenszyklus-Events](./blueprint-api#event-hooks).
