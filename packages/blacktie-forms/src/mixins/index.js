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
    errorMessage: {
      default: 'Please enter/select a valid'
    }
  },
  methods: {
    validate(e) {
      if (!e.target.validity.valid) {
        e.target.setCustomValidity(`${this.errorMessage} ${e.target.type}`)
        e.target.classList.add(this.errorClass)
        this.$emit('error-msg', e.target.validationMessage)
      } else {
        e.target.classList.remove(this.errorClass)
        this.$emit('error-msg', '')
      }
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
