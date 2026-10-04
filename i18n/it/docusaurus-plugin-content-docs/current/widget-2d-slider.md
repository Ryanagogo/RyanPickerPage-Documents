---
sidebar_position: 5
---

# Slider 2D \{#2d-slider}

*Una maniglia trascinabile, due canali di trasformazione.*

## In modalità Live \{#in-live-mode}

Uno slider 2D è un pad: trascinandone la maniglia, l'asse X viene scritto in un canale di trasformazione e
l'asse Y in un altro, contemporaneamente, su ogni controllo/attore assegnato. Usi tipici sono un pad
Trasla X / Trasla Y per l'appoggio del piede o un pad Ruota X / Ruota Y per la direzione dello sguardo.

Segue la stessa disciplina dei canali dello [slider 1D](./widget-1d-slider): ogni asse
sostituisce solo il proprio canale sul target, quindi un pad 2D convive con altri slider che pilotano
i canali rimanenti dello stesso controllo. L'auto-key si applica. **Ripristina al valore iniziale** è disponibile anche qui nel
menu del clic destro.

## Modello dei valori \{#value-model}

Identico allo slider 1D ma bidimensionale: **Valore Minimo/Valore Massimo** sono coppie per asse, **Current
Value** è il valore 2D attuale, **Valore Iniziale** è il valore predefinito impostato, immune al trascinamento. **Dimensione Passo**
e **Bloccato** funzionano allo stesso modo.

I due canali si scelgono in modo indipendente (**Attivo Canale X**, **Attivo Canale Y**). Impostare
entrambi gli assi sullo *stesso* canale è quasi sempre un errore di configurazione, quindi l'Editor degli attributi
lo segnala con un banner di avviso invece di lasciare che i due assi si contendano silenziosamente un unico valore.

## Creazione \{#authoring}

Campi dell'Editor degli attributi: etichetta/nome, min/max per asse, valori corrente/iniziale, Attivo Canale X
e Y (con l'avviso di canale uguale), colore maniglia, stile maniglia incassata, bloccato, dimensione passo,
assegnazione dei target e il blocco comune di posizione/dimensione/rotazione/raggio angolo.

## Scripting \{#scripting}

`URyanPicker2DSliderFunctionLibrary` (categoria `Ryan Picker Page|2DSlider`):

| Funzione | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, per asse |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | target |

Le sottoclassi Blueprint possono implementare `BI_RyanPicker2DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
oltre agli [eventi comuni del ciclo di vita](./blueprint-api#event-hooks).
