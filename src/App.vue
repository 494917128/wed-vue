<template>
  <div id="app">
    <wed-modal :data="modal"></wed-modal>
    <wed-toast :data="toast"></wed-toast>
    <wed-loading :data="loading"></wed-loading>

    <img alt="Vue logo" src="./assets/logo.png" />

    <div @click="showModal">显示模态框</div>
    <div @click="showToast">显示提示框</div>
    <div @click="showLoading">显示loading框</div>
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
      loading: {}
    };
  },
  methods: {
    showModal() {
      api.showModal({
        text: "ceshi",
        noCancel: false,
        success() {
          console.log(123);
        },
        fail() {
          console.log(456);
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
    }
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
