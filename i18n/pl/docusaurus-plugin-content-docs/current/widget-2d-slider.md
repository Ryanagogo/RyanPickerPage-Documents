---
sidebar_position: 5
---

# Slider 2D \{#2d-slider}

*Jeden przeciągany uchwyt, dwa kanały transformacji.*

## W trybie Live \{#in-live-mode}

Slider 2D to pad: przeciąganie jego uchwytu zapisuje oś X do jednego kanału transformacji, a
oś Y do drugiego — jednocześnie, na każdej przypisanej kontrolce/aktorze. Typowe zastosowania to
pad Przesunięcie X / Przesunięcie Y do stawiania stopy albo pad Obrót X / Obrót Y do kierowania wzroku.

Obowiązuje go ta sama dyscyplina kanałów co [slider 1D](./widget-1d-slider): każda oś
zastępuje na celu tylko własny kanał, więc pad 2D współistnieje z innymi sliderami sterującymi
pozostałymi kanałami tej samej kontrolki. Auto-key działa. **Zresetuj do wartości początkowej** jest również dostępne w
menu pod prawym przyciskiem.

## Model wartości \{#value-model}

Taki sam jak w sliderze 1D, ale dwuwymiarowy: **Wartość Minimalna/Wartość Maksymalna** to pary dla każdej osi, **Current
Value** to bieżąca wartość 2D, a **Wartość Początkowa** to ustalona wartość domyślna, odporna na przeciąganie. **Rozmiar Kroku**
i **Zablokowany** działają tak samo.

Oba kanały wybiera się niezależnie (**Aktywny Channel X**, **Aktywny Channel Y**). Ustawienie
obu osi na *ten sam* kanał to prawie zawsze błąd konfiguracji, dlatego Edytor atrybutów
oznacza to banerem ostrzegawczym, zamiast pozwolić obu osiom po cichu walczyć o jedną wartość.

## Tworzenie \{#authoring}

Pola Edytora atrybutów: etykieta/nazwa, min/maks dla każdej osi, wartości bieżąca/początkowa, Aktywny Channel X
i Y (z ostrzeżeniem o tym samym kanale), kolor uchwytu, styl wklęsłego uchwytu, zablokowanie, rozmiar kroku,
przypisanie celów oraz wspólny blok pozycji/rozmiaru/obrotu/promienia narożnika.

## Skrypty \{#scripting}

`URyanPicker2DSliderFunctionLibrary` (kategoria `Ryan Picker Page|2DSlider`):

| Funkcja | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, dla każdej osi |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | cele |

Podklasy Blueprint mogą implementować `BI_RyanPicker2DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
a także [wspólne zdarzenia cyklu życia](./blueprint-api#event-hooks).
