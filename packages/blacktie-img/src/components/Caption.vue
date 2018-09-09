<template>
  <figcaption class="blacktie-img-caption" :class=cssClasses>
    <p>{{ captionTitle }}</p>
    <p>{{ captionContent }}</p>
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
