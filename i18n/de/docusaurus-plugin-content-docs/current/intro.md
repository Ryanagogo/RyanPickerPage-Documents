---
sidebar_position: 1
---

# Einführung \{#introduction}

**Ryan Picker Page** ist ein Animations-Picker für Unreal Engine: eine Arbeitsfläche aus Buttons, Slidern,
Umschaltern, Beschriftungen und Bildern, die Sie einmal pro Charakter anlegen und dann nutzen, um
Control-Rig-Controls (und Level-Actors) mit einem einzigen Klick auszuwählen und zu steuern – ohne mitten im Shot
den Viewport, die Rig-Hierarchie oder den Sequencer-Baum durchsuchen zu müssen.

Dasselbe Fenster ist zugleich Picker und Editor. Wechseln Sie in den Bearbeitungsmodus, um das Layout aufzubauen;
wechseln Sie zurück in den Live-Modus, um damit zu animieren. Seiten werden als portable JSON-Dateien gespeichert,
die Sie zwischen Projekten und Teammitgliedern austauschen können.

## Voraussetzungen \{#requirements}

- Unreal Engine **5.6 – 5.8**
- Diese Engine-Plugins müssen aktiviert sein (das Plugin deklariert sie als Abhängigkeiten): **Control Rig**,
  **Synthesis**, **Python Editor Script Plugin**

Das Plugin ist reines Editor-Plugin. Es gelangt nie in einen gepackten Build und fügt zur Laufzeit nichts hinzu.

## Installation \{#installation}

1. Kopieren Sie den Ordner `RyanPickerPage` in das Verzeichnis `Plugins/` Ihres Projekts.
2. Aktivieren Sie es unter **Edit → Plugins** und starten Sie den Editor neu.
3. Öffnen Sie einen Picker über **Tools → Ryan Picker Page**.

## So finden Sie sich in dieser Dokumentation zurecht \{#finding-your-way-around-these-docs}

Wenn Sie als **Animator** eine Seite verwenden, die jemand für Sie gebaut hat, beginnen Sie mit
[Erste Schritte](./getting-started) und den Live-Modus-Abschnitten der Widget-Seiten.

Wenn Sie **Seiten bauen**, lesen Sie in dieser Reihenfolge: [Erste Schritte](./getting-started) →
[Control Rig & Ziel-Actors](./control-rig-and-targets) → die Seiten zu den Widget-Typen →
[Bearbeitungs- & Arbeitsflächen-Werkzeuge](./editing-tools).

Wenn Sie als **TD das Plugin erweitern**, gehen Sie direkt zu den Seiten
[Blueprint-API](./blueprint-api) und [Python-Skripting](./python-scripting) – einschließlich der Frage,
wie Sie eigene Widget-Varianten als Blueprint-Unterklassen ausliefern, die im Menü „Add Widget“ erscheinen.

### Alle Seiten \{#all-pages}

| Bereich | Seiten |
|---|---|
| Grundlagen | [Erste Schritte](./getting-started) |
| Widget-Typen | [Auswahl-Button](./widget-select-button) · [1D-Slider](./widget-1d-slider) · [2D-Slider](./widget-2d-slider) · [Umschalter](./widget-toggle) · [Beschriftung](./widget-label) · [Bild](./widget-image) |
| Seiten bauen | [Bearbeitungs- & Arbeitsflächen-Werkzeuge](./editing-tools) · [Pose spiegeln](./mirror-pose) · [Lesezeichen](./bookmarks) |
| So funktioniert das Targeting | [Control Rig & Ziel-Actors](./control-rig-and-targets) · [Attribut-Editor & Outliner](./attribute-editor-and-outliner) |
| Dateien & Einstellungen | [Speichern, Laden & Dateien](./save-load-and-files) · [Editor-Einstellungen](./editor-settings) |
| Erweitern | [Blueprint-API](./blueprint-api) · [Python-Skripting](./python-scripting) |
