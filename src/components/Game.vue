<template>
  <b-container class="bv-example-row">
    <b-row class="text-center">
      <b-col cols="12">
        <table>
          <thead>
            <tr>
              <th v-for="player in players" :key="player">{{ player }}</th>
            </tr>
            <tr>
              <th v-for="(player, index) in players" :key="player">
                <input :key="index" v-model="data.points[index]" type="number">
              </th>
              <button class="btn-pnt" v-on:click="savePoints">Next</button>
            </tr>
            <tr v-for="(row, indx1) in data.handsPoints" :key="row">
              <th v-for="(col, indx2) in row" :key="col">
                {{ data.handsPoints[indx1][indx2] }}
              </th>
            </tr>
            <tr>
              <th v-for="total in data.totalPoints" :key="total">
                {{ total }}
              </th>
            </tr>
          </thead>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'game',

  data() {
    return {
      data: {
        points: [],
        handsPoints: [],
        hands: {},
        totalPoints: [],
      },
    };
  },

  computed: {
    players() {
      return this.$store.state.home.players.players;
    },
  },

  methods: {
    savePoints: function() {
      event.preventDefault();
      let max = Math.max(...this.data.points);

      let filterPoints = this.data.points.map(point => {
        if (point === max.toString()) {
          return point + '*';
        }
        if (point === '') {
          return '-';
        }
        return point;
      });
      this.data.handsPoints.push(filterPoints);
      this.data.totalPoints = this.calculateTotalPoints(this.data.points);
      this.data.points = [];
    },

    calculateTotalPoints: function(points) {
      let result;
      if (this.data.totalPoints.length === 0) {
        result = points;
      } else {
        result = this.data.totalPoints.map(point => {
          return +point + +this.data.points.shift();
        });
      }
      return result;
    },
  },
};
</script>

<style>
th {
  width: 10px;
}

th input {
  min-width: 10px;
  max-width: 100%;
}

.btn-pnt {
  cursor: pointer;
}
</style>

