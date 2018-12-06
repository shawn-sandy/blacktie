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
    this.db = new Dexie('idx_todo1')
    this.db.version(2).stores({
      contacts: 'name,email,phone'
    })
    this.db.contacts
      .put({
        name: 'John Hannock',
        email: 'joh@hannock.com',
        phone: '000 000 0000'
      })
      .then(() => {
        return this.db.contacts.get('John Hannock')
      })
      .then(results => {
        this.results = results
        console.log('results', this.results.name)
      })
      .catch(e => {
        console.log('error', e)
      })
    // eslint-disable-next-line prettier/prettier
    // console.log('db', this.db)
  }
}
