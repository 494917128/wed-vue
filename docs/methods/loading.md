
# 模态框方法

## api.loadingInit(event, name)

#### 初始化模态框

#### 参数

| 参数名 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| event | Object | 必填 | 当前vue实例 |
| name | String | 必填 | 绑定数据的类型名 |

#### 示例

``` bash
<template>
  ...
    <wed-loading :data="loading"></wed-loading>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  data() {
    return {
      loading: {}
    };
  },
...
  created() {
    api.loadingInit(this, "loading");
  }
...
```

## api.showLoading(text)

#### 显示loading框

#### 参数

| 参数名 | 类型 | 默认值 | 是否必填 | 描述 |
| --- | --- | --- | --- | --- |
| text | String |  | 必填 | loading文字内容 |

## api.hideLoading()

#### 隐藏loading框

#### 示例

``` bash
<template>
  ...
    <wed-loading :data="loading"></wed-loading>

    <div @click="showLoading">显示loading框</div>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  methods: {
    showLoading() {
      api.showLoading("加载中");
      setTimeout(()=>{
        api.hideLoading();
      },1500)
    }
  },
...
```


# 相关组件
- [wed-loading](/docs/components/wed-loading.md)
