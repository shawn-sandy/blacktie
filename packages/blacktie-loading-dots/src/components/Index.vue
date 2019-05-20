<template>
  <div class="bt stage">
    <div :class="`dot-${loadingStyle}`"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingDots',
  props: {
    /**
     * The name of the class selector
     */
    loadingStyle: {
      type: String,
      default: 'floating'
    }
  }
}
</script>
<style lang="scss">

</style>
