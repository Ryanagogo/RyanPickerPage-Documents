---
sidebar_position: 15
---

# エディタ設定 \{#editor-settings}

**ファイル → Settings…** で、プラグインのグローバル設定ダイアログが開きます。これらは**マシンごと**の
設定で、開くすべてのページに適用されます。ページごとの Class Defaults（ページの Blueprint に保存）や
ファイルごとのデータ（ページファイルに保存）とは異なります。

## 新規ウィジェットの動作 \{#new-widget-behavior}

| 設定 | デフォルト | |
|---|---|---|
| Seed New Widget Targets From Selection | オン | 新しいボタン/スライダーのターゲットを現在の選択から事前に設定します。[ターゲットの割り当て方法](./control-rig-and-targets#how-targets-get-assigned) を参照 |
| Default Interactive Selection Mode | オフ | 新しい選択ボタンが [インタラクティブ選択モード](./widget-select-button#interactive-selection-mode) で作成されます |
| 新規ウィジェットのデフォルトサイズ | 200 × 100 | **Override** チェックボックス付き。オフの場合はページ自身の Class Defaults の値が優先され、オンの場合はこのダイアログの値で置き換えられます |
| デフォルトの角丸半径 | 10 | Override チェックボックスの扱いは同じです。[角丸のカスケード](./attribute-editor-and-outliner#corner-radius) におけるグローバルなフォールバック値です |

## Sticky Defaults のカテゴリ \{#sticky-defaults-categories}

7 つのチェックボックス（**色、フォント、角の半径、サイズ、回転、テキスト、画像**。デフォルトではすべてオン）で、
[Copy to Sticky Defaults](./editing-tools#widget-defaults) が新しいウィジェットに実際に引き継ぐ
プロパティグループを制御します。
たとえばサイズと回転をオフにすると、sticky defaults を見た目だけのものにできます。

## ページと管理 \{#page--housekeeping}

| 設定 | デフォルト | |
|---|---|---|
| デフォルトのブックマーク数 | 4 | 新しいページのユーザー[ブックマーク](./bookmarks)スロット数（最大 8） |
| Undo スタックの深さ | 30 | メインページの元に戻す/やり直しのステップ数 |
| セッション状態の最大保持日数 | 90 日 | これより古い[セッション状態](./save-load-and-files#session-state)のエントリは削除されます。0 にすると削除は無効になります |

## オーバーライドの考え方 \{#the-override-pattern}

ページの Class Defaults にも存在する値（ウィジェットのサイズ、角丸半径）については、このダイアログは
意図的に一歩引いています。ここで対応する **Override** チェックボックスをオンにするまでは、ページ Blueprint の
Class Defaults が優先されます。これにより、共有ページ Blueprint の調整はデフォルトでそのまま保たれ、
それでいて個々のマシンが独自の値を使うこともできます。
