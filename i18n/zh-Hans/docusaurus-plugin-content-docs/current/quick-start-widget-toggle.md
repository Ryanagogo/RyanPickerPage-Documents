import useBaseUrl from '@docusaurus/useBaseUrl';

# 开关部件 \{#toggle-widget}

### 创建新的开关部件 \{#creating-a-new-toggle-widget}

必须处于**编辑模式**才能创建新的**开关部件**

**右键单击拾取器画布的空白处**以弹出菜单，然后单击“开关”菜单项

### 开关状态 \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

最初，两个状态的标签分别为“状态 A”和“状态 B”，分别代表数值 0 和 1。

单击开关部件即可在这两个状态之间切换

每个状态都可以拥有自己的标签、颜色、要显示的部件列表以及 Python 脚本。

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

切换部件的可见性

如果你有一些部件需要根据状态隐藏或显示，请先进入编辑模式，

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

然后，选择切换到状态 A 时要显示的部件

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

接着右键单击开关部件弹出菜单，并选择“状态 A -> 使用所选 Widget 设置”。这会把所选部件设置为状态 A 的目标列表

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

接下来，选择处于状态 B 时要显示的部件

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

然后右键单击开关部件弹出菜单，并单击菜单项“状态 B -> 使用所选 Widget 设置”。这会把所选部件设置为状态 B 的目标列表。

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

如果想看看开关的效果，请回到实时模式。

- 处于状态 A 时，显示状态 A 的部件，隐藏状态 B 的部件。
- 处于状态 B 时，隐藏状态 A 的部件，显示状态 B 的部件。

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

切换 Control Rig 状态

如果你的 Control Rig 中有布尔动画通道，就可以用开关部件来驱动该通道。这在 IK/FK 设置中很常见。

如果镜头中有人体模型（Mannequin）的 Control Rig，就能看到这一点。只需选中 Main 控制点，也就是角色脚下的六边形。

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

然后在 Sequencer 或 Anim Details 面板中查看用于 IK/FK 切换的布尔值

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

要连接到开关部件，请确保你处于编辑模式

选中 Main 控制点，然后右键单击开关部件弹出菜单，并选择“Set Parent Control”

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

接着在选中开关部件的状态下打开属性编辑器，找到“动画通道”部分，确保勾选了“使用布尔值”。

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

然后单击“通道”，选择要使用的动画通道

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

如有需要，还可以指定哪个状态作为“真值状态”

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

回到实时模式后，单击开关部件即可同时更改绑定状态和部件的可见性状态（本例中是左腿的 IK/FK 绑定状态）。

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
