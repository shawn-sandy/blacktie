<template>
  <div id="app" class="flex-elm">
    <div class="container">
      <bt-scrollbar>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore libero laborum similique quis praesentium minus facere enim hic alias, veritatis repudiandae ullam quisquam ipsum blanditiis laudantium dolorum mollitia totam ad itaque quos odio vel! Quis inventore dolor, voluptatum totam, accusantium corporis quaerat aspernatur quos odio delectus optio! Nisi quae reiciendis minima animi quibusdam soluta in dicta optio ipsa unde et consectetur, commodi, qui ipsam aliquam! Neque necessitatibus iusto impedit officia dicta eius, iure pariatur molestiae obcaecati ut, quibusdam facere beatae asperiores eos ipsam perspiciatis temporibus aperiam. Impedit non consequuntur voluptates consectetur quae libero rem, ut quam reprehenderit et. Labore, minima.
      </bt-scrollbar>
    </div>
    <div class="container">
      <bt-scrollbar scrollbox-height="200px">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore libero laborum similique quis praesentium minus facere enim hic alias, veritatis repudiandae ullam quisquam ipsum blanditiis laudantium dolorum mollitia totam ad itaque quos odio vel! Quis inventore dolor, voluptatum totam, accusantium corporis quaerat aspernatur quos odio delectus optio! Nisi quae reiciendis minima animi quibusdam soluta in dicta optio ipsa unde et consectetur, commodi, qui ipsam aliquam! Neque necessitatibus iusto impedit officia dicta eius, iure pariatur molestiae obcaecati ut, quibusdam facere beatae asperiores eos ipsam perspiciatis temporibus aperiam. Impedit non consequuntur voluptates consectetur quae libero rem, ut quam reprehenderit et. Labore, minima.
      </bt-scrollbar>
    </div>
  </div>
</template>

<script>
import BtScrollbar from './components/Scrollbar.vue'

export default {
  name: 'app',
  components: {
    BtScrollbar
  }
}
</script>

<style lang="scss">
@import '~blacktie-styles/app.scss';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

  .container {
   width: 300px;
   height: 350px;
   margin-left: auto;
   margin-right: auto;
   overflow: hidden;
   text-align: left;
  }
}
// @import './assets/variables.scss';
// @import './assets/style.scss';
</style>
