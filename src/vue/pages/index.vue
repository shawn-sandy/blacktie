<template>
  <section class="content">
    <cover-img img-src="//source.unsplash.com/collection/1278495/1400x450"/>
    <blacktie-loading-dots/>
    <div class="container section">
      <div class="title is-3">Index page</div>
      <!-- <blacktie-img /> -->
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum assumenda obcaecati et maxime nisi dolorem nulla, officia vel delectus dolor tenetur earum consectetur fuga veritatis nemo facilis maiores est?????
      </p>

    </div>

  </section>
</template>

<style lang="scss">
@import "~blacktie-loading-dots/src/scss/dot-setting";
@import "~blacktie-loading-dots/src/scss/loading-dots";
</style>


<script>
import BlacktieLoadingDots from "blacktie-loading-dots";
// import BlacktieImg from "blacktie-img";
// import ImgCaption from "blacktie-img/src/components/Caption.vue";
import CoverImg from "blacktie-img/src/CoverImg.vue";

export default {
  name: "PageContent",
  components: {
    BlacktieLoadingDots,
    // BlacktieImg,
    CoverImg
  }
};
</script>
