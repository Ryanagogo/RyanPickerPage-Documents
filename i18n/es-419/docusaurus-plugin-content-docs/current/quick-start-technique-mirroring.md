import useBaseUrl from '@docusaurus/useBaseUrl';

# Reflejo \{#mirroring}

### Herramienta Reflejar widgets \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**Necesitas estar en el modo de edición para encontrar esta herramienta.**

Está diseñada para ayudarte a reflejar widgets en tu diseño, así que te sirve para armar diseños para bípedos u otros personajes en los que necesitas simetría izquierda/derecha.

## La herramienta se divide en dos partes \{#the-tool-is-divided-into-two-parts}

### Voltear la selección \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### Modos de volteo \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **Propio**
  - Cada widget seleccionado se voltea sobre su propio eje
- **Última selección (incl.)**
  - Todos los widgets seleccionados se voltean alrededor del último widget seleccionado, y este se voltea sobre su propio eje
- **Última selección (excl.)**
  - Es el modo predeterminado
  - Todos los widgets seleccionados se voltean alrededor del último widget seleccionado, pero este no se ve afectado y no se mueve
- **Lienzo visible**
  - Todos los widgets seleccionados se voltean respecto al área del lienzo visible en ese momento

##### Direcciones de volteo \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

El resultado específico del volteo depende del comportamiento seleccionado

- **Flip Horizontal**
  - Voltea los widgets seleccionados a lo largo del eje X.
- **Flip Vertical**
  - Voltea los widgets seleccionados a lo largo del eje Y

### Reflejar conjuntos de poses predefinidos \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### Reflejar los widgets seleccionados \{#mirror-selected-widgets}

- Todos los widgets seleccionados que tengan una definición en un Pose Map se reflejarán según su Pose Map
- Un widget solo puede estar en un Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### Reflejar pose de izquierda a derecha \{#mirror-pose-left-to-right}

- Esta operación funciona sobre el Pose Map que esté seleccionado en ese momento en el editor de Pose Maps
- Si se reflejan los widgets equivocados, deshaz la operación y cambia el Pose Map actual

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### Reflejar pose de derecha a izquierda \{#mirror-pose-right-to-left}

- Esta operación funciona sobre el Pose Map que esté seleccionado en ese momento en el editor de Pose Maps
- Si se reflejan los widgets equivocados, deshaz la operación y cambia el Pose Map actual

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Definir Pose Maps \{#define-pose-maps}

Haz clic en el botón "Map" para abrir el editor de Pose Maps

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### El editor de Pose Maps \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

En una misma Picker Page puedes definir más de un Pose Map. Por ejemplo, podrías tener un mapa para los widgets del cuerpo y otro para los de la cara

##### Crear un nuevo Pose Map \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Nombre del mapa \{#map-name}

Cuando creas un mapa nuevo, tiene un nombre predeterminado, pero puedes cambiarlo por el que quieras

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### Widget ancla \{#anchor-widget}

Todos los widgets del Pose Map se reflejarán y transformarán respecto al widget ancla

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### Widgets centrales \{#center-widgets}

Todos los widgets centrales se alinearán al centro respecto al widget ancla

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### Parejas de widgets \{#widget-pairs}

Los widgets de las columnas izquierda y derecha de las parejas se reflejarán entre sí respecto al widget ancla

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

Después de configurar el mapa, este es el resultado de reflejar la pose de derecha a izquierda

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### Restablecer un mapa \{#resetting-a-map}

Si quieres vaciar el mapa, solo haz clic en el botón Restablecer mapa

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Cambiar entre mapas \{#switching-between-maps}

Cuando tengas más de un mapa, puedes hacer clic en el menú desplegable y elegir qué mapa quieres editar

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### Nombres de los widgets \{#widget-names}

Los Pose Maps usan los nombres de los widgets, así que conviene ponerles nombres que tengan sentido en lugar de dejar los nombres predeterminados que reciben al crearse.

Para ver el nombre actual de un widget, selecciónalo y abre el Outliner (el "+" en la esquina superior izquierda del lienzo)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

Al principio es posible que veas un nombre predeterminado

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Haciendo doble clic en el elemento del Outliner podrás cambiar el nombre del widget

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Asignar un widget a un elemento del Pose Map \{#setting-a-widget-on-a-pose-map-item}

**Puedes hacerlo de dos formas diferentes**

Usa el menú desplegable y elige el elemento de la lista

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

Usa el botón "Set Selected" que está a la derecha del elemento del mapa. Al hacer clic, el nombre del widget seleccionado se pondrá en el campo

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

En las parejas de widgets, necesitas definir un elemento en la columna izquierda y otro en la derecha

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
