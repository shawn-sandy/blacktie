<template>
  <figure class="blacktie-img" :class=classes :style=inlineStyles>
    <img ref="img"
    :src=imgSrc :alt="imageAlt"
    :style=inlineStyles
    >
    <figcaption v-if="caption" class="blacktie-img-caption" :class=cssClasses>
      <!-- @slot add content for image caption -->
    <slot></slot>
    </figcaption>
  </figure>
</template>

<script>
/** Image component - resuable image component with captions and  */
export default {
  name: 'BlacktieImage',
  data: function () {
    return {
      displayImg: 'hide'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hide {
  display: none;
}
figure {
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;

  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

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
