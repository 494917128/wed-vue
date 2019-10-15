
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
    <wed-loading :data="loading"></wed-loading>

    <div @click="showLoading">显示loading框</div>
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
    showLoading() {
      api.showLoading("加载中");
      setTimeout(()=>{
        api.hideLoading();
      },1500)
    }
  },

  created() {
    api.loadingInit(this, "loading");
  }
};
</script>
```

#### [相关方法](/docs/mothods/loading.md)
- showLoading
- hideLoading
