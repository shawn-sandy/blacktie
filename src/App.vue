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
    <validation-form @submit.prevent="">
      <div class="field">
        <div class="control">
          <input-component
            id="myfield"
            v-model="email"
            elm-class="input"
            label="Email Address"
            name="field-name"
            type="email"
            placeholder="Enter your Em@il address"
            required
            error-message="Please enter a valid email address"
            @error-msg="alert"/>
        </div>
      </div>

      <input-component
        id="myfielsz-"
        v-model="numbers"
        elm-class="input"
        name="field-name"
        type="text"
        label="Full Name"
        minlength="5"
        required
        error-message="Please enter your full name"
        @error-msg="alert"/>


      <p class="has-text-right">
        <button
          class="button"
          formnovalidate>
          Submit
        </button>
      </p>
      <!-- </input-elm> -->
      <div/>
    </validation-form>
  </div>
</template>

<script>
// import CoverImg from 'blacktie-img/src/components/CoverImg.vue'
import ButtonElement from 'blacktie-buttons-v2/src/components/ButtonElm.vue'
import UrlButton from 'blacktie-buttons-v2/src/components/UrlButtonElm.vue'
import InputComponent from 'blacktie-forms/src/components/input-elm.vue'
// import InputElm from 'blacktie-forms/src/components/input-container.vue'
import ValidationForm from 'blacktie-forms/src/components/FormElement.vue'
export default {
  name: 'App',
  components: {
    ButtonElement,
    UrlButton,
    InputComponent,
    ValidationForm,

    CoverImg: () => import('blacktie-img/src/components/CoverImg.vue')
  },
  methods: {
    alert() {
      return
    }
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
