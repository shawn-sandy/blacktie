<template>
  <div class="input-container">
    <label
      :lableClass="labelClass"
      for="labelFor(label)" />
    <slot />
  </div>
</template>

<script>
/**
 * BlackTie input container with baked pop-up error notifications powered by popper.js
 */

export default {
  name: 'InputContainer',
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    labelClass: {
      type: String,
      default: 'label'
    }
  },
  computed: {
    lableFor(name) {
      if (!name) return
      return name.replace(' ', '_').toLowerCase
    }
  }
}
</script>
<style lang="scss">
</style>
