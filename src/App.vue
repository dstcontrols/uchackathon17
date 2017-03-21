<template>
<div id="app">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">.col-xs-12</div>
      <div class="col-xs-4">.col-xs-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
      <div class="col-xs-6">.col-xs-6<br>Subsequent columns continue along the new line.</div>
    </div>
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
