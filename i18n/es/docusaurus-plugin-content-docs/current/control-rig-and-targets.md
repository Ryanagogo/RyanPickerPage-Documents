---
sidebar_position: 12
---

# Control Rig y actores de destino \{#control-rig--target-actors}

*A qué está «conectado» un widget y cómo esa conexión sobrevive a sesiones, secuencias y reapariciones.*

Los widgets nunca guardan referencias fijas a objetos. Almacenan **nombres e identidades** (nombres de controles de
Control Rig, identidades de actores) y los resuelven contra el estado actual del editor en el momento en que
haces clic. Esa indirección es lo que permite que una página guardada siga funcionando tras reiniciar el editor,
en distintos niveles y a lo largo del ciclo de vida de los actores en Sequencer.

## El Control Rig actual \{#the-current-control-rig}

Cada pestaña de página tiene un **Control Rig actual**, elegido en el desplegable de la cabecera. El desplegable
muestra los rigs vinculados en la **Level Sequence enfocada** y se mantiene solo: si cambias a una
secuencia distinta con el picker abierto, la lista se reconstruye, conservando tu elección si
ese rig sigue vinculado y seleccionándolo automáticamente cuando solo hay un rig disponible.

Los nombres de control de los widgets se resuelven contra este rig. Por eso, una misma página controla cualquier
personaje que comparta la nomenclatura de controles del rig: crea una página de bípedo y úsala para todo el reparto.
(Las [etiquetas](./widget-label) pueden mostrar el nombre del rig actual para que los animadores siempre sepan qué
personaje controla una pestaña).

## Actores de destino \{#target-actors}

Los widgets también pueden tener como destino **actores**, en lugar de controles de rig o junto a ellos. Un botón puede
seleccionar a la vez un accesorio, una cámara y un control de rig; un slider puede controlar directamente el canal de transformación de un actor,
creando claves automáticamente en Sequencer como cualquier animación a mano.

### Spawnables de Sequencer \{#sequencer-spawnables}

Los actores normales del nivel se identifican por su GUID de actor estable. **Los spawnables son la trampa**:
Sequencer los vuelve a generar con un GUID de actor *nuevo* en cada sesión, lo que rompería en silencio cualquier
página guardada con el anterior. Por eso, cada asignación de actor en cada widget almacena dos identidades
en paralelo: el GUID del actor *y* el **GUID de vinculación** del actor en Sequencer, que es estable
entre reapariciones. La resolución prueba el GUID del actor y, si falla, recurre a la vinculación. Nunca tienes que
gestionarlo; es la razón por la que las páginas con muchos spawnables siguen funcionando la semana siguiente.

## Cómo se asignan los destinos \{#how-targets-get-assigned}

En el modo de edición, con un widget seleccionado:

- **Tomar al crear** (predeterminado, [configurable](./editor-settings)): la lista de destinos de un widget nuevo se
  rellena con los controles/actores que estén seleccionados al añadirlo. Seleccionar en el viewport →
  Add Widget es todo el gesto de creación.
- Los campos de destino del editor de atributos muestran un resumen resuelto y legible (nombres reales de actores
  y controles, no GUID), para que puedas comprobar las conexiones de un vistazo. Las referencias rotas
  (actores eliminados, controles renombrados) simplemente no se resuelven, en lugar de provocar un error en la página.

## Dos filosofías de selección \{#two-selection-philosophies}

Los [botones de selección](./widget-select-button) ofrecen los dos comportamientos clásicos de picker:
**conjuntos de selección** (un clic sustituye la selección por el conjunto guardado) y el **modo de selección
interactivo** (los botones reflejan continuamente la selección del editor y el clic es acumulativo; consulta
la página del botón de selección para ver el comportamiento completo). La recogida de la selección es deliberadamente
independiente del rig: la asignación al crear y la coincidencia interactiva consideran tu selección real en el editor, no solo
los controles que pertenecen al rig actual del desplegable.
