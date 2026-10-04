---
sidebar_position: 4
---

# Slider 1D \{#1d-slider}

*Un slider conectado exactamente a un canal de transformación.*

## En el modo en vivo \{#in-live-mode}

Al arrastrar el slider, su valor se escribe en **un canal** (Trasladar, Rotar o Escala, en X, Y
o Z) de cada control de Control Rig y actor de destino asignado. No se toca nada más: el
slider lee la transformación actual de cada destino, reemplaza el único canal que le pertenece y vuelve a escribir la
transformación. Los cambios de valor pasan por la misma ruta de aplicación que el resto del plugin,
incluido el auto-key de Sequencer, así que los movimientos del slider crean claves igual que los controles movidos a mano.

Como un slider 1D nunca reclama canales que no le pertenecen, varios sliders pueden controlar distintos
canales del *mismo* control a la vez: un "levantar" con Trasladar Y y un "rodar" con Rotar Z en un mismo
control del pie no entran en conflicto.

Al hacer clic derecho en el slider aparece **Restablecer al valor inicial**, que lo regresa al valor
predeterminado definido.

## Modelo de valores \{#value-model}

Importan tres números, y solo dos de ellos llegan a moverse:

- **Valor mínimo / Valor máximo**: el rango sobre el que se asigna el arrastre.
- **Current Value**: el valor en vivo; el arrastre lo escribe y es lo que se aplica a los destinos.
- **Valor inicial**: un valor predeterminado definido por el autor que el arrastre *nunca* toca. Solo se cambia
  a propósito en el editor de atributos, lo que lo vuelve un valor siempre seguro al que
  "Restablecer al valor inicial" puede regresar.

Un **tamaño de paso** opcional ajusta el arrastre a incrementos, y **Bloqueado** desactiva el arrastre
por completo (para un slider de referencia que no quieres mover por accidente a mitad de una toma).

## Creación \{#authoring}

Campos del editor de atributos: etiqueta/nombre, valores mínimo/máximo/actual/inicial, **Activo Canal** (el
único canal que controla este slider), **Orientación** (horizontal/vertical), color de la barra, color del manejador,
grosor de la barra, estilo de controlador hundido, bloqueado, tamaño de paso, además de los campos de asignación de destinos
compartidos con el [botón de selección](./widget-select-button) y el bloque común de
posición/tamaño/rotación/radio de esquina.

## Scripting \{#scripting}

`URyanPicker1DSliderFunctionLibrary` (categoría `Ryan Picker Page|1DSlider`):

| Función | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | rango |
| `GetCurrentValue` / `SetCurrentValue` | valor en vivo |
| `GetInitialValue` / `SetInitialValue` | punto de restablecimiento definido |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`: Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | destinos |

Las subclases de Blueprint pueden implementar `BI_RyanPicker1DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(float)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`, además de
los [eventos comunes del ciclo de vida](./blueprint-api#event-hooks).
