/**
 * @mixin
 */
export default {
  inheritAttrs: false,
  props: {
    /**
     * Default from value
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
     * Default name for success class adds a red border on success style `.field-success` styling required .field-success `{ border: solid 1px red; }`
     */
    successClass: {
      default: 'field-success'
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
     * Field name - sets the attribute for the label, label for, id and name attributes
     */
    name: {
      required: true,
      type: String
    },
    /**
     * Label required class name
     */
    requiredClass: {
      type: String,
      default: 'required'
    }
  },
  methods: {
    isRequired() {
      const field = this.$refs['input-field']
      if (field.hasAttribute('required')) {
        this.$el.querySelector('label').classList.add(this.requiredClass)
      }
    },
    /**
     * Validates the input on blur and adds/ removes error class
     * Emits and error-msg event that passes a validation msg and input type
     * @param {*} e - input focus event
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

        // e.target.classList.add(this.errorClass)
        e.target.classList.remove(this.successClass)

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
            e.target.classList.remove(this.successClass)
            e.target.classList.add(this.errorClass)
          }
        })
      } else {
        this.isValid = false
        this.hasError = false
        this.validationMessage = null
        this.$emit('error-msg', null, null, false)
        this.$nextTick(() => {
          if (!this.hasError) {
            e.target.classList.remove(this.errorClass)
            e.target.classList.add(this.successClass)
          }
        })
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
  },
  mounted() {
    this.isRequired()
  }
}
