<template>
  <div id="app" class="flex-elm">
    <div class="container">
      <bt-scrollbar>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor tenetur quae iste odio maiores laborum quisquam autem dolorem necessitatibus. Expedita aspernatur fugit incidunt? Molestias voluptates nisi nihil sint deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor tenetur quae iste odio maiores laborum quisquam autem dolorem necessitatibus. Expedita aspernatur fugit incidunt? Molestias voluptates nisi nihil sint deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor tenetur quae iste odio maiores laborum quisquam autem dolorem necessitatibus. Expedita aspernatur fugit incidunt? Molestias voluptates nisi nihil sint deserunt.</p>
      </bt-scrollbar>
    </div>
  </div>
</template>

<script>
import BtScrollbar from './components/Scrollbar.vue'

export default {
  name: 'app',
  components: {
    BtScrollbar
  }
}
</script>

<style lang="scss">
@import '~blacktie-styles/app.scss';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

  .container {
   width: 300px;
   height: 250px;
   margin-left: auto;
   margin-right: auto;
   overflow: hidden;
  }
}
@import './assets/variables.scss';
@import './assets/style.scss';
</style>
