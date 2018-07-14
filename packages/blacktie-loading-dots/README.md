# BlackTie loading dots

Loading dots components built for Vue.js built with [Three dots](https://github.com/nzbin/three-dots)

> The project is a set of CSS loading animations created with three dots which made by just single element. I think the project can not only enhance your CSS skills but also improve your imagination.

## Install

```
yarn add blacktie-loading-dots
```

### Import into your vue app

```js
import BlacktieLoadingDots from "blacktie-loading-dots/src/components/Index.vue";

export default {
  name: "loading",
  components: {
    BlacktieLoadingDots
  }
};
```


### Add code to your HTML

```html
 <div id="loading">
   <blacktie-loading-dots></blacktie-loading-dots>
</div>
```

### Options to change loading style `floating (default), windmill, pulse, carousel`

```html
 <div id="loading">
   <blacktie-loading-dots loading-style="windmill"></blacktie-loading-dots>
</div>
```

## Issues

[Please submit issues here](https://github.com/shawn-sandy/blacktie/issues)

## Security Vulnerabilities
If you discover a security vulnerability within Laravel, please send an e-mail to Shawn Sandy via shawnsandy04@gmail.com All security vulnerabilities will be promptly addressed.



## [Licence MIT](https://opensource.org/licenses/MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
