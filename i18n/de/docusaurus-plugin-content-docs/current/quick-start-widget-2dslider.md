import useBaseUrl from '@docusaurus/useBaseUrl';

# 2D-Slider-Widget \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Ein neues 2D-Slider-Widget erstellen \{#creating-a-new-2d-slider-widget}

Sie müssen sich im **Bearbeitungsmodus** befinden, um ein neues **2D-Slider-Widget** zu erstellen

**Rechtsklicken Sie auf eine leere Stelle der Picker-Arbeitsfläche**, um das Kontextmenü zu öffnen, und klicken Sie dann auf den Menüeintrag „2D-Slider“

### Zweck \{#purpose}

- Mit dem 2D-Slider schieben Sie Werte zwischen einem Minimal- und einem Maximalwert. Er hat 2 Freiheitsgrade, auf X und Y, daher kann der Slider auf zwei verschiedene Transformationsachsen wirken

- Die auf die Transformation angewendeten Werte sind lokale Werte.

- Die Werte werden auf alle Ziele angewendet, die dem Widget hinzugefügt wurden – egal, ob es sich um Control-Rig-Controls oder Level-Actors handelt.

### Erscheinungsbild \{#appearance}

Sie können die Farbe des 2D-Slider-Widgets festlegen

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Ziele \{#targets}

##### Ziele hinzufügen \{#adding-targets}

Ähnlich wie bei den Zielen eines Auswahl-Buttons können Sie beliebig viele Control-Rig-Controls und Level-Actors auswählen, dann mit der rechten Maustaste auf das 2D-Slider-Widget klicken, um das Kontextmenü zu öffnen, und den Menüeintrag „Mit Auswahl festlegen“ wählen.

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Die Slider-Werte für die X- und Y-Richtung festlegen \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Anfangswert**: Die Startwerte des Sliders für die X- und Y-Richtung. Ihre Position auf dem Slider ändert sich sichtbar, wenn Minimal- und Maximalwert geändert werden.
- **Minimalwert**: Die kleinsten Werte, die der Slider in X- und Y-Richtung erreicht
- **Maximalwert**: Die größten Werte, die der Slider in X- und Y-Richtung erreicht

##### Festlegen, welche Transformationsachsen die beiden aktiven Kanäle verwenden \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- Um eine Achse auszuwählen, klicken Sie einfach in eines der Dropdown-Menüs „Aktiv Channel“ und wählen einen der neun Transformationseinträge.
- „Aktiv Channel X“ und „Aktiv Channel Y“ müssen unterschiedliche Transformationsachsen verwenden. Sie dürfen nicht beide dieselbe Achse verwenden
