
    <template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                :interval="0"
                background="#ababab"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="Stage 1"
               :img-src="require('@/assets/war/stage/stage1.jpg')"    
      ></b-carousel-slide>
      <b-carousel-slide caption="Stage 2"
                       :img-src="require('@/assets/war/stage/stage2.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide caption="Stage 3"
                       :img-src="require('@/assets/war/stage/stage3.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide caption="Stage 4"
                       :img-src="require('@/assets/war/stage/stage4.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide caption="Stage 5"
                       :img-src="require('@/assets/war/stage/stage5.jpg')"
      ></b-carousel-slide>
    </b-carousel>


  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
    #carousel1{
          margin-top: 100px;
    }
</style>