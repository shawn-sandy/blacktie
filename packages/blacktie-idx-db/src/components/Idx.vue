<template>
  <span><slot :results="results"></slot></span>
</template>

<script>
import dexie from './../mixinis/dexie.js'
export default {
  name: 'Idx',
  mixins: [dexie],
  data: function() {
    return {
      db: null,
      results: null
    }
  }
}
</script>

<style>
</style>
