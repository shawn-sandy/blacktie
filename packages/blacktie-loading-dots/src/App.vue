<template>
  <div id="app" class="flex-elm">
    <div class="section">
      <h1 class="title is-1">Blacktie Loading-dots demo</h1>
    <hr>
    <HelloWorld loading-style="floating"/>
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/Index.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "~blacktie-styles/app.scss";
@import "./scss/dot-setting-gray";
@import "./scss/loading-dots";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
