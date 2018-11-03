<template>
  <div class="input-container">
    <div class="input-elm-wrapper" ref="inWrapper" >
      <slot name="default" :onError="onError"/>
    </div>
    <slot name="error-elm">
      <transition name="slide-fade">
        <div ref="inErrors" v-show="showErrors" class="error-msg">
          {{ errorMsg }}
        </div>
      </transition>
    </slot>
  </div>
</template>

<script>
import containerMixin from './../mixins/input-container.js'
export default {
  name: 'InputContainer',
  mixins: [containerMixin]
}
</script>
<style lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
