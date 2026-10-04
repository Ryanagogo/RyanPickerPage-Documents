---
sidebar_position: 16
---

# Blueprint API \{#blueprint-api}

Скриптовый интерфейс плагина везде следует одному шаблону: **библиотеки функций** из статических
нод — одна общая библиотека для того, что есть у каждого виджета, плюс по одной библиотеке на тип виджета для того, что
есть только у него. Каждая функция принимает виджет как `Target` с `DefaultToSelf` — внутри собственного графа
Blueprint виджета ноды сами подключаются к `self`.

## Общие функции — все типы виджетов \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`, категория `Ryan Picker Page|Widget`:

| Функция | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | геометрия на холсте |
| `GetRotation` / `SetRotation` | градусы, приведённые к диапазону [0, 360) |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | уровень виджета в [каскаде скругления](./attribute-editor-and-outliner#corner-radius) |
| `GetWidgetName` / `SetWidgetName` | уникальное в пределах страницы имя |
| `GetCurrentControlRig` | текущий риг страницы-владельца |
| `GetActorFromGUID` | разрешает идентификатор актора через страницу |

## Функции для отдельных типов \{#per-type-functions}

Собственная библиотека каждого типа виджета описана на его странице:

| Библиотека | Категория | Справка |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [Кнопка выбора](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [1D-слайдер](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [2D-слайдер](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [Переключатель](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [Метка](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [Изображение](./widget-image#scripting) |

## Событийные хуки \{#event-hooks}

Каждый из четырёх интерактивных типов виджетов предоставляет Blueprint-интерфейс из хуков `BlueprintNativeEvent` —
реализуйте их в подклассе Blueprint, чтобы добавить поведение без C++:

| Интерфейс | События конкретного типа |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | те же четыре, с 2D-значением |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

Все четыре наследуют три **события жизненного цикла**, общие для всех интерактивных типов:

- `OnWidgetSelected(bool)` — изменилось выделение в режиме редактирования
- `OnWidgetHighlighted(bool)` — изменилось состояние наведения
- `OnWidgetEditModeChanged(bool)` — страница вошла в режим редактирования или вышла из него

У меток и изображений нет интерфейса хуков — в них нечего нажимать, — но общая
библиотека функций их охватывает.

## Пользовательские Blueprint-виджеты \{#custom-widget-blueprints}

Самая глубокая точка расширения: **создайте в Blueprint подкласс типа виджета, и страница будет считать его
полноценным самостоятельным типом виджета.**

1. Создайте класс Blueprint, родителем которого является один из нативных конечных классов виджетов
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider`, …).
2. Реализуйте события его интерфейса хуков, чтобы добавить своё поведение — дополнительные визуальные эффекты в
   `OnToggleStateChanged`, собственную логику в `OnSelectButtonClicked`, всё, что нужно для шота.
3. Ваш класс автоматически появится в контекстном меню холста в разделе **Пользовательские виджеты**,
   сгруппированный по базовому типу.

Пользовательские виджеты наследуют всё — сохранение/загрузку, отмену, редактор атрибутов, инструменты выравнивания/отражения,
назначение целей, — потому что страница распознаёт любой подкласс конечного типа как этот тип. Страницы, которые
используют пользовательский виджет, записывают путь к классу Blueprint в файл сохранения, поэтому корректно загружаются
в любом проекте, содержащем этот Blueprint.

Для поведения по щелчку, которое не оправдывает создание подкласса Blueprint, часто достаточно простого
[скрипта на Python в виджете](./python-scripting).
