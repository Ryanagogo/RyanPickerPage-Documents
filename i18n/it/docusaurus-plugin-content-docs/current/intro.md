---
sidebar_position: 1
---

# Introduzione \{#introduction}

**Ryan Picker Page** è un picker di animazione per Unreal Engine: un'area di lavoro con pulsanti, slider,
interruttori, etichette e immagini che disponi una volta per personaggio e poi usi per selezionare e pilotare
i controlli del Control Rig (e gli attori del livello) con un solo clic, senza dover cercare nel viewport,
nella gerarchia del rig o nell'albero del Sequencer a metà inquadratura.

La stessa finestra è sia il picker sia il suo editor. Passa alla modalità di modifica per costruire il layout; torna
alla modalità Live per animare. Le pagine vengono salvate come file JSON portabili che puoi condividere
tra progetti e con i colleghi.

## Requisiti \{#requirements}

- Unreal Engine **5.6 – 5.8**
- Questi plugin del motore abilitati (il plugin li dichiara come dipendenze): **Control Rig**,
  **Synthesis**, **Python Editor Script Plugin**

Il plugin è solo per l'editor. Non entra mai in una build pacchettizzata e non aggiunge nulla in fase di esecuzione.

## Installazione \{#installation}

1. Copia la cartella `RyanPickerPage` nella directory `Plugins/` del tuo progetto.
2. Abilitalo in **Edit → Plugins** e riavvia l'editor.
3. Apri un picker da **Tools → Ryan Picker Page**.

## Come orientarsi in questa documentazione \{#finding-your-way-around-these-docs}

Se sei un **animatore** che usa una pagina creata da qualcun altro, inizia da
[Per iniziare](./getting-started) e dalle sezioni sulla modalità Live delle pagine dei widget.

Se **crei pagine**, leggi in quest'ordine: [Per iniziare](./getting-started) →
[Control Rig e attori target](./control-rig-and-targets) → le pagine dei tipi di widget →
[Strumenti di modifica e dell'area di lavoro](./editing-tools).

Se sei un **TD che estende il plugin**, vai direttamente alle pagine
[API Blueprint](./blueprint-api) e [Scripting Python](./python-scripting), che spiegano anche
come distribuire le tue varianti di widget come sottoclassi Blueprint che compaiono nel menu Add Widget.

### Tutte le pagine \{#all-pages}

| Sezione | Pagine |
|---|---|
| Nozioni di base | [Per iniziare](./getting-started) |
| Tipi di widget | [Pulsante di selezione](./widget-select-button) · [Slider 1D](./widget-1d-slider) · [Slider 2D](./widget-2d-slider) · [Interruttore](./widget-toggle) · [Etichetta](./widget-label) · [Immagine](./widget-image) |
| Creare pagine | [Strumenti di modifica e dell'area di lavoro](./editing-tools) · [Specchia posa](./mirror-pose) · [Segnalibri](./bookmarks) |
| Come funziona il targeting | [Control Rig e attori target](./control-rig-and-targets) · [Editor degli attributi e Outliner](./attribute-editor-and-outliner) |
| File e impostazioni | [Salvataggio, caricamento e file](./save-load-and-files) · [Impostazioni editor](./editor-settings) |
| Estensione | [API Blueprint](./blueprint-api) · [Scripting Python](./python-scripting) |
