---
sidebar_position: 1
---

# 简介 \{#introduction}

**Ryan Picker Page** 是一款用于 Unreal Engine 的动画拾取器：一块由按钮、滑块、
开关、标签和图像组成的画布。你只需为每个角色布局一次，之后即可一键选择并驱动
Control Rig 控制点（以及关卡中的 Actor）——不必在镜头制作中途翻找视口、
绑定层级或 Sequencer 树。

拾取器和它的编辑器是同一个窗口。切换到编辑模式来搭建布局；切换回
实时模式即可用它制作动画。页面以可移植的 JSON 文件保存，可以在
项目之间以及团队成员之间共享。

## 系统要求 \{#requirements}

- Unreal Engine **5.6 – 5.8**
- 启用以下引擎插件（本插件已将其声明为依赖项）：**Control Rig**、
  **Synthesis**、**Python Editor Script Plugin**

本插件仅用于编辑器。它永远不会进入打包构建，也不会在运行时添加任何内容。

## 安装 \{#installation}

1. 将 `RyanPickerPage` 文件夹复制到项目的 `Plugins/` 目录中。
2. 在 **Edit → Plugins** 中启用它，然后重启编辑器。
3. 通过 **Tools → Ryan Picker Page** 打开拾取器。

## 如何阅读本文档 \{#finding-your-way-around-these-docs}

如果你是使用他人为你搭建好的页面的**动画师**，请从
[入门](./getting-started) 以及各部件页面中关于实时模式的章节开始。

如果你要**搭建页面**，请按以下顺序阅读：[入门](./getting-started) →
[Control Rig 与目标 Actor](./control-rig-and-targets) → 各部件类型页面 →
[编辑与画布工具](./editing-tools)。

如果你是**扩展插件的 TD**，请直接阅读
[Blueprint API](./blueprint-api) 和 [Python 脚本](./python-scripting) 页面——其中也介绍了
如何将你自己的部件变体作为 Blueprint 子类发布，使其出现在 Add Widget 菜单中。

### 所有页面 \{#all-pages}

| 章节 | 页面 |
|---|---|
| 基础 | [入门](./getting-started) |
| 部件类型 | [选择按钮](./widget-select-button) · [1D 滑块](./widget-1d-slider) · [2D 滑块](./widget-2d-slider) · [开关](./widget-toggle) · [标签](./widget-label) · [图像](./widget-image) |
| 搭建页面 | [编辑与画布工具](./editing-tools) · [镜像姿势](./mirror-pose) · [书签](./bookmarks) |
| 目标指定的工作原理 | [Control Rig 与目标 Actor](./control-rig-and-targets) · [属性编辑器与 Outliner](./attribute-editor-and-outliner) |
| 文件与设置 | [保存、加载与文件](./save-load-and-files) · [编辑器设置](./editor-settings) |
| 扩展 | [Blueprint API](./blueprint-api) · [Python 脚本](./python-scripting) |
