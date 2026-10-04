---
sidebar_position: 16
---

# API de Blueprint \{#blueprint-api}

La superficie de scripting del plugin sigue un mismo patrón en todo momento: **bibliotecas de funciones** de nodos
estáticos, una biblioteca compartida para lo que tienen todos los widgets y una biblioteca por tipo de widget para lo que
solo tiene ese tipo. Cada función recibe el widget como `Target` con `DefaultToSelf`: dentro del propio grafo de un
Blueprint de widget, los nodos se conectan solos a `self`.

## Funciones compartidas: todos los tipos de widget \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`, categoría `Ryan Picker Page|Widget`:

| Función | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | geometría en el lienzo |
| `GetRotation` / `SetRotation` | grados, ajustados al rango [0, 360) |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | el nivel por widget de la [cascada de redondeo](./attribute-editor-and-outliner#corner-radius) |
| `GetWidgetName` / `SetWidgetName` | nombre único en la página |
| `GetCurrentControlRig` | el rig actual de la página propietaria |
| `GetActorFromGUID` | resuelve la identidad de un actor a través de la página |

## Funciones por tipo \{#per-type-functions}

La biblioteca propia de cada tipo de widget está documentada en su página:

| Biblioteca | Categoría | Referencia |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [Botón de selección](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [Slider 1D](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [Slider 2D](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [Interruptor](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [Etiqueta](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [Imagen](./widget-image#scripting) |

## Enlaces de eventos \{#event-hooks}

Cada uno de los cuatro tipos de widget interactivos expone una interfaz de Blueprint con enlaces `BlueprintNativeEvent`;
impleméntalos en una subclase de Blueprint para agregar comportamiento sin C++:

| Interfaz | Eventos específicos del tipo |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | los mismos cuatro, con valor 2D |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

Las cuatro heredan tres **eventos de ciclo de vida** comunes a todos los tipos interactivos:

- `OnWidgetSelected(bool)`: cambió la selección en el modo de edición
- `OnWidgetHighlighted(bool)`: cambió el estado de hover
- `OnWidgetEditModeChanged(bool)`: la página entró al modo de edición o salió de él

Las etiquetas y las imágenes no tienen interfaz de enlaces (no hay nada en ellas que se pueda presionar), pero la biblioteca
de funciones compartida las cubre.

## Blueprints de widgets personalizados \{#custom-widget-blueprints}

El punto de extensión más profundo: **crea una subclase de un tipo de widget en Blueprint y la página la tratará como
un tipo de widget de primera clase por sí mismo.**

1. Crea una clase de Blueprint cuyo padre sea una de las clases de widget nativas finales
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider`, …).
2. Implementa los eventos de su interfaz de enlaces para agregar tu comportamiento: efectos visuales extra en
   `OnToggleStateChanged`, lógica personalizada en `OnSelectButtonClicked`, lo que pida la toma.
3. Tu clase aparece automáticamente en el menú contextual del lienzo, en **Widgets personalizados**,
   agrupada por su tipo base.

Los widgets personalizados lo heredan todo (guardar/cargar, deshacer, el editor de atributos, las herramientas de alinear/reflejar,
la asignación de destinos) porque la página reconoce cualquier subclase de un tipo final como ese tipo. Las páginas que
usan un widget personalizado registran la ruta de clase del Blueprint en el archivo guardado, así que se vuelven a cargar
correctamente en cualquier proyecto que contenga el Blueprint.

Para un comportamiento al hacer clic que no justifique una subclase de Blueprint, muchas veces basta con un simple
[script de Python en el widget](./python-scripting).
