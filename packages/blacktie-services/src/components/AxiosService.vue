<template>
  <span>
    <slot :response="response" :loading="loading"></slot>
  </span>
</template>
<script>

import axios from 'axios'
/**
 * An easy way to consume data from HTTP/REST services using axios
 * and Vue.js scoped slots
 */
export default {
  name: 'AxiosService',
  props: {
    /**
     * URL of the rest API service
     */
    url: {
      type: String,
      default: 'https://api.github.com/users/shawn-sandy'
    }
  },
  data: function () {
    return {
      response: [],
      loading: true,
      errors: []
    }
  },
  created () {
    axios.get(this.url).then(response => {
      this.response = response
      this.loading = false
    })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
