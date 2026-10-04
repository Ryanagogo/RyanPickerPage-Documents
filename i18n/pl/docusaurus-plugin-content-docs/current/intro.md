---
sidebar_position: 1
---

# Wprowadzenie \{#introduction}

**Ryan Picker Page** to picker animacyjny dla Unreal Engine: płótno z przyciskami, sliderami,
przełącznikami, etykietami i obrazami, które układasz raz dla każdej postaci, a następnie używasz do zaznaczania i sterowania
kontrolkami Control Rig (oraz aktorami poziomu) jednym kliknięciem — bez przeszukiwania viewportu,
hierarchii riga czy drzewa Sequencera w trakcie ujęcia.

To samo okno jest jednocześnie pickerem i jego edytorem. Przełącz się w tryb edycji, aby zbudować układ; wróć
do trybu Live, aby z jego pomocą animować. Strony są zapisywane jako przenośne pliki JSON, które możesz udostępniać
między projektami i członkami zespołu.

## Wymagania \{#requirements}

- Unreal Engine **5.6 – 5.8**
- Włączone następujące pluginy silnika (plugin deklaruje je jako zależności): **Control Rig**,
  **Synthesis**, **Python Editor Script Plugin**

Plugin działa wyłącznie w edytorze. Nigdy nie trafia do spakowanego buildu i nie dodaje niczego w czasie działania gry.

## Instalacja \{#installation}

1. Skopiuj folder `RyanPickerPage` do katalogu `Plugins/` swojego projektu.
2. Włącz go w **Edit → Plugins** i uruchom ponownie edytor.
3. Otwórz picker z menu **Tools → Ryan Picker Page**.

## Jak poruszać się po tej dokumentacji \{#finding-your-way-around-these-docs}

Jeśli jesteś **animatorem** korzystającym ze strony, którą ktoś dla ciebie zbudował, zacznij od
[Pierwszych kroków](./getting-started) i sekcji o trybie Live na stronach widgetów.

Jeśli **budujesz strony**, czytaj w tej kolejności: [Pierwsze kroki](./getting-started) →
[Control Rig i aktorzy docelowi](./control-rig-and-targets) → strony typów widgetów →
[Narzędzia edycji i płótna](./editing-tools).

Jeśli jesteś **TD rozszerzającym plugin**, przejdź od razu do stron
[API Blueprint](./blueprint-api) i [Skrypty w Pythonie](./python-scripting) — w tym do opisu,
jak dostarczać własne warianty widgetów jako podklasy Blueprint widoczne w menu Add Widget.

### Wszystkie strony \{#all-pages}

| Sekcja | Strony |
|---|---|
| Podstawy | [Pierwsze kroki](./getting-started) |
| Typy widgetów | [Przycisk wyboru](./widget-select-button) · [Slider 1D](./widget-1d-slider) · [Slider 2D](./widget-2d-slider) · [Przełącznik](./widget-toggle) · [Etykieta](./widget-label) · [Obraz](./widget-image) |
| Budowanie stron | [Narzędzia edycji i płótna](./editing-tools) · [Odbicie pozy](./mirror-pose) · [Zakładki](./bookmarks) |
| Jak działa wskazywanie celów | [Control Rig i aktorzy docelowi](./control-rig-and-targets) · [Edytor atrybutów i Outliner](./attribute-editor-and-outliner) |
| Pliki i ustawienia | [Zapisywanie, wczytywanie i pliki](./save-load-and-files) · [Ustawienia edytora](./editor-settings) |
| Rozszerzanie | [API Blueprint](./blueprint-api) · [Skrypty w Pythonie](./python-scripting) |
