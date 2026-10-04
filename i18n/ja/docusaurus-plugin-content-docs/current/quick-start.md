import useBaseUrl from '@docusaurus/useBaseUrl';

# クイックスタート \{#quick-start}

#### マネキンの Control Rig を読み込む \{#load-in-a-mannequin-control-rig}

<img src={useBaseUrl('/img/quick-start/quick-start/load-mannequin.png')} alt="load-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

**Picker Page を開きます: Tools -> Ryan Tools -> Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/start-picker-page.png')} alt="start-picker-page" style={{marginLeft: '0px', zoom: '80%'}} />

Epic Mannequin 用の定義済み Picker Page を開きます

**Picker Page: ファイル -> 定義済みを読み込み -> Epic Mannequin**

<img src={useBaseUrl('/img/quick-start/quick-start/open-epic-mannequin-picker.png')} alt="open-epic-mannequin-picker" style={{marginLeft: 0, zoom: '80%'}} />

Picker Page 上のボタンを 1 つクリックします

<img src={useBaseUrl('/img/quick-start/quick-start/pick-mannequin-picker-button.png')} alt="pick-mannequin-picker-button" style={{marginLeft: 0, zoom: '50%'}} />

複数のボタンを囲むように矩形をドラッグすると、多数のコントロールを一度に選択できます

<img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-buttons.png')} alt="multi-select-mannequin-buttons" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-controls.png')} alt="multi-select-mannequin-controls" style={{zoom: '67%'}} />

それでは、独自のピッカーボタンを作ってみましょう。

まずは空の Picker Page キャンバスから始めます

**Picker Page: ファイル -> 新規 Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/new-blank-picker-page.png')} alt="new-blank-picker-page" style={{marginLeft: 0, zoom: '67%'}} />

「未保存の変更」のポップアップが表示されたら、「はい」をクリックしてください

<img src={useBaseUrl('/img/quick-start/quick-start/unsaved-changes-popup.png')} alt="unsaved-changes-popup" style={{marginLeft: 0, zoom: '80%'}} />

#### 次に編集モードに入ります。「編集モード」切り替えボタンをクリックするだけです。 \{#now-go-into-edit-mode--just-click-the-edit-mode-toggle-button}

ボタンが青くなり、Picker Page のキャンバスに赤い枠が付きます。

<img src={useBaseUrl('/img/quick-start/quick-start/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: '50%'}} />

ビューポートに移動し、マネキンのコントロールを 1 つ選択します

<img src={useBaseUrl('/img/quick-start/quick-start/select-control-on-mannequin.png')} alt="select-control-on-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

Picker Page に戻り、キャンバスの空いている場所を右クリックします。

ピッカーウィジェットを追加するためのポップアップメニューが表示されます。

最初の項目「選択ボタン」をクリックします

<img src={useBaseUrl('/img/quick-start/quick-start/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/new-selection-button.png')} alt="new-selection-button" style={{marginLeft: 0, zoom: '100%'}} />

作成時に選択していた Control Rig のコントロールが、選択ボタンウィジェットに追加されます。

#### 編集モード切り替えボタンをクリックして、編集モードを終了します。 \{#click-on-the-edit-mode-toggle-button-to-get-out-of-edit-mode}

キャンバスの空いている場所を左クリックすると、ボタンの選択が解除されます。同時に Control Rig のコントロールの選択も解除されます。

<img src={useBaseUrl('/img/quick-start/quick-start/deselect-button.png')} alt="deselect-button" style={{marginLeft: 0, zoom: ''}} />

ボタンをクリックするか、ボタンを矩形で囲むと、ボタンが再び選択されます。同時に Control Rig のコントロールも再び選択されます。（編集モードではウィジェットだけが選択され、Control Rig には影響しません。）

<img src={useBaseUrl('/img/quick-start/quick-start/box-select-button.png')} alt="box-select-button" style={{marginLeft: 0, zoom: ''}} />

<img src={useBaseUrl('/img/quick-start/quick-start/test-select-selection-button.png')} alt="test-select-selection-button" style={{marginLeft: 0, zoom: '80%'}} />

**注:** 先に Control Rig のコントロールを選択すると、ウィジェットが選択されます。

#### もう一度編集モードに入ります。 \{#now-go-back-into-edit-mode}

マウスを辺や角に合わせると、リサイズ用のマウスポインターが表示されます。

マウスをウィジェットの中央に合わせると、移動用のマウスポインターが表示されます。

リサイズ用または移動用のポインターでクリックしてドラッグすると、ウィジェットのサイズ変更や移動ができます。

<img src={useBaseUrl('/img/quick-start/quick-start/resize-widget-mouse-pointer.png')} alt="resize-widget-mouse-pointer" style={{marginLeft: 0, zoom: ''}} /><img src={useBaseUrl('/img/quick-start/quick-start/translate-widget-mouse-pointer.png')} alt="translate-widget-mouse-pointer" />

**ウィジェットを選択したまま、属性エディタを開いてみましょう。**

キャンバス右上の小さな「+」です

<img src={useBaseUrl('/img/quick-start/quick-start/open-attribute-editor.png')} alt="open-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

外観グループでは、ウィジェットの色を変更できます

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-color.png')} alt="change-widget-color" style={{marginLeft: 0, zoom: '80%'}} />

テキストグループでは、ボタンのラベルのテキストを変更できます

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-text.png')} alt="change-widget-text" style={{marginLeft: 0, zoom: ''}} />

ボタンの属性の編集が終わったら、属性エディタを閉じて、さらにウィジェットを作成できます。

#### クイックスタートを最後までお読みいただき、ありがとうございました！ \{#thanks-for-reading-through-the-quick-start}
