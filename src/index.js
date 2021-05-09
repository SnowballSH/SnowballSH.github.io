import Vue from "vue";
import App from "./home.vue";
import "./styles/index.scss";
import "./animation";

import vuetify from "./plugins/vuetify";

new Vue({
  vuetify,
  el: "#home",
  template: `<App/>`,
  components: { App },
});
