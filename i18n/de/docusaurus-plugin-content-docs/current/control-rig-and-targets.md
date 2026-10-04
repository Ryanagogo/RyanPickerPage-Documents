---
sidebar_position: 12
---

# Control Rig & Ziel-Actors \{#control-rig--target-actors}

*Womit ein Widget „verbunden“ ist – und wie diese Verbindung Sitzungen, Sequences und Respawns übersteht.*

Widgets halten niemals harte Objektreferenzen. Sie speichern **Namen und Identitäten** – Control-Namen des Control Rigs,
Actor-Identitäten – und lösen diese im Moment des Klicks gegen den aktuellen Editor-Zustand auf. Diese
Indirektion sorgt dafür, dass eine gespeicherte Seite über Editor-Neustarts,
verschiedene Levels und den Actor-Lebenszyklus des Sequencers hinweg funktioniert.

## Das aktuelle Control Rig \{#the-current-control-rig}

Jeder Seiten-Tab hat ein **aktuelles Control Rig**, das im Dropdown der Kopfzeile gewählt wird. Das Dropdown
listet die Rigs auf, die in der **fokussierten Level Sequence** gebunden sind, und pflegt sich selbst: Wechseln Sie bei geöffnetem Picker zu einer
anderen Sequence, wird die Liste neu aufgebaut – Ihre Auswahl bleibt erhalten, wenn
dieses Rig noch gebunden ist, und es wird automatisch ausgewählt, wenn genau ein Rig verfügbar ist.

Control-Namen an Widgets werden gegen dieses Rig aufgelöst. Dieselbe Seite steuert daher jeden
Charakter, der die Control-Benennung des Rigs teilt – bauen Sie eine Biped-Seite und nutzen Sie sie für die gesamte Besetzung.
([Beschriftungen](./widget-label) können den Namen des aktuellen Rigs anzeigen, damit Animatoren immer wissen, welchen
Charakter ein Tab steuert.)

## Ziel-Actors \{#target-actors}

Widgets können auch **Actors** als Ziel haben – anstelle von oder zusätzlich zu Rig-Controls. Ein Button könnte
gleichzeitig ein Prop, eine Kamera und ein Rig-Control auswählen; ein Slider kann den Transformationskanal eines Actors direkt
steuern und wie jede Handanimation per Auto-Key in den Sequencer schreiben.

### Sequencer-Spawnables \{#sequencer-spawnables}

Normale Level-Actors werden über ihre stabile Actor-GUID identifiziert. **Spawnables sind die Falle**:
Der Sequencer spawnt sie in jeder Sitzung mit einer *neuen* Actor-GUID, was jede Seite, die
gegen die alte gespeichert wurde, stillschweigend unbrauchbar machen würde. Deshalb speichert jede Actor-Zuweisung an jedem Widget zwei Identitäten
parallel – die Actor-GUID *und* die **Binding-GUID** des Actors im Sequencer, die über
Respawns hinweg stabil ist. Bei der Auflösung wird zuerst die Actor-GUID versucht und dann auf das Binding zurückgegriffen. Sie müssen sich
nie darum kümmern; genau deshalb funktionieren Seiten mit vielen Spawnables auch nächste Woche noch.

## Wie Ziele zugewiesen werden \{#how-targets-get-assigned}

Im Bearbeitungsmodus, mit einem ausgewählten Widget:

- **Beim Erstellen übernehmen** (Standard, [konfigurierbar](./editor-settings)): Die Zielliste eines neuen Widgets wird
  aus den Controls/Actors vorbefüllt, die beim Hinzufügen ausgewählt sind. Im Viewport auswählen →
  Add Widget ist der gesamte Erstellungsvorgang.
- Die Zielfelder im Attribut-Editor zeigen eine aufgelöste, lesbare Zusammenfassung – echte Actor-
  und Control-Namen, keine GUIDs –, sodass Sie die Verbindungen auf einen Blick prüfen können. Defekte Referenzen
  (gelöschte Actors, umbenannte Controls) lösen sich einfach zu nichts auf, statt einen Fehler auf der Seite auszulösen.

## Zwei Auswahlphilosophien \{#two-selection-philosophies}

[Auswahl-Buttons](./widget-select-button) bieten beide klassischen Picker-Verhaltensweisen:
**Auswahlsätze** (ein Klick ersetzt die Auswahl durch den gespeicherten Satz) und den **Interaktiven
Auswahlmodus** (Buttons spiegeln fortlaufend die Editor-Auswahl und klicken additiv – siehe
die Seite zum Auswahl-Button für das vollständige Verhalten). Das Sammeln der Auswahl ist bewusst
rig-unabhängig: Übernahme und interaktiver Abgleich berücksichtigen Ihre tatsächliche Editor-Auswahl, nicht nur
Controls, die zum aktuellen Rig des Dropdowns gehören.
