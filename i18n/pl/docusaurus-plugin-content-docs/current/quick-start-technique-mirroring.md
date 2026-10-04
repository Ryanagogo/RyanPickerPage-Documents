import useBaseUrl from '@docusaurus/useBaseUrl';

# Odbicie lustrzane \{#mirroring}

### Narzędzie Odbij widgety \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**To narzędzie jest dostępne tylko w trybie edycji.**

Służy do odbijania widgetów w układzie, dzięki czemu pomaga tworzyć układy dla dwunogów lub innych postaci wymagających symetrii lewo/prawo.

## Narzędzie składa się z dwóch części \{#the-tool-is-divided-into-two-parts}

### Odwracanie zaznaczenia \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### Tryby odwracania \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **Własny**
  - Każdy zaznaczony widget odwraca się względem własnej osi
- **Ostatnio zaznaczony (z nim)**
  - Wszystkie zaznaczone widgety odwracają się wokół ostatnio zaznaczonego widgetu, a on sam odwraca się względem własnej osi
- **Ostatnio zaznaczony (bez)**
  - To tryb domyślny
  - Wszystkie zaznaczone widgety odwracają się wokół ostatnio zaznaczonego widgetu, ale on sam pozostaje nietknięty i się nie porusza
- **Widoczne płótno**
  - Wszystkie zaznaczone widgety odwracają się względem aktualnie widocznego obszaru płótna

##### Kierunki odwracania \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

Konkretny wynik odwrócenia zależy od wybranego zachowania

- **Flip Horizontal**
  - Odwraca zaznaczone widgety wzdłuż osi X.
- **Flip Vertical**
  - Odwraca zaznaczone widgety wzdłuż osi Y

### Odbijanie predefiniowanych zestawów póz \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### Odbicie zaznaczonych widgetów \{#mirror-selected-widgets}

- Wszystkie zaznaczone widgety, które mają definicję w Pose Mapie, zostaną odbite zgodnie z tą Pose Mapą
- Widget może należeć tylko do jednej Pose Mapy

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### Odbij pozę z lewej na prawą \{#mirror-pose-left-to-right}

- Ta operacja działa na Pose Mapie aktualnie wybranej w edytorze Pose Map
- Jeśli odbite zostaną niewłaściwe widgety, cofnij operację i zmień bieżącą Pose Mapę

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### Odbij pozę z prawej na lewą \{#mirror-pose-right-to-left}

- Ta operacja działa na Pose Mapie aktualnie wybranej w edytorze Pose Map
- Jeśli odbite zostaną niewłaściwe widgety, cofnij operację i zmień bieżącą Pose Mapę

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Definiowanie Pose Map \{#define-pose-maps}

Kliknij przycisk „Map”, aby otworzyć edytor Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### Edytor Pose Map \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

Na jednej Picker Page możesz zdefiniować więcej niż jedną Pose Mapę. Na przykład jedną dla widgetów ciała i jedną dla widgetów twarzy

##### Tworzenie nowej Pose Mapy \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Nazwa mapy \{#map-name}

Nowo utworzona mapa ma domyślną nazwę, którą możesz zmienić na dowolną

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### Widget-kotwica \{#anchor-widget}

Wszystkie widgety w Pose Mapie są odbijane i transformowane względem widgetu-kotwicy

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### Widgety środkowe \{#center-widgets}

Wszystkie widgety środkowe są wyrównywane do środka względem widgetu-kotwicy

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### Pary widgetów \{#widget-pairs}

Widgety w lewej i prawej kolumnie par odbijają się nawzajem względem widgetu-kotwicy

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

Po skonfigurowaniu mapy tak wygląda wynik odbicia pozy z prawej na lewą

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### Resetowanie mapy \{#resetting-a-map}

Aby wyczyścić mapę, po prostu kliknij przycisk Resetuj Mapę

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Przełączanie między mapami \{#switching-between-maps}

Gdy masz więcej niż jedną mapę, możesz kliknąć listę rozwijaną i wybrać, którą mapę chcesz edytować

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### Nazwy widgetów \{#widget-names}

Pose Mapy korzystają z nazw widgetów, więc warto nadawać widgetom sensowne nazwy, zamiast zostawiać domyślne nazwy nadawane przy tworzeniu.

Aby zobaczyć bieżącą nazwę widgetu, zaznacz go i otwórz Outliner („+” w lewym górnym rogu płótna)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

Na początku możesz zobaczyć nazwę domyślną

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Dwukrotne kliknięcie elementu w Outlinerze pozwala zmienić nazwę widgetu

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Przypisywanie widgetu do elementu Pose Mapy \{#setting-a-widget-on-a-pose-map-item}

**Możesz to zrobić na dwa sposoby**

Użyj listy rozwijanej i wybierz element z listy

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

Użyj przycisku „Set Selected” po prawej stronie elementu mapy. Po jego kliknięciu nazwa zaznaczonego widgetu zostanie wpisana w pole

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

W przypadku par widgetów musisz ustawić element w lewej i w prawej kolumnie

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
