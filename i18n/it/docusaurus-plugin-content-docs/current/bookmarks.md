---
sidebar_position: 11
---

# Segnalibri \{#bookmarks}

*Posizioni di camera con nome per l'area di lavoro.*

Su un picker per il corpo intero salti continuamente tra le varie zone: viso, mani, piedi. I segnalibri
riducono ogni salto a un solo clic: un segnalibro memorizza una vista (panoramica e zoom) dell'area di lavoro, e facendo clic sul suo pulsante nella
fila dell'intestazione l'area di lavoro si sposta lì all'istante.

## La fila dei segnalibri \{#the-bookmark-row}

- **Predefinito** esiste sempre ed è sempre visibile, fuori dalla fila scorrevole: consideralo la tua
  "home".
- **Gli slot utente** (4 per impostazione predefinita, fino a 8; vedi [Impostazioni editor](./editor-settings)) si trovano in una
  fila a scorrimento orizzontale accanto a esso, numerati in base alla posizione e rinominabili.

## Lavorare con i segnalibri \{#working-with-bookmarks}

| Azione | Come |
|---|---|
| Passare a una vista | fai clic sul pulsante |
| Memorizzare la vista corrente | **Ctrl+Maiusc+clic** sul pulsante, oppure clic destro → Imposta / sovrascrivi; il pulsante lampeggia in verde per confermare |
| Rinominare uno slot | clic destro → Rinomina |
| Aggiungere uno slot | clic destro → Aggiungi segnalibro prima / Aggiungi segnalibro dopo |
| Riordinare | clic destro → Sposta a sinistra / Sposta a destra; entrambi i pulsanti scambiati lampeggiano in arancione |
| Rimuovere / reimpostare | clic destro → Elimina, oppure Reset to Identity |

Le modifiche ai segnalibri hanno una **propria cronologia di annullamento di 30 passaggi**, del tutto indipendente da quella del layout:
Ctrl+Z sull'area di lavoro non annullerà mai una modifica a un segnalibro, e l'annullamento dei segnalibri non altera mai il
layout.

I segnalibri vengono salvati nel file della pagina insieme a tutto il resto. Larghezza dei pulsanti, font, spaziatura interna e i
due colori di lampeggio di conferma sono regolabili per ogni pagina nel pannello Class Defaults.
