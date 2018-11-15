<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="player in players" :key="player">{{ player }}</th>
                </tr>
                <tr>
                    <th v-for="player in players" :key="player">
                        <input value="" type="number">
                    </th>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
export default {
  name: 'game',

  computed: {
    players() {
      return this.$store.state.home.players.players;
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
</style>

