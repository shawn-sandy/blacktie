(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cc60aea"],{4643:function(t,e,n){"use strict";var i=n("9e72"),o=n.n(i);o.a},7609:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"blacktie-img",style:t.inlineStyles},[n("transition",{attrs:{name:"fade"}},[t.isInView?[n("img",{ref:"img",attrs:{src:t.imgSrc,alt:t.imageAlt}}),t.caption?n("figcaption",{staticClass:"blacktie-img-caption"},[t._t("default",[n("h1",[t._v("\n            "+t._s(t.caption)+"\n          ")])])],2):t._e()]:[n("svg",{attrs:{width:"100%",height:"300",viewBox:"0 0 100% 100%",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("rect",{attrs:{width:"100%",height:"300",rx:"20",fill:"url(#paint0_linear)"}}),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear",x1:"150",y1:"0",x2:"150",y2:"300",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#C4C4C4"}}),n("stop",{attrs:{offset:"1","stop-color":"#D0D0D0","stop-opacity":"0.57"}})],1)],1)])]],2)],1)},o=[],r=n("b0ad"),a=n.n(r),c={data:function(){return{inview:!0}},methods:{isInView:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t?a()(t):a()(this.$el)}}},u={name:"BlacktieImage",mixins:[c],data:function(){return{displayImg:"hide",isImageLoading:!0,inView:!1}},props:{classes:{type:String,default:"has-text-centered centered"},imgSrc:{type:String,default:"//source.unsplash.com/collection/1278495/1300x400?="},inlineStyles:{type:String},imageAlt:{default:"Cover Image"},caption:{default:null}},mounted:function(){}},s=u,l=(n("4643"),n("2877")),f=Object(l["a"])(s,i,o,!1,null,null,null);f.options.__file="Image.vue";e["default"]=f.exports},"9e72":function(t,e,n){},b0ad:function(t,e,n){(function(e){t.exports=o;var n=[],i="function"===typeof e.MutationObserver;function o(t,i,o){var r={container:e.document.body,offset:0,debounce:15,failsafe:150};void 0!==i&&"function"!==typeof i||(o=i,i={});var a=r.container=i.container||r.container,c=r.offset=i.offset||r.offset,s=r.debounce=i.debounce||r.debounce,l=r.failsafe=i.failsafe||r.failsafe;!0===l?l=150:!1===l&&(l=0),l>0&&l<s&&(l=s+50);for(var f=0;f<n.length;f++)if(n[f].container===a&&n[f]._debounce===s&&n[f]._failsafe===l)return n[f].isInViewport(t,c,o);return n[n.push(u(a,s,l))-1].isInViewport(t,c,o)}function r(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function a(t,e,n){var i;return function(){var o=this,r=arguments,a=n&&!i;function c(){i=null,n||t.apply(o,r)}clearTimeout(i),i=setTimeout(c,e),a&&t.apply(o,r)}}var c=function(){return!e.document||(e.document.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:e.document.documentElement.contains?function(t,e){return t!==e&&!!t.contains&&t.contains(e)}:function(t,e){while(e=e.parentNode)if(e===t)return!0;return!1})};function u(t,n,o){var u=s(),f=t===e.document.body?e:t,d=a(u.checkAll(h),n);function m(t,e,n){if(!n)return g(t,e);var i=p(t,e,n);return i.watch(),i}function p(t,e,n){function i(){u.add(t,e,n)}function o(){u.remove(t)}return{watch:i,dispose:o}}function h(t,e,n){g(t,e)&&(u.remove(t),n(t))}function g(n,i){if(!n)return!1;if(!c(e.document.documentElement,n)||!c(e.document.documentElement,t))return!1;if(!n.offsetWidth||!n.offsetHeight)return!1;var o=n.getBoundingClientRect(),r={};if(t===e.document.body)r={top:-i,left:-i,right:e.document.documentElement.clientWidth+i,bottom:e.document.documentElement.clientHeight+i};else{var a=t.getBoundingClientRect();r={top:a.top-i,left:a.left-i,right:a.right+i,bottom:a.bottom+i}}var u=o.right>=r.left&&o.left<=r.right&&o.bottom>=r.top&&o.top<=r.bottom;return u}return r(f,"scroll",d),f===e&&r(e,"resize",d),i&&l(u,t,d),o>0&&setInterval(d,o),{container:t,isInViewport:m,_debounce:n,_failsafe:o}}function s(){var t=[];function e(e,n,i){o(e)||t.push([e,n,i])}function n(e){var n=i(e);-1!==n&&t.splice(n,1)}function i(e){for(var n=t.length-1;n>=0;n--)if(t[n][0]===e)return n;return-1}function o(t){return-1!==i(t)}function r(e){return function(){for(var n=t.length-1;n>=0;n--)e.apply(this,t[n])}}return{add:e,remove:n,isWatched:o,checkAll:r}}function l(t,e,n){var i=new MutationObserver(a),o=Array.prototype.filter,r=Array.prototype.concat;function a(t){!0===t.some(c)&&setTimeout(n,0)}function c(e){var n=r.call([],Array.prototype.slice.call(e.addedNodes),e.target);return o.call(n,t.isWatched).length>0}i.observe(e,{childList:!0,subtree:!0,attributes:!0})}}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-7cc60aea.04cc02ac.js.map