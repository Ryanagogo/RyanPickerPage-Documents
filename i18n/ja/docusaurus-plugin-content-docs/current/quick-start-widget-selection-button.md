import useBaseUrl from '@docusaurus/useBaseUrl';

# 選択ボタン \{#selection-button}

### 新しい選択ボタンを作成する \{#creating-a-new-selection-button}

新しい **選択ボタン** を作成するには、**編集モード**になっている必要があります

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**ピッカーキャンバスの空いている場所を右クリック**してポップアップメニューを表示し、「選択ボタン」メニュー項目をクリックします

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### 選択ボタンのターゲット \{#selection-button-targets}

##### 選択リストにターゲットを設定する \{#setting-targets-in-the-selection-list}

選択リストにターゲットを設定・追加する基本的な方法は 2 つあります

- **選択ボタンを作成する前に**: ボタンで選択したいコントロールやアクターを選択してから、新しい選択ボタンを作成します
- **選択ボタンを作成した後で**: コントロールやアクターを選択し、ボタンを右クリックしてポップアップメニューを表示し、ターゲット操作のいずれかを選びます

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **「選択項目で設定」** は、リスト内の既存のターゲットを、現在選択しているものにすべて置き換えます
- **「選択項目を追加」** は、現在選択しているターゲットをターゲットリストに追加します

##### 選択リストから特定のターゲットを削除する \{#removing-specific-targets-from-the-selection-list}

- 特定のターゲットを削除するには、削除したいコントロールやアクターを選択し、選択ボタンを右クリックしてポップアップメニューを表示し、「選択項目を削除」メニュー項目をクリックします。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### 選択リストをクリアする \{#clearing-the-selection-list}

- 選択リストのターゲットをすべてクリアするには、選択ボタンを右クリックしてポップアップメニューを表示し、「クリア」メニュー項目をクリックします。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### 選択リストの現在のターゲットを確認する \{#seeing-the-current-targets-in-the-selection-list}

ターゲットリストに何が入っているかを確認する基本的な方法は 3 つあります。

-  **選択ボタンにマウスカーソルを合わせる** とツールチップが表示され、すべてのターゲットが表示されます。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **選択ボタンを右クリック** してポップアップメニューを表示し、「現在の項目を一覧表示」メニュー項目をクリックします。ターゲットの一覧が Output Log に出力されます

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **選択ボタンを選択** してから属性エディタを開き、Control Rig カテゴリとターゲットカテゴリのリストを確認します

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### 選択リストのターゲットを選択する \{#selecting-the-targets-in-the-selection-list}

ターゲットを選択する基本的な方法は 2 つあります

- **ライブモードでは**、ボタンをクリックするだけですべてのターゲットが選択されます
- **編集モードでは**、ボタンを右クリックしてポップアップメニューを表示し、「現在の項目を選択」メニュー項目を選びます。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### 他のウィジェットを選択する \{#selecting-other-widgets}

他のウィジェットを選択できるようにしたい場合があります。たとえば、指のすべての関節にピッカーボタンを用意していて、指の付け根の列や行をまとめて選択するボタンを 1 つ作りたい場合などです。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

まず、編集モードになっていることを確認し、ターゲットにするウィジェットをすべて選択します

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

次に、選択ボタンを右クリックしてポップアップメニューを表示し、「他のウィジェット -> 」を選びます

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

ライブモードに戻って選択ボタンをクリックすると、ターゲットのウィジェットと、それらのウィジェットのすべてのターゲットが選択されます。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### 属性エディタから \{#from-the-attribute-editor}

属性エディタで値を表示するには、ウィジェットを 1 つだけ選択する必要があります

##### Python スクリプト \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

スクリプトソース欄には、任意の Python スクリプトを貼り付けられます。スクリプトが長い場合は、欄が広がります。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

この欄はスクリプトの編集にはあまり向いておらず、長すぎるスクリプトを入れるのも避けたほうがよいでしょう。スクリプトが長く、きちんとしたスクリプトエディタを使いたい場合は、スクリプトをインポートして実行するだけで済みます。

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### 選択ボタンの外観 \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **ラベルを使用**
  - ラベルを表示または非表示にします
- **色**
  - ボタンの色を設定します
- **フォント**
  - フォントの色とサイズを設定します

##### 選択ボタンのテキスト \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **ラベル**

  - ラベルのテキストを設定します

- **テキストスタイル**

  - 長いテキストの場合は、次の設定で書式を整えられます

    - Justification

    - Word Wrap

    - Margin

    - Clip
