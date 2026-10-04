---
sidebar_position: 7
---

# Beschriftung \{#label}

*Text auf der Arbeitsfläche. Klicks gehen direkt hindurch.*

Beschriftungen dienen der Annotation: Abschnittsüberschriften („LINKER ARM“), Notizen oder beschriftete Bilder. Sie haben
im Live-Modus kein Klickverhalten und keine Zielzuweisung – was auch bedeutet, dass sie (zusammen mit [Bild](./widget-image))
der einzige Widget-Typ sind, den Sie frei überlagern können, ohne den umliegenden Controls Klicks
wegzunehmen.

Eine Beschriftung kann statt eines festen Textes live den **Namen des aktuellen Control Rigs** anzeigen – platzieren Sie eine in
einer Ecke der Seite, und sie zeigt dem Animator stets an, welches Rig dieser Tab steuert.

## Erstellung \{#authoring}

- **Text**, Schriftgröße, Schriftfarbe, **Ausrichtung**, **automatischer Umbruch**
- **Hintergrundfarbe** und optional ein Hintergrund**bild** mit eigenem Streckmodus und
  [Zuschnitt-Schwenk/-Zoom](./widget-image#crop-panzoom)
- **Bild-Alpha** – Deckkraft dieses Hintergrundbilds über der Hintergrundfarbe, 0–1
- Eckenradius: Beschriftungen haben standardmäßig eckige Ecken (Radius 0), nehmen aber an derselben
  [Rundungskaskade](./attribute-editor-and-outliner#corner-radius) teil wie alle anderen Typen
- Der gemeinsame Block für Position/Größe/Rotation

Beschriftungen rendern ihren Hintergrund mit demselben Material für abgerundete Ecken wie
[Bild](./widget-image#rendering), sodass sich Rundung und Bildzuschnitt bei beiden identisch verhalten.

## Skripting \{#scripting}

`URyanPickerLabelFunctionLibrary` (Kategorie `Ryan Picker Page|Label`):

| Funktion | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | Hintergrundbild |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | Zuschnitt-Schwenk/-Zoom |
| `GetImageAlpha` / `SetImageAlpha` | auf 0–1 begrenzt |

Beschriftungen haben keine Event-Hook-Schnittstelle – es gibt nichts zu klicken oder zu ziehen –, aber alle
[gemeinsamen Widget-Funktionen](./blueprint-api) (Position, Größe, Rotation, Eckenradius, Name)
gelten.
