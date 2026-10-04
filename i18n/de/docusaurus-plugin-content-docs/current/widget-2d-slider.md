---
sidebar_position: 5
---

# 2D-Slider \{#2d-slider}

*Ein ziehbarer Griff, zwei Transformationskanäle.*

## Im Live-Modus \{#in-live-mode}

Ein 2D-Slider ist ein Pad: Das Ziehen seines Griffs schreibt die X-Achse in einen Transformationskanal und die
Y-Achse in einen anderen – gleichzeitig, auf jedes zugewiesene Control bzw. jeden zugewiesenen Actor. Typische Anwendungen sind ein
Pad mit Verschieben X / Verschieben Y für Fußaufsetzer oder ein Pad mit Rotieren X / Rotieren Y für die Augenausrichtung.

Er folgt derselben Kanaldisziplin wie der [1D-Slider](./widget-1d-slider): Jede Achse
ersetzt nur ihren eigenen Kanal am Ziel, sodass ein 2D-Pad mit anderen Slidern koexistiert, die
die übrigen Kanäle desselben Controls steuern. Auto-Key gilt. **Auf Initialwert zurücksetzen** steht auch hier im
Rechtsklickmenü.

## Wertemodell \{#value-model}

Identisch zum 1D-Slider, aber zweidimensional: **Minimalwert/Maximalwert** sind Paare pro Achse, **Current
Value** ist der aktuelle 2D-Wert, **Anfangswert** ist der beim Ziehen unveränderliche, festgelegte Standardwert. **Schrittweite**
und **Gesperrt** verhalten sich gleich.

Die beiden Kanäle werden unabhängig voneinander gewählt (**Aktiv Channel X**, **Aktiv Channel Y**). Beide
Achsen auf *denselben* Kanal zu setzen, ist fast immer ein Erstellungsfehler, daher kennzeichnet der Attribut-Editor
dies mit einem Warnbanner, statt die beiden Achsen stillschweigend um einen Wert konkurrieren zu lassen.

## Erstellung \{#authoring}

Felder im Attribut-Editor: Beschriftung/Name, Minimal-/Maximalwert pro Achse, aktueller Wert/Anfangswert, Aktiv Channel X
und Y (mit der Warnung bei gleichem Kanal), Griff-Farbe, eingelassener Griffstil, gesperrt, Schrittweite,
Zielzuweisung sowie der gemeinsame Block für Position/Größe/Rotation/Eckenradius.

## Skripting \{#scripting}

`URyanPicker2DSliderFunctionLibrary` (Kategorie `Ryan Picker Page|2DSlider`):

| Funktion | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, pro Achse |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | Ziele |

Blueprint-Unterklassen können `BI_RyanPicker2DSlider` implementieren: `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
dazu die [gemeinsamen Lebenszyklus-Events](./blueprint-api#event-hooks).
