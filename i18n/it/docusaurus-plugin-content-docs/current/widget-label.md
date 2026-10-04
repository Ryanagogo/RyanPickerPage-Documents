---
sidebar_position: 7
---

# Etichetta \{#label}

*Testo sull'area di lavoro. I clic la attraversano direttamente.*

Le etichette servono ad annotare: intestazioni di sezione ("BRACCIO SINISTRO"), note o immagini con didascalia. Non hanno
alcun comportamento al clic in modalità Live né assegnazione di target: questo significa anche che sono l'unico tipo di widget
(insieme a [Immagine](./widget-image)) che puoi sovrapporre liberamente senza sottrarre clic ai
controlli circostanti.

Un'etichetta può mostrare in tempo reale il **nome del Control Rig corrente** invece di un testo fisso: mettine una in
un angolo della pagina e indicherà sempre all'animatore quale rig sta pilotando questa scheda.

## Creazione \{#authoring}

- **Testo**, dimensione del font, colore del font, **giustificazione**, **a capo automatico**
- **Colore di sfondo** e, facoltativamente, un'**immagine** di sfondo con la propria modalità di adattamento e
  [ritaglio con panoramica/zoom](./widget-image#crop-panzoom)
- **Alfa Immagine**: opacità dell'immagine di sfondo sopra il colore di sfondo, 0–1
- Raggio angolo: le etichette hanno per impostazione predefinita angoli vivi (raggio 0), ma partecipano alla stessa
  [cascata di arrotondamento](./attribute-editor-and-outliner#corner-radius) di tutti gli altri tipi
- Il blocco comune di posizione/dimensione/rotazione

Le etichette eseguono il rendering dello sfondo con lo stesso materiale ad angoli arrotondati di
[Immagine](./widget-image#rendering), quindi arrotondamento e ritaglio dell'immagine si comportano in modo identico in entrambi.

## Scripting \{#scripting}

`URyanPickerLabelFunctionLibrary` (categoria `Ryan Picker Page|Label`):

| Funzione | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | immagine di sfondo |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | ritaglio con panoramica/zoom |
| `GetImageAlpha` / `SetImageAlpha` | limitato a 0–1 |

Le etichette non hanno un'interfaccia di hook degli eventi (non c'è nulla da cliccare o trascinare), ma tutte le
[funzioni comuni dei widget](./blueprint-api) (posizione, dimensione, rotazione, raggio angolo, nome)
si applicano.
