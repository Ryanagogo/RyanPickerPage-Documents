---
sidebar_position: 7
---

# ラベル \{#label}

*キャンバス上のテキストです。クリックはそのまま通り抜けます。*

ラベルは注釈用です。セクション見出し（「左腕」）、メモ、キャプション付き画像などに使います。ライブモードでの
クリック動作もターゲットの割り当てもありません。つまり、周囲のコントロールのクリックを奪わずに
自由に重ねられる唯一のウィジェットタイプ（[画像](./widget-image) と並んで）でもあります。

ラベルには、固定テキストの代わりに**現在の Control Rig の名前**をリアルタイムで表示させることもできます。ページの隅に
1 つ置いておけば、このタブがどのリグを操作しているかを常にアニメーターに示せます。

## 作成 \{#authoring}

- **テキスト**、フォントサイズ、フォントの色、**行揃え**、**自動折り返し**
- **背景色**、および必要に応じて独自の引き伸ばしモードと
  [切り抜きのパン/ズーム](./widget-image#crop-panzoom) を持つ背景**画像**
- **画像アルファ** — 背景色の上に重なる背景画像の不透明度（0–1）
- 角の半径: ラベルはデフォルトで角が直角（半径 0）ですが、他のすべてのタイプと同じ
  [角丸のカスケード](./attribute-editor-and-outliner#corner-radius) に従います
- 共通の位置/サイズ/回転ブロック

ラベルは [画像](./widget-image#rendering) と同じ角丸マテリアルで背景を描画するため、
角丸と画像の切り抜きはどちらでも同じように動作します。

## スクリプティング \{#scripting}

`URyanPickerLabelFunctionLibrary`（カテゴリ `Ryan Picker Page|Label`）:

| 関数 | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | 背景画像 |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | 切り抜きのパン/ズーム |
| `GetImageAlpha` / `SetImageAlpha` | 0–1 にクランプ |

ラベルにはイベントフックのインターフェイスはありません（クリックやドラッグの対象がないため）。ただし、
[共通のウィジェット関数](./blueprint-api)（位置、サイズ、回転、角の半径、名前）は
すべて使用できます。
