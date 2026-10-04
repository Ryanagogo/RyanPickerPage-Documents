---
sidebar_position: 13
---

# Edytor atrybutów i Outliner \{#attribute-editor--outliner}

Dwa panele boczne trybu edycji. Każdy ma własny przełącznik w nagłówku, więc możesz trzymać na ekranie jeden, oba lub
żaden.

## Outliner (po lewej) \{#outliner-left}

Lista wszystkiego, co jest na stronie — kliknij wiersz, aby zaznaczyć widget, kliknij dwukrotnie, aby zmienić jego nazwę,
kliknij prawym przyciskiem, aby przenieść/usunąć. Trzy widoki, przełączane przyciskami nad listą:

- **Według typu** — pogrupowane pod nagłówkami sześciu typów widgetów. Widok na co dzień.
- **Według warstwy** — pogrupowane według [grupy warstw](./editing-tools#layer-groups), w kolejności rysowania. Tutaj
  zmienia się układ warstw: przeciągnij widget na inną grupę, aby go tam przenieść, przeciągnij
  w obrębie grupy, aby zmienić kolejność, albo przeciągnij sam nagłówek grupy, aby zmienić kolejność grup. Każdy nagłówek grupy
  ma własny przełącznik blokady i zwija się niezależnie.
- **Według grupy** — [grupy przełączników](./widget-toggle#toggle-groups) z członkami zagnieżdżonymi
  pod nagłówkiem każdej nazwanej grupy; tu również zmienia się nazwy grup.

Nazwy widgetów są unikalne w obrębie strony (bez rozróżniania wielkości liter) — kolidująca zmiana nazwy jest odrzucana i
cofana, zamiast być po cichu zniekształcana. Ostatnio używany widok jest zapamiętywany globalnie między sesjami.

## Edytor atrybutów (po prawej) \{#attribute-editor-right}

Właściwości aktualnie zaznaczonego widgetu w panelu szczegółów. Edytuje **jeden widget na
raz** — aby zastosować tę samą zmianę do wielu widgetów, użyj zamiast tego
[narzędzi paska narzędzi](./editing-tools#toolbar-tools).

To, które pola się pojawiają, zależy od typu widgetu; każda strona widgetu opisuje własny zestaw.
Wspólny blok — pozycja, rozmiar, obrót, promień narożnika, nazwa widgetu — jest zawsze obecny.

Dwa zachowania, które warto znać:

- **Trwające edycje są zatwierdzane przed zmianą zaznaczenia.** Jeśli jesteś w trakcie edycji pola i
  klikniesz inny widget, oczekująca wartość zostanie zatwierdzona w widgecie, który faktycznie
  edytowałeś — nie może „przeciec” do nowo zaznaczonego.
- **Ostrzeżenie o tym samym kanale w sliderze 2D** wyświetla się jako kolorowy baner bezpośrednio w panelu — zobacz
  [Slider 2D](./widget-2d-slider).

## Promień narożnika \{#corner-radius}

Zaokrąglenie widgetu jest ustalane przez trzypoziomową kaskadę, w której wygrywa poziom najbardziej szczegółowy:

1. **Nadpisanie dla widgetu** — flaga „override corner radius” i własna wartość w
   konkretnym widgecie.
2. **Class Default dla typu** — każdy typ widgetu może mieć własną wartość domyślną w panelu Class
   Defaults strony.
3. **Globalna wartość domyślna** — 10 dla typów przycisk/slider/przełącznik; etykiety i obrazy mają domyślnie
   ostre narożniki (0). Globalną wartość zastępczą można zmienić w [Ustawieniach edytora](./editor-settings).

Niedostosowane widgety podążają za kaskadą na bieżąco — zwiększ wartość domyślną typu, a każdy widget
tego typu bez nadpisania zaktualizuje się wraz z nią.

## Blokowanie widgetów \{#widget-locking}

Każdy widget można zablokować — własnym polem wyboru w Edytorze atrybutów, ikoną kłódki w jego wierszu
lub nagłówku grupy w Outlinerze albo poleceniem **Zablokuj**/**Odblokuj zaznaczenie** w menu pod prawym przyciskiem.

Blokada działa tylko w trybie edycji: zablokowanego widgetu nie można tam zaznaczyć, przesunąć ani przeskalować, a
jego uchwyty przesuwania/skalowania całkowicie znikają. Tryb Live i sama lista w Outlinerze pozostają bez zmian
— zablokowany widget działa normalnie po kliknięciu w trybie Live, a w Outlinerze nadal możesz go widzieć i
zmieniać jego nazwę. Zablokowanie [grupy warstw](./editing-tools#layer-groups) z jej nagłówka w Outlinerze
blokuje w ten sam sposób wszystkich jej członków.

Blokowanie jest przeznaczone dla widgetów, których rozmieszczanie już zakończyłeś i których nie chcesz przypadkiem przesunąć podczas
pracy w ich pobliżu — np. obraz tła albo gotowy rząd przycisków.

## Podpowiedź w trybie Live \{#live-mode-tooltip}

W trybie Live najechanie kursorem na dowolny widget pokazuje podpowiedź podsumowującą jego połączenia — jak się nazywa i
którymi kontrolkami/aktorami steruje. To najszybszy sposób na sprawdzenie nieznanej strony bez
wchodzenia w tryb edycji.
