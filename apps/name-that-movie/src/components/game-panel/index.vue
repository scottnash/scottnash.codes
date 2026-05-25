<template>
  <div class="row no-gutters game-panel" v-if="randomMovies[currentIndex]">
    <div class="col-12 col-sm-8 col-md-9 col-lg-10">
      <div class="user-actions d-flex">
          <input class="form-control flex-fill" type="text" placeholder="Movie Title" v-model="movieTitleGuess" @keyup.enter="guessMovie"> <button class="btn btn-success" @click="guessMovie">Submit</button>
      </div>
      <transition name="fade">
        <message-alert :alertType="alertType" v-if="alertMessage">{{ alertMessage }}</message-alert>
      </transition>
      <div>
        <game-over v-if="gameOver"
          :yourScore = "yourScore"
          :similarityScore = "similarityScore"
          :movie = "randomMovies[currentIndex]"
          :numberOfMovies = "randomMovies.length"
          :numberOfCompletedMovies = "completedMovies.length"
          @nextMovie = "nextMovie"
        ></game-over>
        <movie-image
          :numberOfVerticalTiles = "numberOfVerticalTiles"
          :numberOfHorizontalTiles = "numberOfHorizontalTiles"
          :transparentTiles = "transparentTiles"
          :movieImage = "movieJPG"
          @removeAPiece = "removeAPiece"
          @imageLoaded = "imageHasLoaded"
        ></movie-image>
      </div>
    </div>

    <div class="col-12 col-sm-4 col-md-3 col-lg-2">
      <side-bar
        :movieHints = "movieHints"
        :currentHint = "currentHint"
        :yourScore = "yourScore"
        :hintCost = "hintCost"
        :revealCost = "revealCost"
        :gameOver = "gameOver"
        :completedMovies = "completedMovies"
        @removeAPiece = "removeAPiece"
        @giveAHint = "giveAHint"
        @giveUp = "yourScore = 0"
        ></side-bar>
    </div>
  </div>
</template>

<script>
  import { compareTwoStrings } from '@/compare-strings';
  import { database } from '@/database';
  import GameOver from '@/components/game-over/';
  import SideBar from '@/components/side-bar';
  import MovieImage from '@/components/movie-image';
  import MessageAlert from '@/components/message-alert';

  export default {
    components: {
      gameOver: GameOver,
      sideBar: SideBar,
      movieImage: MovieImage,
      messageAlert: MessageAlert
    },
    mounted() {
      let totalTiles = this.numberOfVerticalTiles * this.numberOfHorizontalTiles;
      this.arrayOfTiles = Array.from( { length: totalTiles }, ( v, k ) => k );
    },
    data() {
      return {
        currentIndex: 0,
        numberOfVerticalTiles: 15,
        numberOfHorizontalTiles: 25,
        movieTitleGuess: '',
        numberOfPieces: 0,
        arrayOfTiles: [],
        transparentTiles: [],
        currentHint: -1,
        gameOver: false,
        revealCost: 25,
        hintCost: 1000,
        showAlert: false,
        alertMessage: '',
        alertType: '',
        similarityScore: 0,
        completedMovies: [],
        imageLoaded: false
      }
    },
    firebase: {
      movies: database.ref('movies')
    },
    watch: {
    yourScore: function (newScore) {
      if( newScore === 0 ) {
        this.gameFinished();
      }
    }
  },
    computed: {
      yourScore:{
        set: function() {
          this.numberOfPieces = this.numberOfPieces+this.yourScore/25;
        },
        get: function() {
          return ( this.numberOfVerticalTiles * this.numberOfHorizontalTiles * 10 ) - ( this.numberOfPieces * this.revealCost ) - ( this.currentHint * this.hintCost );
        }
      },
      randomMovies(){
        let tempMovies = [...this.movies],
            tempMovie = null,
            randomMovies = [];
        tempMovies.forEach( ( movie, index ) => {
          let randomElement = Math.floor(Math.random() * ( tempMovies.length - index ) );
          randomMovies[ index ] = tempMovies[ randomElement ];
          tempMovie = tempMovies[ tempMovies.length - ( 1 + index ) ];
          tempMovies[ tempMovies.length - ( 1 + index )] = randomMovies[ index ];
          tempMovies[ randomElement ] = tempMovie;
        });

        return tempMovies;
      },
      movieHints(){
        let hints = ["Released in " + this.randomMovies[this.currentIndex].year, "Directed by " + this.randomMovies[this.currentIndex].director.trim()];
        this.randomMovies[this.currentIndex].starring.split(',').reverse().forEach( star => hints.push("Starring " + star.trim()) );
        return hints;
      },
      movieJPG(){
        return this.randomMovies[this.currentIndex]['.key'];
      }
    },
    methods: {
      imageHasLoaded( image ) {
        this.imageLoaded = true;
      },
      removeAPiece() {
        if( this.yourScore >= this.revealCost  && this.imageLoaded === true ) {
          let randomTilePosition = Math.floor(Math.random() * ( this.arrayOfTiles.length - this.numberOfPieces ) );
          this.transparentTiles.push(this.arrayOfTiles[randomTilePosition]);
          let randomTile = this.arrayOfTiles[randomTilePosition];
          this.numberOfPieces++;
          this.arrayOfTiles[randomTilePosition] = this.arrayOfTiles[this.arrayOfTiles.length - this.numberOfPieces];
          this.arrayOfTiles[this.arrayOfTiles.length - this.numberOfPieces] = randomTile;
        }
      },
      gameFinished() {
        this.gameOver = true;
        this.transparentTiles = this.arrayOfTiles;
        this.completedMovies.unshift({
          title: this.randomMovies[this.currentIndex].title,
          won: this.yourScore > 0
        })
      },
      giveAHint() {
        if ( this.yourScore >= this.hintCost ) {
          this.currentHint++;
        }
      },
      nextMovie() {
        this.imageLoaded = false;
        this.gameOver = false;
        this.movieTitleGuess = '';
        this.numberOfPieces = 0;
        this.transparentTiles = [];
        this.currentHint = -1;
        setTimeout( () => {
          this.currentIndex ++;
        }, 1000)
      },
      guessMovie() {
        if( !this.alertMessage && !this.gameOver ) {
          this.similarityScore = compareTwoStrings( this.randomMovies[this.currentIndex].title.toLowerCase(), this.movieTitleGuess.toLowerCase() );
          if( this.similarityScore === 1 ) {
              this.gameFinished();
          } else if( this.similarityScore > .8 ) {
              this.gameFinished();
          } else if( this.similarityScore > .4) {
            this.alertType = "alert-primary";
            this.setAlertMessage('Incorrect, but you are definitely thinking along the right lines.');
          } else if( this.similarityScore > 0 ) {
            this.alertType = "alert-warning";
            this.setAlertMessage('Incorrect, but you might have an inkling.');
          } else {
            this.alertType = "alert-danger";
            this.setAlertMessage('Sorry, but that is incorrect.');
          }
        }
      },
      setAlertMessage( msg ) {
        this.alertMessage = msg;
        setTimeout( () => {
          this.alertMessage = '';
        }, 3000);
      }
    }
  }
</script>

<style lang="scss">
@import '../../sass/config';
  .game-panel {
    background-color: $gameBoardBackground;
    border-radius: 5px;
    margin-top: 50px;
    overflow: hidden;
    padding: 10px 0 10px 10px;
    width: 100%;
    .user-actions{
      padding: 0 10px 10px 0;
      input {
        display: inline-block;
        margin: 0 10px 0 0;
      }
    }
  }
</style>
