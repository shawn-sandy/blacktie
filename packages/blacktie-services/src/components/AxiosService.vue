<template>
  <span>
    <slot :data="data" :loading="loading"></slot>
  </span>
</template>
<script>
/**
 * Axiso services component returns
 */
import axios from 'axios'
export default {
  props: {
    url: {
      type: String,
      default: 'http://jsonplaceholder.typicode.com/posts'
    }
  },
  data: function () {
    return {
      data: [],
      loading: true,
      errors: []
    }
  },
  created () {
    axios.get(this.url).then(response => {
      this.data = response
      this.loading = false
    })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
