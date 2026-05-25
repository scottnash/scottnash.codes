<template>
  <div class="row home">
    <h1 class="w-100 text-center">Name That Movie!</h1>
    <p class="w-100 text-center">Guess the title of the movie before all your points are gone.</p>
  <game-panel></game-panel>
  </div>
</template>

<script>
import GamePanel from '@/components/game-panel';

export default {
  name: 'home',
  components: {
    gamePanel: GamePanel
  }
}
</script>

<style lang="scss">
  @import '../sass/config';


  .home {
    margin: 15px 0 0 0;
    @include breakpoint(sm) {
      margin-top: 25px;
    }
    p {
      margin: 0 25px;
    }
  }
</style>
