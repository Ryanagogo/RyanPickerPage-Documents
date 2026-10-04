---
sidebar_position: 16
---

# Blueprint API \{#blueprint-api}

プラグインのスクリプティング API は、一貫して 1 つのパターンに従っています。静的ノードからなる
**関数ライブラリ** です。すべてのウィジェットが持つ機能のための共有ライブラリが 1 つと、そのタイプだけが
持つ機能のためのウィジェットタイプごとのライブラリがあります。どの関数もウィジェットを `DefaultToSelf` 付きの `Target` として
受け取るため、ウィジェット Blueprint 自身のグラフ内では、ノードが自動的に `self` に接続されます。

## 共有関数 — すべてのウィジェットタイプ \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`、カテゴリ `Ryan Picker Page|Widget`:

| 関数 | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | キャンバス上のジオメトリ |
| `GetRotation` / `SetRotation` | 度単位、[0, 360) に正規化 |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | [角丸のカスケード](./attribute-editor-and-outliner#corner-radius) のウィジェット単位のレベル |
| `GetWidgetName` / `SetWidgetName` | ページ内で一意の名前 |
| `GetCurrentControlRig` | 所属ページの現在のリグ |
| `GetActorFromGUID` | ページを介してアクターの識別子を解決 |

## タイプ別の関数 \{#per-type-functions}

各ウィジェットタイプ専用のライブラリは、それぞれのページで説明しています。

| ライブラリ | カテゴリ | リファレンス |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [選択ボタン](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [1D スライダー](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [2D スライダー](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [トグル](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [ラベル](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [画像](./widget-image#scripting) |

## イベントフック \{#event-hooks}

4 つのインタラクティブなウィジェットタイプは、それぞれ `BlueprintNativeEvent` フックからなる
Blueprint インターフェイスを公開しています。Blueprint サブクラスでこれらを実装すれば、C++ なしで動作を追加できます。

| インターフェイス | タイプ固有のイベント |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`、`OnSelectButtonClicked`、`OnControlRigControlsSelected`、`OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`、`OnSliderValueChanged`、`OnSliderDragBegin`、`OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | 同じ 4 つ（値は 2D） |
| `BI_RyanPickerToggle` | `OnToggleConstructed`、`OnToggleClicked`、`OnToggleStateChanged`、`OnControlRigControlsSelected`、`OnTargetActorsSelected` |

4 つすべてが、インタラクティブなタイプ共通の 3 つの **ライフサイクルイベント** を継承します。

- `OnWidgetSelected(bool)` — 編集モードでの選択が変わった
- `OnWidgetHighlighted(bool)` — ホバー状態が変わった
- `OnWidgetEditModeChanged(bool)` — ページが編集モードに入った/出た

ラベルと画像にはフックのインターフェイスはありません（クリックできるものがないため）が、共有の
関数ライブラリでカバーされます。

## カスタムウィジェット Blueprint \{#custom-widget-blueprints}

最も深い拡張ポイントです。**Blueprint でウィジェットタイプのサブクラスを作ると、ページはそれを
独立した正式なウィジェットタイプとして扱います。**

1. 親クラスがネイティブのリーフウィジェットクラスのいずれか
   （`RyanPickerSelectButton`、`RyanPickerToggle`、`RyanPicker1DSlider` など）である Blueprint クラスを作成します。
2. フックインターフェイスのイベントを実装して、動作を追加します。`OnToggleStateChanged` で
   ビジュアルを追加したり、`OnSelectButtonClicked` で独自のロジックを実行したりと、ショットに必要なことは何でもできます。
3. 作成したクラスは、キャンバスの右クリックメニューの **カスタムウィジェット** の下に、
   ベースタイプごとにまとめて自動的に表示されます。

カスタムウィジェットは、保存/読み込み、アンドゥ、属性エディタ、整列/ミラーツール、ターゲット指定など、
すべてを継承します。ページはリーフタイプの任意のサブクラスをそのタイプとして認識するためです。カスタムウィジェットを
使うページは保存ファイルに Blueprint のクラスパスを記録するため、その Blueprint を含むどのプロジェクトでも
正しく再読み込みされます。

Blueprint サブクラスを作るほどではないクリック時の動作には、シンプルな
[ウィジェットの Python スクリプト](./python-scripting) で十分なことも多いでしょう。
