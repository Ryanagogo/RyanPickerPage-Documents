---
sidebar_position: 3
---

# 選択ボタン \{#select-button}

*主力となるウィジェット: ものを選択するボタンです。*

## ライブモードでの動作 \{#in-live-mode}

選択ボタンをクリックすると、割り当てられた Control Rig のコントロールとターゲットアクターが
ビューポート、リグ、そして（バインドされていれば）Sequencer で選択され、その後、ボタンに
[Python スクリプト](./python-scripting) があれば実行されます。ボタンには 1 つのコントロールだけでなく、
セット全体（「すべての指を選択」など）を割り当てることもでき、リグのコントロールと通常のアクターを自由に混在させられます。

**Ctrl+クリック** は置き換えではなくトグルです。ボタンのターゲットがまだすべて選択されていなければ
現在の選択に追加され、すでに選択されていれば選択から外されます。どちらの場合も、
それ以外の選択はそのまま残ります。

## 2 つの選択動作 \{#two-selection-behaviors}

選択ボタンは 2 つのモードのいずれかで動作し、属性エディタの **インタラクティブ選択モード**
チェックボックスで切り替えます。

### 選択セットモード（デフォルト） \{#selection-set-mode-default}

ボタンは保存済みの選択セットです。クリック → ターゲットがそのまま選択になります。ボタンは
他の場所で何を選択したかを追跡しません。

### インタラクティブ選択モード \{#interactive-selection-mode}

ボタンがエディタの選択をリアルタイムに反映するようになります。従来のアニメーションピッカーと
同じ動作です。

- ページは現在のビューポート/リグの選択を 1 秒間に数回ポーリングし、ボタンのターゲットがすべて
  現在の選択に含まれていれば **ボタンを点灯** させます。ビューポートでコントロールを選択すると、
  ページ上の対応するボタンが自動的にハイライトされます。
- クリックは **追加** で選択します。ボタンのターゲットは既存の選択を置き換えるのではなく
  そこに加わるため、複数のインタラクティブボタンを順にクリックして選択を組み立てられます。
- Ctrl+クリックでは、前述のとおりボタンのターゲットが選択から外されます。

このモードは **1 つのボタンにつき 1 つのコントロール（または 1 つのアクター）** を想定しています。複数のターゲットを持つ
ボタンで有効にしても動作はしますが、警告のトーストが表示されます。複数ターゲットのボタンでは、部分的な選択を
あいまいさなく反映できないためです。ポーリングはページのタブが前面にあり、編集モードがオフのときにだけ
実行されるため、バックグラウンドのタブには負荷がかかりません。

新しいボタンをどちらのモードで作成するかは、[エディタ設定](./editor-settings) でデフォルトを指定できます。

## 作成 \{#authoring}

編集モードでボタンを選択すると、属性エディタに次の項目が表示されます。

- **ラベル**（およびその表示/非表示）、ウィジェット名、フォントサイズ
- **背景色** と **フォントの色**
- **コントロール名** — ページの現在のリグに対して解決されます。
  [Control Rig とターゲットアクター](./control-rig-and-targets) を参照
- **ターゲットアクター** — 割り当てられたすべてのアクターの、解決済みで読みやすい概要
- **インタラクティブ選択モード** チェックボックス
- **Python スクリプト** — 複数行。クリックのたびに選択後に実行されます
- 位置、サイズ、回転、角の半径 — すべてのウィジェットに共通

新しいボタンは、作成時点で選択されているものからターゲットリストを取り込みます（デフォルトでオンの
[設定](./editor-settings)）。最速の作成手順は *ビューポートで選択して、ボタンを追加すれば完了* です。

## スクリプティング \{#scripting}

Blueprint 関数は `URyanPickerSelectButtonFunctionLibrary`
（カテゴリ `Ryan Picker Page|SelectControl`）にあります。トランスフォームや外観に関する共通の関数は
[共有ウィジェットライブラリ](./blueprint-api) にあります。

| 関数 | |
|---|---|
| `GetControlNames` | 割り当てられたリグのコントロール名 |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | 割り当てられたアクター（両方の識別子空間）。[Sequencer のスポーナブル](./control-rig-and-targets#sequencer-spawnables) を参照 |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | 複数ターゲットのボタンでは、セッターが警告を出します（ブロックはしません） |

Blueprint サブクラスは `BI_RyanPickerSelectButton` インターフェイスのイベントを実装できます:
`OnSelectButtonConstructed`、`OnSelectButtonClicked`、`OnControlRigControlsSelected`、
`OnTargetActorsSelected`、および全ウィジェットタイプ共通の [3 つのライフサイクルイベント](./blueprint-api#event-hooks)。
サブクラスが Add Widget メニューにどう表示されるかは、[カスタムウィジェット Blueprint](./blueprint-api#custom-widget-blueprints) を
参照してください。
