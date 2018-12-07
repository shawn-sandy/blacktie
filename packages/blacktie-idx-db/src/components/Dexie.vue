<template>
  <span><slot :results="results" :ready="ready"></slot></span>
</template>

<script>
import helper from './../mixinis/helpers.js'
import dex from './../mixinis/dexie.js'
export default {
  name: 'DexieStore',
  mixins: [helper, dex],
  data: function() {
    return {
      db: null,
      results: [],
      dbName: null,
      ready: false
    }
  },
  mounted() {
    if (!this.db.contacts) {
      // console.log('setup contacts')
    } else {
      this.getResults(this.db.contacts)
      console.log('set contacts', this.db.contacts)
    }
  }
}
</script>

<style>
</style>
