/**
 * @mixin
 */
import inViewPort from 'in-viewport'
export default {
  data () {
    return {
      inview: true
    }
  },

  methods: {
    isInView (elm = null) {
      if (!elm) {
        return inViewPort(this.$el)
      }
      return inViewPort(elm)
    }
  }

}
