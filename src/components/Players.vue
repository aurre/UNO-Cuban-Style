 <template>
  <div>
    <div class="nav-form">
      <b-nav-form>
        <b-form-input v-model="data.form.name" class="mr-sm-2" type="text" placeholder="Player Name"></b-form-input>
        <b-button v-on:click="saveName" variant="outline-primary" class="my-2 my-sm-0 button-space" type="submit">Add</b-button>
        <b-button variant="outline-success" class="my-2 my-sm-0">
          <router-link to="/game">Start</router-link>
        </b-button>
      </b-nav-form>
    </div>

    <b-container class="bv-example-row" v-if="data.names.length > 0">
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="5">
          <PlayersList v-bind:items="data.names" />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PlayersList from './PlayersList.vue';
import SET_PLAYERS from '../store/mutationTypes';

export default {
  name: 'Players',
  components: {
    PlayersList,
  },
  data() {
    return {
      data: {
        form: {
          name: '',
        },
        names: [],
      },
    };
  },

  methods: {
    saveName: function() {
      event.preventDefault();
      this.data.names.push(this.data.form.name);
      this.resetForm();
      this.$store.commit('SET_PLAYERS', {
        players: this.data.names,
      });
      console.log(this.$store.state.home.players.players);
    },

    resetForm() {
      let self = this; //you need this because *this* will refer to Object.keys below`

      Object.keys(this.data.form).forEach(function(key) {
        self.data.form[key] = '';
      });
    },
  },
};
</script>

<style>
.nav-form {
  display: inline-flex;
  margin-bottom: 1rem;
}

.button-space {
  margin-right: 1rem;
}
</style>
