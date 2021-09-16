import Vue from "vue";
import "styles/tailwind.css";
import App from "ui/App.vue";
import router from "./router";
import store from "./store";

// import VueDragResize from 'vue-drag-resize'

// Vue.component('vue-drag-resize', VueDragResize)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
