
# 模态框方法

## api.modalInit(event, name)

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
    <wed-modal :data="modal"></wed-modal>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  data() {
    return {
      modal: {}
    };
  },
...
  created() {
    api.modalInit(this, "modal");
  }
...
```

## api.showModal(Object object)

#### 显示模态框

#### 参数
##### Object object

| 参数名 | 类型 | 默认值 | 是否必填 | 描述 |
| --- | --- | --- | --- | --- |
| title | String | '提示' | 可选 | 模态框标题 |
| text | String |  | 必填 | 模态框内容 |
| noCancel | Boolean | true | 可选 | 是否隐藏取消按钮 |
| cancelText | String | '取消' | 可选 | 取消按钮的文字 |
| confirmText | String | '确定' | 可选 | 确认按钮的文字 |
| stopCover | Boolean | false | 可选 | 是否可以点击遮罩层隐藏模态框 |
| success | function |  | 可选 | 接口调用成功的回调函数 |
| fail | function |  | 可选 | 接口调用失败的回调函数 |
| complete | function |  | 可选 | 接口调用结束的回调函数（调用成功、失败都会执行） |


#### 示例

``` bash
<template>
  ...
    <wed-modal :data="modal"></wed-modal>

    <div @click="showModal">显示模态框</div>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  methods: {
    showModal() {
      api.showModal({
        text: "测试",
        noCancel: false,
        success() {
          console.log('点击成功');
        },
        fail() {
          console.log('点击失败');
        }
      });
    }
  },
...
```

## api.confirm(msg, callback)

#### 显示提示框（点确定关闭）

#### 参数

| 参数名 | 类型 | 默认值 | 是否必填 | 描述 |
| --- | --- | --- | --- | --- |
| msg | String |  | 可选 | 提示内容 |
| callback | function |  | 可选 | 点击确定后执行 |

#### 示例

``` bash
<template>
  ...
    <wed-modal :data="modal"></wed-modal>

    <div @click="confirm">显示提示框</div>
  ...
</template>

<script>
import { api } from "vue-wed-dev";

...
  methods: {
    confirm() {
      api.confirm('提示测试', ()=>{
        console.log('点击确定')
      });
    }
  },
...
```

# 相关组件
- [wed-modal](/docs/components/wed-modal.md)
