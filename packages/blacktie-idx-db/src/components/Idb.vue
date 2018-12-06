<template>
  <span>
    <slot>
      IDB
    </slot>
  </span>
</template>

<script>
import IDB from './../mixinis/idb.js'
// import helper from './../mixinis/helpers.js'
export default {
  name: 'IDBStore',
  mixins: [IDB],
  mounted() {
    // console.log('date', this.generateID())
  }
}
</script>

<style>
</style>
