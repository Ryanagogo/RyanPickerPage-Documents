import useBaseUrl from '@docusaurus/useBaseUrl';

# Pulsante di selezione \{#selection-button}

### Creare un nuovo pulsante di selezione \{#creating-a-new-selection-button}

Devi essere in **modalità di modifica** per creare un nuovo **pulsante di selezione**

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**Fai clic destro su un punto vuoto dell'area di lavoro del picker** per aprire il menu contestuale, quindi fai clic sulla voce "Pulsante di selezione"

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### Target del pulsante di selezione \{#selection-button-targets}

##### Impostare i target nell'elenco di selezione \{#setting-targets-in-the-selection-list}

Esistono due modi di base per impostare e aggiungere target all'elenco di selezione

- **Prima di creare il pulsante di selezione**: seleziona i controlli o gli attori che vuoi far selezionare al pulsante, poi crea un nuovo pulsante di selezione
- **Dopo aver creato il pulsante di selezione**: seleziona i controlli o gli attori, poi fai clic destro sul pulsante per aprire il menu contestuale e scegli una delle azioni sui target

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **"Imposta con selezionati"** sostituisce tutti i target presenti nell'elenco con quelli attualmente selezionati
- **"Aggiungi selezionati"** aggiunge i target attualmente selezionati all'elenco dei target

##### Rimuovere target specifici dall'elenco di selezione \{#removing-specific-targets-from-the-selection-list}

- Per rimuovere target specifici, seleziona i controlli o gli attori da rimuovere, poi fai clic destro sul pulsante di selezione per aprire il menu contestuale e fai clic sulla voce "Rimuovi selezionati".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### Svuotare l'elenco di selezione \{#clearing-the-selection-list}

- Per rimuovere tutti i target dall'elenco di selezione, fai clic destro sul pulsante di selezione per aprire il menu contestuale, quindi fai clic sulla voce "Cancella".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### Vedere i target attuali dell'elenco di selezione \{#seeing-the-current-targets-in-the-selection-list}

Esistono tre modi di base per vedere quali target sono presenti negli elenchi.

-  **Passa il mouse sul pulsante di selezione** per visualizzare il tooltip, che mostra tutti i target.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **Fai clic destro sul pulsante di selezione** per aprire il menu contestuale, quindi fai clic sulla voce "Elenca attuale". L'elenco dei target verrà stampato nell'Output Log

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **Seleziona il pulsante di selezione**, poi apri l'Editor degli attributi e guarda gli elenchi nelle categorie Control Rig e Target

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### Selezionare i target dell'elenco di selezione \{#selecting-the-targets-in-the-selection-list}

Esistono due modi di base per selezionare i target

- **In modalità Live**, basta fare clic sul pulsante per selezionare tutti i target
- **In modalità di modifica**, fai clic destro sul pulsante per aprire il menu contestuale, quindi scegli la voce "Seleziona attuale".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### Selezionare altri widget \{#selecting-other-widgets}

In alcuni casi è utile poter selezionare altri widget, ad esempio se hai creato pulsanti del picker per tutte le articolazioni delle dita e vuoi un pulsante che selezioni una colonna o una fila di nocche.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

Per prima cosa, assicurati di essere in modalità di modifica, poi seleziona tutti i widget target

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Poi fai clic destro sul pulsante di selezione per aprire il menu contestuale e scegli "Altri widget -> "

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Una volta tornato in modalità Live, facendo clic sul pulsante di selezione verranno selezionati i widget target e tutti i target di quei widget.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### Dall'Editor degli attributi \{#from-the-attribute-editor}

Per vedere i valori nell'Editor degli attributi, devi selezionare un solo widget

##### Script Python \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

Puoi incollare qualsiasi script Python nel campo Sorgente Script. Se lo script è lungo, il campo si espande.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

Questo campo non è molto adatto alla modifica degli script, ed è meglio non inserirvi script troppo lunghi. Se il tuo script è lungo e vuoi usare un vero editor di script, puoi semplicemente importare lo script ed eseguirlo.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### Aspetto del pulsante di selezione \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **Usa Etichetta**
  - Mostra o nasconde l'etichetta
- **Colore**
  - Imposta il colore del pulsante
- **Font**
  - Imposta il colore e la dimensione del font

##### Testo del pulsante di selezione \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **Etichetta**

  - Imposta il testo dell'etichetta

- **Stili di testo**

  - Per testi più lunghi, puoi usare le seguenti opzioni per formattare il testo

    - Justification

    - Word Wrap

    - Margin

    - Clip
