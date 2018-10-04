<template>
  <button class="button-elm" @click="confirmAction">
    <span v-if="confirmation">
      <!-- @slot Use this slot to place the button confirmation content -->
      <slot name="confirmation">Continue</slot>
    </span>
    <span v-else>
      <!-- @slot Use the slot to place the button content -->
      <slot>Click Here</slot>
    </span>
  </button>
</template>

<script>
/**
 *  Custom button element (WIP)
 */
import ButtonsMixin from '../mixins/buttons.js'
export default {
  name: 'ButtonElm',
  mixins: [ButtonsMixin],
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
    },
    /**
     * Icon class
     */
    iconClass: {
      type: String
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
