<template>
  <div class="cover-img" :class="{ active: loading }">
    <blacktie-img inline-styles="width:100%">
      <blacktie-img-caption>
        <slot></slot>
      </blacktie-img-caption>
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
  props: {
    contentPosition: {
      type: String,
      default: 'centered'
    }
    // loading: true
  },
  data () {
    return {
      loading: true
    }
  },
  created () {
    // this.loading = false
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>
<style lang="scss">
.active {
  display: none;
}
</style>
