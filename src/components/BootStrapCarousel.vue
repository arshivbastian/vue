
<template>
  <div class="saeed-castel">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      
      <b-carousel-slide :img-src="require('../assets/Carousel/1.jpg')"  ></b-carousel-slide>
   
      <b-carousel-slide :img-src="require('../assets/Carousel/2.jpg')"  ></b-carousel-slide>
      
      <b-carousel-slide :img-src="require('../assets/Carousel/3.jpg')"  ></b-carousel-slide>
   
      <b-carousel-slide :img-src="require('../assets/Carousel/4.jpg')"  ></b-carousel-slide>
 
    </b-carousel>

   

  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->
<style>
.saeed-castel{
  background-color: black;
}
</style>
