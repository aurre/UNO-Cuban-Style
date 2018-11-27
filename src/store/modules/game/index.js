import * as ActionTypes from './action-types';
import * as MutationTypes from './mutation-types';
import BASE_URL from '@/config/app-settings.js';
import axios from 'axios';

export { ActionTypes };

const state = {
  games: [],
  current: {
    location: '',
    hands: [],
    players: [],
    isDirty: false,
  },
};

const mutations = {
  [MutationTypes.POPULATE_GAMES](state, games) {
    state.games = games;
  },

  [MutationTypes.NEW_GAME](state, location) {
    // reset current game
    state.current = {
      location: location,
      hands: [],
      players: [],
      isDirty: true,
    };
  },

  [MutationTypes.ADD_PLAYER](state, player) {
    state.current.players.push(player);
    state.current.isDirty = true;
  },

  [MutationTypes.REMOVE_PLAYER](state, playerId) {
    const playerIndex = state.current.players.findIndex(p => p.id === playerId);
    if (playerIndex >= 0) {
      state.current.players.splice(playerIndex, 1);
      state.current.isDirty = true;
    }
  },

  [MutationTypes.ADD_HAND](state, hand) {
    state.current.hands.push(hand);
    state.current.isDirty = true;
  },

  [MutationTypes.MARK_AS_SAVED](state) {
    state.current.isDirty = false;
  },
};

const actions = {
  async [ActionTypes.GET_GAMES](context) {
    const games = await axios.get(`${BASE_URL}api/games`);
    context.commit(MutationTypes.POPULATE_GAMES, games.data);
  },

  async [ActionTypes.NEW_GAME](context, location) {
    await axios.post(`${BASE_URL}api/games`, { location });
    context.commit(MutationTypes.NEW_GAME, location);
  },

  [ActionTypes.ADD_PLAYER](context, player) {
    context.commit(MutationTypes.ADD_PLAYER, player);
  },

  [ActionTypes.REMOVE_PLAYER](context, player) {
    context.commit(MutationTypes.REMOVE_PLAYER, player);
  },

  [ActionTypes.ADD_HAND](context, hand) {
    context.commit(MutationTypes.ADD_HAND, hand);
  },

  [ActionTypes.SAVE_GAME](context) {
    // TODO: Call API to save current game
    context.commit(MutationTypes.MARK_AS_SAVED);
  },
};

const getters = {
  games: state => state.games,
  current: state => state.current,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
