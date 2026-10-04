---
sidebar_position: 10
---

# Pose spiegeln \{#mirror-pose}

*Bringen Sie der Seite einmal ihre eigene Links-/Rechts-Symmetrie bei – und spiegeln Sie Layouts von da an jederzeit.*

Das [Spiegeln-Werkzeug](./editing-tools#mirror) spiegelt die gerade aktive Auswahl an
dem gewählten Anker – gut für einmaliges Umklappen, aber es weiß nichts darüber, welche Widgets
einander entsprechen. **Pose spiegeln** löst das mit einer **Pose Map**: einer seitenweiten Aufzeichnung darüber,
welches Widget der linke Partner welches anderen ist, wo die Mittellinie liegt und welches Widget
das Ganze verankert. Ist die Zuordnung einmal erstellt, ist das Spiegeln des Layouts jedes Mal ein einziger Klick – ganz ohne
Auswahl-Akrobatik.

## Die Pose Map \{#the-pose-map}

Erstellt im Dialog **Pose Map…** (Menü „Datei“). Jede Seite hat genau eine Map mit drei
Arten von Einträgen:

- **Anker** – das einzelne Widget, das die Spiegelachse (seinen Mittelpunkt) definiert. Meist ein
  Root-/Becken-Button auf der Mittellinie der Seite. Ohne gesetzten Anker wird nichts gespiegelt –
  der Button „Pose“ warnt sonst mit einer Benachrichtigung.
- **Mittel-Widgets** – Wirbelsäule, Kopf, alles auf der Mittellinie. Sie werden auf sich selbst gespiegelt
  (an Ort und Stelle über die Achse geklappt).
- **Paare** – Links/Rechts-Widget-Paare: linker Oberschenkel ↔ rechter Oberschenkel und so weiter.

Die Widget-Dropdowns des Dialogs sind alphabetisch sortiert und durchsuchbar, sodass das Zuordnen einer großen Seite
Tippen-und-Filtern statt Scrollen ist. Ein Button **Map zurücksetzen** (mit Bestätigung) leert
die gesamte Map. Die Map wird in der Seitendatei gespeichert und reist so mit dem Layout mit.

## Verwendung \{#using-it}

Die Spiegeln-Zeile der Werkzeugleiste enthält hinter den Buttons „Mirror Horizontal/Vertical“ einen Button **Pose** und ein
Richtungs-Dropdown.

**Mit einer Auswahl** – ein Klick auf **Pose** spiegelt jedes ausgewählte Widget gemäß seiner zugeordneten
Rolle: Position und Rotation eines linken oder rechten Widgets werden an der Achse des Ankers gespiegelt und
auf seinen *Partner* geschrieben (die ausgewählte Seite ist die Quelle und bewegt sich nicht); Mittel- und
Anker-Widgets klappen an Ort und Stelle um. Ausgewählte Widgets, die nicht in der Map stehen, werden mit einer Benachrichtigung übersprungen,
während der Rest verarbeitet wird.

**Ohne Auswahl** – die gesamte Map wird mit einem Klick gespiegelt, in der Richtung, die das Dropdown
angibt (standardmäßig **Links → Rechts** oder **Rechts → Links**): Der Anker und jedes Mittel-Widget
klappen an Ort und Stelle um, und jedes Paar kopiert seine Quellseite auf seine Zielseite. Das ist der
Button „Linker Arm fertig – jetzt den rechten Arm übernehmen“.

Das Richtungs-Dropdown ist ein temporäres Seitensteuerelement – es wird nicht mit der Datei gespeichert.

## Was es ändert – und was nicht \{#what-it-changes--and-doesnt}

Pose spiegeln bewegt die **Widget-Geometrie**: Position und Rotation auf der Arbeitsfläche. Wie das Spiegeln-Werkzeug
ändert es nichts daran, womit die Widgets verbunden sind – Ihr Button für den rechten Oberschenkel steuert weiterhin den rechten
Oberschenkel; er wird nur exakt dort platziert, wo der linke ist, gespiegelt. Genau darum geht es:
einmal umzielen, dann beide Seiten optisch im Gleichschritt halten, während sich das Layout weiterentwickelt.
