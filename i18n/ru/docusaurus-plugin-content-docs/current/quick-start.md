import useBaseUrl from '@docusaurus/useBaseUrl';

# Быстрый старт \{#quick-start}

#### Загрузите Control Rig манекена \{#load-in-a-mannequin-control-rig}

<img src={useBaseUrl('/img/quick-start/quick-start/load-mannequin.png')} alt="load-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

**Откройте Picker Page: Tools -> Ryan Tools -> Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/start-picker-page.png')} alt="start-picker-page" style={{marginLeft: '0px', zoom: '80%'}} />

Откройте готовую Picker Page для Epic Mannequin

**Picker Page: Файл -> Загрузить готовую -> Epic Mannequin**

<img src={useBaseUrl('/img/quick-start/quick-start/open-epic-mannequin-picker.png')} alt="open-epic-mannequin-picker" style={{marginLeft: 0, zoom: '80%'}} />

Щёлкните по одной из кнопок на Picker Page

<img src={useBaseUrl('/img/quick-start/quick-start/pick-mannequin-picker-button.png')} alt="pick-mannequin-picker-button" style={{marginLeft: 0, zoom: '50%'}} />

Обведите рамкой несколько кнопок, чтобы выделить сразу много контролов

<img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-buttons.png')} alt="multi-select-mannequin-buttons" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-controls.png')} alt="multi-select-mannequin-controls" style={{zoom: '67%'}} />

Давайте создадим собственную кнопку пикера.

Для начала возьмём пустой холст Picker Page

**Picker Page: Файл -> Новая Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/new-blank-picker-page.png')} alt="new-blank-picker-page" style={{marginLeft: 0, zoom: '67%'}} />

Если появится окно «Несохранённые изменения», просто нажмите «Да»

<img src={useBaseUrl('/img/quick-start/quick-start/unsaved-changes-popup.png')} alt="unsaved-changes-popup" style={{marginLeft: 0, zoom: '80%'}} />

#### Теперь перейдите в режим редактирования. Просто нажмите кнопку-переключатель «Режим редактирования». \{#now-go-into-edit-mode--just-click-the-edit-mode-toggle-button}

Кнопка станет синей, а холст Picker Page получит красную рамку.

<img src={useBaseUrl('/img/quick-start/quick-start/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: '50%'}} />

Перейдите во вьюпорт и выделите один из контролов манекена

<img src={useBaseUrl('/img/quick-start/quick-start/select-control-on-mannequin.png')} alt="select-control-on-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

Вернитесь на Picker Page и щёлкните правой кнопкой по пустому месту холста.

Откроется контекстное меню, через которое можно добавить виджет пикера.

Выберите первый пункт — «Кнопка выбора»

<img src={useBaseUrl('/img/quick-start/quick-start/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/new-selection-button.png')} alt="new-selection-button" style={{marginLeft: 0, zoom: '100%'}} />

Какой бы контрол Control Rig ни был выделен, он будет добавлен в виджет кнопки выбора при её создании.

#### Нажмите кнопку-переключатель «Режим редактирования», чтобы выйти из режима редактирования. \{#click-on-the-edit-mode-toggle-button-to-get-out-of-edit-mode}

Если щёлкнуть левой кнопкой по пустому месту холста, выделение с кнопки снимется. Вместе с этим снимется выделение и с контрола Control Rig.

<img src={useBaseUrl('/img/quick-start/quick-start/deselect-button.png')} alt="deselect-button" style={{marginLeft: 0, zoom: ''}} />

Если щёлкнуть по кнопке или обвести её рамкой, кнопка снова будет выделена. Вместе с ней снова выделится и контрол Control Rig. (В режиме редактирования выделяется только виджет — Control Rig не затрагивается.)

<img src={useBaseUrl('/img/quick-start/quick-start/box-select-button.png')} alt="box-select-button" style={{marginLeft: 0, zoom: ''}} />

<img src={useBaseUrl('/img/quick-start/quick-start/test-select-selection-button.png')} alt="test-select-selection-button" style={{marginLeft: 0, zoom: '80%'}} />

**Примечание:** если сначала выделить контрол Control Rig, будет выделен виджет.

#### Теперь снова перейдите в режим редактирования. \{#now-go-back-into-edit-mode}

Если навести курсор на край или угол, появится курсор изменения размера.

Если навести курсор на середину виджета, появится курсор перемещения.

Нажав кнопку мыши с курсором изменения размера или перемещения, вы сможете изменить размер виджета или переместить его.

<img src={useBaseUrl('/img/quick-start/quick-start/resize-widget-mouse-pointer.png')} alt="resize-widget-mouse-pointer" style={{marginLeft: 0, zoom: ''}} /><img src={useBaseUrl('/img/quick-start/quick-start/translate-widget-mouse-pointer.png')} alt="translate-widget-mouse-pointer" />

**Не снимая выделения с виджета, откроем редактор атрибутов.**

Маленький «+» в правом верхнем углу холста

<img src={useBaseUrl('/img/quick-start/quick-start/open-attribute-editor.png')} alt="open-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

В группе «Внешний вид» можно изменить цвета виджета

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-color.png')} alt="change-widget-color" style={{marginLeft: 0, zoom: '80%'}} />

В группе «Текст» можно изменить текст метки кнопки

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-text.png')} alt="change-widget-text" style={{marginLeft: 0, zoom: ''}} />

Закончив редактировать атрибуты кнопки, можно закрыть редактор атрибутов и создать другие виджеты.

#### Спасибо, что прошли быстрый старт! \{#thanks-for-reading-through-the-quick-start}
