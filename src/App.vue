<template>
  <div id="app">


    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App..."/> -->
    <cover-img>
  <div v-cloak>
      <h1>Cover img text</h1>
      </div>
    </cover-img>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CoverImg from 'blacktie-img/src/CoverImg.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CoverImg
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
