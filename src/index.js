import Vue from "vue";
import App from "./home.vue";
import "./styles/index.scss";
import "./styles/card.scss";
import "./styles/bars.scss";
import "./animation";

new Vue({
  el: "#home",
  template: `<App/>`,
  components: { App },
});
