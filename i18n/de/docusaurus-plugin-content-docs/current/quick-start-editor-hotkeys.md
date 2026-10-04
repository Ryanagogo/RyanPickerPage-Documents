# Tastenkürzel \{#hotkeys}

Alle Tastenkürzel und Mausgesten, auf die der Picker-Editor reagiert.

### Regeln zu Fokus und Modus \{#focus-and-mode-rules}

- **Tastenkürzel funktionieren nur, solange die Arbeitsfläche den Fokus hat.** Die Arbeitsfläche erhält den Fokus, sobald Sie darauf klicken. Hat ein Feld in einer Seitenleiste oder die Outliner-Liste den Fokus, gehen Ihre Tastenanschläge dorthin.
- Nur das Tastenkürzel **F** funktioniert im Live-Modus. Alle anderen Tastenkürzel gibt es nur im Bearbeitungsmodus.
- Schwenken per Rechtsziehen und Zoomen mit dem Mausrad funktionieren sowohl im Bearbeitungs- als auch im Live-Modus.

### Tastatur \{#keyboard}

| Taste | Aktion | Modus |
|---|---|---|
| **Entf** | Ausgewählte Widgets löschen | Nur Bearbeitung |
| **F** | Ansicht der Arbeitsfläche auf die aktuelle Auswahl zentrieren (Zoom bleibt unverändert) | Bearbeitung + Live |
| **Alt + Klick auf Button** | Den Viewport auf die Objekte zentrieren, die beim Klick auf einen Button ausgewählt werden |Nur Live|
| **Alt + Buttons per Rahmen auswählen** | Den Viewport auf die Objekte zentrieren, die beim Aufziehen eines Auswahlrahmens über Buttons ausgewählt werden |Nur Live|
| **Pfeiltasten** | Auswahl verschieben (Standard 2 px) | Nur Bearbeitung |
| **Umschalt + Pfeiltasten** | Auswahl in größerem Schritt verschieben (Standard 10 px) | Nur Bearbeitung |
| **Strg + X** | Ausgewählte Widgets ausschneiden | Nur Bearbeitung |
| **Strg + C** | Ausgewählte Widgets kopieren | Nur Bearbeitung |
| **Strg + V** | Am Mauszeiger einfügen | Nur Bearbeitung |
| **Strg + Z** | Rückgängig | Nur Bearbeitung |
| **Strg + Umschalt + Z** oder **Strg + Y** | Wiederholen | Nur Bearbeitung |

Die beiden Verschiebeabstände für die Tastatur werden im Bereich „Class Defaults“ der Seite festgelegt. Sie sind unabhängig vom Werkzeug **Verschieben** der Werkzeugleiste, das ein eigenes Feld für den Abstand hat.

Kopieren / Ausschneiden / Einfügen funktioniert über geöffnete Seiten-Tabs hinweg.

**Nicht belegt:** Es gibt kein Strg+A (alles auswählen), Strg+S (speichern), Strg+D (duplizieren) und keine Esc-Taste (Auswahl aufheben). Duplizieren, Ausrichten, Verteilen und Spiegeln gibt es nur im Rechtsklickmenü oder in der Werkzeugleiste.

### Maus – Widgets auswählen \{#mouse---selecting-widgets}

Nur Strg und Umschalt verändern das Auswahlverhalten.

| Geste | Aktion |
|---|---|
| Klick auf ein Widget | Nur dieses Widget auswählen |
| Strg + Klick auf ein Widget | Dieses Widget zur Auswahl hinzufügen oder daraus entfernen |
| Umschalt + Klick auf ein Widget | Dieses Widget zur Auswahl hinzufügen |
| Klick auf leere Arbeitsfläche | Auswahl aufheben |
| Ziehen auf leerer Arbeitsfläche | Einen Auswahlrahmen aufziehen |
| Strg oder Umschalt + Auswahlrahmen ziehen | Die umrahmten Widgets zur aktuellen Auswahl hinzufügen, statt sie zu ersetzen |
| Klick auf eine Zeile im Outliner | Wählt dieses Widget aus – funktioniert auch bei gesperrten Widgets |
| Doppelklick auf eine Zeile im Outliner | Umbenennen |

### Maus – Verschieben, Skalieren, Drehen (Bearbeitungsmodus) \{#mouse---moving-resizing-rotating-edit-mode}

Die acht Skaliergriffe und der Verschiebegriff erscheinen nur im Bearbeitungsmodus.

| Geste | Aktion |
|---|---|
| Verschiebegriff ziehen | Ausgewählte Widgets verschieben |
| **Alt** + Verschiebegriff ziehen | Drehen statt verschieben |
| **Alt + Umschalt** + Verschiebegriff ziehen | Drehen mit Einrasten in 15-Grad-Schritten |
| Kanten- oder Eckgriff ziehen | Skalieren (funktioniert auch bei gedrehten Widgets korrekt) |

Halten Sie Alt gedrückt, bevor Sie den Verschiebegriff anklicken, um mit dem Drehen zu beginnen. Halten Sie während des Ziehens Umschalt gedrückt, um einzurasten.

### Maus – auf der Arbeitsfläche navigieren \{#mouse---navigating-the-canvas}

| Geste | Aktion | Modus |
|---|---|---|
| Mausrad | Zum Mauszeiger hin zoomen | Bearbeitung + Live |
| Rechtsziehen | Arbeitsfläche schwenken | Bearbeitung + Live |
| Rechtsklick (ohne Ziehen) | Kontextmenü öffnen | Nur Bearbeitung |
| Trennlinie einer Seitenleiste ziehen | Größe des Outliner- oder Attribut-Editor-Panels ändern | Nur Bearbeitung |

### Lesezeichen \{#bookmarks}

| Geste | Aktion |
|---|---|
| Klick auf ein Lesezeichen | Die gespeicherte Ansicht anwenden |
| **Strg + Umschalt + Klick** auf ein Lesezeichen | Die aktuelle Ansicht in diesem Lesezeichen speichern (überschreibt es) |
| Rechtsklick auf ein Lesezeichen | Umbenennen oder leeren |
