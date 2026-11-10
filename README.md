# servicenow-lending-app

ServiceNow SDK（Fluent）で作る、備品貸出アプリです。

社内の備品（ノートPC、プロジェクター、カメラなど）を Service Portal の画面から貸出・返却できます。

## 画面イメージ

- 備品がカード形式で一覧表示され、貸出可・貸出中がバッジで分かります
- 自分が借りている備品は「返却する」ボタンと返却期限が表示されます
- 期限が近い・過ぎているものは赤字で目立ちます

## 仕組み

| 要素 | 内容 |
| --- | --- |
| テーブル | 備品（`x_2301476_lending_equipment`）／貸出記録（`x_2301476_lending_loan`） |
| Business Rule | 返却期限の自動設定／二重貸出の防止／備品ステータスの同期 |
| 画面 | Service Portal ウィジェット（`equipment_lending` ページ） |

貸出のたびに記録が作られ、Business Rule が期限の計算と二重貸出のチェックを行います。画面側は状態を見てボタンの出し分けをしているだけです。

## 開発

```bash
bun install
bun x @servicenow/sdk@4.14.0 build    # ビルド
bun x @servicenow/sdk@4.14.0 install  # PDIへデプロイ
```

型定義（`@types/`）は `now-sdk dependencies` で再生成できるため、このリポジトリには含めていません。
