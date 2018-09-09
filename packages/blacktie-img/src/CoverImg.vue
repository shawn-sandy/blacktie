<template>
  <div class="cover-img">
    <blacktie-img inline-styles="width:100%" :img-src=imgSrc>
        <blacktie-img-caption caption-title="Caption" :css-classes=contentPosition />
    </blacktie-img>
  </div>
</template>
<script>

import BlacktieImg from './components/Index.vue'
import BlacktieImgCaption from './components/Caption.vue'

export default {
  name: 'Cover',
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
