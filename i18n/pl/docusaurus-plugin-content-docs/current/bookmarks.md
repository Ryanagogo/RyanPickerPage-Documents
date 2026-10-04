---
sidebar_position: 11
---

# Zakładki \{#bookmarks}

*Nazwane pozycje kamery dla płótna.*

W pickerze dla całego ciała ciągle przeskakujesz między obszarami — twarzą, dłońmi, stopami. Zakładki
sprawiają, że każdy taki skok to jedno kliknięcie: zakładka zapamiętuje widok płótna (przesunięcie i powiększenie), a kliknięcie jej przycisku w
wierszu nagłówka natychmiast przenosi tam płótno.

## Wiersz zakładek \{#the-bookmark-row}

- **Domyślny** istnieje zawsze i jest zawsze widoczny, poza przewijanym wierszem — traktuj go jako
  „ekran startowy”.
- **Sloty użytkownika** — domyślnie 4, maksymalnie 8 (zobacz [Ustawienia edytora](./editor-settings)) — znajdują się w
  przewijanym poziomo wierszu obok niego, są numerowane według pozycji i można nadawać im nazwy.

## Praca z zakładkami \{#working-with-bookmarks}

| Czynność | Jak |
|---|---|
| Przejście do widoku | kliknij przycisk |
| Zapisanie bieżącego widoku | **Ctrl+Shift+kliknięcie** przycisku lub prawy przycisk → Ustaw / nadpisz — przycisk mignie na zielono na potwierdzenie |
| Zmiana nazwy slotu | prawy przycisk → Zmień nazwę |
| Dodanie slotu | prawy przycisk → Dodaj zakładkę przed / Dodaj zakładkę po |
| Zmiana kolejności | prawy przycisk → Przesuń w lewo / Przesuń w prawo — oba zamienione przyciski migną na pomarańczowo |
| Usunięcie / reset | prawy przycisk → Usuń lub Reset to Identity |

Zmiany zakładek mają **własny stos cofania o 30 krokach**, w pełni niezależny od cofania zmian układu —
Ctrl+Z na płótnie nigdy nie pochłonie zmiany zakładki, a cofanie zakładek nigdy nie narusza
układu.

Zakładki są zapisywane w pliku strony razem ze wszystkim innym. Szerokość przycisków, czcionkę, odstępy wewnętrzne i
dwa kolory mignięcia potwierdzenia można dostosować dla każdej strony w panelu Class Defaults.
