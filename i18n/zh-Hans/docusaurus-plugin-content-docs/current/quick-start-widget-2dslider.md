import useBaseUrl from '@docusaurus/useBaseUrl';

# 2D 滑块部件 \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### 创建新的 2D 滑块部件 \{#creating-a-new-2d-slider-widget}

必须处于**编辑模式**才能创建新的 **2D 滑块部件**

**右键单击拾取器画布的空白处**以弹出菜单，然后单击“2D 滑块”菜单项

### 用途 \{#purpose}

- 2D 滑块可以让你在最小值和最大值之间滑动数值。它在 X 和 Y 上有 2 个自由度，因此滑块可以影响两个不同的变换轴

- 应用到变换上的值是局部值。

- 无论目标是 Control Rig 控制点还是关卡 Actor，这些值都会应用到已添加到该部件的所有目标上。

### 外观 \{#appearance}

可以设置 2D 滑块部件的颜色

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### 目标 \{#targets}

##### 添加目标 \{#adding-targets}

与选择按钮的目标类似，你可以选择任意数量的 Control Rig 控制点和关卡 Actor，然后右键单击 2D 滑块部件弹出菜单，并选择“使用所选内容设置”菜单项。

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### 设置 X 和 Y 方向的滑块数值 \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **初始值**：滑块在 X 和 Y 方向上的起始值。更改最小值和最大值时，它在滑块上的位置也会随之变化。
- **最小值**：滑块在 X 和 Y 方向上能达到的最小值
- **最大值**：滑块在 X 和 Y 方向上能达到的最大值

##### 设置两个活动通道所使用的变换轴 \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- 要选择轴，只需单击其中一个“活动 Channel”下拉菜单，并从九个变换项中选择一个。
- “活动 Channel X”和“活动 Channel Y”必须使用不同的变换轴，两者不能使用同一个轴
