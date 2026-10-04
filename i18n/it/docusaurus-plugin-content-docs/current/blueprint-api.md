---
sidebar_position: 16
---

# API Blueprint \{#blueprint-api}

L'interfaccia di scripting del plugin segue ovunque lo stesso schema: **librerie di funzioni** composte da nodi
statici, una libreria condivisa per ciò che hanno tutti i widget, più una libreria per ciascun tipo di widget per ciò che
ha solo quel tipo. Ogni funzione accetta il widget come `Target` con `DefaultToSelf`: all'interno del grafo di un
Blueprint di widget, i nodi si collegano da soli a `self`.

## Funzioni condivise: tutti i tipi di widget \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`, categoria `Ryan Picker Page|Widget`:

| Funzione | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | geometria sull'area di lavoro |
| `GetRotation` / `SetRotation` | gradi, normalizzati in [0, 360) |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | il livello per widget della [cascata di arrotondamento](./attribute-editor-and-outliner#corner-radius) |
| `GetWidgetName` / `SetWidgetName` | nome univoco nella pagina |
| `GetCurrentControlRig` | il rig corrente della pagina proprietaria |
| `GetActorFromGUID` | risolve l'identità di un attore tramite la pagina |

## Funzioni per tipo \{#per-type-functions}

La libreria specifica di ogni tipo di widget è documentata nella relativa pagina:

| Libreria | Categoria | Riferimento |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [Pulsante di selezione](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [Slider 1D](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [Slider 2D](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [Interruttore](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [Etichetta](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [Immagine](./widget-image#scripting) |

## Hook degli eventi \{#event-hooks}

I quattro tipi di widget interattivi espongono ciascuno un'interfaccia Blueprint di hook `BlueprintNativeEvent`:
implementali in una sottoclasse Blueprint per aggiungere comportamenti senza C++:

| Interfaccia | Eventi specifici del tipo |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | gli stessi quattro, con valore 2D |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

Tutte e quattro ereditano tre **eventi del ciclo di vita** comuni a ogni tipo interattivo:

- `OnWidgetSelected(bool)`: la selezione in modalità di modifica è cambiata
- `OnWidgetHighlighted(bool)`: lo stato di hover è cambiato
- `OnWidgetEditModeChanged(bool)`: la pagina è entrata o uscita dalla modalità di modifica

Etichette e immagini non hanno un'interfaccia di hook (non c'è nulla di cliccabile), ma la libreria di
funzioni condivisa le copre.

## Blueprint di widget personalizzati \{#custom-widget-blueprints}

Il punto di estensione più profondo: **crea una sottoclasse di un tipo di widget in Blueprint e la pagina la tratterà come
un tipo di widget a pieno titolo.**

1. Crea una classe Blueprint il cui padre sia una delle classi di widget native finali
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider`, …).
2. Implementa gli eventi della sua interfaccia di hook per aggiungere il tuo comportamento: elementi visivi extra su
   `OnToggleStateChanged`, logica personalizzata su `OnSelectButtonClicked`, qualsiasi cosa richieda l'inquadratura.
3. La tua classe compare automaticamente nel menu del clic destro dell'area di lavoro, sotto **Widget personalizzati**,
   raggruppata in base al tipo di base.

I widget personalizzati ereditano tutto (salvataggio/caricamento, annullamento, Editor degli attributi, strumenti di allineamento/specchio,
targeting) perché la pagina riconosce qualsiasi sottoclasse di un tipo finale come quel tipo. Le pagine che
usano un widget personalizzato registrano nel file di salvataggio il percorso di classe del Blueprint, quindi si ricaricano
correttamente in qualsiasi progetto che contenga il Blueprint.

Per un comportamento al clic che non giustifica una sottoclasse Blueprint, spesso basta un semplice
[script Python sul widget](./python-scripting).
