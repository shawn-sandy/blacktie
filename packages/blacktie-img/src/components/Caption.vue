<template>
  <figcaption class="blacktie-img-caption" :class=cssClasses>
    <!-- @slot add captions to images-->
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
    }
  }
}
</script>
