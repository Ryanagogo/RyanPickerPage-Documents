import useBaseUrl from '@docusaurus/useBaseUrl';

# Przycisk wyboru \{#selection-button}

### Tworzenie nowego przycisku wyboru \{#creating-a-new-selection-button}

Aby utworzyć nowy **przycisk wyboru**, musisz być w **trybie edycji**

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**Kliknij prawym przyciskiem puste miejsce na płótnie pickera**, aby otworzyć menu kontekstowe, a następnie kliknij pozycję „Przycisk wyboru”

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### Cele przycisku wyboru \{#selection-button-targets}

##### Ustawianie celów na liście zaznaczenia \{#setting-targets-in-the-selection-list}

Są dwa podstawowe sposoby ustawiania i dodawania celów do listy zaznaczenia

- **Przed utworzeniem przycisku wyboru**: zaznacz kontrolki lub aktorów, których przycisk ma zaznaczać, a następnie utwórz nowy przycisk wyboru
- **Po utworzeniu przycisku wyboru**: zaznacz kontrolki lub aktorów, kliknij przycisk prawym przyciskiem, aby otworzyć menu kontekstowe, i wybierz jedną z akcji dotyczących celów

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **„Ustaw z zaznaczonymi”** zastępuje wszystkie cele na liście obecnie zaznaczonymi
- **„Dodaj zaznaczone”** dodaje obecnie zaznaczone cele do listy celów

##### Usuwanie wybranych celów z listy zaznaczenia \{#removing-specific-targets-from-the-selection-list}

- Aby usunąć konkretne cele, zaznacz kontrolki lub aktorów do usunięcia, kliknij przycisk wyboru prawym przyciskiem, aby otworzyć menu kontekstowe, i kliknij pozycję „Usuń zaznaczone”.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### Czyszczenie listy zaznaczenia \{#clearing-the-selection-list}

- Aby usunąć wszystkie cele z listy zaznaczenia, kliknij przycisk wyboru prawym przyciskiem, aby otworzyć menu kontekstowe, a następnie kliknij pozycję „Wyczyść”.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### Podgląd bieżących celów na liście zaznaczenia \{#seeing-the-current-targets-in-the-selection-list}

Są trzy podstawowe sposoby sprawdzenia, jakie cele są na listach.

-  **Najedź kursorem na przycisk wyboru**, aby wyświetlić podpowiedź. Pokazuje ona wszystkie cele.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **Kliknij przycisk wyboru prawym przyciskiem**, aby otworzyć menu kontekstowe, a następnie kliknij pozycję „Wylistuj aktualne”. Lista celów zostanie wypisana w Output Log

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **Zaznacz przycisk wyboru**, a następnie otwórz Edytor atrybutów i przejrzyj listy w kategoriach Control Rig i Cele

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### Zaznaczanie celów z listy zaznaczenia \{#selecting-the-targets-in-the-selection-list}

Są dwa podstawowe sposoby zaznaczenia celów

- **W trybie Live** wystarczy kliknąć przycisk, aby zaznaczyć wszystkie cele
- **W trybie edycji** kliknij przycisk prawym przyciskiem, aby otworzyć menu kontekstowe, a następnie wybierz pozycję „Wybierz aktualne”.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### Zaznaczanie innych widgetów \{#selecting-other-widgets}

Czasem przydaje się możliwość zaznaczania innych widgetów — na przykład gdy masz przyciski pickera dla wszystkich stawów palców i chcesz mieć jeden przycisk zaznaczający kolumnę lub rząd kostek.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

Najpierw upewnij się, że jesteś w trybie edycji, a następnie zaznacz wszystkie widgety docelowe

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Następnie kliknij przycisk wyboru prawym przyciskiem, aby otworzyć menu kontekstowe, i wybierz „Inne widżety -> ”

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Po powrocie do trybu Live kliknięcie przycisku wyboru zaznaczy widgety docelowe i wszystkie cele tych widgetów.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### W Edytorze atrybutów \{#from-the-attribute-editor}

Aby zobaczyć wartości w Edytorze atrybutów, musisz zaznaczyć jeden widget

##### Skrypt Python \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

W polu Źródło Skryptu możesz wkleić dowolny skrypt w Pythonie. Jeśli skrypt jest długi, pole się powiększy.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

To pole nie nadaje się zbyt dobrze do edycji skryptów i nie warto umieszczać w nim zbyt długich skryptów. Jeśli twój skrypt jest długi i chcesz używać prawdziwego edytora skryptów, możesz po prostu zaimportować skrypt i go uruchomić.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### Wygląd przycisku wyboru \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **Użyj Etykiety**
  - Pokazuje lub ukrywa etykietę
- **Kolor**
  - Ustawia kolor przycisku
- **Czcionka**
  - Ustawia kolor i rozmiar czcionki

##### Tekst przycisku wyboru \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **Etykieta**

  - Ustawia tekst etykiety

- **Style tekstu**

  - W przypadku dłuższego tekstu możesz użyć poniższych opcji formatowania

    - Justification

    - Word Wrap

    - Margin

    - Clip
