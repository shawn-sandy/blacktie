### Usage

__Default Example__

```js

<BlacktieScrollbar/>

```

__Props Example Example__

Custom options
- Set the scrollbox-height: 300px
- Auto hide the scrollbars bars `auto-hide-bars: true`
- Add `30px` padding to the content in the scroll-box `content-style="padding:30px"`
- Define a custom class `scrollbox-class="my-scroll-box"`

```js

<BlacktieScrollbar scrollbox-height="300px" auto-hide-bars="true"
       content-style="padding:30px" scrollbox-class="my-scroll-box"/>

```

__Change the color of the scrollbar track__

```html
<style>
   .simplebar-scrollbar:before {
    background: blue;
  }
</style>
