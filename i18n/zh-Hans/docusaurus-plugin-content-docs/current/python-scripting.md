---
sidebar_position: 17
---

# Python 脚本 \{#python-scripting}

*将编辑器 Python 绑定到一次单击——无需 Blueprint 子类，无需编译。*

[选择按钮](./widget-select-button) 可携带一个可选的 Python 脚本；
[开关](./widget-toggle) 则**每个状态**各携带一个。每当在实时模式下单击该部件时，脚本都会在编辑器的
Python 环境中运行（包括标准的 `unreal` 模块以及 Python Editor Script Plugin 提供的其他一切）。

## 执行顺序 \{#execution-order}

脚本会在单击的选择工作完成**之后**运行——控制点已选中、Actor 已
选中、开关的状态也已切换。因此，你的脚本可以假定部件的目标
就是当前选择，并直接对它们进行操作：

```python
import unreal

# 运行时按钮的目标已被选中。
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

对于开关，运行的是刚刚切换*到*的那个状态的脚本——IK/FK 开关可以在每次切换时、
在每个方向上运行匹配/吸附逻辑。

## 编写与存储 \{#authoring-and-storage}

在编辑模式下选中部件后，在属性编辑器的 **Python 脚本** 字段中编辑脚本；或者在
Blueprint 中通过 `GetPythonScript` / `SetPythonScript`（选择按钮）和
`GetPythonScriptForState` / `SetPythonScriptForState`（开关）进行编辑。

在保存的页面文件中，脚本以 Base64 编码存储——这只是传输细节，并非安全措施。
它在编辑器 UI、Blueprint 和内存中都是明文，并以编辑器 Python 的完整权限
运行。**只加载来自可信来源的页面**，这与你对待任何编辑器脚本的标准相同；
审查共享的页面文件时，请把它们当作代码来对待。
