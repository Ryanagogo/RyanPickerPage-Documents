import useBaseUrl from '@docusaurus/useBaseUrl';

# 快速入门 \{#quick-start}

#### 加载人体模型的 Control Rig \{#load-in-a-mannequin-control-rig}

<img src={useBaseUrl('/img/quick-start/quick-start/load-mannequin.png')} alt="load-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

**打开 Picker Page：Tools -> Ryan Tools -> Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/start-picker-page.png')} alt="start-picker-page" style={{marginLeft: '0px', zoom: '80%'}} />

打开为 Epic Mannequin 预定义的 Picker Page

**Picker Page：文件 -> 加载预定义项 -> Epic Mannequin**

<img src={useBaseUrl('/img/quick-start/quick-start/open-epic-mannequin-picker.png')} alt="open-epic-mannequin-picker" style={{marginLeft: 0, zoom: '80%'}} />

单击 Picker Page 上的某个按钮

<img src={useBaseUrl('/img/quick-start/quick-start/pick-mannequin-picker-button.png')} alt="pick-mannequin-picker-button" style={{marginLeft: 0, zoom: '50%'}} />

在多个按钮周围拖出一个框，即可一次选中多个控制点

<img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-buttons.png')} alt="multi-select-mannequin-buttons" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-controls.png')} alt="multi-select-mannequin-controls" style={{zoom: '67%'}} />

接下来创建我们自己的拾取器按钮。

首先，从一块空白的 Picker Page 画布开始

**Picker Page：文件 -> 新建 Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/new-blank-picker-page.png')} alt="new-blank-picker-page" style={{marginLeft: 0, zoom: '67%'}} />

如果出现“未保存的更改”弹窗，直接单击“是”即可

<img src={useBaseUrl('/img/quick-start/quick-start/unsaved-changes-popup.png')} alt="unsaved-changes-popup" style={{marginLeft: 0, zoom: '80%'}} />

#### 现在进入编辑模式。只需单击“编辑模式”切换按钮。 \{#now-go-into-edit-mode--just-click-the-edit-mode-toggle-button}

按钮会变成蓝色，Picker Page 画布周围会出现红色边框。

<img src={useBaseUrl('/img/quick-start/quick-start/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: '50%'}} />

转到视口，选择人体模型上的某个控制点

<img src={useBaseUrl('/img/quick-start/quick-start/select-control-on-mannequin.png')} alt="select-control-on-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

回到 Picker Page，右键单击画布的空白处。

此时会弹出一个菜单，供你添加拾取器部件。

单击第一项“选择按钮”

<img src={useBaseUrl('/img/quick-start/quick-start/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/new-selection-button.png')} alt="new-selection-button" style={{marginLeft: 0, zoom: '100%'}} />

创建选择按钮部件时，你当前选中的 Control Rig 控制点会被添加到该部件中。

#### 单击“编辑模式”切换按钮退出编辑模式。 \{#click-on-the-edit-mode-toggle-button-to-get-out-of-edit-mode}

左键单击画布空白处，会取消选中该按钮，同时也会取消选中对应的 Control Rig 控制点。

<img src={useBaseUrl('/img/quick-start/quick-start/deselect-button.png')} alt="deselect-button" style={{marginLeft: 0, zoom: ''}} />

单击该按钮或在其周围拖出一个框，会再次选中该按钮，同时也会再次选中对应的 Control Rig 控制点。（在编辑模式下，这只会选中部件，不会影响 Control Rig。）

<img src={useBaseUrl('/img/quick-start/quick-start/box-select-button.png')} alt="box-select-button" style={{marginLeft: 0, zoom: ''}} />

<img src={useBaseUrl('/img/quick-start/quick-start/test-select-selection-button.png')} alt="test-select-selection-button" style={{marginLeft: 0, zoom: '80%'}} />

**注意：** 如果先选中 Control Rig 控制点，对应的部件会被选中。

#### 现在重新进入编辑模式。 \{#now-go-back-into-edit-mode}

将鼠标移到边或角上时，会看到调整大小的鼠标指针。

将鼠标移到部件中间时，会看到移动的鼠标指针。

用调整大小或移动指针按下并拖动，即可调整部件大小或移动部件。

<img src={useBaseUrl('/img/quick-start/quick-start/resize-widget-mouse-pointer.png')} alt="resize-widget-mouse-pointer" style={{marginLeft: 0, zoom: ''}} /><img src={useBaseUrl('/img/quick-start/quick-start/translate-widget-mouse-pointer.png')} alt="translate-widget-mouse-pointer" />

**在选中部件的状态下，打开属性编辑器。**

就是画布右上角的小“+”

<img src={useBaseUrl('/img/quick-start/quick-start/open-attribute-editor.png')} alt="open-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

在“外观”组中可以更改部件的颜色

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-color.png')} alt="change-widget-color" style={{marginLeft: 0, zoom: '80%'}} />

在“文本”组中可以更改按钮标签上的文字

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-text.png')} alt="change-widget-text" style={{marginLeft: 0, zoom: ''}} />

编辑完按钮属性后，可以关闭属性编辑器，继续创建更多部件。

#### 感谢你读完快速入门！ \{#thanks-for-reading-through-the-quick-start}
