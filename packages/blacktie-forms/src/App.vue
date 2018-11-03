<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <form action="" @submit.prevent="">
      <input-elm >
        <template slot="default" slot-scope="{ onError }">
          <input-component v-model="email" @error-msg="onError" type="email" max-length="5" required error-message="Please enter a valid email address"/>
          <button formnovalidate>Submit</button>
        </template>
      </input-elm>

      <div/>
    </form>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputComponent from './components/input-elm.vue'
import InputElm from './components/input-container.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputComponent,
    InputElm
  },
  props: {},
  data() {
    return {
      errorMsg: null,
      email: null
    }
  },
  methods: {
    emailError(msg, type) {
      this.errorMsg = msg
      console.log('event error', msg)
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
    border: solid 1px red;
  }
  .error-msg {
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid lightgray;
    margin: 5px;
    border-radius: 5px;
  }
}
</style>
