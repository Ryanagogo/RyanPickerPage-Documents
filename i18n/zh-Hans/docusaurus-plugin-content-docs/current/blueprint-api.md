---
sidebar_position: 16
---

# Blueprint API \{#blueprint-api}

插件的脚本接口始终遵循同一种模式：由静态节点组成的**函数库**——
一个共享库用于所有部件都具备的功能，另外每种部件类型各有一个库，用于
该类型独有的功能。每个函数都以 `DefaultToSelf` 的方式将部件作为 `Target` 传入——在部件
Blueprint 自己的图表中，这些节点会自动连接到 `self`。

## 共享函数——所有部件类型 \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`，类别 `Ryan Picker Page|Widget`：

| 函数 | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | 画布几何 |
| `GetRotation` / `SetRotation` | 角度，规范到 [0, 360) |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | [圆角级联](./attribute-editor-and-outliner#corner-radius) 中的部件级 |
| `GetWidgetName` / `SetWidgetName` | 页面内唯一的名称 |
| `GetCurrentControlRig` | 所属页面的当前绑定 |
| `GetActorFromGUID` | 通过页面解析 Actor 标识 |

## 各类型专用函数 \{#per-type-functions}

每种部件类型自己的库在其页面中有说明：

| 库 | 类别 | 参考 |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [选择按钮](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [1D 滑块](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [2D 滑块](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [开关](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [标签](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [图像](./widget-image#scripting) |

## 事件钩子 \{#event-hooks}

四种交互式部件类型各自公开了一个由 `BlueprintNativeEvent` 钩子组成的 Blueprint 接口——
在 Blueprint 子类中实现它们，即可无需 C++ 添加行为：

| 接口 | 类型专用事件 |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`、`OnSelectButtonClicked`、`OnControlRigControlsSelected`、`OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`、`OnSliderValueChanged`、`OnSliderDragBegin`、`OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | 同样的四个事件，值为 2D |
| `BI_RyanPickerToggle` | `OnToggleConstructed`、`OnToggleClicked`、`OnToggleStateChanged`、`OnControlRigControlsSelected`、`OnTargetActorsSelected` |

这四个接口都继承了所有交互式类型共有的三个**生命周期事件**：

- `OnWidgetSelected(bool)`——编辑模式下的选择发生了变化
- `OnWidgetHighlighted(bool)`——悬停状态发生了变化
- `OnWidgetEditModeChanged(bool)`——页面进入或退出了编辑模式

标签和图像没有钩子接口——它们没有任何可单击的内容——但共享
函数库同样适用于它们。

## 自定义部件 Blueprint \{#custom-widget-blueprints}

最深层的扩展点：**在 Blueprint 中创建某个部件类型的子类，页面就会把它当作
一种独立的一等部件类型。**

1. 创建一个 Blueprint 类，其父类为原生的叶部件类之一
   （`RyanPickerSelectButton`、`RyanPickerToggle`、`RyanPicker1DSlider` 等）。
2. 实现其钩子接口的事件来添加你的行为——在 `OnToggleStateChanged` 上添加额外的
   视觉效果，在 `OnSelectButtonClicked` 上添加自定义逻辑，镜头需要什么都可以。
3. 你的类会自动出现在画布右键菜单的 **自定义部件** 下，
   并按其基础类型分组。

自定义部件会继承一切——保存/加载、撤销、属性编辑器、对齐/镜像工具、
目标指定——因为页面会把叶类型的任何子类识别为该类型。使用自定义部件的页面
会在保存文件中记录该 Blueprint 的类路径，因此在任何包含该 Blueprint 的项目中都能
正确重新加载。

对于不值得专门创建 Blueprint 子类的单击行为，通常一个简单的
[部件 Python 脚本](./python-scripting) 就足够了。
