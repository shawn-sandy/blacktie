/**
 * @mixin
 */
import ForageDB from 'localforage'
export default {
  data() {
    return {
      db: null,
      results: null
    }
  },
  mounted() {
    this.db = ForageDB
    console.log('LF', this.db)
  },
  methods: {
    load() {
      // this.db = new3
    }
  }
}
