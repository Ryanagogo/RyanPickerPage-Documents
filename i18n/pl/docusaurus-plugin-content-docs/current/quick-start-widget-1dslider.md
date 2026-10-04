import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget slidera 1D \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Tworzenie nowego widgetu slidera 1D \{#creating-a-new-1d-slider-widget}

Aby utworzyć nowy **widget slidera 1D**, musisz być w **trybie edycji**

**Kliknij prawym przyciskiem puste miejsce na płótnie pickera**, aby otworzyć menu kontekstowe, a następnie kliknij pozycję „Slider 1D”

### Przeznaczenie \{#purpose}

- Slider 1D pozwala przesuwać wartość między wartością minimalną a maksymalną. Ma tylko 1 stopień swobody, więc slider wpływa tylko na jedną oś transformacji

- Wartość stosowana do transformacji jest wartością lokalną.

- Ta wartość jest stosowana do wszystkich celów dodanych do widgetu, niezależnie od tego, czy są to kontrolki Control Rig, czy aktorzy poziomu.

### Wygląd \{#appearance}

Możesz ustawić kolor widgetu slidera 1D

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Cele \{#targets}

##### Dodawanie celów \{#adding-targets}

Podobnie jak w przypadku celów przycisku wyboru, możesz zaznaczyć dowolną liczbę kontrolek Control Rig i aktorów poziomu, a następnie kliknąć prawym przyciskiem widget slidera 1D, aby otworzyć menu kontekstowe, i wybrać pozycję „Ustaw z zaznaczonymi”.

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Ustawianie wartości slidera \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Wartość Początkowa**: wartość startowa slidera. Jej położenie na sliderze zmienia się wizualnie wraz ze zmianą wartości minimalnej i maksymalnej.
- **Wartość Minimalna**: najmniejsza wartość, jaką osiągnie slider
- **Wartość Maksymalna**: największa wartość, jaką osiągnie slider

##### Ustawianie kierunku slidera \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **Poziomo**: slider porusza się na boki
- **Pionowo**: slider porusza się w górę i w dół

##### Ustawianie osi transformacji, na którą ma wpływać \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

Aby wybrać oś, kliknij menu rozwijane „Aktywny Channel” i wybierz jedną z dziewięciu pozycji transformacji.
