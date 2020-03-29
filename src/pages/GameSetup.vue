<template>
    <div class="game-setup">
        <h1>Welcome to {{ location }}!</h1>
        <hr>
        <game-player-list :game="game"></game-player-list>
    </div>
</template>

<script>
import GamePlayerList from "@/components/GamePlayerList";

export default {
  components: {
    GamePlayerList,
  },
  created: function() {
      if (!this.$store.getters.current.location) {
          this.$router.push("/home");
      }    
  },
  computed: {
    game() {
        return this.$store.getters.current;
    },
    location() {
      return this.$store.getters.current.location;
    }
  }
};
</script>
