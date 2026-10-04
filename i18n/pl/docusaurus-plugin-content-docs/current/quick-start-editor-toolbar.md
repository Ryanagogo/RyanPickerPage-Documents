import useBaseUrl from '@docusaurus/useBaseUrl';

# Pasek narzędzi \{#toolbar}

**W trybie edycji** pasek narzędzi znajdziesz w nagłówku edytora

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

Te narzędzia pozwalają wykonywać różne operacje na jednym lub wielu zaznaczonych widgetach pickera.

### Jak to działa: \{#the-way-it-works}

- Zaznacz widgety
- Kliknij przycisk na pasku narzędzi, aby otworzyć narzędzie
- Zmień wartość w polu lub kliknij przycisk
- Zmiana wartości lub kliknięcie przycisku dotyczy wszystkich zaznaczonych widgetów

### Obraz \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**To narzędzie działa na widgety etykiety i obrazu — oba mogą mieć obraz.**

- Zaznacz widgety etykiety lub obrazu, a następnie kliknij listę rozwijaną, aby wyszukać żądany obraz lub dodać obraz zaznaczony w Content Browserze. Wszystkie zaznaczone widgety użyją tego obrazu

### Kolor \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**To narzędzie działa na wszystkie widgety z kolorem tła. Działa też na widgety zawierające tekst.**

- Zaznacz widgety, kliknij kolor tła lub czcionki i wybierz żądany kolor w próbniku kolorów. Wszystkie zaznaczone widgety otrzymają te kolory

### Etykieta \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**To narzędzie działa na widgety zawierające tekst.**

- Zaznacz widgety, a następnie zmień tekst w polu Etykieta lub wartość rozmiaru czcionki. Tekst wszystkich zaznaczonych widgetów zostanie zaktualizowany

### Rozmiar \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**To narzędzie działa na wszystkie widgety**

- Zaznacz widgety, a następnie zmień wartości szerokości lub wysokości. Szerokość lub wysokość wszystkich zaznaczonych widgetów zostanie zmieniona

### Przesunięcie \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**To narzędzie działa na wszystkie zaznaczone widgety**

- Zaznacz widgety, a następnie zmień wartość przesunięcia. Po kliknięciu jednego z przycisków strzałek wszystkie zaznaczone widgety przesuną się o tę wartość.

### Wyrównaj \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**To narzędzie działa na wszystkie zaznaczone widgety**

- Zaznacz widgety, a następnie kliknij jeden z przycisków wyrównywania lub rozkładania. Krawędzie wszystkich zaznaczonych widgetów zostaną wyrównane albo widgety zostaną przesunięte tak, aby były równomiernie rozłożone.
- W funkcjach wyrównywania kotwicą jest ostatnio zaznaczony widget, więc wszystkie pozostałe zaznaczone widgety zostaną wyrównane do niego.

### Odbicie lustrzane \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### To narzędzie działa na wszystkie zaznaczone widgety \{#this-tool-affects-all-selected-widgets}

- Zaznacz widgety, a następnie kliknij jeden z przycisków odwrócenia lub odbicia. Wszystkie zaznaczone widgety zostaną przeniesione na swoje odbite pozycje

#### Dla odwrócenia (Mirror Flip) możesz ustawić sposób działania. \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **Własny:** każdy zaznaczony widget odwraca się względem własnej osi
- **Ostatnio zaznaczony (z nim):** wszystkie zaznaczone widgety odwracają się wokół ostatnio zaznaczonego widgetu. Ostatnio zaznaczony również odwraca się względem własnej osi
- **Ostatnio zaznaczony (bez):** wszystkie zaznaczone widgety odwracają się wokół ostatnio zaznaczonego widgetu. Ostatnio zaznaczony widget pozostaje nietknięty i się nie porusza.
- **Widoczne płótno:** wszystkie zaznaczone widgety odwracają się względem osi widocznego płótna

#### Aby Odbicie pozy działało, trzeba utworzyć Pose Mapy do odbicia. \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **Pose Mapy do odbicia:** pozwalają zdefiniować widget-kotwicę odbicia oraz ustawić widgety środkowe i pary widgetów lewy/prawy.
- **Wiele map na stronie:** możesz mieć więcej niż jedną mapę, np. jedną dla ciała i jedną dla twarzy.
