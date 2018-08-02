<template>
  <div class="bt-simple-bar" :class=barClass data-simplebar data-simplebar-auto-hide="true">
    <div className="simplebar-scroll-content" style="">
      <div className="simplebar-content">
        <!-- @slot add content inside scrollbar -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollBar from 'simplebar'

export default {
  name: 'BlacktieScrollbar',
  props: {
    /**
     *
     */
    barClass: {
      type: String,
      default: 'bt-simple-bar-wrapper'
    }
  }
}
</script>

<style lang="scss">
@import "~simplebar/dist/simplebar.css";
</style>
