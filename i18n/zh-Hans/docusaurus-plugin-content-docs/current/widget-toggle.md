---
sidebar_position: 6
---

# 开关 \{#toggle}

*一个双态切换器——最典型的用途是 IK/FK 切换。*

## 在实时模式下 \{#in-live-mode}

开关有两个状态：**A** 和 **B**。单击会在两者之间切换，刚刚
变为活动状态的那一方会应用自己的配置：它的标签和颜色，它所分配的绑定控制点
和 Actor 会被选中，并运行它自己的 [Python 脚本](./python-scripting)。
开关的一切都**按状态**编写——一个 IK/FK 开关可以在一个状态下选中 IK
控制点，在另一个状态下选中 FK 控制点，并且每个状态使用不同的颜色。

## 开关组 \{#toggle-groups}

将多个开关编组（选中两个或以上后使用右键菜单），它们就会像单选按钮一样
工作：每个开关声明自己的哪个状态算作“开启”（即其 **开启状态**），
开启组中的一个成员会关闭其他所有成员。编组后的部件在画布上带有独特的
边框，组可以命名和重命名，
[Outliner 的 **按组** 视图](./attribute-editor-and-outliner) 会在每个组的标题下
列出其成员。复制一个组时，可以选择一种粘贴方式，将其重建为一个全新的组，包括成员和
名称。

## 驱动绑定的布尔通道 \{#driving-a-rigs-bool-channel}

除了选择控制点之外，开关还可以直接绑定到 Control Rig 控制点上的**布尔动画通道**——
例如绑定上实际的 IK/FK 切换属性：

- 指定通道的**父控制点**和**通道**本身，并选择开关的哪个状态
  表示通道为 *true*。
- 之后单击开关时也会写入该布尔值。
- 绑定是双向的：页面会轮询通道的实时值，并将其反映到
  开关的视觉状态上，因此在时间轴上拖过一个已打关键帧的 IK/FK 切换时，页面上的按钮会随之切换，
  而不会重新执行其单击行为。

## 编写 \{#authoring}

属性编辑器字段：按状态设置的标签 / 背景颜色 / 字体颜色 / 字体大小 / 控制点
名称 / 目标 Actor / Python 脚本；当前状态和开启状态；动画通道布尔绑定
（启用、父控制点、通道名称、true 状态）；以及通用的
位置/大小/旋转/圆角半径属性块。

## 脚本 \{#scripting}

`URyanPickerToggleFunctionLibrary`（类别 `Ryan Picker Page|Toggle`）。大多数函数接受一个
`ERyanPickerToggleState`，并读取/写入某一个状态的配置：

| 函数 | |
|---|---|
| `GetToggleState` / `SetToggleState` | 当前状态 |
| `GetOnState` / `SetOnState` | 在组互斥中哪个状态算作“开启” |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | 动画通道绑定的总开关 |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Blueprint 子类可以实现 `BI_RyanPickerToggle`：`OnToggleConstructed`、
`OnToggleClicked`、`OnToggleStateChanged(ERyanPickerToggleState)`、
`OnControlRigControlsSelected`、`OnTargetActorsSelected`，以及
[通用生命周期事件](./blueprint-api#event-hooks)。
