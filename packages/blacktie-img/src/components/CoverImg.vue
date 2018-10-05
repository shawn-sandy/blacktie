<template>
  <div class="cover-img" :class="{ hidden: loading }">
    <elm-img inline-styles="width:100%">
      <blacktie-img-caption>
        <!--  -->
        <slot>
          <h1>
            Cover Caption
          </h1>
        </slot>
      </blacktie-img-caption>
    </elm-img>
  </div>
</template>
<script>
import ElmImg from './Index.vue'
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
      default: 2000
    }
  },
  data () {
    return {
      loading: true
    }
  },
  created: function () {
    // this.loading = false
    setTimeout(() => {
      this.loading = false
    }, this.timeout)
  }
}
</script>
<style lang="scss">
@import '../assets/style.scss'
</style>
