<template>
  <div class="home">
    <h1>CUBAN STYLE!</h1>

    <game-list></game-list>
  </div>
</template>

<script>
import GameList from '@/components/GameList';

export default {
  name: 'home',
  components: {
    GameList,
  }
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
