---
sidebar_position: 2
---

# Pierwsze kroki \{#getting-started}

## Otwieranie strony \{#opening-a-page}

**Tools → Ryan Picker Page** otwiera stronę w nowej karcie edytora. Przycisk **New Tab** w
nagłówku strony otwiera kolejne — każda karta jest w pełni niezależna, z własnym plikiem, własnym wyborem Control Rig
i własnym widokiem płótna. Zmiana nazwy strony (jej tytuł można edytować w trybie edycji) zmienia nazwę
jej karty, dzięki czemu nawet wiele otwartych pickerów pozostaje łatwych w nawigacji.

## Dwa tryby \{#two-modes}

Przycisk trybu edycji w nagłówku przełącza całą stronę między:

**Trybem Live** — trybem animowania. Kliknięcie widgetu zaznacza kontrolki riga i aktorów; przeciąganie
sliderów steruje transformacjami; najechanie kursorem na widget pokazuje podpowiedź, z czym jest połączony. Samego
układu nie da się zmienić.

**Gotowa strona spędza życie w trybie Live.** Wszystko, co opisano w
[Narzędziach edycji i płótna](./editing-tools), służy temu, aby cię tu doprowadzić.

**Trybem edycji** — trybem budowania. Widgety otrzymują uchwyty do przesuwania, skalowania i obracania, kliknięcie prawym przyciskiem
pustego miejsca na płótnie otwiera menu **Add Widget**, a po bokach pojawiają się dwa zwijane panele:
[Outliner](./attribute-editor-and-outliner) po lewej i
[Edytor atrybutów](./attribute-editor-and-outliner) po prawej.

## Zbuduj swoją pierwszą stronę \{#build-your-first-page}

Minimalny picker dla jednej nogi, od początku do końca:

1. Otwórz Level Sequence zawierającą twoją postać i jej Control Rig, a następnie otwórz stronę pickera.
   Lista rozwijana rigów w nagłówku wypełnia się na podstawie aktywnej sekwencji — wybierz swój rig (jest
   wybierany automatycznie, jeśli jest tylko jeden).
2. Przejdź do **trybu edycji**.
3. W viewporcie lub Anim Outlinerze zaznacz kontrolkę uda. Kliknij płótno prawym przyciskiem →
   **Add Widget → Przycisk wyboru**. Domyślnie nowy przycisk tworzy listę celów na podstawie
   bieżącego zaznaczenia, więc ten przycisk już steruje udem.
4. Powtórz dla łydki i stopy. Nazwij każdy przycisk w polu etykiety w
   [Edytorze atrybutów](./attribute-editor-and-outliner) i przeciągnij je, układając w
   kolumnę w kształcie nogi.
5. Zaznacz wszystkie trzy i wypróbuj [narzędzia wyrównywania](./editing-tools), aby wyprostować kolumnę.
6. Wyjdź z trybu edycji. Klikaj przyciski — każdy zaznacza swoją kontrolkę. To jest podstawowa pętla; cała reszta
   to dopracowywanie.
7. **Plik → Zapisz** zapisuje stronę do pliku JSON w dowolnym miejscu — zobacz
   [Zapisywanie, wczytywanie i pliki](./save-load-and-files).

## Cofanie, ponawianie i zabezpieczenia \{#undo-redo-and-safety-nets}

Każda zmiana w trybie edycji — przesunięcia, skalowanie, dodawanie, usuwanie, wklejanie, zmiany kolorów — trafia na
stos cofania strony (domyślnie 30 kroków; zobacz [Ustawienia edytora](./editor-settings)). Ctrl+Z /
Ctrl+Y lub przyciski w nagłówku. Przeciąganie w próbniku kolorów jest łączone w jeden krok cofania
zamiast jednego na każdy ruch, więc cofnięcie zmiany koloru cofa całe przeciągnięcie.

[Zakładki](./bookmarks) mają własny, osobny stos cofania — cofanie zmian układu nigdy nie narusza
zapisanych widoków i odwrotnie.

## Powrót do miejsca, w którym skończyłeś \{#picking-up-where-you-left-off}

Dla każdego zapisanego pliku plugin zapamiętuje przesunięcie i powiększenie płótna, aktywny Control Rig oraz
to, czy byłeś w trybie edycji czy Live — wszystko jest automatycznie przywracane przy następnym wczytaniu tego pliku
na tym komputerze. Te dane są przechowywane poza plikiem strony, więc udostępniając stronę
koledze z zespołu, udostępniasz układ, a nie swoje nawyki dotyczące widoku. Zobacz
[Zapisywanie, wczytywanie i pliki](./save-load-and-files#session-state).
