---
sidebar_position: 5
---

# 2D-слайдер \{#2d-slider}

*Одна перетаскиваемая ручка, два канала трансформации.*

## В режиме Live \{#in-live-mode}

2D-слайдер — это пэд: перетаскивание его ручки записывает ось X в один канал трансформации, а
ось Y — в другой, одновременно, на каждом назначенном контроле/акторе. Типичные применения —
пэд Перемещение X / Перемещение Y для постановки стопы или пэд Вращение X / Вращение Y для направления взгляда.

Он подчиняется той же дисциплине каналов, что и [1D-слайдер](./widget-1d-slider): каждая ось
заменяет на цели только свой канал, поэтому 2D-пэд уживается с другими слайдерами, управляющими
остальными каналами того же контрола. Автоключ работает. **Сбросить к начальному значению** здесь тоже есть в
контекстном меню.

## Модель значений \{#value-model}

Такая же, как у 1D-слайдера, но двумерная: **Минимальное значение/Максимальное значение** — пары по осям, **Current
Value** — текущее 2D-значение, **Начальное значение** — заданное значение по умолчанию, не меняющееся при перетаскивании. **Размер шага**
и **Заблокировано** работают так же.

Два канала выбираются независимо (**Активный Channel X**, **Активный Channel Y**). Назначение
обеим осям *одного и того же* канала почти всегда ошибка настройки, поэтому редактор атрибутов
помечает это предупреждающим баннером, а не позволяет двум осям молча бороться за одно значение.

## Создание \{#authoring}

Поля редактора атрибутов: метка/имя, мин./макс. по осям, текущее/начальное значения, Активный Channel X
и Y (с предупреждением об одинаковом канале), цвет ручки, стиль утопленной ручки, блокировка, размер шага,
назначение целей и общий блок положения/размера/вращения/радиуса угла.

## Скрипты \{#scripting}

`URyanPicker2DSliderFunctionLibrary` (категория `Ryan Picker Page|2DSlider`):

| Функция | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, по осям |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | цели |

Подклассы Blueprint могут реализовывать `BI_RyanPicker2DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
а также [общие события жизненного цикла](./blueprint-api#event-hooks).
