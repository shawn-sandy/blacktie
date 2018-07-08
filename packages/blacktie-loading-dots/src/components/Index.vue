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
/**
 * ==============================================
 * Dot Floating
 * ==============================================
 */

$d-max: 50px;
$d-min: 12px;

.dot-floating {
  position: relative;

  @include dot;

  animation: dotFloating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -$d-min;

    @include dot($bgColor: $dotBeforeColor);

    animation: dotFloatingBefore 3s infinite ease-in-out;
  }

  &::after {
    left: -$d-min * 2;

    @include dot($bgColor: $dotAfterColor);

    animation: dotFloatingAfter 3s infinite cubic-bezier(0.4, 0, 1, 1);
  }
}

@keyframes dotFloating {
  0% {
    left: calc(-50% - #{$dotWidth/2});
  }

  75% {
    left: calc(50% + #{$d-max * 2 + $dotWidth/2});
  }

  100% {
    left: calc(50% + #{$d-max * 2 + $dotWidth/2});
  }
}

@keyframes dotFloatingBefore {
  0% {
    left: -$d-max;
  }

  50% {
    left: -$d-min;
  }

  75% {
    left: -$d-max;
  }

  100% {
    left: -$d-max;
  }
}

@keyframes dotFloatingAfter {
  0% {
    left: -$d-max * 2;
  }

  50% {
    left: -$d-min * 2;
  }

  75% {
    left: -$d-max * 2;
  }

  100% {
    left: -$d-max * 2;
  }
}

/**
 * ==============================================
 * Dot Pulse
 * ==============================================
 */

$leftPos: -9999px;
$x1: -$leftPos - $dotSpacing;
$x2: -$leftPos;
$x3: -$leftPos + $dotSpacing;

.dot-pulse {
  position: relative;
  left: $leftPos;

  @include dot;

  box-shadow: $x1 0 0 0 $dotBeforeColor, $x2 0 0 0 $dotColor,
    $x3 0 0 0 $dotAfterColor;
  animation: dotPulse 1.5s infinite linear;
}

@keyframes dotPulse {
  0% {
    box-shadow: $x1 0 0 -5px $dotBeforeColor, $x2 0 0 0 $dotColor,
      $x3 0 0 2px $dotAfterColor;
  }

  25% {
    box-shadow: $x1 0 0 0 $dotBeforeColor, $x2 0 0 2px $dotColor,
      $x3 0 0 0 $dotAfterColor;
  }

  50% {
    box-shadow: $x1 0 0 2px $dotBeforeColor, $x2 0 0 0 $dotColor,
      $x3 0 0 -5px $dotAfterColor;
  }

  75% {
    box-shadow: $x1 0 0 0 $dotBeforeColor, $x2 0 0 -5px $dotColor,
      $x3 0 0 0 $dotAfterColor;
  }

  100% {
    box-shadow: $x1 0 0 -5px $dotBeforeColor, $x2 0 0 0 $dotColor,
      $x3 0 0 2px $dotAfterColor;
  }
}

/**
 * ==============================================
 * Dot Windmill
 * ==============================================
 */

$r: 15px;
$originX: 5px;
$originY: 5px + $r;

.dot-windmill {
  position: relative;
  top: -$r;

  @include dot;

  transform-origin: $originX $originY;
  animation: dotWindmill 2s infinite linear;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
  }

  &::before {
    left: -($r/2 * 1.732);
    top: $r + $r/2;

    @include dot($bgColor: $dotBeforeColor);
  }

  &::after {
    left: $r/2 * 1.732;
    top: $r + $r/2;

    @include dot($bgColor: $dotAfterColor);
  }
}

@keyframes dotWindmill {
  0% {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotateZ(720deg) translate3d(0, 0, 0);
  }
}
</style>
