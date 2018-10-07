<template>
  <figcaption class="blacktie-img-caption" :class=cssClasses>
    <slot></slot>
  </figcaption>
</template>

<script>
export default {
  name: 'Caption',
  props: {
    cssClasses: {
      type: String,
      default: 'centered'
    },
    captionTitle: {
      type: String
    },
    captionContent: {
      type: String
    }
  }
}
</script>
