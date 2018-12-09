/**
 * @mixin
 */
export default {

  methods: {
    /**
     * Set a timeout on a given boolean, allows to dynamically toggle values
     *
     * @param {boolean} target
     * @param {number} [timer=3000]
     */
    _timer (target, timer = 3000) {
      setTimeout(() => {
        target = !target
      }, timer)
    }
  }

}
