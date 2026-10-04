---
sidebar_position: 1
---

# はじめに \{#introduction}

**Ryan Picker Page** は Unreal Engine 用のアニメーションピッカーです。ボタン、スライダー、
トグル、ラベル、画像を並べたキャンバスをキャラクターごとに一度レイアウトしておけば、あとはワンクリックで
Control Rig のコントロール（およびレベル上のアクター）を選択・操作できます。ショットの途中でビューポート、
リグ階層、Sequencer のツリーを探し回る必要はありません。

ピッカーとそのエディタは同じウィンドウです。編集モードに切り替えてレイアウトを作成し、
ライブモードに戻してアニメーション作業に使います。ページはポータブルな JSON ファイルとして保存され、
プロジェクト間やチームメンバーと共有できます。

## 動作要件 \{#requirements}

- Unreal Engine **5.6 – 5.8**
- 次のエンジンプラグインが有効になっていること（本プラグインが依存関係として宣言しています）: **Control Rig**、
  **Synthesis**、**Python Editor Script Plugin**

本プラグインはエディタ専用です。パッケージビルドに含まれることはなく、ランタイムには何も追加しません。

## インストール \{#installation}

1. `RyanPickerPage` フォルダをプロジェクトの `Plugins/` ディレクトリにコピーします。
2. **Edit → Plugins** で有効にし、エディタを再起動します。
3. **Tools → Ryan Picker Page** からピッカーを開きます。

## このドキュメントの読み方 \{#finding-your-way-around-these-docs}

誰かが作成したページを使う**アニメーター**の方は、
[はじめよう](./getting-started) と各ウィジェットページのライブモードのセクションから読み始めてください。

**ページを作成する**方は、次の順に読んでください: [はじめよう](./getting-started) →
[Control Rig とターゲットアクター](./control-rig-and-targets) → 各ウィジェットタイプのページ →
[編集ツールとキャンバスツール](./editing-tools)。

**プラグインを拡張する TD** の方は、
[Blueprint API](./blueprint-api) と [Python スクリプティング](./python-scripting) のページへ直接進んでください。
独自のウィジェットバリアントを Blueprint サブクラスとして配布し、Add Widget メニューに表示させる方法も説明しています。

### 全ページ一覧 \{#all-pages}

| セクション | ページ |
|---|---|
| 基本 | [はじめよう](./getting-started) |
| ウィジェットタイプ | [選択ボタン](./widget-select-button) · [1D スライダー](./widget-1d-slider) · [2D スライダー](./widget-2d-slider) · [トグル](./widget-toggle) · [ラベル](./widget-label) · [画像](./widget-image) |
| ページの作成 | [編集ツールとキャンバスツール](./editing-tools) · [ポーズのミラー](./mirror-pose) · [ブックマーク](./bookmarks) |
| ターゲット指定の仕組み | [Control Rig とターゲットアクター](./control-rig-and-targets) · [属性エディタと Outliner](./attribute-editor-and-outliner) |
| ファイルと設定 | [保存・読み込みとファイル](./save-load-and-files) · [エディタ設定](./editor-settings) |
| 拡張 | [Blueprint API](./blueprint-api) · [Python スクリプティング](./python-scripting) |
