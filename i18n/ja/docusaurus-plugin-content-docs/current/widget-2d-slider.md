---
sidebar_position: 5
---

# 2D スライダー \{#2d-slider}

*ドラッグできるハンドルが 1 つ、トランスフォームチャンネルが 2 つ。*

## ライブモードでの動作 \{#in-live-mode}

2D スライダーはパッドです。ハンドルをドラッグすると、割り当てられたすべてのコントロール/アクターに対して、
X 軸が一方のトランスフォームチャンネルに、Y 軸がもう一方のチャンネルに同時に書き込まれます。典型的な用途は、
足の接地用の 移動 X / 移動 Y パッドや、視線用の 回転 X / 回転 Y パッドです。

[1D スライダー](./widget-1d-slider) と同じチャンネルの規律に従います。各軸はターゲット上の
自分のチャンネルだけを置き換えるため、2D パッドは同じコントロールの残りのチャンネルを操作する
他のスライダーと共存できます。オートキーも適用されます。**初期値にリセット** はここでも右クリックメニューにあります。

## 値のモデル \{#value-model}

1D スライダーと同じですが 2 次元です。**最小値/最大値** は軸ごとのペア、**Current
Value** は現在の 2D 値、**初期値** はドラッグの影響を受けない設定済みのデフォルト値です。**ステップサイズ**
と **ロック済み** の動作も同じです。

2 つのチャンネルはそれぞれ独立して選択します（**アクティブ Channel X**、**アクティブ Channel Y**）。両方の軸を
*同じ*チャンネルに設定するのはほぼ確実に設定ミスなので、属性エディタは 2 つの軸が黙って 1 つの値を
奪い合うのを許さず、警告バナーで知らせます。

## 作成 \{#authoring}

属性エディタの項目: ラベル/名前、軸ごとの最小/最大、現在値/初期値、アクティブ Channel X
と Y（同一チャンネル警告付き）、ハンドルカラー、くぼんだハンドルのスタイル、ロック、ステップサイズ、
ターゲットの割り当て、共通の位置/サイズ/回転/角の半径ブロック。

## スクリプティング \{#scripting}

`URyanPicker2DSliderFunctionLibrary`（カテゴリ `Ryan Picker Page|2DSlider`）:

| 関数 | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`、軸ごと |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | ターゲット |

Blueprint サブクラスは `BI_RyanPicker2DSlider` を実装できます: `OnSliderConstructed`、
`OnSliderValueChanged(FVector2D)`、`OnSliderDragBegin`、`OnSliderDragEnd(bool bValueChanged)`、
および [共通のライフサイクルイベント](./blueprint-api#event-hooks)。
