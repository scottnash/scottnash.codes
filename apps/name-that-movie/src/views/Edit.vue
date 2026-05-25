<template>
  <div class="row edit-page">
    <div class="col-12 col-md-8 ml-auto mr-auto">
      <h1>{{ editMode }} Movie</h1>
      <div class="form-group">
        <label>Title</label>
        <input class="form-control" type="text" v-model="movie.title">
      </div>
      <div class="form-group">
        <label>Year</label>
        <select
           v-model="movie.year"
           id="movieYear"
           class="form-control">
           <option v-for="n in currentYear - startingYear">{{ currentYear - n + 1  }}</option>
       </select>
      </div>
      <div class="form-group">
        <label>Starring: (Seperate cast by commas)</label>
        <input class="form-control" type="text" v-model="movie.starring">
      </div>
      <div class="form-group">
        <label>Director:</label>
        <input class="form-control" type="text" v-model="movie.director">
      </div>
      <button class="btn btn-primary" @click="submit">Submit</button>
      <br><br>
      <transition name="fade">
        <div class="alert alert-danger text-center" v-if="showFormIncompleteWarning">
          All fields are required.
        </div>
      </transition>
    </div>
    <div class="col-12 col-md-8 ml-auto mr-auto">
      <hr>
      <h3>Movies</h3>
      <div class="form-group">
          <label>Search by Title</label>
          <input class="form-control" type="text" v-model="filterMovie">
      </div>
      <ul class="list-group">
        <li
          v-for="( movie, index ) in filteredMovies"
          class="list-group-item"
          @click="editMovie(movie)"
          >{{ index + 1 }}. {{ movie.title }} ({{ movie.year }}) {{ movie['.key'] }} <span @click.stop="deleteMovie(movie)">+</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { database } from '@/database';
    export default {
      firebase: {
        movies: database.ref('movies').orderByChild('year')
      },
      data(){
        return {
          movie: {},
          startingYear: 1900,
          showFormIncompleteWarning: false,
          editMode: 'Add',
          filterMovie: ''
        }
      },
      methods: {
        submit(){
          if( this.allMovieFieldsPopulated() ) {
            if( this.editMode === "Add" ) {
              this.$firebaseRefs.movies.push( this.movie );
              this.clearMovie();
            } else {
              this.$firebaseRefs.movies.child(this.movie['.key']).child('title').set(''); // force a change in case user clicks submit without changing anything, in which case movie list doesn't rerender and when form is cleared out, movie in movie list is blank.
              this.$firebaseRefs.movies.child(this.movie['.key']).child('year').set(this.movie.year);
              this.$firebaseRefs.movies.child(this.movie['.key']).child('starring').set(this.movie.starring);
              this.$firebaseRefs.movies.child(this.movie['.key']).child('director').set(this.movie.director);
              this.$firebaseRefs.movies.child(this.movie['.key']).child('title').set(this.movie.title);

              this.clearMovie();
            }
          } else {
            this.showFormIncompleteWarning = true;
            setTimeout( () => {
              this.showFormIncompleteWarning = false;
            }, 2000)

          }
        },
        deleteMovie( movie ){
          this.$firebaseRefs.movies.child(movie['.key']).remove();
          this.clearMovie();
        },
        clearMovie(){
          this.movie = {};
          this.editMode = "Add";
        },
        allMovieFieldsPopulated(){
          if( Object.keys( this.movie ).length < 4 ) {
            return false;
          }

          return true;
        },
        editMovie( movie ) {
          this.movie = movie;
          this.editMode = "Edit";
        }
      },
      computed: {
        currentYear(){
          return new Date().getFullYear();
        },
        filteredMovies(){
          return this.movies.filter( movie => movie.title.toLowerCase().indexOf( this.filterMovie.toLowerCase() ) > -1 )
        }
      }
    }
</script>

<style scoped lang="scss">
  hr {
    background-color: white;
  }
  .edit-page {
    margin-top: 25px;
  }
  li {
    color: black;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      right: 10px;
      top: 0;
      transform: rotate(45deg);
    }
  }
</style>
