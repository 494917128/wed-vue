<template>
  <div id="app">
    <wed-modal :data="modal"></wed-modal>
    <wed-toast :data="toast"></wed-toast>
    <wed-loading :data="loading"></wed-loading>

    <img alt="Vue logo" src="./assets/logo.png" />

    <div @click="showModal">显示模态框</div>
    <div @click="showToast">显示提示框</div>
    <div @click="showLoading">显示loading框</div>
    <div @click="setDate">获取当前时间：{{date}}</div>
  </div>
</template>

<script>
import { api } from "vue-wed-dev";

export default {
  name: "app",
  data() {
    return {
      modal: {},
      toast: {},
      loading: {},
      date: '',
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
    },
    showToast() {
      api.alert("测试");
    },
    showLoading() {
      api.showLoading("加载中");
      setTimeout(()=>{
        api.hideLoading();
      },1500)
    },
    setDate() {
      this.date = api.date('Y-m-d H:i:s');
    },
  },

  created() {
    api.modalInit(this, "modal");
    api.toastInit(this, "toast");
    api.loadingInit(this, "loading");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
