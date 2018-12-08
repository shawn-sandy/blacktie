/**
 * @mixin
 */
import IDB from 'idb'
export default {
  props: {
    dbNAme: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      db: null,
      results: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      console.log('IDB', IDB)
    }
  }
}
