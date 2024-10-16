## VitePress教程

有着vuepress的搭建经验，上手还算OK

官方文档目前还没有中文，于是自己尝试搭建了一下


## 访问

VitePress 命令
安装依赖
pnpm（建议使用nrm切换到淘宝源）
pnpm install

npm
npm install

yarn
yarn install
-----------------------
启动
npm run dev
npm run docs:dev
----------
pnpm
pnpm dev
------
npm
npm run dev
-----
yarn
yarn dev
------
Makefile
make dev
-----------------------
编译构建
#pnpm
pnpm run docs:build
pnpm run build

# npm
npm run build
#yarn
yarn run build
#Makefile
make dist
-----------------------
# 预览打包
pnpm preview
