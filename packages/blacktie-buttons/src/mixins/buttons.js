/**
 * @mixin
 */
module.exports = {
  props: {
    /**
     * Set timeout in seconds for confirmation action
     */
    timeout: {
      type: Number,
      default: 3000
    },
    /**
     * Set timeout
     */
    displayConfirmation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      confirmation: false
    }
  },
  mounted() {},
  methods: {
    /**
     * Set the timeout add a confirmation action to a button
     *
     * @param {Event} event
     * @public
     */
    confirmAction() {
      if (this.displayConfirmation) {
        this.confirmation = true
        setTimeout(() => {
          this.confirmation = false
        }, this.timeout)
      }
    }
  }
}
