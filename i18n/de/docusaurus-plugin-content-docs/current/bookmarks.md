---
sidebar_position: 11
---

# Lesezeichen \{#bookmarks}

*Benannte Kamerapositionen für die Arbeitsfläche.*

Bei einem Ganzkörper-Picker springen Sie ständig zwischen Bereichen hin und her – Gesicht, Hände, Füße. Lesezeichen
machen jeden Sprung zu einem einzigen Klick: Ein Lesezeichen speichert eine Schwenk-/Zoom-Ansicht der Arbeitsfläche, und ein Klick auf seinen Button in
der Kopfzeile springt mit der Arbeitsfläche dorthin.

## Die Lesezeichenleiste \{#the-bookmark-row}

- **Standard** ist immer vorhanden und immer sichtbar, außerhalb der scrollenden Leiste – betrachten Sie es als
  „Startposition“.
- **Benutzer-Slots** – standardmäßig 4, bis zu 8 (siehe [Editor-Einstellungen](./editor-settings)) – liegen in einer
  horizontal scrollenden Leiste daneben, sind nach Position nummeriert und können benannt werden.

## Mit Lesezeichen arbeiten \{#working-with-bookmarks}

| Aktion | So geht's |
|---|---|
| Zu einer Ansicht springen | auf den Button klicken |
| Aktuelle Ansicht speichern | **Strg+Umschalt+Klick** auf den Button oder Rechtsklick → Setzen / Überschreiben – der Button blinkt zur Bestätigung grün |
| Slot umbenennen | Rechtsklick → Umbenennen |
| Slot hinzufügen | Rechtsklick → Lesezeichen davor einfügen / Lesezeichen danach einfügen |
| Neu anordnen | Rechtsklick → Nach links / Nach rechts – beide getauschten Buttons blinken orange |
| Entfernen / zurücksetzen | Rechtsklick → Löschen oder Reset to Identity |

Lesezeichenänderungen haben einen **eigenen Rückgängig-Stapel mit 30 Schritten**, völlig unabhängig vom Layout-Rückgängig –
Strg+Z auf der Arbeitsfläche schluckt nie eine Lesezeichenänderung, und Lesezeichen-Rückgängig stört nie das
Layout.

Lesezeichen werden zusammen mit allem anderen in der Seitendatei gespeichert. Button-Breite, Schriftart, Innenabstand und die
beiden Bestätigungs-Blinkfarben lassen sich pro Seite im Bereich „Class Defaults“ anpassen.
