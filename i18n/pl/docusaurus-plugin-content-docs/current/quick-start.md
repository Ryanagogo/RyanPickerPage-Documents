import useBaseUrl from '@docusaurus/useBaseUrl';

# Szybki start \{#quick-start}

#### Wczytaj Control Rig Mannequina \{#load-in-a-mannequin-control-rig}

<img src={useBaseUrl('/img/quick-start/quick-start/load-mannequin.png')} alt="load-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

**Otwórz Picker Page: Tools -> Ryan Tools -> Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/start-picker-page.png')} alt="start-picker-page" style={{marginLeft: '0px', zoom: '80%'}} />

Otwórz predefiniowaną Picker Page dla Epic Mannequina

**Picker Page: Plik -> Wczytaj predefiniowane -> Epic Mannequin**

<img src={useBaseUrl('/img/quick-start/quick-start/open-epic-mannequin-picker.png')} alt="open-epic-mannequin-picker" style={{marginLeft: 0, zoom: '80%'}} />

Kliknij jeden z przycisków na Picker Page

<img src={useBaseUrl('/img/quick-start/quick-start/pick-mannequin-picker-button.png')} alt="pick-mannequin-picker-button" style={{marginLeft: 0, zoom: '50%'}} />

Przeciągnij prostokąt wokół kilku przycisków, aby zaznaczyć wiele kontrolek naraz

<img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-buttons.png')} alt="multi-select-mannequin-buttons" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-controls.png')} alt="multi-select-mannequin-controls" style={{zoom: '67%'}} />

Utwórzmy teraz własny przycisk pickera.

Najpierw zacznijmy od pustego płótna Picker Page

**Picker Page: Plik -> Nowa Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/new-blank-picker-page.png')} alt="new-blank-picker-page" style={{marginLeft: 0, zoom: '67%'}} />

Jeśli pojawi się okienko Niezapisane zmiany, po prostu kliknij „Tak”

<img src={useBaseUrl('/img/quick-start/quick-start/unsaved-changes-popup.png')} alt="unsaved-changes-popup" style={{marginLeft: 0, zoom: '80%'}} />

#### Teraz przejdź do trybu edycji. Wystarczy kliknąć przycisk przełączający „Tryb edycji”. \{#now-go-into-edit-mode--just-click-the-edit-mode-toggle-button}

Przycisk zmieni kolor na niebieski, a płótno Picker Page otrzyma czerwoną ramkę.

<img src={useBaseUrl('/img/quick-start/quick-start/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: '50%'}} />

Przejdź do viewportu i zaznacz jedną z kontrolek Mannequina

<img src={useBaseUrl('/img/quick-start/quick-start/select-control-on-mannequin.png')} alt="select-control-on-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

Wróć do Picker Page i kliknij prawym przyciskiem puste miejsce na płótnie.

Otworzy się menu kontekstowe, z którego możesz dodać widget pickera.

Kliknij pierwszą pozycję, „Przycisk wyboru”

<img src={useBaseUrl('/img/quick-start/quick-start/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/new-selection-button.png')} alt="new-selection-button" style={{marginLeft: 0, zoom: '100%'}} />

Kontrolka Control Rig, którą masz zaznaczoną, zostanie dodana do widgetu przycisku wyboru w chwili jego utworzenia.

#### Kliknij przycisk przełączający Tryb edycji, aby wyjść z trybu edycji. \{#click-on-the-edit-mode-toggle-button-to-get-out-of-edit-mode}

Kliknięcie lewym przyciskiem pustego miejsca na płótnie odznaczy przycisk. Odznaczy to również kontrolkę Control Rig.

<img src={useBaseUrl('/img/quick-start/quick-start/deselect-button.png')} alt="deselect-button" style={{marginLeft: 0, zoom: ''}} />

Jeśli klikniesz przycisk lub narysujesz wokół niego prostokąt, przycisk zostanie ponownie zaznaczony. Ponownie zaznaczy to też kontrolkę Control Rig. (W trybie edycji zaznaczy to tylko widget — Control Rig pozostaje bez zmian).

<img src={useBaseUrl('/img/quick-start/quick-start/box-select-button.png')} alt="box-select-button" style={{marginLeft: 0, zoom: ''}} />

<img src={useBaseUrl('/img/quick-start/quick-start/test-select-selection-button.png')} alt="test-select-selection-button" style={{marginLeft: 0, zoom: '80%'}} />

**Uwaga:** jeśli najpierw zaznaczysz kontrolkę Control Rig, zostanie zaznaczony widget.

#### Teraz wróć do trybu edycji. \{#now-go-back-into-edit-mode}

Gdy najedziesz myszą na krawędź lub narożnik, zobaczysz kursor skalowania.

Gdy najedziesz myszą na środek widgetu, zobaczysz kursor przesuwania.

Kliknięcie i przeciągnięcie kursorem skalowania lub przesuwania pozwala zmienić rozmiar widgetu lub go przesunąć.

<img src={useBaseUrl('/img/quick-start/quick-start/resize-widget-mouse-pointer.png')} alt="resize-widget-mouse-pointer" style={{marginLeft: 0, zoom: ''}} /><img src={useBaseUrl('/img/quick-start/quick-start/translate-widget-mouse-pointer.png')} alt="translate-widget-mouse-pointer" />

**Przy zaznaczonym widgecie otwórzmy Edytor atrybutów.**

Mały „+” w prawym górnym rogu płótna

<img src={useBaseUrl('/img/quick-start/quick-start/open-attribute-editor.png')} alt="open-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

W grupie Wygląd możesz zmienić kolory widgetu

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-color.png')} alt="change-widget-color" style={{marginLeft: 0, zoom: '80%'}} />

W grupie Tekst możesz zmienić tekst etykiety przycisku

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-text.png')} alt="change-widget-text" style={{marginLeft: 0, zoom: ''}} />

Gdy skończysz edytować atrybuty przycisku, możesz zamknąć Edytor atrybutów i tworzyć kolejne widgety.

#### Dziękujemy za przeczytanie szybkiego startu! \{#thanks-for-reading-through-the-quick-start}
