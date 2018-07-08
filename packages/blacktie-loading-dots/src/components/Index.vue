<template>
  <div class="bt-component stage">
    <div :class="`dot-${loadingStyle}`"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingDots',
  props: {
    loadingStyle: {
      type: String,
      default: 'floating'
    }
  }
}
</script>

<style lang="scss" src="../scss/style.scss"></style>
