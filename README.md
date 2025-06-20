# プリズマ概要

- prisma
  - Node.js および TypeScript 環境でデータベースを扱うための次世代 ORM (Object-Relational Mapper) とツール群です。開発者がデータベースとより簡単かつ安全にやり取りできるように設計されています

### prisma の環境構築に必要なライブラリ

1. prisma (CLI ツール本体 - 開発依存):

- Prisma のコマンドラインインターフェースを提供します。スキーマの初期化、イントロスペクション、マイグレーションの実行、Prisma Client の生成など、Prisma のほぼ全ての操作はこの CLI を通じて行います。
  ` npm install prisma --save-dev`

2. @prisma/client (Prisma Client ライブラリ - 通常の依存):

- アプリケーションコードからデータベースにアクセスするための型安全なクライアントです。prisma generate コマンドによって、あなたのスキーマに合わせてカスタマイズされたものが node_modules/@prisma/client に生成されます。
  `npm install @prisma/client`

### prisma の主要な機能

1. Prisma Client (データベースアクセスクライアント):

- 単純にデータベースに接続してくれる機能
- Prisma スキーマに基づいて自動生成されるクライアントで、TypeScript の型システムを最大限に活用します。これにより、コンパイル時に型エラーを検知でき、存在しないフィールドへのアクセスや型の不一致といったバグを未然に防ぎます。

2. Prisma Migrate (データベースマイグレーションツール):

- 宣言的なスキーマ定義: prisma/schema.prisma ファイルに、データベースのテーブル構造、カラム、型、リレーションなどを宣言的に記述します。これがデータベーススキーマの「唯一の正しい情報源 (Single Source of Truth)」となります。
- schema.prisma の内容からデータベース構築することも、既存のデータベースから schema.prisma を作ることも可能
