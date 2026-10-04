import useBaseUrl from '@docusaurus/useBaseUrl';

# Auswahl-Button \{#selection-button}

### Einen neuen Auswahl-Button erstellen \{#creating-a-new-selection-button}

Sie müssen sich im **Bearbeitungsmodus** befinden, um einen neuen **Auswahl-Button** zu erstellen

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**Rechtsklicken Sie auf eine leere Stelle der Picker-Arbeitsfläche**, um das Kontextmenü zu öffnen, und klicken Sie dann auf den Menüeintrag „Auswahl-Button“

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### Ziele des Auswahl-Buttons \{#selection-button-targets}

##### Ziele in der Auswahlliste festlegen \{#setting-targets-in-the-selection-list}

Es gibt zwei grundlegende Wege, Ziele in der Auswahlliste festzulegen und hinzuzufügen

- **Vor dem Erstellen des Auswahl-Buttons**: Wählen Sie die Controls oder Actors aus, die der Button auswählen soll, und erstellen Sie dann einen neuen Auswahl-Button
- **Nach dem Erstellen des Auswahl-Buttons**: Wählen Sie die Controls oder Actors aus, rechtsklicken Sie dann auf den Button, um das Kontextmenü zu öffnen, und wählen Sie eine der Ziel-Aktionen

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **„Mit Auswahl festlegen“** ersetzt alle vorhandenen Ziele in der Liste durch die aktuell ausgewählten
- **„Auswahl hinzufügen“** fügt die aktuell ausgewählten Ziele der Zielliste hinzu

##### Bestimmte Ziele aus der Auswahlliste entfernen \{#removing-specific-targets-from-the-selection-list}

- Um bestimmte Ziele zu entfernen, wählen Sie die zu entfernenden Controls oder Actors aus, rechtsklicken dann auf den Auswahl-Button, um das Kontextmenü zu öffnen, und klicken auf den Menüeintrag „Auswahl entfernen“.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### Die Auswahlliste leeren \{#clearing-the-selection-list}

- Um alle Ziele aus der Auswahlliste zu entfernen, rechtsklicken Sie auf den Auswahl-Button, um das Kontextmenü zu öffnen, und klicken dann auf den Menüeintrag „Leeren“.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### Die aktuellen Ziele der Auswahlliste anzeigen \{#seeing-the-current-targets-in-the-selection-list}

Es gibt drei grundlegende Wege, um zu sehen, welche Ziele in den Ziellisten stehen.

-  **Fahren Sie mit der Maus über den Auswahl-Button**, um den Tooltip anzuzeigen. Er zeigt alle Ziele an.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **Rechtsklicken Sie auf den Auswahl-Button**, um das Kontextmenü zu öffnen, und klicken Sie dann auf den Menüeintrag „Aktuelle auflisten“. Eine Liste der Ziele wird im Output Log ausgegeben

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **Wählen Sie den Auswahl-Button aus**, öffnen Sie dann den Attribut-Editor und sehen Sie sich die Listen in den Kategorien „Control Rig“ und „Ziele“ an

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### Die Ziele der Auswahlliste auswählen \{#selecting-the-targets-in-the-selection-list}

Es gibt zwei grundlegende Wege, die Ziele auszuwählen

- **Im Live-Modus** wählt ein einfacher Klick auf den Button alle Ziele aus
- **Im Bearbeitungsmodus** rechtsklicken Sie auf den Button, um das Kontextmenü zu öffnen, und wählen dann den Menüeintrag „Aktuelle auswählen“.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### Andere Widgets auswählen \{#selecting-other-widgets}

Manchmal möchten Sie andere Widgets auswählen können – etwa wenn Sie Picker-Buttons für alle Fingergelenke angelegt haben und einen Button möchten, der eine Spalte oder Reihe von Fingerknöcheln auswählt.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

Stellen Sie zunächst sicher, dass Sie sich im Bearbeitungsmodus befinden, und wählen Sie dann alle Ziel-Widgets aus

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Rechtsklicken Sie anschließend auf den Auswahl-Button, um das Kontextmenü zu öffnen, und wählen Sie „Andere Widgets -> “

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Wenn Sie wieder im Live-Modus sind und auf den Auswahl-Button klicken, werden die Ziel-Widgets und alle Ziele dieser Widgets ausgewählt.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### Im Attribut-Editor \{#from-the-attribute-editor}

Um die Werte im Attribut-Editor zu sehen, müssen Sie genau ein Widget auswählen

##### Python-Skript \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

Sie können ein beliebiges Python-Skript in das Feld „Skriptquelle“ einfügen. Bei einem langen Skript vergrößert sich das Feld.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

Dieses Feld eignet sich nicht besonders gut zum Bearbeiten von Skripten, und allzu lange Skripte sollten Sie dort nicht ablegen. Wenn Ihr Skript lang ist und Sie einen richtigen Skript-Editor verwenden möchten, können Sie Ihr Skript einfach importieren und ausführen.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### Erscheinungsbild des Auswahl-Buttons \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **Beschriftung verwenden**
  - Blendet die Beschriftung ein oder aus
- **Farbe**
  - Legt die Farbe des Buttons fest
- **Schrift**
  - Legt Schriftfarbe und Schriftgröße fest

##### Text des Auswahl-Buttons \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **Beschriftung**

  - Legt den Text der Beschriftung fest

- **Textstile**

  - Bei längeren Texten können Sie Folgendes zur Formatierung verwenden

    - Justification

    - Word Wrap

    - Margin

    - Clip
