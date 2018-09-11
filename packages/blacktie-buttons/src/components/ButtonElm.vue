<template>
  <button class="button-elm">
    <!-- @slot Use the slot to place the button content -->
    <slot>Click Here</slot>
  </button>
</template>

<script>
/**
 *  Custom button element (WIP)
 */
export default {
  name: 'ButtonElm',
  // inheritAttrs: false,
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
  methods: {}
}
</script>
<style lang="scss">
@import '../scss/style.scss';
</style>
