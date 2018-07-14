<template>
  <div id="app" class="flex-elm">
    <HelloWorld msg="Blacktie Img demo"/>
  </div>
</template>

<script>
import HelloWorld from './components/Index.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "~blacktie-styles/app.scss";

#app {

  height: 90vh;

}
</style>
