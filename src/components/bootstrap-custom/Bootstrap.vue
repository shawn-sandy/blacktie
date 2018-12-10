<template>
  <div class="bs-lite">
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
              <p class="h3 py-5 oswald text-uppercase">
                A reusable collection of drop in UX/UI libraries, tools and patterns
              </p>
            </div>
          </div>
          <hr>
        </div>

        <main class="py-4 lead">
          <p class="h1 oswald text-uppercase py-2">
            Bootstrap-Lite
          </p>
          <p class="">
            Bootstrap is one of the most popular CSS frameworks around, allowing users to quickly layout websites and apps with very minimal effort. Unfortunately most of the sites built with bootstrap only use a fraction of CSS classes and utilities provided leading to un-optimized files in production.
          </p>
          <p>
            BootstrapLite is a barebones version of bootstrap that gives designer and developers a bit more control of what parts of bootstrap apps require and when. Reducing the bolat and boilerplate and allowing for customization and flexibility.
          </p>

          <p class="small py-4 ml-5">
            <pre>
              <code>
@import '~bootstrap/scss/_functions.scss';
@import '~bootstrap/scss/_variables.scss';
@import '~bootstrap/scss/_mixins.scss';
// custom
@import '~bootstrap/scss/_reboot.scss';
@import '~bootstrap/scss/_grid.scss';

              </code>
            </pre>
          </p><hr>
          <p />
        </main>

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
            class="m-2 support-links btn elm-quarter btn-lg oswald btn-outline-dark"
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

<style lang="scss">
@import './bootstrap-lite.scss';
@import '~bootstrap/scss/_type.scss';
@import '~bootstrap/scss/_buttons.scss';
@import '~bootstrap/scss/_code.scss';

.bs-lite {
  min-height: 90vh;
}
</style>
