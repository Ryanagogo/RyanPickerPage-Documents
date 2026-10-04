---
sidebar_position: 3
---

# Przycisk wyboru \{#select-button}

*Koń pociągowy: przycisk, który zaznacza rzeczy.*

## W trybie Live \{#in-live-mode}

Kliknięcie przycisku wyboru zaznacza przypisane do niego kontrolki Control Rig i aktorów docelowych — w
viewporcie, w rigu i w Sequencerze, jeśli są tam powiązane — a następnie uruchamia jego
[skrypt w Pythonie](./python-scripting), jeśli go ma. Przycisk może obejmować jedną kontrolkę lub cały
zestaw („zaznacz wszystkie palce”) i dowolnie łączyć kontrolki riga ze zwykłymi aktorami.

**Ctrl+kliknięcie** przełącza zamiast zastępować: jeśli nie wszystkie cele przycisku są jeszcze zaznaczone,
zostają dodane do bieżącego zaznaczenia; jeśli już są, zostają z niego usunięte — pozostała
część zaznaczenia w obu przypadkach pozostaje nietknięta.

## Dwa sposoby zaznaczania \{#two-selection-behaviors}

Przycisk wyboru działa w jednym z dwóch trybów, przełączanych polem **Interaktywny Tryb Wyboru**
w Edytorze atrybutów:

### Tryb zestawu zaznaczenia (domyślny) \{#selection-set-mode-default}

Przycisk to zapisany zestaw zaznaczenia. Kliknięcie → jego cele stają się zaznaczeniem. Przycisk
nie śledzi tego, co zaznaczasz gdzie indziej.

### Interaktywny Tryb Wyboru \{#interactive-selection-mode}

Przycisk staje się bieżącym odzwierciedleniem zaznaczenia w edytorze, tak jak działają tradycyjne pickery
animacyjne:

- Strona kilka razy na sekundę odpytuje bieżące zaznaczenie w viewporcie/rigu i **podświetla
  przycisk**, gdy wszystkie jego cele są częścią bieżącego zaznaczenia — zaznacz kontrolkę w
  viewporcie, a jej przycisk na stronie sam się podświetli.
- Kliknięcie zaznacza **addytywnie** — cele przycisku dołączają do tego, co już jest zaznaczone,
  zamiast to zastępować, więc klikanie kolejnych interaktywnych przycisków buduje zaznaczenie.
- Ctrl+kliknięcie usuwa cele przycisku z zaznaczenia, jak wyżej.

Ten tryb jest przeznaczony dla **jednej kontrolki (lub jednego aktora) na przycisk**. Włączenie go w przycisku
z wieloma celami działa, ale wyświetla ostrzeżenie — przycisk z wieloma celami nie może
jednoznacznie odzwierciedlić częściowego zaznaczenia. Odpytywanie działa tylko wtedy, gdy karta strony jest na
pierwszym planie, a tryb edycji jest wyłączony, więc karty w tle nic nie kosztują.

Nowe przyciski mogą domyślnie startować w dowolnym z trybów — ustawia się to w [Ustawieniach edytora](./editor-settings).

## Tworzenie \{#authoring}

Gdy przycisk jest zaznaczony w trybie edycji, Edytor atrybutów udostępnia:

- **Etykietę** (i to, czy ma być wyświetlana), nazwę widgetu, rozmiar czcionki
- **Kolor tła** i **kolor czcionki**
- **Nazwy kontrolek** — rozwiązywane względem bieżącego riga strony; zobacz
  [Control Rig i aktorzy docelowi](./control-rig-and-targets)
- **Aktorów docelowych** — rozwiązane, czytelne podsumowanie wszystkich przypisanych aktorów
- Pole **Interaktywny Tryb Wyboru**
- **Skrypt Python** — wielowierszowy; uruchamiany po zaznaczeniu przy każdym kliknięciu
- Pozycję, rozmiar, obrót, promień narożnika — wspólne dla wszystkich widgetów

Nowe przyciski pobierają listę celów z tego, co jest zaznaczone w chwili ich utworzenia (to
[ustawienie](./editor-settings), domyślnie włączone) — najszybsza pętla tworzenia to *zaznacz w
viewporcie, dodaj przycisk, gotowe*.

## Skrypty \{#scripting}

Funkcje Blueprint znajdują się w `URyanPickerSelectButtonFunctionLibrary`
(kategoria `Ryan Picker Page|SelectControl`); wspólne funkcje transformacji/wyglądu są w
[wspólnej bibliotece widgetów](./blueprint-api).

| Funkcja | |
|---|---|
| `GetControlNames` | nazwy przypisanych kontrolek riga |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | przypisani aktorzy, w obu przestrzeniach tożsamości — zobacz [Spawnable w Sequencerze](./control-rig-and-targets#sequencer-spawnables) |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | setter ostrzega (nie blokuje) w przypadku przycisków z wieloma celami |

Podklasy Blueprint mogą implementować zdarzenia interfejsu `BI_RyanPickerSelectButton`:
`OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`,
`OnTargetActorsSelected`, a także [trzy zdarzenia cyklu życia](./blueprint-api#event-hooks) wspólne dla każdego
typu widgetu. W sekcji [Własne Blueprinty widgetów](./blueprint-api#custom-widget-blueprints) opisano,
jak podklasa pojawia się w menu Add Widget.
