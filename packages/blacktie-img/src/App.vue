<template>
  <div id="app" class="flex-elm">
    <blacktie-img>
      <blacktie-img-caption classes="left">
        <h1 class="title is-1 has-text-white">Caption Text</h1>
      </blacktie-img-caption>
    </blacktie-img>
  </div>
</template>

<script>
import BlacktieImg from './components/Index.vue'
import BlacktieImgCaption from './components/Caption.vue'

export default {
  name: 'app',
  components: {
    BlacktieImg,
    BlacktieImgCaption
  }
}
</script>

<style lang="scss">
@import "~blacktie-styles/app.scss";

#app {

  height: 90vh;

}
</style>
