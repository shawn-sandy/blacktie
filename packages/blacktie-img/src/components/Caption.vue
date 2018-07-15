<template>
  <figcaption class="blacktie-img-caption" :class=cssClasses>
    <slot></slot>
  </figcaption>
</template>

<script>
export default {
  props: {
    cssClasses: {
      type: String,
      default: 'centered'
    }
  }
}
</script>
