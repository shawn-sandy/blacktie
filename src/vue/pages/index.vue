<template>
  <section class="content">
    <cover-img img-src="//source.unsplash.com/collection/1278495/1400x450">
      <h1 class="title is-1 has-text-white">BlackTie Cover Image</h1>
    </cover-img>
    <blacktie-loading-dots></blacktie-loading-dots>
    <div class="container section">
      <div class="title is-3">Index page</div>
      <blacktie-img>
        <blacktie-img-caption>
          <h1 class="title is-1 has-text-white">BlackTie</h1>
        </blacktie-img-caption>
      </blacktie-img>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum assumenda obcaecati et maxime nisi dolorem nulla, officia vel delectus dolor tenetur earum consectetur fuga veritatis nemo facilis maiores est?
      </p>
    </div>
    <div id="loading">
    </div>
  </section>
</template>

<style lang="scss">
@import "~blacktie-loading-dots/src/scss/dot-setting";
@import "~blacktie-loading-dots/src/scss/loading-dots";
</style>


<script>
import BlacktieLoadingDots from "blacktie-loading-dots";
import BlacktieImg from "blacktie-img";
import BlacktieImgCaption from "blacktie-img/src/components/Caption.vue";
import CoverImg from "blacktie-img/src/CoverImg.vue";

export default {
  name: "content",
  components: {
    BlacktieLoadingDots,
    BlacktieImg,
    BlacktieImgCaption,
    CoverImg
  }
};
</script>
