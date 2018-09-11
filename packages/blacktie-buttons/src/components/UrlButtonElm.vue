<template>
  <a :href="url" class="button-elm">
    <!-- @slot Button label / content icons etc -->
    <slot>
    Click Here
    </slot>
  </a>
</template>

<script>
export default {
  name: "UrlButtonElm",
  inheritAttrs: false,
  props: {
    /**
     * Url for button
     */
    url: {
      default: "#"
    }
  }


}
</script>

<style lang="scss">
@import "../scss/style.scss";
</style>
