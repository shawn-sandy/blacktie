<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input-component type="email" required></input-component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputComponent from './components/inputs.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    InputComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
