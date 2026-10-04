---
sidebar_position: 11
---

# Marcadores \{#bookmarks}

*Posiciones de cámara con nombre para el lienzo.*

En un picker de cuerpo completo saltas constantemente entre zonas: cara, manos, pies. Los marcadores
convierten cada salto en un solo clic: un marcador guarda una vista de desplazamiento y zoom del lienzo, y al hacer clic en su botón de
la fila del encabezado el lienzo salta ahí.

## La fila de marcadores \{#the-bookmark-row}

- **Predeterminado** siempre existe y siempre está visible, fuera de la fila desplazable; tómalo como
  tu "inicio".
- **Las ranuras de usuario** (4 de forma predeterminada, hasta 8; consulta [Configuración del editor](./editor-settings)) están en una
  fila con desplazamiento horizontal junto a él, numeradas según su posición y con nombre editable.

## Trabajar con marcadores \{#working-with-bookmarks}

| Acción | Cómo |
|---|---|
| Saltar a una vista | haz clic en el botón |
| Guardar la vista actual | **Ctrl+Shift+clic** en el botón, o clic derecho → Establecer / sobrescribir; el botón parpadea en verde para confirmarlo |
| Cambiar el nombre de una ranura | clic derecho → Renombrar |
| Agregar una ranura | clic derecho → Añadir marcador antes / Añadir marcador después |
| Reordenar | clic derecho → Mover a la izquierda / Mover a la derecha; los dos botones intercambiados parpadean en naranja |
| Eliminar / restablecer | clic derecho → Eliminar, o Reset to Identity |

Los cambios en los marcadores tienen su **propia pila de deshacer de 30 pasos**, totalmente independiente del deshacer del diseño:
Ctrl+Z en el lienzo nunca se llevará un cambio de marcador, y deshacer un marcador nunca altera el
diseño.

Los marcadores se guardan en el archivo de la página junto con todo lo demás. El ancho de los botones, la fuente, el relleno y los
dos colores de parpadeo de confirmación se pueden ajustar por página en el panel Class Defaults.
