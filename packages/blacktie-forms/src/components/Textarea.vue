<template>
  <div>
    <textarea
      v-bind="$attrs"
      :value="value"
      :class=" elmClass "
      :name="name"
      :aria-label="name"
      v-on="listeners"
      @blur="validate($event)"
    />
  </div>
</template>

<script>
/**
 * BlackTie input element with baked in HTML5 validation, light fast and easy to cutomize  (use if you don't need the  full textarea-elm labels and error display)
 */
import _mixins from './../mixins/index.js'
export default {
  name: 'Textarea',
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
<style lang="scss">
.textarea-elm {
  min-width: 300px;
  min-height: 150px;
}
</style>
