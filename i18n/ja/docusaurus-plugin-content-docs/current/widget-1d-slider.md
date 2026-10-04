---
sidebar_position: 4
---

# 1D スライダー \{#1d-slider}

*トランスフォームチャンネル 1 つだけに接続されたスライダーです。*

## ライブモードでの動作 \{#in-live-mode}

スライダーをドラッグすると、割り当てられたすべての Control Rig コントロールとターゲットアクターの
**1 つのチャンネル**（移動・回転・スケールの X、Y、Z のいずれか）に値が書き込まれます。それ以外には一切触れません。
スライダーは各ターゲットの現在のトランスフォームを読み取り、自分が担当する 1 つのチャンネルだけを差し替えて、
トランスフォームを書き戻します。値の変更はプラグインの他の部分と同じ適用経路を通り、
Sequencer のオートキーも含まれるため、スライダーの操作は手で動かしたコントロールと同じようにキーが打たれます。

1D スライダーは担当外のチャンネルを決して占有しないため、複数のスライダーで*同じ*コントロールの
異なるチャンネルを並べて操作できます。1 つの足コントロールに 移動 Y の「持ち上げ」と 回転 Z の「ロール」を設定しても
競合しません。

スライダーを右クリックすると **初期値にリセット** が表示され、設定済みのデフォルト値に
戻せます。

## 値のモデル \{#value-model}

重要な数値は 3 つあり、そのうち変化するのは 2 つだけです。

- **最小値 / 最大値** — ドラッグが対応付けられる範囲です。
- **Current Value** — 現在の値です。ドラッグで書き込まれ、ターゲットに適用されるのはこの値です。
- **初期値** — 作成者が設定するデフォルト値で、ドラッグによって変わることは*決して*ありません。属性エディタで
  意図的に変更した場合にのみ変わるため、「初期値にリセット」の戻り先として
  常に安全な値になります。

オプションの **ステップサイズ** を設定するとドラッグが一定刻みでスナップし、**ロック済み** にするとドラッグが
完全に無効になります（ショットの途中でうっかり動かしたくない参照用スライダーなどに）。

## 作成 \{#authoring}

属性エディタの項目: ラベル/名前、最小値/最大値/現在値/初期値、**アクティブ Channel**（この
スライダーが操作する唯一のチャンネル）、**向き**（水平/垂直）、バーの色、ハンドルカラー、
バーの太さ、くぼんだハンドルのスタイル、ロック、ステップサイズ。さらに、
[選択ボタン](./widget-select-button) と共通のターゲット割り当て項目と、共通の
位置/サイズ/回転/角の半径ブロックがあります。

## スクリプティング \{#scripting}

`URyanPicker1DSliderFunctionLibrary`（カテゴリ `Ryan Picker Page|1DSlider`）:

| 関数 | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | 範囲 |
| `GetCurrentValue` / `SetCurrentValue` | 現在の値 |
| `GetInitialValue` / `SetInitialValue` | 設定済みのリセット値 |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`: Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | ターゲット |

Blueprint サブクラスは `BI_RyanPicker1DSlider` を実装できます: `OnSliderConstructed`、
`OnSliderValueChanged(float)`、`OnSliderDragBegin`、`OnSliderDragEnd(bool bValueChanged)`、および
[共通のライフサイクルイベント](./blueprint-api#event-hooks)。
