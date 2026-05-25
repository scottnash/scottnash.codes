<template>
  <header class="col-12 text-center">
    <ul class="list-inline">
      <router-link class="list-inline-item" to="/" tag="li"><a>Home</a></router-link> | <router-link class="list-inline-item" to="/edit" tag="li"><a>Edit</a></router-link>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
  header {
    padding: 25px 0 0;
  }
  a {
    font-size: 1rem;
  }
  .router-link-exact-active {
    a{
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
  ul {
    margin: 0;
  }
  li.list-inline-item {
    margin: 0;
    padding: 0;
  }
</style>
