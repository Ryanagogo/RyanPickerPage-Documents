import useBaseUrl from '@docusaurus/useBaseUrl';

# 1D スライダーウィジェット \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### 新しい 1D スライダーウィジェットを作成する \{#creating-a-new-1d-slider-widget}

新しい **1D スライダーウィジェット** を作成するには、**編集モード**になっている必要があります

**ピッカーキャンバスの空いている場所を右クリック**してポップアップメニューを表示し、「1D スライダー」メニュー項目をクリックします

### 用途 \{#purpose}

- 1D スライダーでは、最小値と最大値の間で値をスライドできます。自由度は 1 つだけなので、スライダーが影響するトランスフォーム軸は 1 つだけです

- トランスフォームに適用される値はローカル値です。

- この値は、Control Rig のコントロールかレベル上のアクターかにかかわらず、ウィジェットに追加されたすべてのターゲットに適用されます。

### 外観 \{#appearance}

1D スライダーウィジェットの色を設定できます

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### ターゲット \{#targets}

##### ターゲットを追加する \{#adding-targets}

選択ボタンのターゲットと同様に、任意の数の Control Rig コントロールとレベル上のアクターを選択し、1D スライダーウィジェットを右クリックしてポップアップメニューを表示し、「選択項目で設定」メニュー項目を選びます。

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### スライダーの値を設定する \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **初期値**: スライダーの開始値です。最小値と最大値を変更すると、スライダー上の位置も見た目上変わります。
- **最小値**: スライダーが到達する最小の値
- **最大値**: スライダーが到達する最大の値

##### スライダーの方向を設定する \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **水平**: スライダーを左右に動かします
- **垂直**: スライダーを上下に動かします

##### 影響するトランスフォーム軸を設定する \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

軸を選ぶには、「アクティブ Channel」のプルダウンメニューをクリックし、9 つのトランスフォーム項目から 1 つを選択します。
