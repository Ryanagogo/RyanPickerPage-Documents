---
sidebar_position: 13
---

# Editor degli attributi e Outliner \{#attribute-editor--outliner}

Le due barre laterali della modalità di modifica. Ognuna ha il proprio pulsante nell'intestazione, quindi puoi tenerne a schermo una, entrambe o
nessuna.

## Outliner (a sinistra) \{#outliner-left}

Un elenco di tutto ciò che si trova nella pagina: fai clic su una riga per selezionare il widget, doppio clic per rinominarlo,
clic destro per spostare/eliminare. Tre viste, che si cambiano con i pulsanti sopra l'elenco:

- **Per tipo**: raggruppato sotto le intestazioni dei sei tipi di widget. La vista di tutti i giorni.
- **Per livello**: raggruppato per [gruppo di livelli](./editing-tools#layer-groups), in ordine di disegno. Qui
  si riorganizza la sovrapposizione: trascina un widget su un altro gruppo per spostarlo lì, trascinalo
  all'interno di un gruppo per riordinarlo, oppure trascina l'intestazione di un gruppo per riordinare i gruppi. Ogni intestazione di gruppo
  ha il proprio interruttore di blocco e si comprime in modo indipendente.
- **Per gruppo**: i [gruppi di interruttori](./widget-toggle#toggle-groups) con i loro membri annidati
  sotto ogni intestazione con nome; anche la ridenominazione dei gruppi avviene qui.

I nomi dei widget sono univoci per pagina (senza distinzione tra maiuscole e minuscole): una ridenominazione in conflitto viene rifiutata e
annullata invece di essere alterata silenziosamente. L'ultima vista usata viene ricordata globalmente tra le sessioni.

## Editor degli attributi (a destra) \{#attribute-editor-right}

Le proprietà del widget selezionato, in un pannello dei dettagli. Modifica **un widget alla
volta**: per applicare la stessa modifica a molti widget, usa invece gli
[strumenti della barra degli strumenti](./editing-tools#toolbar-tools).

I campi visualizzati dipendono dal tipo di widget; ogni pagina di widget documenta i propri. Il
blocco comune (posizione, dimensione, rotazione, raggio angolo, nome del widget) è sempre presente.

Due comportamenti da conoscere:

- **Le modifiche in corso vengono confermate prima del cambio di selezione.** Se stai modificando un campo e
  fai clic su un altro widget, il valore in sospeso viene confermato sul widget che stavi effettivamente
  modificando: non può finire su quello appena selezionato.
- **L'avviso di canale uguale dello slider 2D** compare come banner colorato direttamente nel pannello; vedi
  [Slider 2D](./widget-2d-slider).

## Raggio angolo \{#corner-radius}

L'arrotondamento dei widget viene risolto tramite una cascata a tre livelli, in cui vince il più specifico:

1. **Override per widget**: un flag "override corner radius" più un valore personalizzato sul
   singolo widget.
2. **Class Default per tipo**: ogni tipo di widget può impostare il proprio valore predefinito nel pannello Class
   Defaults della pagina.
3. **Valore predefinito globale**: 10 per i tipi pulsante/slider/interruttore; etichette e immagini hanno per impostazione predefinita
   angoli vivi (0). Il valore di riserva globale si regola nelle [Impostazioni editor](./editor-settings).

I widget non personalizzati seguono la cascata in tempo reale: aumenta il valore predefinito del tipo e ogni widget
di quel tipo senza override si aggiorna di conseguenza.

## Blocco dei widget \{#widget-locking}

Qualsiasi widget può essere bloccato: dalla casella dell'Editor degli attributi, dall'icona del lucchetto nella sua riga
o nell'intestazione del gruppo nell'Outliner, oppure tramite **Blocca**/**Sblocca selezione** nel menu del clic destro.

Il blocco influisce solo sulla modalità di modifica: lì un widget bloccato non può essere selezionato, spostato o ridimensionato, e
le sue maniglie di spostamento/ridimensionamento scompaiono del tutto. La modalità Live e l'elenco dell'Outliner non ne risentono:
un widget bloccato funziona normalmente quando lo si clicca in modalità Live, e puoi comunque vederlo e
rinominarlo nell'Outliner. Bloccare un [gruppo di livelli](./editing-tools#layer-groups) dalla sua intestazione nell'Outliner
blocca allo stesso modo tutti i suoi membri.

Il blocco è pensato per i widget che hai finito di posizionare e che non vuoi spostare per sbaglio mentre
lavori lì intorno: un'immagine di sfondo, ad esempio, o una fila di pulsanti completata.

## Tooltip in modalità Live \{#live-mode-tooltip}

In modalità Live, passando il mouse su un widget compare un tooltip che ne riassume i collegamenti: come si chiama e
quali controlli/attori pilota. È il modo più rapido per esaminare una pagina che non conosci senza
entrare in modalità di modifica.
