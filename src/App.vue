<template>
<div id="app">
  <div class="container">
    <img src="./assets/logo.png"> 1 of 2
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
