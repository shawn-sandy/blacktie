<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App..."/> -->
    <div>
      <cover-img>
        <h1 class="title is-1 blacktie-smoke">Cover Title</h1>
      </cover-img>
    </div>
    <p>
      <button-element
        class="blacktie-primary-elm"
        display-confirmation >
        <template slot="confirmation">
          <span>&#10095;</span>
          Please Confirm
        </template>
        <span>&#10095;</span>devel
        <span>Confirmation Button</span>
      </button-element>
    </p>
    <p>
      <url-button
        href="//getblacktie.com"
        class="button-elm-lg elm-rounded"
        display-confirmation>
        <template slot="confirmation"><span>&#10095;</span>Please Confirm</template>
        <span>&#10095;</span>
        <span>Confirmation Button</span>
      </url-button>
    </p>
    <hr>
    <form
      @submit.prevent="">
      <input-elm class="field">
        <template slot-scope="{ errorNotify }">
          <div class="field">
            <div class="control">
              <input-component
                @error-msg="errorNotify"
                type="email"
                max-length="5"
                required
                class="input"
                error-message="Please enter a valid email address"/>
            </div>
          </div>
          <p class="has-text-right">
            <button
              class="button"
              formnovalidate>Submit</button>
          </p>
        </template>
      </input-elm>
      <div/>
    </form>
  </div>
</template>

<script>
import CoverImg from 'blacktie-img/src/components/CoverImg.vue'
import ButtonElement from 'blacktie-buttons-v2/src/components/ButtonElm.vue'
import UrlButton from 'blacktie-buttons-v2/src/components/UrlButtonElm.vue'
import InputComponent from 'blacktie-forms/src/components/input-elm.vue'
import InputElm from 'blacktie-forms/src/components/input-container.vue'
export default {
  name: 'App',
  components: {
    CoverImg,
    ButtonElement,
    UrlButton,
    InputComponent,
    InputElm
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
