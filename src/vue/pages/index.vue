<template>
  <section class="content">
    <cover-img img-src="//source.unsplash.com/collection/1278495/1400x450" />
    <blacktie-loading-dots/>
    <div class="container section">
      <div class="title is-3">Index page</div>
      <!-- <blacktie-img /> -->
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum assumenda obcaecati et maxime nisi dolorem nulla, officia vel delectus dolor tenetur earum consectetur fuga veritatis nemo facilis maiores est?????
      </p>

    </div>
    <div class="container">
      <axios-element>
        <template slot-scope="{ content, loading }">
          {{ content.data[0] }}
        </template>
      </axios-element>
    </div>


  </section>
</template>

<style lang="scss">
@import '~blacktie-loading-dots/src/scss/dot-setting';
@import '~blacktie-loading-dots/src/scss/loading-dots';
</style>


<script>
import BlacktieLoadingDots from 'blacktie-loading-dots';
import CoverImg from 'blacktie-img/src/CoverImg.vue';
import AxiosElement from 'blacktie-clients/src/components/AxiosClient.vue'

export default {
  name: 'PageContent',
  components: {
    BlacktieLoadingDots,
    // BlacktieImg,
    AxiosElement,
    CoverImg
  }
};
</script>
