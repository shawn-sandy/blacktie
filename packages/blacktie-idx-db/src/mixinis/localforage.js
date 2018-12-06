/**
 * @mixin
 */
import ForageDB from 'localforage'
export default {
  props: {
    dbName: {
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
    console.log('LF', ForageDB)
    ForageDB.setItem('key', 'francis scott?')
      .then(value => {
        console.log('woot! we saved ' + value)
      })
      .catch(err => {
        console.log("he's dead, jim!", err)
      })
  },
  methods: {
    load() {
      this.db = ForageDB
      if (this.dbName) {
        ForageDB.config({
          name: this.dbName
        })
      }
    }
  }
}
