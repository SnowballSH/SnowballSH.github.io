import Vue from "vue";
import App from "./home.vue";
import "./styles/index.scss";
import "./animation";

new Vue({
  el: "#home",
  template: `<App/>`,
  components: { App },
});
