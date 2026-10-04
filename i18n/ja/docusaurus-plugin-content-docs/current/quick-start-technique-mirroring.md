import useBaseUrl from '@docusaurus/useBaseUrl';

# ミラーリング \{#mirroring}

### ウィジェットのミラーツール \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**このツールは編集モードでのみ表示されます。**

レイアウト内のウィジェットをミラーリングするためのツールで、左右対称が必要な二足歩行キャラクターなどのレイアウト作成に役立ちます。

## ツールは 2 つの部分に分かれています \{#the-tool-is-divided-into-two-parts}

### 選択の反転 \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### 反転モード \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **自身**
  - 選択した各ウィジェットが、それぞれ自身の軸で反転します
- **最後に選択 (含む)**
  - 選択したすべてのウィジェットが最後に選択したウィジェットを中心に反転し、最後に選択したウィジェットは自身の軸で反転します
- **最後に選択 (除外)**
  - これがデフォルトのモードです
  - 選択したすべてのウィジェットが最後に選択したウィジェットを中心に反転しますが、最後に選択したウィジェットは影響を受けず、動きません
- **表示中のキャンバス**
  - 選択したすべてのウィジェットが、現在表示されているキャンバス領域を基準に反転します

##### 反転の方向 \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

反転の具体的な結果は、選択している動作によって変わります

- **Flip Horizontal**
  - 選択したウィジェットを X 軸に沿って反転します。
- **Flip Vertical**
  - 選択したウィジェットを Y 軸に沿って反転します

### 定義済みのポーズセットのミラーリング \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### 選択したウィジェットをミラーリング \{#mirror-selected-widgets}

- 選択したウィジェットのうち Pose Map に定義があるものは、すべてその Pose Map に従ってミラーリングされます
- 1 つのウィジェットは 1 つの Pose Map にしか含められません

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### ポーズを左から右にミラーリング \{#mirror-pose-left-to-right}

- この操作は、Pose Map エディタで現在選択されている Pose Map に対して行われます
- 間違ったウィジェットがミラーリングされた場合は、元に戻して現在の Pose Map を切り替えてください

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### ポーズを右から左にミラーリング \{#mirror-pose-right-to-left}

- この操作は、Pose Map エディタで現在選択されている Pose Map に対して行われます
- 間違ったウィジェットがミラーリングされた場合は、元に戻して現在の Pose Map を切り替えてください

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Pose Map を定義する \{#define-pose-maps}

「Map」ボタンをクリックして Pose Map エディタを開きます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### Pose Map エディタ \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

1 つの Picker Page に複数の Pose Map を定義できます。たとえば、体のウィジェット用と顔のウィジェット用に分けられます

##### 新しい Pose Map を作成 \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### マップ名 \{#map-name}

新しく作成したマップにはデフォルトの名前が付いていますが、好きな名前に変更できます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### アンカーウィジェット \{#anchor-widget}

Pose Map 内のすべてのウィジェットは、アンカーウィジェットを基準にミラーリング・変換されます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### 中央ウィジェット \{#center-widgets}

すべての中央ウィジェットは、アンカーウィジェットを基準に中央揃えされます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### ウィジェットのペア \{#widget-pairs}

ペアの左列と右列のウィジェットは、アンカーウィジェットを基準に互いにミラーリングされます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

マップを設定したあと、ポーズを右から左にミラーリングした結果がこちらです

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### マップをリセットする \{#resetting-a-map}

マップをクリアしたい場合は、「Map をリセット」ボタンをクリックするだけです

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### マップを切り替える \{#switching-between-maps}

マップが複数ある場合は、ドロップダウンメニューをクリックして編集したいマップを選べます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### ウィジェット名 \{#widget-names}

Pose Map はウィジェット名を使用するため、ウィジェット作成時のデフォルト名のままにせず、意味のわかる名前を付けておきましょう。

現在のウィジェット名を確認するには、ウィジェットを選択して Outliner（キャンバス左上の「+」）を開きます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

最初はデフォルト名が表示されているかもしれません

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Outliner の項目をダブルクリックすると、ウィジェット名を変更できます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Pose Map の項目にウィジェットを設定する \{#setting-a-widget-on-a-pose-map-item}

**方法は 2 つあります**

プルダウンメニューを使い、一覧から項目を選びます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

マップ項目の右側にある「Set Selected」ボタンを使います。クリックすると、選択しているウィジェットの名前が欄に入力されます

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

ウィジェットのペアでは、左列と右列の両方の項目を設定する必要があります

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
