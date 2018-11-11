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
        <span>&#10095;</span>
        <span>Confirmation Buttons</span>
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
    <validation-form
      @submit.prevent="">
      <template slot-scope="{ errorNotify }">
        <input-elm class="field">
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
        </input-elm>
        <input-elm>
          <div class="field">
            <div class="control">
              <input-component
                @error-msg="errorNotify"
                type="email"
                max-length="5"
                required
                class="input"
                error-message="Please enter a valid email address..."/>
            </div>
          </div>
          <p class="has-text-right">
            <button
              class="button"
              formnovalidate>Submit</button>
          </p>
        </input-elm>
      </template>
      <div/>
    </validation-form>
  </div>
</template>

<script>
// import CoverImg from 'blacktie-img/src/components/CoverImg.vue'
import ButtonElement from 'blacktie-buttons-v2/src/components/ButtonElm.vue'
import UrlButton from 'blacktie-buttons-v2/src/components/UrlButtonElm.vue'
import InputComponent from 'blacktie-forms/src/components/input-elm.vue'
import ValidationForm from 'blacktie-forms/src/functions/forms.vue'
export default {
  name: 'App',
  components: {
    ButtonElement,
    UrlButton,
    InputComponent,
    ValidationForm,
    // ButtonElement: () =>
    //   import('blacktie-buttons-v2/src/components/ButtonElm.vue'),
    // UrlButton: () =>
    //   import('blacktie-buttons-v2/src/components/UrlButtonElm.vue'),
    // InputComponent: () => import('blacktie-forms/src/components/input-elm.vue'),
    CoverImg: () => import('blacktie-img/src/components/CoverImg.vue'),
    InputElm: () => import('blacktie-forms/src/components/input-container.vue')
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
