import useBaseUrl from '@docusaurus/useBaseUrl';

# Виджет 2D-слайдера \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Создание нового виджета 2D-слайдера \{#creating-a-new-2d-slider-widget}

Чтобы создать новый **виджет 2D-слайдера**, нужно находиться в **режиме редактирования**

**Щёлкните правой кнопкой по пустому месту холста пикера**, чтобы открыть контекстное меню, затем выберите пункт «2D-слайдер»

### Назначение \{#purpose}

- 2D-слайдер позволяет изменять значения в пределах от минимального до максимального. У него 2 степени свободы, по X и по Y, поэтому слайдер может влиять на две разные оси трансформации

- Значения, применяемые к трансформации, являются локальными.

- Значения применяются ко всем целям, добавленным в виджет, будь то контролы Control Rig или акторы уровня.

### Внешний вид \{#appearance}

Можно задать цвет виджета 2D-слайдера

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Цели \{#targets}

##### Добавление целей \{#adding-targets}

Как и в случае с целями кнопки выбора, можно выделить любое количество контролов Control Rig и акторов уровня, затем щёлкнуть правой кнопкой по виджету 2D-слайдера, чтобы открыть контекстное меню, и выбрать пункт «Задать из выделенного».

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Настройка значений слайдера по направлениям X и Y \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Начальное значение**: стартовые значения слайдера по направлениям X и Y. Их положение на слайдере визуально меняется при изменении минимального и максимального значений.
- **Минимальное значение**: наименьшие значения, которых достигает слайдер по X и Y
- **Максимальное значение**: наибольшие значения, которых достигает слайдер по X и Y

##### Выбор осей трансформации для обоих активных каналов \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- Чтобы выбрать ось, щёлкните по одному из выпадающих меню «Активный Channel» и выберите один из девяти пунктов трансформации.
- «Активный Channel X» и «Активный Channel Y» должны использовать разные оси трансформации. Они не могут использовать одну и ту же ось
