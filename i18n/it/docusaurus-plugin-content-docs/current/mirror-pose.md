---
sidebar_position: 10
---

# Specchia posa \{#mirror-pose}

*Insegna una volta alla pagina la sua simmetria sinistra/destra; specchia i layout per sempre.*

Lo [strumento Specchia](./editing-tools#mirror) riflette ciò che è selezionato rispetto
all'ancoraggio scelto: ottimo per ribaltamenti occasionali, ma non sa nulla di quali widget
si corrispondano. **Specchia posa** risolve il problema con una **Pose Map**: un registro a livello di pagina che indica
quale widget è il partner sinistro di quale, dove si trova la linea centrale e quale widget
fa da ancoraggio all'insieme. Una volta creata la mappa, specchiare il layout richiede un solo clic, ogni volta, senza
acrobazie di selezione.

## La Pose Map \{#the-pose-map}

Si crea nella finestra di dialogo **Pose Map…** (menu File). Ogni pagina ha esattamente una mappa, con tre
tipi di voci:

- **Ancoraggio**: l'unico widget che definisce l'asse di simmetria (il suo centro). Di solito un
  pulsante radice/bacino posizionato sulla linea centrale della pagina. Nulla viene specchiato finché non si imposta un ancoraggio;
  in caso contrario il pulsante Posa avvisa con una notifica.
- **Widget centrali**: colonna, testa, tutto ciò che si trova sulla linea centrale. Si specchiano su sé stessi
  (ribaltandosi sul posto rispetto all'asse).
- **Coppie**: coppie di widget sinistro/destro: coscia sinistra ↔ coscia destra e così via.

I menu a tendina dei widget nella finestra di dialogo sono in ordine alfabetico e consentono la ricerca, quindi mappare una pagina grande
significa digitare per filtrare invece di scorrere. Un pulsante **Ripristina Map** (con conferma) cancella
l'intera mappa. La mappa viene salvata nel file della pagina, quindi viaggia insieme al layout.

## Come usarla \{#using-it}

La riga Specchia della barra degli strumenti contiene un pulsante **Posa** e un menu a tendina della direzione, dopo i pulsanti
Mirror Horizontal/Vertical.

**Con una selezione**: facendo clic su **Posa** ogni widget selezionato viene specchiato in base al suo
ruolo nella mappa: posizione e rotazione di un widget sinistro o destro vengono riflesse rispetto all'asse dell'ancoraggio e
scritte sul suo *partner* (il lato selezionato è l'origine e non si muove); i widget centrali e
l'ancoraggio si ribaltano sul posto. I widget selezionati che non sono nella mappa vengono saltati con una notifica,
mentre gli altri vengono elaborati.

**Senza selezione**: l'intera mappa viene specchiata con un clic, nella direzione indicata dal menu a tendina
(**Sinistra → Destra** per impostazione predefinita, oppure **Destra → Sinistra**): l'ancoraggio e ogni widget centrale
si ribaltano sul posto e ogni coppia copia il lato di origine su quello di destinazione. È il
pulsante "ho finito il braccio sinistro, replica il destro".

Il menu a tendina della direzione è un controllo temporaneo della pagina: non viene salvato con il file.

## Cosa modifica e cosa no \{#what-it-changes--and-doesnt}

Specchia posa sposta la **geometria dei widget**: posizione e rotazione sull'area di lavoro. Come lo strumento Specchia,
non tocca ciò a cui i widget sono collegati: il pulsante della coscia destra continua a pilotare la coscia
destra; viene solo posizionato esattamente dove si trova quello sinistro, specchiato. È proprio questo lo scopo:
riassegnare i target una volta, poi mantenere i due lati visivamente allineati mentre il layout evolve.
