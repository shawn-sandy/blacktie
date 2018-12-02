<template>
  <div>
    <div
      :class="$style['checkbox-elm-wrapper']"
      :style="`height: ${elmSize}`">

      <input
        :id="name"
        v-bind="$attrs"
        :value="value"
        :class=" elmClass"
        :name="name"
        :aria-label="name"
        type="checkbox"
        v-on="listeners"
        @blur="validate($event)"
        @change="_setValue($event), validate($event)"
      >
      <!-- @slot default slot default label display - scope validationMessage, isValid, hasError -->
      <slot
        :validationMessage="validationMessage"
        :isValid="isValid"
        :hasError="hasError"
      >
        <label :for="name">{{ label }}</label>
      </slot>
    </div>
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
 * BlackTie Checkbox element with baked in HTML5 validation, light fast and easy to cutomize
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
      default: '15px'
    },

    /**
     * Set the checked value for checkbox - set on changes
     */
    checked: {
      type: [String, Number, Boolean],
      default: null
    },
    /**
     * Set the un-checked value for checkbox - set on mount
     */
    unChecked: {
      type: [String, Number, Boolean],
      default: null
    }
  },
  computed: {
    checkboxStyle() {
      return {}
    }
  },
  methods: {
    _setValue(e) {
      if (e.target.checked) {
        e.target.value = this.checked
      } else {
        e.target.value = this.unChecked
      }
      console.log('er', this.$el)
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
    display: none;
    cursor: crosshair;
    margin: 0 !important;
    padding: 0 !important;
  }
  label {
    display: inline-block;
    cursor: pointer;
    padding-left: 25px;
    margin-right: 15px;
  }
  label::before {
    content: '';
    display: inline-block;
    min-width: 15px;
    min-height: 15px;
    margin-right: 10px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 3px;
    box-sizing: border-box;
    border: 3px solid currentColor;
  }
  input[type='checkbox']:checked + label:before {
    text-align: center;
    // line-height: 15px;
    background-color: currentColor;
    // border: 4px solid currentColor;
  }
  input[required] + label:after {
    content: '*';
    color: red;
    font-weight: 700;
  }
  input[required] + label {
    font-weight: bold;
  }
}
</style>
