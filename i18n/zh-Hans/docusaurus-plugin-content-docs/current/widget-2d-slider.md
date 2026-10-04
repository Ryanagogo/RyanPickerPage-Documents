---
sidebar_position: 5
---

# 2D 滑块 \{#2d-slider}

*一个可拖动的手柄，两个变换通道。*

## 在实时模式下 \{#in-live-mode}

2D 滑块是一块控制板：拖动其手柄时，会在每个已分配的控制点/Actor 上
同时将 X 轴写入一个变换通道、将 Y 轴写入另一个变换通道。典型用法包括
用于脚部着地的 平移 X / 平移 Y 控制板，或用于眼睛朝向的 旋转 X / 旋转 Y 控制板。

它遵循与 [1D 滑块](./widget-1d-slider) 相同的通道规则：每个轴
只替换目标上属于自己的通道，因此 2D 控制板可以与驱动同一控制点其余通道的
其他滑块共存。自动关键帧同样适用。**重置为初始值** 在这里也位于右键菜单中。

## 数值模型 \{#value-model}

与 1D 滑块相同，只是变成了二维：**最小值/最大值** 是按轴成对的值，**Current
Value** 是实时的 2D 值，**初始值** 是不受拖动影响的预设默认值。**步长**
和 **已锁定** 的行为也相同。

两个通道分别独立选择（**活动 Channel X**、**活动 Channel Y**）。把
两个轴都设置为*同一个*通道几乎总是编写错误，因此属性编辑器
会用警告横幅标出，而不是让两个轴默默争夺同一个值。

## 编写 \{#authoring}

属性编辑器字段：标签/名称、按轴的最小/最大值、当前值/初始值、活动 Channel X
和 Y（带有同通道警告）、手柄颜色、内凹手柄样式、锁定、步长、
目标分配，以及通用的位置/大小/旋转/圆角半径属性块。

## 脚本 \{#scripting}

`URyanPicker2DSliderFunctionLibrary`（类别 `Ryan Picker Page|2DSlider`）：

| 函数 | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`，按轴 |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | 目标 |

Blueprint 子类可以实现 `BI_RyanPicker2DSlider`：`OnSliderConstructed`、
`OnSliderValueChanged(FVector2D)`、`OnSliderDragBegin`、`OnSliderDragEnd(bool bValueChanged)`，
以及 [通用生命周期事件](./blueprint-api#event-hooks)。
