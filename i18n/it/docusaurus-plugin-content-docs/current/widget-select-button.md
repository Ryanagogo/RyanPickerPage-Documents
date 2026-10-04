---
sidebar_position: 3
---

# Pulsante di selezione \{#select-button}

*Il cavallo da lavoro: un pulsante che seleziona le cose.*

## In modalità Live \{#in-live-mode}

Facendo clic su un pulsante di selezione vengono selezionati i controlli del Control Rig e gli attori target assegnati (nel
viewport, nel rig e nel Sequencer, dove sono associati) e poi viene eseguito il suo
[script Python](./python-scripting), se presente. Un pulsante può contenere un singolo controllo o un intero
set ("seleziona tutte le dita") e può combinare liberamente controlli del rig e semplici attori.

**Ctrl+clic** alterna invece di sostituire: se i target del pulsante non sono ancora tutti selezionati,
vengono aggiunti alla selezione corrente; se lo sono già, vengono rimossi. In entrambi i casi il resto
della selezione non viene toccato.

## Due comportamenti di selezione \{#two-selection-behaviors}

Un pulsante di selezione funziona in una di due modalità, che si alternano con la casella **Modalità Selezione Interattiva**
nell'Editor degli attributi:

### Modalità set di selezione (predefinita) \{#selection-set-mode-default}

Il pulsante è un set di selezione memorizzato. Clic → i suoi target diventano la selezione. Il pulsante
non tiene traccia di ciò che selezioni altrove.

### Modalità Selezione Interattiva \{#interactive-selection-mode}

Il pulsante diventa uno specchio in tempo reale della selezione dell'editor, come si comportano i picker di animazione
tradizionali:

- La pagina interroga più volte al secondo la selezione corrente del viewport/rig e **illumina il
  pulsante** quando tutti i suoi target fanno parte della selezione corrente: seleziona il controllo nel
  viewport e il suo pulsante si evidenzia da solo sulla pagina.
- Il clic seleziona in modo **additivo**: i target del pulsante si aggiungono a ciò che è già selezionato
  invece di sostituirlo, quindi facendo clic su più pulsanti interattivi si costruisce una selezione.
- Ctrl+clic rimuove i target del pulsante dalla selezione, come sopra.

Questa modalità è pensata per **un controllo (o un attore) per pulsante**. Attivarla su un pulsante
con più target funziona, ma mostra una notifica di avviso: un pulsante con più target non può
rispecchiare in modo univoco una selezione parziale. L'interrogazione avviene solo quando la scheda della pagina è in
primo piano e la modalità di modifica è disattivata, quindi le schede in background non hanno alcun costo.

I nuovi pulsanti possono partire per impostazione predefinita in una delle due modalità tramite le [Impostazioni editor](./editor-settings).

## Creazione \{#authoring}

Con il pulsante selezionato in modalità di modifica, l'Editor degli attributi mostra:

- **Etichetta** (e se mostrarla), nome del widget, dimensione del font
- **Colore di sfondo** e **colore del font**
- **Nomi dei controlli**: risolti rispetto al rig corrente della pagina; vedi
  [Control Rig e attori target](./control-rig-and-targets)
- **Attori target**: un riepilogo risolto e leggibile di tutti gli attori assegnati
- Casella **Modalità Selezione Interattiva**
- **Script Python**: su più righe; viene eseguito dopo la selezione a ogni clic
- Posizione, dimensione, rotazione, raggio angolo: comuni a tutti i widget

I nuovi pulsanti ricavano l'elenco dei target da ciò che è selezionato al momento della creazione (un'[impostazione](./editor-settings),
attiva per impostazione predefinita): il ciclo di creazione più rapido è *seleziona nel
viewport, aggiungi il pulsante, fatto*.

## Scripting \{#scripting}

Le funzioni Blueprint si trovano in `URyanPickerSelectButtonFunctionLibrary`
(categoria `Ryan Picker Page|SelectControl`); le funzioni comuni di trasformazione/aspetto sono nella
[libreria condivisa dei widget](./blueprint-api).

| Funzione | |
|---|---|
| `GetControlNames` | nomi dei controlli del rig assegnati |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | attori assegnati, in entrambi gli spazi di identità; vedi [Spawnable del Sequencer](./control-rig-and-targets#sequencer-spawnables) |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | il setter avvisa (senza bloccare) sui pulsanti con più target |

Le sottoclassi Blueprint possono implementare gli eventi dell'interfaccia `BI_RyanPickerSelectButton`:
`OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`,
`OnTargetActorsSelected`, oltre ai [tre eventi del ciclo di vita](./blueprint-api#event-hooks) comuni a tutti
i tipi di widget. Vedi [Blueprint di widget personalizzati](./blueprint-api#custom-widget-blueprints) per sapere
come una sottoclasse compare nel menu Add Widget.
