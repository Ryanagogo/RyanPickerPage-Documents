---
sidebar_position: 16
---

# API Blueprint \{#blueprint-api}

Interfejs skryptowy pluginu wszędzie stosuje ten sam wzorzec: **biblioteki funkcji** złożone ze statycznych
node'ów — jedna wspólna biblioteka dla tego, co ma każdy widget, oraz po jednej bibliotece na typ widgetu dla tego, co
ma tylko on. Każda funkcja przyjmuje widget jako `Target` z `DefaultToSelf` — w grafie samego
Blueprintu widgetu node'y same łączą się z `self`.

## Funkcje wspólne — wszystkie typy widgetów \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`, kategoria `Ryan Picker Page|Widget`:

| Funkcja | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | geometria na płótnie |
| `GetRotation` / `SetRotation` | stopnie, zawinięte do [0, 360) |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | poziom widgetu w [kaskadzie zaokrągleń](./attribute-editor-and-outliner#corner-radius) |
| `GetWidgetName` / `SetWidgetName` | nazwa unikalna w obrębie strony |
| `GetCurrentControlRig` | bieżący rig strony nadrzędnej |
| `GetActorFromGUID` | rozwiązuje tożsamość aktora przez stronę |

## Funkcje dla poszczególnych typów \{#per-type-functions}

Własna biblioteka każdego typu widgetu jest opisana na jego stronie:

| Biblioteka | Kategoria | Dokumentacja |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [Przycisk wyboru](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [Slider 1D](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [Slider 2D](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [Przełącznik](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [Etykieta](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [Obraz](./widget-image#scripting) |

## Podpięcia zdarzeń \{#event-hooks}

Każdy z czterech interaktywnych typów widgetów udostępnia interfejs Blueprint z podpięciami `BlueprintNativeEvent` —
zaimplementuj je w podklasie Blueprint, aby dodać zachowanie bez C++:

| Interfejs | Zdarzenia specyficzne dla typu |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | te same cztery, z wartością 2D |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

Wszystkie cztery dziedziczą trzy **zdarzenia cyklu życia** wspólne dla każdego typu interaktywnego:

- `OnWidgetSelected(bool)` — zmieniło się zaznaczenie w trybie edycji
- `OnWidgetHighlighted(bool)` — zmienił się stan najechania kursorem
- `OnWidgetEditModeChanged(bool)` — strona weszła w tryb edycji lub z niego wyszła

Etykiety i obrazy nie mają interfejsu podpięć — nie ma w nich nic klikalnego — ale obejmuje je wspólna
biblioteka funkcji.

## Własne Blueprinty widgetów \{#custom-widget-blueprints}

Najgłębszy punkt rozszerzeń: **utwórz w Blueprincie podklasę typu widgetu, a strona potraktuje ją jako
pełnoprawny, osobny typ widgetu.**

1. Utwórz klasę Blueprint, której rodzicem jest jedna z natywnych końcowych klas widgetów
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider`, …).
2. Zaimplementuj zdarzenia jej interfejsu podpięć, aby dodać własne zachowanie — dodatkowe efekty wizualne w
   `OnToggleStateChanged`, własną logikę w `OnSelectButtonClicked`, cokolwiek wymaga ujęcie.
3. Twoja klasa automatycznie pojawi się w menu płótna pod prawym przyciskiem, w sekcji **Widżety niestandardowe**,
   pogrupowana według typu bazowego.

Niestandardowe widgety dziedziczą wszystko — zapis/wczytywanie, cofanie, Edytor atrybutów, narzędzia wyrównywania/odbicia,
przypisywanie celów — ponieważ strona rozpoznaje każdą podklasę typu końcowego jako ten typ. Strony, które
używają niestandardowego widgetu, zapisują w pliku ścieżkę klasy Blueprintu, więc wczytują się
poprawnie w każdym projekcie zawierającym ten Blueprint.

Jeśli zachowanie po kliknięciu nie uzasadnia tworzenia podklasy Blueprint, często wystarczy zwykły
[skrypt w Pythonie w widgecie](./python-scripting).
