(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{551:function(t,e,n){},560:function(t,e,n){(function(e){t.exports=function inViewport(t,r,a){var c={container:e.document.body,offset:0,debounce:15,failsafe:150};void 0!==r&&"function"!=typeof r||(a=r,r={});var u=c.container=r.container||c.container,s=c.offset=r.offset||c.offset,l=c.debounce=r.debounce||c.debounce,f=c.failsafe=r.failsafe||c.failsafe;!0===f?f=150:!1===f&&(f=0);f>0&&f<l&&(f=l+50);for(var d=0;d<n.length;d++)if(n[d].container===u&&n[d]._debounce===l&&n[d]._failsafe===f)return n[d].isInViewport(t,s,a);return n[n.push(function createInViewport(t,n,r){var a=function createWatches(){var t=[];function indexOf(e){for(var n=t.length-1;n>=0;n--)if(t[n][0]===e)return n;return-1}function isWatched(t){return-1!==indexOf(t)}return{add:function add(e,n,i){isWatched(e)||t.push([e,n,i])},remove:function remove(e){var n=indexOf(e);-1!==n&&t.splice(n,1)},isWatched:isWatched,checkAll:function checkAll(e){return function(){for(var n=t.length-1;n>=0;n--)e.apply(this,t[n])}}}}(),c=t===e.document.body?e:t,u=function debounce(t,e,n){var i;return function(){var o=this,r=arguments,a=n&&!i;clearTimeout(i),i=setTimeout(function later(){i=null,n||t.apply(o,r)},e),a&&t.apply(o,r)}}(a.checkAll(function watchInViewport(t,e,n){isVisible(t,e)&&(a.remove(t),n(t))}),n);addEvent(c,"scroll",u),c===e&&addEvent(e,"resize",u);i&&function observeDOM(t,e,n){var i=new MutationObserver(function watch(t){!0===t.some(knownNodes)&&setTimeout(n,0)}),o=Array.prototype.filter,r=Array.prototype.concat;function knownNodes(e){var n=r.call([],Array.prototype.slice.call(e.addedNodes),e.target);return o.call(n,t.isWatched).length>0}i.observe(e,{childList:!0,subtree:!0,attributes:!0})}(a,t,u);r>0&&setInterval(u,r);function isVisible(n,i){if(!n)return!1;if(!o(e.document.documentElement,n)||!o(e.document.documentElement,t))return!1;if(!n.offsetWidth||!n.offsetHeight)return!1;var r=n.getBoundingClientRect(),a={};if(t===e.document.body)a={top:-i,left:-i,right:e.document.documentElement.clientWidth+i,bottom:e.document.documentElement.clientHeight+i};else{var c=t.getBoundingClientRect();a={top:c.top-i,left:c.left-i,right:c.right+i,bottom:c.bottom+i}}var u=r.right>=a.left&&r.left<=a.right&&r.bottom>=a.top&&r.top<=a.bottom;return u}return{container:t,isInViewport:function isInViewport(t,e,n){if(!n)return isVisible(t,e);var i=function createRemote(t,e,n){return{watch:function watch(){a.add(t,e,n)},dispose:function dispose(){a.remove(t)}}}(t,e,n);return i.watch(),i},_debounce:n,_failsafe:r}}(u,l,f))-1].isInViewport(t,s,a)};var n=[],i="function"==typeof e.MutationObserver;function addEvent(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}var o=function(){return!e.document||(e.document.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:e.document.documentElement.contains?function(t,e){return t!==e&&!!t.contains&&t.contains(e)}:function(t,e){for(;e=e.parentNode;)if(e===t)return!0;return!1})}}).call(this,n(14))},561:function(t,e,n){"use strict";var i=n(551);n.n(i).a},564:function(t,e,n){"use strict";n.r(e);var i=n(560),o=n.n(i),r={name:"BlacktieImage",mixins:[{data:function data(){return{inview:!0}},methods:{isInView:function isInView(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t?o()(t):o()(this.$el)}}}],data:function data(){return{displayImg:"hide",isImageLoading:!0,inView:!1}},props:{classes:{type:String,default:"has-text-centered centered"},imgSrc:{type:String,default:"//source.unsplash.com/collection/1278495/1300x400?="},inlineStyles:{type:String},imageAlt:{default:"Cover Image"},caption:{default:null}},mounted:function mounted(){}},a=(n(561),n(5)),c=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"blacktie-img",style:t.inlineStyles},[n("transition",{attrs:{name:"fade"}},[t.isInView?[n("img",{ref:"img",attrs:{src:t.imgSrc,alt:t.imageAlt}}),t.caption?n("figcaption",{staticClass:"blacktie-img-caption"},[t._t("default",[n("h1",[t._v("\n            "+t._s(t.caption)+"\n          ")])])],2):t._e()]:[n("svg",{attrs:{width:"100%",height:"300",viewBox:"0 0 100% 100%",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("rect",{attrs:{width:"100%",height:"300",rx:"20",fill:"url(#paint0_linear)"}}),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear",x1:"150",y1:"0",x2:"150",y2:"300",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#C4C4C4"}}),n("stop",{attrs:{offset:"1","stop-color":"#D0D0D0","stop-opacity":"0.57"}})],1)],1)])]],2)],1)},[],!1,null,null,null);c.options.__file="Image.vue";e.default=c.exports}}]);