/**
 * @mixin
 */
import Dexie from 'dexie'
import faker from 'faker'
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
          console.log('retults', this.results.length)
          if (!this.results.length) {
            this.createDummy(this.db.contacts)
          }
        })
        .catch(e => console.log('error', e))
    },
    createDummy(store, data = null) {
      if (!data) {
        data = [
          {
            name: faker.name.findName(),
            email: faker.internet.exampleEmail(),
            phone: faker.phone.phoneNumber()
          },
          {
            name: faker.name.findName(),
            email: faker.internet.exampleEmail(),
            phone: faker.phone.phoneNumber()
          },
          {
            name: faker.name.findName(),
            email: faker.internet.exampleEmail(),
            phone: faker.phone.phoneNumber()
          }
        ]
      }
      store
        .bulkPut(data)
        .then(last_key => {
          console.log('WoooHooo data created, lets rock and roll...')
          this.$nextTick(() => console.log('last key', last_key))
        })
        .catch(e => {
          console.log('errors', e)
        })
    },
    create(store, data = null) {
      if (data) {
        store.add(data)
      }
    }
  }
}
