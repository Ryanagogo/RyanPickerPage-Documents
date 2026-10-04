---
sidebar_position: 3
---

# Auswahl-Button \{#select-button}

*Das Arbeitspferd: ein Button, der Dinge auswählt.*

## Im Live-Modus \{#in-live-mode}

Ein Klick auf einen Auswahl-Button wählt seine zugewiesenen Control-Rig-Controls und Ziel-Actors aus – im
Viewport, im Rig und, wo gebunden, im Sequencer – und führt dann sein
[Python-Skript](./python-scripting) aus, falls er eines hat. Ein Button kann ein einzelnes Control oder einen ganzen
Satz tragen („alle Finger auswählen“) und Rig-Controls und einfache Actors frei mischen.

**Strg-Klick** schaltet um, statt zu ersetzen: Sind noch nicht alle Ziele des Buttons ausgewählt,
werden sie zur aktuellen Auswahl hinzugefügt; sind sie es bereits, werden sie daraus entfernt – der Rest
Ihrer Auswahl bleibt in beiden Fällen unberührt.

## Zwei Auswahlverhalten \{#two-selection-behaviors}

Ein Auswahl-Button arbeitet in einem von zwei Modi, umgeschaltet über das Kontrollkästchen **Interaktiver Auswahlmodus**
im Attribut-Editor:

### Auswahlsatz-Modus (Standard) \{#selection-set-mode-default}

Der Button ist ein gespeicherter Auswahlsatz. Klick → seine Ziele werden zur Auswahl. Der Button
verfolgt nicht, was Sie anderswo auswählen.

### Interaktiver Auswahlmodus \{#interactive-selection-mode}

Der Button wird zu einem Live-Spiegel der Editor-Auswahl, so wie sich klassische Animations-Picker
verhalten:

- Die Seite fragt die aktuelle Viewport-/Rig-Auswahl mehrmals pro Sekunde ab und **lässt den
  Button aufleuchten**, sobald alle seine Ziele Teil der aktuellen Auswahl sind – wählen Sie das Control im
  Viewport aus, und sein Button auf der Seite wird von selbst hervorgehoben.
- Ein Klick wählt **additiv** aus – die Ziele des Buttons kommen zur bestehenden Auswahl hinzu,
  statt sie zu ersetzen, sodass Klicks über mehrere interaktive Buttons hinweg eine Auswahl aufbauen.
- Strg-Klick entfernt die Ziele des Buttons aus der Auswahl, wie oben beschrieben.

Dieser Modus ist für **ein Control (oder einen Actor) pro Button** gedacht. Ihn bei einem Button
mit mehreren Zielen zu aktivieren funktioniert, zeigt aber eine Warnmeldung – ein Button mit mehreren Zielen kann
eine Teilauswahl nicht eindeutig spiegeln. Die Abfrage läuft nur, solange der Tab der Seite im
Vordergrund ist und der Bearbeitungsmodus aus ist, sodass Hintergrund-Tabs nichts kosten.

Neue Buttons können über die [Editor-Einstellungen](./editor-settings) standardmäßig in einem der beiden Modi starten.

## Erstellung \{#authoring}

Ist der Button im Bearbeitungsmodus ausgewählt, bietet der Attribut-Editor:

- **Beschriftung** (und ob sie angezeigt wird), Widget-Name, Schriftgröße
- **Hintergrundfarbe** und **Schriftfarbe**
- **Control-Namen** – gegen das aktuelle Rig der Seite aufgelöst; siehe
  [Control Rig & Ziel-Actors](./control-rig-and-targets)
- **Ziel-Actors** – eine aufgelöste, lesbare Zusammenfassung aller zugewiesenen Actors
- Kontrollkästchen **Interaktiver Auswahlmodus**
- **Python-Skript** – mehrzeilig; läuft bei jedem Klick nach der Auswahl
- Position, Größe, Rotation, Eckenradius – allen Widgets gemeinsam

Neue Buttons übernehmen ihre Zielliste aus der Auswahl zum Zeitpunkt der Erstellung (eine
[Einstellung](./editor-settings), standardmäßig aktiviert) – der schnellste Erstellungsablauf ist *im
Viewport auswählen, Button hinzufügen, fertig*.

## Skripting \{#scripting}

Die Blueprint-Funktionen befinden sich in `URyanPickerSelectButtonFunctionLibrary`
(Kategorie `Ryan Picker Page|SelectControl`); gemeinsame Transformations-/Erscheinungsbild-Funktionen liegen in der
[gemeinsamen Widget-Bibliothek](./blueprint-api).

| Funktion | |
|---|---|
| `GetControlNames` | zugewiesene Rig-Control-Namen |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | zugewiesene Actors, beide Identitätsräume – siehe [Sequencer-Spawnables](./control-rig-and-targets#sequencer-spawnables) |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | der Setter warnt bei Buttons mit mehreren Zielen (blockiert aber nicht) |

Blueprint-Unterklassen können die Events der Schnittstelle `BI_RyanPickerSelectButton` implementieren:
`OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`,
`OnTargetActorsSelected`, dazu die [drei Lebenszyklus-Events](./blueprint-api#event-hooks), die jeder
Widget-Typ teilt. Unter [Eigene Widget-Blueprints](./blueprint-api#custom-widget-blueprints) erfahren Sie,
wie eine Unterklasse im Menü „Add Widget“ erscheint.
