<template>
  <div id="app" class="flex-elm">
    <HelloWorld msg="Blacktie Scrollbar demo"/>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

}
</style>
