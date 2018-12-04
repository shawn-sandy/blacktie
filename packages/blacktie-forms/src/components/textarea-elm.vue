<template>
  <div :class="$style['textarea-wrapper']">
    <!-- @slot default slot default label display - scope validationMessage, isValid, hasError -->
    <slot
      :validationMessage="validationMessage"
      :isValid="isValid"
      :hasError="hasError">
      <div>
        <label :for="name">{{ label }}</label>
      </div>
    </slot>
    <textarea
      ref="input-field"
      :id="name"
      v-bind="$attrs"
      :value="value"
      :class="elmClass"
      :name="name"
      :aria-label="name"
      v-on="listeners"
      @blur="validate($event)"
    />
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
  name: 'TextareaElm',
  mixins: [_mixins],
  props: {
    /**
     * Default input class
     */
    elmClass: {
      type: String,
      default: 'textarea-elm'
    }
  }
}
</script>
<style lang="scss" module>
.textarea-wrapper {
  .textarea-elm {
    min-width: 300px;
    min-height: 150px;
  }
}
</style>
