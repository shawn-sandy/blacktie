<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <form
      action=""
      @submit.prevent="">
      <input-elm
        id="myfiels"
        v-model="email"
        name="field-name"
        type="email"
        required
        error-message="Please enter a valid email address"
        @error-msg="alert"/>

      <hr>
      <input-elm
        id="myfielsz-"
        v-model="numbers"
        name="field-name"
        type="text"
        maxlength="5"
        required
        error-message="This field is required"
        @error-msg="alert"/>
      <button formnovalidate>Submit</button>
      <div/>
    </form>
  </div>
</template>

<script>
import InputElm from './components/input-elm.vue'

export default {
  name: 'App',
  components: {
    InputElm
  },
  props: {},
  data() {
    return {
      errorMsg: null,
      email: null,
      numbers: 0
    }
  },
  methods: {
    alert(el) {
      console.log('error', el)
      //el.classList.add('field-error')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  input {
    padding: 10px;
    margin: 10px;
    min-width: 30%;
  }
  p {
    font-size: 12px;
  }
  button {
    padding: 10px 20px;
  }
  .field-error {
    border: dotted 1px red;
  }
  .validation-msg {
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid lightgray;
    margin: 5px;
    border-radius: 5px;
    font-size: 12px;
    background-color: whitesmoke;
  }
}
</style>
