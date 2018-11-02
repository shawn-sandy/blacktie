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
    }
  },
  methods: {
    validate(e) {
      if (!e.target.validity.valid) {
        e.target.classList.add(this.errorClass)
      } else {
        e.target.classList.remove(this.errorClass)
      }
    }
  },
  data() {
    return {
      isValid: false
    }
  }
}
