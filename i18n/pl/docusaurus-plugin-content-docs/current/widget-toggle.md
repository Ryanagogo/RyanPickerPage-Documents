---
sidebar_position: 6
---

# Przełącznik \{#toggle}

*Przełącznik dwustanowy — klasycznym zastosowaniem jest IK/FK.*

## W trybie Live \{#in-live-mode}

Przełącznik ma dwa stany, **A** i **B**. Kliknięcie przełącza między nimi, a stan, który
właśnie stał się aktywny, stosuje własną konfigurację: jego etykieta, kolory, przypisane kontrolki riga
i aktorzy zostają zaznaczeni, a jego własny [skrypt w Pythonie](./python-scripting) zostaje uruchomiony.
Wszystko w przełączniku konfiguruje się **dla każdego stanu** — przełącznik IK/FK może w jednym stanie zaznaczać kontrolki IK,
a w drugim kontrolki FK, mając w każdym inny kolor.

## Grupy przełączników \{#toggle-groups}

Zgrupuj kilka przełączników (menu pod prawym przyciskiem, przy co najmniej dwóch zaznaczonych), a będą działać jak przyciski
opcji: każdy przełącznik deklaruje, który z jego stanów oznacza „włączony” (jego **Stan Włączony**), a
włączenie jednego członka grupy wyłącza wszystkich pozostałych. Zgrupowane widgety mają na płótnie charakterystyczną
ramkę, grupy można nazywać i zmieniać ich nazwy, a
[widok **Według grupy** w Outlinerze](./attribute-editor-and-outliner) wyświetla członków każdej grupy pod
jej nagłówkiem. Skopiowanie grupy udostępnia wklejenie, które odtwarza ją jako zupełnie nową grupę, łącznie z członkami i
nazwą.

## Sterowanie kanałem bool riga \{#driving-a-rigs-bool-channel}

Oprócz zaznaczania kontrolek przełącznik można powiązać bezpośrednio z **kanałem animacji typu bool** kontrolki
Control Rig — na przykład z rzeczywistym atrybutem przełącznika IK/FK riga:

- Podaj **kontrolkę nadrzędną** kanału i sam **kanał**, a następnie wybierz, który stan przełącznika
  oznacza, że kanał ma wartość *true*.
- Kliknięcie przełącznika zapisze wtedy również wartość bool.
- Powiązanie jest dwukierunkowe: strona odpytuje bieżącą wartość kanału i odzwierciedla ją w
  wyglądzie przełącznika, więc przewijanie osi czasu przez kluczowany przełącznik IK/FK przełącza przycisk na stronie
  bez ponownego uruchamiania akcji kliknięcia.

## Tworzenie \{#authoring}

Pola Edytora atrybutów: dla każdego stanu etykieta / kolor tła / kolor czcionki / rozmiar czcionki / nazwy
kontrolek / aktorzy docelowi / skrypt w Pythonie; bieżący stan i Stan Włączony; powiązanie z kanałem animacji bool
(włączenie, kontrolka nadrzędna, nazwa kanału, stan true) oraz wspólny blok
pozycji/rozmiaru/obrotu/promienia narożnika.

## Skrypty \{#scripting}

`URyanPickerToggleFunctionLibrary` (kategoria `Ryan Picker Page|Toggle`). Większość funkcji przyjmuje
`ERyanPickerToggleState` i odczytuje/zapisuje konfigurację jednego stanu:

| Funkcja | |
|---|---|
| `GetToggleState` / `SetToggleState` | bieżący stan |
| `GetOnState` / `SetOnState` | który stan jest „włączony” na potrzeby wyłączności w grupie |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | główny przełącznik powiązania z kanałem animacji |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Podklasy Blueprint mogą implementować `BI_RyanPickerToggle`: `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, a także
[wspólne zdarzenia cyklu życia](./blueprint-api#event-hooks).
