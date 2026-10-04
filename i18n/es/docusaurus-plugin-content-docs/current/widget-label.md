---
sidebar_position: 7
---

# Etiqueta \{#label}

*Texto en el lienzo. Los clics la atraviesan directamente.*

Las etiquetas sirven para anotar: encabezados de sección («BRAZO IZQUIERDO»), notas o imágenes con leyenda. No tienen
comportamiento de clic en el modo en vivo ni asignación de destinos, lo que también significa que son el único tipo de widget
(junto con [Imagen](./widget-image)) que puedes superponer libremente sin robar clics a los
controles que las rodean.

Una etiqueta puede mostrar en directo el **nombre del Control Rig actual** en lugar de un texto fijo: coloca una en
una esquina de la página y siempre le indicará al animador qué rig controla esta pestaña.

## Creación \{#authoring}

- **Texto**, tamaño de fuente, color de fuente, **justificación**, **ajuste automático de línea**
- **Color de fondo** y, opcionalmente, una **imagen** de fondo con su propio modo de ajuste y
  [encuadre con desplazamiento/zoom](./widget-image#crop-panzoom)
- **Alfa de imagen**: opacidad de esa imagen de fondo sobre el color de fondo, 0–1
- Radio de esquina: las etiquetas tienen esquinas rectas de forma predeterminada (radio 0), pero participan en la misma
  [cascada de redondeo](./attribute-editor-and-outliner#corner-radius) que los demás tipos
- El bloque común de posición/tamaño/rotación

Las etiquetas renderizan su fondo con el mismo material de esquinas redondeadas que
[Imagen](./widget-image#rendering), así que el redondeo y el encuadre de la imagen se comportan igual en ambas.

## Scripting \{#scripting}

`URyanPickerLabelFunctionLibrary` (categoría `Ryan Picker Page|Label`):

| Función | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | imagen de fondo |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | encuadre con desplazamiento/zoom |
| `GetImageAlpha` / `SetImageAlpha` | limitado a 0–1 |

Las etiquetas no tienen interfaz de enlaces de eventos (no hay nada que pulsar ni arrastrar), pero todas las
[funciones comunes de widgets](./blueprint-api) (posición, tamaño, rotación, radio de esquina, nombre)
se aplican.
