---
sidebar_position: 8
---

# Immagine \{#image}

*Grafica sull'area di lavoro: ritratti dei personaggi, schemi del corpo, sfondi.*

Le immagini sono la base visiva di un buon picker: un turnaround del personaggio o una sagoma del corpo
dietro i pulsanti trasforma una griglia astratta di pulsanti in qualcosa di leggibile a colpo d'occhio. Come le
[etichette](./widget-label), non hanno alcun comportamento al clic in modalità Live e partono nel
[gruppo di livelli](./editing-tools#layer-groups) **Immagini**, il più arretrato dei tre gruppi
predefiniti, quindi un'immagine appena aggiunta non coprirà un controllo interattivo a meno che tu non riordini
in seguito i gruppi.

## Ritaglio con panoramica/zoom \{#crop-panzoom}

Invece di ritagliare le texture in anticipo in un editor di immagini, inquadrale direttamente sulla pagina: **Image Scale**
ingrandisce la texture di origine e **Image Offset** sposta la finestra visibile su di essa. Un solo
foglio del personaggio può alimentare una dozzina di widget Immagine, ognuno dei quali inquadra una diversa parte del corpo. Gli stessi
due controlli esistono per l'immagine di sfondo di un'etichetta.

## Creazione \{#authoring}

- **Texture**
- **Modalità Adattamento**: come la texture si adatta al rettangolo del widget
- **Image Scale** / **Image Offset**: la finestra di ritaglio
- **Colore di sfondo**: si trova dietro la texture; è anche il colore verso cui sfuma **Alfa Immagine**
- **Alfa Immagine**: opacità della texture sopra il colore di sfondo, 0–1
- Raggio angolo (per impostazione predefinita angoli vivi, come le etichette)
- Il blocco comune di posizione/dimensione/rotazione

## Rendering \{#rendering}

Immagini ed etichette vengono disegnate tramite un'istanza dinamica di un unico materiale condiviso
(`M_RyanPickerRoundedImage`) invece che con un semplice pennello texture. Arrotondamento degli angoli, adattamento secondo la modalità
e finestra di ritaglio vengono calcolati tutti in quell'unico passaggio del materiale: per questo i due
tipi si comportano in modo identico al pixel e il ritaglio non ha costi aggiuntivi.

## Scripting \{#scripting}

`URyanPickerImageFunctionLibrary` (categoria `Ryan Picker Page|Image`):

| Funzione | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | ritaglio con panoramica/zoom |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImageAlpha` / `SetImageAlpha` | limitato a 0–1 |

Nessuna interfaccia di hook degli eventi; si applicano le [funzioni comuni dei widget](./blueprint-api).
