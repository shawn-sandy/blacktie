<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div style="text-align: left; width: 75vw !important; margin: auto;">
      <d-b>
        <template slot-scope="{ results }">
          <code>
            <pre>{{ results }}</pre>
          </code>
        </template>
      </d-b>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DB from './components/Idx.vue'

export default {
  name: 'app',
  components: {
    DB
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
