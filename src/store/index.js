import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import game from './modules/game/index';
import player from './modules/player/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    game,
    player
  },
});