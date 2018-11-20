import '@babel/polyfill'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';

import router from './router';
import { store } from './store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App },
  render: h => h(App),
});
