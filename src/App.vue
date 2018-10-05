<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App..."/> -->
    <p>
    <button-element display-confirmation>
      <template slot="confirmation">Please Confirm</template>
      <span>&#10094;</span>
      <span>Confirmation Button</span>
    </button-element>
    </p>
    <p>
    <url-button class="button-elm-lg elm-rounded" display-confirmation>
      <template slot="confirmation">Please Confirm</template>
      <span>&#10094;</span>
      <span>Confirmation Button</span>
    </url-button>
    </p>
  </div>
</template>

<script>
import CoverImg from 'blacktie-img/src/components/CoverImg.vue'
import ButtonElement from 'blacktie-buttons-v2/src/components/ButtonElm.vue'
import UrlButton from 'blacktie-buttons-v2/src/components/UrlButtonElm.vue'

export default {
  name: 'app',
  components: {
    CoverImg,
    ButtonElement,
    UrlButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
