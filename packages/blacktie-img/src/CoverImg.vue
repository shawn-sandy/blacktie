<template>
  <div class="cover-img">
    <blacktie-img inline-styles="width:100%" :img-src=imgSrc>

        <blacktie-img-caption :css-classes=contentPosition>
         <slot> <h1 class="title is-1 has-text-white">Caption Text</h1></slot>
        </blacktie-img-caption>

    </blacktie-img>
  </div>
</template>
<script>

import BlacktieImg from './components/Index.vue'
import BlacktieImgCaption from './components/Caption.vue'

export default {
  components: {
    BlacktieImg,
    BlacktieImgCaption
  },
  extends: BlacktieImg,
  props: {
    contentPosition: {
      type: String,
      default: 'centered'
    }
  }
}
</script>
