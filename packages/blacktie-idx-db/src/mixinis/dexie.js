/**
 * @mixin
 */

import faker from 'faker'
import Dexie from 'dexie'
export default {
  props: {
    connection: {
      type: Object,
      default: function() {
        return { contacts: '++id,name,email,phone' }
      }
    },
    database: {
      type: String,
      default: 'dexie'
    },
    version: {
      type: Number,
      default: 1
    }
  },
  data: function() {
    return {
      db: null,
      results: [],
      ready: false
    }
  },
  created() {
    this.db = new Dexie(this.database)
    this.db.version(this.version).stores(this.connection)
  },
  methods: {
    getAll(store) {
      store
        .toArray(results => {
          this.$nextTick(() => {
            this.results = results
            this.ready = true
            console.log('results', this.results.length)
            if (!this.results.length) {
              this.createDummy(this.db.contacts)
            }
          })
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
    save(store, data = null, key = null) {
      if (data) {
        store
          .put(data)
          .then(results => {
            this.getAll(store)
            console.log('saved results', results)
          })
          .catch(e => console.log('error', e))
      }
    },
    getById(store, key = null) {
      store.get(key, result => {
        this.item = result
      })
    },
    update(store, key = null, data = null) {
      if (data && key) {
        store
          .update(key, data)
          .then(res => {
            if (res) {
              this.getAll(store)
              console.log('record updates', res)
            } else {
              console.log('Update failed')
            }
          })
          .catch(e => console.log('error', e))
      }
    },
    delete(store, key = null) {
      if (key) {
        store
          .delete(key)
          .then(() => console.log('record deleted'))
          .catch(e => console.log('errors', e))
      }
    }
  }
}
