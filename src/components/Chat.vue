<template>
  <div id="chat" :style="{'height': deviceheight}">
    <portal-target name="semantic-ui-vue"></portal-target>
      <b-row>
          <b-col cols="4" :style="{'height': deviceheight}"> 
            <div class="friendsinfo" v-for="(ally, name) in allies" @mouseover="leftoright" @mouseleave="righttoleft" @click="keepactive($event,ally.name)">
              <sui-image class="friendsimg" :src="ally.src" style="display:inline-block" size="tiny"/>
              <h2>{{ally.name}}</h2><br>
              <sui-popup content="Donate" size="mini">
                <sui-button circular color="violet" slot="trigger" icon="dollar" />
              </sui-popup>
              <sui-popup content="Black List" size="mini">
                <sui-button circular color="red" slot="trigger" icon="ban" />
              </sui-popup>
              <sui-popup content="Play a Game" size="mini">
                <sui-button circular color="yellow" slot="trigger" icon="plus" />
              </sui-popup>
              <sui-popup content="Call" size="mini">
                <sui-button circular color="green" slot="trigger" icon="phone" />
              </sui-popup>
            </div>
          </b-col>

          <b-col cols="8" id="chatplacemother" :style="{'height': deviceheight}">
              <div  id="chatplace" >
                <div id="chathead">
                  <h2 style="display:inline-block;color:#fff">{{chatname}}</h2><br>
                  <sui-popup content="Donate" size="mini" style="display:inline-block">
                    <sui-button circular color="violet" slot="trigger" icon="dollar" />
                  </sui-popup>
                  <sui-popup content="Black List" size="mini">
                    <sui-button circular color="red" slot="trigger" icon="ban" />
                  </sui-popup>
                  <sui-popup content="Play a Game" size="mini">
                    <sui-button circular color="yellow" slot="trigger" icon="plus" />
                  </sui-popup>
                  <sui-popup content="Call" size="mini">
                    <sui-button circular color="green" slot="trigger" icon="phone" />
                  </sui-popup>
                </div>
                <div id="chatbody"></div>
                <div id="chatinput">
                  <template lang="html">
                    <sui-input placeholder="Type Your Message" icon="paper plane" style="width:80%;height:100%!important" />
                    <sui-popup content="Share Your feeling" size="mini">
                      <sui-button icon="smile" slot="trigger" name="smile"/>
                    </sui-popup>
                    <sui-popup content="Add User to a Match" size="mini">
                      <sui-button icon="plus" slot="trigger" name="plus"/>
                    </sui-popup>
                    <sui-popup content="Share Your Victories" size="mini">
                      <sui-button icon="share" slot="trigger" name="share"/>
                    </sui-popup>
                  </template>
                </div>
              </div>
          </b-col>
      </b-row> 
  </div>
</template>

<script>
  export default {
    data () {
      return {
        deviceheight: '',
        devicewidth:'',
        chatname:'Not Picked',
        allies : [
          {name : 'Fighter Grandma' , src : require('../assets/user/fgm.png')} ,
          {name : 'Black Star' , src : require('../assets/user/hailblackskins.png')},
          {name : 'Game Worm' , src : require('../assets/user/letsplay.png')},
          {name : 'Red Head Slayer' , src : require('../assets/user/redheadslayer.png')},
          {name : 'Ordinary Her' , src : require('../assets/user/normalwoman.png')}
        ]
      }
    },
    mounted:function(){
      this.heighter() 
    },
    methods: {
      heighter () {
        this.deviceheight = window.innerHeight+'px';
        this.devicewidth = window.innerWidth+'px';
      },
      leftoright(hovered) {
        hovered.target.style.marginLeft = "0px" ;
      },
      righttoleft(hovered) {
        hovered.target.style.marginLeft = "-280px" ;
      },
      keepactive(clicked , clickedname) {
        $(".friendsinfo").css('box-shadow','0px 0px 0px 0px');
        clicked.target.style.boxShadow = "9px 2px 25px 7px rgba(171,164,40,1)";
        for (var counter=0 ; counter<this.allies.length ; counter++){
          if (this.allies[counter].name == clickedname ) {
              console.log(this.allies[counter].name);
              this.chatname = this.allies[counter].name ;
              break;
          }
        }
      },
    }
  };
</script>

<style>
  #chat {
    overflow: hidden;
    background-color: rgba(88, 115, 135, 0.5) ;
  }
  .friendsinfo {
    width: 90%;
    background-color:  rgba(88, 115, 135, 1) ;
    margin-top: 10px  ;
    margin-left: -280px;
    padding-left: 10px;
    height: 85px ;
    border-radius: 0px 30px 70px 0px ;
    color: beige ;
    transition-duration: 1s;
  }
  .friendsinfo h2 {
    display:inline-block;
    margin-left:3%;
    margin-top: 1% ;
    box-shadow: 0px 0px 0px 0px !important ;
  }
  .friendsimg {
    float: right;
    margin-top: 1% ;
    margin-right: 7% ;
    box-shadow: 0px 0px 0px 0px !important ;
  }
  .friendsinfo .ui.botton {
    box-shadow: 0px 0px 0px 0px !important ;
  }
  #chatplacemother {
    padding: 10px 0px 10px 10px ;
  }
  #chathead {
    padding: 10px ;
  }
  #chatplace {
    height: 88%;
    border-radius: 10px 0px 0px 10px ;
    -webkit-box-shadow: -7px 6px 22px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: -7px 6px 22px 1px rgba(0,0,0,0.75);
    box-shadow: -7px 6px 22px 1px rgba(0,0,0,0.75);
  }
  #chathead {
    height: 20%;
    border-radius: 10px 0px 0px 0px ;
    background-color:  rgba(88, 115, 135, 1) ;
  }
  #chatbody {
    height: 70%;
    background-image: url("../assets/chatbg.jpg");
    background-repeat: repeat;
  }
  .ui.input {
    font-size: 1em;
    margin: 1%;
  }
</style>

