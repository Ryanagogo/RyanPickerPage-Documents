import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget de slider 2D \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Crear un widget de slider 2D nuevo \{#creating-a-new-2d-slider-widget}

Debes estar en el **modo de edición** para crear un **widget de slider 2D** nuevo

**Haz clic derecho en una zona vacía del lienzo del picker** para abrir el menú emergente y luego haz clic en la opción "Slider 2D"

### Propósito \{#purpose}

- El slider 2D te permite deslizar valores que están entre un mínimo y un máximo. Tiene 2 grados de libertad, en X y en Y, así que el slider puede afectar a dos ejes de transformación diferentes

- Los valores aplicados a la transformación son valores locales.

- Los valores se aplicarán a todos los destinos que se hayan agregado al widget, sin importar si son controles de Control Rig o actores del nivel.

### Apariencia \{#appearance}

Puedes establecer el color del widget de slider 2D

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Destinos \{#targets}

##### Agregar destinos \{#adding-targets}

Igual que con los destinos de un botón de selección, puedes seleccionar cualquier cantidad de controles de Control Rig y actores del nivel, hacer clic derecho en el widget de slider 2D para abrir el menú emergente y elegir la opción "Establecer con selección".

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Establecer los valores del slider para las direcciones X y Y \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Valor inicial**: son los valores de inicio del slider para las direcciones X y Y. Su posición en el slider cambia visualmente al modificar los valores mínimo y máximo.
- **Valor mínimo**: los valores más pequeños que alcanzará el slider en las direcciones X y Y
- **Valor máximo**: los valores más grandes que alcanzará el slider en las direcciones X y Y

##### Establecer qué ejes de transformación usarán ambos canales activos \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- Para elegir un eje, solo haz clic en uno de los menús desplegables "Activo Canal" y selecciona uno de los nueve elementos de transformación.
- "Activo Canal X" y "Activo Canal Y" deben usar ejes de transformación diferentes. No pueden usar los dos el mismo eje
