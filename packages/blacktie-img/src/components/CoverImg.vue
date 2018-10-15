<template>
  <transition name="fade">
    <div class="cover-img" v-show="loading">
      <elm-img inline-styles="width:100%">
      </elm-img>
    </div>
  </transition>
</template>
<script>
import ElmImg from './Image.vue'
import BlacktieImgCaption from './Caption.vue'
/**
 * The CoverImg component display and image with a custom overlay overlay greate for landing pages etc
 */
export default {
  name: 'CoverImage',
  components: {
    ElmImg,
    BlacktieImgCaption
  },
  props: {
    contentPosition: {
      type: String,
      default: 'centered'
    },
    timeout: {
      default: 1000
    }
  },
  data () {
    return {
      loading: false
    }
  },
  created: function () {
    this.timer()
  },
  methods: {
    timer () {
      // this.loading = false
      setTimeout(() => {
        this.loading = true
      }, this.timeout)
    }
  }
}
</script>
<style lang="scss">
@import '../assets/style.scss';
</style>
