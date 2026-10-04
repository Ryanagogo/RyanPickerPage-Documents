---
sidebar_position: 3
---

# Botón de selección \{#select-button}

*El caballo de batalla: un botón que selecciona cosas.*

## En el modo en vivo \{#in-live-mode}

Al hacer clic en un botón de selección se seleccionan los controles de Control Rig y los actores de destino asignados (en el
viewport, en el rig y en Sequencer, donde estén vinculados) y luego se ejecuta su
[script de Python](./python-scripting), si tiene uno. Un botón puede llevar un solo control o un conjunto completo
("seleccionar todos los dedos") y puede mezclar libremente controles de rig y actores comunes.

**Ctrl+clic** alterna en lugar de reemplazar: si los destinos del botón todavía no están todos seleccionados,
se agregan a la selección actual; si ya lo están, se quitan de ella. En ambos casos, el resto
de tu selección no se toca.

## Dos comportamientos de selección \{#two-selection-behaviors}

Un botón de selección funciona en uno de dos modos, que se alternan con la casilla **Modo de selección interactivo**
del editor de atributos:

### Modo de conjunto de selección (predeterminado) \{#selection-set-mode-default}

El botón es un conjunto de selección guardado. Clic → sus destinos se convierten en la selección. El botón
no sigue lo que seleccionas en otros lugares.

### Modo de selección interactivo \{#interactive-selection-mode}

El botón se vuelve un reflejo en vivo de la selección del editor, como se comportan los pickers de
animación tradicionales:

- La página consulta varias veces por segundo la selección actual del viewport o del rig y **resalta el
  botón** cuando todos sus destinos forman parte de la selección actual: selecciona el control en
  el viewport y su botón se resalta solo en la página.
- Al hacer clic se selecciona de forma **acumulativa**: los destinos del botón se suman a lo que ya está seleccionado
  en lugar de reemplazarlo, así que al hacer clic en varios botones interactivos se va armando una selección.
- Ctrl+clic quita los destinos del botón de la selección, como antes.

Este modo está pensado para **un control (o un actor) por botón**. Activarlo en un botón
con varios destinos funciona, pero muestra una notificación de advertencia: un botón con varios destinos no puede
reflejar sin ambigüedad una selección parcial. La consulta solo se ejecuta mientras la pestaña de la página está en
primer plano y el modo de edición está desactivado, así que las pestañas en segundo plano no consumen nada.

Los botones nuevos pueden comenzar de forma predeterminada en cualquiera de los dos modos mediante la [Configuración del editor](./editor-settings).

## Creación \{#authoring}

Con el botón seleccionado en el modo de edición, el editor de atributos muestra:

- **Etiqueta** (y si se muestra), nombre del widget, tamaño de fuente
- **Color de fondo** y **color de fuente**
- **Nombres de controles**: se resuelven contra el rig actual de la página; consulta
  [Control Rig y actores de destino](./control-rig-and-targets)
- **Actores de destino**: un resumen resuelto y legible de todos los actores asignados
- Casilla **Modo de selección interactivo**
- **Script de Python**: de varias líneas; se ejecuta después de la selección en cada clic
- Posición, tamaño, rotación, radio de esquina: comunes a todos los widgets

Los botones nuevos toman su lista de destinos de lo que esté seleccionado al crearlos (un
[ajuste](./editor-settings), activado de forma predeterminada): el ciclo de creación más rápido es *seleccionar en el
viewport, agregar el botón y listo*.

## Scripting \{#scripting}

Las funciones de Blueprint están en `URyanPickerSelectButtonFunctionLibrary`
(categoría `Ryan Picker Page|SelectControl`); las funciones comunes de transformación y apariencia están en la
[biblioteca compartida de widgets](./blueprint-api).

| Función | |
|---|---|
| `GetControlNames` | nombres de los controles de rig asignados |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | actores asignados, en ambos espacios de identidad; consulta [Spawnables de Sequencer](./control-rig-and-targets#sequencer-spawnables) |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | el setter avisa (no bloquea) en botones con varios destinos |

Las subclases de Blueprint pueden implementar los eventos de la interfaz `BI_RyanPickerSelectButton`:
`OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`,
`OnTargetActorsSelected`, además de los [tres eventos de ciclo de vida](./blueprint-api#event-hooks) que comparten todos
los tipos de widget. Consulta [Blueprints de widgets personalizados](./blueprint-api#custom-widget-blueprints) para ver
cómo aparece una subclase en el menú Add Widget.
