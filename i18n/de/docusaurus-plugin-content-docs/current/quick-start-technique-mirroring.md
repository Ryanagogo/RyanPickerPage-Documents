import useBaseUrl from '@docusaurus/useBaseUrl';

# Spiegeln \{#mirroring}

### Werkzeug „Widgets spiegeln“ \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**Dieses Werkzeug finden Sie nur im Bearbeitungsmodus.**

Es hilft Ihnen, Widgets in Ihrem Layout zu spiegeln, und unterstützt Sie so beim Erstellen von Layouts für Bipeds oder andere Charaktere, bei denen Sie Links-/Rechts-Symmetrie benötigen.

## Das Werkzeug besteht aus zwei Teilen \{#the-tool-is-divided-into-two-parts}

### Auswahl umklappen \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### Umklappmodi \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **Selbst**
  - Jedes ausgewählte Widget klappt an seiner eigenen Achse um
- **Zuletzt ausgewählt (inkl.)**
  - Alle ausgewählten Widgets klappen um das zuletzt ausgewählte Widget um, wobei das zuletzt ausgewählte Widget an seiner eigenen Achse umklappt
- **Zuletzt ausgewählt (exkl.)**
  - Dies ist der Standardmodus
  - Alle ausgewählten Widgets klappen um das zuletzt ausgewählte Widget um, das zuletzt ausgewählte Widget ist jedoch nicht betroffen und bewegt sich nicht
- **Sichtbare Arbeitsfläche**
  - Alle ausgewählten Widgets klappen an der aktuell sichtbaren Arbeitsfläche um

##### Umklapprichtungen \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

Das genaue Ergebnis des Umklappens hängt vom gewählten Verhalten ab

- **Flip Horizontal**
  - Klappt ausgewählte Widgets entlang der X-Achse um.
- **Flip Vertical**
  - Klappt ausgewählte Widgets entlang der Y-Achse um

### Vordefinierte Pose-Sets spiegeln \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### Ausgewählte Widgets spiegeln \{#mirror-selected-widgets}

- Alle ausgewählten Widgets, die in einer Pose Map definiert sind, werden gemäß ihrer Pose Map gespiegelt
- Ein Widget kann nur in einer einzigen Pose Map stehen

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### Pose von links nach rechts spiegeln \{#mirror-pose-left-to-right}

- Dieser Vorgang wirkt auf die Pose Map, die gerade im Pose-Map-Editor ausgewählt ist
- Werden die falschen Widgets gespiegelt, machen Sie den Vorgang rückgängig und wechseln Sie die aktuelle Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### Pose von rechts nach links spiegeln \{#mirror-pose-right-to-left}

- Dieser Vorgang wirkt auf die Pose Map, die gerade im Pose-Map-Editor ausgewählt ist
- Werden die falschen Widgets gespiegelt, machen Sie den Vorgang rückgängig und wechseln Sie die aktuelle Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Pose Maps definieren \{#define-pose-maps}

Klicken Sie auf den Button „Map“, um den Pose-Map-Editor zu öffnen

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### Der Pose-Map-Editor \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

Auf einer einzigen Picker Page können Sie mehr als eine Pose Map definieren – zum Beispiel eine Map für die Körper-Widgets und eine für die Gesichts-Widgets

##### Eine neue Pose Map erstellen \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Name der Map \{#map-name}

Eine neu erstellte Map hat zunächst einen Standardnamen, den Sie beliebig ändern können

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### Anker-Widget \{#anchor-widget}

Alle Widgets in der Pose Map werden relativ zum Anker-Widget gespiegelt und transformiert

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### Mittel-Widgets \{#center-widgets}

Alle Mittel-Widgets werden relativ zum Anker-Widget mittig ausgerichtet

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### Widget-Paare \{#widget-pairs}

Widgets in der linken und rechten Paarspalte werden relativ zum Anker-Widget aneinander gespiegelt

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

Nachdem die Map festgelegt ist, sieht das Ergebnis beim Spiegeln der Pose von rechts nach links so aus

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### Eine Map zurücksetzen \{#resetting-a-map}

Wenn Sie die Map leeren möchten, klicken Sie einfach auf den Button „Map zurücksetzen“

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Zwischen Maps wechseln \{#switching-between-maps}

Sobald Sie mehr als eine Map haben, können Sie im Dropdown-Menü auswählen, welche Map Sie bearbeiten möchten

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### Widget-Namen \{#widget-names}

Pose Maps verwenden Widget-Namen. Geben Sie Ihren Widgets daher sinnvolle Namen, statt einfach die Standardnamen zu verwenden, die beim Erstellen eines Widgets vergeben werden.

Um den aktuellen Namen eines Widgets zu sehen, wählen Sie ein Widget aus und öffnen Sie den Outliner (das „+“ in der oberen linken Ecke der Arbeitsfläche)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

Zunächst sehen Sie möglicherweise einen Standardnamen

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Mit einem Doppelklick auf den Eintrag im Outliner können Sie den Widget-Namen ändern

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Ein Widget einem Eintrag der Pose Map zuweisen \{#setting-a-widget-on-a-pose-map-item}

**Dafür gibt es zwei Möglichkeiten**

Verwenden Sie das Dropdown-Menü und wählen Sie den Eintrag aus der Liste aus

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

Verwenden Sie den Button „Set Selected“ rechts neben dem Map-Eintrag. Wenn Sie darauf klicken, wird der Name des ausgewählten Widgets in das Feld eingetragen

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

Bei Widget-Paaren müssen Sie jeweils einen Eintrag in der linken und in der rechten Spalte festlegen

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
