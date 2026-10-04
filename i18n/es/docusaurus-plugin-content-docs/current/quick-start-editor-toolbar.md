import useBaseUrl from '@docusaurus/useBaseUrl';

# Barra de herramientas \{#toolbar}

**En el modo de edición**, encontrarás la barra de herramientas en la cabecera del editor

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

Estas herramientas te permiten realizar diversas acciones sobre uno o varios widgets de picker seleccionados.

### Cómo funciona: \{#the-way-it-works}

- Selecciona widgets
- Haz clic en un botón de la barra de herramientas para abrir la herramienta
- Cambia el valor del campo o haz clic en un botón
- El cambio de valor o el clic en el botón afecta a todos los widgets seleccionados

### Imagen \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta herramienta afecta a los widgets de etiqueta e imagen, ya que ambos pueden tener una imagen.**

- Selecciona widgets de etiqueta o de imagen y, a continuación, haz clic en el desplegable para buscar la imagen que quieras o añadir la imagen que tengas seleccionada en el Content Browser. Todos los widgets seleccionados usarán esa imagen

### Color \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta herramienta afecta a todos los widgets que tienen color de fondo. También afecta a los widgets que tienen texto.**

- Selecciona widgets, haz clic en el color de fondo o de fuente y elige el color que quieras en el selector de color. Todos los widgets seleccionados recibirán esos colores

### Etiqueta \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta herramienta afecta a los widgets que tienen texto.**

- Selecciona widgets y cambia el texto del campo Etiqueta o el valor del tamaño de fuente. Se actualizará el texto de todos los widgets seleccionados

### Tamaño \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta herramienta afecta a todos los widgets**

- Selecciona widgets y cambia los valores de ancho o alto. Se cambiará el ancho o el alto de todos los widgets seleccionados

### Desplazar \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta herramienta afecta a todos los widgets seleccionados**

- Selecciona widgets y cambia el valor de desplazamiento. Al hacer clic en uno de los botones de flecha, todos los widgets seleccionados se moverán ese valor.

### Alinear \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta herramienta afecta a todos los widgets seleccionados**

- Selecciona widgets y haz clic en uno de los botones de alinear o distribuir. Los bordes de todos los widgets seleccionados se alinearán o los widgets se moverán para quedar distribuidos uniformemente.
- En las funciones de alineación, el último widget seleccionado es el ancla, así que todos los demás widgets seleccionados se alinearán con él.

### Espejo \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### Esta herramienta afecta a todos los widgets seleccionados \{#this-tool-affects-all-selected-widgets}

- Selecciona widgets y haz clic en uno de los botones de voltear o reflejar. Todos los widgets seleccionados se transformarán a sus posiciones reflejadas

#### En el volteo (Mirror Flip), puedes definir el comportamiento del volteo. \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **Propio:** cada widget seleccionado se voltea sobre su propio eje
- **Última selección (incl.):** todos los widgets seleccionados se voltean alrededor del último widget seleccionado. El último seleccionado también se voltea sobre su propio eje
- **Última selección (excl.):** todos los widgets seleccionados se voltean alrededor del último widget seleccionado. El último widget seleccionado no se ve afectado y no se mueve.
- **Lienzo visible:** todos los widgets seleccionados se voltean sobre el eje del lienzo visible

#### Para que Reflejar pose funcione, hay que crear Pose Maps de reflejo. \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **Pose Maps de reflejo:** te permiten definir el widget ancla del reflejo y establecer los widgets centrales y las parejas de widgets izquierda/derecha.
- **Varios mapas en una página:** puedes tener más de un mapa; por ejemplo, uno para el cuerpo y otro para la cara.
