# github battle

## volta
使用volta可以在项目中制定你需要使用的node/npm/yarn等工具链的版本, 如果你是第一次使用这个项目，你需要可能会需要先执行以下下面的脚本安装;

```bash
# curl https://get.volta.sh | bash
curl https://get.volta.sh | bash -s -- --skip-setup
```

## LintChain
保证在团队协作中的代码规范工具，你可能需要提前了解以下信息

**husky**
```bash
npx husky add .husky/pre-commit "yarn run lint"
npx husky add .husky/<hook-file-name> "your scripts"

git add .husky/pre-commit
```
**commilint**
- [commitlint gihtub](https://github.com/conventional-changelog/commitlint)

**stylelint**
- [stylelint docs](https://stylelint.io/)

**Eslint**
- [eslint docs](https://eslint.org/)

**.editorconfig**

**scripty**
当需要的使用的scripts比较多的时候，可以使用scripty解决，它允许我们使用文件来定义自己的脚本，设置script只需指向文件即可
```bash
https://www.npmjs.com/package/scripty
```