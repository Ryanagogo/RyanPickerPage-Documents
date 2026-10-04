import useBaseUrl from '@docusaurus/useBaseUrl';

# Barra degli strumenti \{#toolbar}

**In modalità di modifica**, la barra degli strumenti si trova nell'intestazione dell'editor

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

Questi strumenti ti permettono di eseguire varie azioni su uno o più widget del picker selezionati.

### Come funziona: \{#the-way-it-works}

- Seleziona i widget
- Fai clic su un pulsante della barra degli strumenti per aprire lo strumento
- Modifica il valore nel campo o fai clic su un pulsante
- La modifica del valore o il clic sul pulsante si applica a tutti i widget selezionati

### Immagine \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**Questo strumento agisce sui widget Etichetta e Immagine, che possono entrambi avere un'immagine.**

- Seleziona i widget Etichetta o Immagine, quindi fai clic sul menu a tendina per cercare l'immagine desiderata o aggiungere quella selezionata nel Content Browser. Tutti i widget selezionati useranno quell'immagine

### Colore \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**Questo strumento agisce su tutti i widget che hanno un colore di sfondo. Agisce anche sui widget che contengono testo.**

- Seleziona i widget, poi fai clic sul colore di sfondo o del font e scegli il colore desiderato nel selettore di colore. Tutti i widget selezionati assumeranno quei colori

### Etichetta \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**Questo strumento agisce sui widget che contengono testo.**

- Seleziona i widget, poi modifica il testo nel campo Etichetta o il valore della dimensione del font. Il testo di tutti i widget selezionati verrà aggiornato

### Dimensione \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**Questo strumento agisce su tutti i widget**

- Seleziona i widget, poi modifica i valori di larghezza o altezza. Larghezza o altezza di tutti i widget selezionati verranno modificate

### Sposta \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**Questo strumento agisce su tutti i widget selezionati**

- Seleziona i widget, poi modifica il valore di spostamento. Quando fai clic su uno dei pulsanti freccia, tutti i widget selezionati si sposteranno di quel valore.

### Allinea \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**Questo strumento agisce su tutti i widget selezionati**

- Seleziona i widget, poi fai clic su uno dei pulsanti di allineamento o distribuzione. I bordi di tutti i widget selezionati verranno allineati, oppure i widget verranno spostati per essere distribuiti uniformemente.
- Per le funzioni di allineamento, l'ultimo widget selezionato fa da ancoraggio, quindi tutti gli altri widget selezionati si allineeranno a esso.

### Specchia \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### Questo strumento agisce su tutti i widget selezionati \{#this-tool-affects-all-selected-widgets}

- Seleziona i widget, poi fai clic su uno dei pulsanti di ribaltamento o specchio. Tutti i widget selezionati verranno trasformati nelle rispettive posizioni specchiate

#### Per il ribaltamento (Mirror Flip) puoi impostare il comportamento. \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **Sé stesso:** ogni widget selezionato si ribalta lungo il proprio asse
- **Ultima selezione (incl.):** tutti i widget selezionati si ribaltano attorno all'ultimo widget selezionato. Anche l'ultimo selezionato si ribalta lungo il proprio asse
- **Ultima selezione (escl.):** tutti i widget selezionati si ribaltano attorno all'ultimo widget selezionato. L'ultimo widget selezionato non viene modificato e non si sposta.
- **Area visibile:** tutti i widget selezionati si ribaltano sull'asse dell'area di lavoro visibile

#### Perché Specchia posa funzioni, è necessario creare le Pose Map di specchio. \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **Pose Map di specchio:** ti permettono di definire il widget di ancoraggio dello specchio e di impostare i widget centrali e le coppie di widget sinistra/destra.
- **Più mappe in una pagina:** puoi avere più di una mappa, ad esempio una per il corpo e una per il viso.
