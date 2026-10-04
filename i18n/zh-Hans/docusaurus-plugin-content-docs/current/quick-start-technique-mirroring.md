import useBaseUrl from '@docusaurus/useBaseUrl';

# 镜像 \{#mirroring}

### 部件镜像工具 \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**必须处于编辑模式才能找到此工具。**

它用于帮助你镜像布局中的部件，便于为两足角色或其他需要左右对称的角色创建布局。

## 该工具分为两部分 \{#the-tool-is-divided-into-two-parts}

### 翻转所选内容 \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### 翻转模式 \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **自身**
  - 每个选中的部件沿自己的轴翻转
- **最后选中(含)**
  - 所有选中的部件围绕最后选中的部件翻转，最后选中的部件沿自己的轴翻转
- **最后选中(不含)**
  - 这是默认模式
  - 所有选中的部件围绕最后选中的部件翻转，但最后选中的部件不受影响，不会移动
- **可见画布**
  - 所有选中的部件沿当前可见的画布区域翻转

##### 翻转方向 \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

翻转的具体结果取决于所选的行为

- **Flip Horizontal**
  - 沿 X 轴翻转选中的部件。
- **Flip Vertical**
  - 沿 Y 轴翻转选中的部件

### 镜像预定义的姿势集 \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### 镜像选中的部件 \{#mirror-selected-widgets}

- 所有在 Pose Map 中有定义的选中部件，都会按照其所属的 Pose Map 进行镜像
- 一个部件只能属于一个 Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### 将姿势从左向右镜像 \{#mirror-pose-left-to-right}

- 此操作作用于 Pose Map 编辑器中当前选中的 Pose Map
- 如果镜像了错误的部件，请撤销并切换当前的 Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### 将姿势从右向左镜像 \{#mirror-pose-right-to-left}

- 此操作作用于 Pose Map 编辑器中当前选中的 Pose Map
- 如果镜像了错误的部件，请撤销并切换当前的 Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### 定义 Pose Map \{#define-pose-maps}

单击“Map”按钮打开 Pose Map 编辑器

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### Pose Map 编辑器 \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

在一个 Picker Page 上可以定义多个 Pose Map。例如，可以为身体部件准备一个映射，为面部部件准备另一个映射

##### 创建新的 Pose Map \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### 映射名称 \{#map-name}

新建映射时会有一个默认名称，你可以把它改成任何名称

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### 锚点部件 \{#anchor-widget}

Pose Map 中的所有部件都会相对于锚点部件进行镜像和变换

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### 中间部件 \{#center-widgets}

所有中间部件都会相对于锚点部件居中对齐

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### 部件配对 \{#widget-pairs}

左右配对列中的部件会相对于锚点部件互相镜像

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

设置好映射后，将姿势从右向左镜像的结果如下

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### 重置映射 \{#resetting-a-map}

如果想清空映射，只需单击“重置 Map”按钮

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### 在映射之间切换 \{#switching-between-maps}

当有多个映射时，可以单击下拉菜单，选择要编辑的映射

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### 部件名称 \{#widget-names}

Pose Map 使用的是部件名称，因此最好给部件取有意义的名称，而不是沿用创建部件时的默认名称。

要查看当前部件名称，请选中一个部件并打开 Outliner（画布左上角的“+”）

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

一开始，你可能会看到一个默认名称

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

双击 Outliner 中的条目即可更改部件名称

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### 为 Pose Map 条目指定部件 \{#setting-a-widget-on-a-pose-map-item}

**可以使用以下两种方式之一**

使用下拉菜单，从列表中选择条目

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

使用映射条目右侧的“Set Selected”按钮。单击后，所选部件的名称会填入字段中

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

对于部件配对，需要同时设置左列和右列的条目

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
