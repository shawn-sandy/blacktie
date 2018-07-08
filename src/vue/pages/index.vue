<template>
  <section class="content section">

    <div class="title is-3">Index page</div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum assumenda obcaecati et maxime nisi dolorem nulla, officia vel delectus dolor tenetur earum consectetur fuga veritatis nemo facilis maiores est?
    </p>
    <div id="loading">
    <blacktie-loading-dots></blacktie-loading-dots>
    </div>
  </section>

</template>

<script>
  import BlacktieLoadingDots from 'blacktie-loading-dots/src/components/Index.vue'

  export default {
    name: "loading",
    components: {
      BlacktieLoadingDots
    }
  }
</script>
