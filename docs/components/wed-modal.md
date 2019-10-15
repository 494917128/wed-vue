
# code

#### main.js

``` bash
import Vue from 'vue'
import App from './App.vue'

import wed from 'vue-wed-dev'
import 'vue-wed-dev/lib/vue-wed-dev.css'
Vue.use(wed)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

#### template

``` bash
<template>
  <div id="app">
    <wed-modal :data="modal"></wed-modal>

    <div @click="showModal">显示模态框</div>
  </div>
</template>
```

#### script

``` bash
<script>
import { api } from "vue-wed-dev";

export default {
  name: "app",
  data() {
    return {
      modal: {},
    };
  },
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

  created() {
    api.modalInit(this, "modal");
  }
};
</script>
```

#### [相关方法](/docs/methods/modal.md)
- modalInit
- showModal
