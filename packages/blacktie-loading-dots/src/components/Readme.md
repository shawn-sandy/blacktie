
Really cool animated loading dots for use in your Vue.js apps, powered by *([Three dots](https://github.com/nzbin/three-dots/?target=_blank) external)* a dot animation library.

### Usage guide

__Install__

  ```bash
  yarn add blacktie-loading-dots
  ```

__Import the component__

```jsx static

import BlacktieLoadingDots from "blacktie-loading-dots/src/components/Index.vue";

export default {
  name: "loading",
  components: {
    BlacktieLoadingDots
  }
};
```

__Add to your html page__

- Load the default component `floating-dots`

```jsx static
  <BlacktieLoadingDots/>
```

- Load Pulsing dots

```jsx static
  <BlacktieLoadingDots loading-style="pluse"/>
```

- Load spinning windmill dots

```jsx static
  <LoadingDots loading-style="windmill"/>
```

- Load Carousel dots

```jsx static
  <LoadingDots loading-style="carousel"/>
```

__HTML Syntax__

```html
<div class="dot-floating"></div>
```
