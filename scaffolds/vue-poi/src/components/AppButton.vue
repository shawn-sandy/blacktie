<template>
  <button class="btn color btn-lg" @click="handleClick">
    <!-- @slot Use this slot to place the button content -->
    <slot>Button</slot>
  </button>
</template>

<script>
import sizeMixin from "./sizeMixin";

export default {
  name: "app-button",
  mixins: [sizeMixin],
  props: {
    /**
     * Sets the button font color
     */
    color: {
      type: String,
      default: "black"
    },
    /** Sets background color of the button
     * @since 1.2.0
     */
    background: {
      type: String,
      default: "white"
    },
    /** @deprecated Use color instead */
    oldColor: String
  },
  computed: {
    styles() {
      return {
        "font-size": this.size,
        color: this.color,
        background: this.background
      };
    }
  },
  methods: {
    /** Triggered when button is clicked
     * @event click
     * @type {Event}
     */

    /** Event for Alligator's example
     * @event gator
     * @type {Event}
     */
    handleClick(e) {
      this.$emit("click", e);
      this.$emit("gator", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.color {
 color: darken($color: black, $amount: 10%)
}
</style>
