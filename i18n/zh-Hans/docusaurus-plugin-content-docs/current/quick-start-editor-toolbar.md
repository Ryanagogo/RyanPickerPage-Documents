import useBaseUrl from '@docusaurus/useBaseUrl';

# 工具栏 \{#toolbar}

**处于编辑模式时**，可以在编辑器的标题栏部分找到工具栏

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

这些工具可以对一个或多个选中的拾取器部件执行各种操作。

### 工作方式： \{#the-way-it-works}

- 选择部件
- 单击工具栏按钮打开对应工具
- 更改字段中的值或单击按钮
- 值的更改或按钮单击会作用于所有选中的部件

### 图像 \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**此工具作用于标签部件和图像部件，二者都可以带有图像。**

- 选择标签或图像部件，然后单击下拉列表搜索所需图像，或添加你在 Content Browser 中选中的图像。所有选中的部件都会使用该图像

### 颜色 \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**此工具作用于所有带背景颜色的部件，也会作用于带文本的部件。**

- 选择部件，然后单击背景颜色或字体颜色，并在取色器中选择所需颜色。所有选中的部件都会应用这些颜色

### 标签 \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**此工具作用于带文本的部件。**

- 选择部件，然后更改标签字段中的文本或字体大小值。所有选中部件的文本都会更新

### 大小 \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**此工具作用于所有部件**

- 选择部件，然后更改宽度或高度值。所有选中部件的宽度或高度都会随之改变

### 微移 \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**此工具作用于所有选中的部件**

- 选择部件，然后更改微移值。单击任一箭头按钮时，所有选中的部件都会移动该距离。

### 对齐 \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**此工具作用于所有选中的部件**

- 选择部件，然后单击某个对齐或分布按钮。所有选中部件的边缘会对齐，或者部件会被移动以均匀分布。
- 对于对齐功能，最后选中的部件是锚点，因此其他所有选中的部件都会对齐到最后选中的部件。

### 镜像 \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### 此工具作用于所有选中的部件 \{#this-tool-affects-all-selected-widgets}

- 选择部件，然后单击某个翻转或镜像按钮。所有选中的部件都会被变换到其镜像位置

#### 对于镜像翻转（Mirror Flip），可以设置翻转行为。 \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **自身：** 每个选中的部件沿自己的轴翻转
- **最后选中(含)：** 所有选中的部件围绕最后选中的部件翻转。最后选中的部件也会沿自己的轴翻转
- **最后选中(不含)：** 所有选中的部件围绕最后选中的部件翻转。最后选中的部件不受影响，不会移动。
- **可见画布：** 所有选中的部件沿可见画布的轴翻转

#### 要让镜像姿势正常工作，需要先创建用于镜像的 Pose Map。 \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **镜像用 Pose Map：** 可以定义镜像所用的锚点部件，并设置中间部件以及左/右部件配对。
- **一个页面中的多个映射：** 可以拥有多个映射，例如一个用于身体，一个用于面部。
