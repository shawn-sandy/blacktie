/**
 * @mixin
 */
export default {
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
    }
  },
  methods: {
    /**
     * Validates the input on blur and adds/ removes error class
     * Emits and error-msg event that passes a validation msg and input type
     * @param {*} e - focus event
     */
    validate(e) {
      if (!this.enableValidation) {
        return
      }
      e.target.setCustomValidity('')
      if (!e.target.validity.valid) {
        if (e.target.validity.valueMissing && this.errorMessage) {
          e.target.setCustomValidity(`${this.errorMessage}`)
        }
        e.target.classList.add(this.errorClass)
        /**
         * Emits error on field validation event
         *
         * @event
         */
        this.$emit(
          'error-msg',
          e.target.validationMessage.trim(),
          e.target.type,
          e.target.validity.valid
        )
      } else {
        e.target.classList.remove(this.errorClass)
        this.$emit('error-msg', null, null, false)
      }
      console.log('input', e)
    }
  },
  data() {
    return {
      isValid: false
    }
  }
}
// validity: ValidityState
// badInput: false
// customError: false
// patternMismatch: false
// rangeOverflow: false
// rangeUnderflow: false
// stepMismatch: false
// tooLong: false
// tooShort: false
// typeMismatch: true
// valid: false
// valueMissing: false
