---
sidebar_position: 2
---

# Primeros pasos \{#getting-started}

## Abrir una página \{#opening-a-page}

**Tools → Ryan Picker Page** abre una página en una nueva pestaña del editor. El botón **New Tab** de la
cabecera de la página abre más; cada pestaña es totalmente independiente, con su propio archivo, su propia selección de
Control Rig y su propia vista del lienzo. Al renombrar una página (su título se puede editar en el modo de edición) se renombra
su pestaña, de modo que una fila de pickers abiertos sigue siendo fácil de recorrer.

## Dos modos \{#two-modes}

El botón del modo de edición de la cabecera alterna toda la página entre:

**Modo en vivo**: el modo para animar. Al hacer clic en los widgets se seleccionan controles del rig y actores; al arrastrar
sliders se controlan transformaciones; al pasar el cursor sobre un widget aparece una descripción emergente de aquello a lo que está conectado. El diseño
en sí no se puede modificar.

**El modo en vivo es donde una página terminada pasa su vida.** Todo lo que hay en
[Herramientas de edición y del lienzo](./editing-tools) existe para llevarte hasta aquí.

**Modo de edición**: el modo de construcción. Los widgets muestran tiradores para mover, redimensionar y rotar, al hacer clic derecho
en una zona vacía del lienzo se abre el menú **Add Widget** y aparecen dos barras laterales plegables: el
[Outliner](./attribute-editor-and-outliner) a la izquierda y el
[Editor de atributos](./attribute-editor-and-outliner) a la derecha.

## Crea tu primera página \{#build-your-first-page}

Un picker mínimo para una pierna, de principio a fin:

1. Abre una Level Sequence que contenga tu personaje y su Control Rig, y luego abre una página de picker.
   El desplegable de rigs de la cabecera se rellena a partir de la secuencia enfocada; elige tu rig (se
   selecciona automáticamente si solo hay uno).
2. Entra en el **modo de edición**.
3. En el viewport o en el Anim Outliner, selecciona el control del muslo. Haz clic derecho en el lienzo →
   **Add Widget → Botón de selección**. De forma predeterminada, un botón nuevo toma su lista de destinos de la
   selección actual, así que este botón ya controla el muslo.
4. Repite el proceso para la pantorrilla y el pie. Usa el campo de etiqueta del
   [Editor de atributos](./attribute-editor-and-outliner) para dar nombre a cada botón y arrástralos hasta formar una
   columna con forma de pierna.
5. Selecciona los tres y prueba las [herramientas de alineación](./editing-tools) para enderezar la columna.
6. Sal del modo de edición. Haz clic en los botones: cada uno selecciona su control. Ese es el ciclo básico; todo lo demás
   es refinamiento.
7. **Archivo → Guardar** escribe la página en un archivo JSON donde quieras; consulta
   [Guardar, cargar y archivos](./save-load-and-files).

## Deshacer, rehacer y redes de seguridad \{#undo-redo-and-safety-nets}

Cada cambio en el modo de edición (mover, redimensionar, añadir, eliminar, pegar, editar colores) se registra en la
pila de deshacer de la página (30 pasos de forma predeterminada; consulta [Configuración del editor](./editor-settings)). Ctrl+Z /
Ctrl+Y, o los botones de la cabecera. Arrastrar dentro de un selector de color se agrupa en un único paso de deshacer
en lugar de uno por cada movimiento, así que al deshacer un cambio de color se deshace todo el arrastre.

Los [marcadores](./bookmarks) tienen su propia pila de deshacer independiente: deshacer cambios de diseño nunca altera
tus vistas guardadas, y viceversa.

## Retomar donde lo dejaste \{#picking-up-where-you-left-off}

Para cada archivo guardado, el plugin recuerda el desplazamiento y el zoom del lienzo, qué Control Rig estaba activo y
si estabas en el modo de edición o en el modo en vivo; todo se restaura automáticamente la próxima vez que se carga ese archivo
en este equipo. Esta información se guarda fuera del archivo de la página, así que al compartir una página con un
compañero compartes el diseño, no tus hábitos de visualización. Consulta
[Guardar, cargar y archivos](./save-load-and-files#session-state).
