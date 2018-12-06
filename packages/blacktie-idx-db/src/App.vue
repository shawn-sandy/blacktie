<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div style="text-align: left; width: 75vw !important; margin: auto;">
      <db-store>
        <template slot-scope="{ results }">
          <code>
            <pre>{{ results }}</pre>
          </code>
        </template>
      </db-store>
    </div>
    <div style="text-align: left; width: 75vw !important; margin: auto;">
      <db-store>
        <template slot-scope="{ results }">
          <code>
            <pre>{{ results }}</pre>
          </code>
        </template>
      </db-store>
    </div>
    <df-store db-name="contacts"></df-store>
    <idb-store></idb-store>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DbStore from './components/Dexie.vue'
import DfStore from './components/LocalIdx'
import IdbStore from './components/Idb.vue'

export default {
  name: 'app',
  components: {
    DbStore,
    DfStore,
    IdbStore
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
