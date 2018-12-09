/**
 * @mixin
 */

import faker from 'faker'
import Dexie from 'dexie'
import _sortBy from 'lodash/sortBy'
export default {
  props: {
    connection: {
      type: Object,
      default: function() {
        return {
          contacts: '++id,name,email,phone'
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
      redord: null,
      ready: false,
      dbExists: false,
      faker: [
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
  },
  created() {
    if (!Dexie.isOpen) {
      this.createDatabase()
      console.log('Database name', this.db.name)
    } else {
      console.log('DB closed')
    }
  },
  methods: {
    createDatabase() {
      this.db = new Dexie(this.database)
      this.db.version(this.version).stores(this.connection)
      this.db.open()
    },
    getAll(table) {
      //console.log(table)
      table
        .toArray(results => {
          this.results = _sortBy(results, 'name')
          this.ready = true
          console.log('Records found', this.results.length)
          if (!this.results.length) {
            this.createDummy(table)
          }
        })
        .catch(e => console.log('DB table error', e))
    },
    createDummy(table, data = null) {
      if (!data) {
        data = this.faker
      }
      table
        .bulkPut(data)
        .then(last_key => {
          this.getAll(table)
          console.log('WoooHooo data created, lets rock and roll...')
          console.log('last key', last_key)
        })
        .catch(e => {
          console.log('errors', e)
        })
    },
    save(table, data = null, key = null) {
      if (data && key) {
        table
          .put(data, key)
          .then(results => {
            this.getAll(table)
            console.log('Record saved', results, 'for', key)
          })
          .catch(e => console.log('error', e))
      } else if (data) {
        table
          .put(data)
          .then(results => {
            this.getAll(table)
            console.log('Record updated', results)
          })
          .catch(e => console.log('error', e))
      }
    },
    getById(table, key = null) {
      table.get(key, result => {
        this.item = result
      })
    },
    update(table, key = null, data = null) {
      if (data && key) {
        table
          .update(key, data)
          .then(res => {
            if (res) {
              this.getAll(table)
              console.log('record updates', res)
            } else {
              console.log('Update failed')
            }
          })
          .catch(e => console.log('error', e))
      }
    },
    del(table, key = null) {
      if (key) {
        table
          .delete(key)
          .then(() => {
            this.getAll(table)
            console.log(`record deleted ${key}`)
          })
          .catch(e => console.log('errors', e))
      }
    }
  }
}
