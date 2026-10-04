---
sidebar_position: 11
---

# Marcadores \{#bookmarks}

*Posiciones de cámara con nombre para el lienzo.*

En un picker de cuerpo completo saltas constantemente entre zonas: cara, manos, pies. Los marcadores
convierten cada salto en un solo clic: un marcador guarda una vista de desplazamiento y zoom del lienzo, y al hacer clic en su botón de
la fila de la cabecera el lienzo salta allí.

## La fila de marcadores \{#the-bookmark-row}

- **Predeterminado** siempre existe y siempre está visible, fuera de la fila desplazable; considéralo
  tu «inicio».
- **Las ranuras de usuario** (4 de forma predeterminada, hasta 8; consulta [Configuración del editor](./editor-settings)) se encuentran en una
  fila con desplazamiento horizontal a su lado, numeradas según su posición y con nombre editable.

## Trabajar con marcadores \{#working-with-bookmarks}

| Acción | Cómo |
|---|---|
| Saltar a una vista | haz clic en el botón |
| Guardar la vista actual | **Ctrl+Mayús+clic** en el botón, o clic derecho → Establecer / sobrescribir; el botón parpadea en verde para confirmarlo |
| Renombrar una ranura | clic derecho → Renombrar |
| Añadir una ranura | clic derecho → Añadir marcador antes / Añadir marcador después |
| Reordenar | clic derecho → Mover a la izquierda / Mover a la derecha; los dos botones intercambiados parpadean en naranja |
| Eliminar / restablecer | clic derecho → Eliminar, o Reset to Identity |

Los cambios en los marcadores tienen su **propia pila de deshacer de 30 pasos**, totalmente independiente del deshacer del diseño:
Ctrl+Z en el lienzo nunca se comerá un cambio de marcador, y deshacer un marcador nunca altera el
diseño.

Los marcadores se guardan en el archivo de la página junto con todo lo demás. El ancho de los botones, la fuente, el relleno y los
dos colores de parpadeo de confirmación se pueden ajustar por página en el panel Class Defaults.
