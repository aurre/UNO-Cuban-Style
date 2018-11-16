import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import home from './modules/home';

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    home,
  },
});
