/*! Built with http://stenciljs.com */
App.loadBundle("card-elm",["exports"],function(e){var t=window.App.h,n=(window.App.Context,function(){function e(){this.className="elm-borderless"}return e.prototype.componentWillLoad=function(){},e.prototype.componentDidLoad=function(){},e.prototype.componentWillUpdate=function(){},e.prototype.componentDidUpdate=function(){},e.prototype.componentDidUnload=function(){},e.prototype.render=function(){return t("div",{class:"card-elm "+this.className},t("slot",{name:"card-header"}),t("card-elm-content",null,t("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"card-elm"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),e}()),o=function(){function e(){this.className=""}return e.prototype.componentWillLoad=function(){},e.prototype.componentDidLoad=function(){},e.prototype.componentWillUpdate=function(){},e.prototype.componentDidUpdate=function(){},e.prototype.componentDidUnload=function(){},e.prototype.render=function(){return t("div",{class:"card-elm-content "+this.className},t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"card-elm-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"}}},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){}return e.prototype.componentWillLoad=function(){console.log("The component is about to be rendered")},e.prototype.componentDidLoad=function(){console.log("The component has been rendered")},e.prototype.componentWillUpdate=function(){console.log("The component will update")},e.prototype.componentDidUpdate=function(){console.log("The component did update")},e.prototype.componentDidUnload=function(){console.log("The view has been removed from the DOM")},e.prototype.render=function(){return t("div",{class:"card-elm-header "+this.className},t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"card-elm-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"}}},enumerable:!0,configurable:!0}),e}();e.CardElm=n,e.CardElmContent=o,e.CardElmHeader=r,Object.defineProperty(e,"__esModule",{value:!0})});