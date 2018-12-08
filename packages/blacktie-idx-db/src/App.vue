<template>
  <div id="app">
    <h1 class="title is-1">
      BlackTie
    </h1>
    <div class="subtitle is-3">
      Index DB Component
    </div>
    <div style="text-align: left; width: 75vw !important; margin: auto;">
      <DbStore>
        <template slot-scope="{ results, ready, deleteContact, save, fakeUser }">
          <p>
            <template v-if="ready">
              Contacts : {{ results.length }}
                       <button
                         class="button is-small"
                         @click="fakeUser"
                       >
                         Add Contact
                       </button>
                       <hr>
            </template>
          </p>
          <div
            v-for="item in results"
            :key="item.id"
            class="columns"
          >
            <div class="column is-1">
              {{ item.id }}
            </div>
            <div class="column">
              {{ item.name }}
            </div>
            <div class="column has-text-left">
              {{ item.email }}
            </div>
            <div class="column has-text-left">
              {{ item.phone }}
            </div>
            <div class="column is-1">
              <button
                class="button is-small"
                @click="deleteContact(item.id)"
              >
                Delete
              </button>
            </div>
          </div>
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
