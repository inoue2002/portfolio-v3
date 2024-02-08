#!/bin/bash

# 許可されたユーザーのリスト
ALLOWED_USERS=("user1" "test" "user3")

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_AUTHOR_LOGIN: $VERCEL_GIT_AUTHOR_LOGIN"

# ユーザーが許可されたリストに含まれているかチェック
if [[ " ${ALLOWED_USERS[@]} " =~ " ${VERCEL_GIT_AUTHOR_LOGIN} " ]]; then
  # 許可されたユーザーが作成したPRの場合、ビルドを進める
  echo "✅ - Build can proceed"
  exit 1;
else
  # 許可されていないユーザーが作成したPRの場合、ビルドをキャンセル
  echo "🛑 - Build cancelled"
  exit 0;
fi