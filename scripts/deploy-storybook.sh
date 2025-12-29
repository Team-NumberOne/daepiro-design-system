#!/bin/bash

# Storybook을 빌드하고 개인 레포지토리의 gh-pages 브랜치에 배포하는 스크립트
# 사용법: 
#   DEPLOY_REPO=username/repo-name ./scripts/deploy-storybook.sh
#   또는
#   ./scripts/deploy-storybook.sh username/repo-name

set -e

# 레포지토리 정보 가져오기
if [ -n "$1" ]; then
  DEPLOY_REPO="$1"
elif [ -n "$DEPLOY_REPO" ]; then
  DEPLOY_REPO="$DEPLOY_REPO"
else
  echo "❌ Error: 레포지토리를 지정해주세요."
  echo "사용법: DEPLOY_REPO=username/repo-name ./scripts/deploy-storybook.sh"
  echo "   또는: ./scripts/deploy-storybook.sh username/repo-name"
  exit 1
fi

echo "📦 Building Storybook..."
pnpm build-storybook

# 임시 디렉토리 생성
TEMP_DIR=$(mktemp -d)
echo "📁 Creating temporary directory: $TEMP_DIR"

# 현재 브랜치 저장
CURRENT_BRANCH=$(git branch --show-current)
CURRENT_DIR=$(pwd)

# 개인 레포 클론 또는 업데이트
cd "$TEMP_DIR"
if [ -d "storybook-deploy" ]; then
  cd storybook-deploy
  git fetch origin
  git checkout gh-pages 2>/dev/null || git checkout -b gh-pages
else
  git clone "https://github.com/${DEPLOY_REPO}.git" storybook-deploy
  cd storybook-deploy
  git checkout -b gh-pages 2>/dev/null || git checkout gh-pages
fi

echo "📁 Copying Storybook build..."
# 모든 파일 삭제 (숨김 파일 제외)
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} + 2>/dev/null || true

# Storybook 빌드 결과 복사
cp -r "${CURRENT_DIR}/storybook-static"/* .

echo "📝 Creating .nojekyll file..."
touch .nojekyll

echo "📤 Committing and pushing..."
git add -A
git commit -m "Deploy Storybook $(date +'%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
git push origin gh-pages --force

echo "✅ Storybook deployed to ${DEPLOY_REPO} gh-pages branch!"
echo "🔗 Your Storybook will be available at:"
echo "   https://$(echo "$DEPLOY_REPO" | cut -d'/' -f1).github.io/$(echo "$DEPLOY_REPO" | cut -d'/' -f2)/"
echo ""
echo "💡 GitHub Pages 설정:"
echo "   Settings → Pages → Source: gh-pages branch"

# 정리
cd "$CURRENT_DIR"
rm -rf "$TEMP_DIR"

echo "✨ Done!"

