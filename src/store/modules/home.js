import { SET_PLAYERS } from '../mutationTypes';
// import { ENSURE_AVTIVE_PLAYERS } from '../actionTypes';

export const state = {
  players: [],
};

// export const actions = {
//   [ENSURE_AVTIVE_PLAYERS]({ commit }, players) {
//     commit(SET_PLAYERS, players);
//   },
// };

export const mutations = {
  [SET_PLAYERS](currentState, players) {
    currentState.players = players;
  },
};

export default {
  state,
  //   actions,
  mutations,
};
