import useBaseUrl from '@docusaurus/useBaseUrl';

# Werkzeugleiste \{#toolbar}

**Im Bearbeitungsmodus** finden Sie die Werkzeugleiste in der Kopfzeile des Editors

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

Mit diesen Werkzeugen führen Sie verschiedene Aktionen auf einem oder mehreren ausgewählten Picker-Widgets aus.

### So funktioniert es: \{#the-way-it-works}

- Widgets auswählen
- Auf einen Button der Werkzeugleiste klicken, um das Werkzeug zu öffnen
- Den Wert im Feld ändern oder auf einen Button klicken
- Die Wertänderung bzw. der Button-Klick wirkt sich auf alle ausgewählten Widgets aus

### Bild \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**Dieses Werkzeug wirkt auf Beschriftungs- und Bild-Widgets, die beide ein Bild haben können.**

- Wählen Sie Beschriftungs- oder Bild-Widgets aus und klicken Sie dann auf das Dropdown, um nach dem gewünschten Bild zu suchen oder das im Content Browser ausgewählte Bild hinzuzufügen. Alle ausgewählten Widgets verwenden dann dieses Bild

### Farbe \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**Dieses Werkzeug wirkt auf alle Widgets mit einer Hintergrundfarbe – und außerdem auf Widgets mit Text.**

- Wählen Sie Widgets aus, klicken Sie dann auf die Hintergrund- oder Schriftfarbe und wählen Sie im Farbwähler die gewünschte Farbe. Alle ausgewählten Widgets erhalten diese Farben

### Beschriftung \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**Dieses Werkzeug wirkt auf Widgets mit Text.**

- Wählen Sie Widgets aus und ändern Sie dann den Text im Beschriftungsfeld oder den Wert für die Schriftgröße. Der Text aller ausgewählten Widgets wird aktualisiert

### Größe \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**Dieses Werkzeug wirkt auf alle Widgets**

- Wählen Sie Widgets aus und ändern Sie dann die Werte für Breite oder Höhe. Breite bzw. Höhe aller ausgewählten Widgets werden geändert

### Verschieben \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**Dieses Werkzeug wirkt auf alle ausgewählten Widgets**

- Wählen Sie Widgets aus und ändern Sie dann den Verschiebewert. Wenn Sie auf einen der Pfeil-Buttons klicken, werden alle ausgewählten Widgets um diesen Wert verschoben.

### Ausrichten \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**Dieses Werkzeug wirkt auf alle ausgewählten Widgets**

- Wählen Sie Widgets aus und klicken Sie dann auf einen der Ausrichtungs- oder Verteilungs-Buttons. Die Kanten aller ausgewählten Widgets werden ausgerichtet bzw. die Widgets gleichmäßig verteilt.
- Bei den Ausrichtungsfunktionen ist das zuletzt ausgewählte Widget der Anker, d. h. alle anderen ausgewählten Widgets werden am zuletzt ausgewählten Widget ausgerichtet.

### Spiegeln \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### Dieses Werkzeug wirkt auf alle ausgewählten Widgets \{#this-tool-affects-all-selected-widgets}

- Wählen Sie Widgets aus und klicken Sie dann auf einen der Umklapp- oder Spiegel-Buttons. Alle ausgewählten Widgets werden an ihre gespiegelten Positionen transformiert

#### Beim Umklappen (Mirror Flip) können Sie das Umklappverhalten festlegen. \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **Selbst:** Jedes ausgewählte Widget klappt an seiner eigenen Achse um
- **Zuletzt ausgewählt (inkl.):** Alle ausgewählten Widgets klappen um das zuletzt ausgewählte Widget um. Das zuletzt ausgewählte Widget klappt ebenfalls an seiner eigenen Achse um
- **Zuletzt ausgewählt (exkl.):** Alle ausgewählten Widgets klappen um das zuletzt ausgewählte Widget um. Das zuletzt ausgewählte Widget ist nicht betroffen und bewegt sich nicht.
- **Sichtbare Arbeitsfläche:** Alle ausgewählten Widgets klappen an der Achse der sichtbaren Arbeitsfläche um

#### Damit „Pose spiegeln“ funktioniert, müssen Pose Maps zum Spiegeln erstellt werden. \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **Pose Maps zum Spiegeln:** Damit legen Sie das Anker-Widget für das Spiegeln fest und bestimmen die Mittel-Widgets sowie die Links/Rechts-Widget-Paare.
- **Mehrere Maps auf einer Seite:** Sie können mehr als eine Map haben, etwa eine für den Körper und eine für das Gesicht.
