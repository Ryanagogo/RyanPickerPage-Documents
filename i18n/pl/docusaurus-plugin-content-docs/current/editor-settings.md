---
sidebar_position: 15
---

# Ustawienia edytora \{#editor-settings}

**Plik → Settings…** otwiera okno globalnych ustawień pluginu. Są to preferencje **dla danego komputera**,
obowiązujące na każdej otwieranej stronie — w odróżnieniu od Class Defaults dla strony (zapisywanych w
Blueprincie strony) i danych dla pliku (zapisywanych w pliku strony).

## Zachowanie nowych widgetów \{#new-widget-behavior}

| Ustawienie | Domyślnie | |
|---|---|---|
| Seed New Widget Targets From Selection | wł. | nowe przyciski/slidery wypełniają cele na podstawie bieżącego zaznaczenia — zobacz [Jak przypisywane są cele](./control-rig-and-targets#how-targets-get-assigned) |
| Default Interactive Selection Mode | wył. | nowe przyciski wyboru startują w [interaktywnym trybie wyboru](./widget-select-button#interactive-selection-mode) |
| Domyślny rozmiar nowego widżetu | 200 × 100 | z polem wyboru **Override** — wyłączone oznacza, że wygrywa wartość z Class Defaults strony; włączone oznacza, że zastępuje ją wartość z tego okna |
| Domyślny promień zaokrąglenia | 10 | ta sama zasada pola Override; globalna wartość zastępcza w [kaskadzie zaokrągleń](./attribute-editor-and-outliner#corner-radius) |

## Kategorie Sticky Defaults \{#sticky-defaults-categories}

Siedem pól wyboru — **Kolor, Czcionka, Promień narożnika, Rozmiar, Obrót, Tekst, Obraz**, domyślnie wszystkie
włączone — określa, które grupy właściwości
[Copy to Sticky Defaults](./editing-tools#widget-defaults) faktycznie przenosi na nowe widgety.
Wyłącz na przykład Rozmiar i Obrót, aby sticky defaults były czysto kosmetyczne.

## Strona i porządki \{#page--housekeeping}

| Ustawienie | Domyślnie | |
|---|---|---|
| Domyślna liczba zakładek | 4 | sloty [zakładek](./bookmarks) użytkownika na nowej stronie (maks. 8) |
| Głębokość stosu cofania | 30 | kroki cofania/ponawiania strony głównej |
| Maks. wiek stanu sesji | 90 dni | starsze wpisy [stanu sesji](./save-load-and-files#session-state) są usuwane; 0 wyłącza usuwanie |

## Wzorzec nadpisywania \{#the-override-pattern}

Dla wartości, które istnieją również jako Class Defaults strony (rozmiar widgetu, promień zaokrąglenia), to okno
celowo ustępuje: Class Defaults Blueprintu strony są nadrzędne, dopóki nie zaznaczysz tutaj
odpowiedniego pola **Override**. Dzięki temu dostrojenie współdzielonego Blueprintu strony domyślnie pozostaje nienaruszone,
a jednocześnie pojedynczy komputer może wymusić własne wartości.
