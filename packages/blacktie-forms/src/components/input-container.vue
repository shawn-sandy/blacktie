<template>
  <div class="input-container">
    <div
      ref="field-wrapper"
      class="input-elm-wrapper">
      <slot :errorNotify="errorNotify" :removeError="removePopper"/>
    </div>
    <slot name="error-elm">
      <transition name="fade">
        <div v-show="showErrors"
             ref="inErrors"
             class="validation-msg">
          {{ errorMsg }}
        </div>
      </transition>
    </slot>
  </div>
</template>


<script>
/**
 * BlackTie input container with baked pop-up error notifications powered by popper.js
 */
import containerMixin from './../mixins/input-container.js'
export default {
  name: 'InputContainer',
  mixins: [containerMixin]
}
</script>
<style lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.*/
.fade-enter-active {
  transition: opacity 0.5s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter {
  opacity: 0;
}
</style>
