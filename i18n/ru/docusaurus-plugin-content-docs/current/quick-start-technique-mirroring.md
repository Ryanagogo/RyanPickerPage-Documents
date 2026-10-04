import useBaseUrl from '@docusaurus/useBaseUrl';

# Отражение \{#mirroring}

### Инструмент «Отразить виджеты» \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**Этот инструмент доступен только в режиме редактирования.**

Он помогает отражать виджеты в раскладке, поэтому пригодится при создании раскладок для двуногих и других персонажей, которым нужна симметрия «лево/право».

## Инструмент состоит из двух частей \{#the-tool-is-divided-into-two-parts}

### Переворот выделенного \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### Режимы переворота \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **Сам**
  - Каждый выделенный виджет переворачивается относительно собственной оси
- **Последний выбранный (вкл.)**
  - Все выделенные виджеты переворачиваются вокруг последнего выделенного виджета, а он сам переворачивается относительно своей оси
- **Последний выбранный (искл.)**
  - Это режим по умолчанию
  - Все выделенные виджеты переворачиваются вокруг последнего выделенного виджета, но он сам не затрагивается и не двигается
- **Видимый холст**
  - Все выделенные виджеты переворачиваются относительно видимой в данный момент области холста

##### Направления переворота \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

Конкретный результат переворота зависит от выбранного режима

- **Flip Horizontal**
  - Переворачивает выделенные виджеты вдоль оси X.
- **Flip Vertical**
  - Переворачивает выделенные виджеты вдоль оси Y

### Отражение заранее заданных наборов поз \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### Отразить выделенные виджеты \{#mirror-selected-widgets}

- Все выделенные виджеты, для которых есть определение в Pose Map, отражаются в соответствии со своей Pose Map
- Виджет может входить только в одну Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### Отразить позу слева направо \{#mirror-pose-left-to-right}

- Эта операция работает с Pose Map, выбранной в данный момент в редакторе Pose Map
- Если отразились не те виджеты, отмените операцию и смените текущую Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### Отразить позу справа налево \{#mirror-pose-right-to-left}

- Эта операция работает с Pose Map, выбранной в данный момент в редакторе Pose Map
- Если отразились не те виджеты, отмените операцию и смените текущую Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Задание Pose Map \{#define-pose-maps}

Нажмите кнопку «Map», чтобы открыть редактор Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### Редактор Pose Map \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

На одной Picker Page можно задать несколько Pose Map. Например, одну карту для виджетов тела и одну для виджетов лица

##### Создание новой Pose Map \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Имя карты \{#map-name}

Новая карта получает имя по умолчанию, но вы можете переименовать её как угодно

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### Опорный виджет \{#anchor-widget}

Все виджеты в Pose Map отражаются и трансформируются относительно опорного виджета (якоря)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### Центральные виджеты \{#center-widgets}

Все центральные виджеты выравниваются по центру относительно опорного виджета

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### Пары виджетов \{#widget-pairs}

Виджеты в левом и правом столбцах пар отражаются друг в друга относительно опорного виджета

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

После настройки карты отражение позы справа налево даёт вот такой результат

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### Сброс карты \{#resetting-a-map}

Чтобы очистить карту, просто нажмите кнопку «Сбросить карту»

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Переключение между картами \{#switching-between-maps}

Когда карт больше одной, можно щёлкнуть по выпадающему меню и выбрать карту, которую нужно редактировать

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### Имена виджетов \{#widget-names}

Pose Map используют имена виджетов, поэтому стоит давать виджетам осмысленные имена, а не оставлять имена по умолчанию, назначаемые при создании.

Чтобы увидеть текущее имя виджета, выделите виджет и откройте Outliner («+» в левом верхнем углу холста)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

Сначала вы, скорее всего, увидите имя по умолчанию

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Двойной щелчок по элементу в Outliner позволяет изменить имя виджета

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Назначение виджета элементу Pose Map \{#setting-a-widget-on-a-pose-map-item}

**Это можно сделать двумя способами**

Используйте выпадающее меню и выберите элемент из списка

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

Используйте кнопку «Set Selected» справа от элемента карты. При нажатии в поле будет подставлено имя выделенного виджета

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

Для пар виджетов нужно задать элементы и в левом, и в правом столбце

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
