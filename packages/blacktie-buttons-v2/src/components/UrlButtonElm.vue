<template>
  <a
    href="/"
    class="button-elm"
    @click="confirmAction($event)">
    <span v-if="confirmation">
      <!-- @slot Use this slot to place the button confirmation content -->
      <slot name="confirmation">Continue</slot>
    </span>
    <span v-else>
      <!-- @slot Use the slot to place the button content -->
      <slot>Click Here</slot>
    </span>
  </a>
</template>

<script>
import ButtonsMixin from '../mixins/buttons.js'
export default {
  name: 'UrlButtonElm',
  mixins: [ButtonsMixin]
}
</script>

<style lang="scss">
@import '../scss/style.scss';
</style>
