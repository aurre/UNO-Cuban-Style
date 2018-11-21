<template>
    <div class="game-list">
        <h4>Games</h4>
        <div class="table-responsive">
            <table class="table table-bordered table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Location</th>          
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in games" :key="game.id">
                    <th scope="row">{{game.id}}</th>
                    <td>                        
                        <b-link href="/game-detail" ><span>{{ game.location }}</span></b-link>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div >
                            <b-form inline class="d-flex flex-row justify-content-between">
                                <label class="sr-only" for="location">Location</label>
                                <b-input class="mb-2 mr-sm-2 mb-sm-0" id="location" placeholder="Enter location..." v-model="data.location"  />
                                <b-button variant="primary" v-on:click="newGame" :disabled="!isComplete">Start New Game</b-button>
                            </b-form>
                        </div>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { ActionTypes as GameActions } from "@/store/modules/game/index";

export default {
  name: "game-list",
  created: function() {
    this.$store.dispatch(GameActions.GET_GAMES);
  },
  data() {
    return {
      data: {
        location: ""
      }
    };
  },
  computed: {
    isComplete() {
      return this.data.location;
    },
    games() {
      return this.$store.getters.games;
    }
  },
  methods: {
    newGame: function() {
      event.preventDefault();
      this.$store
        .dispatch(GameActions.NEW_GAME, this.data.location)
        .then(() => {
          this.$router.push("/game-setup");
        });
    }
  }
};
</script>