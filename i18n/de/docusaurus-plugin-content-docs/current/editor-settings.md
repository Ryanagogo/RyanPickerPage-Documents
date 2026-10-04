---
sidebar_position: 15
---

# Editor-Einstellungen \{#editor-settings}

**Datei → Settings…** öffnet den globalen Einstellungsdialog des Plugins. Dies sind **rechnerbezogene**
Einstellungen, die für jede geöffnete Seite gelten – im Gegensatz zu den seitenbezogenen Class Defaults (gespeichert im
Seiten-Blueprint) und den dateibezogenen Daten (gespeichert in der Seitendatei).

## Verhalten neuer Widgets \{#new-widget-behavior}

| Einstellung | Standard | |
|---|---|---|
| Seed New Widget Targets From Selection | an | neue Buttons/Slider übernehmen ihre Ziele aus der aktuellen Auswahl – siehe [Wie Ziele zugewiesen werden](./control-rig-and-targets#how-targets-get-assigned) |
| Default Interactive Selection Mode | aus | neue Auswahl-Buttons starten im [Interaktiven Auswahlmodus](./widget-select-button#interactive-selection-mode) |
| Standardgröße neuer Widgets | 200 × 100 | mit einem Kontrollkästchen **Override** – aus bedeutet, dass der Class-Defaults-Wert der Seite gilt; an bedeutet, dass der Wert dieses Dialogs ihn ersetzt |
| Standard-Eckenradius | 10 | gleiche Override-Kontrollkästchen-Regel; der globale Rückfallwert in der [Rundungskaskade](./attribute-editor-and-outliner#corner-radius) |

## Kategorien für Sticky Defaults \{#sticky-defaults-categories}

Sieben Kontrollkästchen – **Farbe, Schrift, Eckenradius, Größe, Rotation, Text, Bild**, standardmäßig alle
aktiviert – steuern, welche Eigenschaftsgruppen
[Copy to Sticky Defaults](./editing-tools#widget-defaults) tatsächlich auf neue Widgets überträgt.
Deaktivieren Sie zum Beispiel Größe und Rotation, damit Sticky Defaults rein kosmetisch sind.

## Seite & Verwaltung \{#page--housekeeping}

| Einstellung | Standard | |
|---|---|---|
| Standardanzahl an Lesezeichen | 4 | Benutzer-[Lesezeichen](./bookmarks)-Slots auf einer neuen Seite (max. 8) |
| Tiefe des Rückgängig-Verlaufs | 30 | Rückgängig-/Wiederholen-Schritte der Hauptseite |
| Maximales Alter des Sitzungsstatus | 90 Tage | [Sitzungsstatus](./save-load-and-files#session-state)-Einträge, die älter sind, werden entfernt; 0 deaktiviert das Entfernen |

## Das Override-Muster \{#the-override-pattern}

Bei Werten, die auch als Class Defaults der Seite existieren (Widget-Größe, Eckenradius), hält sich dieser Dialog
bewusst zurück: Die Class Defaults des Seiten-Blueprints sind maßgeblich, bis Sie hier das
passende Kontrollkästchen **Override** aktivieren. So bleibt die Abstimmung eines gemeinsam genutzten Seiten-Blueprints standardmäßig
erhalten, während ein einzelner Rechner dennoch auf seinen eigenen Werten bestehen kann.
