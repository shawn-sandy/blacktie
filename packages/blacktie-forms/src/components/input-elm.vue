<template>
  <div>
    <!-- @slot default slot default label display - scope validationMessage, isValid -->
    <slot
      :validationMessage="validationMessage"
      :isValid="isValid"
      :hasError="hasError">
      <div>
        <label :label="name">{{ label }}</label>
      </div>
    </slot>
    <input
      v-bind="$attrs"
      :value="value"
      :class=" elmClass "
      :name="name"
      :aria-label="name"
      v-on="listeners"
      @blur="validate($event)"
    >
    <!-- @slot Displays error messages - scope validationMessage, isValid -->
    <slot
      :validationMessage="validationMessage"
      :isValid="isValid"
      :hasError="hasError"
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
