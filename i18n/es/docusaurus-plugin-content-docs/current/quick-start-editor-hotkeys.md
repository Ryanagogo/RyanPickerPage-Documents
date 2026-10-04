# Atajos de teclado \{#hotkeys}

Todos los atajos de teclado y gestos de ratón a los que responde el editor del picker.

### Reglas de foco y de modo \{#focus-and-mode-rules}

- **Los atajos de teclado solo funcionan mientras el lienzo tiene el foco.** El lienzo toma el foco en cuanto haces clic en él. Si el foco lo tiene un campo de una barra lateral o la lista del Outliner, las pulsaciones de teclas van allí.
- Solo el atajo **F** funciona en el modo en vivo. Todos los demás atajos de teclado son exclusivos del modo de edición.
- El desplazamiento arrastrando con el botón derecho y el zoom con la rueda del ratón funcionan tanto en el modo de edición como en el modo en vivo.

### Teclado \{#keyboard}

| Tecla | Acción | Modo |
|---|---|---|
| **Supr** | Eliminar los widgets seleccionados | Solo edición |
| **F** | Centrar la vista del lienzo en la selección actual (el zoom no cambia) | Edición + en vivo |
| **Alt + clic en un botón** | Centrar el viewport en los objetos que se seleccionan al hacer clic en un botón |Solo en vivo|
| **Alt + seleccionar botones arrastrando** | Centrar el viewport en los objetos que se seleccionan al arrastrar un recuadro sobre botones |Solo en vivo|
| **Teclas de flecha** | Desplazar la selección (2 px de forma predeterminada) | Solo edición |
| **Mayús + teclas de flecha** | Desplazar la selección con un paso mayor (10 px de forma predeterminada) | Solo edición |
| **Ctrl + X** | Cortar los widgets seleccionados | Solo edición |
| **Ctrl + C** | Copiar los widgets seleccionados | Solo edición |
| **Ctrl + V** | Pegar en el cursor del ratón | Solo edición |
| **Ctrl + Z** | Deshacer | Solo edición |
| **Ctrl + Mayús + Z** o **Ctrl + Y** | Rehacer | Solo edición |

Las dos distancias de desplazamiento con el teclado se definen en el panel Class Defaults de la página. Son independientes de la herramienta **Desplazar** de la barra de herramientas, que tiene su propio campo de distancia.

Copiar / cortar / pegar funciona entre pestañas de página abiertas.

**Sin asignar:** no existen Ctrl+A (seleccionar todo), Ctrl+S (guardar), Ctrl+D (duplicar) ni Esc (deseleccionar). Duplicar, Alinear, Distribuir y Espejo solo están en el menú contextual o en la barra de herramientas.

### Ratón: seleccionar widgets \{#mouse---selecting-widgets}

Solo Ctrl y Mayús cambian el funcionamiento de la selección.

| Gesto | Acción |
|---|---|
| Clic en un widget | Seleccionar solo ese widget |
| Ctrl + clic en un widget | Añadir ese widget a la selección o quitarlo de ella |
| Mayús + clic en un widget | Añadir ese widget a la selección |
| Clic en una zona vacía del lienzo | Borrar la selección |
| Arrastrar sobre una zona vacía del lienzo | Dibujar un recuadro de selección |
| Ctrl o Mayús + arrastrar un recuadro de selección | Añadir los widgets del recuadro a la selección actual en lugar de sustituirla |
| Clic en una fila del Outliner | Selecciona ese widget, incluso si está bloqueado |
| Doble clic en una fila del Outliner | Renombrarlo |

### Ratón: mover, redimensionar y rotar (modo de edición) \{#mouse---moving-resizing-rotating-edit-mode}

Los ocho tiradores de redimensionado y el tirador de movimiento solo aparecen en el modo de edición.

| Gesto | Acción |
|---|---|
| Arrastrar el tirador de movimiento | Mover los widgets seleccionados |
| **Alt** + arrastrar el tirador de movimiento | Rotar en lugar de mover |
| **Alt + Mayús** + arrastrar el tirador de movimiento | Rotar ajustando en pasos de 15 grados |
| Arrastrar un tirador de borde o de esquina | Redimensionar (funciona correctamente en widgets rotados) |

Mantén pulsado Alt antes de presionar el tirador de movimiento para empezar a rotar. Mantén pulsado Mayús durante el arrastre para ajustar.

### Ratón: navegar por el lienzo \{#mouse---navigating-the-canvas}

| Gesto | Acción | Modo |
|---|---|---|
| Rueda del ratón | Acercar hacia el cursor | Edición + en vivo |
| Arrastrar con el botón derecho | Desplazar el lienzo | Edición + en vivo |
| Clic derecho (sin arrastrar) | Abrir el menú contextual | Solo edición |
| Arrastrar el separador de una barra lateral | Redimensionar el panel del Outliner o del editor de atributos | Solo edición |

### Marcadores \{#bookmarks}

| Gesto | Acción |
|---|---|
| Clic en un marcador | Aplicar la vista guardada |
| **Ctrl + Mayús + clic** en un marcador | Guardar la vista actual en ese marcador (lo sobrescribe) |
| Clic derecho en un marcador | Renombrarlo o borrarlo |
