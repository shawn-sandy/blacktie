<template>
  <div id="app">
    <form
      action=""
      @submit.prevent=""
    >
      <InputElm
        id="myfiels"
        v-model="email"
        label="Email Address"
        name="field-name1"
        type="email"
        placeholder="Enter your Em@il address"
        required
        error-message="Please enter a valid email address"
        @error-msg="alert"
      />

      <InputElm
        id="myfielsz-"
        v-model="numbers"
        name="field-name2"
        type="text"
        maxlength="5"
        error-message="This field is required"
        @error-msg="alert"
      />

      <SelectElm
        id="myfielsz-"
        v-model="select"
        name="field-name3"
        type="text"
        maxlength="5"
        required
        placeholder="Select one"
        error-message="This field is required"
        @error-msg="alert"
      />

      <CheckboxElm
        v-model="checkbox"
        name="checkbox"
        set-value="1"
        required
        label="Agree to terms and conditions"
        @error-msg="alert"
      />

      <CheckboxElm
        v-model="checkbox1"
        name="checkbox-1"
        set-value="1"
        required
        label="Agree to terms and conditions"
        @error-msg="alert"
      />

      <TextareaElm
        label="Add your comment"
        name="comment"
        required
        error-message="Please add a comment"
        minlength="20"
        placeholder="Please add your comment"
      />
      <button formnovalidate>
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import InputElm from './components/input-elm.vue'
import TextareaElm from './components/textarea-elm.vue'
import SelectElm from './components/select-elm.vue'
import CheckboxElm from './components/Checkbox.vue'

export default {
  name: 'App',
  components: {
    InputElm,
    TextareaElm,
    SelectElm,
    CheckboxElm
  },
  props: {},
  data() {
    return {
      errorMsg: null,
      email: null,
      numbers: 0,
      select: null,
      checkbox: null,
      checkbox1: null
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

  input,
  select {
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
  .field-success {
    border: solid 1px green;
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
  @import './styles/global';
}
</style>
