<template>
  <div id="app">
    <HelloWorld msg="Blacktie Imgs Component"/>
  </div>
</template>

<script>
import HelloWorld from './components/MainComponent.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import '../../blacktie-styles/app';

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
