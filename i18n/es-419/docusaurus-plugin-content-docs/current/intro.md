---
sidebar_position: 1
---

# Introducción \{#introduction}

**Ryan Picker Page** es un picker de animación para Unreal Engine: un lienzo de botones, sliders,
interruptores, etiquetas e imágenes que diseñas una vez por personaje y luego usas para seleccionar y controlar
los controles de Control Rig (y los actores del nivel) con un solo clic, sin tener que buscar en el viewport,
en la jerarquía del rig o en el árbol de Sequencer a mitad de una toma.

La misma ventana es a la vez el picker y su editor. Cambia al modo de edición para armar el diseño; regresa
al modo en vivo para animar con él. Las páginas se guardan como archivos JSON portátiles que puedes compartir
entre proyectos y con tu equipo.

## Requisitos \{#requirements}

- Unreal Engine **5.6 – 5.8**
- Estos plugins del motor habilitados (el plugin los declara como dependencias): **Control Rig**,
  **Synthesis**, **Python Editor Script Plugin**

El plugin es solo para el editor. Nunca entra en una build empaquetada y no agrega nada en tiempo de ejecución.

## Instalación \{#installation}

1. Copia la carpeta `RyanPickerPage` en el directorio `Plugins/` de tu proyecto.
2. Habilítalo en **Edit → Plugins** y reinicia el editor.
3. Abre un picker desde **Tools → Ryan Picker Page**.

## Cómo orientarte en esta documentación \{#finding-your-way-around-these-docs}

Si eres un **animador** que usa una página que alguien armó para ti, comienza con
[Primeros pasos](./getting-started) y las secciones del modo en vivo de las páginas de widgets.

Si vas a **crear páginas**, lee en este orden: [Primeros pasos](./getting-started) →
[Control Rig y actores de destino](./control-rig-and-targets) → las páginas de tipos de widget →
[Herramientas de edición y del lienzo](./editing-tools).

Si eres un **TD que extiende el plugin**, ve directo a las páginas
[API de Blueprint](./blueprint-api) y [Scripting con Python](./python-scripting), que incluyen
cómo distribuir tus propias variantes de widget como subclases de Blueprint que aparecen en el menú Add Widget.

### Todas las páginas \{#all-pages}

| Sección | Páginas |
|---|---|
| Conceptos básicos | [Primeros pasos](./getting-started) |
| Tipos de widget | [Botón de selección](./widget-select-button) · [Slider 1D](./widget-1d-slider) · [Slider 2D](./widget-2d-slider) · [Interruptor](./widget-toggle) · [Etiqueta](./widget-label) · [Imagen](./widget-image) |
| Crear páginas | [Herramientas de edición y del lienzo](./editing-tools) · [Reflejar pose](./mirror-pose) · [Marcadores](./bookmarks) |
| Cómo funciona la asignación de destinos | [Control Rig y actores de destino](./control-rig-and-targets) · [Editor de atributos y Outliner](./attribute-editor-and-outliner) |
| Archivos y configuración | [Guardar, cargar y archivos](./save-load-and-files) · [Configuración del editor](./editor-settings) |
| Extensión | [API de Blueprint](./blueprint-api) · [Scripting con Python](./python-scripting) |
