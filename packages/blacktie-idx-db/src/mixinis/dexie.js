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
        return {
          contacts: '++id,name,email,phone',
          people: '++id,name,email,phone'
        }
      }
    },
    database: {
      type: String,
      default: 'dexie'
    },
    version: {
      type: Number,
      default: 3
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
    this.db.version(this.version).stores({
      contacts: '++id,name,email,phone',
      people: '++id,name1,email1,phone1'
    })
    //console.log(this.db)
    this.db
      .open()
      .then(db => {
        console.log('DB version', db.verno)
      })
      .catch(e => {
        console.log('dbversion', this.db.verno)
        console.log('error opening db', e)
      })
  },
  methods: {
    getAll(store) {
      console.log(store)
      store
        .toArray(results => {
          this.$nextTick(() => {
            this.results = results
            this.ready = true
            console.log('Records found', this.results.length)
            if (!this.results.length) {
              this.createDummy(store)
            }
          })
        })
        .catch(e => console.log('DB store error', e))
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
      if (data && key) {
        store
          .put(data, key)
          .then(results => {
            this.getAll(store)
            console.log('Record saved', results, 'for', key)
          })
          .catch(e => console.log('error', e))
      } else if (data) {
        store
          .put(data)
          .then(results => {
            this.getAll(store)
            console.log('Record updated', results)
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
    del(store, key = null) {
      if (key) {
        store
          .delete(key)
          .then(() => {
            this.getAll(store)
            console.log(`record deleted ${key}`)
          })
          .catch(e => console.log('errors', e))
      }
    }
  }
}
