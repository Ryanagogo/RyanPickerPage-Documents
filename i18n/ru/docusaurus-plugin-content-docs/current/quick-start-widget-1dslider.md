import useBaseUrl from '@docusaurus/useBaseUrl';

# Виджет 1D-слайдера \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Создание нового виджета 1D-слайдера \{#creating-a-new-1d-slider-widget}

Чтобы создать новый **виджет 1D-слайдера**, нужно находиться в **режиме редактирования**

**Щёлкните правой кнопкой по пустому месту холста пикера**, чтобы открыть контекстное меню, затем выберите пункт «1D-слайдер»

### Назначение \{#purpose}

- 1D-слайдер позволяет изменять значение в пределах от минимального до максимального. У него только 1 степень свободы, поэтому слайдер влияет только на одну ось трансформации

- Значение, применяемое к трансформации, является локальным.

- Это значение применяется ко всем целям, добавленным в виджет, будь то контролы Control Rig или акторы уровня.

### Внешний вид \{#appearance}

Можно задать цвет виджета 1D-слайдера

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Цели \{#targets}

##### Добавление целей \{#adding-targets}

Как и в случае с целями кнопки выбора, можно выделить любое количество контролов Control Rig и акторов уровня, затем щёлкнуть правой кнопкой по виджету 1D-слайдера, чтобы открыть контекстное меню, и выбрать пункт «Задать из выделенного».

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Настройка значений слайдера \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Начальное значение**: стартовое значение слайдера. Его положение на слайдере визуально меняется при изменении минимального и максимального значений.
- **Минимальное значение**: наименьшее значение, которого достигает слайдер
- **Максимальное значение**: наибольшее значение, которого достигает слайдер

##### Настройка направления слайдера \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **По горизонтали**: слайдер движется из стороны в сторону
- **По вертикали**: слайдер движется вверх и вниз

##### Выбор оси трансформации \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

Чтобы выбрать ось, щёлкните по выпадающему меню «Активный Channel» и выберите один из девяти пунктов трансформации.
