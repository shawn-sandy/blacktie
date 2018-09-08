<template>
  <span>
    <slot :content="data" :loading="loading"></slot>
  </span>
</template>

<script>
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
      data: null,
      loading: true
    }
  },
  created () {
    axios.get(this.url).then(response => {
      this.data = response
      this.loading = false
    })
  }
}
</script>
