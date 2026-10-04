---
sidebar_position: 6
---

# Переключатель \{#toggle}

*Переключатель с двумя состояниями — классический пример использования IK/FK.*

## В режиме Live \{#in-live-mode}

У переключателя два состояния, **A** и **B**. Щелчок переключает их, и состояние, которое
только что стало активным, применяет собственную конфигурацию: его метку, цвета; выделяются назначенные ему контролы рига
и акторы, и выполняется его собственный [скрипт на Python](./python-scripting).
Всё в переключателе настраивается **для каждого состояния** — переключатель IK/FK может в одном состоянии выделять IK-контролы,
а в другом — FK-контролы, с разным цветом для каждого.

## Группы переключателей \{#toggle-groups}

Сгруппируйте несколько переключателей (контекстное меню при двух или более выделенных), и они будут вести себя как
радиокнопки: каждый переключатель объявляет, какое из его состояний считается «включённым» (его **Состояние "Вкл"**), и
включение одного участника группы выключает всех остальных. Сгруппированные виджеты имеют на холсте особую
рамку, группам можно давать имена и переименовывать их, а
[вид **По группе** в Outliner](./attribute-editor-and-outliner) показывает участников каждой группы под
её заголовком. При копировании группы предлагается вставка, воссоздающая её как совершенно новую группу вместе с участниками и
именем.

## Управление bool-каналом рига \{#driving-a-rigs-bool-channel}

Помимо выделения контролов, переключатель можно напрямую привязать к **bool-каналу анимации** контрола
Control Rig — например, к самому атрибуту переключения IK/FK на риге:

- Укажите **родительский контрол** канала и сам **канал**, а также выберите, какое состояние переключателя
  означает, что канал равен *true*.
- Тогда щелчок по переключателю также записывает bool-значение.
- Привязка двусторонняя: страница опрашивает текущее значение канала и отражает его в
  визуальном состоянии переключателя, поэтому при прокрутке таймлайна через ключ переключения IK/FK кнопка на странице меняет состояние,
  не выполняя повторно своё действие по щелчку.

## Создание \{#authoring}

Поля редактора атрибутов: для каждого состояния метка / цвет фона / цвет шрифта / размер шрифта / имена
контролов / целевые акторы / скрипт на Python; текущее состояние и состояние «Вкл»; привязка к bool-каналу анимации
(включение, родительский контрол, имя канала, состояние true); и общий блок
положения/размера/вращения/радиуса угла.

## Скрипты \{#scripting}

`URyanPickerToggleFunctionLibrary` (категория `Ryan Picker Page|Toggle`). Большинство функций принимает
`ERyanPickerToggleState` и читает/записывает конфигурацию одного состояния:

| Функция | |
|---|---|
| `GetToggleState` / `SetToggleState` | текущее состояние |
| `GetOnState` / `SetOnState` | какое состояние считается «включённым» для исключительности в группе |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | главный выключатель привязки к каналу анимации |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Подклассы Blueprint могут реализовывать `BI_RyanPickerToggle`: `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, а также
[общие события жизненного цикла](./blueprint-api#event-hooks).
