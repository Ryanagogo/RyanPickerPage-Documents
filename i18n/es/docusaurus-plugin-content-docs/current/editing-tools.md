---
sidebar_position: 9
---

# Herramientas de edición y del lienzo \{#editing--canvas-tools}

Todo lo que aparece en esta página ocurre en el **modo de edición**. El lienzo en sí se puede desplazar y ampliar en ambos
modos: construye con el nivel de zoom que te resulte cómodo.

## Selección \{#selection}

- Haz clic en un widget para seleccionarlo; Mayús/Ctrl+clic amplía la selección.
- Arrastra sobre una zona vacía del lienzo para dibujar un recuadro de selección.
- Los widgets seleccionados muestran ocho tiradores de redimensionado y un tirador de rotación, cada uno con su propio cursor.

El editor de atributos sigue a la selección individual; las herramientas de la barra de herramientas que se describen abajo sirven para editar muchos
widgets a la vez.

## Manipulación directa \{#direct-manipulation}

Arrastra un widget para moverlo. Arrastra un tirador para redimensionarlo; el redimensionado funciona correctamente también en widgets
rotados. Arrastra el tirador de rotación para girar un widget alrededor de su centro; la rotación se guarda en
grados, y los widgets rotados siguen siendo totalmente funcionales en el modo en vivo (un slider rotado se arrastra a lo largo de
su eje rotado). Mantén pulsado Mayús mientras rotas para ajustar en incrementos de 15°. Al rotar una selección de varios widgets,
todo el grupo gira de forma rígida alrededor de un pivote común (anclado en el último widget
seleccionado), mientras cada widget sigue girando también sobre su propio centro.

Un widget bloqueado queda fuera de todo esto; consulta [Bloqueo de widgets](./attribute-editor-and-outliner#widget-locking).

Las teclas de flecha desplazan la selección poco a poco (con Mayús, en pasos más grandes; ambas distancias son Class
Defaults de la página). La herramienta **Desplazar** de la barra de herramientas añade flechas en pantalla con su propia distancia
definida en un campo numérico, para pasos repetidos y exactos.

## Herramientas de la barra de herramientas \{#toolbar-tools}

Hay una fila de herramientas activa a la vez, que se cambia desde la cabecera:

| Herramienta | Actúa sobre la selección |
|---|---|
| **Imagen** | asigna una textura a cada widget seleccionado |
| **Color** | aplica un color de fondo/fuente a cada widget seleccionado |
| **Etiqueta** | establece el texto de la etiqueta y el tamaño de fuente en toda la selección |
| **Tamaño** | establece un ancho/alto exacto en toda la selección |
| **Desplazar** | flechas de paso fijo, como se describe arriba |
| **Alinear** | izquierda/derecha/arriba/abajo, centros horizontal/vertical y distribución uniforme |
| **Espejo** | ver más abajo |

Las ediciones de color desde la barra de herramientas (y desde el editor de atributos) se agrupan mientras arrastras dentro del
selector de color: un paso de deshacer por sesión de color, no por cada movimiento del ratón.

## Espejo \{#mirror}

Construye un lado de una página a partir del otro: **Mirror Horizontal** / **Mirror Vertical** reflejan
la posición de cada widget seleccionado respecto a un eje e invierten su rotación. El eje se define con el
desplegable **Mirror Mode**:

| Modo | Refleja respecto a |
|---|---|
| Propio | el centro de cada widget: los widgets se voltean en su sitio |
| Última selección (incl.) | el centro del último widget seleccionado; también se mueve |
| Última selección (excl.) | el centro del último widget seleccionado; se queda donde está |
| Lienzo visible | el centro de lo que ves en ese momento |

El espejo es solo geométrico: no renombra controles ni intercambia canales de sliders. El flujo habitual
es reflejar y luego reasignar: refleja los widgets del brazo izquierdo y luego apunta las copias a los
controles del lado derecho. Para un reflejo izquierda/derecha repetible que recuerde las parejas, consulta
[Reflejar pose](./mirror-pose).

## Grupos de capas \{#layer-groups}

Cada widget pertenece a un **grupo de capas**, y el orden de dibujado es simplemente el de los miembros de cada grupo,
grupo por grupo, de delante hacia atrás. Tres grupos (**Imágenes**, **Etiquetas**, **Controles**) se crean
en todas las páginas y no se pueden eliminar (al eliminar cualquier otro grupo, sus miembros vuelven al
grupo predeterminado de su tipo). Además de esos tres, puedes crear, renombrar, reordenar y bloquear
todos los grupos que quieras; un grupo bloqueado bloquea todos sus widgets, igual que el
[bloqueo de widgets](./attribute-editor-and-outliner#widget-locking) en un widget individual.

Haz clic derecho en un widget para **Traer al frente / Step Up / Step Down / Enviar al fondo**, dentro de su propio grupo. Mover
un widget entre grupos, reordenar los propios grupos y bloquear se hace desde la
[vista Por capa](./attribute-editor-and-outliner#outliner-left) del Outliner; consulta esa página para ver la
interfaz completa de gestión con arrastrar y soltar.

## Copiar, cortar, pegar \{#copy-cut-paste}

Ctrl+C / Ctrl+X / Ctrl+V sobre cualquier selección. Lo pegado aparece en el cursor; se puede pegar en otra pestaña
de página abierta, y Pegar en su lugar conserva las posiciones exactas para transferencias entre páginas.
Los widgets pegados conservan sus nombres cuando es posible, con un sufijo numérico si hay duplicados. Los grupos de
interruptores se pueden copiar y pegar [como grupos completos](./widget-toggle#toggle-groups).

## Valores predeterminados de los widgets \{#widget-defaults}

El aspecto de un widget recién añadido se define por capas, de la menos a la más específica:

1. **Class Defaults**: valores iniciales por tipo (colores, tamaños, fuentes...) que se editan en el
   panel Class Defaults de la página, con una categoría por tipo de widget.
2. **Sticky Defaults**: clic derecho en cualquier widget → **Copy to Sticky Defaults**, y los widgets
   de ese tipo que crees después aparecerán igual. Qué categorías de propiedades se conservan (color, fuente, radio de esquina,
   tamaño, rotación, texto, imagen) se elige en la [Configuración del editor](./editor-settings).

Esto solo se aplica a los widgets creados desde el menú Add Widget: los widgets pegados y cargados conservan sus propios
datos.
