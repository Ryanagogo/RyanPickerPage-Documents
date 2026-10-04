import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget Slider 2D \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Creare un nuovo widget Slider 2D \{#creating-a-new-2d-slider-widget}

Devi essere in **modalità di modifica** per creare un nuovo **widget Slider 2D**

**Fai clic destro su un punto vuoto dell'area di lavoro del picker** per aprire il menu contestuale, quindi fai clic sulla voce "Slider 2D"

### Scopo \{#purpose}

- Lo slider 2D consente di far scorrere valori compresi tra un minimo e un massimo. Ha 2 gradi di libertà, su X e Y, quindi lo slider può agire su due diversi assi di trasformazione

- I valori applicati alla trasformazione sono valori locali.

- I valori vengono applicati a tutti i target aggiunti al widget, che si tratti di controlli del Control Rig o di attori del livello.

### Aspetto \{#appearance}

Puoi impostare il colore del widget Slider 2D

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Target \{#targets}

##### Aggiungere target \{#adding-targets}

Come per i target di un pulsante di selezione, puoi selezionare un numero qualsiasi di controlli del Control Rig e attori del livello, quindi fare clic destro sul widget Slider 2D per aprire il menu contestuale e scegliere la voce "Imposta con selezionati".

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Impostare i valori dello slider per le direzioni X e Y \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Valore Iniziale**: i valori di partenza dello slider per le direzioni X e Y. La loro posizione sullo slider cambia visivamente quando si modificano i valori minimo e massimo.
- **Valore Minimo**: i valori più piccoli che lo slider può raggiungere nelle direzioni X e Y
- **Valore Massimo**: i valori più grandi che lo slider può raggiungere nelle direzioni X e Y

##### Impostare gli assi di trasformazione usati dai due canali attivi \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- Per scegliere un asse, fai clic su uno dei menu a tendina "Attivo Canale" e seleziona uno dei nove elementi di trasformazione.
- "Attivo Canale X" e "Attivo Canale Y" devono usare assi di trasformazione diversi. Non possono usare entrambi lo stesso asse
