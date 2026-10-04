---
sidebar_position: 2
---

# Per iniziare \{#getting-started}

## Aprire una pagina \{#opening-a-page}

**Tools → Ryan Picker Page** apre una pagina in una nuova scheda dell'editor. Il pulsante **New Tab**
nell'intestazione della pagina ne apre altre: ogni scheda è completamente indipendente, con il proprio file, la propria selezione
di Control Rig e la propria vista dell'area di lavoro. Rinominando una pagina (il titolo è modificabile in modalità di modifica) si rinomina
anche la sua scheda, così una fila di picker aperti resta facile da navigare.

## Due modalità \{#two-modes}

Il pulsante della modalità di modifica nell'intestazione commuta l'intera pagina tra:

**Modalità Live**: la modalità per animare. Facendo clic sui widget si selezionano controlli del rig e attori; trascinando
gli slider si pilotano le trasformazioni; passando il mouse su un widget compare un tooltip che mostra a cosa è collegato. Il layout
in sé non è modificabile.

**Una pagina finita vive in modalità Live.** Tutto ciò che si trova in
[Strumenti di modifica e dell'area di lavoro](./editing-tools) esiste per portarti fin qui.

**Modalità di modifica**: la modalità di costruzione. I widget mostrano maniglie per spostare, ridimensionare e ruotare, facendo clic destro
su un punto vuoto dell'area di lavoro si apre il menu **Add Widget** e compaiono due barre laterali comprimibili: l'
[Outliner](./attribute-editor-and-outliner) a sinistra e l'
[Editor degli attributi](./attribute-editor-and-outliner) a destra.

## Crea la tua prima pagina \{#build-your-first-page}

Un picker minimo per una gamba, dall'inizio alla fine:

1. Apri una Level Sequence che contiene il personaggio e il suo Control Rig, quindi apri una pagina del picker.
   Il menu a tendina dei rig nell'intestazione si popola dalla sequenza attiva: scegli il tuo rig (viene
   selezionato automaticamente se ce n'è uno solo).
2. Entra in **modalità di modifica**.
3. Nel viewport o nell'Anim Outliner, seleziona il controllo della coscia. Fai clic destro sull'area di lavoro →
   **Add Widget → Pulsante di selezione**. Per impostazione predefinita, un nuovo pulsante ricava il suo elenco di target dalla
   selezione corrente, quindi questo pulsante pilota già la coscia.
4. Ripeti per polpaccio e piede. Usa il campo etichetta nell'
   [Editor degli attributi](./attribute-editor-and-outliner) per dare un nome a ogni pulsante e trascinali fino a formare una
   colonna a forma di gamba.
5. Seleziona tutti e tre e prova gli [strumenti di allineamento](./editing-tools) per raddrizzare la colonna.
6. Esci dalla modalità di modifica. Fai clic sui pulsanti: ognuno seleziona il proprio controllo. Questo è il ciclo di base; tutto il resto
   è rifinitura.
7. **File → Salva** scrive la pagina in un file JSON nella posizione che preferisci; vedi
   [Salvataggio, caricamento e file](./save-load-and-files).

## Annulla, ripeti e reti di sicurezza \{#undo-redo-and-safety-nets}

Ogni modifica in modalità di modifica (spostamenti, ridimensionamenti, aggiunte, eliminazioni, incollaggi, modifiche di colore) finisce nella
cronologia degli annullamenti della pagina (30 passaggi per impostazione predefinita; vedi [Impostazioni editor](./editor-settings)). Ctrl+Z /
Ctrl+Y, oppure i pulsanti dell'intestazione. Il trascinamento all'interno di un selettore di colore viene raggruppato in un unico passaggio di annullamento
invece di uno per ogni movimento, quindi annullare una modifica di colore annulla l'intero trascinamento.

I [segnalibri](./bookmarks) hanno una propria cronologia degli annullamenti separata: annullare modifiche al layout non altera mai
le viste salvate, e viceversa.

## Riprendere da dove eri rimasto \{#picking-up-where-you-left-off}

Per ogni file salvato, il plugin ricorda panoramica e zoom dell'area di lavoro, quale Control Rig era attivo e
se eri in modalità di modifica o Live; tutto viene ripristinato automaticamente al successivo caricamento di quel file,
su questo computer. Queste informazioni risiedono fuori dal file della pagina, quindi condividendo una pagina con un
collega condividi il layout, non le tue abitudini di visualizzazione. Vedi
[Salvataggio, caricamento e file](./save-load-and-files#session-state).
