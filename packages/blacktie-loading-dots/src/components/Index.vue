<template>
  <div class="bt-component stage">
    <div :class="`dot-${loadingStyle}`"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingDots",
  props: {
    loadingStyle: {
      type: String,
      default: "floating"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~three-dots/sass/mixins";
@import "~three-dots/sass/variables";

$dotWidth: 10px;
$dotHeight: 10px;
$dotRadius: $dotWidth/2;

$dotColor: #151516;
$dotBgColor: $dotColor;
$dotBeforeColor: $dotColor;
$dotAfterColor: $dotColor;

$dotSpacing: $dotWidth + $dotWidth/2;

.stage {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  margin: 0 -5%;
  overflow: hidden;
}

@import "~three-dots/sass/dot-floating";
@import "~three-dots/sass/dot-pulse";
@import "~three-dots/sass/dot-windmill";

</style>
