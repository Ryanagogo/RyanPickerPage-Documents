---
sidebar_position: 8
---

# Imagen \{#image}

*Ilustraciones en el lienzo: retratos de personajes, diagramas del cuerpo, fondos.*

Las imágenes son la base visual de un buen picker: una vista del personaje o una silueta del cuerpo
detrás de los botones convierte una cuadrícula abstracta de botones en algo que se lee de un vistazo. Al igual que las
[etiquetas](./widget-label), no tienen comportamiento de clic en el modo en vivo y empiezan en el
[grupo de capas](./editing-tools#layer-groups) **Imágenes**, el más alejado de los tres grupos
predeterminados, de modo que una imagen recién añadida no tapará un control interactivo a menos que después reordenes
tú mismo los grupos.

## Encuadre con desplazamiento/zoom \{#crop-panzoom}

En lugar de recortar las texturas de antemano en un editor de imágenes, encuádralas en la página: **Image Scale**
acerca la textura de origen e **Image Offset** desplaza la ventana visible sobre ella. Una sola
hoja de personaje puede alimentar una docena de widgets de imagen, cada uno encuadrando una parte distinta del cuerpo. Los mismos
dos controles existen en la imagen de fondo de una etiqueta.

## Creación \{#authoring}

- **Textura**
- **Modo de ajuste**: cómo se adapta la textura al rectángulo del widget
- **Image Scale** / **Image Offset**: la ventana de encuadre
- **Color de fondo**: se sitúa detrás de la textura; también es el color hacia el que mezcla **Alfa de imagen**
- **Alfa de imagen**: opacidad de la textura sobre el color de fondo, 0–1
- Radio de esquina (de forma predeterminada, esquinas rectas, como en las etiquetas)
- El bloque común de posición/tamaño/rotación

## Renderizado \{#rendering}

Las imágenes y las etiquetas se dibujan mediante una instancia dinámica de un material compartido
(`M_RyanPickerRoundedImage`) en lugar de un pincel de textura simple. El redondeo de esquinas, el ajuste según el modo
y la ventana de encuadre se calculan en esa única pasada de material; por eso ambos
tipos se comportan de forma idéntica al píxel y por eso el encuadre no tiene coste adicional.

## Scripting \{#scripting}

`URyanPickerImageFunctionLibrary` (categoría `Ryan Picker Page|Image`):

| Función | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | encuadre con desplazamiento/zoom |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImageAlpha` / `SetImageAlpha` | limitado a 0–1 |

Sin interfaz de enlaces de eventos; se aplican las [funciones comunes de widgets](./blueprint-api).
