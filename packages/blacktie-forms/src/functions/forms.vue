<template>
  <form :class="formName" :name="formName" class="from-elm" >
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
