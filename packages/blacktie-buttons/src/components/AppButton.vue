<template>
  <button class="">
    <!-- @slot Use this slot to place the button content -->
    <slot>Button</slot>
  </button>
</template>

<script>
/**
 *  Custom button element (WIP)
 */
export default {
  name: 'AppButton',
  inheritAttrs: false,
  props: {
    /**
     * Sets the button font color
     */
    color: {
      type: String,
      default: 'black'
    },
    /** Sets background color of the button
     * @since 1.2.0
     */
    background: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    styles() {
      return {
        'font-size': this.size,
        color: this.color,
        background: this.background
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import 'sass-rem';
button, .button-elm {
  display: inline-block;
  border: none;
  padding: rem(14px 28px);
  margin: 0;
  text-decoration: none;
  background: gray;
  color: #ffffff;
  font-size: rem(14px);
  font-style: normal;
  font-weight: 200;
  letter-spacing: rem(.5px);
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: rem(2px);
}

button:hover,
button:focus,
.button-elm:hover,
.button-elm:focus
 {
  background: darken($color: gray, $amount: 10);
  transform: scale(0.99);
}

button:focus,
.button-elm:focus
 {
    outline: none;
    background: darken($color: gray, $amount: 12);
}


button:active,
.button-elm:active
 {
  transform: scale(0.98);
}

button.rounded, .button-elm.rounded {

  border-radius: rem(100px);

}

button.button-lg, .button-elm.button-lg {
  font-size: rem(24px);
   padding: rem(14px 48px);
}
</style>
