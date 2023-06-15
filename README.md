
# gyy-ui
> 工研院前端基于Vue2的桌面端组件库

## 安装
在需要使用 `gyy-ui` 的项目中下载安装

```shell
npm install gyy-ui -S
// or
yarn add gyy-ui -S
// or
cnpm install gyy-ui -S
```

## 快速开始
下载好 `gyy-ui` 包之后，在项目的 `main.js` 文件中引入包并注册到 `vue` 实例上
```javascript
import Vue from 'vue'
import RocketsUI from 'gyy-ui'
import 'gyy-ui/lib/index.css'

Vue.use(RocketsUI)

// or
import {
  Statistics
  // ...
} from 'gyy-ui'
import 'gyy-ui/lib/index.css'

Vue.component(Statistics.name, Statistics)
```
## 快速开发组件
以上是如果使用 `gyy-ui` 组件库，那如何开发一个组件呢？


下面这个命令可以快速创建**组件**和**文档**的模板文件，使得开发人员能够更专注的聚焦于组件的开发
```javascript
npm run gen
```
输入这个命令按提示回答相应的问题即可
## 提交代码
该项目引入了 `husky`，在提交代码时需要注意要安装规定的格式提交 `commit` 信息。

详情请见 `.cz-config.js` 文件，`commit` 信息需要以 `types` 字段的任意一个 `value` 属性作为开头并加上冒号空格`: `，例如：
```
:sparkles: feat: 新增某个功能
:bug: fix: 修复某个缺陷
```
## 发布
开发好组件之后，就需要把组件库发布到 `npm` 上了

1. 首先需要修改 `package.json` 文件中的 `version` 字段，使版本号加1
> 一个完整的版本号，由三部分组成：主版本号（major）、次版本号(minor)、修订> 版本号(patch)，简称X.Y.Z，具体含义：
> 
> 主版本号（major）：项目（包）做了大量的变更，与旧的版本存在一定的不兼容性等问题。
> 
> 次版本号（minor）：做了少量的变更或向下做了兼容。
> 
> 修订版本号（patch）：修复上一个版本的bug或向下做兼容。
> 
> 版本号变更的一般规则：
> 
> 版本号只升不降，不得在数字前面加0。例如不能是1.01.0，应该是1.0.0。
> 
> 当主版本号升级时，次版本号和修订版本号需要归零。例如1.1.1->2.0.0。
> 
> 当次版本号升级时，主版本号不变，修订版本号归零。例如1.1.1->1.2.0。
> 
> 当修订版本号升级时，主版本和次版本号都不变。例如1.1.1->1.1.2。
> 
> 一般第一个正式版本应为1.0.0。
> 
> 处于开发测试阶段的版本一般为0.y.z，如果不发布，则默认为0.0.0，如果发布第> 一个测试版本则是0.1.0，如果修复第一个测试版本则是0.1.1，如果更新第二个测> 试版本则是0.2.0。

2. 本地登录npm，并发布
```
npm config set registry http://xxx.xxx:7001 添加用户并登录
npm adduser
npm login
```
登录npm成功后进行发布
```
npm publish
```
发布成功后，在使用组件库的项目中更新一下组件库，就可以使用最新的组件了！
