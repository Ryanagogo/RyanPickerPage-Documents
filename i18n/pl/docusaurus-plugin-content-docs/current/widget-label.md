---
sidebar_position: 7
---

# Etykieta \{#label}

*Tekst na płótnie. Kliknięcia przechodzą przez nią na wylot.*

Etykiety służą do opisywania: nagłówki sekcji („LEWE RAMIĘ”), notatki lub obrazy z podpisami. W trybie Live
nie reagują na kliknięcia i nie mają przypisanych celów — co oznacza też, że są jedynym typem widgetu
(obok [Obrazu](./widget-image)), który możesz swobodnie nakładać warstwami, nie przechwytując kliknięć
otaczających go kontrolek.

Etykieta może zamiast stałego tekstu wyświetlać na bieżąco **nazwę aktualnego Control Rig** — umieść ją w
rogu strony, a zawsze pokaże animatorowi, którym rigiem steruje ta karta.

## Tworzenie \{#authoring}

- **Tekst**, rozmiar czcionki, kolor czcionki, **wyrównanie**, **automatyczne zawijanie**
- **Kolor tła** i opcjonalnie **obraz** tła z własnym trybem rozciągania oraz
  [kadrowaniem z przesunięciem/powiększeniem](./widget-image#crop-panzoom)
- **Alfa Obrazu** — krycie tego obrazu tła nad kolorem tła, 0–1
- Promień narożnika: etykiety mają domyślnie ostre narożniki (promień 0), ale podlegają tej samej
  [kaskadzie zaokrągleń](./attribute-editor-and-outliner#corner-radius) co wszystkie inne typy
- Wspólny blok pozycji/rozmiaru/obrotu

Etykiety renderują tło tym samym materiałem z zaokrąglonymi narożnikami co
[Obraz](./widget-image#rendering), więc zaokrąglanie i kadrowanie obrazu działają w obu identycznie.

## Skrypty \{#scripting}

`URyanPickerLabelFunctionLibrary` (kategoria `Ryan Picker Page|Label`):

| Funkcja | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | obraz tła |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | kadrowanie z przesunięciem/powiększeniem |
| `GetImageAlpha` / `SetImageAlpha` | ograniczone do 0–1 |

Etykiety nie mają interfejsu podpięć zdarzeń — nie ma czego klikać ani przeciągać — ale obowiązują je wszystkie
[wspólne funkcje widgetów](./blueprint-api) (pozycja, rozmiar, obrót, promień narożnika, nazwa).
