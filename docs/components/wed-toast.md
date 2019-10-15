
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
    <wed-toast :data="toast"></wed-toast>

    <div @click="showToast">显示提示框</div>
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
      loading: {}
    };
  },
  methods: {
    showToast() {
      api.showToast({ text: "测试" });
    },
  },

  created() {
    api.toastInit(this, "toast");
  }
};
</script>
```

#### [相关方法](/docs/mothods/toast.md)
- showToast
