import useBaseUrl from '@docusaurus/useBaseUrl';

# ツールバー \{#toolbar}

**編集モード中は**、エディタのヘッダー部分にツールバーがあります

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

これらのツールを使うと、選択した 1 つ以上のピッカーウィジェットに対してさまざまな操作を実行できます。

### 使い方: \{#the-way-it-works}

- ウィジェットを選択します
- ツールバーのボタンをクリックしてツールを開きます
- 欄の値を変更するか、ボタンをクリックします
- 値の変更やボタンのクリックは、選択したすべてのウィジェットに適用されます

### 画像 \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**このツールは、画像を持てるラベルウィジェットと画像ウィジェットに作用します。**

- ラベルまたは画像ウィジェットを選択し、ドロップダウンをクリックして目的の画像を検索するか、Content Browser で選択している画像を追加します。選択したすべてのウィジェットがその画像を使用します

### 色 \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**このツールは、背景色を持つすべてのウィジェットに作用します。テキストを持つウィジェットにも作用します。**

- ウィジェットを選択し、背景色またはフォントの色をクリックして、カラーピッカーで目的の色を選びます。選択したすべてのウィジェットにその色が適用されます

### ラベル \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**このツールは、テキストを持つウィジェットに作用します。**

- ウィジェットを選択し、ラベル欄のテキストまたはフォントサイズの値を変更します。選択したすべてのウィジェットのテキストが更新されます

### サイズ \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**このツールはすべてのウィジェットに作用します**

- ウィジェットを選択し、幅または高さの値を変更します。選択したすべてのウィジェットの幅または高さが変更されます

### ナッジ \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**このツールは選択したすべてのウィジェットに作用します**

- ウィジェットを選択し、ナッジの値を変更します。矢印ボタンのいずれかをクリックすると、選択したすべてのウィジェットがその値だけ移動します。

### 整列 \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**このツールは選択したすべてのウィジェットに作用します**

- ウィジェットを選択し、整列または分布のボタンのいずれかをクリックします。選択したすべてのウィジェットの辺が揃えられるか、均等に配置されるように移動します。
- 整列機能では、最後に選択したウィジェットがアンカーになり、他の選択したウィジェットはすべて最後に選択したウィジェットに揃えられます。

### ミラー \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### このツールは選択したすべてのウィジェットに作用します \{#this-tool-affects-all-selected-widgets}

- ウィジェットを選択し、反転またはミラーのボタンのいずれかをクリックします。選択したすべてのウィジェットがミラーされた位置に変換されます

#### 反転（Mirror Flip）では、反転の動作を設定できます。 \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **自身:** 選択した各ウィジェットが、それぞれ自身の軸で反転します
- **最後に選択 (含む):** 選択したすべてのウィジェットが、最後に選択したウィジェットを中心に反転します。最後に選択したウィジェットも自身の軸で反転します
- **最後に選択 (除外):** 選択したすべてのウィジェットが、最後に選択したウィジェットを中心に反転します。最後に選択したウィジェットは影響を受けず、動きません。
- **表示中のキャンバス:** 選択したすべてのウィジェットが、表示中のキャンバスの軸で反転します

#### ポーズのミラーを使うには、ミラー用の Pose Map を作成する必要があります。 \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **ミラー用の Pose Map:** ミラーのアンカーとなるウィジェットを定義し、中央ウィジェットと左右のウィジェットのペアを設定できます。
- **1 ページに複数のマップ:** マップは複数持てるので、体用と顔用に分けることもできます。
