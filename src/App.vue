<template>
  <div id="app">
    <img alt="UNO logo" class="uno-logo" src="./assets/uno-logo.png">
    <router-view></router-view>
    <HelloWorld msg="LET'S PLAY" msg1="Please add players and then click Start" />
    <Players />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Players from './components/Players.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Players,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.uno-logo {
  height: 200px;
}
</style>
