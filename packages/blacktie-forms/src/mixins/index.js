/**
 * @mixin
 */
export default {
  inheritAttrs: false,
  props: {
    /**
     * default from value
     */
    value: {
      default: null
    },
    /**
     * Default name for error class adds a red border on error style `.field-error` styling required .field-error `{ border: solid 1px red; }`
     */
    errorClass: {
      default: 'field-error'
    },
    /**
     * Default input class
     */
    elmClass: {
      default: 'input-elm'
    },
    /**
     * Default error message
     */
    errorMessage: {
      default: null
    },
    /**
     * Turn custom validation on or off
     */
    enableValidation: {
      default: true
    },
    /**
     * Field Label text / value
     */
    label: {
      default: 'Field Name'
    },
    /**
     * Field name
     */
    name: {
      required: true,
      type: String
    }
  },
  methods: {
    /**
     * Validates the input on blur and adds/ removes error class
     * Emits and error-msg event that passes a validation msg and input type
     * @param {*} e - focus event
     */
    validate(e) {
      this.isValid = !e.target.validity.valid
      if (!this.enableValidation) {
        return
      }
      e.target.setCustomValidity('')
      if (!e.target.validity.valid) {
        this.hasError = true
        if (e.target.validity.valueMissing && this.errorMessage) {
          e.target.setCustomValidity(`${this.errorMessage}`)
        }
        this.validationMessage = e.target.validationMessage.trim()
        //console.log('element', e.target)

        e.target.classList.add(this.errorClass)

        /**
         * Emits error on field validation event
         *
         * @event
         */
        this.$emit(
          'error-msg',
          e.target,
          e.target.validationMessage.trim(),
          e.target.type,
          e.target.validity.valid
        )
        this.$nextTick(() => {
          // this.loadPopper()
          if (this.hasError) {
            e.target.classList.add(this.errorClass)
          }
        })
      } else {
        e.target.classList.remove(this.errorClass)
        this.isValid = false
        this.hasError = false
        this.validationMessage = null
        this.$emit('error-msg', null, null, false)
      }
    }
  },
  data() {
    return {
      isValid: false,
      hasError: false,
      validationMessage: ''
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
