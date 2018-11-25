<template>
  <div class="game-player-list">
    <h4>Select who want to play.</h4>
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in gamePlayers" :key="player.id">
            <td class="d-flex flex-row justify-content-between">
              <span>{{ player.name }}</span>
              <button type="button" class="btn btn-link" v-on:click="removePlayer(player.id)">Remove</button>
            </td>
          </tr>
          <tr v-if="selectablePlayers.length > 0">
            <td colspan="2">
              <b-form inline class="d-flex flex-row justify-content-between">
                <div>
                  <label class="sr-only" for="player">Player</label>
                  <b-form-select :options="selectablePlayers" class="mb-2 mr-sm-2 mb-sm-0" id="player" v-model="selected" />
                  <!-- <b-link href="/manage-players">Manage players...</b-link> -->
                </div>
                <b-button variant="primary" v-on:click="addPlayer" :disabled="!isComplete">Add Player</b-button>
              </b-form>

            </td>
          </tr>
          <tr v-if="selectablePlayers.length > 0">
            <td colspan="2">
              <b-form inline class="d-flex flex-row justify-content-between">
                <div>
                  <label class="sr-only" for="player">Player</label>
                  <b-form-input type="text" placeholder="New Player Name" class="mb-2 mr-sm-2 mb-sm-0" id="player" v-model="playerName" />
                </div>
                <b-button variant="success" v-on:click="addPlayer">Add New Player</b-button>
              </b-form>

            </td>
          </tr>
          <tr v-if="!canStartGame">
            <td colspan="2" class="text-center">
              <span v-if="missingPlayerCount > 0">
                Select at least {{ missingPlayerCount }} <span v-if="missingPlayerCount < 2">more</span> player(s)
              </span>
              <span v-if="missingPlayerCount <= 0">
                Add selected player
              </span>
            </td>
          </tr>

          <tr v-if="canStartGame">
            <td colspan="2" class="text-center">
              <b-button variant="primary" size="lg" v-on:click="startGame" :disabled="!canStartGame">Start Game</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ActionTypes as GameActions } from '@/store/modules/game/index';
import { ActionTypes as PlayerActions } from '@/store/modules/player/index';

export default {
  name: 'game-player-list',
  created: function() {
    this.$store.dispatch(PlayerActions.GET_PLAYERS);
  },
  data() {
    return {
      selected: -1,
      playerName: '',
    };
  },
  computed: {
    missingPlayerCount() {
      return 2 - this.gamePlayers.length;
    },
    canStartGame() {
      return (
        (!this.selected || this.selected === -1) &&
        this.gamePlayers.length >= 2 &&
        this.gamePlayers.length <= 8
      );
    },
    selectedPlayer() {
      return (
        this.selected &&
        this.$store.getters.players.find(p => p.id === this.selected)
      );
    },
    isComplete() {
      return this.selected && this.selected !== -1;
    },
    gamePlayers() {
      return this.$store.getters.current.players;
    },
    players() {
      return this.$store.getters.players;
    },
    selectablePlayers() {
      const result = this.players
        .filter(p => this.notAlreadyGamePlayers(p))
        .map(p => {
          return {
            value: p.id,
            text: p.name,
          };
        });

      result.push({
        value: -1,
        text: '(none)',
      });

      result.sort((a, b) => a.value - b.value);
      return result;
    },
  },
  methods: {
    removePlayer(playerId) {
      this.$store.dispatch(GameActions.REMOVE_PLAYER, playerId);
    },
    notAlreadyGamePlayers(player) {
      return !this.gamePlayers.find(p => p.id === player.id);
    },
    addPlayer: function() {
      event.preventDefault();
      this.$store
        .dispatch(GameActions.ADD_PLAYER, this.selectedPlayer)
        .then(() => {
          this.selected = -1;
        });
    },
    startGame() {
      alert('Coming soon!');
    },
  },
};
</script>