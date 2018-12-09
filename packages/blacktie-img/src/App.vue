<template>
  <div id="app" class="text-center">
    <div class="section cover img">
      <cover-img img-src=""></cover-img>
    </div>
    <hr>
    <div class="text-center">
      <blacktie-img>
        <blacktie-img-caption classes="left">
          <h1 class="title is-1 has-text-white">Caption Text</h1>
        </blacktie-img-caption>
      </blacktie-img>
    </div>
  </div>
</template>

<script>
import BlacktieImg from './components/Image.vue'
import BlacktieImgCaption from './components/Caption.vue'
import CoverImg from './CoverImg'

export default {
  name: 'app',
  components: {
    BlacktieImg,
    BlacktieImgCaption,
    CoverImg
  }
}
</script>

<style lang="scss">
@import '~blacktie-styles/app.scss';

#app {
  min-height: 90vh;
}
</style>
