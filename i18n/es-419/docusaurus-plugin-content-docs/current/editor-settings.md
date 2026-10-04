---
sidebar_position: 15
---

# Configuración del editor \{#editor-settings}

**Archivo → Settings…** abre el cuadro de diálogo de configuración global del plugin. Son preferencias **por computadora**
que se aplican a todas las páginas que abras, a diferencia de los Class Defaults por página (guardados en
el Blueprint de la página) y de los datos por archivo (guardados en el archivo de la página).

## Comportamiento de los widgets nuevos \{#new-widget-behavior}

| Ajuste | Predeterminado | |
|---|---|---|
| Seed New Widget Targets From Selection | activado | los botones y sliders nuevos llenan sus destinos a partir de la selección actual; consulta [Cómo se asignan los destinos](./control-rig-and-targets#how-targets-get-assigned) |
| Default Interactive Selection Mode | desactivado | los botones de selección nuevos comienzan en el [modo de selección interactivo](./widget-select-button#interactive-selection-mode) |
| Tamaño predeterminado de widget nuevo | 200 × 100 | con una casilla **Override**: desactivada, gana el valor de los Class Defaults de la página; activada, el valor de este cuadro de diálogo lo reemplaza |
| Radio de esquina predeterminado | 10 | misma lógica de la casilla Override; es el valor de respaldo global en la [cascada de redondeo](./attribute-editor-and-outliner#corner-radius) |

## Categorías de Sticky Defaults \{#sticky-defaults-categories}

Siete casillas (**Color, Fuente, Radio de esquina, Tamaño, Rotación, Texto, Imagen**, todas activadas de
forma predeterminada) controlan qué grupos de propiedades traslada realmente
[Copy to Sticky Defaults](./editing-tools#widget-defaults) a los widgets nuevos.
Desactiva Tamaño y Rotación, por ejemplo, para que los sticky defaults sean puramente estéticos.

## Página y mantenimiento \{#page--housekeeping}

| Ajuste | Predeterminado | |
|---|---|---|
| Número predeterminado de marcadores | 4 | ranuras de [marcadores](./bookmarks) de usuario en una página nueva (máx. 8) |
| Profundidad de la pila de deshacer | 30 | pasos de deshacer/rehacer de la página principal |
| Antigüedad máxima del estado de sesión | 90 días | las entradas del [estado de sesión](./save-load-and-files#session-state) más antiguas se eliminan; 0 desactiva la eliminación |

## El patrón de anulación \{#the-override-pattern}

Para los valores que también existen como Class Defaults de la página (tamaño del widget, radio de esquina), este cuadro de diálogo
cede a propósito: los Class Defaults del Blueprint de la página mandan hasta que marques aquí la
casilla **Override** correspondiente. Así se conserva por defecto el ajuste de un Blueprint de página compartido
y, al mismo tiempo, una computadora en particular puede imponer sus propios valores.
