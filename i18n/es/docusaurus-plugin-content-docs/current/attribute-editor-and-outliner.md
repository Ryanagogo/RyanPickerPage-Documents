---
sidebar_position: 13
---

# Editor de atributos y Outliner \{#attribute-editor--outliner}

Las dos barras laterales del modo de edición. Cada una tiene su propio conmutador en la cabecera, así que puedes mantener en pantalla una, las dos o
ninguna.

## Outliner (izquierda) \{#outliner-left}

Una lista de todo lo que hay en la página: haz clic en una fila para seleccionar el widget, doble clic para renombrarlo
y clic derecho para mover/eliminar. Tres vistas, que se cambian con los botones situados encima de la lista:

- **Por tipo**: agrupado bajo los encabezados de los seis tipos de widget. La vista de uso diario.
- **Por capa**: agrupado por [grupo de capas](./editing-tools#layer-groups), en orden de dibujado. Aquí
  es donde se reorganiza el apilamiento: arrastra un widget a otro grupo para moverlo allí, arrastra
  dentro de un grupo para reordenar o arrastra el propio encabezado de un grupo para reordenar los grupos. Cada encabezado de grupo
  tiene su propio conmutador de bloqueo y se pliega de forma independiente.
- **Por grupo**: los [grupos de interruptores](./widget-toggle#toggle-groups) con sus miembros anidados
  bajo cada encabezado con nombre; aquí también se renombran los grupos.

Los nombres de los widgets son únicos por página (sin distinguir mayúsculas y minúsculas): un cambio de nombre que coincida con otro se rechaza y
se revierte en lugar de alterarse en silencio. La última vista utilizada se recuerda globalmente entre sesiones.

## Editor de atributos (derecha) \{#attribute-editor-right}

Las propiedades del widget seleccionado, en un panel de detalles. Edita **un widget cada
vez**; para aplicar el mismo cambio a muchos widgets, usa en su lugar las
[herramientas de la barra de herramientas](./editing-tools#toolbar-tools).

Los campos que aparecen dependen del tipo de widget; cada página de widget documenta los suyos. El
bloque común (posición, tamaño, rotación, radio de esquina, nombre del widget) siempre está presente.

Dos comportamientos que conviene conocer:

- **Las ediciones en curso se confirman antes de cambiar la selección.** Si estás editando un campo y
  haces clic en otro widget, el valor pendiente se confirma en el widget que realmente estabas
  editando; no puede filtrarse al recién seleccionado.
- **El aviso de canal repetido del slider 2D** aparece como un banner de color dentro del panel; consulta
  [Slider 2D](./widget-2d-slider).

## Radio de esquina \{#corner-radius}

El redondeo de los widgets se resuelve mediante una cascada de tres niveles, en la que gana el más específico:

1. **Anulación por widget**: un indicador «override corner radius» y un valor personalizado en el
   widget concreto.
2. **Class Default por tipo**: cada tipo de widget puede definir su propio valor predeterminado en el panel Class
   Defaults de la página.
3. **Valor predeterminado global**: 10 para los tipos botón/slider/interruptor; las etiquetas y las imágenes tienen esquinas
   rectas (0) de forma predeterminada. El valor de respaldo global se puede ajustar en la [Configuración del editor](./editor-settings).

Los widgets no personalizados siguen la cascada en directo: sube el valor predeterminado del tipo y todos los widgets
de ese tipo sin anulación se actualizarán con él.

## Bloqueo de widgets \{#widget-locking}

Cualquier widget se puede bloquear: con la casilla propia del editor de atributos, con el icono de candado de su fila
o del encabezado de su grupo en el Outliner, o con **Bloquear**/**Desbloquear selección** en el menú contextual.

El bloqueo solo afecta al modo de edición: un widget bloqueado no se puede seleccionar, mover ni redimensionar allí, y
sus tiradores de mover/redimensionar desaparecen por completo. El modo en vivo y la propia lista del Outliner no se ven afectados:
un widget bloqueado sigue funcionando con normalidad al hacer clic en el modo en vivo, y puedes seguir viéndolo y
renombrándolo en el Outliner. Bloquear un [grupo de capas](./editing-tools#layer-groups) desde su encabezado en el Outliner
bloquea a todos sus miembros de la misma forma.

El bloqueo está pensado para widgets que ya has terminado de colocar y que no quieres desplazar sin querer mientras
trabajas a su alrededor; por ejemplo, una imagen de fondo o una fila de botones terminada.

## Descripción emergente en el modo en vivo \{#live-mode-tooltip}

En el modo en vivo, al pasar el cursor sobre cualquier widget aparece una descripción emergente que resume sus conexiones: cómo se llama y
qué controles/actores controla. Es la forma más rápida de revisar una página desconocida sin
entrar en el modo de edición.
