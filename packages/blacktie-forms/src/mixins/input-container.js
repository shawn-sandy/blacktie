/**
 * @mixin
 */
import Popper from 'popper.js'
export default {
  props: {
    /**
     * Positions the notification box
     */
    errorPlacement: {
      type: String,
      default: 'bottom-start'
    },
    /**
     * Sets the selector for wrapper element for each form fields - se
     */
    wrapper: {
      default: '.input-container'
    },
    /**
     * Validation message class - set the class for your validation msg container
     */
    validationMsg: {
      default: '.validation-msg'
    }
  },
  data() {
    return {
      showErrors: false,
      errorMsg: null,
      inputType: null,
      inputElm: null
    }
  },
  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy()
    }
  },
  methods: {
    loadPopper(el) {
      const wrapper = el.closest(this.wrapper)
      const errorElm = wrapper.querySelector(this.validationMsg)
      console.log('wrapper', wrapper, wrapper.querySelector('.error-msg'))
      if (this.popper === undefined) {
        this.popper = new Popper(el, errorElm, {
          placement: this.errorPlacement
        })
      } else {
        this.popper.scheduleUpdate()
      }
    },
    /**
     * Process and displays the error notification
     *
     * @public
     *
     * @param {string} [msg=null] - The error msg
     * @param {string} [type=null] - field type
     * @param {bool} [isValid=null] - Field validation bool
     * @return null
     */
    errorNotify(el) {
      console.log('msg', el.validationMessage.trim())
      console.log(el)

      if (!el.validationMessage.trim()) {
        this.showErrors = false
        this.errorMsg = ''
        return
      }
      this.errorMsg = el.validationMessage.trim()
      this.inputType = el.type
      this.showErrors = true
      this.$nextTick(() => {
        this.loadPopper(el)
      })
    }
  }
}
