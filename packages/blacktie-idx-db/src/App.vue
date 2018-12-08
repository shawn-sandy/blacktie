<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <div style="text-align: left; width: 75vw !important; margin: auto;">
      <DbStore>
        <template slot-scope="{ results, ready }">
          <p v-if="ready">
            {{ results.length }}
          </p>
          <code><pre>{{ results }}</pre></code>
        </template>
      </DbStore>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DbStore from './components/Dexie.vue'
// import DfStore from './components/LocalIdx'
// import IdbStore from './components/Idb.vue'

export default {
  name: 'App',
  components: {
    DbStore
    // DfStore,
    // IdbStore
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
