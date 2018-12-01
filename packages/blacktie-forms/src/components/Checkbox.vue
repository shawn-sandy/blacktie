<template>
  <div>
    <div
      :class="$style['checkbox-elm-wrapper']"
      :style="`height: ${elmSize}`">
      <!-- @slot default slot default label display - scope validationMessage, isValid, hasError -->
      <input
        v-bind="$attrs"
        :value="value"
        :class=" elmClass"
        :style="`height: ${elmSize}; width: ${elmSize}`"
        :name="name"
        :aria-label="name"
        type="checkbox"
        v-on="listeners"
        @blur="validate($event)"
      >
      <label :labelFor="name">{{ label }}</label>
    </div>
  </div>
</template>

<script>
/**
 * BlackTie input element with baked in HTML5 validation, light fast and easy to cutomize
 */
import _mixins from './../mixins/index.js'
export default {
  name: 'Checkbox',
  mixins: [_mixins],
  props: {
    /**
     * Default input class
     */
    elmClass: {
      type: String,
      default: 'checkbox-elm'
    },
    elmSize: {
      type: String,
      default: '20px'
    }
  },
  computed: {
    checkboxStyle() {
      return {}
    }
  }
}
</script>
<style lang="scss" module>
.checkbox-elm-wrapper {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  input[type='checkbox'] {
    opacity: 0;
    height: 20px;
    width: 20px;
  }
  label::before {
    content: '';
    border: 1px solid;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
