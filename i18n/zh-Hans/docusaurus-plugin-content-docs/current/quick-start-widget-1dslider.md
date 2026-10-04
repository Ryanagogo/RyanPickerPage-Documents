import useBaseUrl from '@docusaurus/useBaseUrl';

# 1D 滑块部件 \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### 创建新的 1D 滑块部件 \{#creating-a-new-1d-slider-widget}

必须处于**编辑模式**才能创建新的 **1D 滑块部件**

**右键单击拾取器画布的空白处**以弹出菜单，然后单击“1D 滑块”菜单项

### 用途 \{#purpose}

- 1D 滑块可以让你在最小值和最大值之间滑动一个数值。它只有 1 个自由度，因此滑块只会影响一个变换轴

- 应用到变换上的值是局部值。

- 无论目标是 Control Rig 控制点还是关卡 Actor，这个值都会应用到已添加到该部件的所有目标上。

### 外观 \{#appearance}

可以设置 1D 滑块部件的颜色

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### 目标 \{#targets}

##### 添加目标 \{#adding-targets}

与选择按钮的目标类似，你可以选择任意数量的 Control Rig 控制点和关卡 Actor，然后右键单击 1D 滑块部件弹出菜单，并选择“使用所选内容设置”菜单项。

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### 设置滑块数值 \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **初始值**：滑块的起始值。更改最小值和最大值时，它在滑块上的位置也会随之变化。
- **最小值**：滑块能达到的最小值
- **最大值**：滑块能达到的最大值

##### 设置滑块方向 \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **水平**：滑块左右移动
- **垂直**：滑块上下移动

##### 设置要影响的变换轴 \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

要选择轴，只需单击“活动 Channel”下拉菜单，并从九个变换项中选择一个。
