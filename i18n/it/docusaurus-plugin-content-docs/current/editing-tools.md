---
sidebar_position: 9
---

# Strumenti di modifica e dell'area di lavoro \{#editing--canvas-tools}

Tutto ciò che è descritto in questa pagina avviene in **modalità di modifica**. L'area di lavoro si può spostare e ingrandire in entrambe
le modalità: costruisci al livello di zoom che preferisci.

## Selezione \{#selection}

- Fai clic su un widget per selezionarlo; Maiusc/Ctrl+clic estende la selezione.
- Trascina su un punto vuoto dell'area di lavoro per tracciare un rettangolo di selezione.
- I widget selezionati mostrano otto maniglie di ridimensionamento più una maniglia di rotazione, ognuna con il proprio cursore.

L'Editor degli attributi segue la selezione singola; gli strumenti della barra degli strumenti descritti sotto servono a modificare molti
widget contemporaneamente.

## Manipolazione diretta \{#direct-manipulation}

Trascina un widget per spostarlo. Trascina una maniglia per ridimensionarlo: il ridimensionamento funziona correttamente anche sui widget
ruotati. Trascina la maniglia di rotazione per ruotare un widget attorno al suo centro; la rotazione viene memorizzata in
gradi e i widget ruotati restano pienamente funzionanti in modalità Live (uno slider ruotato si trascina lungo
il proprio asse ruotato). Tieni premuto Maiusc mentre ruoti per agganciare a incrementi di 15°. Ruotare una selezione di più widget
fa girare rigidamente l'intero gruppo attorno a un perno comune (ancorato all'ultimo widget
selezionato), mentre ogni widget continua anche a ruotare attorno al proprio centro.

Un widget bloccato è escluso da tutto questo; vedi [Blocco dei widget](./attribute-editor-and-outliner#widget-locking).

I tasti freccia spostano di poco la selezione (con Maiusc il passo è maggiore; entrambe le distanze sono Class
Defaults della pagina). Lo strumento **Sposta** della barra degli strumenti aggiunge frecce a schermo con una propria distanza
impostata in un campo numerico, per passi ripetuti ed esatti.

## Strumenti della barra degli strumenti \{#toolbar-tools}

È attiva una sola riga di strumenti alla volta, attivabile dall'intestazione:

| Strumento | Agisce sulla selezione |
|---|---|
| **Immagine** | assegna una texture a ogni widget selezionato |
| **Colore** | applica un colore di sfondo/font a ogni widget selezionato |
| **Etichetta** | imposta il testo dell'etichetta e la dimensione del font per tutta la selezione |
| **Dimensione** | imposta larghezza/altezza esatte per tutta la selezione |
| **Sposta** | frecce a passo fisso, come sopra |
| **Allinea** | sinistra/destra/alto/basso, centri orizzontale/verticale e distribuzione uniforme |
| **Specchia** | vedi sotto |

Le modifiche di colore dalla barra degli strumenti (e dall'Editor degli attributi) vengono raggruppate mentre trascini all'interno del
selettore di colore: un passaggio di annullamento per sessione di colore, non per ogni movimento del mouse.

## Specchia \{#mirror}

Costruisce un lato di una pagina a partire dall'altro: **Mirror Horizontal** / **Mirror Vertical** riflettono
la posizione di ogni widget selezionato rispetto a un asse e ne invertono la rotazione. L'asse si imposta con il
menu a tendina **Mirror Mode**:

| Modalità | Riflette rispetto a |
|---|---|
| Sé stesso | il centro di ogni widget: i widget si ribaltano sul posto |
| Ultima selezione (incl.) | il centro dell'ultimo widget selezionato; si sposta anch'esso |
| Ultima selezione (escl.) | il centro dell'ultimo widget selezionato; resta dov'è |
| Area visibile | il centro di ciò che vedi in quel momento |

Lo specchio è solo geometrico: non rinomina i controlli né scambia i canali degli slider. Il flusso di lavoro
tipico è specchiare e poi riassegnare: specchia i widget del braccio sinistro, poi punta le copie verso i
controlli del lato destro. Per uno specchio sinistra/destra ripetibile che ricorda le coppie, vedi
[Specchia posa](./mirror-pose).

## Gruppi di livelli \{#layer-groups}

Ogni widget appartiene a un **gruppo di livelli**, e l'ordine di disegno è semplicemente quello dei membri di ogni gruppo,
gruppo per gruppo, dal davanti al retro. Tre gruppi (**Immagini**, **Etichette**, **Controlli**) vengono creati
in ogni pagina e non possono essere eliminati (eliminando qualsiasi altro gruppo, i suoi membri tornano al
gruppo predefinito del loro tipo). Oltre a questi tre, puoi creare, rinominare, riordinare e bloccare
tutti i gruppi che vuoi: un gruppo bloccato blocca ogni widget al suo interno, proprio come il
[blocco](./attribute-editor-and-outliner#widget-locking) di un singolo widget.

Fai clic destro su un widget per **Porta in primo piano / Step Up / Step Down / Invia sullo sfondo**, all'interno del suo gruppo. Lo spostamento
di un widget tra gruppi, il riordino dei gruppi stessi e il blocco si effettuano tutti dalla
[vista Per livello](./attribute-editor-and-outliner#outliner-left) dell'Outliner: consulta quella pagina per l'interfaccia
completa di gestione con trascinamento.

## Copia, taglia, incolla \{#copy-cut-paste}

Ctrl+C / Ctrl+X / Ctrl+V su qualsiasi selezione. Gli elementi incollati compaiono in corrispondenza del cursore; è possibile incollare in un'altra scheda
di pagina aperta, e Incolla sul posto mantiene le posizioni esatte per i trasferimenti tra pagine.
I widget incollati mantengono il proprio nome quando possibile, con un suffisso numerico in caso di duplicati. I gruppi di
interruttori possono essere copiati e incollati [come gruppi interi](./widget-toggle#toggle-groups).

## Valori predefiniti dei widget \{#widget-defaults}

L'aspetto di un widget appena aggiunto è determinato a livelli, dal meno al più specifico:

1. **Class Defaults**: valori iniziali per tipo (colori, dimensioni, font…) modificabili nel
   pannello Class Defaults della pagina, una categoria per tipo di widget.
2. **Sticky Defaults**: clic destro su qualsiasi widget → **Copy to Sticky Defaults**, e i widget
   di quel tipo creati in seguito lo replicheranno. Quali categorie di proprietà vengono mantenute (colore, font, raggio angolo,
   dimensione, rotazione, testo, immagine) si sceglie nelle [Impostazioni editor](./editor-settings).

Questi valori si applicano solo ai widget aggiunti dal menu Add Widget: i widget incollati e caricati mantengono i propri
dati.
