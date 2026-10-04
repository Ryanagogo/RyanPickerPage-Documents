import useBaseUrl from '@docusaurus/useBaseUrl';

# Виджет переключателя \{#toggle-widget}

### Создание нового виджета переключателя \{#creating-a-new-toggle-widget}

Чтобы создать новый **виджет переключателя**, нужно находиться в **режиме редактирования**

**Щёлкните правой кнопкой по пустому месту холста пикера**, чтобы открыть контекстное меню, затем выберите пункт «Переключатель»

### Состояния переключателя \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

Изначально два состояния имеют метки «Состояние A» и «Состояние B» и соответствуют значениям 0 и 1.

Щелчок по виджету переключателя переключает эти два состояния

Каждое состояние может иметь собственную метку, цвет, список отображаемых виджетов и скрипт на Python.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

Переключение видимости виджетов

Если вы хотите скрывать или показывать некоторые виджеты в зависимости от состояния, сначала перейдите в режим редактирования,

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

Затем выделите виджеты, которые должны отображаться при переключении в состояние A

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

Затем щёлкните правой кнопкой по виджету переключателя, чтобы открыть контекстное меню, и выберите «Состояние A -> Задать из выделенных Виджеты». Выделенные виджеты попадут в список целей состояния A

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Далее выделите виджеты, которые должны отображаться в состоянии B

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Затем щёлкните правой кнопкой по виджету переключателя, чтобы открыть контекстное меню, и выберите пункт «Состояние B -> Задать из выделенных Виджеты». Выделенные виджеты попадут в список целей состояния B.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Чтобы увидеть, как работает переключатель, вернитесь в режим Live.

- В состоянии A виджеты состояния A отображаются, а виджеты состояния B скрыты.
- В состоянии B виджеты состояния A скрыты, а виджеты состояния B отображаются.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Переключение состояний Control Rig

Если в вашем Control Rig есть bool-канал анимации, вы можете управлять этим каналом с помощью виджета переключателя. Это обычная практика для IK/FK-сетапов.

Это можно увидеть, если в шоте есть Control Rig манекена. Просто выделите контрол Main — шестиугольник у основания персонажа.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

Затем посмотрите в Sequencer или на панели Anim Details, чтобы увидеть bool-значения для переключения IK/FK

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

Чтобы подключить это к виджету переключателя, убедитесь, что вы в режиме редактирования

Выделите контрол Main, затем щёлкните правой кнопкой по виджету переключателя, чтобы открыть контекстное меню, и выберите «Set Parent Control»

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

Затем, не снимая выделения с виджета переключателя, откройте редактор атрибутов, найдите раздел «Канал анимации» и убедитесь, что флажок «Использовать булево значение» установлен.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

Затем щёлкните по полю «Канал» и выберите канал анимации, который хотите использовать

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

При необходимости можно также выбрать, какое состояние будет «Истинным состоянием»

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

Вернувшись в режим Live, вы сможете щелчком по виджету переключателя одновременно менять состояние рига и состояния видимости виджетов (в этом примере — состояния IK/FK рига левой ноги).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
