<template>
  <figure class="blacktie-img" :class=classes :style=inlineStyles>
    <img ref="img" :src=imgSrc alt="" :style=inlineStyles :onLoad="imgLoaded()">
    <slot></slot>
  </figure>
</template>

<script>
export default {
  name: 'Index',
  data: function () {
    return {
      loading: false,
      displayImg: 'hide'
    }
  },
  props: {
    classes: {
      type: String,
      default: 'has-text-centered centered'
    },
    imgSrc: {
      type: String,
      default: '//source.unsplash.com/collection/1278495/1300x400?='
    },
    inlineStyles: {
      type: String
    }
  },
  methods: {
    imgLoaded: function (event) {
      this.loading = true
      setTimeout(function () {
        this.loading = true
        console.log('loaded', this.loading)
      }, 5000)
    }
  },
  mounted: function () {
    alert('loaded')
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
