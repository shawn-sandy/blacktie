<template>
  <div class="cover-img">
    <blacktie-img inline-styles="width:100%">
      <slot>
        <blacktie-img-caption :css-classes=contentPosition>
          Caption Title
        </blacktie-img-caption>
      </slot>
    </blacktie-img>
  </div>
</template>

<script>
import BlacktieImg from "./components/Index";
import BlacktieImgCaption from "./components/Caption";
export default {
  components: {
    BlacktieImg,
    BlacktieImgCaption
  },
  props: {
    contentPosition: {
      type: String,
      default: "centered"
    }
  }
};
</script>

<style>
</style>
