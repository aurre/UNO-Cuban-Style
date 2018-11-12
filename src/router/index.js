import Vue from 'vue';
import Router from 'vue-router';
import Game from '@/components/Game';

Vue.use(Router);

export default new Router({
  mode: 'history',
  fallback: false,
  routes: [{ path: '/game', name: 'game', component: Game }],
});
