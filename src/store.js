import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats : [
      {room:'Fighter Grandma',from:'false',txt:'hi'},
      {room:'Fighter Grandma',from:'true',txt:'go away! you are a noob , kid! go play with other kids'},
      {room:'Fighter Grandma',from:'false',txt:'but I want to play with you'},

      {room:'Black Star',from:'true',txt:'where are you?'},
      {room:'Black Star',from:'true',txt:'we need your help in war'},
      {room:'Black Star',from:'true',txt:'critical'},
      {room:'Black Star',from:'false',txt:"I'm at school"},

      {room:'Game Worm',from:'true',txt:"hey , yo ... I'm here 24/7 so lets play anytime"},
      {room:'Game Worm',from:'false',txt:"seriously ! where do you earn money dude ?"},

      {room:'Red Head Slayer',from:'false',txt:"are you free Saturday night ?"},
      {room:'Red Head Slayer',from:'true',txt:"Is this a date ?"},
      {room:'Red Head Slayer',from:'false',txt:"ummm , sort of ..."},

      {room:'Ordinary Her',from:'true',txt:"I will deport you from guild"},
      {room:'Ordinary Her',from:'false',txt:"whaaaaaaaaaaat ?"},
    ]
  },
  mutations: {
    saver (sentmessage) {
      message.push(sentmessage)
    }
  },
  actions: {

  }
})
