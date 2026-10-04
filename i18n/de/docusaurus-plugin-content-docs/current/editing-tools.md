---
sidebar_position: 9
---

# Bearbeitungs- & Arbeitsflächen-Werkzeuge \{#editing--canvas-tools}

Alles auf dieser Seite geschieht im **Bearbeitungsmodus**. Die Arbeitsfläche selbst lässt sich in beiden
Modi schwenken und zoomen – bauen Sie in jeder Vergrößerung, die Ihnen angenehm ist.

## Auswahl \{#selection}

- Klicken Sie auf ein Widget, um es auszuwählen; Umschalt-/Strg-Klick erweitert die Auswahl.
- Ziehen Sie auf einer leeren Stelle der Arbeitsfläche, um ein Auswahlrechteck aufzuziehen.
- Ausgewählte Widgets zeigen acht Skaliergriffe plus einen Drehgriff, jeweils mit eigenem Mauszeiger.

Der Attribut-Editor folgt der Einzelauswahl; mit den Werkzeugleisten-Werkzeugen unten bearbeiten Sie viele
Widgets auf einmal.

## Direkte Manipulation \{#direct-manipulation}

Ziehen Sie ein Widget, um es zu verschieben. Ziehen Sie einen Griff, um es zu skalieren – das Skalieren funktioniert auch bei gedrehten
Widgets korrekt. Ziehen Sie den Drehgriff, um ein Widget um seinen Mittelpunkt zu drehen; die Rotation wird in
Grad gespeichert, und gedrehte Widgets bleiben im Live-Modus voll funktionsfähig (ein gedrehter Slider wird entlang
seiner gedrehten Achse gezogen). Halten Sie beim Drehen die Umschalttaste gedrückt, um in 15°-Schritten einzurasten. Das Drehen einer Auswahl aus mehreren Widgets
dreht die ganze Gruppe starr um einen gemeinsamen Drehpunkt (verankert am zuletzt ausgewählten
Widget), während sich jedes Widget zusätzlich um seinen eigenen Mittelpunkt dreht.

Ein gesperrtes Widget ist von all dem ausgenommen – siehe [Widgets sperren](./attribute-editor-and-outliner#widget-locking).

Pfeiltasten verschieben die Auswahl schrittweise (mit Umschalt in größeren Schritten; beide Abstände sind Class
Defaults der Seite). Das Werkzeug **Verschieben** der Werkzeugleiste fügt Pfeile auf dem Bildschirm hinzu, deren Schrittweite über ein eigenes
Zahlenfeld eingestellt wird – für wiederholte, exakte Schritte.

## Werkzeugleisten-Werkzeuge \{#toolbar-tools}

Es ist jeweils eine Werkzeugzeile aktiv, umgeschaltet in der Kopfzeile:

| Werkzeug | Wirkt auf die Auswahl |
|---|---|
| **Bild** | weist jedem ausgewählten Widget eine Textur zu |
| **Farbe** | überträgt eine Hintergrund-/Schriftfarbe auf jedes ausgewählte Widget |
| **Beschriftung** | setzt Beschriftungstext und Schriftgröße für die gesamte Auswahl |
| **Größe** | setzt exakte Breite/Höhe für die gesamte Auswahl |
| **Verschieben** | Pfeile mit fester Schrittweite, wie oben |
| **Ausrichten** | links/rechts/oben/unten, horizontale/vertikale Mitte und gleichmäßige Verteilung |
| **Spiegeln** | siehe unten |

Farbänderungen über die Werkzeugleiste (und den Attribut-Editor) werden zusammengefasst, während Sie im
Farbwähler ziehen – ein Rückgängig-Schritt pro Farbsitzung, nicht pro Mausbewegung.

## Spiegeln \{#mirror}

Baut eine Seite einer Picker-Seite aus der anderen auf: **Mirror Horizontal** / **Mirror Vertical** spiegeln
die Position jedes ausgewählten Widgets an einer Achse und kehren seine Rotation um. Die Achse wird über das
Dropdown **Mirror Mode** festgelegt:

| Modus | Spiegelt an |
|---|---|
| Selbst | dem eigenen Mittelpunkt jedes Widgets – Widgets klappen an Ort und Stelle um |
| Zuletzt ausgewählt (inkl.) | dem Mittelpunkt des zuletzt ausgewählten Widgets; es bewegt sich mit |
| Zuletzt ausgewählt (exkl.) | dem Mittelpunkt des zuletzt ausgewählten Widgets; es bleibt, wo es ist |
| Sichtbare Arbeitsfläche | der Mitte des aktuell sichtbaren Bereichs |

Spiegeln ist rein geometrisch – es benennt keine Controls um und tauscht keine Slider-Kanäle. Der übliche
Ablauf ist Spiegeln, dann Umzielen: Spiegeln Sie die Widgets des linken Arms und richten Sie die Kopien dann auf die
Controls der rechten Seite. Für wiederholbares Links-/Rechts-Spiegeln, das sich die Paarung merkt, siehe
[Pose spiegeln](./mirror-pose).

## Ebenengruppen \{#layer-groups}

Jedes Widget gehört zu genau einer **Ebenengruppe**, und die Zeichenreihenfolge ergibt sich einfach aus den Mitgliedern jeder Gruppe,
Gruppe für Gruppe, von vorne nach hinten. Drei Gruppen – **Bilder**, **Beschriftungen**, **Steuerelemente** – werden
auf jeder Seite angelegt und können nicht gelöscht werden (das Löschen jeder anderen Gruppe weist ihre Mitglieder stattdessen wieder der
Standardgruppe ihres Typs zu). Darüber hinaus können Sie beliebig viele Gruppen erstellen, umbenennen, neu anordnen und sperren –
eine gesperrte Gruppe sperrt jedes Widget darin, genau wie
[Widgets sperren](./attribute-editor-and-outliner#widget-locking) bei einem einzelnen Widget.

Rechtsklicken Sie auf ein Widget für **In den Vordergrund bringen / Step Up / Step Down / In den Hintergrund senden**, jeweils innerhalb seiner eigenen Gruppe. Das Verschieben
eines Widgets zwischen Gruppen, das Neuanordnen der Gruppen selbst und das Sperren erfolgen alle in der
[Ansicht „Nach Ebene“](./attribute-editor-and-outliner#outliner-left) des Outliners – auf jener Seite finden Sie die
vollständige Drag-and-Drop-Verwaltung.

## Kopieren, Ausschneiden, Einfügen \{#copy-cut-paste}

Strg+C / Strg+X / Strg+V für jede Auswahl. Eingefügtes landet am Mauszeiger; das Einfügen in einen anderen geöffneten
Seiten-Tab funktioniert, und „An Ort und Stelle einfügen“ erhält exakte Positionen für Übertragungen zwischen Seiten.
Eingefügte Widgets behalten nach Möglichkeit ihre Namen, bei Duplikaten mit einem numerischen Suffix. Umschalter-
gruppen können [als ganze Gruppen](./widget-toggle#toggle-groups) kopiert und eingefügt werden.

## Widget-Standardwerte \{#widget-defaults}

Wie ein frisch hinzugefügtes Widget aussieht, ist geschichtet, das Spezifischste zuletzt:

1. **Class Defaults** – Startwerte pro Typ (Farben, Größen, Schriften …), bearbeitbar im
   Bereich „Class Defaults“ der Seite, eine Kategorie pro Widget-Typ.
2. **Sticky Defaults** – Rechtsklick auf ein beliebiges Widget → **Copy to Sticky Defaults**, und spätere
   Widgets dieses Typs werden passend dazu erzeugt. Welche Eigenschaftskategorien übernommen werden (Farbe, Schrift, Eckenradius,
   Größe, Rotation, Text, Bild), wird in den [Editor-Einstellungen](./editor-settings) festgelegt.

Diese gelten nur für Widgets aus dem Menü „Add Widget“ – eingefügte und geladene Widgets behalten ihre eigenen
Daten.
