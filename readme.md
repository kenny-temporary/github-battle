# webpack

## husky

npx husky add .husky/pre-commit "npm run lint <your script>"
git add .husky/pre-commit

"commitmsg": "commitlint -e $GIT_PARAMS"