---
sidebar_position: 17
---

# Python スクリプティング \{#python-scripting}

*エディタの Python をクリックに割り当てます。Blueprint サブクラスもコンパイルも不要です。*

[選択ボタン](./widget-select-button) には任意の Python スクリプトを 1 つ、
[トグル](./widget-toggle) には**状態ごとに** 1 つ設定できます。スクリプトは、ライブモードでウィジェットがクリックされるたびに
エディタの Python 環境（標準の `unreal` モジュールと、Python Editor Script Plugin が提供するその他すべて）で
実行されます。

## 実行順序 \{#execution-order}

スクリプトは、クリックによる選択処理が完了した**後**に実行されます。つまり、コントロールとアクターが
選択され、トグルの状態もすでに切り替わっています。そのため、スクリプトはウィジェットのターゲットが
現在の選択であるという前提で処理できます。

```python
import unreal

# ボタンのターゲットがすでに選択された状態で実行されます。
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

トグルでは、切り替わった*先*の状態のスクリプトが実行されます。IK/FK トグルなら、どちらの方向の切り替えでも
遷移のたびにマッチング/スナップ処理を実行できます。

## 作成と保存 \{#authoring-and-storage}

編集モードでウィジェットを選択した状態で属性エディタの **Python スクリプト** 欄でスクリプトを編集するか、
Blueprint から `GetPythonScript` / `SetPythonScript`（選択ボタン）および
`GetPythonScriptForState` / `SetPythonScriptForState`（トグル）を使って編集します。

保存されたページファイルでは、スクリプトは Base64 エンコードで格納されます。これは転送上の都合であり、セキュリティ対策ではありません。
エディタの UI、Blueprint、メモリ上ではプレーンテキストであり、エディタの Python の全権限で
実行されます。**信頼できる提供元のページだけを読み込んでください。** これは他のエディタスクリプトに適用するのと同じ基準です。
共有されたページファイルをレビューする際は、コードとして扱ってください。
