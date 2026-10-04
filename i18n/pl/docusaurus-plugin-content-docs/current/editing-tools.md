---
sidebar_position: 9
---

# Narzędzia edycji i płótna \{#editing--canvas-tools}

Wszystko na tej stronie odbywa się w **trybie edycji**. Samo płótno można przesuwać i powiększać w obu
trybach — buduj w takim powiększeniu, jakie ci odpowiada.

## Zaznaczanie \{#selection}

- Kliknij widget, aby go zaznaczyć; Shift/Ctrl+kliknięcie rozszerza zaznaczenie.
- Przeciągnij po pustym miejscu płótna, aby narysować prostokąt zaznaczenia.
- Zaznaczone widgety pokazują osiem uchwytów skalowania i uchwyt obrotu, każdy z własnym kursorem.

Edytor atrybutów działa na pojedynczym zaznaczeniu; narzędzia paska narzędzi opisane poniżej służą do edycji wielu
widgetów naraz.

## Bezpośrednia manipulacja \{#direct-manipulation}

Przeciągnij widget, aby go przesunąć. Przeciągnij uchwyt, aby zmienić rozmiar — skalowanie działa poprawnie także w obróconych
widgetach. Przeciągnij uchwyt obrotu, aby obrócić widget wokół jego środka; obrót jest zapisywany w
stopniach, a obrócone widgety w pełni działają w trybie Live (obrócony slider przeciąga się wzdłuż
jego obróconej osi). Przytrzymaj Shift podczas obracania, aby przyciągać co 15°. Obracanie zaznaczenia wielu widgetów
obraca całą grupę sztywno wokół wspólnego punktu obrotu (zakotwiczonego w ostatnio zaznaczonym
widgecie), a każdy widget dodatkowo obraca się wokół własnego środka.

Zablokowany widget nie podlega żadnej z tych operacji — zobacz [Blokowanie widgetów](./attribute-editor-and-outliner#widget-locking).

Klawisze strzałek przesuwają zaznaczenie o mały krok (z Shift — o większy; obie odległości to Class
Defaults strony). Narzędzie **Przesunięcie** na pasku narzędzi dodaje strzałki na ekranie z własną odległością
ustawianą w polu liczbowym — do powtarzalnych, dokładnych kroków.

## Narzędzia paska narzędzi \{#toolbar-tools}

Jednocześnie aktywny jest jeden wiersz narzędzi, przełączany w nagłówku:

| Narzędzie | Działa na zaznaczeniu |
|---|---|
| **Obraz** | przypisuje teksturę każdemu zaznaczonemu widgetowi |
| **Kolor** | nadaje kolor tła/czcionki każdemu zaznaczonemu widgetowi |
| **Etykieta** | ustawia tekst etykiety i rozmiar czcionki w całym zaznaczeniu |
| **Rozmiar** | ustawia dokładną szerokość/wysokość w całym zaznaczeniu |
| **Przesunięcie** | strzałki o stałym kroku, jak wyżej |
| **Wyrównaj** | do lewej/prawej/góry/dołu, środki poziome/pionowe oraz równomierne rozłożenie |
| **Odbicie lustrzane** | zobacz poniżej |

Zmiany kolorów z paska narzędzi (i Edytora atrybutów) są łączone podczas przeciągania w
próbniku kolorów — jeden krok cofania na sesję koloru, a nie na każdy ruch myszy.

## Odbicie lustrzane \{#mirror}

Buduje jedną stronę układu na podstawie drugiej: **Mirror Horizontal** / **Mirror Vertical** odbijają
pozycję każdego zaznaczonego widgetu względem osi i odwracają jego obrót. Oś ustawia się
listą rozwijaną **Mirror Mode**:

| Tryb | Odbija względem |
|---|---|
| Własny | środka każdego widgetu — widgety odwracają się w miejscu |
| Ostatnio zaznaczony (z nim) | środka ostatnio zaznaczonego widgetu; on także się przesuwa |
| Ostatnio zaznaczony (bez) | środka ostatnio zaznaczonego widgetu; on pozostaje na miejscu |
| Widoczne płótno | środka obszaru, który aktualnie widzisz |

Odbicie jest wyłącznie geometryczne — nie zmienia nazw kontrolek ani nie zamienia kanałów sliderów. Typowy
przebieg pracy to odbij, a potem przepnij cele: odbij widgety lewego ramienia, a następnie skieruj kopie na
kontrolki prawej strony. Powtarzalne odbijanie lewo/prawo, które pamięta pary, opisano w
[Odbiciu pozy](./mirror-pose).

## Grupy warstw \{#layer-groups}

Każdy widget należy do jednej **grupy warstw**, a kolejność rysowania wynika po prostu z członków każdej grupy,
grupa po grupie, od przodu do tyłu. Trzy grupy — **Obrazy**, **Etykiety**, **Kontrolki** — są tworzone
na każdej stronie i nie można ich usunąć (usunięcie dowolnej innej grupy przypisuje jej członków z powrotem do
domyślnej grupy ich typu). Poza tymi trzema możesz tworzyć, zmieniać nazwy, porządkować i blokować
dowolnie wiele grup — zablokowana grupa blokuje każdy znajdujący się w niej widget, tak samo jak
[blokowanie](./attribute-editor-and-outliner#widget-locking) pojedynczego widgetu.

Kliknij widget prawym przyciskiem, aby użyć **Przenieś na wierzch / Step Up / Step Down / Wyślij na spód** w obrębie jego grupy. Przenoszenie
widgetu między grupami, zmiana kolejności samych grup i blokowanie odbywają się w
[widoku Według warstwy](./attribute-editor-and-outliner#outliner-left) w Outlinerze — pełny interfejs
zarządzania metodą przeciągnij i upuść opisano na tamtej stronie.

## Kopiowanie, wycinanie, wklejanie \{#copy-cut-paste}

Ctrl+C / Ctrl+X / Ctrl+V na dowolnym zaznaczeniu. Wklejone elementy pojawiają się przy kursorze; wklejanie do innej otwartej karty
strony działa, a Wklej w miejscu zachowuje dokładne pozycje przy przenoszeniu między stronami.
Wklejone widgety zachowują nazwy, gdy to możliwe, a duplikaty otrzymują przyrostek liczbowy. Grupy
przełączników można kopiować i wklejać [jako całe grupy](./widget-toggle#toggle-groups).

## Wartości domyślne widgetów \{#widget-defaults}

Wygląd świeżo dodanego widgetu jest ustalany warstwowo, od najmniej do najbardziej szczegółowej:

1. **Class Defaults** — wartości początkowe dla typu (kolory, rozmiary, czcionki…) edytowalne w
   panelu Class Defaults strony, po jednej kategorii na typ widgetu.
2. **Sticky Defaults** — kliknij prawym przyciskiem dowolny widget → **Copy to Sticky Defaults**, a kolejne
   widgety tego typu będą tworzone na jego wzór. To, które kategorie właściwości są przenoszone (kolor, czcionka, promień narożnika,
   rozmiar, obrót, tekst, obraz), wybiera się w [Ustawieniach edytora](./editor-settings).

Dotyczy to tylko widgetów dodanych z menu Add Widget — wklejone i wczytane widgety zachowują własne
dane.
