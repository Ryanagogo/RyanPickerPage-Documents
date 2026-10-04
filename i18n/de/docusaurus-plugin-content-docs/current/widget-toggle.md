---
sidebar_position: 6
---

# Umschalter \{#toggle}

*Ein Schalter mit zwei Zuständen – IK/FK ist der klassische Anwendungsfall.*

## Im Live-Modus \{#in-live-mode}

Ein Umschalter hat zwei Zustände, **A** und **B**. Ein Klick wechselt zwischen ihnen, und der Zustand, der
gerade aktiv geworden ist, wendet seine eigene Konfiguration an: seine Beschriftung, seine Farben, seine zugewiesenen Rig-Controls
und Actors werden ausgewählt, und sein eigenes [Python-Skript](./python-scripting) läuft.
Alles an einem Umschalter wird **pro Zustand** festgelegt – ein IK/FK-Umschalter kann in einem Zustand die IK-Controls
und im anderen die FK-Controls auswählen und dabei jeweils eine andere Farbe tragen.

## Umschaltergruppen \{#toggle-groups}

Gruppieren Sie mehrere Umschalter (Rechtsklickmenü, mit zwei oder mehr ausgewählten), und sie verhalten sich wie Optionsfelder:
Jeder Umschalter legt fest, welcher seiner Zustände als „an“ zählt (sein **Ein-Zustand**), und
wird ein Gruppenmitglied eingeschaltet, werden alle anderen Mitglieder ausgeschaltet. Gruppierte Widgets tragen einen eigenen
Rahmen auf der Arbeitsfläche, Gruppen können benannt und umbenannt werden, und die
[Ansicht **Nach Gruppe** des Outliners](./attribute-editor-and-outliner) listet die Mitglieder jeder Gruppe unter
ihrer Überschrift auf. Beim Kopieren einer Gruppe wird ein Einfügen angeboten, das sie als ganz neue Gruppe wiederherstellt, einschließlich Mitgliedern und
Name.

## Den Bool-Kanal eines Rigs steuern \{#driving-a-rigs-bool-channel}

Über das Auswählen von Controls hinaus kann ein Umschalter direkt an einen **Bool-Animationskanal** eines
Control-Rig-Controls gebunden werden – zum Beispiel an das eigentliche IK/FK-Schalterattribut des Rigs:

- Geben Sie das **übergeordnete Control** des Kanals und den **Kanal** selbst an und wählen Sie, welcher Umschalterzustand
  bedeutet, dass der Kanal *true* ist.
- Ein Klick auf den Umschalter schreibt dann zusätzlich den Bool-Wert.
- Die Bindung funktioniert in beide Richtungen: Die Seite fragt den aktuellen Wert des Kanals ab und spiegelt ihn im
  visuellen Zustand des Umschalters wider, sodass das Scrubben über einen gekeyten IK/FK-Schalter den Button auf der Seite umschaltet,
  ohne sein Klickverhalten erneut auszuführen.

## Erstellung \{#authoring}

Felder im Attribut-Editor: pro Zustand Beschriftung / Hintergrundfarbe / Schriftfarbe / Schriftgröße / Control-Namen /
Ziel-Actors / Python-Skript; der aktuelle Zustand und der Ein-Zustand; die Bindung an den Animationskanal-Bool
(aktivieren, übergeordnetes Control, Kanalname, true-Zustand); sowie der gemeinsame
Block für Position/Größe/Rotation/Eckenradius.

## Skripting \{#scripting}

`URyanPickerToggleFunctionLibrary` (Kategorie `Ryan Picker Page|Toggle`). Die meisten Funktionen nehmen einen
`ERyanPickerToggleState` entgegen und lesen/schreiben die Konfiguration eines Zustands:

| Funktion | |
|---|---|
| `GetToggleState` / `SetToggleState` | aktueller Zustand |
| `GetOnState` / `SetOnState` | welcher Zustand für die Gruppenexklusivität als „an“ gilt |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | Hauptschalter der Animationskanal-Bindung |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Blueprint-Unterklassen können `BI_RyanPickerToggle` implementieren: `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, dazu die
[gemeinsamen Lebenszyklus-Events](./blueprint-api#event-hooks).
