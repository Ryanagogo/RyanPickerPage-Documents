---
sidebar_position: 4
---

# Slider 1D \{#1d-slider}

*Slider połączony z dokładnie jednym kanałem transformacji.*

## W trybie Live \{#in-live-mode}

Przeciąganie slidera zapisuje jego wartość do **jednego kanału** — przesunięcia, obrotu lub skali, X, Y
lub Z — każdej przypisanej kontrolki Control Rig i aktora docelowego. Nic innego nie jest ruszane:
slider odczytuje bieżącą transformację każdego celu, podmienia jedyny kanał, który do niego należy, i zapisuje
transformację z powrotem. Zmiany wartości przechodzą tą samą ścieżką co reszta pluginu,
łącznie z auto-key Sequencera, więc ruchy slidera tworzą klucze tak jak ręcznie przesuwane kontrolki.

Ponieważ slider 1D nigdy nie zajmuje kanałów, które do niego nie należą, kilka sliderów może sterować różnymi
kanałami *tej samej* kontrolki jednocześnie — „uniesienie” przez Przesunięcie Y i „przetoczenie” przez Obrót Z na jednej
kontrolce stopy nie będą ze sobą walczyć.

Kliknięcie slidera prawym przyciskiem oferuje **Zresetuj do wartości początkowej**, co przywraca ustaloną
wartość domyślną.

## Model wartości \{#value-model}

Liczą się trzy liczby, a zmieniają się tylko dwie z nich:

- **Wartość Minimalna / Wartość Maksymalna** — zakres, na który odwzorowywane jest przeciąganie.
- **Current Value** — bieżąca wartość; przeciąganie ją zapisuje i to ona jest stosowana do celów.
- **Wartość Początkowa** — ustalona przez autora wartość domyślna, której przeciąganie *nigdy* nie zmienia. Zmienia się ją tylko
  celowo w Edytorze atrybutów, dzięki czemu jest to zawsze bezpieczna wartość, do której
  „Zresetuj do wartości początkowej” może wrócić.

Opcjonalny **Rozmiar Kroku** przyciąga przeciąganie do przyrostów, a **Zablokowany** całkowicie wyłącza
przeciąganie (dla slidera referencyjnego, którego nie chcesz przypadkiem ruszyć w trakcie ujęcia).

## Tworzenie \{#authoring}

Pola Edytora atrybutów: etykieta/nazwa, wartości min/maks/bieżąca/początkowa, **Aktywny Channel** (jedyny
kanał, którym steruje ten slider), **Orientacja** (poziomo/pionowo), kolor paska, kolor uchwytu,
grubość paska, styl wklęsłego uchwytu, zablokowanie, rozmiar kroku — a także pola przypisania celów
wspólne z [przyciskiem wyboru](./widget-select-button) i wspólny blok
pozycji/rozmiaru/obrotu/promienia narożnika.

## Skrypty \{#scripting}

`URyanPicker1DSliderFunctionLibrary` (kategoria `Ryan Picker Page|1DSlider`):

| Funkcja | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | zakres |
| `GetCurrentValue` / `SetCurrentValue` | bieżąca wartość |
| `GetInitialValue` / `SetInitialValue` | ustalony punkt resetu |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`: Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | cele |

Podklasy Blueprint mogą implementować `BI_RyanPicker1DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(float)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`, a także
[wspólne zdarzenia cyklu życia](./blueprint-api#event-hooks).
