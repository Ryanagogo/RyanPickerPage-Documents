---
sidebar_position: 15
---

# Impostazioni editor \{#editor-settings}

**File → Settings…** apre la finestra di dialogo delle impostazioni globali del plugin. Si tratta di preferenze **per computer**
che si applicano a ogni pagina aperta, a differenza dei Class Defaults per pagina (salvati nel
Blueprint della pagina) e dei dati per file (salvati nel file della pagina).

## Comportamento dei nuovi widget \{#new-widget-behavior}

| Impostazione | Predefinito | |
|---|---|---|
| Seed New Widget Targets From Selection | attivo | i nuovi pulsanti/slider precompilano i target dalla selezione corrente; vedi [Come vengono assegnati i target](./control-rig-and-targets#how-targets-get-assigned) |
| Default Interactive Selection Mode | disattivo | i nuovi pulsanti di selezione partono in [modalità selezione interattiva](./widget-select-button#interactive-selection-mode) |
| Dimensione predefinita nuovo widget | 200 × 100 | con una casella **Override**: disattivata, prevale il valore dei Class Defaults della pagina; attivata, il valore di questa finestra lo sostituisce |
| Raggio angolo predefinito | 10 | stessa logica della casella Override; è il valore di riserva globale nella [cascata di arrotondamento](./attribute-editor-and-outliner#corner-radius) |

## Categorie degli Sticky Defaults \{#sticky-defaults-categories}

Sette caselle di controllo (**Colore, Font, Raggio angolo, Dimensione, Rotazione, Testo, Immagine**, tutte attive per
impostazione predefinita) determinano quali gruppi di proprietà
[Copy to Sticky Defaults](./editing-tools#widget-defaults) trasferisce effettivamente sui nuovi widget.
Disattiva ad esempio Dimensione e Rotazione per rendere gli sticky defaults puramente estetici.

## Pagina e manutenzione \{#page--housekeeping}

| Impostazione | Predefinito | |
|---|---|---|
| Numero predefinito di segnalibri | 4 | slot [segnalibro](./bookmarks) utente in una nuova pagina (max 8) |
| Profondità dello stack di annullamento | 30 | passaggi di annulla/ripeti della pagina principale |
| Età massima stato sessione | 90 giorni | le voci dello [stato della sessione](./save-load-and-files#session-state) più vecchie vengono eliminate; 0 disattiva l'eliminazione |

## Lo schema di override \{#the-override-pattern}

Per i valori che esistono anche come Class Defaults della pagina (dimensione del widget, raggio angolo), questa finestra
si fa deliberatamente da parte: i Class Defaults del Blueprint della pagina prevalgono finché non selezioni qui la
casella **Override** corrispondente. In questo modo le regolazioni di un Blueprint di pagina condiviso restano intatte per impostazione predefinita,
pur consentendo a un singolo computer di imporre i propri valori.
