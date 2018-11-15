import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';

import router from './router';
import { store } from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App },
  render: h => h(App),
});
