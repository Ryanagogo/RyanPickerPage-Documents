---
sidebar_position: 14
---

# Speichern, Laden & Dateien \{#saving-loading--files}

Eine Seite wird in eine einzige **JSON-Datei** gespeichert, an einem beliebigen Ort auf der Festplatte. Seiten sind keine Unreal-
Assets: Sie liegen nicht in `Content/`, benötigen nicht das Projekt, in dem sie erstellt wurden, und lassen sich
wie jede Textdatei teilen, per E-Mail versenden oder versionieren.

Eine Speicherung enthält die gesamte Seite: jedes Widget mit allen Verbindungen und Stilen, die
[Lesezeichenleiste](./bookmarks), Umschaltergruppen und die [Pose Map](./mirror-pose).

## Das Menü „Datei“ \{#the-file-menu}

| Eintrag | |
|---|---|
| **Speichern** | schreibt zurück in die aktuelle Datei der Seite; verhält sich bei einer noch nie gespeicherten Seite wie „Speichern unter“ |
| **Speichern unter** | nativer Speichern-Dialog |
| **Laden** | nativer Öffnen-Dialog |
| **Zuletzt verwendet laden** | zuletzt verwendete Dateien, ohne Dialog |
| **Neu laden** | liest die aktuelle Datei erneut von der Festplatte |
| **Pose Map…** | der [Pose-Map-Dialog](./mirror-pose#the-pose-map) |
| **Settings…** | der Dialog [Editor-Einstellungen](./editor-settings) |

Speichern- und Laden-Dialoge öffnen sich wieder in den zuletzt verwendeten Verzeichnissen.

## Das Menü „Hilfe“ \{#the-help-menu}

Die Einträge sind vollständig datengesteuert – eine Liste von Beschriftung/URL/Tooltip-Einträgen, die im Bereich „Class
Defaults“ der Seite bearbeitet wird. Fügen Sie Einträge hinzu, entfernen, sortieren oder ändern Sie sie ohne Codeänderung oder Neukompilierung;
ein Klick öffnet die URL im Standardbrowser Ihres Betriebssystems. Ein Eintrag ist fest statt
datengesteuert: **Info**, der die Plugin-Version, die Unreal-Engine-Version und den
Autor in einem einfachen Infodialog anzeigt.

## Alte Dateien lassen sich weiterhin laden \{#old-files-keep-loading}

Speicherdateien sind schemaversioniert. Beim Laden einer älteren Datei wird diese automatisch durch alle
dazwischenliegenden Schemaänderungen migriert – Seiten aus frühen Plugin-Versionen lassen sich in die
aktuelle laden, und ein erneutes Speichern schreibt sie in der aktuellen Version. Dateien, die nicht
migriert werden können (oder die von einem *neueren* Plugin als Ihrem stammen), werden mit einer klaren Fehlermeldung abgelehnt,
statt halb geladen zu werden.

Ein Hinweis zum Datenschutz: Das [Python-Skript](./python-scripting) eines Auswahl-Buttons wird
Base64-codiert in der Datei gespeichert – codiert, nicht verschlüsselt. Behandeln Sie Seitendateien mit Skripten wie
die Skripte selbst.

## Sitzungsstatus \{#session-state}

Neben der Seitendatei – aber niemals darin – merkt sich das Plugin pro Dateipfad, wo Sie
aufgehört haben: Schwenk/Zoom der Arbeitsfläche, das aktive Control Rig, Bearbeitungs- oder Live-Modus. Laden Sie dieselbe Datei
morgen, und die Arbeitsfläche ist genau dort, wo Sie sie verlassen haben. Da diese Daten auf Ihrem Rechner, nach Dateipfad
geordnet, liegen, wird beim Teilen einer Seite nur das Layout geteilt – Empfänger erhalten ihren eigenen Ansichtszustand.
Einträge, die 90 Tage (konfigurierbar) nicht verwendet wurden, werden entfernt.

## Wo das Plugin seine eigenen Dateien ablegt \{#where-the-plugin-keeps-its-own-files}

```
%APPDATA%\RyanTechAnimTools\RyanPicker\
├── settings.json              # zuletzt verwendete Dateien, letzte Dialogverzeichnisse, Outliner-Ansicht
├── editor_settings.json       # die Werte des Dialogs „Editor-Einstellungen“
└── page_session_state.json    # Sitzungsstatus pro Datei, nach absolutem Pfad geordnet
```

Diese sind benutzer- und rechnerbezogen. Wenn Sie sie löschen, gehen Komfortfunktionen verloren (zuletzt verwendete Dateien, wiederhergestellte
Ansichten, Einstellungen), aber niemals Seitendaten – Seiten existieren nur in den Dateien, die Sie gespeichert haben.
