import useBaseUrl from '@docusaurus/useBaseUrl';

# トグルウィジェット \{#toggle-widget}

### 新しいトグルウィジェットを作成する \{#creating-a-new-toggle-widget}

新しい **トグルウィジェット** を作成するには、**編集モード**になっている必要があります

**ピッカーキャンバスの空いている場所を右クリック**してポップアップメニューを表示し、「トグル」メニュー項目をクリックします

### トグルの状態 \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

最初は、2 つの状態には「状態 A」と「状態 B」というラベルが付いており、それぞれ値 0 と 1 を表します。

トグルウィジェットをクリックすると、この 2 つの状態が切り替わります

各状態には、独自のラベル、色、表示するウィジェットのリスト、Python スクリプトを設定できます。

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

ウィジェットの表示を切り替える

状態に応じて表示/非表示を切り替えたいウィジェットがある場合は、まず編集モードに入ります。

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

次に、状態 A に切り替えたときに表示したいウィジェットを選択します

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

続いてトグルウィジェットを右クリックしてポップアップメニューを表示し、「状態 A -> 選択した Widget で設定」を選びます。選択したウィジェットが状態 A のターゲットリストに設定されます

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

次に、状態 B のときに表示したいウィジェットを選択します

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

続いてトグルウィジェットを右クリックしてポップアップメニューを表示し、「状態 B -> 選択した Widget で設定」メニュー項目をクリックします。選択したウィジェットが状態 B のターゲットリストに設定されます。

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

トグルの動作を確認したい場合は、ライブモードに戻ります。

- 状態 A のときは、状態 A のウィジェットが表示され、状態 B のウィジェットは非表示になります。
- 状態 B のときは、状態 A のウィジェットが非表示になり、状態 B のウィジェットが表示されます。

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Control Rig の状態を切り替える

Control Rig に Bool のアニメーションチャンネルがある場合、トグルウィジェットでそのチャンネルを操作できます。これは IK/FK のセットアップでよく使われます。

ショットに Mannequin の Control Rig があれば確認できます。キャラクターの足元にある六角形の Main コントロールを選択してください。

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

次に、Sequencer または Anim Details パネルを見ると、IK/FK 切り替え用の Bool が確認できます

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

トグルウィジェットに接続するには、編集モードになっていることを確認します

Main コントロールを選択し、トグルウィジェットを右クリックしてポップアップメニューを表示し、「Set Parent Control」を選びます

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

次に、トグルウィジェットを選択したまま属性エディタを開き、アニメーションチャンネルのセクションで「ブール値を使用」がオンになっていることを確認します。

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

続いて「チャンネル」をクリックし、使用するアニメーションチャンネルを選択します

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

必要に応じて、どちらの状態を「真の状態」にするかも指定できます

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

ライブモードに戻ると、トグルウィジェットをクリックするだけで、リグの状態とウィジェットの表示状態の両方を切り替えられます（この例では左脚の IK/FK リグの状態）。

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
