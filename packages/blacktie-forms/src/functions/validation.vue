<script>
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
      type: String,
      default: '.input-container'
    },
    /**
     * Validation message class - set the class for your validation msg container
     */
    validationMsg: {
      type: String,
      default: '.validation-msg'
    }
  },
  data() {
    return {
      showErrors: false,
      errorMsg: null,
      inputType: null,
      inputElm: null,
      targetName: null
    }
  },
  beforeDestroy() {},
  methods: {
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
      this.$nextTick(() => {})
    },
    addError(el) {
      el.add
    }
  },
  render() {
    return this.$scopedSlots.default({
      validate: this.errorNotify
    })
  }
}
</script>
