---
sidebar_position: 14
---

# Salvataggio, caricamento e file \{#saving-loading--files}

Una pagina viene salvata in un unico **file JSON**, in qualsiasi posizione del disco tu scelga. Le pagine non sono asset
Unreal: non risiedono in `Content/`, non richiedono il progetto in cui sono state create e possono essere
condivise, inviate via e-mail o messe sotto controllo di versione come qualsiasi file di testo.

Un salvataggio contiene l'intera pagina: ogni widget con tutti i collegamenti e gli stili, la
[fila dei segnalibri](./bookmarks), i gruppi di interruttori e la [Pose Map](./mirror-pose).

## Il menu File \{#the-file-menu}

| Voce | |
|---|---|
| **Salva** | riscrive il file corrente della pagina; per una pagina mai salvata si comporta come Salva con nome |
| **Salva con nome** | finestra di salvataggio nativa |
| **Carica** | finestra di apertura nativa |
| **Carica recente** | file usati di recente, senza finestra di dialogo |
| **Ricarica** | rilegge il file corrente dal disco |
| **Pose Map…** | la [finestra Pose Map](./mirror-pose#the-pose-map) |
| **Settings…** | la finestra [Impostazioni editor](./editor-settings) |

Le finestre di salvataggio e caricamento si riaprono nelle ultime cartelle utilizzate.

## Il menu Aiuto \{#the-help-menu}

Le voci sono interamente basate sui dati: un elenco di elementi Etichetta/URL/Tooltip modificato nel pannello Class
Defaults della pagina. Aggiungi, rimuovi, riordina o modifica la destinazione di una voce senza cambiare codice né ricompilare;
facendo clic su una voce, il relativo URL si apre nel browser predefinito del sistema operativo. Una voce è fissa anziché
basata sui dati: **Informazioni**, che mostra la versione del plugin, la versione di Unreal Engine e
l'autore in una semplice finestra informativa.

## I vecchi file continuano a caricarsi \{#old-files-keep-loading}

I file di salvataggio hanno uno schema versionato. Il caricamento di un file più vecchio lo migra automaticamente attraverso ogni
modifica di schema intermedia: le pagine create con le prime versioni del plugin si caricano in quella
attuale, e basta salvarle di nuovo per scriverle nella versione corrente. I file che non possono essere
migrati (o che provengono da un plugin *più recente* del tuo) vengono rifiutati con un errore chiaro
invece di essere caricati a metà.

Una nota sulla privacy: lo [script Python](./python-scripting) di un pulsante di selezione è memorizzato
nel file con codifica Base64: codificato, non cifrato. Tratta i file di pagina che contengono script come
gli script stessi.

## Stato della sessione \{#session-state}

Accanto al file della pagina, ma mai al suo interno, il plugin ricorda, per ogni percorso di file, dove eri
rimasto: panoramica/zoom dell'area di lavoro, il Control Rig attivo, modalità di modifica o Live. Carica lo stesso file
domani e l'area di lavoro sarà esattamente dove l'hai lasciata. Poiché queste informazioni risiedono sul tuo computer, indicizzate per percorso
del file, condividere una pagina condivide solo il layout: chi la riceve ottiene il proprio stato di visualizzazione.
Le voci non utilizzate per 90 giorni (configurabile) vengono eliminate.

## Dove il plugin conserva i propri file \{#where-the-plugin-keeps-its-own-files}

```
%APPDATA%\RyanTechAnimTools\RyanPicker\
├── settings.json              # file recenti, ultime cartelle delle finestre, vista dell'Outliner
├── editor_settings.json       # i valori della finestra Impostazioni editor
└── page_session_state.json    # stato della sessione per file, indicizzato per percorso assoluto
```

Sono specifici per utente e per computer. Eliminandoli si perdono comodità (file recenti, viste
ripristinate, impostazioni), ma mai i dati delle pagine: le pagine esistono solo nei file che hai salvato.
