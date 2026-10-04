---
sidebar_position: 10
---

# Odbicie pozy \{#mirror-pose}

*Naucz stronę raz jej własnej symetrii lewo/prawo — i odbijaj układy już zawsze.*

[Narzędzie Odbicie lustrzane](./editing-tools#mirror) odbija to, co akurat jest zaznaczone, względem
wybranej kotwicy — dobre do jednorazowych odwróceń, ale nie wie nic o tym, które widgety
sobie odpowiadają. **Odbicie pozy** rozwiązuje to za pomocą **Pose Map**: zapisu na poziomie strony, który mówi,
który widget jest lewym partnerem którego, gdzie przebiega linia środkowa i który widget
kotwiczy całość. Po utworzeniu mapy odbicie układu to za każdym razem jedno kliknięcie, bez
akrobacji z zaznaczaniem.

## Pose Map \{#the-pose-map}

Tworzona w oknie **Pose Map…** (menu Plik). Każda strona ma dokładnie jedną mapę, zawierającą trzy
rodzaje wpisów:

- **Kotwica** — pojedynczy widget definiujący oś odbicia (jego środek). Zwykle
  przycisk roota/miednicy leżący na linii środkowej strony. Nic nie zostanie odbite, dopóki nie ustawisz kotwicy —
  w przeciwnym razie przycisk Poza wyświetli ostrzeżenie.
- **Widgety środkowe** — kręgosłup, głowa, wszystko na linii środkowej. Odbijają się na samych siebie
  (odwracają się w miejscu względem osi).
- **Pary** — pary widgetów lewy/prawy: lewe udo ↔ prawe udo i tak dalej.

Listy rozwijane widgetów w oknie są posortowane alfabetycznie i można je przeszukiwać, więc mapowanie dużej strony
to wpisywanie i filtrowanie zamiast przewijania. Przycisk **Resetuj Mapę** (z potwierdzeniem) czyści
całą mapę. Mapa jest zapisywana w pliku strony, więc podróżuje razem z układem.

## Używanie \{#using-it}

Wiersz Odbicie lustrzane na pasku narzędzi zawiera przycisk **Poza** i listę rozwijaną kierunku, za przyciskami
Mirror Horizontal/Vertical.

**Z zaznaczeniem** — kliknięcie **Poza** odbija każdy zaznaczony widget zgodnie z jego
rolą w mapie: pozycja i obrót widgetu lewego lub prawego są odbijane względem osi kotwicy i
zapisywane na jego *partnerze* (zaznaczona strona jest źródłem i się nie porusza); widgety środkowe i
kotwica odwracają się w miejscu. Zaznaczone widgety, których nie ma w mapie, są pomijane z powiadomieniem,
a reszta jest przetwarzana.

**Bez zaznaczenia** — cała mapa odbija się jednym kliknięciem, w kierunku wskazanym przez listę rozwijaną
(domyślnie **Lewo → Prawo** albo **Prawo → Lewo**): kotwica i każdy widget środkowy
odwracają się w miejscu, a każda para kopiuje swoją stronę źródłową na stronę docelową. To jest
przycisk „skończyłem lewe ramię, odbij prawe”.

Lista rozwijana kierunku to tymczasowa kontrolka strony — nie jest zapisywana w pliku.

## Co zmienia, a czego nie \{#what-it-changes--and-doesnt}

Odbicie pozy przesuwa **geometrię widgetów**: pozycję i obrót na płótnie. Podobnie jak narzędzie Odbicie lustrzane,
nie zmienia tego, z czym widgety są połączone — przycisk prawego uda nadal steruje prawym
udem; zostaje tylko umieszczony dokładnie tam, gdzie lewy, w odbiciu. O to właśnie chodzi:
raz przypisać cele, a potem utrzymywać obie strony wizualnie w zgodzie, gdy układ się zmienia.
