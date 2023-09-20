# API 設計

本アプリの永続化層には API を用いる。
利用するのは light-api-server で、ローカルホストで起動する。
ただし、Docker 化を行うことによって k8s 等での実行も想定する。

## リソース一覧

| リソース名 | 用途                       |
| ---------- | -------------------------- |
| スレッド   | 親スレッドの一覧           |
| コメント   | スレッドに対してのコメント |

### スレッド

| カラム名    | 概要                                   |
| ----------- | -------------------------------------- |
| id          | 識別するための ID                      |
| title       | スレッドタイトル                       |
| contents    | 本文                                   |
| tag         | タグ。カンマ区切り                     |
| author      | 作者。リレーション等はせずそのまま     |
| create-date | 日付。yyyy-mm-dd_HH:MM:SS フォーマット |

### コメント

| カラム名    | 概要                                   |
| ----------- | -------------------------------------- |
| id          | 識別するための ID                      |
| thread-id   | スレッド ID。これで紐づけを行う        |
| contents    | 内容                                   |
| author      | 作者。リレーションはなし               |
| create-date | 日付。yyyy-mm-dd_HH:MM:SS フォーマット |