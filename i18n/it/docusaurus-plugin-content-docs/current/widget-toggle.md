---
sidebar_position: 6
---

# Interruttore \{#toggle}

*Un interruttore a due stati: IK/FK ne è l'uso tipico.*

## In modalità Live \{#in-live-mode}

Un interruttore ha due stati, **A** e **B**. Facendo clic si passa dall'uno all'altro, e lo stato che
è appena diventato attivo applica la propria configurazione: la sua etichetta, i suoi colori, i controlli del rig
e gli attori assegnati vengono selezionati, e viene eseguito il suo [script Python](./python-scripting).
Tutto in un interruttore si configura **per stato**: un interruttore IK/FK può selezionare i controlli IK
in uno stato e quelli FK nell'altro, con un colore diverso per ciascuno.

## Gruppi di interruttori \{#toggle-groups}

Raggruppa più interruttori (menu del clic destro, con due o più selezionati) e si comporteranno come pulsanti di
opzione: ogni interruttore dichiara quale dei suoi stati conta come "acceso" (il suo **Stato Attivo**), e
accendere un membro del gruppo spegne tutti gli altri. I widget raggruppati mostrano un bordo
distintivo sull'area di lavoro, i gruppi possono essere nominati e rinominati, e la
[vista **Per gruppo** dell'Outliner](./attribute-editor-and-outliner) elenca i membri di ogni gruppo sotto
la relativa intestazione. Copiando un gruppo viene offerta un'opzione di incolla che lo ricrea come gruppo completamente nuovo, membri e
nome inclusi.

## Pilotare il canale booleano di un rig \{#driving-a-rigs-bool-channel}

Oltre a selezionare controlli, un interruttore può essere collegato direttamente a un **canale di animazione booleano** di un
controllo del Control Rig, ad esempio l'attributo effettivo di commutazione IK/FK del rig:

- Indica il **controllo padre** del canale e il **canale** stesso, e scegli quale stato dell'interruttore
  significa che il canale è *true*.
- Facendo clic sull'interruttore viene quindi scritto anche il valore booleano.
- Il collegamento è bidirezionale: la pagina interroga il valore attuale del canale e lo riflette nello
  stato visivo dell'interruttore, così scorrendo la timeline oltre una commutazione IK/FK con chiave il pulsante sulla pagina cambia
  senza eseguire di nuovo il comportamento al clic.

## Creazione \{#authoring}

Campi dell'Editor degli attributi: per stato etichetta / colore di sfondo / colore font / dimensione font / nomi dei
controlli / attori target / script Python; lo stato corrente e lo Stato Attivo; il collegamento al canale booleano di animazione
(abilitazione, controllo padre, nome del canale, stato true); e il blocco comune di
posizione/dimensione/rotazione/raggio angolo.

## Scripting \{#scripting}

`URyanPickerToggleFunctionLibrary` (categoria `Ryan Picker Page|Toggle`). La maggior parte delle funzioni accetta un
`ERyanPickerToggleState` e legge/scrive la configurazione di uno stato:

| Funzione | |
|---|---|
| `GetToggleState` / `SetToggleState` | stato corrente |
| `GetOnState` / `SetOnState` | quale stato è "acceso" per l'esclusività del gruppo |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | interruttore principale del collegamento al canale di animazione |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Le sottoclassi Blueprint possono implementare `BI_RyanPickerToggle`: `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, oltre agli
[eventi comuni del ciclo di vita](./blueprint-api#event-hooks).
