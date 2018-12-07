/**
 * @mixin
 */
import Dexie from 'dexie'
import helper from './helpers'
export default {
  mixins: [helper],
  data: function() {
    return {
      db: null,
      results: null
    }
  },
  mounted() {
    console.log('ID', this.generateID())
    this.db = new Dexie('idx_contacts')
    this.db.version(1).stores({
      contacts: '++id,name,email,phone'
    })
    this.db.contacts
      .bulkPut([
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
      .then(() => {
        return this.db.contacts.toArray(results => {
          this.results = results
          console.table(results)
        })
      })
      // .then(results => {
      //   this.results = results
      //   console.log('results', this.results)
      // })
      .catch(e => {
        console.log('error', e)
      })
    // eslint-disable-next-line prettier/prettier
    // console.log('db', this.db)
  }
}
