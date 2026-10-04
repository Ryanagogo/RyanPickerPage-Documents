import useBaseUrl from '@docusaurus/useBaseUrl';

# 1D-Slider-Widget \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Ein neues 1D-Slider-Widget erstellen \{#creating-a-new-1d-slider-widget}

Sie müssen sich im **Bearbeitungsmodus** befinden, um ein neues **1D-Slider-Widget** zu erstellen

**Rechtsklicken Sie auf eine leere Stelle der Picker-Arbeitsfläche**, um das Kontextmenü zu öffnen, und klicken Sie dann auf den Menüeintrag „1D-Slider“

### Zweck \{#purpose}

- Mit dem 1D-Slider schieben Sie einen Wert zwischen einem Minimal- und einem Maximalwert. Er hat nur 1 Freiheitsgrad, daher wirkt der Slider nur auf eine Transformationsachse

- Der auf die Transformation angewendete Wert ist ein lokaler Wert.

- Dieser Wert wird auf alle Ziele angewendet, die dem Widget hinzugefügt wurden – egal, ob es sich um Control-Rig-Controls oder Level-Actors handelt.

### Erscheinungsbild \{#appearance}

Sie können die Farbe des 1D-Slider-Widgets festlegen

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Ziele \{#targets}

##### Ziele hinzufügen \{#adding-targets}

Ähnlich wie bei den Zielen eines Auswahl-Buttons können Sie beliebig viele Control-Rig-Controls und Level-Actors auswählen, dann mit der rechten Maustaste auf das 1D-Slider-Widget klicken, um das Kontextmenü zu öffnen, und den Menüeintrag „Mit Auswahl festlegen“ wählen.

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Die Slider-Werte festlegen \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Anfangswert**: Der Startwert des Sliders. Seine Position auf dem Slider ändert sich sichtbar, wenn Minimal- und Maximalwert geändert werden.
- **Minimalwert**: Der kleinste Wert, den der Slider erreicht
- **Maximalwert**: Der größte Wert, den der Slider erreicht

##### Die Richtung des Sliders festlegen \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **Horizontal**: Der Slider bewegt sich seitwärts
- **Vertikal**: Der Slider bewegt sich nach oben und unten

##### Festlegen, auf welche Transformationsachse gewirkt wird \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

Um die Achse auszuwählen, klicken Sie einfach in das Dropdown-Menü „Aktiv Channel“ und wählen einen der neun Transformationseinträge.
