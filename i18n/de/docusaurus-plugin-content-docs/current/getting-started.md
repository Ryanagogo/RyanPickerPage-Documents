---
sidebar_position: 2
---

# Erste Schritte \{#getting-started}

## Eine Seite öffnen \{#opening-a-page}

**Tools → Ryan Picker Page** öffnet eine Seite in einem neuen Editor-Tab. Der Button **New Tab** in der
Kopfzeile der Seite öffnet weitere – jeder Tab ist vollständig unabhängig, mit eigener Datei, eigener Control-Rig-Auswahl
und eigener Ansicht der Arbeitsfläche. Wenn Sie eine Seite umbenennen (ihr Titel ist im Bearbeitungsmodus editierbar),
wird auch ihr Tab umbenannt, sodass eine ganze Reihe geöffneter Picker übersichtlich bleibt.

## Zwei Modi \{#two-modes}

Der Bearbeitungsmodus-Button in der Kopfzeile schaltet die gesamte Seite um zwischen:

**Live-Modus** – dem Animationsmodus. Ein Klick auf Widgets wählt Rig-Controls und Actors aus; das Ziehen von
Slidern steuert Transformationen; wenn Sie mit der Maus über ein Widget fahren, zeigt ein Tooltip, womit es verbunden ist. Das Layout
selbst ist unantastbar.

**Im Live-Modus verbringt eine fertige Seite ihr Leben.** Alles unter
[Bearbeitungs- & Arbeitsflächen-Werkzeuge](./editing-tools) dient nur dazu, Sie hierher zu bringen.

**Bearbeitungsmodus** – der Aufbaumodus. Widgets erhalten Griffe zum Verschieben, Skalieren und Drehen, ein Rechtsklick auf
eine leere Stelle der Arbeitsfläche öffnet das Menü **Add Widget**, und zwei einklappbare Seitenleisten erscheinen: der
[Outliner](./attribute-editor-and-outliner) links und der
[Attribut-Editor](./attribute-editor-and-outliner) rechts.

## Ihre erste Seite bauen \{#build-your-first-page}

Ein minimaler Picker für ein Bein, von Anfang bis Ende:

1. Öffnen Sie eine Level Sequence mit Ihrem Charakter und seinem Control Rig und öffnen Sie dann eine Picker-Seite.
   Das Rig-Dropdown in der Kopfzeile füllt sich aus der fokussierten Sequence – wählen Sie Ihr Rig (es wird
   automatisch ausgewählt, wenn es nur eines gibt).
2. Wechseln Sie in den **Bearbeitungsmodus**.
3. Wählen Sie im Viewport oder im Anim Outliner das Oberschenkel-Control aus. Rechtsklicken Sie auf die Arbeitsfläche →
   **Add Widget → Auswahl-Button**. Standardmäßig übernimmt ein neuer Button seine Zielliste aus der
   aktuellen Auswahl, dieser Button steuert also bereits den Oberschenkel.
4. Wiederholen Sie das für Unterschenkel und Fuß. Benennen Sie jeden Button über das Beschriftungsfeld im
   [Attribut-Editor](./attribute-editor-and-outliner) und ziehen Sie sie in eine
   beinförmige Spalte.
5. Wählen Sie alle drei aus und probieren Sie die [Ausrichtungswerkzeuge](./editing-tools), um die Spalte zu begradigen.
6. Verlassen Sie den Bearbeitungsmodus. Klicken Sie auf die Buttons – jeder wählt sein Control aus. Das ist der Grundablauf; alles andere
   ist Verfeinerung.
7. **Datei → Speichern** schreibt die Seite in eine JSON-Datei an einem beliebigen Ort – siehe
   [Speichern, Laden & Dateien](./save-load-and-files).

## Rückgängig, Wiederholen und Sicherheitsnetze \{#undo-redo-and-safety-nets}

Jede Änderung im Bearbeitungsmodus – Verschieben, Skalieren, Hinzufügen, Löschen, Einfügen, Farbänderungen – landet im
Rückgängig-Stapel der Seite (standardmäßig 30 Schritte; siehe [Editor-Einstellungen](./editor-settings)). Strg+Z /
Strg+Y oder die Buttons in der Kopfzeile. Das Ziehen innerhalb eines Farbwählers wird zu einem einzigen Rückgängig-Schritt
zusammengefasst statt zu einem pro Bewegung, sodass das Rückgängigmachen einer Farbänderung den gesamten Ziehvorgang zurücknimmt.

[Lesezeichen](./bookmarks) haben einen eigenen, separaten Rückgängig-Stapel – Layout-Rückgängig stört nie
Ihre gespeicherten Ansichten und umgekehrt.

## Dort weitermachen, wo Sie aufgehört haben \{#picking-up-where-you-left-off}

Pro gespeicherter Datei merkt sich das Plugin Schwenk und Zoom Ihrer Arbeitsfläche, welches Control Rig aktiv war und
ob Sie im Bearbeitungs- oder Live-Modus waren – all das wird beim nächsten Laden dieser Datei auf diesem Rechner
automatisch wiederhergestellt. Diese Daten liegen außerhalb der Seitendatei, sodass beim Teilen einer Seite mit einem
Teammitglied das Layout geteilt wird, nicht Ihre Ansichtsgewohnheiten. Siehe
[Speichern, Laden & Dateien](./save-load-and-files#session-state).
