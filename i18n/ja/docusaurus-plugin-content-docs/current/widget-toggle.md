---
sidebar_position: 6
---

# トグル \{#toggle}

*2 つの状態を持つスイッチです。代表的な用途は IK/FK の切り替えです。*

## ライブモードでの動作 \{#in-live-mode}

トグルは **A** と **B** の 2 つの状態を持ちます。クリックすると状態が切り替わり、
新たにアクティブになった状態が自身の設定を適用します。その状態のラベルと色が反映され、割り当てられたリグのコントロールと
アクターが選択され、その状態の [Python スクリプト](./python-scripting) が実行されます。
トグルの設定はすべて**状態ごと**に行います。IK/FK トグルなら、一方の状態では IK コントロールを、
もう一方では FK コントロールを選択し、状態ごとに別の色にすることができます。

## トグルグループ \{#toggle-groups}

複数のトグルをグループ化すると（2 つ以上を選択して右クリックメニューから）、ラジオボタンのように動作します。
各トグルは、どちらの状態を「オン」とみなすか（**オン状態**）を宣言し、
グループ内の 1 つをオンにすると他のメンバーはすべてオフになります。グループ化されたウィジェットはキャンバス上で
独自の枠線が付き、グループには名前を付けたり変更したりできます。また、
[Outliner の **グループ別** ビュー](./attribute-editor-and-outliner) では、各グループのメンバーが
グループの見出しの下に一覧表示されます。グループをコピーすると、メンバーと名前を含めて
まったく新しいグループとして再作成する貼り付けが選べます。

## リグの bool チャンネルを操作する \{#driving-a-rigs-bool-channel}

コントロールの選択に加えて、トグルを Control Rig コントロールの **bool アニメーションチャンネル** に
直接バインドすることもできます。たとえば、リグ上の実際の IK/FK 切り替え属性などです。

- チャンネルの **親コントロール** と **チャンネル** 自体を指定し、トグルのどちらの状態が
  チャンネルの *true* を意味するかを選びます。
- これで、トグルをクリックすると bool 値も書き込まれます。
- バインドは双方向です。ページはチャンネルの現在値をポーリングしてトグルの表示状態に反映するため、
  キーが打たれた IK/FK 切り替えを越えてスクラブすると、クリック時の動作を再実行することなく
  ページ上のボタンが切り替わります。

## 作成 \{#authoring}

属性エディタの項目: 状態ごとのラベル / 背景色 / フォントの色 / フォントサイズ / コントロール
名 / ターゲットアクター / Python スクリプト、現在の状態とオン状態、アニメーションチャンネル bool の
バインド（有効化、親コントロール、チャンネル名、true の状態）、そして共通の
位置/サイズ/回転/角の半径ブロック。

## スクリプティング \{#scripting}

`URyanPickerToggleFunctionLibrary`（カテゴリ `Ryan Picker Page|Toggle`）。ほとんどの関数は
`ERyanPickerToggleState` を受け取り、1 つの状態の設定を読み書きします。

| 関数 | |
|---|---|
| `GetToggleState` / `SetToggleState` | 現在の状態 |
| `GetOnState` / `SetOnState` | グループの排他制御で「オン」とみなす状態 |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | アニメーションチャンネルのバインドを有効にするマスタースイッチ |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Blueprint サブクラスは `BI_RyanPickerToggle` を実装できます: `OnToggleConstructed`、
`OnToggleClicked`、`OnToggleStateChanged(ERyanPickerToggleState)`、
`OnControlRigControlsSelected`、`OnTargetActorsSelected`、および
[共通のライフサイクルイベント](./blueprint-api#event-hooks)。
