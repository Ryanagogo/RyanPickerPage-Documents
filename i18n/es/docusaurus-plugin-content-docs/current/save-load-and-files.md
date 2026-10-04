---
sidebar_position: 14
---

# Guardar, cargar y archivos \{#saving-loading--files}

Una página se guarda en un único **archivo JSON**, en cualquier lugar del disco que elijas. Las páginas no son recursos de
Unreal: no viven en `Content/`, no necesitan el proyecto en el que se crearon y se pueden
compartir, enviar por correo o versionar como cualquier archivo de texto.

Un solo guardado contiene la página entera: cada widget con todas sus conexiones y estilos, la
[fila de marcadores](./bookmarks), los grupos de interruptores y el [Pose Map](./mirror-pose).

## El menú Archivo \{#the-file-menu}

| Opción | |
|---|---|
| **Guardar** | escribe en el archivo actual de la página; si la página nunca se ha guardado, se comporta como Guardar como |
| **Guardar como** | cuadro de diálogo nativo para guardar |
| **Cargar** | cuadro de diálogo nativo para abrir |
| **Cargar reciente** | archivos usados recientemente, sin cuadro de diálogo |
| **Recargar** | vuelve a leer el archivo actual desde el disco |
| **Pose Map…** | el [cuadro de diálogo Pose Map](./mirror-pose#the-pose-map) |
| **Settings…** | el cuadro de diálogo de [Configuración del editor](./editor-settings) |

Los cuadros de diálogo de guardar y cargar se vuelven a abrir en los últimos directorios usados.

## El menú Ayuda \{#the-help-menu}

Sus opciones se basan completamente en datos: una lista de elementos Etiqueta/URL/Descripción que se edita en el panel Class
Defaults de la página. Añade, elimina, reordena o cambia el destino de una opción sin tocar código ni recompilar;
al hacer clic en una, su URL se abre en el navegador predeterminado del sistema operativo. Hay una opción fija en lugar de
basada en datos: **Acerca de**, que muestra la versión del plugin, la versión de Unreal Engine y el
autor en un sencillo cuadro de información.

## Los archivos antiguos se siguen cargando \{#old-files-keep-loading}

Los archivos guardados tienen versión de esquema. Al cargar un archivo antiguo, se migra automáticamente a través de cada
cambio de esquema intermedio: las páginas de versiones tempranas del plugin se cargan en la
actual, y basta con volver a guardarlas para escribirlas en la versión actual. Los archivos que no se pueden
migrar (o que proceden de un plugin *más reciente* que el tuyo) se rechazan con un error claro
en lugar de cargarse a medias.

Una nota sobre privacidad: el [script de Python](./python-scripting) de un botón de selección se almacena
codificado en Base64 en el archivo; codificado, no cifrado. Trata los archivos de página que contienen scripts como
los propios scripts.

## Estado de sesión \{#session-state}

Junto al archivo de la página, pero nunca dentro de él, el plugin recuerda, por ruta de archivo, dónde lo
dejaste: desplazamiento y zoom del lienzo, el Control Rig activo y si estabas en el modo de edición o en vivo. Carga el mismo archivo
mañana y el lienzo estará exactamente donde lo dejaste. Como esta información se guarda en tu equipo indexada por ruta de
archivo, al compartir una página solo se comparte el diseño: los destinatarios tienen su propio estado de vista.
Las entradas que no se usan en 90 días (configurable) se eliminan.

## Dónde guarda el plugin sus propios archivos \{#where-the-plugin-keeps-its-own-files}

```
%APPDATA%\RyanTechAnimTools\RyanPicker\
├── settings.json              # archivos recientes, últimos directorios de diálogo, vista del Outliner
├── editor_settings.json       # los valores del cuadro de diálogo de configuración del editor
└── page_session_state.json    # estado de sesión por archivo, indexado por ruta absoluta
```

Son por usuario y por equipo. Si los eliminas pierdes comodidades (archivos recientes, vistas
restauradas, configuración), pero nunca datos de páginas: las páginas solo existen en los archivos que guardaste.
