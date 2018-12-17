<template>
  <div id="chat" :style="{'height': deviceheight}">
    
      <b-row>
          <b-col cols="4" :style="{'height': deviceheight}"></b-col>
          <b-col cols="8" id="chatplacemother" :style="{'height': deviceheight}">
              <div  id="chatplace" >
                <div id="chathead"></div>
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
        devicewidth:''
      }
    },
    mounted:function(){
      this.heighter() //method1 will execute at pageload
    },
    methods: {
      heighter () {
        this.deviceheight = window.innerHeight+'px';
        this.devicewidth = window.innerWidth+'px';
      }
    }
  };
</script>

<style>
  #chat {
    overflow: hidden;
    background-color: rgba(88, 115, 135, 0.5) ;
  }
  #chatplacemother {
    padding: 10px 0px 10px 10px ;
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

