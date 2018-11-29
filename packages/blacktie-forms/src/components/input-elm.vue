<template>
  <div>
    <slot>       
      <div>
        <label>{{ label }} huhu</label>
      </div>
    </slot>
    <input
      v-bind="$attrs"
      :value="value"
      :class="{'field-validation': isValid }"
      class="input-elm"
      type="text"
      v-on="listeners"
      @blur="validate($event)"
    >
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
