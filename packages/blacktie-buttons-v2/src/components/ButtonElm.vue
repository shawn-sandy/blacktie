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
  methods: {}
}
</script>
<style lang="scss">
@import '../scss/style.scss';
</style>
