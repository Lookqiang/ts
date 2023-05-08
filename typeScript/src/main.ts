import Vue from 'vue'
import App from './App.vue'
import { isEmpty2 } from "./assets/fun"
Vue.config.productionTip = false;
isEmpty2('s')
Vue.config.productionTip = false
console.log(new Vue({
    render: h => h(App),
}))
// new Vue({
//     render: h => h(App),
// }).$mount('#app')
