*/<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
*/
<template>
</div>
 <BootStrapCarousel></BootStrapCarousel>
</div>
</template>
<script>
    import BootStrapCarousel from '@/components/BootStrapCarousel.vue';
 
    export default {
        components: {BootStrapCarousel}
    }
</script>