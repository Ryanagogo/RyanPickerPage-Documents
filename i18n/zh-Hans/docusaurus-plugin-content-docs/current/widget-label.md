---
sidebar_position: 7
---

# 标签 \{#label}

*画布上的文本。单击会直接穿透它。*

标签用于注释：分区标题（“左臂”）、备注或带说明的图像。它们在实时模式下
没有单击行为，也没有目标分配——这也意味着它们是唯一一种
（与 [图像](./widget-image) 一样）可以自由叠放、而不会抢走周围
控制点单击的部件类型。

标签可以实时显示**当前 Control Rig 的名称**，而不是固定文本——在页面角落放一个，
它就会始终告诉动画师这个标签页正在驱动哪个绑定。

## 编写 \{#authoring}

- **文本**、字体大小、字体颜色、**对齐方式**、**自动换行**
- **背景颜色**，以及可选的背景**图像**，图像拥有自己的拉伸模式和
  [裁剪平移/缩放](./widget-image#crop-panzoom)
- **图像 Alpha**——背景图像覆盖在背景颜色之上的不透明度，0–1
- 圆角半径：标签默认使用直角（半径 0），但与其他所有类型一样遵循
  [圆角级联](./attribute-editor-and-outliner#corner-radius)
- 通用的位置/大小/旋转属性块

标签使用与 [图像](./widget-image#rendering) 相同的圆角材质渲染背景，
因此圆角和图像裁剪在两者上的表现完全一致。

## 脚本 \{#scripting}

`URyanPickerLabelFunctionLibrary`（类别 `Ryan Picker Page|Label`）：

| 函数 | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | 背景图像 |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | 裁剪平移/缩放 |
| `GetImageAlpha` / `SetImageAlpha` | 限制在 0–1 |

标签没有事件钩子接口——没有可单击或拖动的东西——但所有
[通用部件函数](./blueprint-api)（位置、大小、旋转、圆角半径、名称）
都适用。
