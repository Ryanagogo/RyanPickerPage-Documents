import useBaseUrl from '@docusaurus/useBaseUrl';

# Specchiatura \{#mirroring}

### Strumento Specchia widget \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**Questo strumento è disponibile solo in modalità di modifica.**

È pensato per aiutarti a specchiare i widget nel layout, così da creare layout per bipedi o altri personaggi che richiedono simmetria sinistra/destra.

## Lo strumento è diviso in due parti \{#the-tool-is-divided-into-two-parts}

### Ribaltare la selezione \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### Modalità di ribaltamento \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **Sé stesso**
  - Ogni widget selezionato si ribalta lungo il proprio asse
- **Ultima selezione (incl.)**
  - Tutti i widget selezionati si ribaltano attorno all'ultimo widget selezionato, che a sua volta si ribalta lungo il proprio asse
- **Ultima selezione (escl.)**
  - È la modalità predefinita
  - Tutti i widget selezionati si ribaltano attorno all'ultimo widget selezionato, ma quest'ultimo non viene modificato e non si sposta
- **Area visibile**
  - Tutti i widget selezionati si ribaltano rispetto all'area di lavoro attualmente visibile

##### Direzioni di ribaltamento \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

Il risultato preciso del ribaltamento dipende dal comportamento selezionato

- **Flip Horizontal**
  - Ribalta i widget selezionati lungo l'asse X.
- **Flip Vertical**
  - Ribalta i widget selezionati lungo l'asse Y

### Specchiare set di pose predefiniti \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### Specchiare i widget selezionati \{#mirror-selected-widgets}

- Tutti i widget selezionati definiti in una Pose Map vengono specchiati secondo la propria Pose Map
- Un widget può trovarsi in una sola Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### Specchia posa da sinistra a destra \{#mirror-pose-left-to-right}

- Questa operazione agisce sulla Pose Map attualmente selezionata nell'editor delle Pose Map
- Se vengono specchiati i widget sbagliati, annulla e cambia la Pose Map corrente

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### Specchia posa da destra a sinistra \{#mirror-pose-right-to-left}

- Questa operazione agisce sulla Pose Map attualmente selezionata nell'editor delle Pose Map
- Se vengono specchiati i widget sbagliati, annulla e cambia la Pose Map corrente

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Definire le Pose Map \{#define-pose-maps}

Fai clic sul pulsante "Map" per aprire l'editor delle Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### L'editor delle Pose Map \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

In una singola Picker Page puoi definire più di una Pose Map. Ad esempio, una mappa per i widget del corpo e una per quelli del viso

##### Creare una nuova Pose Map \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Nome della mappa \{#map-name}

Quando crei una nuova mappa, questa ha un nome predefinito, che puoi cambiare come preferisci

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### Widget di ancoraggio \{#anchor-widget}

Tutti i widget della Pose Map vengono specchiati e trasformati rispetto al widget di ancoraggio

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### Widget centrali \{#center-widgets}

Tutti i widget centrali vengono allineati al centro rispetto al widget di ancoraggio

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### Coppie di widget \{#widget-pairs}

I widget delle colonne sinistra e destra delle coppie si specchiano a vicenda rispetto al widget di ancoraggio

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

Dopo aver impostato la mappa, questo è il risultato della specchiatura della posa da destra a sinistra

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### Ripristinare una mappa \{#resetting-a-map}

Se vuoi svuotare la mappa, fai semplicemente clic sul pulsante Ripristina Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Passare da una mappa all'altra \{#switching-between-maps}

Quando hai più di una mappa, puoi fare clic sul menu a tendina e scegliere quale mappa modificare

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### Nomi dei widget \{#widget-names}

Le Pose Map usano i nomi dei widget, quindi conviene dare ai widget nomi sensati invece di lasciare i nomi predefiniti assegnati alla creazione.

Per vedere il nome attuale di un widget, selezionalo e apri l'Outliner (il "+" nell'angolo in alto a sinistra dell'area di lavoro)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

All'inizio potresti vedere un nome predefinito

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Facendo doppio clic sull'elemento dell'Outliner puoi cambiare il nome del widget

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Assegnare un widget a un elemento della Pose Map \{#setting-a-widget-on-a-pose-map-item}

**Puoi farlo in due modi diversi**

Usa il menu a tendina e scegli l'elemento dall'elenco

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

Usa il pulsante "Set Selected" a destra dell'elemento della mappa. Facendo clic, il nome del widget selezionato verrà inserito nel campo

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

Per le coppie di widget, devi impostare un elemento nella colonna sinistra e uno in quella destra

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
