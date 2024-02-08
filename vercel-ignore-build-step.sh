#!/bin/bash

# 特定のユーザー名を設定
ALLOWED_USER="inoue2002"

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_AUTHOR_LOGIN: $VERCEL_GIT_AUTHOR_LOGIN"

if [[ "$VERCEL_GIT_COMMIT_AUTHOR_LOGIN" == "$ALLOWED_USER" ]] ; then
  # 特定のユーザーが作成したPRの場合、ビルドを進める
  echo "✅ - Build can proceed"
  exit 1;
else
  # それ以外のユーザーが作成したPRの場合、ビルドをキャンセル
  echo "🛑 - Build cancelled"
  exit 0;
fi