<template>
  <div class="side-bar d-flex flex-column">
    <div class="score-holder text-center">
      <label>Score: {{ yourScore }}</label>
    </div>
    <div
      class="movie-actions"
      :class="{ 'flex-grow-1': currentHint < 0 }">
      <button :disabled="yourScore <= revealCost || gameOver" class="btn btn-primary" @click="$emit( 'removeAPiece' )">Reveal a Piece</button>
      <button
        :disabled="currentHint === movieHints.length - 1 || yourScore <= hintCost || gameOver" class="btn btn-primary" @click="$emit( 'giveAHint' )">Give Me  Hint</button>
      <button :disabled="yourScore === 0 || gameOver" class="btn btn-danger" @click="$emit( 'giveUp' )">Give Up</button>
    </div>
    <div
      class="hints-holder"
      :class="{ 'flex-grow-1': currentHint >= 0 }">
      <div v-if="currentHint >= 0">
        <hr>
        <h5>Hints</h5>
        <transition-group  name="fade" class="list-unstyled" tag="ul">
          <li v-for=" hint in hints" :key="hint">{{ hint }}</li>
        </transition-group>
      </div>
    </div>
    <div class="completed-movies-holder flex-item flex-shrink-1">
      <div v-if="completedMovies.length > 0">
        <hr>
        <h5>Movies</h5>
        <transition-group  name="fade" class="list-unstyled" tag="ul">
          <li v-for="movie in completedMovies" :key="movie.title" :class="{ 'incorrect-movie': !movie.won }">{{ movie.title }}</li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['movieHints', 'currentHint', 'yourScore', 'revealCost', 'hintCost', 'gameOver', 'completedMovies'],
    computed: {
      hints() {
        return this.movieHints.filter((hint, index) => index <= this.currentHint);
      }
    }
  }
</script>

<style lang="scss">
  @import '../../sass/config';
  .side-bar {
    color: black;
    min-height: 100%;
    padding: 0 10px;
    .movie-actions {
      margin: 15px 0 0;
      button {

      }
    }
    .user-actions {
      margin: 25px 0 0;
    }
    .score-holder {
      color: black;
      font-size: 2rem;
      line-height: 2rem;
      margin-top: 15px;

      @include breakpoint(sm) {
        margin-top: 0;
      }
    }
    .movie-actions {
      button {
        margin: 0 0 10px 0;
        width: 100%;
      }
    }
    .completed-movies-holder {

      @include breakpoint(sm){
        font-size: .75rem;
        max-height: 200px;
        overflow: auto;
      }
      li.incorrect-movie {
        color: red;
        text-decoration: line-through;
      }
    }
  }
</style>
