
<template>
  <div id="app">
    <b-row id="nav" align-h="center">
      <b-col md="4" offset-md="4">
        <router-link to="/allies"> <img src="./assets/allies.png" /> </router-link> 
        <router-link to="/castel"> <img src="./assets/castel.png" /> </router-link>
        <router-link to="/war"> <img src="./assets/war.png" /> </router-link>
      </b-col>
    </b-row>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  margin-bottom: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
