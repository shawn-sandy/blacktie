<template>
  <button class="">
    <!-- @slot Use this slot to place the button content -->
    <slot>Button</slot>
  </button>
</template>

<script>
/**
 *  Custom button element (WIP)
 */
export default {
  name: 'AppButton',
  inheritAttrs: false,
  props: {
    /**
     * Sets the button font color
     */
    color: {
      type: String,
      default: 'black'
    },
    /** Sets background color of the button
     * @since 1.2.0
     */
    background: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    styles() {
      return {
        'font-size': this.size,
        color: this.color,
        background: this.background
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import './scss/app-button.scss'
</style>
