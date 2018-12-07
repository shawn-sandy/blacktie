/**
 * @mixin
 */
import Dexie from 'dexie'
export default {
  props: {
    connection: {
      type: Object,
      default: function() {
        return { contacts: '++id,name,email,phone' }
      }
    }
  },
  created() {
    this.db = new Dexie('idx_contacts')
    this.db.version(1).stores(this.connection)
  },
  methods: {
    getResults(store) {
      store
        .toArray(results => {
          this.results = results
          this.ready = true
        })
        .catch(e => console.log('error', e))
    }
  }
}
