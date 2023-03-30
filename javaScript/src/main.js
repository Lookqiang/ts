import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { isEmpty2 } from "./assets/fun.js"
Vue.config.productionTip = false;
isEmpty2('s')
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
