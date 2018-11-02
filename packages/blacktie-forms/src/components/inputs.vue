<template>
  <input
  :value="value"
  type="text"
  @input="$emit('input', $event.target.value)"
  @blur="validate($event)"
  :required="required"
  >
</template>

<script>
import _mixins from './../mixins/index.js'
export default {
  mixins: [_mixins]
}
</script>

<style lang="scss">
input.error {
  border: solid 1px red;
}
</style>
