#!/usr/bin/env sh

# 忽略错误
set -e

# 删除文件需要根据实际打包的目录进行删除
rm -rf docs/.vitepress/dist/

# 生成静态文件
yarn docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:sunsetaha/sunsetaha.github.io.git master:gh-pages

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

