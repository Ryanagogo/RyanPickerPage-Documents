import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget de slider 1D \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Crear un widget de slider 1D nuevo \{#creating-a-new-1d-slider-widget}

Debes estar en el **modo de edición** para crear un **widget de slider 1D** nuevo

**Haz clic derecho en una zona vacía del lienzo del picker** para abrir el menú emergente y, a continuación, haz clic en la opción "Slider 1D"

### Finalidad \{#purpose}

- El slider 1D te permite deslizar un valor comprendido entre un mínimo y un máximo. Solo tiene 1 grado de libertad, así que el slider afectará únicamente a un eje de transformación

- El valor aplicado a la transformación es un valor local.

- Este valor se aplicará a todos los destinos que se hayan añadido al widget, tanto si son controles de Control Rig como actores del nivel.

### Apariencia \{#appearance}

Puedes establecer el color del widget de slider 1D

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Destinos \{#targets}

##### Añadir destinos \{#adding-targets}

Al igual que con los destinos de un botón de selección, puedes seleccionar cualquier número de controles de Control Rig y actores del nivel, hacer clic derecho en el widget de slider 1D para abrir el menú emergente y elegir la opción "Establecer con selección".

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Establecer los valores del slider \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Valor inicial**: es el valor de partida del slider. Su posición en el slider cambia visualmente al modificar los valores mínimo y máximo.
- **Valor mínimo**: el valor más pequeño que alcanzará el slider
- **Valor máximo**: el valor más grande que alcanzará el slider

##### Establecer la dirección del slider \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **Horizontal**: el slider se mueve de lado a lado
- **Vertical**: el slider se mueve hacia arriba y hacia abajo

##### Establecer a qué eje de transformación afecta \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

Para elegir el eje, haz clic en el menú desplegable "Activo Canal" y selecciona uno de los nueve elementos de transformación.
