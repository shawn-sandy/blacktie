<template>
  <div>
    <input
      v-bind="$attrs"
      :value="value"
      :class=" elmClass "
      :name="name"
      :aria-label="name"
      v-on="listeners"
      @blur="validate($event)"
    >

  </div>
</template>

<script>
/**
 * BlackTie custom input with baked in HTML5 validation, light fast and easy to cutomize  (use if you don't need the  full input-elm labels and error display)
 */

import _mixins from './../mixins/index.js'
export default {
  name: 'Input',
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
