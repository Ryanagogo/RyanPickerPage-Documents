---
sidebar_position: 13
---

# Attribut-Editor & Outliner \{#attribute-editor--outliner}

Die beiden Seitenleisten des Bearbeitungsmodus. Jede hat einen eigenen Umschalter in der Kopfzeile, sodass Sie eine, beide oder
keine von beiden auf dem Bildschirm behalten können.

## Outliner (links) \{#outliner-left}

Eine Liste aller Elemente auf der Seite – klicken Sie auf eine Zeile, um das Widget auszuwählen, doppelklicken Sie, um es umzubenennen,
und rechtsklicken Sie zum Verschieben/Löschen. Drei Ansichten, umgeschaltet über die Buttons über der Liste:

- **Nach Typ** – gruppiert unter den Überschriften der sechs Widget-Typen. Die Alltagsansicht.
- **Nach Ebene** – gruppiert nach [Ebenengruppe](./editing-tools#layer-groups), in Zeichenreihenfolge. Hier
  wird die Stapelung neu angeordnet: Ziehen Sie ein Widget in eine andere Gruppe, um es dorthin zu verschieben, ziehen Sie
  innerhalb einer Gruppe, um die Reihenfolge zu ändern, oder ziehen Sie eine Gruppenüberschrift selbst, um Gruppen neu anzuordnen. Jede Gruppenüberschrift
  hat einen eigenen Sperrschalter und lässt sich unabhängig einklappen.
- **Nach Gruppe** – [Umschaltergruppen](./widget-toggle#toggle-groups) mit ihren Mitgliedern verschachtelt
  unter der jeweiligen benannten Überschrift; Gruppen werden ebenfalls hier umbenannt.

Widget-Namen sind pro Seite eindeutig (ohne Berücksichtigung der Groß-/Kleinschreibung) – eine kollidierende Umbenennung wird abgelehnt und
rückgängig gemacht, statt stillschweigend verfälscht zu werden. Die zuletzt verwendete Ansicht wird sitzungsübergreifend global gespeichert.

## Attribut-Editor (rechts) \{#attribute-editor-right}

Die Eigenschaften des aktuell ausgewählten Widgets in einem Details-Panel. Er bearbeitet **ein Widget auf
einmal** – um dieselbe Änderung auf viele Widgets anzuwenden, verwenden Sie stattdessen die
[Werkzeugleisten-Werkzeuge](./editing-tools#toolbar-tools).

Welche Felder erscheinen, hängt vom Typ des Widgets ab; jede Widget-Seite dokumentiert ihren eigenen Satz. Der
gemeinsame Block – Position, Größe, Rotation, Eckenradius, Widget-Name – ist immer vorhanden.

Zwei Verhaltensweisen, die man kennen sollte:

- **Laufende Bearbeitungen werden vor einem Auswahlwechsel übernommen.** Wenn Sie gerade ein Feld bearbeiten und
  ein anderes Widget anklicken, wird der ausstehende Wert in das Widget übernommen, das Sie tatsächlich
  bearbeitet haben – er kann nicht auf das neu ausgewählte überspringen.
- **Die Gleicher-Kanal-Warnung des 2D-Sliders** erscheint als farbiges Banner direkt im Panel – siehe
  [2D-Slider](./widget-2d-slider).

## Eckenradius \{#corner-radius}

Die Rundung eines Widgets wird über eine dreistufige Kaskade aufgelöst, die spezifischste gewinnt:

1. **Überschreibung pro Widget** – ein Flag „override corner radius“ plus ein eigener Wert am
   einzelnen Widget.
2. **Class Default pro Typ** – jeder Widget-Typ kann im Bereich „Class Defaults“ der Seite einen eigenen
   Standardwert festlegen.
3. **Globaler Standardwert** – 10 für die Button-/Slider-/Umschalter-Typen; Beschriftungen und Bilder sind standardmäßig
   eckig (0). Der globale Rückfallwert lässt sich in den [Editor-Einstellungen](./editor-settings) anpassen.

Nicht angepasste Widgets folgen der Kaskade live – erhöhen Sie den Typ-Standardwert, und jedes nicht überschriebene
Widget dieses Typs wird mit aktualisiert.

## Widgets sperren \{#widget-locking}

Jedes Widget kann gesperrt werden – über das eigene Kontrollkästchen im Attribut-Editor, über ein Schlosssymbol in seiner Zeile
oder Gruppenüberschrift im Outliner oder über **Sperren**/**Auswahl entsperren** im Rechtsklickmenü.

Sperren wirkt sich nur auf den Bearbeitungsmodus aus: Ein gesperrtes Widget kann dort nicht ausgewählt, verschoben oder skaliert werden, und
seine Griffe zum Verschieben/Skalieren verschwinden vollständig. Der Live-Modus und die Outliner-Liste selbst sind nicht betroffen
– ein gesperrtes Widget funktioniert im Live-Modus beim Anklicken ganz normal, und Sie können es im Outliner weiterhin sehen und
umbenennen. Das Sperren einer [Ebenengruppe](./editing-tools#layer-groups) über ihre Outliner-
Überschrift sperrt alle Mitglieder auf dieselbe Weise.

Sperren ist für Widgets gedacht, deren Positionierung abgeschlossen ist und die Sie beim Arbeiten in ihrer Nähe nicht versehentlich verschieben möchten
– etwa ein Hintergrundbild oder eine fertige Reihe von Buttons.

## Tooltip im Live-Modus \{#live-mode-tooltip}

Im Live-Modus zeigt das Überfahren eines Widgets mit der Maus einen Tooltip, der seine Verbindungen zusammenfasst – wie es heißt und
welche Controls/Actors es steuert. Das ist der schnellste Weg, eine unbekannte Seite zu prüfen, ohne
den Bearbeitungsmodus zu betreten.
