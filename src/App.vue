
<template>
  <div id="app">
    <div id="nav">
      <div id="menu">
        <sui-divider horizontal inverted id="menudivider" @click.ctrl="onClick">Menu</sui-divider>
        <router-link to="/allies"> <img src="./assets/allies.png" /> </router-link> 
        <router-link to="/castel"> <img src="./assets/castel.png" /> </router-link>
        <router-link to="/war"> <img src="./assets/war.png" /> </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// export default {
//   data: {
//     state: true
//   }
//   methods: {
//     onClick: function () {
//       alert('Hello')
//       if (state == true) {
        
//         this.state = false
//       }
//       else if (state == false) {
        
//         this.state = false
//       }
//     }
// }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  width: 100% ;
  text-align: center !important;
  position: fixed ;
  bottom: 0 ;
  z-index: 1000 ;
}
#menudivider {
  margin-bottom: 20px !important ;
}
#menu {
  width: 460px;
  margin-left: 32%;
  padding : 15px ;
  background-color: rgba(88, 115, 135, 0.9) ;
  border-radius: 5px 5px 0px 0px ;
}
#menu img {
  margin-left: 30px;
}
</style>
