<template>
<div>
   <b-container fluid>
     <b-row>
      <b-col cols="12">
        <BootStrapCarousel></BootStrapCarousel> 
    </b-col>
    </b-row>
    </b-container>
  
</div>
</template>
<script>
       import BootStrapCarousel from '@/components/BootStrapCarousel.vue';
 
    export default {
          beforeCreate: function() {
            document.body.className = 'castel';
        },
        components: {BootStrapCarousel}
    }
</script>

    <style>
   body.castel{
        background-color: #000;
      overflow: hidden;
    }
</style>
<style scoped="true">
 
</style>
