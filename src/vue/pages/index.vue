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

    <axios-service>

      <template slot-scope="{ response, loading }">
        <div
          v-if="loading"
          class="container"><h1>Loading</h1></div>
        <div
          v-else
          class="container section">
          <ul>
            <li>Login: {{ response.data.login }}</li>
            <li>Avatar Url: {{ response.data.avatar_url }}</li>
            <li>Url: {{ response.data.url }}</li>
            <li>Repos: {{ response.data.public_repos }}</li>
          </ul>
          <pre>
            <code>
              {{ response.data }}
            </code>
          </pre>
        </div>
      </template>
    </axios-service>



  </section>
</template>

<style lang="scss">
@import '~blacktie-loading-dots/src/scss/dot-setting';
@import '~blacktie-loading-dots/src/scss/loading-dots';
</style>


<script>
const BlacktieLoadingDots = () => require('blacktie-loading-dots');
import CoverImg from 'blacktie-img/src/CoverImg.vue';
import AxiosService from 'blacktie-services/src/components/AxiosService.vue'


export default {
  name: 'PageContent',
  components: {
    BlacktieLoadingDots,
    // BlacktieImg,
    AxiosService,
    CoverImg
  }
};
</script>
