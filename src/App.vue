<template>
  <div id="app" class="d-flex flex-column align-items-center">
    <img alt="UNO logo" class="uno-logo" src="./assets/uno-logo.png">
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.uno-logo {
  height: 200px;
}
</style>
