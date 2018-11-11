<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <form action="" @submit.prevent="">
      <validate-field>
        <template slot-scope="{ errorNotify }">
          <input-elm v-model="email" @error-msg="errorNotify" type="email" max-length="5" required error-message="Please enter a valid email address"/>
          <button formnovalidate>Submit</button>
        </template>
      </validate-field>
      <div/>
    </form>
  </div>
</template>

<script>
import InputElm from './components/input-elm.vue'
import ValidateField from './components/input-container.vue'

export default {
  name: 'App',
  components: {
    ValidateField,
    InputElm
  },
  props: {},
  data() {
    return {
      errorMsg: null,
      email: null
    }
  },
  methods: {}
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
    border: solid 1px red;
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
