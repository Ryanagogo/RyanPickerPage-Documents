# Nozioni di base sui widget \{#widget-basics}

### Creare widget \{#create-widgets}

- Devi essere in modalità di modifica per creare nuovi widget
- Fai clic destro su un punto vuoto dell'area di lavoro per aprire il menu contestuale, che contiene le voci per creare i vari tipi di widget del picker
- Un nuovo widget viene posizionato nel punto in cui si trovava il puntatore del mouse al momento del clic destro.
- Quando crei dei widget, viene aggiunta una voce alla cronologia degli annullamenti, così puoi annullare e ripetere la creazione

### Eliminare widget \{#delete-widgets}

- Devi essere in modalità di modifica per eliminare widget
- Puoi eliminare tutti i widget selezionati premendo il tasto "Canc"
- Puoi eliminare un singolo widget facendo clic destro su di esso per aprire il suo menu contestuale. In fondo al menu trovi la voce per eliminare quel widget.
- Quando elimini dei widget, viene aggiunta una voce alla cronologia degli annullamenti, così puoi annullare e ripetere le eliminazioni.

### Selezionare widget \{#select-widgets}

- Puoi selezionare i widget sia in modalità Live sia in modalità di modifica
- Puoi selezionare i widget facendo clic su di essi o tracciando un riquadro intorno
- In modalità Live alcuni widget non sono selezionabili:
  - Widget etichetta
  - Widget immagine
- In modalità di modifica tutti i widget sono selezionabili
  - Nell'Outliner puoi bloccare i widget in modo che non siano selezionabili. È utile quando hai più widget sovrapposti.
- L'ordine in cui vengono selezionati i widget viene memorizzato. Alcune funzioni della modalità di modifica usano questo ordine di selezione

### Trasformare widget \{#transform-widgets}

- Devi essere in modalità di modifica per trasformare i widget
- **Spostare**
  - Con uno o più widget selezionati, posiziona il mouse su uno di essi in modo che il cursore diventi quello di spostamento. Poi puoi fare clic e trascinare: tutti i widget selezionati si muovono con il mouse.
- **Ruotare**
  - Quando il mouse è sul widget e il cursore è quello di spostamento, tenendo premuto Alt il cursore diventa quello di rotazione. Poi puoi fare clic e trascinare: tutti i widget selezionati ruotano in modo continuo attorno all'ultimo widget selezionato.
  - Se tieni premuti sia Alt sia Maiusc, la rotazione avviene a scatti di 15 gradi
- Quando trasformi dei widget, viene aggiunta una voce alla cronologia degli annullamenti, così puoi annullare e ripetere le trasformazioni.

### Ridimensionare widget \{#resize-widgets}

- Devi essere in modalità di modifica per ridimensionare i widget
- Spostando il puntatore su uno dei bordi o degli angoli di un widget, il cursore diventa quello di ridimensionamento del bordo o dell'angolo. Poi puoi fare clic e trascinare per ridimensionare il widget.
- Il ridimensionamento funziona su un solo widget
- Quando ridimensioni dei widget, viene aggiunta una voce alla cronologia degli annullamenti, così puoi annullare e ripetere il ridimensionamento.

### Taglia, copia e incolla \{#cut-copy-and-paste}

- Devi essere in modalità di modifica per tagliare, copiare e incollare i widget
- Puoi usare le classiche scorciatoie Ctrl + X, Ctrl + C e Ctrl + V per tagliare, copiare e incollare i widget selezionati
- Per un singolo widget, puoi fare clic destro su di esso per aprire il menu contestuale, dove trovi le voci Taglia e Copia
- Ctrl + V incolla i widget nella posizione del mouse
- Facendo clic destro su un punto vuoto dell'area di lavoro, il menu contestuale offre due opzioni di incolla
  - **Incolla**
    - Incolla i widget nella posizione del mouse
  - **Incolla sul posto**
    - Incolla i widget nello stesso punto in cui sono stati copiati o tagliati

### Menu contestuale dei widget \{#widget-popup-menu}

- Devi essere in modalità di modifica per vedere i menu contestuali dei widget
- Facendo clic destro su un widget si apre un menu contestuale
  - Le prime voci mostrano il nome e il tipo del widget, insieme alle opzioni taglia e copia
  - L'ultima voce serve a eliminare il widget
  - Le altre voci dipendono dal tipo di widget su cui hai fatto clic

### Editor degli attributi \{#attribute-editor}

- Devi essere in modalità di modifica per vedere l'Editor degli attributi
- L'Editor degli attributi mostra gli attributi solo quando è selezionato un solo widget. Se ne sono selezionati più di uno, non viene mostrato nulla. (Questo comportamento cambierà in una versione futura)
- Le prime voci indicano il nome e il tipo del widget e permettono di bloccarlo in modo che non possa essere selezionato
  - Le altre voci dipendono dal tipo di widget selezionato

### Outliner \{#outliner}

- Devi essere in modalità di modifica per vedere l'Outliner
- L'Outliner mostra tutti i widget della Picker Page, raggruppati per livello di visualizzazione, per tipo di widget o per gruppo (quest'ultimo riguarda i gruppi di widget interruttore)
- Se un widget è selezionato nell'area di lavoro, anche la sua voce nell'Outliner è selezionata, e viceversa.
- Facendo doppio clic su una voce dell'Outliner puoi rinominare il widget
- Nella vista per livello di visualizzazione ci sono caselle di controllo per bloccare o sbloccare i widget. I widget bloccati non possono essere selezionati in modalità di modifica. È utile quando hai più widget sovrapposti.
- Se selezioni un widget nell'Outliner, puoi usare la scorciatoia "F" per centrare la vista sul widget. È utile se fai fatica a trovare un widget specifico
