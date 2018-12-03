<template>
  <div>
    <!-- @slot lebel-elm : label display - scope validationMessage, isValid, hasError -->
    <slot
      :validationMessage="validationMessage"
      :isValid="isValid"
      :hasError="hasError"
      name="label-elm">
      <div>
        <label :for="name">{{ label }}</label>
      </div>
    </slot>
    <select
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
      <option
        v-if="placeholder"
        value="">
        {{ placeholder }}
      </option>
      <!-- @slot default slot allows you to add options -->
      <slot>
        <option value="two">two</option>
        <option value="one">one</option>
        <option value="three">three</option>
      </slot>
    </select>
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
  name: 'SelectElm',
  mixins: [_mixins],
  props: {
    /**
     * Default input class
     */
    elmClass: {
      type: String,
      default: 'select-elm'
    },
    placeholder: {
      type: String,
      default: null
    }
  }
}
</script>
