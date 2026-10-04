# Podstawy widgetów \{#widget-basics}

### Tworzenie widgetów \{#create-widgets}

- Aby tworzyć nowe widgety, musisz być w trybie edycji
- Kliknij prawym przyciskiem puste miejsce na płótnie, aby otworzyć menu kontekstowe z pozycjami do tworzenia różnych typów widgetów pickera
- Nowy widget zostanie umieszczony w miejscu, w którym znajdował się wskaźnik myszy podczas kliknięcia prawym przyciskiem.
- Tworzenie widgetów dodaje wpis do stosu cofania, więc możesz cofnąć i ponowić utworzenie

### Usuwanie widgetów \{#delete-widgets}

- Aby usuwać widgety, musisz być w trybie edycji
- Wszystkie zaznaczone widgety usuniesz klawiszem „Delete”
- Pojedynczy widget usuniesz, klikając go prawym przyciskiem, aby otworzyć jego menu kontekstowe. Na dole menu znajdziesz pozycję do usunięcia tego widgetu.
- Usuwanie widgetów dodaje wpis do stosu cofania, więc możesz cofnąć i ponowić usunięcie.

### Zaznaczanie widgetów \{#select-widgets}

- Widgety możesz zaznaczać zarówno w trybie Live, jak i w trybie edycji
- Widgety zaznaczysz, klikając je lub rysując wokół nich prostokąt
- W trybie Live niektórych widgetów nie da się zaznaczyć:
  - Widgety etykiet
  - Widgety obrazów
- W trybie edycji można zaznaczyć wszystkie widgety
  - W Outlinerze możesz zablokować widgety, aby nie dało się ich zaznaczyć. Przydaje się to, gdy kilka widgetów leży jeden na drugim.
- Kolejność zaznaczania widgetów jest zapamiętywana. Niektóre funkcje trybu edycji korzystają z tej kolejności

### Transformowanie widgetów \{#transform-widgets}

- Aby transformować widgety, musisz być w trybie edycji
- **Przesuwanie**
  - Przy jednym lub kilku zaznaczonych widgetach umieść kursor nad jednym z nich, tak aby zmienił się w kursor przesuwania. Następnie kliknij i przeciągnij — wszystkie zaznaczone widgety będą podążać za myszą.
- **Obracanie**
  - Gdy kursor jest nad widgetem i ma postać kursora przesuwania, przytrzymanie klawisza Alt zmienia go w kursor obrotu. Następnie kliknij i przeciągnij — wszystkie zaznaczone widgety będą płynnie obracać się wokół ostatnio zaznaczonego widgetu.
  - Jeśli przytrzymasz jednocześnie Alt i Shift, obrót będzie następował co 15 stopni
- Transformowanie widgetów dodaje wpis do stosu cofania, więc możesz cofnąć i ponowić transformacje.

### Zmiana rozmiaru widgetów \{#resize-widgets}

- Aby zmieniać rozmiar widgetów, musisz być w trybie edycji
- Gdy najedziesz wskaźnikiem na krawędź lub róg widgetu, kursor zmieni się w kursor zmiany rozmiaru krawędzi lub rogu. Następnie kliknij i przeciągnij, aby zmienić rozmiar widgetu.
- Zmiana rozmiaru działa tylko na jednym widgecie
- Zmiana rozmiaru widgetów dodaje wpis do stosu cofania, więc możesz cofnąć i ponowić zmianę rozmiaru.

### Wycinanie, kopiowanie i wklejanie \{#cut-copy-and-paste}

- Aby wycinać, kopiować i wklejać widgety, musisz być w trybie edycji
- Możesz używać standardowych skrótów Ctrl + X, Ctrl + C i Ctrl + V do wycinania, kopiowania i wklejania zaznaczonych widgetów
- Pojedynczy widget możesz kliknąć prawym przyciskiem, aby otworzyć menu kontekstowe — znajdziesz w nim pozycje Wytnij i Kopiuj
- Ctrl + V wkleja widgety w miejscu kursora myszy
- Po kliknięciu prawym przyciskiem pustego miejsca na płótnie menu kontekstowe oferuje dwie opcje wklejania
  - **Wklej**
    - Wkleja widgety w miejscu kursora myszy
  - **Wklej w miejscu**
    - Wkleja widgety w tym samym miejscu, z którego zostały skopiowane lub wycięte

### Menu kontekstowe widgetu \{#widget-popup-menu}

- Aby widzieć menu kontekstowe widgetów, musisz być w trybie edycji
- Kliknięcie widgetu prawym przyciskiem otwiera menu kontekstowe
  - Pierwsze pozycje pokazują nazwę i typ widgetu oraz opcje wycinania i kopiowania
  - Ostatnia pozycja służy do usunięcia widgetu
  - Pozostałe pozycje zależą od typu klikniętego widgetu

### Edytor atrybutów \{#attribute-editor}

- Aby widzieć Edytor atrybutów, musisz być w trybie edycji
- Edytor atrybutów pokazuje atrybuty tylko wtedy, gdy zaznaczony jest jeden widget. Jeśli zaznaczysz kilka, nic nie zostanie wyświetlone. (To zachowanie zmieni się w przyszłej wersji)
- Pierwsze pozycje podają nazwę i typ widgetu oraz pozwalają go zablokować, aby nie dało się go zaznaczyć
  - Pozostałe pozycje zależą od typu zaznaczonego widgetu

### Outliner \{#outliner}

- Aby widzieć Outliner, musisz być w trybie edycji
- Outliner pokazuje wszystkie widgety na Picker Page, pogrupowane według warstwy wyświetlania, typu widgetu lub grupy (dotyczy to grup widgetów przełączników)
- Jeśli widget jest zaznaczony na płótnie, jego pozycja w Outlinerze również jest zaznaczona, i odwrotnie.
- Dwukrotne kliknięcie pozycji widgetu w Outlinerze pozwala zmienić jego nazwę
- W widoku według warstwy wyświetlania są pola wyboru do blokowania i odblokowywania widgetów. Zablokowanych widgetów nie można zaznaczyć w trybie edycji. Przydaje się to, gdy kilka widgetów leży jeden na drugim.
- Po zaznaczeniu widgetu w Outlinerze możesz użyć skrótu „F”, aby wyśrodkować widok na tym widgecie. Pomaga to, gdy trudno znaleźć konkretny widget
