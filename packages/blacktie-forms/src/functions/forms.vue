<template>
  <form :name="formName" class="from-elm" :class="formName">
    <slot />
  </form>
</template>

<script>
import FormMixin from './../mixins/input-container.js'
export default {
  name: 'FormRenderer',
  mixins: FormMixin,
  props: {
    /**
     * Name of form
     */
    formName: {
      type: String,
      default: 'validation-form'
    }
  }
}
</script>
