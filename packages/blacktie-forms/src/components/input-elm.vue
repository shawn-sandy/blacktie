<template>
  <input
    :value="value"
    type="text"
    @input="$emit('input', $event.target.value)"
    @blur="validate($event)"
    class="input-elm"
  >
</template>

<script>
import _mixins from './../mixins/index.js'
export default {
  mixins: [_mixins]
}
</script>

<style lang="scss">
</style>
