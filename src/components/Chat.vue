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
                <div id="chatbody">
                    <div v-if="chatname!=='Not Picked'" v-for="chat in chats">
                      <div v-if="chatname === chat.room"> 
                        <div v-if="chat.from === 'true'" style="margin:5px 0px 0px 8px"><sui-button  color="green" :content="chat.txt"/></div>
                        <div v-else style="text-align:right ; margin:5px 15px 0px 0px"><sui-button color="red" :content="chat.txt"/></div>
                      </div>
                    </div>
                </div>
                <div id="chatinput">
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
                </div>
              </div>
          </b-col>
      </b-row> 
      <audio id="hover1" :src= "require('../assets/sounds/hover1.mp3')" ></audio>
      <audio id="hover2" :src= "require('../assets/sounds/hover2.mp3')" ></audio>
      <audio id="click" :src= "require('../assets/sounds/click.mp3')" ></audio>
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
        var hover1 = document.getElementById("hover1");
        const playPromise = hover1.play();
        if (playPromise !== null){
            playPromise.catch(() => { hover1.play(); });
            return false ;
        }
      },
      righttoleft(hovered) {
        hovered.target.style.marginLeft = "-280px" ;
        var hover2 = document.getElementById("hover2");
        const playPromise = hover2.play();
        if (playPromise !== null){
            playPromise.catch(() => { hover2.play(); })
        }
      },
      keepactive(clicked , clickedname) {
        $(".friendsinfo").css('box-shadow','0px 0px 0px 0px');
        clicked.target.style.boxShadow = "9px 2px 25px 7px rgba(171,164,40,1)";
        var click = document.getElementById("click");
        window.chosenchat = clickedname ;
        const playPromise = click.play();
        if (playPromise !== null){
            playPromise.catch(() => { click.play(); })
        }
        for (var counter=0 ; counter<this.allies.length ; counter++){
          if (this.allies[counter].name == clickedname ) {
              this.chatname = this.allies[counter].name ;
              break;
          }
        }
      },
    },
    computed : {
      chats() {
        return this.$store.state.chats ;
      }
    }

  };
</script>

<style>
  #chat {
    overflow: hidden;
    background-color: rgba(88, 115, 135, 0.5) ;
    padding-top: 4% ;
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
    padding: 0px 0px 10px 0px ;
  }
  #chatplace {
    height: 80%;
    border-radius: 10px 0px 0px 10px ;
    -webkit-box-shadow: -7px 6px 22px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: -7px 6px 22px 1px rgba(0,0,0,0.75);
    box-shadow: -7px 6px 22px 1px rgba(0,0,0,0.75);
  }
  #chathead {
    padding: 5px 0px 0px 10px ;
    height: 17%;
    border-radius: 10px 0px 0px 0px ;
    background-color:  rgba(88, 115, 135, 1) ;
  }
  #chatbody {
    height: 72%;
    background-position-x: 0% !important;
    background-position-y: 0% !important;
    background-repeat: no-repeat !important;
    background-size: 100% 240% ;
    background-image: url("../assets/chatbg.jpg");
    overflow-y: scroll;
    padding-bottom : 5px 
  }
  .ui.input {
    font-size: 1em;
    margin: 1%;
  }
</style>

