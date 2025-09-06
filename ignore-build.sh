#!/bin/bash

if [[ "$VERCEL_GIT_COMMIT_REF" == "master" ]]; then
  # IGNORE build - GitHub Actions will deploy
  echo "🛑 - Build cancelled (GitHub Actions will deploy)"
  exit 0;
else
  # CONTINUE with build for other branches
  echo "✅ - Build can continue"
  exit 1;
fi