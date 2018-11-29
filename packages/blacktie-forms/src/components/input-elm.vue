<template>
  <div>
    <slot>
      <div>
        <label>{{ label }}</label>
      </div>
    </slot>
    <input
      v-bind="$attrs"
      :value="value"
      :class="{'field-validation': isValid }"
      class="input-elm"
      v-on="listeners"
      @blur="validate($event)"
    >
    <slot
      :validationMessage="validationMessage"
      :valid="isValid"
      name="errors">
      <div>{{ validationMessage }}</div>
    </slot>
  </div>
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
