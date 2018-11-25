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
      <template slot-scope="{ errorNotify  }">

        <div class="field">
          <div class="control">
            <input-component
              type="email"
              max-length="5"
              required
              class="input"
              error-message="Please enter a valid email address"
              @error-msg="errorNotify"/>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input-component
              type="text"
              name="text"
              max-length="5"
              required
              class="input"
              error-message="Please enter text"
              @error-msg="errorNotify"/>
          </div>
        </div>
      </template>
      <p class="has-text-right">
        <button
          class="button"
          formnovalidate>
          Submit
        </button>
      </p>
      <div/>
    </validation-form>
  </div>
</template>

<script>
// import CoverImg from 'blacktie-img/src/components/CoverImg.vue'
import ButtonElement from 'blacktie-buttons-v2/src/components/ButtonElm.vue'
import UrlButton from 'blacktie-buttons-v2/src/components/UrlButtonElm.vue'
import InputComponent from 'blacktie-forms/src/components/input-elm.vue'
import InputElm from 'blacktie-forms/src/components/input-container.vue'
import ValidationForm from 'blacktie-forms/src/components/FormElement.vue'
export default {
  name: 'App',
  components: {
    ButtonElement,
    UrlButton,
    InputComponent,
    ValidationForm,
    InputElm,
    CoverImg: () => import('blacktie-img/src/components/CoverImg.vue')
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
  .validation-msg {
    z-index: 99;
    background-color: whitesmoke;
    padding: 5px;
    margin: 5px;
    border: solid 1px lightgray;
  }
}
</style>
