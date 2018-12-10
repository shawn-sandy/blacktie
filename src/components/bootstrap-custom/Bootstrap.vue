<template>
  <div
    class="container"
    :class="$style.vh90"
  >
    <main>
      <div class="container">
        <div class="">
          <div class="row">
            <div
              class="col-md-5 py-3 fs-show-xxl title oswald text-uppercase"
            >
              <a
                href="/"
                class="elm-color-primary"
              >
                BlackTie
              </a>
            </div>
            <div class="col-md-7">
              <p class="h3 py-4 oswald text-uppercase">
                A reusable collection of drop in UX/UI libraries, tools and patterns
              </p>
            </div>
          </div>
          <hr>
        </div>

        <div class="text-center section py-5">
          <a
            href="/guide"
            class="m-2 support-links btn elm-quarter btn-lg blacktie-primary-elm rounded oswald"
            target="_blank"
          >
            Read The Guide
          </a>

          <a
            href="https://github.com/shawn-sandy/blacktie"
            target="_blank"
            class="m-2 support-links btn elm-quarter btn-lg oswald is-outlined blacktie-primary-elm"
          >
            Contribute
          </a>
        </div>
      </div>
    </main>
    <div class="elm-bg-gray-dark-">
      <div class="section elm-color-whitesmoke-">
        <div
          class="text-center text-uppercase attributions col-xs-1 is-size-6"
        >
          <p>
            <a href="/">
              <img
                src="/images/blk-logo.png"
                alt=""
                srcset=""
              >
            </a>
          </p>


          <a
            href="./components.html"
            target="_blank"
            class="support-links btn is-rounded is-small"
          >
            Components
          </a>
          <a
            href="https://github.com/shawn-sandy/blacktie"
            target="_blank"
            class="support-links btn is-rounded is-small"
          >
            Github
          </a>

          <a
            href="/guide"
            class="support-links btn is-rounded is-small"
            target="_blank"
          >
            Documentation
          </a>


          <button class="btn is-rounded is-small">
            Beta
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.vh90 {
  min-height: 90vh !important;
}
@import '~bootstrap/scss/_functions.scss';
@import '~bootstrap/scss/_variables.scss';
@import '~bootstrap/scss/_mixins.scss';
// custom
@import '~bootstrap/scss/_reboot.scss';
@import '~bootstrap/scss/_type.scss';
@import '~bootstrap/scss/_grid.scss';
@import '~bootstrap/scss/_buttons.scss';
@import '~bootstrap/scss/_utilities.scss';
</style>
