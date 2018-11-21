import * as ActionTypes from './action-types';
import * as MutationTypes from './mutation-types';

export { ActionTypes };

const state = {
    players: []
}

const mutations = {
    [MutationTypes.POPULATE_PLAYERS](state, players) {
        state.players = players;
    },
    [MutationTypes.ADD_PLAYER](state, player) {
        state.players.push(player);
    }
}

const actions = {
    [ActionTypes.GET_PLAYERS](context) {
        // TODO: Get list of players from API 
        const players = [{
            id: 3,
            name: 'Ariel'
        }, {
            id: 1,
            name: 'Cristina'
        }, {
            id: 2,
            name: 'Raysa'
        }, {
            id: 4,
            name: 'Mauro'
        }];
        context.commit(MutationTypes.POPULATE_PLAYERS, players);
    },
    [ActionTypes.ADD_PLAYER](context, data) {
        // TODO: Call api to create a new player (using information in data)
        const player = { ...data };
        context.commit(MutationTypes.ADD_PLAYER, player);
    }
}

const getters = {
    players: state => {
        return state.players;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
