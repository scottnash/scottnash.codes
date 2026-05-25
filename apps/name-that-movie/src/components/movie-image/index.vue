<template>
  <div class="movie-image-holder" @click="$emit('removeAPiece')">
    <div
      class="movie-cover"
      v-for=" (n, index) in ( numberOfHorizontalTiles * numberOfVerticalTiles )"
      :style="{ 'padding-top': movieCoverHeight + 'px', width: movieCoverWidth + 'px', visibility: visibleCovers }"
      :class="{ hideMe: transparentTiles.indexOf(index) > -1 }"
      ></div>
      <img
        ref="movieImage"
        class="movie-image"
        :src="require('@/assets/movie-images/' + movieImage + '.jpg')"
        @load="setTileSizes"
        :style="{ visibility: visibleImage }" />
        <div class="imageCheatCover"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        movieCoverWidth: 10,
        movieCoverHeight: 10,
        visibleCovers: 'hidden',
        visibleImage: 'hidden'
      }
    },
    mounted() {
      this.$nextTick(function() {
        window.addEventListener('resize', this.handleWindowResize);
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleWindowResize);
    },
    props: [
      'numberOfVerticalTiles',
      'numberOfHorizontalTiles',
      'transparentTiles',
      'movieImage'
    ],
    methods: {
      setTileSizes( event ){
        this.visibleImage = 'hidden';
        this.visibleCovers = 'hidden';
        const imageWidth = event.target.width,
              imageHeight = event.target.height;
        this.movieCoverWidth = imageWidth/this.numberOfHorizontalTiles + .9;
        this.movieCoverHeight = imageHeight/this.numberOfVerticalTiles;

        this.visibleCovers = 'visible';
        this.visibleImage = 'visible';
        this.$emit('imageLoaded', this.movieImage);
      },
      handleWindowResize(){
        this.setTileSizes({
          target: {
            height: this.$refs.movieImage.offsetHeight,
            width: this.$refs.movieImage.offsetWidth
          }
        })
      }
    }
  }
</script>

<style lang="scss">
@import '../../sass/config';
  .movie-image-holder {

    font-size: 0;
    position: relative;
  }
  .movie-cover {
    background-color: white;
    border: 1px solid $greenBackground;
    display: inline-block;
    height: 0;
    margin: 0 -1px -1px 0;
    opacity: 1;
    position: relative;
    transition: opacity 1s;
    z-index: 1;
    &.hideMe {
      opacity: 0;
    }
  }
  .movie-image {
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
  .imageCheatCover {
    background: white;
    height: 100%;
    position: absolute;
    right: -2px;
    top: 0;
    width: 4px;
  }
</style>
