/**
 * @mixin
 */
import Dexie from 'dexie'
export default {
  data: function() {
    return {
      db: null,
      results: null
    }
  },
  mounted() {
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
