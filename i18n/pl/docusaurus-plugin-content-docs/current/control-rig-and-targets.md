---
sidebar_position: 12
---

# Control Rig i aktorzy docelowi \{#control-rig--target-actors}

*Z czym widget jest „połączony” i jak to połączenie przetrwa sesje, sekwencje i ponowne spawnowanie.*

Widgety nigdy nie przechowują twardych referencji do obiektów. Zapisują **nazwy i tożsamości** — nazwy kontrolek
Control Rig, tożsamości aktorów — i rozwiązują je względem bieżącego stanu edytora w chwili
kliknięcia. Właśnie ta pośredniość pozwala jednej zapisanej stronie działać po ponownym uruchomieniu edytora,
na różnych poziomach i przez cały cykl życia aktorów w Sequencerze.

## Bieżący Control Rig \{#the-current-control-rig}

Każda karta strony ma jeden **bieżący Control Rig**, wybierany z listy rozwijanej w nagłówku. Lista
pokazuje rigi powiązane w **aktywnej Level Sequence** i sama się aktualizuje: przełącz się na
inną sekwencję przy otwartym pickerze, a lista zostanie odbudowana — z zachowaniem twojego wyboru, jeśli
ten rig nadal jest powiązany, i z automatycznym wyborem, gdy dostępny jest dokładnie jeden rig.

Nazwy kontrolek w widgetach są rozwiązywane względem tego riga. Ta sama strona steruje więc każdą
postacią, która ma takie samo nazewnictwo kontrolek — zbuduj jedną stronę dla dwunoga i używaj jej dla całej obsady.
([Etykiety](./widget-label) mogą wyświetlać nazwę bieżącego riga, żeby animatorzy zawsze wiedzieli, którą
postacią steruje dana karta).

## Aktorzy docelowi \{#target-actors}

Widgety mogą też wskazywać jako cel **aktorów** — zamiast kontrolek riga lub obok nich. Przycisk może
jednocześnie zaznaczyć rekwizyt, kamerę i kontrolkę riga; slider może bezpośrednio sterować kanałem transformacji aktora,
automatycznie tworząc klucze w Sequencerze jak każda ręczna animacja.

### Spawnable w Sequencerze \{#sequencer-spawnables}

Zwykli aktorzy poziomu są identyfikowani przez stabilny GUID aktora. **Spawnable to pułapka**:
Sequencer tworzy je w każdej sesji od nowa z *nowym* GUID aktora, co po cichu zepsułoby każdą
stronę zapisaną ze starym. Dlatego każde przypisanie aktora w każdym widgecie przechowuje równolegle dwie tożsamości
— GUID aktora *oraz* **GUID powiązania (binding)** aktora w Sequencerze, który jest stabilny
między kolejnymi spawnami. Rozwiązywanie próbuje GUID aktora, a w razie potrzeby wraca do powiązania. Nigdy nie musisz
tym zarządzać; dzięki temu strony pełne spawnable nadal działają w przyszłym tygodniu.

## Jak przypisywane są cele \{#how-targets-get-assigned}

W trybie edycji, przy zaznaczonym widgecie:

- **Pobranie przy tworzeniu** (domyślnie, [konfigurowalne](./editor-settings)): lista celów nowego widgetu jest
  wstępnie wypełniana kontrolkami/aktorami zaznaczonymi w chwili jego dodania. Zaznacz w viewporcie →
  Add Widget — to cały gest tworzenia.
- Pola celów w Edytorze atrybutów pokazują rozwiązane, czytelne podsumowanie — prawdziwe nazwy aktorów
  i kontrolek, a nie GUID-y — dzięki czemu połączenia można sprawdzić na pierwszy rzut oka. Zerwane referencje
  (usunięci aktorzy, kontrolki o zmienionej nazwie) po prostu niczego nie wskazują, zamiast powodować błąd strony.

## Dwie filozofie zaznaczania \{#two-selection-philosophies}

[Przyciski wyboru](./widget-select-button) oferują oba klasyczne zachowania pickerów:
**zestawy zaznaczeń** (kliknięcie zastępuje zaznaczenie zapisanym zestawem) i **interaktywny
tryb wyboru** (przyciski na bieżąco odzwierciedlają zaznaczenie w edytorze, a kliknięcia dodają — pełny opis
zachowania znajdziesz na stronie przycisku wyboru). Zbieranie zaznaczenia jest celowo
niezależne od riga: pobieranie celów i dopasowanie interaktywne uwzględniają twoje faktyczne zaznaczenie w edytorze, a nie tylko
kontrolki należące do bieżącego riga z listy rozwijanej.
