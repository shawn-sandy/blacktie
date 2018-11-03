<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <form action="" @submit.prevent="">
      <input-component v-model="email" @error-msg="emailError" type="email" required>
    </input-component>
    <div v-if="errorMsg" class="error-msg">
      {{ errorMsg }} {{ email }}
    </div>
    <div>
    <button formnovalidate>Submit</button>
    </div>
    </form>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputComponent from './components/inputs.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    InputComponent
  },
  props: {},
  data() {
    return {
      errorMsg: null,
      email: null
    }
  },
  methods: {
    emailError(msg) {
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
}
</style>
