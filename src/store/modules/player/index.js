import * as ActionTypes from './action-types';
import * as MutationTypes from './mutation-types';
import BASE_URL from '@/config/app-settings.js';
import axios from 'axios';

export { ActionTypes };

const state = {
  players: [],
};

const mutations = {
  [MutationTypes.POPULATE_PLAYERS](state, players) {
    state.players = players;
  },
  [MutationTypes.ADD_PLAYER](state, player) {
    state.players.push(player);
  },
  [MutationTypes.REMOVE_PLAYER](state, playerId) {
    const playerIndex = state.players.findIndex(p => p.id === playerId);
    if (playerIndex >= 0) {
      state.players.splice(playerIndex, 1);
    }
  },
};

const actions = {
  async [ActionTypes.GET_PLAYERS](context) {
    const players = await axios.get(`${BASE_URL}api/players`);
    context.commit(MutationTypes.POPULATE_PLAYERS, players.data);
  },
  async [ActionTypes.ADD_PLAYER](context, playerName) {
    const { data }  = await axios.post(`${BASE_URL}api/players`, { name: playerName });
    context.commit(MutationTypes.ADD_PLAYER, data);
  },
  async [ActionTypes.REMOVE_PLAYER](context, playerId) {
    await axios.delete(`${BASE_URL}api/players/${playerId}`);
    context.commit(MutationTypes.REMOVE_PLAYER, playerId);
  }
};

const getters = {
  players: state => {
    return state.players;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
