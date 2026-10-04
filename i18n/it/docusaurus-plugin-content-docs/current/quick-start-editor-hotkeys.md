# Scorciatoie \{#hotkeys}

Tutte le scorciatoie da tastiera e i gesti del mouse a cui risponde l'editor del picker.

### Regole di focus e modalità \{#focus-and-mode-rules}

- **Le scorciatoie da tastiera funzionano solo quando l'area di lavoro ha il focus.** L'area di lavoro ottiene il focus non appena ci fai clic sopra. Se il focus è su un campo di una barra laterale o sull'elenco dell'Outliner, i tasti premuti vengono inviati lì.
- Solo la scorciatoia **F** funziona in modalità Live. Tutte le altre scorciatoie da tastiera sono disponibili solo in modalità di modifica.
- La panoramica trascinando con il tasto destro e lo zoom con la rotellina del mouse funzionano sia in modalità di modifica sia in modalità Live.

### Tastiera \{#keyboard}

| Tasto | Azione | Modalità |
|---|---|---|
| **Canc** | Elimina i widget selezionati | Solo modifica |
| **F** | Centra la vista dell'area di lavoro sulla selezione corrente (lo zoom resta invariato) | Modifica + Live |
| **Alt + clic su un pulsante** | Centra il viewport sugli oggetti selezionati facendo clic su un pulsante |Solo Live|
| **Alt + selezione dei pulsanti trascinando** | Centra il viewport sugli oggetti selezionati tracciando un riquadro sui pulsanti |Solo Live|
| **Tasti freccia** | Sposta la selezione (predefinito 2 px) | Solo modifica |
| **Maiusc + tasti freccia** | Sposta la selezione con un passo maggiore (predefinito 10 px) | Solo modifica |
| **Ctrl + X** | Taglia i widget selezionati | Solo modifica |
| **Ctrl + C** | Copia i widget selezionati | Solo modifica |
| **Ctrl + V** | Incolla in corrispondenza del cursore del mouse | Solo modifica |
| **Ctrl + Z** | Annulla | Solo modifica |
| **Ctrl + Maiusc + Z** oppure **Ctrl + Y** | Ripeti | Solo modifica |

Le due distanze di spostamento da tastiera si impostano nel pannello Class Defaults della pagina. Sono indipendenti dallo strumento **Sposta** della barra degli strumenti, che ha un proprio campo per la distanza.

Copia / taglia / incolla funziona tra le schede di pagina aperte.

**Non assegnati:** non esistono Ctrl+A (seleziona tutto), Ctrl+S (salva), Ctrl+D (duplica) né Esc (deseleziona). Duplica, Allinea, Distribuisci e Specchia si trovano solo nel menu del clic destro o nella barra degli strumenti.

### Mouse: selezionare i widget \{#mouse---selecting-widgets}

Solo Ctrl e Maiusc modificano il funzionamento della selezione.

| Gesto | Azione |
|---|---|
| Clic su un widget | Seleziona solo quel widget |
| Ctrl + clic su un widget | Aggiunge o rimuove quel widget dalla selezione |
| Maiusc + clic su un widget | Aggiunge quel widget alla selezione |
| Clic su un punto vuoto dell'area di lavoro | Annulla la selezione |
| Trascinamento su un punto vuoto dell'area di lavoro | Traccia un riquadro di selezione |
| Ctrl o Maiusc + trascinamento di un riquadro di selezione | Aggiunge i widget nel riquadro alla selezione corrente invece di sostituirla |
| Clic su una riga dell'Outliner | Seleziona quel widget, anche se è bloccato |
| Doppio clic su una riga dell'Outliner | Lo rinomina |

### Mouse: spostare, ridimensionare, ruotare (modalità di modifica) \{#mouse---moving-resizing-rotating-edit-mode}

Le otto maniglie di ridimensionamento e la maniglia di spostamento compaiono solo in modalità di modifica.

| Gesto | Azione |
|---|---|
| Trascinare la maniglia di spostamento | Sposta i widget selezionati |
| **Alt** + trascinare la maniglia di spostamento | Ruota invece di spostare |
| **Alt + Maiusc** + trascinare la maniglia di spostamento | Ruota agganciando a passi di 15 gradi |
| Trascinare una maniglia di bordo o d'angolo | Ridimensiona (funziona correttamente anche sui widget ruotati) |

Tieni premuto Alt prima di premere sulla maniglia di spostamento per iniziare a ruotare. Tieni premuto Maiusc durante il trascinamento per agganciare.

### Mouse: navigare nell'area di lavoro \{#mouse---navigating-the-canvas}

| Gesto | Azione | Modalità |
|---|---|---|
| Rotellina del mouse | Zoom verso il cursore | Modifica + Live |
| Trascinamento con il tasto destro | Panoramica dell'area di lavoro | Modifica + Live |
| Clic destro (senza trascinare) | Apre il menu contestuale | Solo modifica |
| Trascinare il divisore di una barra laterale | Ridimensiona il pannello dell'Outliner o dell'Editor degli attributi | Solo modifica |

### Segnalibri \{#bookmarks}

| Gesto | Azione |
|---|---|
| Clic su un segnalibro | Applica la vista salvata |
| **Ctrl + Maiusc + clic** su un segnalibro | Salva la vista corrente in quel segnalibro (sovrascrivendolo) |
| Clic destro su un segnalibro | Rinomina o cancella il segnalibro |
