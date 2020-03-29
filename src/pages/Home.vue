<template>
  <div class="home">
<<<<<<< HEAD:src/pages/Home.vue
    <h1 class="title">CUBAN STYLE!</h1>

    <game-list></game-list>
=======
    <img alt="UNO logo" class="uno-logo" src="../assets/uno-logo.png">
    <h1>CUBAN STYLE!</h1>
    <h2>Please add players to Start</h2>
    <Players />
>>>>>>> e1da2762030a321cd5ae09185113748e9faf6769:src/components/Home.vue
  </div>
</template>

<script>
import GameList from "@/components/GameList";

export default {
  name: "home",
  components: {
    GameList
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

.title {
  text-align: center;
  margin-top: 1rem;
}
</style>
