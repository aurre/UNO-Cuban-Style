<template>
  <div class="manage-players">
    <h4>Players.</h4>
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players"
              :key="player.id">
            <td class="d-flex flex-row justify-content-between">
              <span>{{ player.name }}</span>
              <button type="button"
                      class="btn btn-link"
                      v-on:click="removePlayer(player.id)">Remove</button>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <b-form inline
                      class="d-flex flex-row justify-content-between">
                <div>
                  <label class="sr-only"
                         for="player">Player</label>
                  <b-form-input v-model="playerName"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                type="text"
                                placeholder="Enter player name..."></b-form-input>
                </div>
                <b-button variant="primary"
                          v-on:click="addPlayer"
                          :disabled="!isComplete">Add Player</b-button>
              </b-form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ActionTypes as PlayerActions } from "@/store/modules/player/index";

export default {
  name: "manage-players",
  created: function() {
    this.$store.dispatch(PlayerActions.GET_PLAYERS);
  },
  data() {
    return {
      playerName: ""
    };
  },
  computed: {
    isComplete() {
      return this.playerName;
    },
    players() {
      return this.$store.getters.players;
    }
  },
  methods: {
    addPlayer: function() {
      event.preventDefault();
      this.$store
        .dispatch(PlayerActions.ADD_PLAYER, this.playerName)
        .then(() => {
          this.playerName = "";
        });
    },
    removePlayer: function(playerId) {
      this.$store
        .dispatch(PlayerActions.REMOVE_PLAYER, playerId);
    }
  }
};
</script>
