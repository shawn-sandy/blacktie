### Usage

```jsx static
<template>
  <div id="app" class="flex-elm">
    <div class="container">
      <bt-scrollbar scrollbox-height="200px">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Tempore libero laborum similique quis praesentium minus
       facere enim hic alias, veritatis repudiandae ullam quisquam ipsum
        blanditiis laudantium dolorum mollitia totam ad itaque
        quos odio vel!
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
```

__Options (props)__

```jsx static
<template>
  <div id="app" class="flex-elm">
    <div class="container">
      <bt-scrollbar scrollbox-height="200px" auto-hide-bars="false"
       content-style="padding:20px" scrollbox-class="my-scroll-box">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Tempore libero laborum similique quis praesentium minus
       facere enim hic alias, veritatis repudiandae ullam quisquam ipsum
        blanditiis laudantium dolorum mollitia totam ad itaque
        quos odio vel!
      </bt-scrollbar>
    </div>
  </div>
</template>
```


__Change the color of the scrollbar track__

```html
<style>
   .simplebar-scrollbar:before {
    background: blue;
  }
</style>
