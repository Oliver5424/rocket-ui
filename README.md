
> 工研院前端基于Vue2的桌面端组件库

## 安装

```shell
npm install gyy-ui -S
// or
yarn add gyy-ui -S
// or
cnpm install gyy-ui -S
```

## 快速开始

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
## 快速创建组件模板
```javascript
node .\build\bin\new.js 组件名 组件简介
例：
node .\build\bin\new.js border 边框
```

## 快速创建文档模板
```javasript
node .\build\bin\build-docs.js     
```
## 快速注册组件
```javasript
node .\build\bin\build-entry.js
```
> 注：开发组件时以上三点需要依次执行


## LICENSE

[MIT](LICENSE)
