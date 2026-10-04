---
sidebar_position: 10
---

# Reflejar pose \{#mirror-pose}

*Enséñale una vez a la página su propia simetría izquierda/derecha y refleja diseños para siempre.*

La [herramienta Espejo](./editing-tools#mirror) refleja lo que esté seleccionado en ese momento respecto
al ancla que hayas elegido; sirve para volteos puntuales, pero no sabe qué widgets
se corresponden entre sí. **Reflejar pose** lo resuelve con un **Pose Map**: un registro a nivel de página de
qué widget es la pareja izquierda de cuál, dónde está la línea central y qué widget
ancla todo el conjunto. Una vez mapeado, reflejar el diseño es un solo clic, siempre, sin
malabares de selección.

## El Pose Map \{#the-pose-map}

Se crea en el cuadro de diálogo **Pose Map…** (menú Archivo). Cada página tiene exactamente un mapa, con tres
tipos de entradas:

- **Ancla**: el único widget que define el eje de reflexión (su centro). Normalmente es un
  botón de raíz/pelvis ubicado en la línea central de la página. No se refleja nada hasta que se define un ancla;
  si no, el botón Pose avisa con una notificación.
- **Widgets centrales**: columna, cabeza, todo lo que está en la línea central. Se reflejan sobre sí mismos
  (se voltean en su lugar respecto al eje).
- **Parejas**: pares de widgets izquierdo/derecho: muslo izquierdo ↔ muslo derecho, etc.

Los menús desplegables de widgets del cuadro de diálogo están en orden alfabético y permiten buscar, así que mapear una página grande
consiste en escribir para filtrar en vez de desplazarse. Un botón **Restablecer mapa** (con confirmación) borra
el mapa completo. El mapa se guarda dentro del archivo de la página, así que viaja con el diseño.

## Cómo usarlo \{#using-it}

La fila de Espejo de la barra de herramientas incluye un botón **Pose** y un menú desplegable de dirección, después de los botones
Mirror Horizontal/Vertical.

**Con una selección**: al hacer clic en **Pose**, cada widget seleccionado se refleja según su función
en el mapa: la posición y la rotación de un widget izquierdo o derecho se reflejan respecto al eje del ancla y
se escriben en su *pareja* (el lado seleccionado es el origen y no se mueve); los widgets centrales y
el ancla se voltean en su lugar. Los widgets seleccionados que no están en el mapa se omiten con una notificación
mientras el resto continúa.

**Sin nada seleccionado**: todo el mapa se refleja con un clic, en la dirección que indique el menú desplegable
(**Izquierda → Derecha** de forma predeterminada, o **Derecha → Izquierda**): el ancla y cada widget central
se voltean en su lugar, y cada pareja copia su lado de origen en su lado de destino. Es el
botón de "ya terminé el brazo izquierdo, copia el derecho".

El menú desplegable de dirección es un control temporal de la página: no se guarda con el archivo.

## Qué cambia y qué no \{#what-it-changes--and-doesnt}

Reflejar pose mueve la **geometría de los widgets**: posición y rotación en el lienzo. Igual que la herramienta Espejo,
no toca aquello a lo que están conectados los widgets: tu botón del muslo derecho sigue controlando el muslo
derecho; solo se coloca exactamente donde está el izquierdo, reflejado. Esa es la idea:
reasignar destinos una vez y luego mantener los dos lados visualmente sincronizados mientras el diseño evoluciona.
