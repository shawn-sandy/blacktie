<template>
  <a href="#" class="button-elm">
    <!-- @slot Button label / content icons etc -->
    <slot>
    Click Here
    </slot>
  </a>
</template>

<script>
export default {
  name: 'UrlButtonElm'
}
</script>

<style lang="scss">
@import '../scss/style.scss';
</style>
