<template>
  <div :class="$style['input-wrapper']">
    <!-- @slot default slot default label display - scope validationMessage, isValid, hasError -->
    <slot
      :validationMessage="validationMessage"
      :isValid="isValid"
      :hasError="hasError">
      <div>
        <label :for="name">{{ label }}</label>
      </div>
    </slot>
    <input
      ref="input-field"
      :id="name"
      v-bind="$attrs"
      :value="value"
      :class=" elmClass "
      :name="name"
      :aria-label="name"
      v-on="listeners"
      @blur="validate($event)"
    >
    <!-- @slot errors : Displays error messages - scope validationMessage, isValid, hasError -->
    <slot
      :validationMessage="validationMessage"
      :isValid="isValid"
      :hasError="hasError"
      name="errors">
      <div>
        <small>{{ validationMessage }}</small>
      </div>
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
  mixins: [_mixins],
  props: {
    /**
     * Default input class
     */
    elmClass: {
      type: String,
      default: 'input-elm'
    }
  }
}
</script>
<style lang="scss" module>
.input-wrapper {
  label.required::after {
    content: '*';
    color: red;
  }
}
</style>
