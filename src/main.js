import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

Vue.config.productionTip = false;

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
global.vm = vm;
