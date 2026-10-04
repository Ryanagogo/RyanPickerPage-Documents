---
sidebar_position: 4
---

# Slider 1D \{#1d-slider}

*Uno slider collegato esattamente a un canale di trasformazione.*

## In modalità Live \{#in-live-mode}

Trascinando lo slider, il suo valore viene scritto in **un solo canale** (Trasla, Ruota o Scala, X, Y
o Z) di ogni controllo del Control Rig e attore target assegnato. Nient'altro viene toccato: lo
slider legge la trasformazione corrente di ogni target, sostituisce l'unico canale che gli appartiene e riscrive la
trasformazione. Le modifiche di valore seguono lo stesso percorso di applicazione del resto del plugin,
incluso l'auto-key del Sequencer, quindi i movimenti dello slider creano chiavi proprio come i controlli spostati a mano.

Poiché uno slider 1D non rivendica mai canali che non gli appartengono, più slider possono pilotare canali diversi
dello *stesso* controllo affiancati: un "sollevamento" con Trasla Y e un "rollio" con Ruota Z sullo stesso
controllo del piede non entrano in conflitto.

Facendo clic destro sullo slider compare **Ripristina al valore iniziale**, che lo riporta al valore
predefinito impostato.

## Modello dei valori \{#value-model}

Contano tre numeri, e solo due di essi si muovono:

- **Valore Minimo / Valore Massimo**: l'intervallo su cui viene mappato il trascinamento.
- **Current Value**: il valore attuale; il trascinamento lo scrive ed è quello che viene applicato ai target.
- **Valore Iniziale**: un valore predefinito impostato dall'autore che il trascinamento non tocca *mai*. Viene modificato solo
  intenzionalmente nell'Editor degli attributi, il che lo rende un valore sempre sicuro a cui
  "Ripristina al valore iniziale" può tornare.

Una **Dimensione Passo** facoltativa fa avanzare il trascinamento a incrementi, e **Bloccato** disattiva del tutto
il trascinamento (per uno slider di riferimento che non vuoi spostare per sbaglio a metà inquadratura).

## Creazione \{#authoring}

Campi dell'Editor degli attributi: etichetta/nome, valori minimo/massimo/corrente/iniziale, **Attivo Canale** (l'unico
canale pilotato da questo slider), **Orientamento** (orizzontale/verticale), colore della barra, colore della maniglia,
spessore della barra, stile maniglia incassata, bloccato, dimensione passo, oltre ai campi di assegnazione dei target
condivisi con il [pulsante di selezione](./widget-select-button) e al blocco comune di
posizione/dimensione/rotazione/raggio angolo.

## Scripting \{#scripting}

`URyanPicker1DSliderFunctionLibrary` (categoria `Ryan Picker Page|1DSlider`):

| Funzione | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | intervallo |
| `GetCurrentValue` / `SetCurrentValue` | valore attuale |
| `GetInitialValue` / `SetInitialValue` | punto di ripristino impostato |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`: Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | target |

Le sottoclassi Blueprint possono implementare `BI_RyanPicker1DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(float)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`, oltre
agli [eventi comuni del ciclo di vita](./blueprint-api#event-hooks).
