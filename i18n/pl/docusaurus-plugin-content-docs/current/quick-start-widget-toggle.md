import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget przełącznika \{#toggle-widget}

### Tworzenie nowego widgetu przełącznika \{#creating-a-new-toggle-widget}

Aby utworzyć nowy **widget przełącznika**, musisz być w **trybie edycji**

**Kliknij prawym przyciskiem puste miejsce na płótnie pickera**, aby otworzyć menu kontekstowe, a następnie kliknij pozycję „Przełącznik”

### Stany przełącznika \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

Początkowo oba stany mają etykiety Stan A i Stan B i reprezentują wartości 0 i 1.

Kliknięcie widgetu przełącznika przełącza między tymi dwoma stanami

Każdy stan może mieć własną etykietę, kolor, listę widgetów do wyświetlenia i skrypt w Pythonie.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

Przełączanie widoczności widgetów

Jeśli masz widgety, które chcesz ukrywać lub pokazywać w zależności od stanu, zacznij od przejścia do trybu edycji,

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

Następnie zaznacz widgety, które mają być widoczne po przełączeniu na Stan A

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

Potem kliknij prawym przyciskiem widget przełącznika, aby otworzyć menu kontekstowe, i wybierz „Stan A -> Ustaw z zaznaczonymi Widgety”. Zaznaczone widgety trafią na listę celów Stanu A

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Następnie zaznacz widgety, które mają być widoczne w Stanie B

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Potem kliknij prawym przyciskiem widget przełącznika, aby otworzyć menu kontekstowe, i kliknij pozycję „Stan B -> Ustaw z zaznaczonymi Widgety”. Zaznaczone widgety trafią na listę celów Stanu B.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Jeśli chcesz zobaczyć, jak działa przełącznik, wróć do trybu Live.

- W Stanie A widgety Stanu A są widoczne, a widgety Stanu B ukryte.
- W Stanie B widgety Stanu A są ukryte, a widgety Stanu B widoczne.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Przełączanie stanów Control Rig

Jeśli twój Control Rig ma kanał animacji typu bool, możesz sterować nim za pomocą widgetu przełącznika. Jest to typowe w konfiguracjach IK/FK.

Możesz to zobaczyć, jeśli masz w ujęciu Control Rig Mannequina. Po prostu zaznacz kontrolkę Main — sześciokąt u podstawy postaci.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

Następnie zajrzyj do Sequencera lub panelu Anim Details, aby zobaczyć wartości bool do przełączania IK/FK

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

Aby połączyć to z widgetem przełącznika, upewnij się, że jesteś w trybie edycji

Zaznacz kontrolkę Main, a następnie kliknij prawym przyciskiem widget przełącznika, aby otworzyć menu kontekstowe, i wybierz „Set Parent Control”

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

Następnie, przy zaznaczonym widgecie przełącznika, otwórz Edytor atrybutów, znajdź sekcję Kanał animacji i upewnij się, że opcja „Użyj wartości boolowskiej” jest zaznaczona.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

Potem kliknij pole „Kanał” i wybierz kanał animacji, którego chcesz użyć

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

W razie potrzeby możesz też wskazać, który stan ma być „Stanem prawdziwym”

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

Po powrocie do trybu Live możesz kliknąć widget przełącznika, aby zmienić jednocześnie stan riga i stany widoczności widgetów (w tym przykładzie stany IK/FK riga lewej nogi).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
