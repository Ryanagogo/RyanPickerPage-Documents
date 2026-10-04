import useBaseUrl from '@docusaurus/useBaseUrl';

# 2D スライダーウィジェット \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### 新しい 2D スライダーウィジェットを作成する \{#creating-a-new-2d-slider-widget}

新しい **2D スライダーウィジェット** を作成するには、**編集モード**になっている必要があります

**ピッカーキャンバスの空いている場所を右クリック**してポップアップメニューを表示し、「2D スライダー」メニュー項目をクリックします

### 用途 \{#purpose}

- 2D スライダーでは、最小値と最大値の間で値をスライドできます。X と Y の 2 つの自由度があるため、スライダーは 2 つの異なるトランスフォーム軸に影響を与えられます

- トランスフォームに適用される値はローカル値です。

- これらの値は、Control Rig のコントロールかレベル上のアクターかにかかわらず、ウィジェットに追加されたすべてのターゲットに適用されます。

### 外観 \{#appearance}

2D スライダーウィジェットの色を設定できます

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### ターゲット \{#targets}

##### ターゲットを追加する \{#adding-targets}

選択ボタンのターゲットと同様に、任意の数の Control Rig コントロールとレベル上のアクターを選択し、2D スライダーウィジェットを右クリックしてポップアップメニューを表示し、「選択項目で設定」メニュー項目を選びます。

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### X 方向と Y 方向のスライダー値を設定する \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **初期値**: X 方向と Y 方向のスライダーの開始値です。最小値と最大値を変更すると、スライダー上の位置も見た目上変わります。
- **最小値**: X 方向と Y 方向でスライダーが到達する最小の値
- **最大値**: X 方向と Y 方向でスライダーが到達する最大の値

##### 2 つのアクティブチャンネルが使うトランスフォーム軸を設定する \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- 軸を選ぶには、「アクティブ Channel」のプルダウンメニューのいずれかをクリックし、9 つのトランスフォーム項目から 1 つを選択します。
- 「アクティブ Channel X」と「アクティブ Channel Y」には異なるトランスフォーム軸を使用する必要があります。両方に同じ軸は使えません
