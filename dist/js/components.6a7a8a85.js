(function(t){function e(e){for(var r,o,l=e[0],s=e[1],u=e[2],c=0,f=[];c<l.length;c++)o=l[c],i[o]&&f.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);m&&m(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={components:0},i={components:0},a=[];function l(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0dd5f7d0":"d09ded01","chunk-7cc60aea":"04cc02ac"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-0dd5f7d0":1,"chunk-7cc60aea":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0dd5f7d0":"8abc16b8","chunk-7cc60aea":"addf02be"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var l=i[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var c=document.getElementsByTagName("style");for(a=0;a<c.length;a++){l=c[a],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){o[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=a);var u,c=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=l(t),u=function(e){f.onerror=f.onload=null,clearTimeout(m);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,c.appendChild(f)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var m=c;a.push([3,"chunk-vendors","chunk-common"]),n()})({2856:function(t,e,n){},3:function(t,e,n){t.exports=n("d8ba")},"3f13":function(t,e,n){"use strict";var r=n("8d5b"),o=n.n(r);o.a},"5a05":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("2856"),o=n.n(r);o.a},6154:function(t,e,n){"use strict";var r=n("5a05"),o=n.n(r);o.a},"8d5b":function(t,e,n){},a9ca:function(t,e,n){},b951:function(t,e,n){"use strict";var r=n("a9ca"),o=n.n(r);o.a},d8ba:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("a026"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("cover-img",[n("h1",{staticClass:"title is-1 blacktie-smoke"},[t._v("Cover Title")])])],1),n("p",[n("button-element",{staticClass:"blacktie-primary-elm",attrs:{"display-confirmation":""}},[n("template",{slot:"confirmation"},[n("span",[t._v("❯")]),t._v("\n        Please Confirm\n      ")]),n("span",[t._v("❯")]),n("span",[t._v("Confirmation Buttons")])],2)],1),n("p",[n("url-button",{staticClass:"button-elm-lg elm-rounded",attrs:{href:"//getblacktie.com","display-confirmation":""}},[n("template",{slot:"confirmation"},[n("span",[t._v("❯")]),t._v("Please Confirm")]),n("span",[t._v("❯")]),n("span",[t._v("Confirmation Button")])],2)],1),n("hr"),n("form",{on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input-component",{attrs:{id:"myfield","elm-class":"input",label:"Email Address",name:"field-name",type:"email",placeholder:"Enter your Em@il address",required:"","error-message":"Please enter a valid email address"},on:{"error-msg":t.alert},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),n("input-component",{attrs:{id:"myfielsz-","elm-class":"input",name:"field-name",type:"text",label:"Full Name",minlength:"5",required:"","error-message":"Please enter your full name"},on:{"error-msg":t.alert},model:{value:t.numbers,callback:function(e){t.numbers=e},expression:"numbers"}}),t._m(0),n("div")],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"has-text-right"},[n("button",{staticClass:"button",attrs:{formnovalidate:""}},[t._v("\n        Submit\n      ")])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button-elm",on:{click:function(e){t.confirmAction(e)}}},[t.confirmation?n("span",[t._t("confirmation",[t._v("Continue")])],2):n("span",[t._t("default",[t._v("Click Here")])],2)])},l=[],s=(n("c5f6"),{props:{timeout:{type:Number,default:3e3},displayConfirmation:{type:Boolean,default:!1},formID:{type:String,default:null}},data:function(){return{confirmation:!1,confirmationEnabled:!1,formControl:null}},mounted:function(){this.formControll=document.getElementById(this.fromID),this.confirmationEnabled=this.displayConfirmation},methods:{confirmAction:function(t){var e=this;this.confirmationEnabled?(this.confirmationEnabled=!1,this.confirmation=!0,t.preventDefault(),setTimeout(function(){e.confirmationEnabled=!0,e.confirmation=!1},this.timeout)):this.confirmationEnabled=!0}}}),u={name:"ButtonElm",mixins:[s],methods:{}},c=u,f=(n("3f13"),n("2877")),m=Object(f["a"])(c,a,l,!1,null,null,null);m.options.__file="ButtonElm.vue";var d=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button-elm",attrs:{href:"/"},on:{click:function(e){t.confirmAction(e)}}},[t.confirmation?n("span",[t._t("confirmation",[t._v("Continue")])],2):n("span",[t._t("default",[t._v("Click Here")])],2)])},v=[],h={name:"UrlButtonElm",mixins:[s]},b=h,g=(n("6154"),Object(f["a"])(b,p,v,!1,null,null,null));g.options.__file="UrlButtonElm.vue";var y=g.exports,_=n("5b99"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form-elm"},[t._t("default",null,{errorNotify:t.errorNotify})],2)},C=[],k=(n("ac6a"),{props:{errorPlacement:{type:String,default:"bottom-start"},wrapper:{default:".input-container"},validationMsg:{default:".validation-msg"}},data:function(){return{showErrors:!1,errorMsg:null,inputType:null,inputElm:null,targetName:null}},mounted:function(){var t=document.querySelectorAll("input, select, textarea");t.forEach(function(t){t.addEventListener("invalid",function(){t.classList.add("error")},!1)})},beforeDestroy:function(){},methods:{errorNotify:function(t){if(console.log("msg",t.validationMessage.trim()),console.log(t),!t.validationMessage.trim())return this.showErrors=!1,void(this.errorMsg="");this.errorMsg=t.validationMessage.trim(),this.inputType=t.type,this.showErrors=!0,this.$nextTick(function(){})}}}),x={name:"InputContainer",mixins:[k]},w=x,j=(n("b951"),Object(f["a"])(w,E,C,!1,null,null,null));j.options.__file="FormElement.vue";var B=j.exports,P={name:"App",components:{ButtonElement:d,UrlButton:y,InputComponent:_["a"],ValidationForm:B,CoverImg:function(){return n.e("chunk-0dd5f7d0").then(n.bind(null,"a2e0"))}},data:function(){return{email:null,numbers:null}},methods:{alert:function(){}}},T=P,O=(n("5c0b"),Object(f["a"])(T,o,i,!1,null,null,null));O.options.__file="App.vue";var A=O.exports;n("ddb8"),n("1112");r["a"].config.productionTip=!1,new r["a"]({el:"#app",components:{App:A}})}});
//# sourceMappingURL=components.6a7a8a85.js.map