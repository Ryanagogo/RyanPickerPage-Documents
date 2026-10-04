---
sidebar_position: 8
---

# Obraz \{#image}

*Grafika na płótnie — portrety postaci, schematy ciała, tła.*

Obrazy to wizualna podstawa dobrego pickera: widok postaci z kilku stron lub zarys ciała
za przyciskami zmienia abstrakcyjną siatkę przycisków w coś czytelnego na pierwszy rzut oka. Podobnie jak
[etykiety](./widget-label), w trybie Live nie reagują na kliknięcia i zaczynają w
[grupie warstw](./editing-tools#layer-groups) **Obrazy** — najdalej z tyłu spośród trzech domyślnych
grup — dzięki czemu świeżo dodany obraz nie zasłoni interaktywnej kontrolki, chyba że później sam zmienisz
kolejność grup.

## Kadrowanie z przesunięciem/powiększeniem \{#crop-panzoom}

Zamiast przycinać tekstury wcześniej w edytorze grafiki, kadruj je na stronie: **Image Scale**
powiększa teksturę źródłową, a **Image Offset** przesuwa po niej widoczne okno. Jeden
arkusz postaci może zasilać kilkanaście widgetów obrazu, z których każdy kadruje inną część ciała. Te same
dwie kontrolki istnieją dla obrazu tła etykiety.

## Tworzenie \{#authoring}

- **Tekstura**
- **Tryb rozciągania** — sposób dopasowania tekstury do prostokąta widgetu
- **Image Scale** / **Image Offset** — okno kadrowania
- **Kolor tła** — znajduje się za teksturą; to także kolor, do którego przenika **Alfa Obrazu**
- **Alfa Obrazu** — krycie tekstury nad kolorem tła, 0–1
- Promień narożnika (domyślnie ostre narożniki, jak w etykietach)
- Wspólny blok pozycji/rozmiaru/obrotu

## Renderowanie \{#rendering}

Obrazy i etykiety są rysowane za pomocą dynamicznej instancji jednego wspólnego materiału
(`M_RyanPickerRoundedImage`), a nie zwykłego pędzla tekstury. Zaokrąglanie narożników, dopasowanie według trybu rozciągania
i okno kadrowania są obliczane w tym jednym przebiegu materiału — dlatego oba
typy zachowują się identycznie co do piksela, a kadrowanie nic dodatkowo nie kosztuje.

## Skrypty \{#scripting}

`URyanPickerImageFunctionLibrary` (kategoria `Ryan Picker Page|Image`):

| Funkcja | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | kadrowanie z przesunięciem/powiększeniem |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImageAlpha` / `SetImageAlpha` | ograniczone do 0–1 |

Brak interfejsu podpięć zdarzeń; obowiązują [wspólne funkcje widgetów](./blueprint-api).
