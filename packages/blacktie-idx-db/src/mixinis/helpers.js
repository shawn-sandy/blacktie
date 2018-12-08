/**
 * @mixin
 */
import Format from 'date-fns/format'
export default {
  methods: {
    generateID() {
      return this.newID
    }
  },
  computed: {
    newID() {
      return Format(new Date(), 'YYYYMMDDTHHmmss')
    }
  }
}
