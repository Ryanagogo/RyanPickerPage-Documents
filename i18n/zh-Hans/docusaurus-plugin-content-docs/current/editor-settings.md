---
sidebar_position: 15
---

# 编辑器设置 \{#editor-settings}

**文件 → Settings…** 会打开插件的全局设置对话框。这些是**按计算机**保存的
偏好设置，适用于你打开的每个页面；与之相对的是按页面的 Class Defaults（保存在
页面 Blueprint 中）以及按文件的数据（保存在页面文件中）。

## 新部件行为 \{#new-widget-behavior}

| 设置 | 默认值 | |
|---|---|---|
| Seed New Widget Targets From Selection | 开启 | 新按钮/滑块会根据当前选择预先填充目标——请参阅 [目标如何分配](./control-rig-and-targets#how-targets-get-assigned) |
| Default Interactive Selection Mode | 关闭 | 新的选择按钮以 [交互式选择模式](./widget-select-button#interactive-selection-mode) 启动 |
| 新建部件默认大小 | 200 × 100 | 带有 **Override** 复选框——关闭时以页面自身的 Class Defaults 值为准；开启时由本对话框的值替代 |
| 默认圆角半径 | 10 | Override 复选框的规则相同；它是 [圆角级联](./attribute-editor-and-outliner#corner-radius) 中的全局后备值 |

## Sticky Defaults 类别 \{#sticky-defaults-categories}

七个复选框——**颜色、字体、圆角半径、大小、旋转、文本、图像**，默认全部
开启——用于控制
[Copy to Sticky Defaults](./editing-tools#widget-defaults) 实际会把哪些属性组带到新部件上。
例如，关闭大小和旋转，即可让 sticky defaults 只影响外观。

## 页面与维护 \{#page--housekeeping}

| 设置 | 默认值 | |
|---|---|---|
| 默认书签数量 | 4 | 新页面上的用户[书签](./bookmarks)槽位数（最多 8 个） |
| 撤销堆栈深度 | 30 | 主页面的撤销/重做步数 |
| 会话状态最大保留天数 | 90 天 | 早于此时间的[会话状态](./save-load-and-files#session-state)条目会被清理；设为 0 则不清理 |

## 覆盖模式 \{#the-override-pattern}

对于同样存在于页面 Class Defaults 中的值（部件大小、圆角半径），此对话框
会有意退让：在你勾选此处对应的 **Override** 复选框之前，页面 Blueprint 的
Class Defaults 始终具有决定权。这样默认情况下共享页面 Blueprint 的调校保持不变，
同时仍允许某台计算机坚持使用自己的值。
