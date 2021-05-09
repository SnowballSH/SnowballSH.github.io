import Vue from "vue";
import App from "./home.vue";
import "./styles/index.scss";
import "./animation";

import vuetify from "./plugins/vuetify";
Vue.use(vuetify);

new Vue({
  el: "#home",
  template: `<App/>`,
  components: { App },
});
