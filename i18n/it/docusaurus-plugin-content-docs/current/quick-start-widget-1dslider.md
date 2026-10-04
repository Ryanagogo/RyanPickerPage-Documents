import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget Slider 1D \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Creare un nuovo widget Slider 1D \{#creating-a-new-1d-slider-widget}

Devi essere in **modalità di modifica** per creare un nuovo **widget Slider 1D**

**Fai clic destro su un punto vuoto dell'area di lavoro del picker** per aprire il menu contestuale, quindi fai clic sulla voce "Slider 1D"

### Scopo \{#purpose}

- Lo slider 1D consente di far scorrere un valore compreso tra un minimo e un massimo. Ha un solo grado di libertà, quindi lo slider agisce su un solo asse di trasformazione

- Il valore applicato alla trasformazione è un valore locale.

- Questo valore viene applicato a tutti i target aggiunti al widget, che si tratti di controlli del Control Rig o di attori del livello.

### Aspetto \{#appearance}

Puoi impostare il colore del widget Slider 1D

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Target \{#targets}

##### Aggiungere target \{#adding-targets}

Come per i target di un pulsante di selezione, puoi selezionare un numero qualsiasi di controlli del Control Rig e attori del livello, quindi fare clic destro sul widget Slider 1D per aprire il menu contestuale e scegliere la voce "Imposta con selezionati".

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Impostare i valori dello slider \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Valore Iniziale**: il valore di partenza dello slider. La sua posizione sullo slider cambia visivamente quando si modificano i valori minimo e massimo.
- **Valore Minimo**: il valore più piccolo che lo slider può raggiungere
- **Valore Massimo**: il valore più grande che lo slider può raggiungere

##### Impostare la direzione dello slider \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **Orizzontale**: lo slider si muove lateralmente
- **Verticale**: lo slider si muove in alto e in basso

##### Impostare l'asse di trasformazione da modificare \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

Per scegliere l'asse, fai clic sul menu a tendina "Attivo Canale" e seleziona uno dei nove elementi di trasformazione.
