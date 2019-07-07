import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let vm = new Vue({
  /*data: {
    allClothes: [],
    allMisc: []
  },*/
  router,
  store,
  render: h => h(App)
}).$mount("#app");

global.vm = vm;
