<template>
  <div ref="scrollbox" class="bt-scrollbox" :class=scrollboxClass data-simplebar :style="`height: ${scrollboxHeight}`">
    <div className="simplebar-scroll-content">
      <div className="simplebar-content" :style=contentStyle>
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
     * Add a custom class name to the scrollbox wrapper wrapper
     */
    scrollboxClass: {
      type: String
    },
    /**
     * Set the height of the scrollbox
     */
    scrollboxHeight: {
      type: String,
      default: '300px'
    },
    /**
     * Auto hide scrollbars
     */
    autoHideBars: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the style on the content in the scroll box
     */
    contentStyle: {
      type: String,
      default: 'padding: 10px'
    }

  },
  mounted: function () {
    new ScrollBar(this.$refs.scrollbox, {
      autoHide: this.autoHideBars
    })
  }
}
</script>

<style lang="scss">
@import "~simplebar/dist/simplebar.css";
</style>
