# 下载

> 用于下载文件、图片等资源到本地。

#### 基础用法

::: demo

```vue
<template>
  <gy-download :fullUrl="fullUrl" fileName="下载文件">
    <span :style="{cursor: 'pointer', color: '#409EFF'}">下载</span>
  </gy-download>
</template>

<script>
export default {
  data() {
    return {
      fullUrl: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E7%99%BE%E5%BA%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=505978886,3280506511&os=2821336839,1523677687&simid=3395585618,291075366&pn=3&rn=1&di=7214885350303334401&ln=1639&fr=&fmq=1684982768293_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=1e&objurl=https%3A%2F%2Fp3.itc.cn%2Fq_70%2Fimages03%2F20211117%2F1270baf1c2f84fa19a99ef82c52d454c.png&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNSw0LDMsMiw3LDgsOQ%3D%3D",
    }
  }
}
</script>
```

:::

### 参数说明

| 参数         | 说明             | 类型    | 可选值 | 默认值 |
| ------------ | ---------------- | ------- | ------ | ------ |
| fullUrl      | 文件完整 URL 地址     |  String |  必填  |  ""    |
| fileName     | 文件名称 | String  | -      | "download"      |

