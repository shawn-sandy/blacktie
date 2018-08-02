# BlackTie Scrollbar

A Vue JS component for simplebar

>SimpleBar is a plugin that tries to solve a long time problem : how to get custom scrollbars for your web-app? SimpleBar does NOT implement a custom scroll behaviour. It keeps the native overflow: auto scroll and only replace the scrollbar visual appearance.

## Install

```
yarn add blacktie-scrollbar
```

### Import into your vue app and export as component

```js
import BlacktieLoadingDots from "blacktie-scrollbar/src/components/Scrollbar.vue";

export default {
  name: "scrollbox",
  components: {
    BlacktieScrollbox
  }
};
```



### Add code to your HTML

```html
 <div id="loading">
   <blacktie-scrollbox></blacktie-scrollbox>
</div>
```

[__More info and options__](https://github.com/shawn-sandy/blacktie/blob/develop/packages/blacktie-scrollbar/Readme.md)



## Issues

[Please submit issues here](https://github.com/shawn-sandy/blacktie/issues)

## Security Vulnerabilities
If you discover a security vulnerability within Laravel, please send an e-mail to Shawn Sandy via shawnsandy04@gmail.com All security vulnerabilities will be promptly addressed.



## [Licence MIT](https://opensource.org/licenses/MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
