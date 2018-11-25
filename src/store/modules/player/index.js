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
};

const actions = {
  async [ActionTypes.GET_PLAYERS](context) {
    // TODO: Get list of players from API
    const players = await axios.get(`${BASE_URL}api/players`);
    context.commit(MutationTypes.POPULATE_PLAYERS, players.data);
  },
  [ActionTypes.ADD_PLAYER](context, data) {
    // TODO: Call api to create a new player (using information in data)
    const player = { ...data };
    context.commit(MutationTypes.ADD_PLAYER, player);
  },
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
