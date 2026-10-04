# Conceptos básicos de los widgets \{#widget-basics}

### Crear widgets \{#create-widgets}

- Debes estar en el modo de edición para crear widgets nuevos
- Haz clic derecho en una zona vacía del lienzo para abrir el menú emergente, que contiene las opciones para crear los distintos tipos de widgets del picker
- Cuando creas un widget nuevo, se coloca donde estaba el puntero del ratón al hacer clic derecho.
- Al crear widgets se añade una entrada a la pila de deshacer, así que puedes deshacer y rehacer la creación

### Eliminar widgets \{#delete-widgets}

- Debes estar en el modo de edición para eliminar widgets
- Puedes eliminar todos los widgets seleccionados pulsando la tecla "Supr"
- Puedes eliminar un único widget haciendo clic derecho sobre él para abrir su menú emergente. Al final del menú encontrarás la opción para eliminar ese widget.
- Al eliminar widgets se añade una entrada a la pila de deshacer, así que puedes deshacer y rehacer las eliminaciones.

### Seleccionar widgets \{#select-widgets}

- Puedes seleccionar widgets tanto en el modo en vivo como en el modo de edición
- Puedes seleccionar widgets haciendo clic sobre ellos o dibujando un recuadro a su alrededor
- En el modo en vivo, algunos widgets no se pueden seleccionar:
  - Widgets de etiqueta
  - Widgets de imagen
- En el modo de edición, todos los widgets se pueden seleccionar
  - En el Outliner puedes bloquear widgets para que no se puedan seleccionar. Es útil cuando tienes varios widgets apilados unos sobre otros.
- Se recuerda el orden en que se seleccionan los widgets. Algunas funciones del modo de edición usan este orden de selección

### Transformar widgets \{#transform-widgets}

- Debes estar en el modo de edición para transformar widgets
- **Mover**
  - Con uno o varios widgets seleccionados, sitúa el ratón sobre uno de ellos para que el cursor cambie al cursor de mover. Después puedes hacer clic y arrastrar, y todos los widgets seleccionados se moverán con el ratón.
- **Rotar**
  - Con el ratón sobre el widget y el cursor de mover visible, mantén pulsada la tecla Alt para cambiar al cursor de rotar. Después puedes hacer clic y arrastrar, y todos los widgets seleccionados girarán de forma continua alrededor del último widget seleccionado.
  - Si mantienes pulsadas Alt y Mayús a la vez, la rotación se hará en pasos de 15 grados
- Al transformar widgets se añade una entrada a la pila de deshacer, así que puedes deshacer y rehacer las transformaciones.

### Redimensionar widgets \{#resize-widgets}

- Debes estar en el modo de edición para redimensionar widgets
- Al pasar el puntero del ratón por uno de los bordes o esquinas de un widget, el cursor cambia al de redimensionar borde o esquina. Después puedes hacer clic y arrastrar para cambiar el tamaño del widget.
- El redimensionado solo funciona con un widget
- Al redimensionar widgets se añade una entrada a la pila de deshacer, así que puedes deshacer y rehacer el redimensionado.

### Cortar, copiar y pegar \{#cut-copy-and-paste}

- Debes estar en el modo de edición para cortar, copiar y pegar widgets
- Puedes usar los atajos habituales Ctrl + X, Ctrl + C y Ctrl + V para cortar, copiar y pegar los widgets seleccionados
- Con un único widget, puedes hacer clic derecho sobre él para abrir el menú emergente, donde encontrarás las opciones Cortar y Copiar
- Con Ctrl + V los widgets se pegan en la posición del ratón
- Si haces clic derecho en una zona vacía del lienzo, el menú emergente ofrece dos opciones de pegado
  - **Pegar**
    - Pega los widgets en la posición del ratón
  - **Pegar en su lugar**
    - Pega los widgets en el mismo lugar donde se copiaron o cortaron

### Menú emergente de los widgets \{#widget-popup-menu}

- Debes estar en el modo de edición para ver los menús emergentes de los widgets
- Al hacer clic derecho en un widget, se abre un menú emergente
  - Las primeras opciones muestran el nombre y el tipo del widget, junto con las opciones de cortar y copiar
  - La última opción sirve para eliminar el widget
  - El resto de opciones dependen del tipo de widget sobre el que hiciste clic

### Editor de atributos \{#attribute-editor}

- Debes estar en el modo de edición para ver el editor de atributos
- El editor de atributos solo muestra atributos cuando hay un único widget seleccionado. Si hay varios seleccionados, no se muestra nada. (Este comportamiento cambiará en una versión futura)
- Las primeras opciones indican el nombre y el tipo del widget, además de permitir bloquearlo para que no se pueda seleccionar
  - El resto de opciones dependen del tipo de widget seleccionado

### Outliner \{#outliner}

- Debes estar en el modo de edición para ver el Outliner
- El Outliner muestra todos los widgets de la Picker Page agrupados por capa de visualización, por tipo de widget o por grupo (esto último es específico de los grupos de widgets de interruptor)
- Si un widget está seleccionado en el lienzo, su elemento en el Outliner también estará seleccionado, y viceversa.
- Si haces doble clic en un elemento del Outliner, puedes cambiar el nombre del widget
- En la vista por capa de visualización hay casillas para bloquear o desbloquear widgets. Los widgets bloqueados no se pueden seleccionar en el modo de edición. Es útil cuando tienes varios widgets apilados unos sobre otros.
- Si seleccionas un widget en el Outliner, puedes usar el atajo "F" para centrar la vista en el widget. Resulta útil si te cuesta encontrar un widget concreto
