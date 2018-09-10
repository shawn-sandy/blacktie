   <template>
  <button
    class=""
    @click="handleClick">
    <!-- @slot Use this slot to place the button content -->
    <slot>Button</slot>
  </button>
</template>

<script>


export default {
  name: 'AppButton',

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
      this.$emit('click', e);
      this.$emit('gator', e);
    }
  }
};
</script>
<style lang="scss" scoped>
button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}

button:hover,
button:focus {
    background: #0053ba;
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
}
</style>
