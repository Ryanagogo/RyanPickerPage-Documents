---
sidebar_position: 8
---

# Bild \{#image}

*Grafiken auf der Arbeitsfläche – Charakterporträts, Körperdiagramme, Hintergründe.*

Bilder sind das visuelle Fundament eines guten Pickers: Eine Charakter-Turnaround-Ansicht oder ein Körperumriss
hinter den Buttons macht aus einem abstrakten Button-Raster etwas, das auf einen Blick lesbar ist. Wie
[Beschriftungen](./widget-label) haben sie im Live-Modus kein Klickverhalten, und sie beginnen in der
[Ebenengruppe](./editing-tools#layer-groups) **Bilder** – der hintersten der drei Standardgruppen –,
sodass ein frisch hinzugefügtes Bild kein interaktives Control verdeckt, es sei denn, Sie ordnen
die Gruppen später selbst um.

## Zuschnitt-Schwenk/-Zoom \{#crop-panzoom}

Statt Texturen vorab in einem Bildbearbeitungsprogramm zuzuschneiden, rahmen Sie sie auf der Seite: **Image Scale**
zoomt in die Quelltextur hinein, und **Image Offset** schwenkt das sichtbare Fenster darüber. Ein einziges
Charakterblatt kann ein Dutzend Bild-Widgets speisen, von denen jedes einen anderen Körperteil zeigt. Dieselben
beiden Regler gibt es auch beim Hintergrundbild einer Beschriftung.

## Erstellung \{#authoring}

- **Textur**
- **Streckmodus** – wie die Textur in das Rechteck des Widgets eingepasst wird
- **Image Scale** / **Image Offset** – das Zuschnittfenster
- **Hintergrundfarbe** – liegt hinter der Textur; zugleich die Farbe, zu der **Bild-Alpha** überblendet
- **Bild-Alpha** – Deckkraft der Textur über der Hintergrundfarbe, 0–1
- Eckenradius (standardmäßig eckig, wie bei Beschriftungen)
- Der gemeinsame Block für Position/Größe/Rotation

## Rendering \{#rendering}

Bilder und Beschriftungen werden über eine dynamische Instanz eines gemeinsamen Materials
(`M_RyanPickerRoundedImage`) gezeichnet statt über einen einfachen Textur-Brush. Eckenrundung, Einpassung gemäß Streckmodus
und das Zuschnittfenster werden alle in diesem einen Material-Durchgang berechnet – deshalb verhalten sich beide
Typen pixelgenau identisch, und deshalb kostet das Zuschneiden nichts extra.

## Skripting \{#scripting}

`URyanPickerImageFunctionLibrary` (Kategorie `Ryan Picker Page|Image`):

| Funktion | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | Zuschnitt-Schwenk/-Zoom |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImageAlpha` / `SetImageAlpha` | auf 0–1 begrenzt |

Keine Event-Hook-Schnittstelle; die [gemeinsamen Widget-Funktionen](./blueprint-api) gelten.
