---
sidebar_position: 5
---

# Slider 2D \{#2d-slider}

*Un tirador arrastrable, dos canales de transformación.*

## En el modo en vivo \{#in-live-mode}

Un slider 2D es un pad: al arrastrar su tirador, el eje X se escribe en un canal de transformación y el
eje Y en otro, simultáneamente, en cada control o actor asignado. Usos típicos son un pad de
Trasladar X / Trasladar Y para apoyar el pie o un pad de Rotar X / Rotar Y para la dirección de la mirada.

Sigue la misma disciplina de canales que el [slider 1D](./widget-1d-slider): cada eje
sustituye solo su propio canal en el destino, de modo que un pad 2D convive con otros sliders que controlan
los canales restantes del mismo control. Se aplica el auto-key. **Restablecer al valor inicial** también está en el
menú contextual.

## Modelo de valores \{#value-model}

Idéntico al del slider 1D, pero bidimensional: **Valor mínimo/Valor máximo** son pares por eje, **Current
Value** es el valor 2D en directo y **Valor inicial** es el valor predeterminado definido, que no cambia al arrastrar. **Tamaño de paso**
y **Bloqueado** funcionan igual.

Los dos canales se eligen de forma independiente (**Activo Canal X**, **Activo Canal Y**). Asignar
ambos ejes al *mismo* canal es casi siempre un error de configuración, por lo que el editor de atributos
lo señala con un aviso en lugar de dejar que los dos ejes se disputen un mismo valor en silencio.

## Creación \{#authoring}

Campos del editor de atributos: etiqueta/nombre, mínimo/máximo por eje, valores actual e inicial, Activo Canal X
e Y (con el aviso de canal repetido), color del manejador, estilo de tirador hundido, bloqueado, tamaño de paso,
asignación de destinos y el bloque común de posición/tamaño/rotación/radio de esquina.

## Scripting \{#scripting}

`URyanPicker2DSliderFunctionLibrary` (categoría `Ryan Picker Page|2DSlider`):

| Función | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, por eje |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | destinos |

Las subclases de Blueprint pueden implementar `BI_RyanPicker2DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
además de los [eventos comunes del ciclo de vida](./blueprint-api#event-hooks).
