
<template>
   <div>
      <div class="big-box" id="bigBox">
         <div>
            <sui-image v-for="item in items" v-b-popover.hover="item.popup" title="Hero"  style="display:inline-block;margin:10px;" :src="item.src" :alt="item.alt" :width="item.width" :height="item.height" :key="item.id" circular  @click.native="ok(item.id)"/>
         </div>
      </div>
      <div class="box" id="box"  >
         <sui-button icon="chevron circle left
            " color="red" size="large"  id="button" />
      </div>
   </div>
</template>

<script>
import { EventBus } from '@/evenBus.js';
    export default {
       
        mounted: function() {
    
		document.getElementById("bigBox").onwheel = function() {
			myFunction()
		};

		function myFunction() {
			if (document.getElementById("bigBox").style.transform == '') {
				document.getElementById("bigBox").style.transform = "rotate(180deg)";
				$('#bigBox img:eq(0)').add('#bigBox img:eq(2)').css('transform', 'rotate(180deg)');
			} else if (document.getElementById("bigBox").style.transform == 'rotate(0deg)') {
				document.getElementById("bigBox").style.transform = "rotate(180deg)";
			} else {
				document.getElementById("bigBox").style.transform = "rotate(0deg)";
			}
		};
		$("#button").click(function() {
            $("#bigBox").toggleClass("showHidenBigBox");
            $("#button").toggleClass("showHidenButtonBox");
            $("#box").toggleClass("showHidenBox");
        });
 
	},
	data() {
		return {
			items: [ {
				src: require('@/assets/war/Krul.jpg'),
				alt: 'Krul',
				height: '120px',
				width: '120px',
                popup:'Krul',
                id:0
			}, 
                     {
				src: require('@/assets/war/reim.jpg'),
				alt: 'Reim',
				height: '120px',
				width: '120px',
                popup:'Reim',
                id:1
			},{
				src: require('@/assets/war/taka.jpg'),
				alt: 'Taka',
				height: '120px',
				width: '120px',
                popup:'Taka',
                id:2 
			},{
				src: require('@/assets/war/vox.jpg'),
				alt: 'Vox',
				height: '120px',
				width: '120px',
                popup:'Vox' ,
                id:3
                
			}]
		}     
	},
        methods:{
            ok(e){
                $("#bigBox img:eq("+e+")").toggleClass('ActiveDeactivate');
                   EventBus.$emit('ChildToParent', e);
            }
        }

};
 
</script>

<style scoped>
    .box {
        position: relative;
        right: -80px;
        top: -238px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        border: 2px solid #ff5144;
        background-color: rgb(0, 0, 0,0.8);
        animation-duration: 2s;
        animation-name: changewidth;
        animation-iteration-count: infinite;
        animation-direction: alternate;
          -webkit-transition: border 2s;
        -o-transition: border 2s;
        transition: border 2s;
    }

    .box button {
        position: absolute;
        left: 8px;
        top: 40px;
border-radius: 50% !important;
        /* transform: rotate(0deg);*/
          -webkit-transition: transform 1s !important;
        -o-transition: transform 1s !important;
        transition: transform 1s !important;
    }

    .big-box {
   background-color:rgb(99, 99, 99,0.8);
        margin-top: 100px;
        line-height: 173px;
        text-align: center;
        position: relative;
        left: 360px;
        width: 350px;
        height: 350px;
        border: 2px solid blue;
        border-radius: 50%;
        -webkit-transition: all 2s;
        -o-transition: all 2s;
        transition: all 2s;
    }
    .showHidenBigBox{
        left:190px;
        border:2px solid blue;
        -webkit-transition: all 2s;
        -o-transition: all 2s;
        transition: all 2s;
    }
    .showHidenButtonBox{
        transform: rotate(180deg);
    }
    .showHidenBox{
        border: 2px solid blue;
          -webkit-transition: border 2s;
        -o-transition: border 2s;
        transition: border 2s;
        animation-iteration-count: 1;
    }
    #bigBox img:hover{
        cursor: pointer;
        -webkit-filter: grayscale(0);
        -o-filter:grayscale(0) ;
        filter: grayscale(0);
    }
    #bigBox img{
      -webkit-filter:grayscale(100%); 
      -o-filter:grayscale(100%); 
      filter:grayscale(100%); 
    }
    .ActiveDeactivate{
        -webkit-filter: grayscale(0) !important;
        -o-filter:grayscale(0) !important ;
        filter: grayscale(0) !important;
    }
    @keyframes changewidth {
        from {
            border-color: 1px 1px 20px 4px white;
        }

        to {
            box-shadow: 1px 1px 20px 10px white;
        }
    }

</style>
