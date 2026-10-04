import useBaseUrl from '@docusaurus/useBaseUrl';

# 选择按钮 \{#selection-button}

### 创建新的选择按钮 \{#creating-a-new-selection-button}

必须处于**编辑模式**才能创建新的**选择按钮**

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**右键单击拾取器画布的空白处**以弹出菜单，然后单击“选择按钮”菜单项

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### 选择按钮的目标 \{#selection-button-targets}

##### 在选择列表中设置目标 \{#setting-targets-in-the-selection-list}

在选择列表中设置和添加目标有两种基本方法

- **创建选择按钮之前**：先选中希望按钮选择的控制点或 Actor，然后创建新的选择按钮
- **创建选择按钮之后**：选中控制点或 Actor，然后右键单击该按钮弹出菜单，再选择某个目标操作

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **“使用所选内容设置”** 会用当前选中的对象替换列表中的所有现有目标
- **“添加所选内容”** 会把当前选中的目标添加到目标列表中

##### 从选择列表中移除特定目标 \{#removing-specific-targets-from-the-selection-list}

- 要移除特定目标，请选中要移除的控制点或 Actor，然后右键单击选择按钮弹出菜单，再单击“移除所选内容”菜单项。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### 清空选择列表 \{#clearing-the-selection-list}

- 要清除选择列表中的所有目标，请右键单击选择按钮弹出菜单，然后单击“清除”菜单项。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### 查看选择列表中的当前目标 \{#seeing-the-current-targets-in-the-selection-list}

查看目标列表中有哪些目标有三种基本方法。

-  **将鼠标悬停在选择按钮上**以显示工具提示，其中会列出所有目标。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **右键单击选择按钮**弹出菜单，然后单击“列出当前项”菜单项。目标列表会输出到 Output Log 中

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **选中选择按钮**，然后打开属性编辑器，查看 Control Rig 和目标类别中的列表

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### 选择选择列表中的目标 \{#selecting-the-targets-in-the-selection-list}

选择目标有两种基本方法

- **在实时模式下**，只需单击按钮即可选中所有目标
- **在编辑模式下**，右键单击按钮弹出菜单，然后选择“选择当前项”菜单项。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### 选择其他部件 \{#selecting-other-widgets}

有些情况下你会希望能够选择其他部件，例如你为所有手指关节都设置了拾取器按钮，并希望用一个按钮选中一列或一排指节。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

首先，确保你处于编辑模式，然后选中所有目标部件

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

其次，右键单击选择按钮弹出菜单，并选择“其他部件 -> ”

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

回到实时模式后，单击该选择按钮会选中这些目标部件以及这些部件中的所有目标。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### 在属性编辑器中 \{#from-the-attribute-editor}

要在属性编辑器中查看数值，需要只选中一个部件

##### Python 脚本 \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

可以在“脚本源”字段中粘贴任何 Python 脚本。如果脚本较长，字段会自动展开。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

这个字段不太适合编辑脚本，也不建议放入过长的脚本。如果你的脚本很长，并且想使用正规的脚本编辑器，只需导入你的脚本并运行它即可。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### 选择按钮外观 \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **使用标签**
  - 显示或隐藏标签
- **颜色**
  - 设置按钮的颜色
- **字体**
  - 设置字体颜色和字体大小

##### 选择按钮文本 \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **标签**

  - 设置标签中的文本

- **文本样式**

  - 对于较长的文本，可以使用以下选项来帮助排版

    - Justification

    - Word Wrap

    - Margin

    - Clip
