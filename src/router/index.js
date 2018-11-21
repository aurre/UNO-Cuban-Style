import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import GameSetup from '@/pages/GameSetup';

Vue.use(Router);

export default new Router({
  mode: 'history',
  fallback: false,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/game-setup', name: 'game-setup', component: GameSetup },
    // { path: '/game', name: 'game', component: Game },
    { path: '*', redirect: { name: 'home' } },
  ],
});
