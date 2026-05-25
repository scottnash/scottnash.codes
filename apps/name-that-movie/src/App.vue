<template>
  <div id="app" class="container-fluid">
    <div class="row" v-if="loggedIn">
      <app-header></app-header>
    </div>
    <router-view />
  </div>
</template>

<script>
  import firebase from 'firebase';
  import appHeader from '@/components/Header';
  export default {
    components: {
      appHeader
    },
    computed: {
        loggedIn(){
          return firebase.auth().currentUser;
        }
    }
  }
</script>

<style lang="scss">
@import './sass/config';
  @font-face {
      font-family: 'Limelight';
      src: url('assets/fonts/Limelight.woff2') format('woff2'),
          url('assets/fonts/Limelight.woff') format('woff');
      font-weight: 300;
      font-style: normal;
  }

  html{
    font-size: 12px;
    @include breakpoint(sm){
      font-size: 16px;
    }
  }

  body {
    background-color: $greenBackground;
  }

  h1, h2 {
    color: white;
    font-family: 'Limelight';
  }

  button.btn {
    font-weight: 700;
    @include breakpoint(sm){
      font-weight: normal;
    }
  }



  #app {
    color: white;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 0 auto;
    max-width: 1200px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    a {
      color: white;
    }
  }
  #nav {
    padding: 30px;
    a {
      color: white;
      &.router-link-exact-active {
        font-weight: bold;
      }
    }
  }
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
