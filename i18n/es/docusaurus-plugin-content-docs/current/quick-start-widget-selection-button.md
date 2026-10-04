import useBaseUrl from '@docusaurus/useBaseUrl';

# Botón de selección \{#selection-button}

### Crear un botón de selección nuevo \{#creating-a-new-selection-button}

Debes estar en el **modo de edición** para crear un **botón de selección** nuevo

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**Haz clic derecho en una zona vacía del lienzo del picker** para abrir el menú emergente y, a continuación, haz clic en la opción "Botón de selección"

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### Destinos del botón de selección \{#selection-button-targets}

##### Establecer destinos en la lista de selección \{#setting-targets-in-the-selection-list}

Hay dos formas básicas de establecer y añadir destinos a la lista de selección

- **Antes de crear el botón de selección**: selecciona los controles o actores que quieres que seleccione el botón y, después, crea un botón de selección nuevo
- **Después de crear el botón de selección**: selecciona los controles o actores, haz clic derecho en el botón para abrir el menú emergente y elige una de las acciones de destino

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **"Establecer con selección"** sustituye todos los destinos de la lista por los que estén seleccionados en ese momento
- **"Añadir selección"** añade los destinos seleccionados en ese momento a la lista de destinos

##### Quitar destinos concretos de la lista de selección \{#removing-specific-targets-from-the-selection-list}

- Para quitar destinos concretos, selecciona los controles o actores que quieres quitar, haz clic derecho en el botón de selección para abrir el menú emergente y haz clic en la opción "Eliminar selección".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### Vaciar la lista de selección \{#clearing-the-selection-list}

- Para quitar todos los destinos de la lista de selección, haz clic derecho en el botón de selección para abrir el menú emergente y haz clic en la opción "Limpiar".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### Ver los destinos actuales de la lista de selección \{#seeing-the-current-targets-in-the-selection-list}

Hay tres formas básicas de ver qué destinos hay en las listas.

-  **Pasa el cursor por encima del botón de selección** para que aparezca la descripción emergente. Muestra todos los destinos.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **Haz clic derecho en el botón de selección** para abrir el menú emergente y haz clic en la opción "Listar actual". Se imprimirá una lista de los destinos en el Output Log

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **Selecciona el botón de selección**, abre el editor de atributos y consulta las listas de las categorías Control Rig y Destinos

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### Seleccionar los destinos de la lista de selección \{#selecting-the-targets-in-the-selection-list}

Hay dos formas básicas de seleccionar los destinos

- **En el modo en vivo**, basta con hacer clic en el botón para seleccionar todos los destinos
- **En el modo de edición**, haz clic derecho en el botón para abrir el menú emergente y elige la opción "Seleccionar actual".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### Seleccionar otros widgets \{#selecting-other-widgets}

Hay casos en los que conviene poder seleccionar otros widgets; por ejemplo, si has creado botones de picker para todas las articulaciones de los dedos y quieres un botón que seleccione una columna o una fila de nudillos.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

Primero, asegúrate de estar en el modo de edición y selecciona todos los widgets de destino

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Después, haz clic derecho en el botón de selección para abrir el menú emergente y elige "Otros widgets -> "

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Cuando vuelvas al modo en vivo, al hacer clic en el botón de selección se seleccionarán los widgets de destino y todos los destinos de esos widgets.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### Desde el editor de atributos \{#from-the-attribute-editor}

Para ver los valores en el editor de atributos, debes seleccionar un único widget

##### Script de Python \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

Puedes pegar cualquier script de Python en el campo Código de script. Si el script es largo, el campo se ampliará.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

Este campo no es muy cómodo para editar scripts, y no conviene poner scripts demasiado largos. Si tu script es largo y quieres usar un editor de scripts de verdad, puedes simplemente importar tu script y ejecutarlo.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### Apariencia del botón de selección \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **Usar etiqueta**
  - Muestra u oculta la etiqueta
- **Color**
  - Establece el color del botón
- **Fuente**
  - Establece el color y el tamaño de la fuente

##### Texto del botón de selección \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **Etiqueta**

  - Establece el texto de la etiqueta

- **Estilos de texto**

  - Para textos largos, puedes usar lo siguiente para dar formato al texto

    - Justification

    - Word Wrap

    - Margin

    - Clip
