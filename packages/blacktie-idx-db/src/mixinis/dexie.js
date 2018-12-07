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
          // console.table(this.results)
        })
        .catch(e => console.log('error', e))
    },
    dummy(store) {
      store.bulkPut([
        {
          name: 'John Hannock',
          email: 'joh@hannock.com',
          phone: '000 000 0000'
        },
        {
          name: 'jane Hannock',
          email: 'jane@hannock.com',
          phone: '000 000 0000'
        },
        {
          name: 'mary Hannock',
          email: 'mary@hannock.com',
          phone: '000 000 0000'
        }
      ])
    }
  }
}
