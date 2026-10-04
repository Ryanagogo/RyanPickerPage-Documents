---
sidebar_position: 3
---

# 选择按钮 \{#select-button}

*主力部件：一个用来选择对象的按钮。*

## 在实时模式下 \{#in-live-mode}

单击选择按钮会选中分配给它的 Control Rig 控制点和目标 Actor——在
视口、绑定以及（已绑定时的）Sequencer 中——然后运行它的
[Python 脚本](./python-scripting)（如果有）。一个按钮可以只包含一个控制点，也可以包含一整
组（“选中所有手指”），并且可以自由混合绑定控制点和普通 Actor。

**Ctrl+单击** 是切换而不是替换：如果按钮的目标尚未全部选中，
它们会被添加到当前选择中；如果已经全部选中，则会从选择中移除——无论哪种情况，
你选择中的其余部分都不受影响。

## 两种选择行为 \{#two-selection-behaviors}

选择按钮在两种模式之一下工作，可通过属性编辑器中的 **交互式选择模式**
复选框切换：

### 选择集模式（默认） \{#selection-set-mode-default}

按钮是一个保存的选择集。单击 → 它的目标成为当前选择。按钮
不会跟踪你在其他地方选择了什么。

### 交互式选择模式 \{#interactive-selection-mode}

按钮会实时反映编辑器中的选择，就像传统动画拾取器的
行为一样：

- 页面每秒多次轮询当前视口/绑定的选择，只要按钮的目标全部
  属于当前选择，就会**点亮按钮**——在视口中选中控制点，
  页面上对应的按钮就会自动高亮。
- 单击以**累加**方式选择——按钮的目标会加入已选中的内容，
  而不是替换它，因此依次单击多个交互式按钮即可逐步构建选择。
- Ctrl+单击会将按钮的目标从选择中移除，同上。

此模式专为<strong>每个按钮对应一个控制点（或一个 Actor）</strong>而设计。在具有多个目标的按钮上
启用它也能工作，但会弹出警告提示——多目标按钮无法
明确地反映部分选择。轮询只在页面标签页处于前台且编辑模式关闭时运行，
因此后台标签页不会产生任何开销。

可以通过 [编辑器设置](./editor-settings) 让新按钮默认以任一模式启动。

## 编写 \{#authoring}

在编辑模式下选中按钮后，属性编辑器会显示：

- **标签**（及是否显示）、部件名称、字体大小
- **背景颜色** 和 **字体颜色**
- **控制点名称**——根据页面的当前绑定解析；请参阅
  [Control Rig 与目标 Actor](./control-rig-and-targets)
- **目标 Actor**——所有已分配 Actor 的解析后、便于阅读的摘要
- **交互式选择模式** 复选框
- **Python 脚本**——多行；每次单击时在选择之后运行
- 位置、大小、旋转、圆角半径——所有部件通用

新按钮会根据创建时所选中的内容填充目标列表（这是一项
[设置](./editor-settings)，默认开启）——最快的编写流程就是*在
视口中选择、添加按钮、完成*。

## 脚本 \{#scripting}

Blueprint 函数位于 `URyanPickerSelectButtonFunctionLibrary`
（类别 `Ryan Picker Page|SelectControl`）中；通用的变换/外观函数位于
[共享部件库](./blueprint-api) 中。

| 函数 | |
|---|---|
| `GetControlNames` | 已分配的绑定控制点名称 |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | 已分配的 Actor，两种标识空间——请参阅 [Sequencer 可生成对象](./control-rig-and-targets#sequencer-spawnables) |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | 对多目标按钮，设置函数会发出警告（但不会阻止） |

Blueprint 子类可以实现 `BI_RyanPickerSelectButton` 接口事件：
`OnSelectButtonConstructed`、`OnSelectButtonClicked`、`OnControlRigControlsSelected`、
`OnTargetActorsSelected`，以及所有部件类型共有的 [三个生命周期事件](./blueprint-api#event-hooks)。
关于子类如何出现在 Add Widget 菜单中，请参阅 [自定义部件 Blueprint](./blueprint-api#custom-widget-blueprints)。
