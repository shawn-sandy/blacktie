import Popper from 'popper.js'
export default {
  props: {
    errorPlacement: {
      type: String,
      default: 'bottom-end'
    }
  },
  data() {
    return {
      showErrors: false,
      errorMsg: null,
      inputType: null
    }
  },
  beforeDestroy() {
    this.popper.destroy()
  },
  methods: {
    loadPopper() {
      console.log('wrapper', this.$refs.inWrapper.querySelector('.input-elm'))
      if (this.popper === undefined) {
        this.popper = new Popper(
          this.$refs.inWrapper.children[0],
          this.$refs.inErrors,
          {
            placment: this.errorPlacement
          }
        )
      } else {
        this.popper.scheduleUpdate()
      }
    },
    onError(msg = null, type = null, isValid = null) {
      console.log('msg', msg, isValid)
      if (!msg) {
        this.showErrors = false
        this.errorMsg = ''
        return
      }
      this.errorMsg = msg
      this.inputType = type
      this.showErrors = true
      this.$nextTick(() => {
        this.loadPopper()
      })
    }
  },
  computed: {}
}
