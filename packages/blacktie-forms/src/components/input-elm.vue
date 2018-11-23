<template>
  <input
    :value="value"
    :class="{'field-validation': isValid }"
    class="input-elm"
    type="text"
    @input="$emit('input', $event.target.value)"
    @blur="validate($event)"
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
