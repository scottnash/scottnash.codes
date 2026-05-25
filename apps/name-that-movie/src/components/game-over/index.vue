<template>
  <div class="game-over text-center d-flex flex-column justify-content-center align-items-center">
    <div v-if="yourScore > 0">
      <h2>Congratulations!</h2>
      <h4>You were correct,</h4>
      <h5 v-if="similarityScore !== 1">(well, close enough)</h5>
    </div>
    <div v-else>
      <h2>Game Over</h2>
    </div>
    <h4>the movie was</h4>
    <h3>{{ movie.title }}</h3>
    <button
      class="btn btn-success"
      @click="$emit('nextMovie')"
      v-if="numberOfCompletedMovies < numberOfMovies"
    >Name Another Movie?</button>
    <h2 v-else>
      You finished all the movies!
    </h2>
  </div>
</template>

<script>
  export default {
    props: ['yourScore', 'movie', 'similarityScore', 'numberOfMovies', 'numberOfCompletedMovies']
  }
</script>

<style lang="scss">
  @import '../../sass/config';
  .game-over {
    background-color: rgba(255,255,255, .7);
    color: black;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    h2 {
      color: black;
    }
    button {
      font-size: .9rem;
      @include breakpoint(sm){
        font-size: 1rem;
      }
    }
  }
</style>
