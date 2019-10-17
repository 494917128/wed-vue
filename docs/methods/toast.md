
# 模态框方法

## api.toastInit(event, name)

#### 初始化提示框

#### 参数

| 参数名 | 类型 | 默认值 | 是否必填 | 描述 |
| --- | --- | --- | --- | --- |
| event | Object |  | 必填 | 当前vue实例 |
| name | String |  | 必填 | 绑定数据的类型名 |

#### 示例

``` bash
<template>
  ...
    <wed-toast :data="toast"></wed-toast>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  data() {
    return {
      toast: {}
    };
  },
...
  created() {
    api.toastInit(this, "toast");
  }
...
```

## api.showToast(Object object)

#### 显示提示框

#### 参数
##### Object object

| 参数名 | 类型 | 默认值 | 是否必填 | 描述 |
| --- | --- | --- | --- | --- |
| text | String |  | 必填 | 提示框内容 |
| type | String |  | 可选 | error：失败；success：成功；其他：提示框 |
| time | Number | 2000 | 可选 | 提示框显示多长时间自动关闭 |

#### 示例

``` bash
<template>
  ...
    <wed-toast :data="toast"></wed-toast>

    <div @click="showToast">显示提示框</div>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  methods: {
    showToast() {
      api.showToast({
        text: "成功",
        type: "success",
        time: 2000
      });
    }
  },
...
```

## api.alert(msg, callback)

#### 显示提示框（默认，1.5s自动关闭）

#### 参数
##### Object object

| 参数名 | 类型 | 默认值 | 是否必填 | 描述 |
| --- | --- | --- | --- | --- |
| msg | String |  | 必填 | 提示框内容 |
| callback | function |  | 可选 | 提示框隐藏时执行（1.5s后） |

#### 示例

``` bash
<template>
  ...
    <wed-toast :data="toast"></wed-toast>

    <div @click="alert">显示提示框</div>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  methods: {
    alert() {
      api.alert("测试", ()=>{
        console.log('隐藏执行')
      });
    }
  },
...
```

## api.error(msg, callback)

#### 显示提示框（失败，1.5s自动关闭）

#### 参数
##### Object object

| 参数名 | 类型 | 默认值 | 是否必填 | 描述 |
| --- | --- | --- | --- | --- |
| msg | String |  | 必填 | 提示框内容 |
| callback | function |  | 可选 | 提示框隐藏时执行（1.5s后） |

#### 示例

``` bash
<template>
  ...
    <wed-toast :data="toast"></wed-toast>

    <div @click="error">显示提示框</div>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  methods: {
    error() {
      api.error("失败", ()=>{
        console.log('隐藏执行')
      });
    }
  },
...
```

## api.success(msg, callback)

#### 显示提示框（成功，1.5s自动关闭）

#### 参数
##### Object object

| 参数名 | 类型 | 默认值 | 是否必填 | 描述 |
| --- | --- | --- | --- | --- |
| msg | String |  | 必填 | 提示框内容 |
| callback | function |  | 可选 | 提示框隐藏时执行（1.5s后） |

#### 示例

``` bash
<template>
  ...
    <wed-toast :data="toast"></wed-toast>

    <div @click="success">显示提示框</div>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  methods: {
    success() {
      api.success("失败", ()=>{
        console.log('隐藏执行')
      });
    }
  },
...
```

# 相关组件
- [wed-toast](/docs/components/wed-toast.md)
