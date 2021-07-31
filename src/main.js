import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApiService from "./store/api.service";

Vue.config.productionTip = false;

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

ApiService.init();

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: (h) => h(App),
  created() {
    this.$store.commit("init_store");
  },
}).$mount("#app");
