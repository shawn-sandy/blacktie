<template>
  <div class="hello">
    <h1 class="title is-3">{{ msg }}</h1>
    <div class="stage">
      <div class="dot-floating"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'LoadingDots',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@charset "UTF-8";
/**
 *
 * three-dots.css v0.1.0
 *
 * https://nzbin.github.io/three-dots/
 *
 * Copyright (c) 2018 nzbin
 *
 * Released under the MIT license
 *
 */
/**
 * ==============================================
 * Dot Elastic
 * ==============================================
 */
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
.dot-floating {
  position: relative;
  width:$dotWidth;
  height: $dotHeight;
  border-radius: $dotRadius;
  background-color: $dotColor;
  color: $dotColor;
  animation: dotFloating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);
}

.dot-floating::before, .dot-floating::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}

.dot-floating::before {
  left: -12px;
   width:$dotWidth;
  height: $dotHeight;
  border-radius: $dotRadius;
  background-color: $dotColor;
  color: $dotColor;
  animation: dotFloatingBefore 3s infinite ease-in-out;
}

.dot-floating::after {
  left: -24px;
   width:$dotWidth;
  height: $dotHeight;
  border-radius: $dotRadius;
  background-color: $dotColor;
  color: $dotColor;
  animation: dotFloatingAfter 3s infinite cubic-bezier(0.4, 0, 1, 1);
}

@keyframes dotFloating {
  0% {
    left: calc(-50% - 5px);
  }
  75% {
    left: calc(50% + 105px);
  }
  100% {
    left: calc(50% + 105px);
  }
}

@keyframes dotFloatingBefore {
  0% {
    left: -50px;
  }
  50% {
    left: -12px;
  }
  75% {
    left: -50px;
  }
  100% {
    left: -50px;
  }
}

@keyframes dotFloatingAfter {
  0% {
    left: -100px;
  }
  50% {
    left: -24px;
  }
  75% {
    left: -100px;
  }
  100% {
    left: -100px;
  }
}
</style>
