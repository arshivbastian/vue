<template>
   <div id='war'>
      <portal-target name="semantic-ui-vue"></portal-target>
      <b-container fluid>
      <b-img  class='vs' id="vs" :src="require('@/assets/war/finalImage/5.png')" />
         <div class="common-RL right" id="right" >
           <b-img  :src="src1" style='width:100%; height:100%' alt="Responsive image" />
        </div>
        
        <div class="common-RL left" id="left" >
             <b-img  :src="src2" style='width:100%; height:100%' alt="Responsive image" />
        </div>
         <b-row>
            <!--for-Menu-->
            <b-col cols="3">
               <CircleMenu></CircleMenu>
            </b-col>
            <!--for-Main-->
            <b-col cols="6" class="text-center">
               <CarouselWar></CarouselWar>
               <sui-button positive content="Start" style="margin-top:30px; width:300px;font-size:18px" @click='ok' id="StartButton" />
            </b-col>
            <b-col cols="3">
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>


<script>
    var container = "";
   import {
   	EventBus
   } from '@/evenBus.js';
   import CarouselWar from '@/components/war/CarouselWar'
   import CircleMenu from '@/components/war/CircleMenu'
   export default {
       data(){
           return{    
               src1:'',
               src2:'',
              
           }
       },
   	components: {
   		CircleMenu,
   		CarouselWar
   	},
   	beforeCreate: function() {
   		document.body.className = 'war';
   		container = ""
   	},
   	mounted: function() {
   	
   	},
       methods:{
           ok(){
              	var container1 = container.split(",");
   			console.log(container1);
               this.src1=require('@/assets/war/finalImage/'+container1[0]+'.jpg');
               this.src2=require('@/assets/war/finalImage/'+container1[1]+'.jpg');
               $("#right").css("right","0");
               $("#left").css("left","0");
               
              $("#vs").addClass("showVs");
               
           }
       }
   };
   EventBus.$on('ChildToParent', clickCount => {
   	container += clickCount + ",";
   
   });
</script>

<style >
    body.war {
        direction: rtl;
        background-image: url('../assets/war/1.jpg');
        height: 100%;
        width: 100%;
        background-size: cover;
        background-repeat: repeat;
        position: relative;
        z-index: 1;
    }

    #nav {
        direction: ltr;
    }
    .common-RL{
        width: 50%;
        height: 100%;  
        position: absolute;
        top: 0;
         z-index: 16;
         -webkit-transition: all 2s;
        -o-transition: all 2s;
        transition: all 2s;
    }
    .right{
     right: -50%;
    }
    .left{
       left: -50%; 
    }
    .vs{
transform: scale(0);
        width: 200px;
        height: 200px;
        position: absolute;
        top: 50%;
        left: 43%;
        z-index: 17;
    }
    .showVs{

         transform: scale(0);
        animation-name: vs;
    animation-duration: .5s;
        animation-delay: 2s;
    animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
        @keyframes vs {
        0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
    }
</style>
