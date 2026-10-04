---
sidebar_position: 12
---

# Control Rig e attori target \{#control-rig--target-actors}

*A cosa è "collegato" un widget e come quel collegamento sopravvive a sessioni, sequenze e respawn.*

I widget non mantengono mai riferimenti diretti agli oggetti. Memorizzano **nomi e identità** (nomi dei controlli del
Control Rig, identità degli attori) e li risolvono rispetto allo stato attuale dell'editor nel momento in cui
fai clic. È questa indirezione a consentire a una pagina salvata di continuare a funzionare dopo il riavvio dell'editor,
in livelli diversi e attraverso il ciclo di vita degli attori del Sequencer.

## Il Control Rig corrente \{#the-current-control-rig}

Ogni scheda di pagina ha un **Control Rig corrente**, scelto nel menu a tendina dell'intestazione. Il menu
elenca i rig associati nella **Level Sequence attiva** e si aggiorna da solo: passa a una
sequenza diversa con il picker aperto e l'elenco viene ricostruito, mantenendo la tua scelta se
quel rig è ancora associato e selezionandolo automaticamente quando è disponibile un solo rig.

I nomi dei controlli nei widget vengono risolti rispetto a questo rig. La stessa pagina pilota quindi qualsiasi
personaggio che condivida la nomenclatura dei controlli del rig: crea una pagina per un bipede e usala per tutto il cast.
(Le [etichette](./widget-label) possono mostrare il nome del rig corrente, così gli animatori sanno sempre quale
personaggio sta pilotando una scheda.)

## Attori target \{#target-actors}

I widget possono anche avere come target degli **attori**, invece dei controlli del rig o insieme a essi. Un pulsante potrebbe
selezionare contemporaneamente un oggetto di scena, una camera e un controllo del rig; uno slider può pilotare direttamente un canale di trasformazione di un attore,
creando chiavi automaticamente nel Sequencer come qualsiasi animazione fatta a mano.

### Spawnable del Sequencer \{#sequencer-spawnables}

I normali attori del livello sono identificati dal loro GUID attore stabile. **Gli spawnable sono la trappola**:
il Sequencer li rigenera con un GUID attore *nuovo* a ogni sessione, il che romperebbe silenziosamente qualsiasi
pagina salvata con quello precedente. Per questo ogni assegnazione di attore su ogni widget memorizza due identità
in parallelo: il GUID dell'attore *e* il **GUID di binding** dell'attore nel Sequencer, che resta stabile
tra un respawn e l'altro. La risoluzione prova il GUID dell'attore e in caso di fallimento ripiega sul binding. Non devi mai
occupartene; è il motivo per cui le pagine ricche di spawnable funzionano ancora la settimana dopo.

## Come vengono assegnati i target \{#how-targets-get-assigned}

In modalità di modifica, con un widget selezionato:

- **Inizializzazione alla creazione** (predefinita, [configurabile](./editor-settings)): l'elenco dei target di un nuovo widget viene
  precompilato con i controlli/attori selezionati al momento dell'aggiunta. Seleziona nel viewport →
  Add Widget: questo è l'intero gesto di creazione.
- I campi dei target nell'Editor degli attributi mostrano un riepilogo risolto e leggibile (nomi effettivi di attori
  e controlli, non GUID), così puoi verificare i collegamenti a colpo d'occhio. I riferimenti interrotti
  (attori eliminati, controlli rinominati) semplicemente non si risolvono, invece di generare errori nella pagina.

## Due filosofie di selezione \{#two-selection-philosophies}

I [pulsanti di selezione](./widget-select-button) offrono entrambi i comportamenti classici di un picker:
**set di selezione** (un clic sostituisce la selezione con il set memorizzato) e **modalità di selezione
interattiva** (i pulsanti rispecchiano costantemente la selezione dell'editor e il clic è additivo; vedi
la pagina del pulsante di selezione per il comportamento completo). La raccolta della selezione è volutamente
indipendente dal rig: l'inizializzazione e la corrispondenza interattiva considerano la tua selezione effettiva nell'editor, non solo
i controlli che appartengono al rig corrente del menu a tendina.
