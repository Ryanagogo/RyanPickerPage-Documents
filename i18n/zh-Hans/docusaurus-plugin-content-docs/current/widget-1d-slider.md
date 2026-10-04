---
sidebar_position: 4
---

# 1D 滑块 \{#1d-slider}

*只连接到一个变换通道的滑块。*

## 在实时模式下 \{#in-live-mode}

拖动滑块会把它的值写入每个已分配的 Control Rig 控制点和目标 Actor 的**一个通道**——
平移、旋转或缩放的 X、Y 或 Z。不会改动其他任何内容：
滑块读取每个目标当前的变换，只替换它负责的那一个通道，然后把
变换写回。数值变化与插件其他部分走同一条应用路径，
包括 Sequencer 自动关键帧，因此滑块的移动会像手动移动控制点一样打上关键帧。

由于 1D 滑块绝不会占用不属于它的通道，多个滑块可以并排驱动*同一*控制点的不同
通道——在同一个脚部控制点上，平移 Y 的“抬起”和旋转 Z 的“滚动”
互不冲突。

右键单击滑块会提供 **重置为初始值**，将其恢复到预设的
默认值。

## 数值模型 \{#value-model}

有三个数值很重要，其中只有两个会变化：

- **最小值 / 最大值**——拖动所映射的范围。
- **Current Value**——实时值；拖动会写入它，应用到目标上的也是它。
- **初始值**——由作者设定的默认值，拖动*永远*不会改动它。只有在属性编辑器中
  有意修改时才会改变，因此它始终是 “重置为初始值” 可以安全返回的
  数值。

可选的 **步长** 会让拖动按增量吸附，**已锁定** 则会完全禁用
拖动（适用于不希望在镜头中途被误碰的参考滑块）。

## 编写 \{#authoring}

属性编辑器字段：标签/名称、最小值/最大值/当前值/初始值、**活动 Channel**（此
滑块驱动的唯一通道）、**方向**（水平/垂直）、条颜色、手柄颜色、
条粗细、内凹手柄样式、锁定、步长——外加与
[选择按钮](./widget-select-button) 共用的目标分配字段，以及通用的
位置/大小/旋转/圆角半径属性块。

## 脚本 \{#scripting}

`URyanPicker1DSliderFunctionLibrary`（类别 `Ryan Picker Page|1DSlider`）：

| 函数 | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | 范围 |
| `GetCurrentValue` / `SetCurrentValue` | 实时值 |
| `GetInitialValue` / `SetInitialValue` | 预设的重置点 |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`：Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | 目标 |

Blueprint 子类可以实现 `BI_RyanPicker1DSlider`：`OnSliderConstructed`、
`OnSliderValueChanged(float)`、`OnSliderDragBegin`、`OnSliderDragEnd(bool bValueChanged)`，以及
[通用生命周期事件](./blueprint-api#event-hooks)。
