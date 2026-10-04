---
sidebar_position: 14
---

# Zapisywanie, wczytywanie i pliki \{#saving-loading--files}

Strona zapisuje się do jednego **pliku JSON**, w dowolnym wybranym miejscu na dysku. Strony nie są zasobami
Unreala: nie znajdują się w `Content/`, nie potrzebują projektu, w którym powstały, i można je
udostępniać, wysyłać e-mailem lub wersjonować jak każdy plik tekstowy.

Jeden zapis obejmuje całą stronę: każdy widget ze wszystkimi połączeniami i stylami,
[wiersz zakładek](./bookmarks), grupy przełączników oraz [Pose Map](./mirror-pose).

## Menu Plik \{#the-file-menu}

| Pozycja | |
|---|---|
| **Zapisz** | zapisuje do bieżącego pliku strony; dla nigdy niezapisanej strony działa jak Zapisz jako |
| **Zapisz jako** | natywne okno zapisu |
| **Wczytaj** | natywne okno otwierania |
| **Wczytaj ostatnie** | ostatnio używane pliki, bez okna dialogowego |
| **Wczytaj ponownie** | ponownie odczytuje bieżący plik z dysku |
| **Pose Map…** | [okno Pose Map](./mirror-pose#the-pose-map) |
| **Settings…** | okno [Ustawienia edytora](./editor-settings) |

Okna zapisu i wczytywania otwierają się ponownie w ostatnio używanych katalogach.

## Menu Pomoc \{#the-help-menu}

Pozycje są w całości sterowane danymi — to lista elementów Etykieta/URL/Podpowiedź edytowana w panelu Class
Defaults strony. Dodawaj, usuwaj, zmieniaj kolejność lub cel pozycji bez zmian w kodzie i ponownej kompilacji;
kliknięcie pozycji otwiera jej adres URL w domyślnej przeglądarce systemu. Jedna pozycja jest stała, a nie
sterowana danymi: **O programie**, która pokazuje wersję pluginu, wersję Unreal Engine i
autora w prostym oknie informacyjnym.

## Stare pliki nadal się wczytują \{#old-files-keep-loading}

Pliki zapisu mają wersjonowany schemat. Wczytanie starszego pliku automatycznie migruje go przez wszystkie
pośrednie zmiany schematu — strony z wczesnych wersji pluginu wczytują się w
bieżącej, a ponowne zapisanie zapisuje je w bieżącej wersji. Pliki, których nie da się
zmigrować (lub które pochodzą z *nowszego* pluginu niż twój), są odrzucane z czytelnym błędem,
zamiast być wczytane w połowie.

Uwaga dotycząca prywatności: [skrypt w Pythonie](./python-scripting) przycisku wyboru jest przechowywany w pliku
w kodowaniu Base64 — zakodowany, nie zaszyfrowany. Traktuj pliki stron zawierające skrypty tak jak
same skrypty.

## Stan sesji \{#session-state}

Obok pliku strony — ale nigdy w nim — plugin zapamiętuje dla każdej ścieżki pliku, gdzie
skończyłeś: przesunięcie/powiększenie płótna, aktywny Control Rig, tryb edycji lub Live. Wczytaj ten sam plik
jutro, a płótno będzie dokładnie tam, gdzie je zostawiłeś. Ponieważ te dane są przechowywane na twoim komputerze według ścieżki
pliku, udostępnienie strony udostępnia tylko układ — odbiorcy mają własny stan widoku.
Wpisy nieużywane przez 90 dni (konfigurowalne) są usuwane.

## Gdzie plugin przechowuje własne pliki \{#where-the-plugin-keeps-its-own-files}

```
%APPDATA%\RyanTechAnimTools\RyanPicker\
├── settings.json              # ostatnie pliki, ostatnie katalogi okien, widok Outlinera
├── editor_settings.json       # wartości okna Ustawienia edytora
└── page_session_state.json    # stan sesji dla każdego pliku, według ścieżki bezwzględnej
```

Są one przypisane do użytkownika i komputera. Ich usunięcie powoduje utratę udogodnień (ostatnie pliki, przywracane
widoki, ustawienia), ale nigdy danych stron — strony istnieją tylko w plikach, które zapisałeś.
