import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget slidera 2D \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Tworzenie nowego widgetu slidera 2D \{#creating-a-new-2d-slider-widget}

Aby utworzyć nowy **widget slidera 2D**, musisz być w **trybie edycji**

**Kliknij prawym przyciskiem puste miejsce na płótnie pickera**, aby otworzyć menu kontekstowe, a następnie kliknij pozycję „Slider 2D”

### Przeznaczenie \{#purpose}

- Slider 2D pozwala przesuwać wartości między wartością minimalną a maksymalną. Ma 2 stopnie swobody, na osiach X i Y, więc slider może wpływać na dwie różne osie transformacji

- Wartości stosowane do transformacji są wartościami lokalnymi.

- Wartości są stosowane do wszystkich celów dodanych do widgetu, niezależnie od tego, czy są to kontrolki Control Rig, czy aktorzy poziomu.

### Wygląd \{#appearance}

Możesz ustawić kolor widgetu slidera 2D

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Cele \{#targets}

##### Dodawanie celów \{#adding-targets}

Podobnie jak w przypadku celów przycisku wyboru, możesz zaznaczyć dowolną liczbę kontrolek Control Rig i aktorów poziomu, a następnie kliknąć prawym przyciskiem widget slidera 2D, aby otworzyć menu kontekstowe, i wybrać pozycję „Ustaw z zaznaczonymi”.

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Ustawianie wartości slidera dla kierunków X i Y \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Wartość Początkowa**: wartości startowe slidera dla kierunków X i Y. Ich położenie na sliderze zmienia się wizualnie wraz ze zmianą wartości minimalnej i maksymalnej.
- **Wartość Minimalna**: najmniejsze wartości, jakie slider osiągnie w kierunkach X i Y
- **Wartość Maksymalna**: największe wartości, jakie slider osiągnie w kierunkach X i Y

##### Ustawianie osi transformacji używanych przez oba aktywne kanały \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- Aby wybrać oś, kliknij jedno z menu rozwijanych „Aktywny Channel” i wybierz jedną z dziewięciu pozycji transformacji.
- „Aktywny Channel X” i „Aktywny Channel Y” muszą używać różnych osi transformacji. Nie mogą obie używać tej samej osi
