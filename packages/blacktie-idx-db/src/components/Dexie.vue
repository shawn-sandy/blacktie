<template>
  <span>
    <slot
      :results="results"
      :ready="ready"
    />
    <div class="small">
      <small>
        [ Info -  Database : {{ database }} .
        Version: {{ version }} .
        Connection: {{ connection }} ]
      </small>
    </div>
  </span>
</template>

<script>
import helper from './../mixinis/helpers.js'
import dex from './../mixinis/dexie.js'
export default {
  name: 'DexieStore',
  mixins: [helper, dex],
  mounted() {
    if (!this.db.contacts) {
      // console.log('setup contacts')
    } else {
      this.getAll(this.db.contacts)
      //console.log('getting results')
    }
    this.$nextTick(() => {
      // console.log('empty', this.results.length)
    })
  }
}
</script>

<style>
</style>
