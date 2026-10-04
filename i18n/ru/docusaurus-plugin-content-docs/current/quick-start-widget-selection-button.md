import useBaseUrl from '@docusaurus/useBaseUrl';

# Кнопка выбора \{#selection-button}

### Создание новой кнопки выбора \{#creating-a-new-selection-button}

Чтобы создать новую **кнопку выбора**, нужно находиться в **режиме редактирования**

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**Щёлкните правой кнопкой по пустому месту холста пикера**, чтобы открыть контекстное меню, затем выберите пункт «Кнопка выбора»

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### Цели кнопки выбора \{#selection-button-targets}

##### Задание целей в списке выделения \{#setting-targets-in-the-selection-list}

Есть два основных способа задать и добавить цели в список выделения

- **До создания кнопки выбора**: выделите контролы или акторы, которые должна выделять кнопка, затем создайте новую кнопку выбора
- **После создания кнопки выбора**: выделите контролы или акторы, затем щёлкните правой кнопкой по кнопке, чтобы открыть контекстное меню, и выберите одно из действий с целями

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **«Задать из выделенного»** заменяет все цели в списке текущими выделенными
- **«Добавить выделенное»** добавляет текущие выделенные цели в список целей

##### Удаление отдельных целей из списка выделения \{#removing-specific-targets-from-the-selection-list}

- Чтобы удалить отдельные цели, выделите контролы или акторы, которые нужно удалить, затем щёлкните правой кнопкой по кнопке выбора, чтобы открыть контекстное меню, и выберите пункт «Удалить выделенное».

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### Очистка списка выделения \{#clearing-the-selection-list}

- Чтобы удалить все цели из списка выделения, щёлкните правой кнопкой по кнопке выбора, чтобы открыть контекстное меню, затем выберите пункт «Очистить».

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### Просмотр текущих целей в списке выделения \{#seeing-the-current-targets-in-the-selection-list}

Есть три основных способа посмотреть, какие цели находятся в списках.

-  **Наведите курсор на кнопку выбора**, чтобы появилась подсказка. В ней показаны все цели.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **Щёлкните правой кнопкой по кнопке выбора**, чтобы открыть контекстное меню, затем выберите пункт «Вывести текущее». Список целей будет выведен в Output Log

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **Выделите кнопку выбора**, затем откройте редактор атрибутов и посмотрите списки в категориях Control Rig и «Цели»

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### Выделение целей из списка выделения \{#selecting-the-targets-in-the-selection-list}

Есть два основных способа выделить цели

- **В режиме Live** достаточно щёлкнуть по кнопке, чтобы выделить все цели
- **В режиме редактирования** щёлкните правой кнопкой по кнопке, чтобы открыть контекстное меню, затем выберите пункт «Выбрать текущее».

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### Выделение других виджетов \{#selecting-other-widgets}

Иногда нужно выделять другие виджеты — например, если вы сделали кнопки пикера для всех суставов пальцев и хотите одну кнопку, выделяющую столбец или ряд костяшек.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

Сначала убедитесь, что вы в режиме редактирования, затем выделите все целевые виджеты

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Затем щёлкните правой кнопкой по кнопке выбора, чтобы открыть контекстное меню, и выберите «Другие виджеты -> »

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Когда вы вернётесь в режим Live, щелчок по кнопке выбора выделит целевые виджеты и все цели этих виджетов.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### В редакторе атрибутов \{#from-the-attribute-editor}

Чтобы увидеть значения в редакторе атрибутов, нужно выделить ровно один виджет

##### Скрипт Python \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

В поле «Исходный код скрипта» можно вставить любой скрипт на Python. Если скрипт длинный, поле расширится.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

Это поле не очень удобно для редактирования скриптов, и слишком длинные скрипты туда лучше не помещать. Если ваш скрипт длинный и вы хотите пользоваться полноценным редактором скриптов, можно просто импортировать скрипт и запустить его.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### Внешний вид кнопки выбора \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **Использовать метку**
  - Показывает или скрывает метку
- **Цвет**
  - Задаёт цвет кнопки
- **Шрифт**
  - Задаёт цвет и размер шрифта

##### Текст кнопки выбора \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **Метка**

  - Задаёт текст метки

- **Стили текста**

  - Для более длинного текста можно использовать следующие параметры форматирования

    - Justification

    - Word Wrap

    - Margin

    - Clip
