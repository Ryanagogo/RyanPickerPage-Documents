import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget Interruttore \{#toggle-widget}

### Creare un nuovo widget Interruttore \{#creating-a-new-toggle-widget}

Devi essere in **modalità di modifica** per creare un nuovo **widget Interruttore**

**Fai clic destro su un punto vuoto dell'area di lavoro del picker** per aprire il menu contestuale, quindi fai clic sulla voce "Interruttore"

### Stati dell'interruttore \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

Inizialmente i due stati hanno le etichette Stato A e Stato B e rappresentano i valori 0 e 1.

Facendo clic sul widget Interruttore si passa da uno stato all'altro

Ogni stato può avere la propria etichetta, il proprio colore, il proprio elenco di widget da mostrare e il proprio script Python.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

Alternare la visibilità dei widget

Se hai dei widget che vuoi nascondere o mostrare in base a uno stato, inizia entrando in modalità di modifica,

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

Poi seleziona i widget che vuoi mostrare quando si passa allo Stato A

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

Poi fai clic destro sul widget Interruttore per aprire il menu contestuale e scegli "Stato A -> Imposta con Widget selezionati". I widget selezionati verranno inseriti nell'elenco dei target dello Stato A

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Successivamente, seleziona i widget che vuoi mostrare nello Stato B

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Poi fai clic destro sul widget Interruttore per aprire il menu contestuale e fai clic sulla voce "Stato B -> Imposta con Widget selezionati". I widget selezionati verranno inseriti nell'elenco dei target dello Stato B.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Se vuoi vedere come funziona l'interruttore, torna in modalità Live.

- Nello Stato A, i widget dello Stato A sono visibili e quelli dello Stato B sono nascosti.
- Nello Stato B, i widget dello Stato A sono nascosti e quelli dello Stato B sono visibili.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Alternare gli stati del Control Rig

Se il tuo Control Rig ha un canale di animazione booleano, puoi usare il widget Interruttore per pilotarlo. È comune nei setup IK/FK.

Puoi vederlo se hai il Control Rig del Mannequin in un'inquadratura. Seleziona semplicemente il controllo Main, l'esagono alla base del personaggio.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

Poi guarda nel Sequencer o nel pannello Anim Details per vedere i booleani per la commutazione IK/FK

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

Per collegarlo al widget Interruttore, assicurati di essere in modalità di modifica

Seleziona il controllo Main, poi fai clic destro sul widget Interruttore per aprire il menu contestuale e scegli "Set Parent Control"

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

Poi, con il widget Interruttore selezionato, apri l'Editor degli attributi, cerca la sezione Canale di animazione e assicurati che "Usa booleano" sia attivo.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

Poi fai clic su "Canale" e seleziona il canale di animazione che vuoi usare

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

Se necessario, puoi anche scegliere quale stato usare come "Stato vero"

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

Quando torni in modalità Live, puoi fare clic sul widget Interruttore per cambiare sia lo stato del rig sia gli stati di visibilità dei widget (in questo esempio, gli stati IK/FK del rig della gamba sinistra).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
