<template>
  <div id="app">
    <div class="container">
      <div class="container">
        <DbStore>
          <template
            slot-scope="{ results, ready, deleteContact, save, fakeUser, resetDB }"
          >
            <div class="columns">
              <div class="column has-text-right">
                <button
                  class="button is-small"
                  :disabled="results.length <= 3"
                  @click="resetDB()"
                >
                  Reset Database
                </button>
                <hr>
              </div>
            </div>
            <div class="columns">
              <template v-if="ready">
                <div class="column">
                  <button
                    class="button is-info has-text-weight-bold"
                    @click="fakeUser"
                  >
                    <span class="">
                      &#43;
                    </span> Add Contact
                  </button>
                </div>
                <div class="column has-text-right">
                  <small>Total Contacts #{{ results.length }}</small>
                </div>
              </template>
            </div>

            <div
              v-for="item in results"
              :key="item.id"
              class="columns"
            >
              <!--
                <div class="column is-1">
                  {{ item.id }}
                </div>
              -->
              <div class="column">
                {{ item.name }}
              </div>
              <div class="column has-text-left">
                {{ item.email }}
              </div>
              <div class="column has-text-left">
                {{ item.phone }}
              </div>
              <div class="column is-1 has-text-right">
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
        <div class="columns">
          <div class="column">
            <h3 class="subtitle is-2 oswald is-uppercase">
              Index DB Component
            </h3>
            <div class="is-size-5">
              A scoped componenent that gives you access to the browsers
              built in INDEXDB Database , allowing you to perform create, read,
              update and delete operations client-side. Making it easy to build
              components that can quickly build interactive prototypes without the need for serverside complications or support.
            </div>
          </div>
        </div>
        <div>
          <hr>
        </div>
      </div>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
