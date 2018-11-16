<template>
  <div class="home">
    <h1>CUBAN STYLE!</h1>
    <h2>Please add players to Start</h2>

    <Players />
  </div>
</template>

<script>
import Players from './Players.vue';

export default {
  name: 'home',
  components: {
    Players,
  },

  props: {
    msg: String,
    msg1: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
