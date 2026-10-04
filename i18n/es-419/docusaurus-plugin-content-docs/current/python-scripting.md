---
sidebar_position: 17
---

# Scripting con Python \{#python-scripting}

*Asocia Python del editor a un clic, sin subclase de Blueprint ni compilación.*

Los [botones de selección](./widget-select-button) llevan un script de Python opcional;
los [interruptores](./widget-toggle) llevan uno **por estado**. El script se ejecuta en el entorno de Python del editor
(el módulo estándar `unreal` y todo lo demás que ofrece el Python Editor Script Plugin)
cada vez que se hace clic en el widget en el modo en vivo.

## Orden de ejecución \{#execution-order}

El script se ejecuta **después** de que termina el trabajo de selección del clic: controles seleccionados, actores
seleccionados y el estado del interruptor ya cambiado. Por eso, tu script puede asumir que los destinos del widget
son la selección actual y actuar sobre ellos:

```python
import unreal

# Se ejecuta con los destinos del botón ya seleccionados.
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

En un interruptor, se ejecuta el script del estado *al que* se acaba de cambiar: un interruptor IK/FK puede ejecutar
lógica de coincidencia/ajuste en cada transición, en cada dirección.

## Creación y almacenamiento \{#authoring-and-storage}

Edita el script en el campo **Script de Python** del editor de atributos con el widget seleccionado en el
modo de edición, o desde Blueprint mediante `GetPythonScript` / `SetPythonScript` (botón de selección) y
`GetPythonScriptForState` / `SetPythonScriptForState` (interruptor).

En el archivo de página guardado, el script se almacena codificado en Base64: es un detalle de transporte, no de seguridad.
Es texto plano en la interfaz del editor, en Blueprint y en memoria, y se ejecuta con todos los privilegios de Python
del editor. **Carga páginas solo de fuentes confiables**, el mismo criterio que aplicarías a cualquier
script del editor, y trata los archivos de página compartidos como código al revisarlos.
