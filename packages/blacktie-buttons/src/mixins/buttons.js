/**
 * @mixin
 */
module.exports = {
  props: {
    /**
     * Set timeout for how long confirmation prompt displays
     * in seconds for confirmation action
     */
    timeout: {
      type: Number,
      default: 5000
    },
    /**
     * Set timeout in secs default 5 secs before the confirmation disppears
     */
    displayConfirmation: {
      type: Boolean,
      default: false
    },
    /**
     * ID for button parent form required to prevent form submissions
     * and display prompt if confirmation is enabled
     */
    formID: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      confirmation: false,
      formControl: null
    }
  },
  mounted() {
    this.formControll = document.getElementById(this.fromID)
  },
  methods: {
    /**
     * Set the timeout add a confirmation action to a button
     * Listens for the sumbit event on the form control and prevents submit
     *
     * @param {Event} event
     * @public
     */
    confirmAction(event) {
      if (this.displayConfirmation) {
        if (this.formControl) {
          this.formControl.addEventListener('submit', e => {
            e.preventDefault()
          })
        }
        this.confirmation = true
        event.preventDefault()
        setTimeout(() => {
          this.confirmation = false
        }, this.timeout)
      }
    }
  }
}
