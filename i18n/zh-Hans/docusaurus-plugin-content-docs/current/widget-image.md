---
sidebar_position: 8
---

# 图像 \{#image}

*画布上的美术素材——角色肖像、身体示意图、背景。*

图像是优秀拾取器的视觉基础：在按钮后面放上角色的多视图或身体轮廓，
就能把抽象的按钮网格变成一眼就能看懂的界面。与
[标签](./widget-label) 一样，它们在实时模式下没有单击行为，并且初始位于
**图像** [图层组](./editing-tools#layer-groups) 中——这是三个默认组中最靠后的一个——
因此，除非你之后自行调整组的顺序，否则新添加的图像不会遮挡交互式控制点。

## 裁剪平移/缩放 \{#crop-panzoom}

不必事先在图像编辑器中裁剪纹理，而是直接在页面上取景：**Image Scale**
放大源纹理，**Image Offset** 在纹理上平移可见窗口。一张
角色设定图就可以供十几个图像部件使用，每个部件框取不同的身体部位。标签的背景图像
也有同样的这两个控件。

## 编写 \{#authoring}

- **纹理**
- **拉伸模式**——纹理如何适配部件的矩形区域
- **Image Scale** / **Image Offset**——裁剪窗口
- **背景颜色**——位于纹理后面；也是 **图像 Alpha** 混合所朝向的颜色
- **图像 Alpha**——纹理覆盖在背景颜色之上的不透明度，0–1
- 圆角半径（与标签一样，默认为直角）
- 通用的位置/大小/旋转属性块

## 渲染 \{#rendering}

图像和标签通过一个共享材质（`M_RyanPickerRoundedImage`）的动态实例绘制，
而不是使用普通的纹理画刷。圆角、按拉伸模式适配以及裁剪窗口
都在这一次材质处理中计算完成——这就是两种类型在像素级别上表现完全一致、
并且裁剪不产生任何额外开销的原因。

## 脚本 \{#scripting}

`URyanPickerImageFunctionLibrary`（类别 `Ryan Picker Page|Image`）：

| 函数 | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | 裁剪平移/缩放 |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImageAlpha` / `SetImageAlpha` | 限制在 0–1 |

没有事件钩子接口；[通用部件函数](./blueprint-api) 适用。
