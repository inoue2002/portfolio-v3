#!/bin/bash

# 複数の許可されたユーザー名を設定
ALLOWED_USERS=("inoue2002" "yamada2021" "suzuki1999")

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_COMMIT_AUTHOR_LOGIN: $VERCEL_GIT_COMMIT_AUTHOR_LOGIN"

# ユーザーが許可されたリストに含まれているか確認
if [[ " ${ALLOWED_USERS[@]} " =~ " ${VERCEL_GIT_COMMIT_AUTHOR_LOGIN} " ]]; then
  # 許可されたユーザーが作成したPRの場合、ビルドを進める
  echo "✅ - Build can proceed"
  exit 1
else
  # 許可されていないユーザーが作成したPRの場合、ビルドをキャンセル
  echo "🛑 - Build cancelled"
  exit 0
fi