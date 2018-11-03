export default {
  props: {
    value: {
      default: null
    },
    required: {
      default: null
    },
    errorClass: {
      default: 'error'
    },

  },
  methods: {
    validate(e) {
      console.log('type', e.target.type)
      e.target.setCustomValidity('')
      if (!e.target.validity.valid) {
        e.target.setCustomValidity('Please enter a valid email address')
        e.target.classList.add(this.errorClass)
      } else {
        e.target.classList.remove(this.errorClass)
      }
      this.$emit('error-msg', e.target.validationMessage)
      console.log('message', e.target.validationMessage)
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
