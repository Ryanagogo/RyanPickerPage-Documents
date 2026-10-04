import useBaseUrl from '@docusaurus/useBaseUrl';

# Umschalter-Widget \{#toggle-widget}

### Ein neues Umschalter-Widget erstellen \{#creating-a-new-toggle-widget}

Sie müssen sich im **Bearbeitungsmodus** befinden, um ein neues **Umschalter-Widget** zu erstellen

**Rechtsklicken Sie auf eine leere Stelle der Picker-Arbeitsfläche**, um das Kontextmenü zu öffnen, und klicken Sie dann auf den Menüeintrag „Umschalter“

### Umschalter-Zustände \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

Anfangs tragen die beiden Zustände die Beschriftungen „Zustand A“ und „Zustand B“ und stehen für die Werte 0 und 1.

Ein Klick auf das Umschalter-Widget wechselt zwischen diesen beiden Zuständen

Jeder Zustand kann eine eigene Beschriftung, Farbe, Liste einzublendender Widgets und ein eigenes Python-Skript haben.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

Sichtbarkeit von Widgets umschalten

Wenn Sie einige Widgets je nach Zustand aus- oder einblenden möchten, wechseln Sie zunächst in den Bearbeitungsmodus,

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

Wählen Sie dann die Widgets aus, die beim Wechsel zu Zustand A angezeigt werden sollen

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

Rechtsklicken Sie dann auf das Umschalter-Widget, um das Kontextmenü zu öffnen, und wählen Sie „Zustand A -> Mit Auswahl Widgets festlegen“. Dadurch werden die ausgewählten Widgets in die Zielliste von Zustand A übernommen

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Wählen Sie als Nächstes die Widgets aus, die in Zustand B angezeigt werden sollen

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Rechtsklicken Sie dann auf das Umschalter-Widget, um das Kontextmenü zu öffnen, und klicken Sie auf den Menüeintrag „Zustand B -> Mit Auswahl Widgets festlegen“. Dadurch werden die ausgewählten Widgets in die Zielliste von Zustand B übernommen.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Wenn Sie sehen möchten, wie der Umschalter funktioniert, wechseln Sie zurück in den Live-Modus.

- In Zustand A werden die Widgets von Zustand A angezeigt und die Widgets von Zustand B ausgeblendet.
- In Zustand B werden die Widgets von Zustand A ausgeblendet und die Widgets von Zustand B angezeigt.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Control-Rig-Zustände umschalten

Wenn Ihr Control Rig einen Bool-Animationskanal hat, können Sie diesen Kanal mit dem Umschalter-Widget steuern. Das ist bei IK/FK-Setups üblich.

Sie sehen das, wenn Sie das Mannequin-Control-Rig in einem Shot haben. Wählen Sie einfach das Main-Control aus, das Sechseck unten am Charakter.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

Sehen Sie dann im Sequencer oder im Panel „Anim Details“ nach, um die Bools für das IK/FK-Umschalten zu sehen

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

Um eine Verbindung zum Umschalter-Widget herzustellen, stellen Sie sicher, dass Sie sich im Bearbeitungsmodus befinden

Wählen Sie das Main-Control aus, rechtsklicken Sie dann auf das Umschalter-Widget, um das Kontextmenü zu öffnen, und wählen Sie „Set Parent Control“

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

Öffnen Sie dann bei ausgewähltem Umschalter-Widget den Attribut-Editor, suchen Sie den Abschnitt „Anim-Channel“ und stellen Sie sicher, dass „Bool verwenden“ aktiviert ist.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

Klicken Sie dann in „Kanal“ und wählen Sie den Animationskanal aus, den Sie verwenden möchten

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

Bei Bedarf können Sie anschließend auch festlegen, welcher Zustand der „Wahr-Zustand“ sein soll

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

Wenn Sie zurück in den Live-Modus wechseln, können Sie auf das Umschalter-Widget klicken, um sowohl den Rig-Zustand als auch die Sichtbarkeitszustände der Widgets zu ändern (in diesem Beispiel die IK/FK-Rig-Zustände des linken Beins).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
