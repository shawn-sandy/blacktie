<template>
  <input
    :value="value"
    type="text"
    @input="$emit('input', $event.target.value)"
    @blur="validate($event)"
    class="input-elm"
    :class="{'field-validation': isValid }"
  >
</template>

<script>
/**
 * BlackTie input element with baked in HTML5 validation, light fast and easy to cutomize
 */
import _mixins from './../mixins/index.js'
export default {
  name: 'InputElm',
  mixins: [_mixins]
}
</script>
