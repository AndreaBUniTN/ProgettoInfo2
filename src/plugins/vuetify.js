import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import it from "vuetify/es5/locale/it";
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: "mdi",
  lang: {
    locales: { it },
    current: "it"
  }
});
