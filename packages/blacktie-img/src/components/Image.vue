<template>
  <figure class="blacktie-img" :style=inlineStyles>
    <transition name="fade">
      <template v-if="isInView">
        <img ref="img" :src="imgSrc" :alt="imageAlt">
        <figcaption v-if="caption" class="blacktie-img-caption">
          <!-- @slot add content for image caption -->
          <slot>
            <h1>
              {{ caption }}
            </h1>
          </slot>
        </figcaption>
      </template>
      <template v-else>
        <svg width="100%" height="300" viewBox="0 0 100% 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="300" rx="20" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="150" y1="0" x2="150" y2="300" gradientUnits="userSpaceOnUse">
              <stop stop-color="#C4C4C4" />
              <stop offset="1" stop-color="#D0D0D0" stop-opacity="0.57" />
            </linearGradient>
          </defs>
        </svg>
      </template>
    </transition>
  </figure>
</template>

<script>
import ViewPort from './../mixins'

/**
 * Image component - resuable image component with captions and
 */
export default {
  name: 'BlacktieImage',
  mixins: [ViewPort],
  data: function () {
    return {
      displayImg: 'hide',
      isImageLoading: true,
      inView: false
    }
  },
  props: {
    /**
     * Add classes to customise the style
     */
    classes: {
      type: String,
      default: 'has-text-centered centered'
    },
    /**
     * Image src file
     */
    imgSrc: {
      type: String,
      default: '//source.unsplash.com/collection/1278495/1300x400?='
    },
    /**
     * Add inline styles
     */
    inlineStyles: {
      type: String
    },
    /**
     * Image alt tag
     */
    imageAlt: {
      default: 'Cover Image'
    },
    /**
     * Add a caption to Image
     * via prop `caption="My cool image"`
     * via default image slot `<image>My cool image</image>`
     */
    caption: {
      default: null
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hide {
  display: none;
}
figure {
  overflow: hidden !important;
  position: relative;
  display: inline-block;
  margin: 0 !important;
  padding: 0 !important;
  transition: all 0.35s;
  box-sizing: border-box;
  transition: all 0.5s ease;

  img {
    transition: all 3s ease;
  }

  figcaption.blacktie-img-caption {
    color: azure;
    position: absolute;
    top: 0;
    bottom: 5px;
    left: 0;
    right: 0;
    padding: 20px;
    background-image: -webkit-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.7) 0%,
      transparent 100%
    );
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      transparent 100%
    );
    display: flex;
    flex-direction: column;
    font-style: normal;
  }

  .centered {
    justify-content: center;
    align-items: center;
  }

  .top {
    justify-content: flex-start;
  }

  .bottom {
    justify-content: flex-end;
  }

  .left {
    align-items: flex-start;
  }

  .right {
    align-items: flex-end;
  }

  img {
    height: auto;
    max-width: 100%;
  }
}
</style>
