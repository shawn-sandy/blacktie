<template>
  <div>
    <page-component>
    <div class="missing">
      <div class="flex-box flex-centered text-center">
        <div class="wrapper">
          <p class="display-4 text-danger">
            404 Error! You broke it :(
          </p>
          <p class="text-danger">Just kidding, we will have someone look into this ASAP</p>
        </div>
      </div>
    </div>
    </page-component>
  </div>
</template>

<script>
import PageComponent from "sg-ui/src/pages/index.vue";
export default {
  components: {
    PageComponent
  }
};
</script>

<style>
.missing {
  height: 60vh !important;
}
</style>
