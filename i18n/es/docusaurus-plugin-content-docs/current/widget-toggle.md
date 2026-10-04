---
sidebar_position: 6
---

# Interruptor \{#toggle}

*Un conmutador de dos estados; IK/FK es el uso por excelencia.*

## En el modo en vivo \{#in-live-mode}

Un interruptor tiene dos estados, **A** y **B**. Al hacer clic se alterna entre ellos, y el estado que
acaba de activarse aplica su propia configuración: su etiqueta, sus colores, sus controles de rig
y actores asignados se seleccionan, y se ejecuta su propio [script de Python](./python-scripting).
Todo en un interruptor se define **por estado**: un interruptor IK/FK puede seleccionar los controles IK
en un estado y los FK en el otro, con un color distinto en cada uno.

## Grupos de interruptores \{#toggle-groups}

Agrupa varios interruptores (menú contextual, con dos o más seleccionados) y se comportarán como botones de
opción: cada interruptor declara cuál de sus estados cuenta como «activado» (su **Estado activado**), y
al activar un miembro del grupo se desactivan todos los demás. Los widgets agrupados muestran un borde
distintivo en el lienzo, los grupos se pueden nombrar y renombrar, y la
[vista **Por grupo** del Outliner](./attribute-editor-and-outliner) muestra los miembros de cada grupo bajo
su encabezado. Al copiar un grupo se ofrece un pegado que lo recrea como un grupo completamente nuevo, con miembros y
nombre incluidos.

## Controlar el canal booleano de un rig \{#driving-a-rigs-bool-channel}

Además de seleccionar controles, un interruptor puede vincularse directamente a un **canal de animación booleano** de un
control de Control Rig; por ejemplo, el atributo real del conmutador IK/FK del rig:

- Indica el **control padre** del canal y el propio **canal**, y elige qué estado del interruptor
  significa que el canal es *true*.
- Al hacer clic en el interruptor, también se escribe el valor booleano.
- El vínculo es bidireccional: la página consulta el valor en directo del canal y lo refleja en el
  estado visual del interruptor, de modo que al hacer scrub más allá de un conmutador IK/FK con clave, el botón de la página cambia
  sin volver a ejecutar su comportamiento de clic.

## Creación \{#authoring}

Campos del editor de atributos: por estado, etiqueta / color de fondo / color de fuente / tamaño de fuente / nombres de
controles / actores de destino / script de Python; el estado actual y el estado activado; el vínculo con el canal booleano
de animación (activar, control padre, nombre del canal, estado true); y el bloque común de
posición/tamaño/rotación/radio de esquina.

## Scripting \{#scripting}

`URyanPickerToggleFunctionLibrary` (categoría `Ryan Picker Page|Toggle`). La mayoría de las funciones reciben un
`ERyanPickerToggleState` y leen o escriben la configuración de un estado:

| Función | |
|---|---|
| `GetToggleState` / `SetToggleState` | estado actual |
| `GetOnState` / `SetOnState` | qué estado cuenta como «activado» para la exclusividad del grupo |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | interruptor general del vínculo con el canal de animación |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Las subclases de Blueprint pueden implementar `BI_RyanPickerToggle`: `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, además de los
[eventos comunes del ciclo de vida](./blueprint-api#event-hooks).
